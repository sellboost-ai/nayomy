---
name: "ai-act-readiness"
description_en: "/cs:ai-act-readiness <system> — EU AI Act 6-question forcing interrogation. Use during AI-system intake, before EU deployment, or during annual compliance refresh as Article 113 obligations phase in (2025-02-02 / 2025-08-02 / 2026-08-02 / 2027-08-02)."
description_tr: "/cs:ai-act-readiness <system> — EU AI Kanunu için 6 soruluk zorunlu değerlendirme. AI sistem entegrasyonu sırasında, AB dağıtımından önce veya Article 113 yükümlülükleri devreye girdikçe yıllık uyum kontrollerinde kullanın (2025-02-02 / 2025-08-02 / 2026-08-02 / 2027-08-02)."
category: "Design"
repo: "alirezarezvani/claude-skills"
stars: 18317
url: "https://github.com/alirezarezvani/claude-skills/blob/HEAD/.gemini/skills/ai-act-readiness/SKILL.md"
path: ".gemini/skills/ai-act-readiness/SKILL.md"
is_collection: false
body_length: 6791
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # /cs:ai-act-readiness — AB AI Yasası Hazırlık Kontrol Soruları
  
  **Komut:** `/cs:ai-act-readiness <system>`
  
  AB AI Yasası uyum operatörü, AB'ye dağıtımından önce herhangi bir AI sistemini stres testinden geçirir. AB pazarına yerleştirmeden, uygunluk değerlendirmesinden veya yıllık uyum tazelemesinden önce Madde-alıntılı altı soru.
  
  ## Çalıştırılması Gereken Zamanlar
  
  - AI sistemi giriş incelemesi sırasında (yeni sistem veya önemli değişiklik başına)
  - Bir AI sistemini AB pazarına koymadan önce
  - AB uygunluk beyanını imzalamadan önce (Madde 47)
  - Yıllık uyum tazelemesi sırasında (Madde 113 aşamalı uygulanması yeni yükümlülükler getirir)
  - Kuruluşun rolü değiştiğinde (dağıtıcı Madde 25(1) önemli modifikasyon yoluyla sağlayıcı olur)
  - Eğitim işlem gücü 10^25 FLOP'a yaklaştığında (Madde 51 sistemik risk eşiği)
  
  ## Altı AB AI Yasası Sorusu
  
  ### 1. Madde 5: Bu yasaklanmış bir AI uygulaması mı?
  **Ceza: 35 Milyon EUR'ye kadar veya dünya çapında cironun %7'si.**
  - 8 kategori: bilinçaltı manipülasyon, güvenlik açığının istismarı, sosyal puanlama, tahmine dayalı polislik, hedefsiz yüz kazıma, işyerinde/eğitimde duygusal tanıma, hassas özellikler tarafından biyometrik kategorilendirme, kolluk güçleri tarafından gerçek zamanlı kamu biyometrik kimliği
  - `ai_system_risk_classifier.py` çalıştırın
  - Evet ise → DUR. AB pazarına konamaz. Madde 5(2) muafiyetleri dışında istisnalar yoktur.
  
  ### 2. Madde 6 + Ek III: Bu yüksek risk mi?
  **Ek III yüksek risk tetikler; Madde 6(3) muafiyet koşulludur.**
  - 8 kategori: biyometri, kritik altyapı, eğitim, istihdam, temel hizmetler, kolluk, göç, adalet
  - Muafiyet yalnızca Madde 6(3)(a)-(d) VE gerçek kişilerin profillendirilmesi yoksa geçerlidir
  - Profillendirme muafiyeti geçersiz kılar (Madde 6(3) son cümle)
  - `ai_system_risk_classifier.py` çalıştırın
  
  ### 3. Madde 43: Yüksek risk için Modül A mı Modül H mi?
  **Biyometri → Varsayılan olarak Modül H (bildirilen kuruluş); diğerleri → Uyumlaştırılmış standartlar uygulanırsa Modül A.**
  - `conformity_assessment_planner.py` çalıştırın
  - Modül A (Ek VI): Madde 40 uyumlaştırılmış standartları uygulanırsa uygunluk varsayımı ile iç kontrol
  - Modül H (Ek VII): Biyometri için veya standartlar eksikse tam QMS + bildirilen kuruluş
  - Ek IV teknik dokümantasyon: pazara koymadan önce 8 madde gereklidir
  
  ### 4. Madde 25: Şirketin rolü nedir?
  **Sağlayıcı yükümlülükleri en ağırdır; önemli modifikasyon dağıtıcıyı sağlayıcı haline getirir.**
  - Sağlayıcı (Madde 3(3)): pazara konan; tam Başlık III + Madde 73 raporu
  - Dağıtıcı (Madde 3(4)): Madde 26 yükümlülükleri + kamu sektörü ise Madde 27 FRIA
  - İthalatçı (Madde 3(6)): Madde 23 uygunluk doğrulaması
  - Distribütör (Madde 3(7)): Madde 24 CE işareti doğrulaması
  - Yetkili temsilci (Madde 22): AB dışı sağlayıcılar atamak zorundadır
  - `ai_act_obligation_tracker.py` çalıştırın
  
  ### 5. Madde 50: Şeffaflık yükümlülükleri yerine getirildi mi?
  **2 Ağustos 2025'te yürürlüğe girer.**
  - Madde 50(1): AI etkileşimini gerçek kişilere açıklayın (chatbotlar, sanal ajanlar)
  - Madde 50(2): sentetik içeriği AI tarafından üretilmiş olarak işaretleyin
  - Madde 50(3): duygusal tanımayı / biyometrik kategorilendirmeyi açıklayın (Madde 5 yasaklamaları dışında)
  - Madde 50(4): deepfake'leri (görüntü, ses, video) AI tarafından üretilmiş olarak açıklayın
  
  ### 6. Maddeler 51-55: Bu GPAI mi? Sistemik riski var mı?
  **GPAI'nin paralel yolu vardır; 10^25 FLOP üzerinde sistemik risk.**
  - Madde 3(63): genel amaçlı AI modeli tanımı
  - Madde 51: sistemik-risk varsayımı (≥ 10^25 FLOP eğitim işlem gücü) veya Komisyon ataması
  - Madde 53: tüm GPAI sağlayıcıları — Ek XI teknik dokümanlar, Ek XII aşağı akış bilgisi, telif hakkı politikası, eğitim-veri özeti
  - Madde 55: sistemik-risk GPAI ek yükümlülükleri — model değerlendirmeleri, muhasım testleri, olay raporu, siber güvenlik
  - Madde 54: AB dışı GPAI sağlayıcıları yetkili temsilci atamak zorundadır
  
  ## İş Akışı
  
  ```bash
  # 1. Risk sınıflandırması
  python ra-qm-team/skills/eu-ai-act-specialist/scripts/ai_system_risk_classifier.py systems.json
  
  # 2. Yüksek risk ise: uygunluk değerlendirmesi
  python ra-qm-team/skills/eu-ai-act-specialist/scripts/conformity_assessment_planner.py system.json
  
  # 3. Rol başına yükümlülük matrisi
  python ra-qm-team/skills/eu-ai-act-specialist/scripts/ai_act_obligation_tracker.py roles.json
  
  # 4. Çapraz çerçeve yeniden kullanımı (ISO 42001 vb.)
  python ../../skills/compliance-os/scripts/cross_framework_mapper.py program.json
  ```
  
  ## Çıktı Biçimi
  
  ```markdown
  # AB AI Yasası Hazırlığı: <system>
  **Tarih:** YYYY-MM-DD
  **Madde Alıntıları:** Aşağıdaki her karar belirli Maddeyi alıntılar.
  
  ## Verilen Karar
  [sınıflandır | uygunluk-yolu | yükümlülük-kapsamı | yıllık-tazeleme]
  
  ## Risk Sınıflandırması
  - Tier: prohibited | high_risk | limited_risk | minimal_risk
  - Alıntı: Madde X(Y) + uygunsa Ek Z
  - Mantık: <Madde alıntılı mantık>
  - GPAI: evet/hayır
  - Sistemik-risk GPAI: evet/hayır (Madde 51 10^25 FLOP eşiğine göre)
  
  ## Uygunluk Değerlendirmesi (yüksek risk ise)
  - Modül: A | A_with_caveats | H | sektörel
  - Alıntı: Madde 43 + Ek VI/VII
  - Bildirilen kuruluş gerekli: evet | hayır | isteğe bağlı
  - Ek IV paketi durumu: tamamlanmış | devam ediyor | başlanmamış
  
  ## Yükümlülük Matrisi
  - Toplam yükümlülükler: N
  - Son tarih fazına göre: 2025-02-02=A, 2025-08-02=B, 2026-08-02=C, 2027-08-02=D
  - En yüksek öncelikli karşılanmamış yükümlülük: <Madde + açıklama>
  
  ## Şeffaflık (Madde 50)
  - 50(1) etkileşim açıklaması: evet | hayır
  - 50(2) sentetik içerik işareti: evet | hayır | N/A
  - 50(3) duygusal tanıma açıklaması: evet | hayır | N/A
  - 50(4) deepfake açıklaması: evet | hayır | N/A
  
  ## Çapraz Çerçeve Yeniden Kullanımı
  - ISO 42001 kanıtı Madde 17 QMS için geçerli: evet/hayır
  - ISO 27001 kanıtı Madde 15 siber güvenlik için geçerli: evet/hayır
  - GDPR DPIA, Madde 27 FRIA için kullanılabilir: evet/hayır
  
  ## Karar
  🟢 READY-FOR-EU | 🟡 GAPS-IDENTIFIED | 🔴 NOT-READY | 🚫 PROHIBITED
  
  ## İlk 3 Eylem
  [Sahip + Madde-bağlı son tarih ile 3 somut sonraki adım]
  
  ## Yasal İnceleme Gereklidir
  [Dış avukatlar için işaretlenmiş Madde-düzeyinde belirsizlikler: yeni durumlar, GPAI eşiği anlaşmazlıkları, Madde 5 sınır durumları, Madde 25 önemli-modifikasyon soruları]
  ```
  
  ## Yönlendirme
  
  - `/cs:compliance-readiness` — çok çerçeveli görünüm için (ISO 42001 + GDPR'yle birleştir)
  - `/cs:aims-audit` — ISO 42001 detaylı incelemesi için
  - `/cs:caio-review` — yönetici AI stratejisi kararları için
  - `/cs:gc-review` — yeni durumlu yasal inceleme için (GPAI eşiği, Madde 5 sınırı, önemli-modifikasyon)
  - `/cs:decide` — kararı kaydetmek için
  - `/cs:freeze 30` — AB pazar sunuşu taahhütlerinde (düzenleyici risk)
  
  ## İlgili
  
  - Ajan: [`cs-ai-act-compliance`](../../agents/cs-ai-act-compliance.md)
  - Beceri: [`eu-ai-act-specialist`](../../../ra-qm-team/skills/eu-ai-act-specialist/SKILL.md)
  - Komşu: `../../skills/compliance-os/`, `../aims-audit/`, `../compliance-readiness/`, `../../../ra-qm-team/skills/gdpr-dsgvo-expert/`
  
  ---
  
  **Sürüm:** 1.0.0
---

# /cs:ai-act-readiness — EU AI Act Forcing Questions

**Command:** `/cs:ai-act-readiness <system>`

The EU AI Act compliance operator pressure-tests any AI system before EU deployment. Six Article-cited questions before any EU placement, conformity assessment, or annual compliance refresh.

## When to Run

- During AI-system intake review (per new system or material change)
- Before placing an AI system on the EU market
- Before signing the EU declaration of conformity (Article 47)
- During annual compliance refresh (Article 113 phasing brings new obligations)
- When the organization's role changes (deployer becomes provider via Article 25(1) substantial modification)
- When training compute approaches 10^25 FLOPs (Article 51 systemic-risk threshold)

## The Six EU AI Act Questions

### 1. Article 5: Is this a prohibited AI practice?
**Penalty: up to 35M EUR or 7% worldwide turnover.**
- 8 categories: subliminal manipulation, exploitation of vulnerabilities, social scoring, predictive policing, untargeted facial scraping, emotion recognition in workplace/education, biometric categorisation by sensitive attributes, real-time public biometric ID by law enforcement
- Run `ai_system_risk_classifier.py`
- If yes → STOP. Cannot place on EU market. No exceptions outside Article 5(2) carve-outs.

### 2. Article 6 + Annex III: Is this high-risk?
**Annex III triggers high-risk; Article 6(3) carve-out conditional.**
- 8 categories: biometrics, critical infrastructure, education, employment, essential services, law enforcement, migration, justice
- Carve-out applies only if Article 6(3)(a)-(d) AND no profiling of natural persons
- Profiling overrides carve-out (Article 6(3) last sentence)
- Run `ai_system_risk_classifier.py`

### 3. Article 43: For high-risk, Module A or Module H?
**Biometrics → Module H (notified body) by default; others → Module A if harmonised standards applied.**
- Run `conformity_assessment_planner.py`
- Module A (Annex VI): internal control with presumption of conformity if Article 40 harmonised standards applied
- Module H (Annex VII): full QMS + notified body for biometrics or where standards lacking
- Annex IV technical documentation: 8 items required before placing on market

### 4. Article 25: What role does the company play?
**Provider obligations are heaviest; substantial modification turns deployer into provider.**
- Provider (Article 3(3)): placed on market; full Title III + Article 73 reporting
- Deployer (Article 3(4)): Article 26 obligations + Article 27 FRIA if public sector
- Importer (Article 3(6)): Article 23 verification of conformity
- Distributor (Article 3(7)): Article 24 CE marking verification
- Authorized representative (Article 22): non-EU providers must appoint
- Run `ai_act_obligation_tracker.py`

### 5. Article 50: Are transparency obligations satisfied?
**In force 2 Aug 2025.**
- Article 50(1): disclose AI interaction to natural persons (chatbots, virtual agents)
- Article 50(2): mark synthetic content as AI-generated
- Article 50(3): disclose emotion recognition / biometric categorisation (outside Article 5 prohibitions)
- Article 50(4): disclose deepfakes (image, audio, video) as AI-generated

### 6. Articles 51-55: Is this a GPAI? Does it have systemic risk?
**GPAI has parallel track; systemic risk above 10^25 FLOPs.**
- Article 3(63): general-purpose AI model definition
- Article 51: systemic-risk presumption (≥ 10^25 FLOPs training compute) or Commission designation
- Article 53: all GPAI providers — Annex XI technical docs, Annex XII downstream info, copyright policy, training-data summary
- Article 55: systemic-risk GPAI additional obligations — model evaluations, adversarial testing, incident reporting, cybersecurity
- Article 54: non-EU GPAI providers must appoint authorized representative

## Workflow

```bash
# 1. Risk classification
python ra-qm-team/skills/eu-ai-act-specialist/scripts/ai_system_risk_classifier.py systems.json

# 2. If high-risk: conformity assessment
python ra-qm-team/skills/eu-ai-act-specialist/scripts/conformity_assessment_planner.py system.json

# 3. Per-role obligation matrix
python ra-qm-team/skills/eu-ai-act-specialist/scripts/ai_act_obligation_tracker.py roles.json

# 4. Cross-framework reuse (ISO 42001 etc.)
python ../../skills/compliance-os/scripts/cross_framework_mapper.py program.json
```

## Output Format

```markdown
# EU AI Act Readiness: <system>
**Date:** YYYY-MM-DD
**Article Citations:** Every verdict below cites the specific Article.

## The Decision Being Made
[classify | conformity-route | obligation-scope | annual-refresh]

## Risk Classification
- Tier: prohibited | high_risk | limited_risk | minimal_risk
- Citation: Article X(Y) + Annex Z if applicable
- Rationale: <Article-cited rationale>
- GPAI: yes/no
- Systemic-risk GPAI: yes/no (per Article 51 10^25 FLOPs threshold)

## Conformity Assessment (if high-risk)
- Module: A | A_with_caveats | H | sectoral
- Citation: Article 43 + Annex VI/VII
- Notified body required: yes | no | optional
- Annex IV pack status: complete | in-progress | not-started

## Obligation Matrix
- Total obligations: N
- By deadline phase: 2025-02-02=A, 2025-08-02=B, 2026-08-02=C, 2027-08-02=D
- Highest-priority unmet obligation: <Article + description>

## Transparency (Article 50)
- 50(1) interaction disclosure: yes | no
- 50(2) synthetic content marking: yes | no | NA
- 50(3) emotion recognition disclosure: yes | no | NA
- 50(4) deepfake disclosure: yes | no | NA

## Cross-Framework Reuse
- ISO 42001 evidence applicable to Article 17 QMS: yes/no
- ISO 27001 evidence applicable to Article 15 cybersecurity: yes/no
- GDPR DPIA usable for Article 27 FRIA: yes/no

## Verdict
🟢 READY-FOR-EU | 🟡 GAPS-IDENTIFIED | 🔴 NOT-READY | 🚫 PROHIBITED

## Top 3 Actions
[3 concrete next steps with owner + Article-tied deadline]

## Legal Review Required
[Article-level ambiguities flagged for outside counsel: novel cases, GPAI threshold disputes, Article 5 boundary cases, Article 25 substantial-modification questions]
```

## Routing

- `/cs:compliance-readiness` — for multi-framework view (combine with ISO 42001 + GDPR)
- `/cs:aims-audit` — for ISO 42001 deep-dive
- `/cs:caio-review` — for executive AI strategy decisions
- `/cs:gc-review` — for novel-case legal review (GPAI threshold, Article 5 boundary, substantial-modification)
- `/cs:decide` — to log the verdict
- `/cs:freeze 30` — on EU launch commitments (regulatory exposure)

## Related

- Agent: [`cs-ai-act-compliance`](../../agents/cs-ai-act-compliance.md)
- Skill: [`eu-ai-act-specialist`](../../../ra-qm-team/skills/eu-ai-act-specialist/SKILL.md)
- Adjacent: `../../skills/compliance-os/`, `../aims-audit/`, `../compliance-readiness/`, `../../../ra-qm-team/skills/gdpr-dsgvo-expert/`

---

**Version:** 1.0.0
