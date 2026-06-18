---
name: "dossier"
description_en: "Decision-grade entity research skill — produces a hypothesis-tested dossier on a specific company, person, nonprofit, or government org, not a generic profile. Forcing intake makes the user state their hypothesis upfront (what they already believe and want to verify or disprove) so the dossier tests it rather than confirms it. Output is an editable Word document (.docx) with verdict on the hypothe"
description_tr: "Karar alınabilir düzeyde entity araştırması yapan bir beceri — belirli bir şirket, kişi, kar amacı gütmeyen kuruluş veya devlet kurumu hakkında hipotez-test edilmiş bir dosya oluşturur, genel bir profil değil. Zorunlu giriş, kullanıcıyı önceden hipotezini (ne inandığını ve doğrulamak ya da çürütmek istediğini) belirtmeye zorlayarak, dosya bunu doğrulamak yerine test eder. Çıktı, hipotez hakkında sonuca varılan düzenlenebilir bir Word belgesidir (.docx)."
category: "Document"
repo: "alirezarezvani/claude-skills"
stars: 18402
url: "https://github.com/alirezarezvani/claude-skills/blob/HEAD/.gemini/skills/dossier/SKILL.md"
path: ".gemini/skills/dossier/SKILL.md"
is_collection: false
body_length: 15483
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Dossier — Karar Verme Aşaması Varlık Araştırması
  
  > **Taşınabilirlik:** `WebSearch` + `WebFetch`, Node.js `docx` paketi ve isteğe bağlı `bash_tool` + `curl` (ücretsiz API'lar: SEC EDGAR, GitHub, ProPublica) gerektirir. BYOK MCP'ler (LinkedIn, Crunchbase, Apollo, Pitchbook, SimilarWeb) isteğe bağlı iyileştirmelerdir. Claude Code CLI'de yerel olarak çalışır.
  
  ## Jenerik Olmayan Çerçeveleme — Ayırt Edici Özellik
  
  Bu beceri **hipotez testlemesiyle birlikte karar verme aşaması varlık araştırmasıdır**. "Bana Microsoft hakkında bilgi ver" olmayı **reddeder**. Her çağrı, kullanıcıyı önceden hipotezlerini ortaya koymaya zorlar (S4) böylece dossier onu *test eder* ve doğrulayıp doğrulamaz.
  
  Kullanım durumu şekli:
  
  > "Pazartesi Microsoft'a pitch yapıyorum. Hipotezim: AI harcamalarını birinci taraf Foundry platformunda birleştiriyorlar. Doğrula veya çürüt, ve bulduklarıma bağlı üç konuşma çıkış noktası ver."
  
  **DEĞİL:**
  
  > "Bana Microsoft hakkında bilgi ver."
  
  Zorlayıcı S4 — hipotez sorusu — jenerik olmayan ankardir. Atlarsan dossier Wikipedia özeti üretir.
  
  Kanonik referans için [`references/hypothesis_testing_discipline.md`](references/hypothesis_testing_discipline.md) sayfasına bak.
  
  ## Ajan Bütünlüğü Kuralları (Research-Pack Konvansiyonu)
  
  PR #657 denetimi başına sözcüğü sözcüğüne kilitlenmiştir.
  
  - **Yürütme disiplini.** Sıralı arama çağrıları. WebSearch + WebFetch'in Consensus'tan daha gevşek hız sınırları vardır fakat yine de 1 soru/sn görgü kuralı uygulanır. Bir sonraki çağrıdan önce yanıt alındığını onaylayın.
  - **Kaynak disiplini.** Yalnızca bu oturum içindeki araç çağrılarından döndürülen kaynakları alıntılayın. Wikipedia / eğitim bilgisi `[Arka Plan — alıntı yapmadan önce doğrulayın]` olarak etiketlenir ve birincil bulgular sayısından hariç tutulur.
  - **Üç sayım takibi.** Gönderilen sorgular / alınan kaynaklar / alıntılanan kaynaklar. Artı dossiere özgü **katman başına döküm** (birincil / ikincil / üçüncül). Denetim günlüğünde yüzeylendirilir.
  - **Yeniden deneme politikası.** Başarısızlık → 3s bekle → bir kez daha dene → günlüğe kaydet. 3 ardışık başarısızlıktan sonra: dur, kullanıcıyı uyar.
  - **Kaynak güvenilirlik katmanı.** Her alıntı etiketlenir birincil (resmi, SEC, mahkeme belgeleri) / ikincil (ana akım haber, ticari basın) / üçüncül (bloglar, forumlar). DOCX her bayrakta katmanı yüzeylendirir.
  
  ## Faz 1: Sorgu-Beni Alımı (6 zorlayıcı soru, birer birer)
  
  ### S1 (kök) — Varlık kimliği
  
  > **Varlık kimliği nedir? Tam adı verin ve eğer şirketse web sitesi veya LinkedIn URL'si verin. Kişi ise, LinkedIn URL'si veya benzersiz tanımlayıcı verin (şirket bağlantısı + rol).**
  >
  > *Neden soruyorum:* Belirsizlikten kurtulmak. 47 John Smith var. "Atlas" adında üç şirket var. Araştırmak için spesifik bir varlığa ihtiyacım var.
  
  Kullanıcı sadece bir ad verirse, ikinci bir tanımlayıcı isteyerek devam et. **Belirsiz adlara ilişkin ilerlemeyi reddet.**
  
  ### S2 (S1'e bağlı) — Varlık tipi
  
  > **Bu varlık ne tür? Birini seç: kişi / şirket / kar amacı gütmeyen kuruluş / devlet kurumu / diğer.**
  >
  > *Neden soruyorum:* Farklı kaynak matrisleri geçerlidir. Kişiler için LinkedIn, GitHub, Scholar, haberler kontrol ederim; şirketler için SEC EDGAR (kamu şirketiyse), Crunchbase, haberler, teknoloji kuruluşları için GitHub kontrol ederim; kar amacı gütmeyen kuruluşlar için ProPublica'daki Form 990'ları kontrol ederim.
  
  Zorlayıcı seçim. "Diğer" tek satırlık açıklama gerektirir.
  
  ### S3 (S2'ye bağlı) — Amaç
  
  > **Neye hazırlanıyorsun? Birini seç:**
  >
  > 1. Satış toplantısı / ortaklık pitch'i
  > 2. Yatırım durum tespiti
  > 3. Satın alma durum tespiti
  > 4. Gazeteciliğe / durum tespitine
  > 5. İş mülakatı hazırlığı
  > 6. Rekabet istihbaratı
  > 7. Kişisel kontrol (tarih, işe alım, iş ortağı)
  > 8. Diğer (belirt)
  >
  > *Neden soruyorum:* Amaç açıyı, derinliği ve kırmızı bayrak hassasiyetini belirler. Satış hazırlığı konuşma çıkış noktaları gerektirir. Yatırım durum tespiti traction sinyalleri gerektirir. Kişisel kontrol dikkatli hassasiyet sınırları gerektirir.
  
  ### S4 (S3'e bağlı) — **Hipotez — ZORUNLU**
  
  > **Önceden hipotezin nedir? Bu varlık hakkında zaten ne inanıyorsun ve doğrulamak ya da çürütmek istediğin şey nedir?**
  >
  > *Neden soruyorum:* Bu kritik sorudur. Zaten düşündüğün şeyi sadece doğrulayan bir dossier değersizdir. Hipotezini önceden belirterek, onu *çürütecek* kanıtları ve destekleyecek kanıtları arayabilir ve gerçekten kullanabileceğin bir sonuç verebilirim.
  >
  > Örnekler:
  > - "Microsoft AI harcamalarını birinci taraf Foundry'de birleştiriyor inanıyorum. Doğrula veya çürüt."
  > - "CEO'nun fazla başında olduğunu düşünüyorum — çok TAM konuşması, traction yok. Test et."
  > - "Bu kar amacı gütmeyen kuruluşun genel giderleri şüpheli olduğuna inanıyorum. 990'ları kontrol et."
  > - "Bu kişi CTO rolünü üstlenmek için yeterince teknik olduğunu düşünüyorum. Doğrula."
  
  **ZORUNLU.** Kullanıcı "Birinin yok" derse, **bir kez** ters çevir: "O zaman tahmin et. Daha sonra güncelleyebileceğin bir konumu kabul et. Dossier test etmek için hipotezin olması gerekir, yoksa jenerik bir profil ve sana karar vermekte yardımcı olmaz."
  
  Hala reddedilirse: örtülü hipotez "bulabileceğim en şaşırtıcı şey nedir?" ile geri dön ve **denetim günlüğünde fallback'i bayrakla.**
  
  Bu soru **jenerik olmayan ankardir**. Atlarsan beceri Wikipedia özeti haline gelir.
  
  ### S5 (S3'e bağlı) — Derinlik
  
  > **Zaman ufku: 5 dakikalık özet mi yoksa 15 dakikalık karar verme aşaması dossier mi?**
  >
  > *Neden soruyorum:* Özet modu ~10 aramayla sınırlıdır ve ağ + itibar geçişlerini atlar. Karar verme aşaması her bölümde daha derinde gider. Bu karara ne kadar yatırımın var olduğuna göre seç.
  
  Zorlayıcı seçim.
  
  ### S6 (yalnızca S3 ∈ {gazeteciliğe, kişisel kontrol} ise sorulur) — Hassasiyetler
  
  > **Hariç tutulacak hassas bir şey var mı? Örneğin, kişisel tıbbi, aile ayrıntıları, siyasi tarih veya kapalı konular?**
  >
  > *Neden soruyorum:* Bazı araştırma bağlamlarında etik kısıtlamalar vardır. Yüzeylendir olacağı şeyden daha iyi bilmek isterdim.
  
  Satış/yatırım/satın alma/rekabet istihbaratı için atla (düşük hassasiyet); gazeteciliğe/kişisel kontrol için sor (yüksek hassasiyet).
  
  **Durdurma koşulu:** S6'dan sonra (veya daha erken bağımlılık atlamalarıyla), taahhüt et ve Faz 2'ye başla. Faz 2 başladıktan sonra asla alımı yeniden aç.
  
  ## Faz 2: Varlık Belirsizliği Giderme
  
  Faz 3'ten önce varlığı spesifik bir varlığa çöz:
  
  - Kişiler için: LinkedIn URL'sini onaylayın VEYA (işveren + rol + şehir)
  - Şirketler için: domain'i onaylayın VEYA (yasal isim + kuruluş yargı alanı)
  - Kar amacı gütmeyen kuruluşlar için: EIN'i onaylayın VEYA (yasal isim + devlet)
  - Devlet kurumları için: resmi .gov URL'sini onaylayın
  
  S1 geri bildirimi sonrasında hala belirsiz ise: **dur ve belirsizliği gidertici tanımlayıcılarla S1'i yeniden sor.** İlerlemeyi reddet.
  
  ## Faz 3: Kaynak Matrisi Seçimi
  
  S2 varlık tipi tarafından yönlendirilir. Tam kanonik için [`references/subject_type_source_matrix.md`](references/subject_type_source_matrix.md) sayfasına bak.
  
  ### Kişi
  
  - LinkedIn (manual fetch veya LinkedIn MCP BYOK ise)
  - Kişisel web sitesi
  - Twitter/X (hız sınırlı; zarif degrade)
  - GitHub (teknik varlık ise)
  - Google Scholar (akademik ise)
  - Haberler (WebSearch + WebFetch)
  - Konferans konuşması transkriptleri, podcast'ler (WebSearch)
  
  ### Şirket
  
  - Resmi web sitesi (hakkında, liderlik, haberler, kariyer)
  - SEC EDGAR (ücretsiz API; 10-K, 10-Q, 8-K kamu şirketleri için)
  - Crunchbase ücretsiz katmanı (veya Crunchbase MCP BYOK ise)
  - Haberler (WebSearch + WebFetch)
  - GitHub (teknoloji kuruluşları için)
  - Glassdoor + Comparably (duygu; kaşıma engellenirse zarif degrade)
  - LinkedIn şirket sayfası
  
  ### Kar Amacı Gütmeyen Kuruluş
  
  - ProPublica Kar Amacı Gütmeyen Kuruluş Gezgini (ücretsiz; Form 990'lar)
  - Resmi web sitesi
  - Haberler
  - GuideStar (erişilebilir ise)
  
  ### Devlet Kurumu
  
  - Resmi .gov siteleri
  - Haberler
  - ProPublica (federal ajanslar için)
  
  Ödenen MCP bağlıysa (Apollo, Pitchbook, SimilarWeb), kullan ama bulguları **BYOK-kaynaklı** olarak denetim günlüğünde işaretle.
  
  ## Faz 4: Hipotez Odaklı Arama
  
  Her Faz 4 araması sınıflandırılmalıdır:
  
  - **Destekleyici kanıt** (hipotezi doğrular), VEYA
  - **Çürütücü kanıt** (hipotezi çürütecek)
  
  **≥%30 arama bütçesi çürütücü sorgulara ayrılmıştır.** `scripts/disconfirming_evidence_balance.py` aracılığıyla uygulanır.
  
  "Microsoft AI harcamalarını Foundry'de birleştiriyor" hipotezi örneği:
  
  - **Destekleyici:** "Microsoft Foundry benimseme 2026", "Microsoft AI altyapısı birleştirme"
  - **Çürütücü:** "Microsoft OpenAI anlaşması yeniden müzakere", "Microsoft AI satıcı çeşitlendirme", "Microsoft üçüncü taraf model ortaklıkları 2026"
  
  Bu dossier'ı **karar verme aşaması** değil doğrulama önyargılı haline getirir.
  
  Her arama için:
  - `citation_tracker.py` aracılığıyla sınıflandırmayla birlikte kaydet (destekleyici / çürütücü)
  - `source_tier_classifier.py` aracılığıyla her sonuç URL'sine kaynak katmanı uygula
  
  ## Faz 5: 12 Aylık Aktivite Zaman Çizelgesi
  
  Aktivite zaman çizelgesi için varsayılan 12 aylık pencere; temeli için daha derinde.
  
  Kategoriler:
  - Haberler (satın almalar, işe alımlar, ayrılışlar, ürün lansman)
  - Fonlama turları / finansal olaylar
  - Tartışmalar / yasal olaylar
  - Kamu açıklamaları / strateji kaymalar
  
  Ters kronolojik. Her giriş köprülü + katmanlanmış.
  
  ## Faz 6: Ağ + İtibar Sinyalleri
  
  ### Ağ
  
  - **Şirketler:** yatırımcılar (içeri/dışarı), müşteriler (adlandırılmış), ortaklar
  - **Kişiler:** kurucu ortaklar, danışmanlar, mentorlar, işverenler, yönetim kurulu rolleri
  - **Kar amacı gütmeyen kuruluşlar:** işverenler, yönetim kurulu, liderlik
  
  5-10 giriş, **hipotezle alakalılık** tarafından sıralanmış.
  
  ### İtibar
  
  - Haberlerden duygu (son 12 ay)
  - Şirketler için Glassdoor (genel derecelendirme + 3 temsilci yorum)
  - Kişiler için akran sözü
  - Uyarı: itibar verisi gürültülüdür; katmanlı tutun
  
  ## Faz 7: Kırmızı Bayrak Geçişi
  
  Yüzeylendir fakat dramatikleştirme:
  
  - Davalar (mahkeme belgeleri → birincil katman)
  - Düzenleyici işlemler (SEC, DOJ, ajans işlemleri → birincil)
  - Sıradan ayrılışlar (90 gün içinde kilit personel çıkışları)
  - Finansal sinyaller (10-K'lerdeki devam endişesi notları → birincil)
  - İtibar saldırıları (süregelen olumsuz kapsama → ikincil)
  
  **Her bayrak katmanlanmıştır.** Katman DOCX'te her bayrakla yanında görünür.
  
  ## Faz 8: Konuşma Çıkış Noktası Üretimi
  
  3-5 spesifik çıkış noktası **gerçek bulgularla** bağlı, jenerik konuşma noktaları değil.
  
  Kanonik için [`references/conversation_hook_quality.md`](references/conversation_hook_quality.md) sayfasına bak.
  
  | ❌ Jenerik | ✅ Bulguyla bağlı |
  |---|---|
  | "Yol haritası hakkında sor" | "Son [X] satın alması - dikey Y'ye yatırım yaptıklarını gösteriyor. Önerilen çerçeve: 'Duydum [X] duyurusundan — Y'deki yol haritanız nasıl değişiyor?'" |
  | "İşe alım hakkında sor" | "Mühendislik VP'leri 3 hafta önce ayrıldı (LinkedIn). Önerilen çerçeve: '[ad] hareket ettiğini gördüm — mühendislik liderlik planı nedir?'" |
  | "Değerleri hakkında konuş" | "Geçen hafta fiyatlandırma sayfasını güncellediler (resmi site). Önerilen çerçeve: 'Fiyatlandırma tazelemesini gördüm — neyi tetikledi?'" |
  
  Her çıkış noktası:
  - **Çıkış noktası** (bir cümle)
  - **Bağlandığı bulgu** (köprülü + katman)
  - **Önerilen çerçeve** (kullanıcının uyarlayabileceği sözcüğü sözcüğüne ifade)
  
  ## Faz 9: DOCX Üretimi (9 Bölüm)
  
  Node.js + `docx` kütüphanesi aracılığıyla.
  
  1. **Yönetici Özeti** — bir paragraf: kim oldukları + neden önemli olduğu + **hipotez kararı** (DESTEKLENMİŞ / KISMİ DESTEK / ÇÜRÜTÜLMÜŞ / BELİRSİZ) + bilinmesi gereken 3 şey maddeleri.
  2. **Kimlik Faktleri Tablosu** — kuruluş/doğum, konum, boyut/aşama, mevcut rol, kilit bağlantıları. Tüm hücreler kaynaklı; hover metni katmanı.
  3. **Hipotez Testi** — kullanıcının hipotezi sözcüğü sözcüğüne belirtilmiş. Destekleyici kanıt (köprülü alıntılarla 3-5 madde). Çürütücü kanıt (köprülü alıntılarla 3-5 madde). Karar paragrafı (ağırlığı açıklayan 2-3 cümle).
  4. **12 Aylık Aktivite Zaman Çizelgesi** — Haberler, finansman, işe alım, ayrılışlar, ürün lansman, tartışmalar. Ters kronolojik. Her giriş köprülü.
  5. **Ağ Sinyalleri** — İşbirlikçiler / yatırımcılar / ortaklar. 5-10 giriş, hipotezle alakalılığa göre sıralanmış.
  6. **İtibar Sinyalleri** — Haberlerden duygu, şirketler için Glassdoor, kişiler için akran sözü. Uyarı: itibar verisi gürültülüdür.
  7. **Kırmızı Bayraklar + Gizli Desenler** — Davalar, düzenleyici işlemler, sıradan ayrılışlar, finansal sinyaller, itibar saldırıları. Katmanlanmış.
  8. **Konuşma Çıkış Noktaları** — 3-5 bulgularla bağlı spesifik çıkış noktası. Her biri: çıkış noktası + bulgu + önerilen çerçeve.
  9. **Kaynak İzlenebilirliği + Denetim Günlüğü** — Katmanla birlikte kaynak başına liste. Arama özeti tablosu (#, sorgu, sınıflandırma, alınan kaynaklar, alıntılanan kaynaklar). Üç sayım + katman başına sayımlar. Başarısız aramalar. BYOK-MCP kullanım bayrağı.
  
  ### Stil
  
  Arial 12pt gövde, navy başlıklar (#1a3a5c), açık mavi tablo başlıkları (#e8f0f8), kırmızı kırmızı bayrak açılır, yeşil konuşma çıkış noktası açılır.
  
  ### Köprü desenleri
  
  ```js
  new ExternalHyperlink({
    link: "https://...",
    children: [new TextRun({ text: title, style: "Hyperlink" })],
  });
  ```
  
  ## Faz 10: Teslim
  
  - Kaydet: `<output-dir>/dossier_<entity-slug>_<YYYY-MM-DD>.docx`
  - Sohbet özeti: dosya yolu + **hipotez kararı** + denetim sayımları + katman döküm + kullanılan BYOK MCP'ler (varsa)
  - Doğrula: `python3 -c "import zipfile,sys; zipfile.ZipFile(sys.argv[1]).testzip()" <docx>` ile zip bütünlüğünü kontrol et (çıkış yok = sağlam), ardından gerekli bölümlerin mevcut olduğunu doğrula
  
  ## Araç Takımı
  
  | Betik | Rol |
  |---|---|
  | `scripts/citation_tracker.py` | Üç sayım denetimi + destekleyici/çürütücü sınıflandırması + kaynak katmanı etiketlemesi `~/.dossier_sessions/<session>.json` konumuna |
  | `scripts/disconfirming_evidence_balance.py` | Çürütücü sorgulara ≥%30 arama bütçesi ayrıldığını doğrula; önyargılı ise uyar |
  | `scripts/source_tier_classifier.py` | URL → birincil / ikincil / üçüncül sınıflandırması domain sezgiselliği aracılığıyla |
  
  ## Referanslar
  
  - [`references/hypothesis_testing_discipline.md`](references/hypothesis_testing_discipline.md) — ≥%30 kuralı + karar verme aşaması vs ansiklopedik (7+ kaynaklar)
  - [`references/subject_type_source_matrix.md`](references/subject_type_source_matrix.md) — kişi/şirket/kar amacı gütmeyen kuruluş/devlet kaynak matrisleri (7+ kaynaklar)
  - [`references/conversation_hook_quality.md`](references/conversation_hook_quality.md) — bulgularla bağlı çıkış noktası disiplini (7+ kaynaklar)
  
  ## Hata Yönetimi
  
  | Hata | Davranış |
  |---|---|
  | Varlık adı belirsiz | İlerlemeyi reddet. Belirsizliği gidertici tanımlayıcılarla S1'i yeniden sor. |
  | Kullanıcı hipotez belirtmeyi reddeder | Bir kez geri çevir. Hala reddedilirse, örtülü "bulabileceğim en şaşırtıcı şey nedir?" hipoteziyle geri dön. Denetim günlüğünde bayrakla. |
  | Varlığın sıfır kamu ayak izi | Açıkça yüzeylendir. Farklı ad veya erken aşama öner. Uydurma. |
  | LinkedIn kaşıması engellendi | Denetim günlüğünde not et; WebSearch'e geri dön; kullanıcıdan manuel doğrulamasını öner. |
  | SEC EDGAR başarısız | Bir kez yeniden dene. Hala başarısız ise, "kamu dosyaları alınamadı" not et ve devam et. |
  | Duygu verisi seyrek | İtibar bölümünü "sınırlı kamu sinyali" olarak işaretle; eğitimden çıkarım yapma. |
  | Hassas konu yüzeylenirse (S6 dışlaması) | DOCX'ten hariç tut. Sohbette not et (DOCX'te değil) ki kullanıcı dışlamanın onurlandığını bilsin. |
  | 3 ardışık araç başarısızlığı | Dur, kullanıcıyı uyar, şimdiye kadar topladığını paylaş. |
  | DOCX üretimi başarısız | Ham veriyi JSON fallback olarak kaydet. |
  
  ## Reddetmesi Gereken Anti Desenler
  
  - S4 hipotezi zorlamadan dossier üretmek
  - <30% arama bütçesini çürütücü kanıta ayırmak
  - Alım sorularını topla
  - Belirsiz varlık adlarını kabul etmek
  - Jenerik konuşma çıkış noktaları ("yol haritası hakkında sor")
  - Kırmızı bayrakları dramatikleştirmek (katmanlı tutun, editoryal yapmayın)
  - Bayraklarda kaynak güvenilirlik katmanını atlamak
  - LinkedIn kapalı ise ya da kaşıma engellendi ise kapsama uydurma
  - BYOK-MCP verisini denetim günlüğünde bayraklamadan kullanmak
  - S6'da kullanıcının hariç tuttuğu hassas konuları dahil etmek
  - Çürütücü kanıtları göz ardı etmeden "DESTEKLENMİŞ" kararı
  - Denetim günlüğünde BYOK MCP'ler kullanılmadan bayraklanmamak
  
  ---
  
  **Versiyon:** 1.0.0
  **Kaynak spec:** [`megaprompts/12-dossier-megaprompt.md`](../../../../megaprompts/12-dossier-megaprompt.md)
  **İnşa deseni:** Path B (doğrudan dönüştürme). Research-pack eşi, hipotez-test varyantı.
---

# Dossier — Decision-Grade Entity Research

> **Portability:** Requires `WebSearch` + `WebFetch`, Node.js with `docx` package, and optionally `bash_tool` + `curl` for free APIs (SEC EDGAR, GitHub, ProPublica). BYOK MCPs (LinkedIn, Crunchbase, Apollo, Pitchbook, SimilarWeb) are optional enhancements. Works in Claude Code CLI natively.

## Non-Generic Framing — The Differentiator

This skill is **decision-grade entity research with hypothesis-testing**. It **refuses** to be "tell me about Microsoft". Every invocation forces the user to expose their hypothesis upfront (Q4) so the dossier *tests* it rather than confirms it.

The use case shape:

> "I'm pitching Microsoft Tuesday. My hypothesis is they're consolidating AI spend on their first-party Foundry platform. Validate or disprove, and give me three conversation hooks tied to what you find."

**NOT:**

> "Tell me about Microsoft."

The forcing Q4 — the hypothesis question — is the non-generic anchor. Skip it and the skill produces a Wikipedia summary.

See [`references/hypothesis_testing_discipline.md`](references/hypothesis_testing_discipline.md) for the canon.

## Agent Integrity Rules (Research-Pack Convention)

Locked verbatim per PR #657 audit.

- **Execution discipline.** Sequential search calls. WebSearch + WebFetch have looser rate limits than Consensus but still apply 1 q/sec etiquette. Confirm response received before next call.
- **Source discipline.** Cite only sources returned by this session's tool calls. Wikipedia / training knowledge labeled `[Background — verify before quoting]` and excluded from primary findings count.
- **Three-count tracking.** Queries sent / sources received / sources cited. Plus **per-tier breakdown** (primary / secondary / tertiary) unique to dossier. Surfaced in audit log.
- **Retry policy.** On failure → wait 3s → retry once → log. After 3 consecutive failures: stop, alert user.
- **Source reliability tier.** Each citation tagged primary (official, SEC, court records) / secondary (mainstream news, trade press) / tertiary (blogs, forums). DOCX surfaces tier on every flag.

## Phase 1: Grill-Me Intake (6 forcing questions, one at a time)

### Q1 (root) — Subject identity

> **Who is the subject? Give me the exact name and, if a company, the website or LinkedIn URL. If a person, their LinkedIn URL or a unique identifier (company affiliation + role).**
>
> *Why I'm asking:* Disambiguation. There are 47 John Smiths. There are three companies called "Atlas". I need a specific entity to research.

If user gives only a name, push for a second identifier. **Refuse to proceed on ambiguous names.**

### Q2 (depends on Q1) — Subject type

> **What kind of subject is this? Pick one: person / company / nonprofit / government org / other.**
>
> *Why I'm asking:* Different source matrices apply. For people I check LinkedIn, GitHub, Scholar, news; for companies I check SEC EDGAR (if public), Crunchbase, news, GitHub for tech orgs; for nonprofits I check Form 990s on ProPublica.

Forcing choice. "Other" requires a one-line description.

### Q3 (depends on Q2) — Purpose

> **What are you preparing for? Pick one:**
>
> 1. Sales meeting / partnership pitch
> 2. Investment diligence
> 3. Acquisition diligence
> 4. Journalism / due diligence
> 5. Job interview prep
> 6. Competitive intelligence
> 7. Personal vetting (date, hire, business partner)
> 8. Other (specify)
>
> *Why I'm asking:* The purpose dictates the angle, the depth, and the red-flag sensitivity. Sales prep needs conversation hooks. Investment diligence needs traction signals. Personal vetting needs careful sensitivity boundaries.

### Q4 (depends on Q3) — **Hypothesis — MANDATORY**

> **What's your hypothesis going in? What do you already believe about this subject, and what do you want to verify or disprove?**
>
> *Why I'm asking:* This is the critical question. A dossier that just confirms what you already think is worthless. By stating your hypothesis upfront, I can search for evidence that would *disprove* it as well as evidence that supports it — and give you a verdict you can actually use.
>
> Examples:
> - "I believe Microsoft is consolidating AI spend on first-party Foundry. Verify or disprove."
> - "I think the CEO is over their head — too much TAM talk, no traction. Test that."
> - "I believe this nonprofit's overhead ratio is sketchy. Check the 990s."
> - "I think this person is technical enough to handle a CTO role. Verify."

**MANDATORY.** If user says "I don't have one", push back **once**: "Then guess. Commit to a position you can update later. The dossier needs a hypothesis to test, otherwise it's a generic profile and won't help you make a decision."

If still refused: fall back to implicit hypothesis "what's the most surprising thing I could find?" and **flag the fallback in audit log**.

This question is **the non-generic anchor**. Skip it and the skill becomes a Wikipedia summary.

### Q5 (depends on Q3) — Depth

> **Time horizon: 5-minute brief or 15-minute decision-grade dossier?**
>
> *Why I'm asking:* Brief mode caps at ~10 searches and skips the network + reputation passes. Decision-grade goes deeper on every section. Pick based on how much skin you have in this decision.

Forcing choice.

### Q6 (asked only if Q3 ∈ {journalism, personal vetting}) — Sensitivities

> **Anything sensitive to exclude? E.g., personal medical, family details, political history, or specific topics off-limits?**
>
> *Why I'm asking:* Some research contexts have ethical constraints. I'd rather know upfront than surface something you'd never share.

Skip for sales/investment/acquisition/competitive intel (low sensitivity); ask for journalism/personal vetting (high sensitivity).

**Stop condition:** After Q6 (or earlier with dependency skips), commit and start Phase 2. Never re-open intake after Phase 2 begins.

## Phase 2: Subject Disambiguation

Before Phase 3, resolve the subject to a specific entity:

- For people: confirm LinkedIn URL OR (employer + role + city)
- For companies: confirm domain OR (legal name + incorporation jurisdiction)
- For nonprofits: confirm EIN OR (legal name + state)
- For government orgs: confirm official .gov URL

If still ambiguous after Q1 push-back: **halt and re-ask Q1** with disambiguating identifiers. Refuse to proceed.

## Phase 3: Source Matrix Selection

Routed by Q2 subject type. See [`references/subject_type_source_matrix.md`](references/subject_type_source_matrix.md) for the full canon.

### Person

- LinkedIn (manual fetch or LinkedIn MCP if BYOK)
- Personal website
- Twitter/X (rate-limited; degrade gracefully)
- GitHub (if technical subject)
- Google Scholar (if academic)
- News (WebSearch + WebFetch)
- Conference talk transcripts, podcasts (WebSearch)

### Company

- Official website (about, leadership, news, careers)
- SEC EDGAR (free API; 10-Ks, 10-Qs, 8-Ks for public co's)
- Crunchbase free tier (or Crunchbase MCP if BYOK)
- News (WebSearch + WebFetch)
- GitHub (for tech orgs)
- Glassdoor + Comparably (sentiment; degrade gracefully if scraping blocked)
- LinkedIn company page

### Nonprofit

- ProPublica Nonprofit Explorer (free; Form 990s)
- Official website
- News
- GuideStar (if accessible)

### Government org

- Official .gov sites
- News
- ProPublica (for federal agencies)

If a paid MCP is connected (Apollo, Pitchbook, SimilarWeb), use it but mark findings as **BYOK-sourced** in the audit log.

## Phase 4: Hypothesis-Driven Search

Every Phase 4 search MUST be classified as either:

- **Supporting evidence** (confirms hypothesis), OR
- **Disconfirming evidence** (would refute hypothesis)

**≥30% of search budget allocated to disconfirming queries.** Enforced via `scripts/disconfirming_evidence_balance.py`.

Example for hypothesis "Microsoft is consolidating AI spend on Foundry":

- **Supporting:** "Microsoft Foundry adoption 2026", "Microsoft AI infrastructure consolidation"
- **Disconfirming:** "Microsoft OpenAI deal renegotiation", "Microsoft AI vendor diversification", "Microsoft third-party model partnerships 2026"

This is what makes the dossier **decision-grade** rather than confirmation-biased.

For each search:
- Record via `citation_tracker.py` with classification (supporting / disconfirming)
- Apply source tier from `source_tier_classifier.py` to each result URL

## Phase 5: 12-Month Activity Timeline

Default 12-month window for activity timeline; deeper for foundational identity.

Categories:
- News (acquisitions, hires, departures, product launches)
- Funding rounds / financial events
- Controversies / legal events
- Public statements / strategy shifts

Reverse chronological. Each entry hyperlinked + tiered.

## Phase 6: Network + Reputation Signals

### Network

- **Companies:** investors (in/out), customers (named), partners
- **People:** co-founders, advisors, mentors, employers, board roles
- **Nonprofits:** funders, board, leadership

5-10 entries, ranked by **relevance to hypothesis**.

### Reputation

- Sentiment from news (recent 12 months)
- Glassdoor for companies (overall rating + 3 representative reviews)
- Peer mentions for people
- Caveat: reputation data is noisy; tier accordingly

## Phase 7: Red-Flag Pass

Surface but don't sensationalize:

- Litigation (court records → primary tier)
- Regulatory actions (SEC, DOJ, agency actions → primary)
- Unusual departures (key personnel exits within 90 days)
- Financial signals (going-concern notes in 10-Ks → primary)
- Reputation hits (sustained negative coverage → secondary)

**Each flag tiered.** Tier shows up next to every flag in the DOCX.

## Phase 8: Conversation Hook Generation

3-5 specific hooks tied to **actual findings**, not generic talking points.

See [`references/conversation_hook_quality.md`](references/conversation_hook_quality.md) for the canon.

| ❌ Generic | ✅ Finding-tied |
|---|---|
| "Ask about their roadmap" | "Mention their recent acquisition of [X] — it signals they're investing in vertical Y. Suggested framing: 'Saw the [X] announcement — how does that change your roadmap on Y?'" |
| "Ask about hiring" | "Their VP Engineering left 3 weeks ago (LinkedIn). Suggested framing: 'I noticed [name] moved on — what's the eng leadership plan?'" |
| "Talk about their values" | "They updated their pricing page last week (their official site). Suggested framing: 'Saw the pricing refresh — what drove that?'" |

Each hook:
- **The hook** (one sentence)
- **The finding it's tied to** (with hyperlink + tier)
- **Suggested framing** (verbatim phrasing user can adapt)

## Phase 9: DOCX Generation (9 Sections)

Via Node.js + `docx` library.

1. **Executive Summary** — one paragraph: who they are + why they matter + **verdict on the hypothesis** (SUPPORTED / PARTIALLY SUPPORTED / DISPROVEN / INCONCLUSIVE) + 3 things-you-should-know bullets.
2. **Identity Facts Table** — founded/born, location, size/stage, current role, key affiliations. All cells sourced; hover-text tier.
3. **Hypothesis Test** — user's hypothesis stated verbatim. Supporting evidence (3-5 bullets with hyperlinked citations). Disconfirming evidence (3-5 bullets with hyperlinked citations). Verdict paragraph (2-3 sentences explaining the weight).
4. **12-Month Activity Timeline** — News, funding, hires, departures, product launches, controversies. Reverse chronological. Each entry hyperlinked.
5. **Network Signals** — Collaborators / investors / associates. 5-10 entries, ranked by relevance to hypothesis.
6. **Reputation Signals** — Sentiment from news, Glassdoor for companies, peer mentions for people. Caveat: reputation data is noisy.
7. **Red Flags + Hidden Patterns** — Litigation, regulatory actions, unusual departures, financial signals, reputation hits. Tiered.
8. **Conversation Hooks** — 3-5 specific hooks tied to findings. Each: hook + finding + suggested framing.
9. **Source Provenance + Audit Log** — Per-source list with tier. Search summary table (#, query, classification, sources returned, sources cited). Three counts + per-tier counts. Failed searches. BYOK-MCP usage flag.

### Styling

Arial 12pt body, navy headings (#1a3a5c), light blue table headers (#e8f0f8), red red-flag callout, green conversation-hook callout.

### Hyperlink patterns

```js
new ExternalHyperlink({
  link: "https://...",
  children: [new TextRun({ text: title, style: "Hyperlink" })],
});
```

## Phase 10: Deliver

- Save: `<output-dir>/dossier_<entity-slug>_<YYYY-MM-DD>.docx`
- Chat summary: file path + **verdict on hypothesis** + audit counts + tier breakdown + BYOK MCPs used (if any)
- Validate: check zip integrity with `python3 -c "import zipfile,sys; zipfile.ZipFile(sys.argv[1]).testzip()" <docx>` (no output = intact), then confirm the required sections are present

## Tooling

| Script | Role |
|---|---|
| `scripts/citation_tracker.py` | Three-count audit + supporting/disconfirming classification + source-tier tagging at `~/.dossier_sessions/<session>.json` |
| `scripts/disconfirming_evidence_balance.py` | Verifies ≥30% of search budget allocated to disconfirming queries; warns if biased |
| `scripts/source_tier_classifier.py` | URL → primary / secondary / tertiary classification via domain heuristics |

## References

- [`references/hypothesis_testing_discipline.md`](references/hypothesis_testing_discipline.md) — ≥30% rule + decision-grade vs encyclopedic (7+ sources)
- [`references/subject_type_source_matrix.md`](references/subject_type_source_matrix.md) — person/company/nonprofit/gov source matrices (7+ sources)
- [`references/conversation_hook_quality.md`](references/conversation_hook_quality.md) — finding-tied hook discipline (7+ sources)

## Error Handling

| Failure | Behavior |
|---|---|
| Subject name ambiguous | Refuse to proceed. Re-ask Q1 with disambiguating identifier. |
| User refuses to state hypothesis | Push back once. If still refused, fall back to "what's the most surprising thing I could find?" implicit hypothesis. Flag in audit. |
| Subject has zero public footprint | Surface explicitly. Suggest different name or early-stage. Don't fabricate. |
| LinkedIn scrape blocked | Note in audit; fall back to WebSearch; suggest user verify manually. |
| SEC EDGAR fails | Retry once. If still failing, note "public filings not retrieved" and continue. |
| Sentiment data sparse | Mark reputation section as "limited public signal"; don't infer from training. |
| Sensitive topic surfaces (Q6 exclusion) | Exclude from DOCX. Note in chat (not in DOCX) so user knows the exclusion was honored. |
| 3 consecutive tool failures | Stop, alert user, share collected so far. |
| DOCX generation fails | Save raw data as JSON fallback. |

## Anti-Patterns To Reject

- Producing a dossier without forcing Q4 hypothesis
- Allocating <30% of search budget to disconfirming evidence
- Batching intake questions
- Accepting ambiguous subject names
- Generic conversation hooks ("ask about their roadmap")
- Sensationalizing red flags (tier them, don't editorialize)
- Skipping the source-reliability tier on flags
- Fabricating coverage when LinkedIn or scraping is blocked
- Using BYOK-MCP data without flagging in audit log
- Including sensitive topics user excluded in Q6
- Confirmation-biased verdict ("SUPPORTED" without engaging with disconfirming evidence)

---

**Version:** 1.0.0
**Source spec:** [`megaprompts/12-dossier-megaprompt.md`](../../../../megaprompts/12-dossier-megaprompt.md)
**Build pattern:** Path B (direct conversion). Research-pack sibling, hypothesis-testing variant.
