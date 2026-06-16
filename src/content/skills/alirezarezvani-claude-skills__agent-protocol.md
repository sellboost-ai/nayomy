---
name: "agent-protocol"
description_en: "Inter-agent communication protocol for C-suite agent teams. Defines invocation syntax, loop prevention, isolation rules, and response formats. Use when C-suite agents need to query each other, coordinate cross-functional analysis, or run board meetings with multiple agent roles."
category: "Design"
repo: "alirezarezvani/claude-skills"
stars: 16160
url: "https://github.com/alirezarezvani/claude-skills/blob/HEAD/.gemini/skills/agent-protocol/SKILL.md"
path: ".gemini/skills/agent-protocol/SKILL.md"
is_collection: false
body_length: 13174
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Aracı Protokolü

  C-suite aracılarının birbirleriyle nasıl iletişim kurduğu. Kaosun, döngülerin ve dairesel akıl yürütmenin önüne geçen kurallar.

  ## Anahtar Sözcükler
  agent protocol, inter-agent communication, agent invocation, agent orchestration, multi-agent, c-suite coordination, agent chain, loop prevention, agent isolation, board meeting protocol

  ## Çağrı Söz Dizimi

  Herhangi bir aracı başka bir aracıyı sorgulayabilir:

  ```
  [INVOKE:role|question]
  ```

  **Örnekler:**
  ```
  [INVOKE:cfo|Q3'te 5 mühendis işe almanın yanma oranı etkisi nedir?]
  [INVOKE:cto|Bu özelliği gerçekten çeyrek sonu itibariyle sunabiliriz mi?]
  [INVOKE:chro|Senior mühendisler için tipik işe alım süresi ne kadardır?]
  [INVOKE:cro|Sonraki 90 günde pipeline'ımız nasıl görünüyor?]
  ```

  **Geçerli roller:** `ceo`, `cfo`, `cro`, `cmo`, `cpo`, `cto`, `chro`, `coo`, `ciso`

  ## Yanıt Formatı

  Çağrılan aracılar şu yapıyı kullanarak yanıt verirler:

  ```
  [RESPONSE:role]
  Temel bulgu: [bir satır — asıl cevap]
  Destekleyen veriler:
    - [veri noktası 1]
    - [veri noktası 2]
    - [veri noktası 3 — isteğe bağlı]
  Güven: [high | medium | low]
  Uyarı: [bir satır — bunu yanlış yapan nedir]
  [/RESPONSE]
  ```

  **Örnek:**
  ```
  [RESPONSE:cfo]
  Temel bulgu: Q3'te 5 mühendis işe almak, pisti mevcut yanmada 14 aydan 9 aya düşürüyor.
  Destekleyen veriler:
    - Mevcut aylık yanma: $280K → yaklaşık $380K'a artıyor (+$100K tam yüklü)
    - Bunu telafi etmek için gerekli ARR: 12 ay içinde ~$1.2M ek
    - Mevcut pipeline bu hedefin %60'ını karşılıyor
  Güven: medium
  Uyarı: 3 aylık ramp ve gelir yörüngesinde değişiklik olmadığını varsayıyor.
  [/RESPONSE]
  ```

  ## Döngü Önleme (Katı Kurallar)

  Bu kurallar koşulsuz olarak uygulanır. İstisna yok.

  ### Kural 1: Kendi Kendini Çağırma Yok
  Bir aracı kendisini çağıramaz.
  ```
  ❌ CFO → [INVOKE:cfo|...] — BLOKLANDı
  ```

  ### Kural 2: Maksimum Derinlik = 2
  Zincirler A→B→C şeklinde gidebilir. Üçüncü adım bloklanır.
  ```
  ✅ CRO → CFO → COO (derinlik 2)
  ❌ CRO → CFO → COO → CHRO (derinlik 3 — BLOKLANDı)
  ```

  ### Kural 3: Dairesel Çağrı Yok
  Aracı A, aracı B'yi çağırdıysa, B aynı zincirde A'yı çağıramaz.
  ```
  ✅ CRO → CFO → CMO
  ❌ CRO → CFO → CRO (dairesel — BLOKLANDı)
  ```

  ### Kural 4: Zincir İzleme
  Her çağrı kendi çağrı zincirini taşır. Format:
  ```
  [CHAIN: cro → cfo → coo]
  ```
  Aracılar başka bir çağrı yapmadan önce bu zinciri kontrol ederler.

  **Bloklanınca:** Çağrı yapmak yerine bunu döndürün:
  ```
  [BLOCKED: cfo çağrılamıyor — cro→cfo zincirinde dairesel çağrı tespit edildi]
  Kullanılan varsayım: [aracının yaptığı açık varsayım]
  ```

  ## İzolasyon Kuralları

  ### Yönetim Kurulu Toplantısı Faz 2 (Bağımsız Analiz)
  **Çağrıya izin verilmez.** Her rol çapraz kirlenme öncesinde bağımsız görüş oluşturur.
  - Neden: sabitlenme ve grup düşüncesini önlemek
  - Süre: tüm Faz 2 analiz döneminde
  - Bir aracının başka bir rolün verisine ihtiyacı varsa: açık varsayım belirt, `[ASSUMPTION: ...]` ile işaretle

  ### Yönetim Kurulu Toplantısı Faz 3 (Eleştirmen Rolü)
  Executive Mentor diğer rollerin çıktılarına **referans verebilir** ama **çağıramaz**.
  - Neden: eleştiri yeni veri talepleriyle bağımsız olmalı
  - İzin verilir: "CFO'nun projeksiyonu X varsayıyor, bu CRO'nun pipeline verisine aykırı"
  - İzin verilmez: kritik fazda `[INVOKE:cfo|...]`

  ### Yönetim Kurulu Toplantıları Dışında
  Çağrılar yukarıdaki döngü önleme kurallarına tabi olarak serbestçe yapılabilir.

  ## Çağırma vs Varsayım Yapma

  **Çağır:**
  - Soru, sahip olmadığınız alan ve bağlamına özgü veri gerektiriyorsa
  - Buradaki bir hata tavsiyeyi önemli ölçüde değiştirilebilir
  - Soru doğası gereği işlev kaynaklıysa (ör. işe almanın hem bütçeye hem de kapasiteye etkisi)

  **Varsayım yap:**
  - Veriler yönsel açıdan net ve kesinlik kritik değilse
  - Faz 2 izolasyonundasın (her zaman varsayım yap, asla çağırma)
  - Zincir zaten derinlik 2'de
  - Soru ana analizine kıyasla küçükse

  **Varsayım yaparken her zaman belirt:**
  ```
  [ASSUMPTION: tipik Seri A yanma profiline göre runway ~12 ay — CFO ile doğrulanmadı]
  ```

  ## Çatışma Çözümü

  İki çağrılan aracı çelişkili cevaplar verdiğinde:

  1. **Çatışmayı açıkça işaretle:**
     ```
     [CONFLICT: CFO 14 aylık runway tahmin ediyor; CRO pipeline'ın %80'ini kapanacağını bekliyor → 18+ aylar anlamına geliyor]
     ```
  2. **Çözüm yaklaşımını belirt:**
     - Muhafazakar: daha kötü durumu kullan
     - Olasılıksal: güven puanlarına göre ağırlıklandır
     - Eskalasyon: insan kararına sunun
  3. **Sessizce birini asla seçme** — çatışmayı kullanıcıya dokümante et.

  ## Yayın Modeli (Kriz / CEO)

  CEO, tüm rollara aynı anda yayın yapabilir:
  ```
  [BROADCAST:all|Fon toplayışını ıskaladığımız takdirde etkisi ne olur?]
  ```

  Yanıtlar bağımsız olarak gelir (başka bir aracının yanıtını görmeden kendi yanıtını oluşturur). Tümü yanıtladıktan sonra topla.

  ## Hızlı Referans

  | Kural | Davranış |
  |------|----------|
  | Kendi kendini çağırma | ❌ Her zaman bloklanır |
  | Derinlik > 2 | ❌ Bloklanır, varsayım belirt |
  | Dairesel | ❌ Bloklanır, varsayım belirt |
  | Faz 2 izolasyonu | ❌ Çağrıya izin verilmez |
  | Faz 3 eleştirisi | ❌ Yalnızca referans, çağrı yok |
  | Çatışma | ✅ Dokümante et, gizleme |
  | Varsayım | ✅ Her zaman `[ASSUMPTION: ...]` ile açık |

  ## İç Kalite Döngüsü (kurucu kurula gelmeden önce)

  Hiçbir rol, bu doğrulama döngüsünden geçmeden kurucu'ya sunulmaz. Kurucu polished, doğrulanmış çıktı görür — ilk taslaklar değil.

  ### Adım 1: Öz-Doğrulama (her rol, her zaman)

  Sunmadan önce, her rol bu iç kontrol listesini çalıştırır:

  ```
  ÖZ-DOĞRULAMA KONTROL LİSTESİ:
  □ Kaynak Atfı — Her veri noktası nereden geldi?
    ✅ "ARR $2.1M (CRO pipeline raporundan, Q4 aktüeller)"
    ❌ "ARR yaklaşık $2M" (kaynak yok, muğlak)

  □ Varsayım Denetimi — Neyi varsayıyorum, neyi doğruladım?
    Her varsayımı etiketle: [VERIFIED: veri karşı kontrol edildi] veya [ASSUMED: doğrulanmadı]
    Bulgularının >%50'si ASSUMED ise → düşük güveni işaretle

  □ Güven Puanı — Her bulgudan ne kadar eminim?
    🟢 Yüksek: doğrulanmış veri, kurulan kalıp, çoklu kaynaklar
    🟡 Orta: tek kaynak, makul çıkarım, biraz belirsizlik
    🔴 Düşük: varsayıma dayalı, sınırlı veri, ilk kez yapılan analiz

  □ Çelişki Kontrolü — Bu bilinen bağlamla çelişir mi?
    Şirket bağlamı.md ve karar günlüğündeki son kararları kontrol et
    Geçmiş bir karar ile çelişirse → açıkça işaretle

  □ "Peki Ne Olmuş?" Testi — Her bulgunun bir iş sonucu mu var?
    "Peki ne olmuş?" sorusuna bir cümle ile cevap veremezsen → çıkar
  ```

  ### Adım 2: Eş Doğrulama (işlev kaynakları arası doğrulama)

  Tavsiyenin başka bir rolün alanını etkilemesi durumunda, o rol sunmadan önce doğrulama yapar.

  | Tavsiyeniz ... içeriyorsa | Doğrula ... ile | Kontrol ... |
  |-------------------------------------|-------------------|---------------|
  | Mali rakamlar veya bütçe | CFO | Matematik, runway etkisi, bütçe gerçekliği |
  | Gelir tahminleri | CRO | Pipeline desteği, tarihsel doğruluk |
  | Personel veya işe alma | CHRO | Pazar gerçekliği, ücret uygulanabilirliği, zaman çizelgesi |
  | Teknik uygulanabilirlik veya zaman çizelgesi | CTO | Mühendislik kapasitesi, teknik borç yükü |
  | Operasyonel süreç değişiklikleri | COO | Kapasite, bağımlılıklar, ölçeklendirme etkisi |
  | Müşteri'ye yönelik değişiklikler | CRO + CPO | Churn riski, ürün yol haritası çakışması |
  | Güvenlik veya uyum iddiaları | CISO | Gerçek duruş, düzenleme gereksinimleri |
  | Pazar veya konumlandırma iddiaları | CMO | Veri desteği, rekabetçi gerçeklik |

  **Eş doğrulama formatı:**
  ```
  [PEER-VERIFY:cfo]
  Doğrulanmış: ✅ Yanma oranı hesaplaması doğru
  Ayarlanmış: ⚠️ İşe alma zaman çizelgesi Q2 değil Q3 olmalı (bütçe kısıtı)
  İşaretlendi: 🔴 Toplam komp projeksiyonunda hisse maliyeti eksik
  [/PEER-VERIFY]
  ```

  **Eş doğrulama atla:**
  - İşlev kaynakları arası etki olmaksızın tek alan sorusu
  - Zaman duyarlı proaktif uyarı (uyarı gönder, sonra doğrula)
  - Kurucu açıkça hızlı bir görüş istedi

  ### Adım 3: Eleştirmen Ön Kontrolü (yüksek paydalar sadece)

  **Geri döndürülemez, yüksek maliyetli veya şirketin başına belası olabilecek** kararlar için Executive Mentor kurucu'yu görmeden önce ön kontrol yapar.

  **Ön kontrol tetikleyicileri:**
  - Kalan runway'in >%20'sini harcamayı içerir
  - Ekibin >%30'unu etkiler (işten çıkarma, yeniden örgütlenme)
  - Şirket stratejisini veya yönünü değiştirir
  - Harici taahhütleri içerir (fon toplayış koşulları, ortaklıklar, M&A)
  - Tüm rollerin anlaştığı her tavsiye (şüpheli fikir birliği)

  **Ön kontrol çıktısı:**
  ```
  [CRITIC-SCREEN]
  En zayıf nokta: [Bu tavsiyedeki tek en büyük zaaf]
  Eksik perspektif: [Kimsenin değerlendirilmediği şey]
  Yanlış olursa, maliyet: [Nicelleştirilmiş dezavantaj]
  Devam et: ✅ Not edilmiş risklerle | ⚠️ [spesifik boşluğu] ele aldıktan sonra | 🔴 Yeniden düşün
  [/CRITIC-SCREEN]
  ```

  ### Adım 4: Kurs Düzeltmesi (kurucu geri bildirimi sonrası)

  Döngü teslimatla bitmez. Kurucu yanıt verdikten sonra:

  ```
  KURUCU GERİ BİLDİRİM DÖNGÜSÜ:
  1. Kurucu onaylar → karar kaydet (Katman 2), işlemi ata
  2. Kurucu değiştirir → analiz ve düzeltmelerle güncelle, değiştirilen parçaları yeniden doğrula
  3. Kurucu reddeder → reddi kaydet DO_NOT_RESURFACE ile, NEDEN'i anla
  4. Kurucu takip sorusu sorar → belirli noktada analiz derinleştir, yeniden doğrula

  KARAR SONRASI İNCELEME (30/60/90 gün):
  - Tavsiye doğru muydu?
  - Neyi kaçırdık?
  - Şirket bağlamı.md'i öğrendiğimizle güncelle
  - Yanlış olursa → dersi kaydet, gelecek analizi ayarla
  ```

  ### Paydalar Tarafından Doğrulama Seviyesi

  | Paydalar | Öz-Doğrula | Eş-Doğrula | Eleştirmen Ön Kontrolü |
  |--------|-------------|-------------|-------------------|
  | Düşük (bilgilendirme) | ✅ Gerekli | ❌ Atla | ❌ Atla |
  | Orta (operasyonel) | ✅ Gerekli | ✅ Gerekli | ❌ Atla |
  | Yüksek (stratejik) | ✅ Gerekli | ✅ Gerekli | ✅ Gerekli |
  | Kritik (geri döndürülemez) | ✅ Gerekli | ✅ Gerekli | ✅ Gerekli + yönetim kurulu |

  ### Çıktı Biçiminde Değişiklikler

  Doğrulanmış çıktı güven ve kaynak bilgisi ekler:

  ```
  ALTI ÇIZILI ÖZETİ
  [Cevap] — Güven: 🟢 Yüksek

  NEDIR
  • [Bulgu 1] [VERIFIED: Q4 aktüeller] 🟢
  • [Bulgu 2] [VERIFIED: CRO pipeline verileri] 🟢  
  • [Bulgu 3] [ASSUMED: endüstri kıyaslamalarına dayalı] 🟡

  EŞ-DOĞRULANMIŞ: CFO (matematik ✅), CTO (zaman çizelgesi ⚠️ Q3'e ayarlanmış)
  ```

  ---

  ## Kullanıcı İletişim Standardı

  C-suite'in kurucu'ya tüm çıktısı BİR format takip eder. İstisna yok. Kurucu karar vericisi — sonuçları verin, süreci değil.

  ### Standart Çıktı (tek rol yanıtı)

  ```
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  📊 [ROLE] — [Konu]

  ALTI ÇIZILI ÖZETİ
  [Bir cümle. Cevap. Önsöz yok.]

  NEDIR
  • [Bulgu 1 — en kritik]
  • [Bulgu 2]
  • [Bulgu 3]
  (Maks 5 madde. Daha fazla gerekirse → referans dok.)

  NEDEN BU ÖNEMLİ
  [1-2 cümle. İş etkisi. Teori değil — sonuç.]

  NASIL HAREKET ET
  1. [İşlem] → [Sahibi] → [Son tarih]
  2. [İşlem] → [Sahibi] → [Son tarih]
  3. [İşlem] → [Sahibi] → [Son tarih]

  ⚠️ RİSKLER (varsa)
  • [Risk + onu tetikleyen şey]

  🔑 SİZİN KARAR (gerekirse)
  Seçenek A: [Açıklama] — [Takas]
  Seçenek B: [Açıklama] — [Takas]
  Tavsiye: [Hangisi ve neden, bir cümlede]

  📎 AYRINTI: [derin dalış için referans dok veya script çıktısı]

  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  ```

  ### Proaktif Uyarı (talep edilmemiş — bağlam tarafından tetiklendi)

  ```
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  🚩 [ROLE] — Proaktif Uyarı

  NOTI ALDIM
  [Bunu tetikleyen — belirli, muğlak değil]

  NEDEN ÖNEMLİ
  [İş sonucu yoksa — dolar, zaman veya risk olarak]

  TAVSİYE EDİLEN İŞLEM
  [Tamamen neyi yapacak, kim yapacak, ne zaman]

  ACİLİYET: 🔴 Bugün harekete geç | 🟡 Bu hafta | ⚪ Sonraki gözden geçirme

  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  ```

  ### Yönetim Kurulu Toplantısı Çıktısı (çok rol sentezi)

  ```
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  📋 YÖNETİM KURULU TOPLANTISI — [Tarih] — [Gündem Konusu]

  KARAR GEREKLİ
  [Kararı bir cümleyle çerçevele]

  PERSPEKTİFLER
    CEO: [bir satırlık pozisyon]
    CFO: [bir satırlık pozisyon]
    CRO: [bir satırlık pozisyon]
    [... yalnızca katkıda bulunan roller]

  NEREDE ANLAŞIYORLAR
  • [Fikir birliği noktası 1]
  • [Fikir birliği noktası 2]

  NEREDE ANLAŞMIYORLAR
  • [Çatışma] — CEO X diyor, CFO Y diyor
  • [Çatışma] — CRO X diyor, CPO Y diyor

  ELEŞTİRMEN GÖRÜŞÜ (Executive Mentor)
  [Başka kimse söylememiş rahatsız edici gerçek]

  TAVSİYE EDİLEN KARAR
  [Net tavsiye ve gerekçe]

  İŞ MADDELERİ
  1. [İşlem] → [Sahibi] → [Son tarih]
  2. [İşlem] → [Sahibi] → [Son tarih]
  3. [İşlem] → [Sahibi] → [Son tarih]

  🔑 SİZİN ÇAĞRI
  [Tavsiyeyi reddetsem seçenekler]

  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  ```

  ### İletişim Kuralları (vazgeçilmez)

  1. **Alttaki satır önce.** Her zaman. Kurucu'nun zamanı en kıt kaynaktır.
  2. **Sonuçlar ve kararlar sadece.** Süreç anlatısı yok ("Önce analiz ettim..."). Sesli düşünme yok.
  3. **Ne + Neden + Nasıl.** Her bulgu NE olduğunu, NEDEN önemli olduğunu (iş etkisi) ve NASIL hareket edileceğini açıklar.
  4. **Bölüm başına maks 5 madde.** Daha uzun = referans doc.
  5. **İşlemlerin sahipleri ve son tarihleri vardır.** "Düşünmeyi düşünmeliyiz" yasaklanır. Kim neyi ne zaman yapacak.
  6. **Kararlar seçenekler olarak çerçevelenir.** "Ne düşünüyorsunuz?" değil — "Seçenek A veya B, takas budur, tavsiyem bu."
  7. **Kurucu karar verir.** Roller tavsiye eder. Kurucu onaylar, değiştirir veya reddeder. Her çıktı bu hiyerarşiye saygı gösterir.
  8. **Riskler somuttur.** "Risk olabilir" değil — "X olursa, Y bozulur, $Z'ye mal olur."
  9. **Açıklama olmaksızın jargon yok.** Bir terim kullanırsan, ilk kullanımda açıkla.
  10. **Sessizlik bir seçenektir.** Rapor edecek bir şey yoksa, güncellemeler uydurmayın.

  ## Referans
  - `references/invocation-patterns.md` — örneklerle yaygın işlev kaynakları arası kalıplar
