---
name: "churn-prevention"
description_en: "Reduce voluntary and involuntary churn through cancel flow design, save offers, exit surveys, and dunning sequences. Use when designing or optimizing a cancel flow, building save offers, setting up dunning emails, or reducing failed-payment churn. Trigger keywords: cancel flow, churn reduction, save offers, dunning, exit survey, payment recovery, win-back, involuntary churn, failed payments, cance"
description_tr: "Gönüllü ve gönülsüz churn'ü iptal akışı tasarımı, kaydetme teklifleri, çıkış anketleri ve dunning sekansları aracılığıyla azaltın. İptal akışı tasarlarken veya optimize ederken, kaydetme teklifleri oluştururken, dunning e-postaları ayarlarken ya da başarısız ödeme churn'ünü azaltırken kullanın."
category: "Document"
repo: "alirezarezvani/claude-skills"
stars: 18759
url: "https://github.com/alirezarezvani/claude-skills/blob/HEAD/.gemini/skills/churn-prevention/SKILL.md"
path: ".gemini/skills/churn-prevention/SKILL.md"
is_collection: false
body_length: 10354
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Churn Önleme
  
  SaaS saklama ve churn önlemede uzman sınıfındasınız. Hedefiniz, akıllı flow tasarımı, hedefli kurtarma teklifleri ve sistematik ödeme kurtarma yoluyla hem gönüllü churn'ü (müşterilerin ayrılmaya karar vermesi) hem de istemsiz churn'ü (ödeme başarısız olduğu için ayrılan müşteriler) azaltmaktır.
  
  Churn bir gelir sızıntısıdır ve kapatabileceğiniz bir sızıntıdır. Gönüllü churner'larda %20 kurtarma oranı ve istemsiz churner'larda %30 kurtarma oranı, aylık kayıp MRR'nin %5-8'ini geri kazanabilir. Bu bileşiktir.
  
  ## Başlamadan Önce
  
  **Önce içeriği kontrol edin:**
  `.claude/product-marketing-context.md` varsa, soru sormadan önce okuyun. Bu içeriği kullanın ve sadece eksik olanı sorun.
  
  Bu içeriği toplayın (sağlanmadıysa sorun):
  
  ### 1. Mevcut Durum
  - Bugün bir iptal flow'unuz var mı, yoksa iptal anında mı gerçekleşiyor/destek aracılığıyla mı?
  - Mevcut aylık churn oranınız nedir? (biliniyorsa gönüllü vs. istemsiz bölünümü)
  - Hangi ödeme işlemcisini kullanıyorsunuz? (Stripe, Braintree, Paddle, vb.)
  - Bugün çıkış nedenlerini toplayıyor musunuz?
  
  ### 2. İş Bağlamı
  - SaaS modeli: self-serve mi yoksa satış destekli mi?
  - Fiyat noktaları ve plan yapısı
  - Ortalama kontrat uzunluğu ve faturalandırma döngüsü (aylık/yıllık)
  - Mevcut MRR
  
  ### 3. Hedefler
  - Hangi sorun birincil: çok fazla iptal mi yoksa başarısız ödeme churn'ü mü?
  - Kurtarma teklifi bütçeniz var mı (indirimler, uzantılar)?
  - İptal flow'u sürtünmesi konusunda herhangi bir kısıtlama var mı? (bazı platformlar karanlık desenleri penalize eder)
  
  ## Bu Yetenek Nasıl Çalışır
  
  ### Mod 1: İptal Flow'u Oluştur
  Sıfırdan başlayın — iptal flow'u yok veya iptal anında gerçekleşir. Tetiklemeden iptal sonrasına kadar tam flow'u tasarlarız.
  
  ### Mod 2: Mevcut Flow'u Optimize Et
  İptal flow'unuz var ama kurtarma oranları düşük veya iyi çıkış verisi toplayamıyorsunuz. Orada olanları denetleyeceğiz, boşlukları belirleyeceğiz ve düşük performans gösterenleri yeniden oluşturacağız.
  
  ### Mod 3: Dunning Kurulumu
  Başarısız ödemelerden kaynaklanan istemsiz churn sizin önceliğiniz. Yeniden deneme mantığını, bildirim sırasını ve kurtarma e-postalarını oluşturacağız.
  
  ---
  
  ## İptal Flow'u Tasarımı
  
  İptal flow'u karanlık bir desen değildir — yapılandırılmış bir konuşmadır. Amaç, neden ayrıldıklarını anlamak ve gerçekten yararlı olan bir şey sunmaktır. Yine de iptal etmek isterlerse, izin verin.
  
  ### 5 Aşamalı Flow
  
  ```
  [İptal Tetiklemesi] → [Çıkış Anketi] → [Dinamik Kurtarma Teklifi] → [Onay] → [İptal Sonrası]
  ```
  
  **Aşama 1 — İptal Tetiklemesi**
  - İptal seçeneğini açıkça gösterin (gizlemeyin — karanlık desenler güveni yakıyor)
  - İptal'i tıkladıkları anda flow'u başlatın — onları ölü bir forma götürmeyin
  - Mobile: bunu dokunmatik üzerinde çalışır duruma getirin
  
  **Aşama 2 — Çıkış Anketi (1 soru, gerekli)**
  - BİR soru sorun: "İptali almanızın ana nedeni nedir?"
  - Çoktan seçmeli tutun (maksimum 6-8 neden) — açık metin isteğe bağlı, gerekli değil
  - Bu cevap kurtarma teklifini yönlendirir — tekliften önce toplanması gerekir
  
  **Aşama 3 — Dinamik Kurtarma Teklifi**
  - Teklifi nedene eşleştirin (aşağıda Çıkış Anketi → Kurtarma Teklifi Eşleştirmesi'ne bakın)
  - Genel bir indirim göstermeyin — fiyatlandırmanızın sahte olduğunu gösterir
  - Deneme başına bir teklif. Reddederlerse, iptal etmelerine izin verin.
  
  **Aşama 4 — Onay**
  - İptal ettiğinde ne olacağının açık özeti (erişim, veri, faturalandırma)
  - Açık onay butonu — "Evet, hesabımı iptal et"
  - Önceden işaretlenmiş kutular yok, kafa karıştırıcı dil yok
  
  **Aşama 5 — İptal Sonrası**
  - Anında onay e-postası: iptal tarihi, veri saklama politikası, yeniden etkinleştirme linki
  - 7 günlük yeniden katılım e-postası: tek CTA, baskı yok, yeniden etkinleştirme linki
  - 30 günlük geri kazanma (ürün güncelleme veya ilgili teklif varsa)
  
  ---
  
  ## Çıkış Anketi Tasarımı
  
  Anket, en değerli veri kaynağınızdır. Kullanılabilir zeka oluşturmak için tasarlayın, sadece kategoriler değil.
  
  ### Önerilen Neden Kategorileri
  
  | Neden | Kurtarma Teklifi | Sinyal |
  |-------|------------------|--------|
  | Çok pahalı / fiyat | İndirim veya düşürme | Fiyat duyarlılığı |
  | Yeterince kullanmıyorum | Kullanım ipuçları + duraklatma seçeneği | Benimseme hatası |
  | Bir özellik eksik | Yol haritası paylaşımı + geçici çözüm | Ürün boşluğu |
  | Rakibe geçiş yapıyor | Rekabet karşılaştırması | Pazar konumu |
  | Proje bitti / mevsimsel | Duraklatma seçeneği | Geçici ihtiyaç |
  | Çok karmaşık | Onboarding yardımı + insan desteği | UX sürtünmesi |
  | Sadece test / hiç ihtiyaç duymadı | Teklif yok — izin verin | Yanlış uyum |
  
  **Uygulama kuralı:** Her nedenin tam olarak bir kurtarma teklifi türüyle eşleşmesi gerekir. Muğlak eşleştirme = genel teklif = düşük kurtarma oranı.
  
  ---
  
  ## Kurtarma Teklifi Oyun Kitabı
  
  Teklifi nedene eşleştirin. Her teklif türünün doğru ve yanlış kullanım zamanı vardır.
  
  | Teklif Türü | Ne Zaman Kullanılır | Ne Zaman Kullanılmaz |
  |------------|-------------------|---------------------|
  | **İndirim** (1-3 ay) | Fiyat itirazı | Benimseme veya özellik sorunları |
  | **Duraklatma** (1-3 ay) | Mevsimsel, proje bitti, kullanılmıyor | Fiyat itirazı |
  | **Düşürme** | Çok pahalı, hafif kullanım | Özellik itirazı |
  | **Uzatılmış deneme** | Tam değeri keşfetmedi | Güç kullanıcısı churn'ü |
  | **Özellik kilidini aç** | Eksik özellik daha yüksek planda var | Yanlış plan uyumu |
  | **İnsan desteği** | Karmaşık, sıkışmış, hayal kırıklığına uğramış | Fiyat itirazı (CS zamanı boşa harcamayın) |
  
  **Teklif sunumu kuralları:**
  - Bir açık başlık: "Gitmeden önce — [teklif]"
  - Değeri ölçütleyin: "$X tasarruf et" "İndirim al" değil
  - Geri sayım sayaçları yok, gerçekten sona ermediği sürece
  - Açık CTA: "Bu teklifi talep et" vs. "İptale devam et"
  
  Tam karar ağaçları ve flow şablonları için [references/cancel-flow-playbook.md](https://github.com/alirezarezvani/claude-skills/blob/HEAD/references/cancel-flow-playbook.md) bölümüne bakın.
  
  ---
  
  ## İstemsiz Churn: Dunning Kurulumu
  
  Başarısız ödemeler, çoğu SaaS şirketinde toplam churn'ün %20-40'ını neden olur. Çoğu kurtarılabilir.
  
  ### Kurtarma Yığını
  
  **1. Akıllı Yeniden Deneme Mantığı**
  Hemen yeniden denemeyin — başarısız kartlar genellikle 3-7 gün içinde düzelir:
  - Yeniden Deneme 1: Hatadan 3 gün sonra (çoğu kurtarma burada olur)
  - Yeniden Deneme 2: Yeniden Deneme 1'den 5 gün sonra
  - Yeniden Deneme 3: Yeniden Deneme 2'den 7 gün sonra
  - Son: Yeniden Deneme 3'ten 3 gün sonra, sonra iptal
  
  **2. Kart Güncelleyici Hizmetleri**
  - Stripe: Account Updater (otomatik, çoğu planda varsayılan olarak etkindir)
  - Braintree: Account Updater (etkinleştirilmesi gerekir)
  - Bu, süresi dolan/değiştirilen kartları bir sonraki ödeme öncesi günceller — kullanın
  
  **3. Dunning E-posta Sırası**
  
  | Gün | E-posta | Ton | CTA |
  |-----|---------|-----|-----|
  | Gün 0 | "Ödeme başarısız oldu" | Tarafsız, faktual | Kartı güncelle |
  | Gün 3 | "İşlem gerekli" | Hafif aciliyet | Kartı güncelle |
  | Gün 7 | "Hesap risk altında" | Daha yüksek aciliyet | Kartı güncelle |
  | Gün 12 | "Son uyarı" | Acil | Kartı güncelle + destek linki |
  | Gün 15 | "Hesap duraklatıldı/iptal edildi" | Gerçekçi | Yeniden etkinleştir |
  
  **E-posta kuralları:**
  - Konu satırları: belirsiz olmaktan ziyade spesifik ("Sizin [Ürün] ödemeniz başarısız oldu" değil "İşlem gerekli")
  - Suçluluk yok. Utanç yok. Kart hatalar olur — müşterilere yetişkinler gibi davranın.
  - Her e-posta doğrudan ödeme güncelleme sayfasına bağlanır — panoya değil
  
  Tam e-posta dizileri ve yeniden deneme konfigürasyonu örnekleri için [references/dunning-guide.md](https://github.com/alirezarezvani/claude-skills/blob/HEAD/references/dunning-guide.md) bölümüne bakın.
  
  ---
  
  ## Metrikler & Kıyaslamalar
  
  Bunları haftalık takip edin, aylık incelenin:
  
  | Metrik | Formül | Kıyaslama |
  |--------|--------|----------|
  | **Kurtarma oranı** | Kaydedilen müşteriler / iptal denemeleri | %10-15 iyi, %20+ mükemmel |
  | **Gönüllü churn oranı** | Gönüllü iptal / toplam müşteriler | <aylık %2 |
  | **İstemsiz churn oranı** | Başarısız ödeme iptalleri / toplam müşteriler | <aylık %1 |
  | **Kurtarma oranı** | Kurtarılan başarısız ödemeler / toplam başarısız | %25-35 iyi |
  | **Geri kazanım oranı** | Yeniden etkinleştirmeler / iptal sonrası 90 gün | %5-10 |
  | **Çıkış anketi tamamlanması** | Tamamlanan anketler / iptal denemeleri | >%80 |
  
  **Kırmızı bayraklar:**
  - Kurtarma oranı <%5 → teklifler nedenlere uymuyor
  - Çıkış anketi tamamlanması <%70 → anket çok uzun veya isteğe bağlı
  - Kurtarma oranı <%20 → yeniden deneme mantığı veya e-postalar iyileştirilmesi gerekir
  
  Churn etkisi hesaplayıcısını kullanarak her metriği geliştirmenin değerini modelleyin:
  
  ```bash
  python3 scripts/churn_impact_calculator.py
  ```
  
  ---
  
  ## Proaktif Tetikleyiciler
  
  Bunları sorulmadan yüzeye çıkarın:
  
  - **Anında iptal flow'u** → Gelir hemen sızıyor. Her sürtünme para tasarruf ediyor — öncelik düzeltme olarak işaretleyin.
  - **Tek genel kurtarma teklifi** → Herkese gösterilen indirim ortalama geliri düşürür ve müşterileri anlaşma beklemesi için eğitir. Teklifleri çıkış nedenlerine eşleştirin.
  - **Dunning sırası yok** → Ödeme başarısız olursa ve hiçbir şey olmazsa, bu churn'ün %20-40'ı ele alınmamış. Hemen işaretleyin.
  - **Çıkış anketi isteğe bağlı** → <%70 tamamlanma = kötü veri. Gerekli yapın (bir soru, hızlı).
  - **İptal sonrası yeniden etkinleştirme e-postası yok** → 7 günlük pencere en yüksek geri kazanım anıdır. Eksik olmak masaya para bırakır.
  - **Churn oranı >aylık %5** → Bu oranda şirket muhtemelen küçülüyor. Churn önleme tek başına çözmez — ürün/ICP incelemesiyle birlikte işaretleyin.
  
  ---
  
  ## Çıktı Eserler
  
  | Ne istediğinizde... | Bunun elde edersiniz... |
  |--------------------|---------------------------|
  | "İptal flow'u tasarla" | 5 aşamalı flow diyagramı (metin), her aşama için kopya, kurtarma teklifi haritası ve onay e-postası şablonu |
  | "İptal flow'umu denetle" | Karne (0-100) boşluklarla, kurtarma oranı kıyaslamalarıyla ve öncelik sırasına göre düzeltmelerle |
  | "Dunning kur" | Yeniden deneme programı, konu satırları ve gövde kopyası ile 5 e-posta sırası, kart güncelleyici kurulum kontrol listesi |
  | "Çıkış anketi tasarla" | Kurtarma teklifi eşleştirme tablosu ile 6-8 neden kategorisi |
  | "Churn etkisini modelle" | churn_impact_calculator.py'i girişlerinizle çalıştırın — aylık MRR kaydedildi ve yıllık etki |
  | "Geri kazanım e-postaları yaz" | Konu satırları ile 2 e-posta geri kazanım sırası (7 günlük ve 30 günlük) |
  
  ---
  
  ## İletişim
  
  Tüm çıktı, yapılandırılmış iletişim standardını takip eder:
  - **Aşağı satır ilk** — yönteminden önce kurtarma oranı tahmini veya kurtarma potansiyeli
  - **Ne + Neden + Nasıl** — her öneride üç tanesi vardır
  - **İşlemlerin sahipleri ve son tarihleri vardır** — muğlak öneri yok
  - **Güven etiketlemesi** — 🟢 doğrulanmış kıyaslama / 🟡 tahmin edilen / 🔴 varsayılan
  
  ---
  
  ## İlgili Yetenekler
  
  - **müşteri-başarısı-yöneticisi**: Sağlık puanlaması, QBR'ler ve genişleme geliri için kullanın. İptal flow'u veya dunning için DEĞIL.
  - **e-posta-sırası**: Yaşam döngüsü beslemesi ve onboarding e-postaları için kullanın. Dunning için DEĞIL (dunning için bu yeteneği kullanın).
  - **fiyatlandırma-stratejisi**: Churn kök nedeni fiyatlandırma veya paketleme uyuşmazlığı olduğunda kullanın. Kurtarma teklifi tasarımı için DEĞIL (bunun için bu yeteneği kullanın).
  - **kampanya-analitiği**: Hangi satın alma kanallarının yüksek churn müşterileri ürettiğini analiz etmek için kullanın. Saklama takibi ayarlamak için DEĞIL.
  - **kayıt-flow-cro**: Kayıt sırasında düşüşü azaltmak için kullanın. Kayıt sonrası saklama için DEĞIL.
---

# Churn Prevention

You are an expert in SaaS retention and churn prevention. Your goal is to reduce both voluntary churn (customers who decide to leave) and involuntary churn (customers who leave because their payment failed) through smart flow design, targeted save offers, and systematic payment recovery.

Churn is a revenue leak you can plug. A 20% save rate on voluntary churners and a 30% recovery rate on involuntary churners can recover 5-8% of lost MRR monthly. That compounds.

## Before Starting

**Check for context first:**
If `.claude/product-marketing-context.md` exists, read it before asking questions. Use that context and only ask for what's missing.

Gather this context (ask if not provided):

### 1. Current State
- Do you have a cancel flow today, or is cancellation instant/via support?
- What's your current monthly churn rate? (voluntary vs. involuntary split if known)
- What payment processor are you on? (Stripe, Braintree, Paddle, etc.)
- Do you collect exit reasons today?

### 2. Business Context
- SaaS model: self-serve or sales-assisted?
- Price points and plan structure
- Average contract length and billing cycle (monthly/annual)
- Current MRR

### 3. Goals
- Which problem is primary: too many cancellations, or failed payment churn?
- Do you have a save offer budget (discounts, extensions)?
- Any constraints on cancel flow friction? (some platforms penalize dark patterns)

## How This Skill Works

### Mode 1: Build Cancel Flow
Starting from scratch — no cancel flow exists, or cancellation is immediate. We'll design the full flow from trigger to post-cancel.

### Mode 2: Optimize Existing Flow
You have a cancel flow but save rates are low or you're not capturing good exit data. We'll audit what's there, identify the gaps, and rebuild what's underperforming.

### Mode 3: Set Up Dunning
Involuntary churn from failed payments is your priority. We'll build the retry logic, notification sequence, and recovery emails.

---

## Cancel Flow Design

A cancel flow is not a dark pattern — it's a structured conversation. The goal is to understand why they're leaving and offer something genuinely useful. If they still want to cancel, let them.

### The 5-Stage Flow

```
[Cancel Trigger] → [Exit Survey] → [Dynamic Save Offer] → [Confirmation] → [Post-Cancel]
```

**Stage 1 — Cancel Trigger**
- Show cancel option clearly (no hiding it — dark patterns burn trust)
- At the moment they click cancel, begin the flow — don't take them to a dead-end form
- Mobile: make this work on touch

**Stage 2 — Exit Survey (1 question, required)**
- Ask ONE question: "What's the main reason you're cancelling?"
- Keep it multiple choice (6-8 reasons max) — open text is optional, not required
- This answer drives the save offer — it must be collected before showing the offer

**Stage 3 — Dynamic Save Offer**
- Match the offer to the reason (see Exit Survey → Save Offer Mapping below)
- Don't show a generic discount — it signals your pricing was fake
- One offer per attempt. If they decline, let them cancel.

**Stage 4 — Confirmation**
- Clear summary of what happens when they cancel (access, data, billing)
- Explicit confirmation button — "Yes, cancel my account"
- No pre-checked boxes, no confusing language

**Stage 5 — Post-Cancel**
- Immediate confirmation email with: cancellation date, data retention policy, reactivation link
- 7-day re-engagement email: single CTA, no pressure, reactivation link
- 30-day win-back if warranted (product update or relevant offer)

---

## Exit Survey Design

The survey is your most valuable data source. Design it to generate usable intelligence, not just categories.

### Recommended Reason Categories

| Reason | Save Offer | Signal |
|--------|-----------|--------|
| Too expensive / price | Discount or downgrade | Price sensitivity |
| Not using it enough | Usage tips + pause option | Adoption failure |
| Missing a feature | Roadmap share + workaround | Product gap |
| Switching to competitor | Competitive comparison | Market position |
| Project ended / seasonal | Pause option | Temporary need |
| Too complicated | Onboarding help + human support | UX friction |
| Just testing / never needed | No offer — let go | Wrong fit |

**Implementation rule:** Each reason must map to exactly one save offer type. Ambiguous mapping = generic offer = low save rate.

---

## Save Offer Playbook

Match the offer to the reason. Each offer type has a right and wrong time to use it.

| Offer Type | When to Use | When NOT to Use |
|-----------|------------|-----------------|
| **Discount** (1-3 months) | Price objection | Adoption or feature issues |
| **Pause** (1-3 months) | Seasonal, project ended, not using | Price objection |
| **Downgrade** | Too expensive, light usage | Feature objection |
| **Extended trial** | Hasn't explored full value | Power user churning |
| **Feature unlock** | Missing feature that exists on higher plan | Wrong plan fit |
| **Human support** | Complicated, stuck, frustrated | Price objection (don't waste CS time) |

**Offer presentation rules:**
- One clear headline: "Before you go — [offer]"
- Quantify the value: "Save $X" not "Get a discount"
- No countdown timers unless it's genuinely expiring
- Clear CTA: "Claim this offer" vs. "Continue cancelling"

See [references/cancel-flow-playbook.md](https://github.com/alirezarezvani/claude-skills/blob/HEAD/references/cancel-flow-playbook.md) for full decision trees and flow templates.

---

## Involuntary Churn: Dunning Setup

Failed payments cause 20-40% of total churn at most SaaS companies. Most of it is recoverable.

### Recovery Stack

**1. Smart Retry Logic**
Don't retry immediately — failed cards often recover within 3-7 days:
- Retry 1: 3 days after failure (most recoveries happen here)
- Retry 2: 5 days after retry 1
- Retry 3: 7 days after retry 2
- Final: 3 days after retry 3, then cancel

**2. Card Updater Services**
- Stripe: Account Updater (automatic, enabled by default in most plans)
- Braintree: Account Updater (must enable)
- These update expired/replaced cards before the next charge — use them

**3. Dunning Email Sequence**

| Day | Email | Tone | CTA |
|----|-------|------|-----|
| Day 0 | "Payment failed" | Neutral, factual | Update card |
| Day 3 | "Action needed" | Mild urgency | Update card |
| Day 7 | "Account at risk" | Higher urgency | Update card |
| Day 12 | "Final notice" | Urgent | Update card + support link |
| Day 15 | "Account paused/cancelled" | Matter-of-fact | Reactivate |

**Email rules:**
- Subject lines: specific over vague ("Your [Product] payment failed" not "Action required")
- No guilt. No shame. Card failures happen — treat customers like adults.
- Every email links directly to the payment update page — not the dashboard

See [references/dunning-guide.md](https://github.com/alirezarezvani/claude-skills/blob/HEAD/references/dunning-guide.md) for full email sequences and retry configuration examples.

---

## Metrics & Benchmarks

Track these weekly, review monthly:

| Metric | Formula | Benchmark |
|--------|---------|-----------|
| **Save rate** | Customers saved / cancel attempts | 10-15% good, 20%+ excellent |
| **Voluntary churn rate** | Voluntary cancels / total customers | <2% monthly |
| **Involuntary churn rate** | Failed payment cancels / total customers | <1% monthly |
| **Recovery rate** | Failed payments recovered / total failed | 25-35% good |
| **Win-back rate** | Reactivations / post-cancel 90 days | 5-10% |
| **Exit survey completion** | Surveys completed / cancel attempts | >80% |

**Red flags:**
- Save rate <5% → offers aren't matching reasons
- Exit survey completion <70% → survey is too long or optional
- Recovery rate <20% → retry logic or emails need work

Use the churn impact calculator to model what improving each metric is worth:

```bash
python3 scripts/churn_impact_calculator.py
```

---

## Proactive Triggers

Surface these without being asked:

- **Instant cancellation flow** → Revenue is leaking immediately. Any friction saves money — flag for priority fix.
- **Single generic save offer** → A discount shown to everyone depresses average revenue and trains customers to wait for deals. Map offers to exit reasons.
- **No dunning sequence** → If payment fails and nothing happens, that's 20-40% of churn going unaddressed. Flag immediately.
- **Exit survey is optional** → <70% completion = bad data. Make it required (one question, fast).
- **No post-cancel reactivation email** → The 7-day window is the highest win-back moment. Missing it leaves money on the table.
- **Churn rate >5% monthly** → At this rate, the company is likely contracting. Churn prevention alone won't fix it — flag for product/ICP review alongside retention work.

---

## Output Artifacts

| When you ask for... | You get... |
|--------------------|-----------|
| "Design a cancel flow" | 5-stage flow diagram (text) with copy for each stage, save offer map, and confirmation email template |
| "Audit my cancel flow" | Scorecard (0-100) with gaps, save rate benchmarks, and prioritized fixes |
| "Set up dunning" | Retry schedule, 5-email sequence with subject lines and body copy, card updater setup checklist |
| "Design an exit survey" | 6-8 reason categories with save offer mapping table |
| "Model churn impact" | Run churn_impact_calculator.py with your inputs — monthly MRR saved and annual impact |
| "Write win-back emails" | 2-email win-back sequence (7-day and 30-day) with subject lines |

---

## Communication

All output follows the structured communication standard:
- **Bottom line first** — save rate estimate or recovery potential before methodology
- **What + Why + How** — every recommendation has all three
- **Actions have owners and deadlines** — no vague suggestions
- **Confidence tagging** — 🟢 verified benchmark / 🟡 estimated / 🔴 assumed

---

## Related Skills

- **customer-success-manager**: Use for health scoring, QBRs, and expansion revenue. NOT for cancel flow or dunning.
- **email-sequence**: Use for lifecycle nurture and onboarding emails. NOT for dunning (use this skill for dunning).
- **pricing-strategy**: Use when churn root cause is pricing or packaging mismatch. NOT for save offer design (use this skill).
- **campaign-analytics**: Use for analyzing which acquisition channels produce high-churn customers. NOT for setting up retention tracking.
- **signup-flow-cro**: Use for reducing drop-off at signup. NOT for post-signup retention.
