---
name: "eu-ai-act-specialist"
description_en: "EU AI Act (Regulation (EU) 2024/1689) operational compliance for compliance teams. Three Article-level decisions: (1) What's the risk tier of this AI system — prohibited (Art. 5), high-risk (Art. 6 + Annex III), limited-risk (Art. 50), or minimal-risk? (2) For high-risk systems, what's the Article 43 conformity assessment route (Module A internal control vs Module H full QMS + notified body) and w"
description_tr: "EU AI Act (Regulation (EU) 2024/1689) uyum sağlama için compliance ekiplerine yönelik operasyonel çözüm. Üç Madde seviyesi karar: (1) Bu AI sisteminin risk seviyesi nedir — yasak (Mad. 5), yüksek risk (Mad. 6 + Annex III), sınırlı risk (Mad. 50) veya minimal risk? (2) Yüksek riskli sistemler için Article 43 uyum değerlendirme yolu nedir (Modül A iç kontrol vs Modül H tam QMS + notified body) ve..."
category: "Design"
repo: "alirezarezvani/claude-skills"
stars: 18642
url: "https://github.com/alirezarezvani/claude-skills/blob/HEAD/.gemini/skills/eu-ai-act-specialist/SKILL.md"
path: ".gemini/skills/eu-ai-act-specialist/SKILL.md"
is_collection: false
body_length: 13711
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # AB AI Yasası Uyum Uzmanı
  
  Regulation (EU) 2024/1689 için makale-alıntılı operasyonel beceri. **Üç karar, yönetici AI stratejisi yok:**
  
  1. **Bu AI sistemi hangi seviyededir?** — yasaklı (Madde 5) / yüksek riskli (Madde 6 + Ek III) / sınırlı riskli şeffaflık (Madde 50) / minimal risk
  2. **Yüksek riskli sistemler için uygunluk değerlendirme yolu + belgelendirme paketi nedir?** — Madde 43 Modül A vs Modül H + Ek IV teknik belgeler
  3. **Organizasyonel role göre, yükümlülükler nelerdir?** — sağlayıcı / dağıtıcı / ithalatçı / distribütör / yetkili temsilci matrisi Madde 16, 22, 25, 26 per
  
  Bu beceri **genel-ai-müdürü-danışmanı değildir**. CAIO AI özelliğini sevk edip etmeyeceğine karar verir ve iş riskini kabul eder. Bu beceri, "bunu sevk edeceğiz" seçeneğini Madde-uyumlu yapaylara dönüştüren uygunluk işini yönetir.
  
  Bu beceri **yasal bir yedek değildir**. Yönetmelik bağlayıcı düzenlemedir. Yeni durumlar için (Bu bir GPAI modeli mi? Madde 6(2) muafiyeti uygulanır mı? Bir temel modelin ince-ayarlanması "maddi değişiklik" mi?), nitelikli dış hukuk müşavirliğine başvurun. Beceri Madde + Ekleri alıntılar ve Komisyon/EDPB yayınlanan yorumlarını kullanır ancak bağlayıcı hukuki görüş sağlamaz.
  
  Bu beceri **GDPR değildir**. Birçok AI sistemi ayrıca GDPR'yi tetikler (eğitim verileri, çıktı işleme). DPIA + yasal dayanak çalışması için `ra-qm-team/skills/gdpr-dsgvo-expert/` bakın. Yönetmelikler etkileşim kurar (Kıtas 10, yüksek riskli eğitim verileri için Madde 10).
  
  ## Anahtar Kelimeler
  
  AB AI Yasası, AB AI Yönetmeliği, Yönetmelik 2024/1689, AI Yasası, AI yönetmeliği Avrupa, yüksek riskli AI, yasaklı AI, Madde 5 AI Yasası, Madde 6 AI Yasası, Madde 9 AI Yasası, Madde 50 AI Yasası, Ek III, Ek IV, uygunluk değerlendirmesi, CE işareti AI, bildirilmiş kuruluş AI, Modül A, Modül H, teknik belgeler AI, pazar sonrası izleme AI, temel haklar etki değerlendirmesi, FRIA, GPAI, genel amaçlı AI modeli, sistematik risk GPAI, AI Ofisi, ENISA AI, EDPB AI, AI Yasası zaman çizelgesi, AI Yasası cezaları, AB AI Yasası sağlayıcı, AB AI Yasası dağıtıcı, AB AI Yasası ithalatçı, AB AI Yasası distribütör, AB AI Yasası para cezaları, AI okuryazarlığı
  
  ## Hızlı Başlangıç
  
  ```bash
  # Karar A: Yasaya göre bir AI sistemini sınıflandırın
  python scripts/ai_system_risk_classifier.py                       # gömülü 5-sistem örneği
  python scripts/ai_system_risk_classifier.py path/to/systems.json
  
  # Karar B: Yüksek riskli bir sistem için uygunluk değerlendirme planı
  python scripts/conformity_assessment_planner.py                   # gömülü yüksek-risk örneği
  python scripts/conformity_assessment_planner.py path/to/system.json
  
  # Karar C: Organizasyonel role göre yükümlülük izleyici
  python scripts/ai_act_obligation_tracker.py                       # gömülü örnek (sağlayıcı + dağıtıcı)
  python scripts/ai_act_obligation_tracker.py path/to/roles.json
  ```
  
  ## Ana Sorular (bunları önce sorun)
  
  - **Bu AI sistemi Madde 5'e (yasaklı uygulamalar) giriyor mu?** Sosyal puanlama, işyeri/eğitimde duygu tanıma, manipülatif subliminal teknikler, kamuya açık gerçek zamanlı biyometrik kimlik — bunlardan herhangi biri tamamen yasaktır.
  - **Ek III'e (yüksek riskli kategoriler) giriyor mu?** 8 kategori: biyometri, kritik altyapı, eğitim, istihdam, temel hizmetler, kolluk kuvvetleri, göç, adalet. Ek III'ü tetiklemek Madde 6(2)'yi tetikler — Madde 6(3) muafiyetleri uygulanmadığı sürece.
  - **Şirket hangi organizasyonel rolü oynar?** Sağlayıcı (pazara sunulan), dağıtıcı (kendi otoritesi altında kullanılan), ithalatçı (üçüncü ülke sistemini AB pazarına sunan), distribütör (tedarik zincirinde kullanılabilir hale getiren). Birçok şirket eşzamanlı olarak BOTH sağlayıcı VE dağıtıcıdır.
  - **Bu genel amaçlı bir AI modeli mi?** GPAI'nin kendi yolu (Maddeler 51–55) vardır ve eğitim hesaplaması 10²⁵ FLOP'dan daha yüksek olan daha katı kuralları (Madde 51 sistematik risk).
  - **Yüksek risk için: Madde 9 risk yönetimi ve Madde 27 FRIA çalıştırdık mı?** Madde 9 yaşam döngüsü risk yönetimidir; Madde 27 kamu sektörü dağıtıcıları + temel hizmetler için Temel Haklar Etki Değerlendirmesidir.
  - **Madde 43'e göre uygunluk değerlendirme Modülü nedir?** Modül A (iç kontrol, çoğu Ek III sistemi için mümkün) vs Modül H (tam QMS + bildirilmiş kuruluş, biyometri + bazen diğerleri için gerekli).
  
  ## Temel Sorumluluklar
  
  ### 1. AI Sistemi Risk Sınıflandırması
  
  **Çerçeve:** Yönetmelik risk tabanlı bir yaklaşım alır (Kıtas 26). Her AI sistemi tam olarak dört seviyeden birine girer:
  
  | Seviye | Kaynak | Örnekler | Yükümlülükler |
  |---|---|---|---|
  | **Yasaklı** | Madde 5 | Sosyal puanlama; işyeri/eğitimde duygu tanıma; subliminal manipülasyon; kolluk kuvvetleri tarafından kamuya açık gerçek zamanlı biyometri (dar muafiyetler hariç) | Pazara sunulamaz veya kullanılamaz (cezalar EUR 35M'ye kadar / %7 ciroya kadar) |
  | **Yüksek riskli** | Madde 6 + Ek III; Madde 6(1) + Ek I | CV-tarama, kredi puanlama, biyometrik kategorileştirme, düzenlenmiş ürünlerin güvenlik bileşenleri | Maddeler 8–17 (sağlayıcı) + Madde 26 (dağıtıcı); uygunluk değerlendirmesi; CE işareti |
  | **Sınırlı riskli (şeffaflık)** | Madde 50 | Sohbet botları, deepfake'ler, Madde 5 bağlamları dışında duygu tanıma | Doğal kişilere karşı şeffaflık açıklamaları |
  | **Minimal risk** | Varsayılan | Spam filtreleri, video oyunu AI'ı, envanter tahmin edicileri | Yönetmeliğin altında hiçbiri (gönüllü davranış kuralları, Madde 95) |
  
  **Kritik muafiyetler (Madde 6(3)):** bir Ek III sistemi (a) dar bir prosedürel görev gerçekleştiriyorsa, (b) önceden tamamlanmış insan faaliyetinin sonucunu iyileştiriyorsa, (c) karar verme modellerini tespit ediyorsa ancak insan değerlendirmesini değiştirmiyorsa, (d) hazırlayıcı bir görevi gerçekleştiriyorsa yüksek riskli DEĞİLDİR. Uyarı: doğal kişilerin profillemesi, muafiyetler ne olursa olsun her zaman Ek III yüksek risklidir.
  
  Sistem özelliklerini kullanarak `ai_system_risk_classifier.py` çalıştırın. Araç ilk olarak Madde 5 yasaklarını kontrol eder, ardından Ek III kategorilerini, ardından Madde 6(3) muafiyetlerini, ardından Madde 50 şeffaflığını, ardından minimal risk varsayılanını.
  
  Madde-Madde tam izlenişi için `references/eu_ai_act_titles.md` bakın.
  
  ### 2. Uygunluk Değerlendirmesi + Ek IV Teknik Belgeler
  
  **Çerçeve (Madde 43 + Ek VI/VII):** yüksek riskli AI sistemleri için, sağlayıcı pazara sunmadan önce uygunluğu göstermelidir. İki yolu:
  
  - **Modül A — İç kontrol** (Ek VI): sağlayıcı gerekliliklere karşı kendi kendine değerlendirir. Sağlayıcının uyumlu standartları uyguladığı çoğu Ek III sistemi için geçerlidir.
  - **Modül H — Tam kalite yönetim sistemi + teknik belgeler** (Ek VII): bildirilmiş kuruluş katılımı. Biyometri sistemleri (Madde 43(1)) için gereklidir.
  
  **Ek IV başına gerekli yapıtlar — Teknik Belgeler:**
  
  1. AI sisteminin genel açıklaması (amaçlanan kullanım, tanımlama, sürüm)
  2. Sistem öğelerinin ayrıntılı açıklaması (mimari, eğitim verisi, doğrulama prosedürleri)
  3. İzleme, işlevsellik ve kontrol hakkında bilgi
  4. Risk yönetim sistemi açıklaması (Madde 9)
  5. Pazara sunulduktan sonra değişikliklerin açıklaması
  6. Uygulanan uyumlu standartların listesi (veya alternatif)
  7. AB uygunluk beyanı (Madde 47)
  8. Pazar sonrası izleme sistemi açıklaması (Madde 72)
  
  Modülü seçmek ve belirli bir yüksek riskli sistem için Ek IV kontrol listesini oluşturmak için `conformity_assessment_planner.py` çalıştırın.
  
  Hangi sistemlerin hangi uygunluk yolunu gerektirir? için `references/high_risk_systems_annex_iii.md` bakın.
  
  ### 3. Role-Başına Yükümlülük İzleyici
  
  **Çerçeve (Maddeler 16, 22, 23, 24, 25, 26):** Yönetmelik sağlayıcı yükümlülüklerini (çoğunluk) aşağı akış aktörü yükümlülüklerinden (dağıtıcı, ithalatçı, distribütör, yetkili temsilci) ayırır. Tek bir şirket aynı anda birden fazla rolü oynayabilir.
  
  | Rol | Birincil Maddeler | Temel yükümlülükler |
  |---|---|---|
  | **Sağlayıcı** (Madde 3(3)) | 8–17, 47, 49, 72 | Uygunluk değerlendirmesi; CE işareti; risk yönetimi; veri yönetişimi; teknik belgeler; pazar sonrası izleme; ciddi olay raporlaması (Madde 73) |
  | **Dağıtıcı** (Madde 3(4)) | 26 | Talimatlara göre kullanım; insan gözetimi; giriş veri kalitesi; kayıt tutma (Madde 19); işçileri bilgilendirme (Madde 26(7)); FRIA uygulanabilir ise (Madde 27) |
  | **İthalatçı** (Madde 3(6)) | 23 | Uygunluğu doğrulama; iliştirilmiş CE işareti; teknik belgeler mevcudiyeti |
  | **Distribütör** (Madde 3(7)) | 24 | CE işareti + belgeler kullanılabilir hale gelmeden önce |
  | **Yetkili temsilci** (Madde 22) | 22 | AB dışı sağlayıcılar birini atamak zorundadır; temsilci sağlayıcı yükümlülüklerinden sorumlu |
  
  **Önemli:** Madde 25'e göre, yüksek riskli bir AI sistemini maddi olarak değiştiren veya kendi adı altında pazara sunan bir dağıtıcı, **sağlayıcı** haline gelir ve sağlayıcı yükümlülüklerini miras alır.
  
  Rol matrisi JSON ile yükümlülük izleyicisini üretmek için `ai_act_obligation_tracker.py` çalıştırın.
  
  GPAI Maddeler 51–55 yolu için `references/gpai_obligations.md` bakın.
  
  ## İş Akışları
  
  ### İş Akışı 1: AI Sistemi Alım İncelemesi (sistem başına, ~2 saat)
  **Amaç:** sınıflandır, yükümlülükleri tanımla, uygunluk işini kapsamlandır.
  
  ```bash
  # 1. Sistem özelliklerini belgele: amaç, kullanıcılar, veriler, otonomi, dağıtım bağlamı
  # 2. Sınıflandırıcıyı çalıştır
  python scripts/ai_system_risk_classifier.py systems.json
  # 3. Yüksek riskli ise: planlayıcı çalıştır
  python scripts/conformity_assessment_planner.py system.json
  # 4. Oyuncu yapılan org rollerini tanımla (sağlayıcı / dağıtıcı / her ikisi)
  python scripts/ai_act_obligation_tracker.py roles.json
  # 5. Kişisel veriler varsa GDPR DPIA ile çapraz kontrol (gdpr-dsgvo-expert)
  # 6. ISO 42001 AIMS kanıtı ile çapraz kontrol (compliance-team-iso42001)
  # 7. Çıktı: sınıflandırma notu + uygunluk planı + yükümlülük listesi
  ```
  
  ### İş Akışı 2: Ek IV Teknik Belgeler Oluşturma (yüksek riskli sistem başına, 2–4 hafta)
  **Amaç:** uygunluk değerlendirmesinden önce Ek IV paketini toplayın.
  
  ```bash
  # 1. Denetim listesini almak için uygunluk değerlendirme planlayıcısı çalıştır
  python scripts/conformity_assessment_planner.py system.json
  # 2. Toplayın: sistem açıklaması, mimari, eğitim verileri, doğrulama, risk yönetimi
  # 3. Ek IV öğelerini tatmin ettiği yer ISO 42001 kanıtına referans verin
  # 4. Güvenlik kontrolleri için ISO 27001 kanıtına referans verin
  # 5. Madde 9 risk yönetimi yaşam döngüsü çalıştır
  # 6. AB uygunluk beyanını imzala (Madde 47) DEĞERLENDİRME geçtikten SONRA
  # 7. CE işareti ekle (Madde 48)
  # 8. AB veritabanında kayıt ol (Madde 71) — yüksek riskli Ek III sistemleri
  ```
  
  ### İş Akışı 3: Dağıtım Öncesi Yükümlülük Denetimi (sistem başına, başlatmadan önce)
  **Amaç:** AB yerleştirmesinden önce tüm etkin yükümlülüklerin yerinde olduğunu doğrulayın.
  
  ```bash
  # 1. Sınıflandırma hala doğru mu doğrulayın (sistem değişti ise sınıflandırıcıyı yeniden çalıştır)
  # 2. Uygunluk değerlendirmesi tamamlandı mı doğrulayın (yüksek riskli ise)
  # 3. Şeffaflık gereklilikleri doğrulayın (Madde 50) — sohbet botları, deepfake'ler, duygu tespiti için
  # 4. Pazar sonrası izleme sistemi doğrulayın (Madde 72) canlı mı
  # 5. Ciddi olay raporlama prosedürü doğrulayın (Madde 73) belgelenmiş mi
  # 6. Dağıtıcılar için: FRIA yapılmış mı (Madde 27, uygulanabilir ise); işçiler bilgilendirilmiş mi (Madde 26(7))
  # 7. GPAI için: Madde 51-55 yükümlülükleri karşılanmış mı uygulanabilir ise
  ```
  
  ### İş Akışı 4: Yıllık Uyum Tazelemesi (organizasyon başına, yıllık)
  **Amaç:** Yönetmeliğin aşamalandırılması sırasında sınıflandırmaları + yükümlülükleri yeniden doğrulayın.
  
  1. AB pazarında veya planlandığında tüm AI sistemlerini listele
  2. Her biri için sınıflandırıcı çalıştır — Madde 5 yasaklı listesi delege edilen yasalar aracılığıyla genişleyebilir
  3. Yükümlülük izleyicisi çalıştır — son tarihler Başlık III aşamalandırması sırasında değişir (2025 → 2026 → 2027)
  4. Her yüksek riskli sistem için: pazar sonrası izleme veri akışını + ciddi olay raporlama kapasitesini doğrulayın
  5. Ek IV teknik belgelerini Madde 11 devam eden gereklilik başına güncelle
  6. Her ikisi de çalışıyorsa ISO 42001 yönetim incelemesi ile eşleştir (Kloz 9.3)
  
  ## Çıktı Standartları
  
  ```
  **Alt Çizgi:** [bir cümle — sınıflandırma + en önemli yükümlülük]
  **Madde Alıntısı:** [Madde + paragraf numarası; alıntı olmadan parafraz yapma]
  **Karar:** [şunlardan biri: sınıflandır | uygunluk-yolu | yükümlülük-kapsam]
  **Kanıt:** [Madde + Ek referansları; sınıflandırma güveni]
  **Nasıl Hareket Edilir:** [aşamalandırmaya hizalanan mal sahibi + son tarih ile 3 somut sonraki adım]
  **Senin Kararın:** [uyum müdürü veya hukuk müşaviri için çağrı — risk-sınıf anlaşmazlıkları, yeni durumlar, GPAI eşik belirlenmesi]
  ```
  
  ## Bitişik Beceriler
  
  - `ra-qm-team/skills/gdpr-dsgvo-expert/` — GDPR DPIA + yasal dayanak (çoğu AI sistemi ayrıca GDPR'yi tetikler)
  - `ra-qm-team/compliance-team-iso42001/` — ISO 42001 AIMS (sağlayıcılar için Madde 17 QMS'nin parçalarını tatmin eden gönüllü yönetim sistemi)
  - `ra-qm-team/skills/information-security-manager-iso27001/` — siber güvenlik için ISO 27001 (Madde 15 gereklilikleri)
  - `ra-qm-team/skills/risk-management-specialist/` — ISO 14971 risk yönetimi (Madde 6(1) altında güvenlik-bileşeni AI için alıntılanan)
  - `ra-qm-team/skills/mdr-745-specialist/` — MDR 2017/745 (tıbbi cihaz AI örtüşmesi)
  - `compliance-os/` — Çok-çerçeve programları için Meta-orkestratör
  - `c-level-advisor/chief-ai-officer-advisor/` — Yönetici AI stratejisi
  
  ## Referanslar
  
  - [eu_ai_act_titles.md](references/eu_ai_act_titles.md) — Başlıklar I–XII Madde-Madde izlenişi dağıtıcı/sağlayıcı/ithalatçı/distribütör yükümlülük dökümü ile
  - [high_risk_systems_annex_iii.md](references/high_risk_systems_annex_iii.md) — Ek III 8 kategorisi ayrıntılı + Madde 6(2)–(3) etkileşimi + muafiyet testi
  - [gpai_obligations.md](references/gpai_obligations.md) — Maddeler 51–55 GPAI yolu + sistematik-risk eşiği + şeffaflık kuralları + Davranış Kuralları durumu
  - [cross_framework_mapping_ai_act.md](references/cross_framework_mapping_ai_act.md) — AI Yasası ↔ ISO 42001 ↔ NIST AI RMF ↔ GDPR kontrol-seviye eşlemesi
  
  ---
  
  **Sürüm:** 1.0.0
  **Durum:** Üretime Hazır
---

# EU AI Act Compliance Specialist

Article-cited operational skill for Regulation (EU) 2024/1689. **Three decisions, no executive AI strategy:**

1. **What tier is this AI system?** — prohibited (Article 5) / high-risk (Article 6 + Annex III) / limited-risk transparency (Article 50) / minimal-risk
2. **For high-risk systems, what's the conformity assessment route + documentation pack?** — Article 43 Module A vs Module H + Annex IV technical documentation
3. **Per organizational role, what are the obligations?** — provider / deployer / importer / distributor / authorized representative matrix per Article 16, 22, 25, 26

This skill is **NOT chief-ai-officer-advisor**. CAIO decides whether to ship the AI feature at all and accepts business risk. This skill operates the conformity work that turns "we'll ship it" into Article-compliant artefacts.

This skill is **NOT a legal substitute**. The Act is binding regulation. For novel cases (Is this a GPAI model? Does Article 6(2) carve-out apply? Is fine-tuning a foundation model "substantial modification"?), engage qualified outside counsel. The skill cites Articles + Annexes and uses Commission/EDPB published interpretation but does not provide binding legal opinion.

This skill is **NOT GDPR**. Many AI systems also trigger GDPR (training data, output processing). See `ra-qm-team/skills/gdpr-dsgvo-expert/` for DPIA + lawful basis work. The Acts interact (Recital 10, Article 10 for high-risk training data).

## Keywords

EU AI Act, EU AI Regulation, Regulation 2024/1689, AI Act, AI regulation Europe, high-risk AI, prohibited AI, Article 5 AI Act, Article 6 AI Act, Article 9 AI Act, Article 50 AI Act, Annex III, Annex IV, conformity assessment, CE marking AI, notified body AI, Module A, Module H, technical documentation AI, post-market monitoring AI, fundamental rights impact assessment, FRIA, GPAI, general-purpose AI model, systemic risk GPAI, AI Office, ENISA AI, EDPB AI, AI Act timeline, AI Act penalties, EU AI Act provider, EU AI Act deployer, EU AI Act importer, EU AI Act distributor, EU AI Act fines, AI literacy

## Quick Start

```bash
# Decision A: Classify an AI system per the Act
python scripts/ai_system_risk_classifier.py                       # embedded 5-system sample
python scripts/ai_system_risk_classifier.py path/to/systems.json

# Decision B: Conformity assessment plan for a high-risk system
python scripts/conformity_assessment_planner.py                   # embedded high-risk sample
python scripts/conformity_assessment_planner.py path/to/system.json

# Decision C: Obligation tracker per organizational role
python scripts/ai_act_obligation_tracker.py                       # embedded sample (provider + deployer)
python scripts/ai_act_obligation_tracker.py path/to/roles.json
```

## Key Questions (ask these first)

- **Does this AI system fall under Article 5 (prohibited practices)?** Social scoring, emotion recognition in workplace/education, manipulative subliminal techniques, real-time remote biometric identification in public — any of these are flat-out prohibited.
- **Does it fall under Annex III (high-risk categories)?** 8 categories: biometrics, critical infrastructure, education, employment, essential services, law enforcement, migration, justice. Triggering Annex III triggers Article 6(2) — unless the Article 6(3) carve-outs apply.
- **What organizational role does the company play?** Provider (placed on market), deployer (uses under own authority), importer (places third-country system on EU market), distributor (makes available in supply chain). Many companies are BOTH provider AND deployer simultaneously.
- **Is this a general-purpose AI model?** GPAI has its own track (Articles 51–55) with stricter rules above 10²⁵ FLOPs training compute (Article 51 systemic risk).
- **For high-risk: have we run Article 9 risk management AND Article 27 FRIA?** Article 9 is the lifecycle risk management; Article 27 is the Fundamental Rights Impact Assessment for public-sector deployers + essential services.
- **What's the conformity assessment Module per Article 43?** Module A (internal control, possible for most Annex III systems) vs Module H (full QMS + notified body, required for biometrics + sometimes others).

## Core Responsibilities

### 1. AI System Risk Classification

**The framework:** The Act takes a risk-based approach (Recital 26). Each AI system falls into exactly one of four tiers:

| Tier | Source | Examples | Obligations |
|---|---|---|---|
| **Prohibited** | Article 5 | Social scoring; emotion recognition in workplace/education; subliminal manipulation; real-time public biometrics by law enforcement (with narrow exceptions) | Cannot be placed on market or used (penalties up to EUR 35M / 7% turnover) |
| **High-risk** | Article 6 + Annex III; Article 6(1) + Annex I | CV-screening, credit scoring, biometric categorisation, safety components of regulated products | Articles 8–17 (provider) + Article 26 (deployer); conformity assessment; CE marking |
| **Limited-risk (transparency)** | Article 50 | Chatbots, deepfakes, emotion recognition outside Article 5 contexts | Transparency disclosures to natural persons |
| **Minimal-risk** | Default | Spam filters, video-game AI, inventory forecasters | None under the Act (voluntary codes of conduct, Article 95) |

**Critical carve-outs (Article 6(3)):** an Annex III system is NOT high-risk if it (a) performs a narrow procedural task, (b) improves the result of previously completed human activity, (c) detects decision-making patterns without replacing human assessment, (d) performs a preparatory task. Caveat: profiling of natural persons is always Annex III high-risk regardless of carve-outs.

**Run** `ai_system_risk_classifier.py` with system characteristics. The tool checks Article 5 prohibitions first, then Annex III categories, then Article 6(3) carve-outs, then Article 50 transparency, then minimal-risk default.

See `references/eu_ai_act_titles.md` for the full Article-by-Article walkthrough.

### 2. Conformity Assessment + Annex IV Technical Documentation

**The framework (Article 43 + Annex VI/VII):** for high-risk AI systems, the provider must demonstrate conformity before placing on market. Two routes:

- **Module A — Internal control** (Annex VI): provider self-assesses against the requirements. Applies to most Annex III systems where the provider has implemented harmonised standards.
- **Module H — Full quality management system + technical documentation** (Annex VII): notified body involvement. Required for biometrics systems (Article 43(1)).

**Required artifacts per Annex IV — Technical Documentation:**

1. General description of the AI system (intended purpose, identification, version)
2. Detailed description of system elements (architecture, training data, validation procedures)
3. Information about monitoring, functioning and control
4. Description of risk management system (Article 9)
5. Description of changes after placing on market
6. List of harmonised standards applied (or alternative)
7. EU declaration of conformity (Article 47)
8. Description of the post-market monitoring system (Article 72)

**Run** `conformity_assessment_planner.py` to select the Module and produce the Annex IV checklist for a given high-risk system.

See `references/high_risk_systems_annex_iii.md` for which systems require which conformity route.

### 3. Per-Role Obligation Tracker

**The framework (Articles 16, 22, 23, 24, 25, 26):** the Act distinguishes provider obligations (most) from downstream-actor obligations (deployer, importer, distributor, authorized representative). A single company can play multiple roles simultaneously.

| Role | Primary Articles | Key obligations |
|---|---|---|
| **Provider** (Article 3(3)) | 8–17, 47, 49, 72 | Conformity assessment; CE marking; risk management; data governance; technical documentation; post-market monitoring; serious incident reporting (Article 73) |
| **Deployer** (Article 3(4)) | 26 | Use according to instructions; human oversight; input data quality; record-keeping (Article 19); inform workers (Article 26(7)); FRIA if public-sector/essential-services (Article 27) |
| **Importer** (Article 3(6)) | 23 | Verify conformity; affixed CE marking; technical documentation availability |
| **Distributor** (Article 3(7)) | 24 | Verify CE marking + documentation before making available |
| **Authorized representative** (Article 22) | 22 | Non-EU providers must appoint one; representative liable for provider obligations |

**Important:** under Article 25, a deployer who substantially modifies a high-risk AI system, or places it on the market under their own name, becomes a **provider** and inherits provider obligations.

**Run** `ai_act_obligation_tracker.py` with the roles JSON to produce a deadline-sorted obligation matrix.

See `references/gpai_obligations.md` for the separate GPAI Articles 51–55 track.

## Workflows

### Workflow 1: AI System Intake Review (per system, ~2 hours)
**Goal:** classify, identify obligations, scope the conformity work.

```bash
# 1. Document system characteristics: purpose, users, data, autonomy, deployment context
# 2. Run classifier
python scripts/ai_system_risk_classifier.py systems.json
# 3. If high-risk: run planner
python scripts/conformity_assessment_planner.py system.json
# 4. Identify org roles played (provider / deployer / both)
python scripts/ai_act_obligation_tracker.py roles.json
# 5. Cross-check with GDPR DPIA (gdpr-dsgvo-expert) if personal data
# 6. Cross-check with ISO 42001 AIMS evidence (compliance-team-iso42001)
# 7. Output: classification memo + conformity plan + obligation list
```

### Workflow 2: Annex IV Technical Documentation Build (per high-risk system, 2–4 weeks)
**Goal:** assemble the Annex IV pack before conformity assessment.

```bash
# 1. Run conformity assessment planner to get the checklist
python scripts/conformity_assessment_planner.py system.json
# 2. Assemble: system description, architecture, training data, validation, risk management
# 3. Reference ISO 42001 evidence where it satisfies Annex IV items
# 4. Reference ISO 27001 evidence for security controls
# 5. Run Article 9 risk management lifecycle
# 6. Sign EU declaration of conformity (Article 47) AFTER assessment passes
# 7. Affix CE marking (Article 48)
# 8. Register in EU database (Article 71) — high-risk Annex III systems
```

### Workflow 3: Pre-Deployment Obligation Audit (per system, before launch)
**Goal:** confirm all active obligations are in place before EU placement.

```bash
# 1. Confirm classification still correct (re-run classifier if system changed)
# 2. Confirm conformity assessment completed (if high-risk)
# 3. Confirm transparency requirements (Article 50) — for chatbots, deepfakes, emotion detection
# 4. Confirm post-market monitoring system (Article 72) is live
# 5. Confirm serious-incident reporting procedure (Article 73) is documented
# 6. For deployers: FRIA done (Article 27, if applicable); workers informed (Article 26(7))
# 7. For GPAI: Articles 51-55 obligations met if applicable
```

### Workflow 4: Annual Compliance Refresh (per organization, yearly)
**Goal:** re-verify classifications + obligations as the Act phases in.

1. List all AI systems on or planned for EU market
2. Run classifier for each — Article 5 prohibited list may expand via delegated acts
3. Run obligation tracker — deadlines shift as Title III phases in (2025 → 2026 → 2027)
4. For each high-risk system: verify post-market monitoring data flow + serious incident reporting capacity
5. Update Annex IV technical documentation per Article 11 ongoing requirement
6. Pair with ISO 42001 management review (Clause 9.3) if both operate

## Output Standards

```
**Bottom Line:** [one sentence — classification + most-significant obligation]
**Article Citation:** [Article + paragraph number; do not paraphrase without cite]
**The Decision:** [one of: classify | conformity-route | obligation-scope]
**The Evidence:** [Article + Annex references; classification confidence]
**How to Act:** [3 concrete next steps with owner + deadline aligned to phasing]
**Your Decision:** [the call for compliance officer or legal counsel — risk-class disputes, novel cases, GPAI threshold determinations]
```

## Adjacent Skills

- `ra-qm-team/skills/gdpr-dsgvo-expert/` — GDPR DPIA + lawful basis (most AI systems also trigger GDPR)
- `ra-qm-team/compliance-team-iso42001/` — ISO 42001 AIMS (voluntary management system that satisfies parts of Article 17 QMS for providers)
- `ra-qm-team/skills/information-security-manager-iso27001/` — ISO 27001 for cybersecurity requirements (Article 15)
- `ra-qm-team/skills/risk-management-specialist/` — ISO 14971 risk management (referenced for safety-component AI under Article 6(1))
- `ra-qm-team/skills/mdr-745-specialist/` — MDR 2017/745 (medical-device AI overlap)
- `compliance-os/` — Meta-orchestrator for multi-framework programs
- `c-level-advisor/chief-ai-officer-advisor/` — Executive AI strategy

## References

- [eu_ai_act_titles.md](references/eu_ai_act_titles.md) — Titles I–XII Article-by-Article walkthrough with deployer/provider/importer/distributor obligation breakdown
- [high_risk_systems_annex_iii.md](references/high_risk_systems_annex_iii.md) — Annex III 8 categories detailed + Article 6(2)–(3) interaction + carve-out test
- [gpai_obligations.md](references/gpai_obligations.md) — Articles 51–55 GPAI track + systemic-risk threshold + transparency rules + Code of Practice status
- [cross_framework_mapping_ai_act.md](references/cross_framework_mapping_ai_act.md) — AI Act ↔ ISO 42001 ↔ NIST AI RMF ↔ GDPR control-level mapping

---

**Version:** 1.0.0
**Status:** Production Ready