---

# Inter-Agent Protocol

How C-suite agents talk to each other. Rules that prevent chaos, loops, and circular reasoning.

## Keywords
agent protocol, inter-agent communication, agent invocation, agent orchestration, multi-agent, c-suite coordination, agent chain, loop prevention, agent isolation, board meeting protocol

## Invocation Syntax

Any agent can query another using:

```
[INVOKE:role|question]
```

**Examples:**
```
[INVOKE:cfo|What's the burn rate impact of hiring 5 engineers in Q3?]
[INVOKE:cto|Can we realistically ship this feature by end of quarter?]
[INVOKE:chro|What's our typical time-to-hire for senior engineers?]
[INVOKE:cro|What does our pipeline look like for the next 90 days?]
```

**Valid roles:** `ceo`, `cfo`, `cro`, `cmo`, `cpo`, `cto`, `chro`, `coo`, `ciso`

## Response Format

Invoked agents respond using this structure:

```
[RESPONSE:role]
Key finding: [one line — the actual answer]
Supporting data:
  - [data point 1]
  - [data point 2]
  - [data point 3 — optional]
Confidence: [high | medium | low]
Caveat: [one line — what could make this wrong]
[/RESPONSE]
```

**Example:**
```
[RESPONSE:cfo]
Key finding: Hiring 5 engineers in Q3 extends runway from 14 to 9 months at current burn.
Supporting data:
  - Current monthly burn: $280K → increases to ~$380K (+$100K fully loaded)
  - ARR needed to offset: ~$1.2M additional within 12 months
  - Current pipeline covers 60% of that target
Confidence: medium
Caveat: Assumes 3-month ramp and no change in revenue trajectory.
[/RESPONSE]
```

## Loop Prevention (Hard Rules)

These rules are enforced unconditionally. No exceptions.

### Rule 1: No Self-Invocation
An agent cannot invoke itself.
```
❌ CFO → [INVOKE:cfo|...] — BLOCKED
```

### Rule 2: Maximum Depth = 2
Chains can go A→B→C. The third hop is blocked.
```
✅ CRO → CFO → COO (depth 2)
❌ CRO → CFO → COO → CHRO (depth 3 — BLOCKED)
```

### Rule 3: No Circular Calls
If agent A called agent B, agent B cannot call agent A in the same chain.
```
✅ CRO → CFO → CMO
❌ CRO → CFO → CRO (circular — BLOCKED)
```

### Rule 4: Chain Tracking
Each invocation carries its call chain. Format:
```
[CHAIN: cro → cfo → coo]
```
Agents check this chain before responding with another invocation.

**When blocked:** Return this instead of invoking:
```
[BLOCKED: cannot invoke cfo — circular call detected in chain cro→cfo]
State assumption used instead: [explicit assumption the agent is making]
```

## Isolation Rules

### Board Meeting Phase 2 (Independent Analysis)
**NO invocations allowed.** Each role forms independent views before cross-pollination.
- Reason: prevent anchoring and groupthink
- Duration: entire Phase 2 analysis period
- If an agent needs data from another role: state explicit assumption, flag it with `[ASSUMPTION: ...]`

### Board Meeting Phase 3 (Critic Role)
Executive Mentor can **reference** other roles' outputs but **cannot invoke** them.
- Reason: critique must be independent of new data requests
- Allowed: "The CFO's projection assumes X, which contradicts the CRO's pipeline data"
- Not allowed: `[INVOKE:cfo|...]` during critique phase

### Outside Board Meetings
Invocations are allowed freely, subject to loop prevention rules above.

## When to Invoke vs When to Assume

**Invoke when:**
- The question requires domain-specific data you don't have
- An error here would materially change the recommendation
- The question is cross-functional by nature (e.g., hiring impact on both budget and capacity)

**Assume when:**
- The data is directionally clear and precision isn't critical
- You're in Phase 2 isolation (always assume, never invoke)
- The chain is already at depth 2
- The question is minor compared to your main analysis

**When assuming, always state it:**
```
[ASSUMPTION: runway ~12 months based on typical Series A burn profile — not verified with CFO]
```

## Conflict Resolution

When two invoked agents give conflicting answers:

1. **Flag the conflict explicitly:**
   ```
   [CONFLICT: CFO projects 14-month runway; CRO expects pipeline to close 80% → implies 18+ months]
   ```
2. **State the resolution approach:**
   - Conservative: use the worse case
   - Probabilistic: weight by confidence scores
   - Escalate: flag for human decision
3. **Never silently pick one** — surface the conflict to the user.

## Broadcast Pattern (Crisis / CEO)

CEO can broadcast to all roles simultaneously:
```
[BROADCAST:all|What's the impact if we miss the fundraise?]
```

Responses come back independently (no agent sees another's response before forming its own). Aggregate after all respond.

## Quick Reference

| Rule | Behavior |
|------|----------|
| Self-invoke | ❌ Always blocked |
| Depth > 2 | ❌ Blocked, state assumption |
| Circular | ❌ Blocked, state assumption |
| Phase 2 isolation | ❌ No invocations |
| Phase 3 critique | ❌ Reference only, no invoke |
| Conflict | ✅ Surface it, don't hide it |
| Assumption | ✅ Always explicit with `[ASSUMPTION: ...]` |

## Internal Quality Loop (before anything reaches the founder)

No role presents to the founder without passing through this verification loop. The founder sees polished, verified output — not first drafts.

### Step 1: Self-Verification (every role, every time)

Before presenting, every role runs this internal checklist:

```
SELF-VERIFY CHECKLIST:
□ Source Attribution — Where did each data point come from?
  ✅ "ARR is $2.1M (from CRO pipeline report, Q4 actuals)"
  ❌ "ARR is around $2M" (no source, vague)

□ Assumption Audit — What am I assuming vs what I verified?
  Tag every assumption: [VERIFIED: checked against data] or [ASSUMED: not verified]
  If >50% of findings are ASSUMED → flag low confidence

□ Confidence Score — How sure am I on each finding?
  🟢 High: verified data, established pattern, multiple sources
  🟡 Medium: single source, reasonable inference, some uncertainty
  🔴 Low: assumption-based, limited data, first-time analysis

□ Contradiction Check — Does this conflict with known context?
  Check against company-context.md and recent decisions in decision-log
  If it contradicts a past decision → flag explicitly

□ "So What?" Test — Does every finding have a business consequence?
  If you can't answer "so what?" in one sentence → cut it
```

### Step 2: Peer Verification (cross-functional validation)

When a recommendation impacts another role's domain, that role validates BEFORE presenting.

| If your recommendation involves... | Validate with... | They check... |
|-------------------------------------|-------------------|---------------|
| Financial numbers or budget | CFO | Math, runway impact, budget reality |
| Revenue projections | CRO | Pipeline backing, historical accuracy |
| Headcount or hiring | CHRO | Market reality, comp feasibility, timeline |
| Technical feasibility or timeline | CTO | Engineering capacity, technical debt load |
| Operational process changes | COO | Capacity, dependencies, scaling impact |
| Customer-facing changes | CRO + CPO | Churn risk, product roadmap conflict |
| Security or compliance claims | CISO | Actual posture, regulation requirements |
| Market or positioning claims | CMO | Data backing, competitive reality |

**Peer validation format:**
```
[PEER-VERIFY:cfo]
Validated: ✅ Burn rate calculation correct
Adjusted: ⚠️ Hiring timeline should be Q3 not Q2 (budget constraint)
Flagged: 🔴 Missing equity cost in total comp projection
[/PEER-VERIFY]
```

**Skip peer verification when:**
- Single-domain question with no cross-functional impact
- Time-sensitive proactive alert (send alert, verify after)
- Founder explicitly asked for a quick take

### Step 3: Critic Pre-Screen (high-stakes decisions only)

For decisions that are **irreversible, high-cost, or bet-the-company**, the Executive Mentor pre-screens before the founder sees it.

**Triggers for pre-screen:**
- Involves spending > 20% of remaining runway
- Affects >30% of the team (layoffs, reorg)
- Changes company strategy or direction
- Involves external commitments (fundraising terms, partnerships, M&A)
- Any recommendation where all roles agree (suspicious consensus)

**Pre-screen output:**
```
[CRITIC-SCREEN]
Weakest point: [The single biggest vulnerability in this recommendation]
Missing perspective: [What nobody considered]
If wrong, the cost is: [Quantified downside]
Proceed: ✅ With noted risks | ⚠️ After addressing [specific gap] | 🔴 Rethink
[/CRITIC-SCREEN]
```

### Step 4: Course Correction (after founder feedback)

The loop doesn't end at delivery. After the founder responds:

```
FOUNDER FEEDBACK LOOP:
1. Founder approves → log decision (Layer 2), assign actions
2. Founder modifies → update analysis with corrections, re-verify changed parts
3. Founder rejects → log rejection with DO_NOT_RESURFACE, understand WHY
4. Founder asks follow-up → deepen analysis on specific point, re-verify

POST-DECISION REVIEW (30/60/90 days):
- Was the recommendation correct?
- What did we miss?
- Update company-context.md with what we learned
- If wrong → document the lesson, adjust future analysis
```

### Verification Level by Stakes

| Stakes | Self-Verify | Peer-Verify | Critic Pre-Screen |
|--------|-------------|-------------|-------------------|
| Low (informational) | ✅ Required | ❌ Skip | ❌ Skip |
| Medium (operational) | ✅ Required | ✅ Required | ❌ Skip |
| High (strategic) | ✅ Required | ✅ Required | ✅ Required |
| Critical (irreversible) | ✅ Required | ✅ Required | ✅ Required + board meeting |

### What Changes in the Output Format

The verified output adds confidence and source information:

```
BOTTOM LINE
[Answer] — Confidence: 🟢 High

WHAT
• [Finding 1] [VERIFIED: Q4 actuals] 🟢
• [Finding 2] [VERIFIED: CRO pipeline data] 🟢  
• [Finding 3] [ASSUMED: based on industry benchmarks] 🟡

PEER-VERIFIED BY: CFO (math ✅), CTO (timeline ⚠️ adjusted to Q3)
```

---

## User Communication Standard

All C-suite output to the founder follows ONE format. No exceptions. The founder is the decision-maker — give them results, not process.

### Standard Output (single-role response)

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 [ROLE] — [Topic]

BOTTOM LINE
[One sentence. The answer. No preamble.]

WHAT
• [Finding 1 — most critical]
• [Finding 2]
• [Finding 3]
(Max 5 bullets. If more needed → reference doc.)

WHY THIS MATTERS
[1-2 sentences. Business impact. Not theory — consequence.]

HOW TO ACT
1. [Action] → [Owner] → [Deadline]
2. [Action] → [Owner] → [Deadline]
3. [Action] → [Owner] → [Deadline]

⚠️ RISKS (if any)
• [Risk + what triggers it]

🔑 YOUR DECISION (if needed)
Option A: [Description] — [Trade-off]
Option B: [Description] — [Trade-off]
Recommendation: [Which and why, in one line]

📎 DETAIL: [reference doc or script output for deep-dive]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

### Proactive Alert (unsolicited — triggered by context)

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🚩 [ROLE] — Proactive Alert

WHAT I NOTICED
[What triggered this — specific, not vague]

WHY IT MATTERS
[Business consequence if ignored — in dollars, time, or risk]

RECOMMENDED ACTION
[Exactly what to do, who does it, by when]

URGENCY: 🔴 Act today | 🟡 This week | ⚪ Next review

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

### Board Meeting Output (multi-role synthesis)

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📋 BOARD MEETING — [Date] — [Agenda Topic]

DECISION REQUIRED
[Frame the decision in one sentence]

PERSPECTIVES
  CEO: [one-line position]
  CFO: [one-line position]
  CRO: [one-line position]
  [... only roles that contributed]

WHERE THEY AGREE
• [Consensus point 1]
• [Consensus point 2]

WHERE THEY DISAGREE
• [Conflict] — CEO says X, CFO says Y
• [Conflict] — CRO says X, CPO says Y

CRITIC'S VIEW (Executive Mentor)
[The uncomfortable truth nobody else said]

RECOMMENDED DECISION
[Clear recommendation with rationale]

ACTION ITEMS
1. [Action] → [Owner] → [Deadline]
2. [Action] → [Owner] → [Deadline]
3. [Action] → [Owner] → [Deadline]

🔑 YOUR CALL
[Options if you disagree with the recommendation]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

### Communication Rules (non-negotiable)

1. **Bottom line first.** Always. The founder's time is the scarcest resource.
2. **Results and decisions only.** No process narration ("First I analyzed..."). No thinking out loud.
3. **What + Why + How.** Every finding explains WHAT it is, WHY it matters (business impact), and HOW to act on it.
4. **Max 5 bullets per section.** Longer = reference doc.
5. **Actions have owners and deadlines.** "We should consider" is banned. Who does what by when.
6. **Decisions framed as options.** Not "what do you think?" — "Option A or B, here's the trade-off, here's my recommendation."
7. **The founder decides.** Roles recommend. The founder approves, modifies, or rejects. Every output respects this hierarchy.
8. **Risks are concrete.** Not "there might be risks" — "if X happens, Y breaks, costing $Z."
9. **No jargon without explanation.** If you use a term, explain it on first use.
10. **Silence is an option.** If there's nothing to report, don't fabricate updates.

## Reference
- `references/invocation-patterns.md` — common cross-functional patterns with examples
