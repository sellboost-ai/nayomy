---
name: "culture-architect"
description_en: "Build, measure, and evolve company culture as operational behavior — not wall posters. Covers mission/vision/values workshops, values-to-behaviors translation, culture code creation, culture health assessment, and cultural rituals by stage. Use when building company values, assessing culture health, designing cultural rituals, creating culture codes, handling culture clashes, or when user mentions"
description_tr: "Şirket kültürünü operasyonel davranış olarak inşa edin, ölçün ve geliştirin — sadece duvar afişleri değil. Misyon/vizyon/değerler atölyelerini, değerlerden davranışlara çeviriyi, kültür kodu oluşturmayı, kültür sağlığı değerlendirmesini ve aşamaya göre kültürel ritüelleri kapsar. Şirket değerleri oluştururken, kültür sağlığını değerlendirirken, kültürel ritüeller tasarlarken, kültür kodları oluştururken ve kültür çatışmalarıyla karşılaşırken kullanın."
category: "Design"
repo: "alirezarezvani/claude-skills"
stars: 18266
url: "https://github.com/alirezarezvani/claude-skills/blob/HEAD/.gemini/skills/culture-architect/SKILL.md"
path: ".gemini/skills/culture-architect/SKILL.md"
is_collection: false
body_length: 7843
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Kültür Mimarı

  Kültür söyledikleriniz değil, yaptıklarınızdır. Bu beceri kültürü bir operasyonel sistem olarak inşa eder — gözlemlenebilir davranışlar, ölçülebilir sağlık ve ölçeklenebilir ritüeller.

  ## Anahtar Kelimeler
  kültür, şirket kültürü, değerler, misyon, vizyon, kültür kodu, kültürel ritüeller, kültür sağlığı, değerlerden davranışlara, kurucu kültürü, kültür borcu, değer taklitçiliği, kültür değerlendirmesi, kültür anketi, Netflix kültür sunusu, HubSpot kültür kodu, psikolojik güvenlik, kültürün ölçeklendirilmesi

  ## Temel İlke

  **Kültür = (Ödüllendirdikleriniz) + (Tolere ettikleriniz) + (Kutladıklarınız)**

  Değerleriniz "şeffaflık" dese de kötü haberin taşıyıcılarını cezalandırıyorsanız — gerçek değeriniz "görüntü"dür. Kültür aspirasyonel değildir. Tanımlayıcıdır. İş, söylenen ile gerçek olanı arasındaki boşluğu kapatmaktır.

  ## Çerçeveler

  ### 1. Misyon / Vizyon / Değerler Workshop'u

  Bunu sohbet şeklinde yürütün, kurumsal bir çıkartma olarak değil. Üç soru:

  **Misyon** — Neden varız (para kazanmanın ötesinde)?
  - "Yarın ortadan kaysak ne kaybolurdu?"
  - Misyon şimdiki zaman. "Yaşlılarda önlenebilir düşüşleri azaltırız." Değil "sektörün lider olması..."

  **Vizyon** — 5–10 yılda başarı neye benziyor?
  - Yanlış olmak için yeterince spesifik. "Avrupa'daki her bakım evi sistemimizi kullanıyor" "pazar liderine dönmek"ten daha iyidir.

  **Değerler** — Hangi davranışları gerçekten modelliyoruz?
  - Gözlemlediklerinizden başlayın, iyi ses çıkaranlardan değil. "Son harika işe alımımız ne yaptı ki kimse onlardan istemedi?"
  - 3–5 ile sınırlı kalın. 5'ten fazla olunca hiçbiri bir şey ifade etmez.

  ### 2. Değerler → Davranışlar Çevirisi

  Bu iştir. Her değerin davranışsal tutturmaları olması lazım ya da sadece dekorasyon.

  | Değer | Kötü versiyon | Davranışsal tuttturma |
  |-------|------------|-------------------|
  | Şeffaflık | "Açık ve dürüstüz" | "Kötü haberleri 24 saat içinde, yöneticimize de dahil, paylaşırız" |
  | Sahiplik | "Sorumluluğu alırız" | "Sorunları devretmeyiz — çözülene kadar, takımlar arası sınırları aşsa da sahibiz" |
  | Hız | "Hızlı hareket ederiz" | "€5K altı kararlar takım seviyesinde, aynı gün, onay gerekmez" |
  | Kalite | "Köşe kesmeyiz" | "Gurur duymadığımız bir şeyi sevk etmeden önce durduruız" |
  | Müşteri odaklı | "Müşteriler önceliktir" | "Herhangi bir takım üyesi bir müşteri sorununu liderliğe yükseltebilir, normal kanalları atlayarak" |

  **Workshop alıştırması:** Değerinizi yazın. Sonra "Yeni bir işe alındığın 30. günde bu değeri gerçekten yaşadığımızı nasıl anlar?" diye sorun. Somut cevap veremezseniz — bu değer değildir, aspirasyondur.

  ### 3. Kültür Kodu Oluşturma

  Kültür kodu, nasıl çalıştığınızı açıklayan halka açık bir belgedir. Yanlış kişileri korkutmalı ve doğru olanları çekmelidir.

  **Yapı:**
  1. Kimiz (misyon + bağlam)
  2. Burada kimin başarısı olur (sıfatlar değil, spesifik davranışlar)
  3. Burada kimin başarısı olmaz (dürüst — faydalı olan kısım bu)
  4. Karar nasıl alırız
  5. Nasıl iletişim kurarız
  6. İnsanları nasıl geliştiririz
  7. Liderlerden ne bekleriz

  `templates/culture-code-template.md` adresinde tam bir şablon görün.

  **Kaçınılması gereken anti-patternler:**
  - "Biz bir aileyiz" — aileler birbirlerini performans için kovmazlar
  - Sadece olumlu özellikleri listeleme — "burada kimin başarısı olmaz" bölümü bunu inandırıcı kılar
  - Aspirasyonel yerine tanımlayıcı yapmak

  ### 4. Kültür Sağlığı Değerlendirmesi

  Her üç ayda bir çalıştırın. 8–12 soru. Anonim. `references/culture-playbook.md` adresinde anket tasarımı görün.

  **Ölçülecek temel alanlar:**
  1. Psikolojik güvenlik — "Bir endişe ortaya atabilir miyim korkuyla karşılaşmadan?"
  2. Netlik — "Çalışmamın şirket hedeflerine nasıl bağlandığını biliyor muyum?"
  3. Adalet — "Kararlar tutarlı ve şeffaf bir şekilde alınıyor mu?"
  4. Gelişim — "Öğreniyor ve zorlanıyor muyum?"
  5. Liderliğe güven — "Liderlik bana söyleneni inanıyor muyum?"

  **Skor yorumlaması:**
  | Skor | İşaret | Aksiyon |
  |-------|--------|--------|
  | 80–100% | Sağlıklı | Sürdür, kutla, dokümante et |
  | 65–79% | Uyarı | Spesifik gerilimi tanımla — aşırı tepki verme |
  | 50–64% | Hasarlı | Acil liderlik dikkat + spesifik düzeltmeler |
  | < 50% | Kriz | Kültür acil durumu — tüm-şirket müdahalesi |

  ### 5. Aşamaya Göre Kültürel Ritüeller

  Ritüeller, kültür için teslim mekanizmasıdır. 10 kişide çalışan şey 100'de çöker.

  **Tohum aşaması (< 15 kişi)**
  - Haftalık tüm-şirket toplantısı (30 dk): şirket güncellemesi + bir başarı + bir öğrenme
  - Aylık retrospektif: ne çalışıyor, ne değil — hiyerarşi yok
  - "Varsayılan olarak şeffaf": spesifik bir neden olmadığı sürece her şeyi paylaş

  **Erken büyüme (15–50 kişi)**
  - Üç aylık kültür anketi: ilk resmi check-in
  - Tanıma ritüeli: açık, halka açık, değerlere bağlı (sadece sonuçlara değil)
  - Onboarding buddy programı: kültürel iletim artık kasıtlı çaba gerektirir
  - Liderlik ofis saatleri: kurucu şirket katmanları ortaya çıktıkça erişilebilir kalır

  **Ölçekleme (50–200 kişi)**
  - Kültür komitesi (HR tarafından değil, eşler tarafından yönetilir): her üç ayda bir 4–6 kişi döner
  - Değer tabanlı performans incelemesi: kültür uyumu varsayılmaz, ölçülür
  - Yönetici eğitimi: kültür şimdi takım liderlerinde yaşar veya ölür
  - Departman tüm-şirket + şirket tüm-şirket ayrı

  **Büyük (200+ kişi)**
  - Strateji olarak kültür: sahibi ve KPI'ları olan açık yıllık kültür planı
  - Kültür için iç NPS ("Bu şirketi bir arkadaşa tavsiye eder misiniz?")
  - Altkültür yönetimi: mühendislik kültürü ≠ satış kültürü — her ikisi de şirket çekirdeğine uyum sağlamalı

  ### 6. Kültür Anti-Patternleri

  **Değer taklitçiliği:** Uygulamadığınız değerleri listeleme. Belirti: değerler tartışması sırasında çalışanlar gözlerini yuvarlar.
  - Düzeltme: Değer denetimi çalıştırın. "Son terfi alan kişi neyi gösterdi?" diye sorun. Değerlerinizle uyuşmazsa — gerçek değerleriniz farklı.

  **Kültür borcu:** Zamanla kültürel ödünler birikme. "Toksik yıldız performansçıyı sonra çözeriz." Sonra bileşke.
  - Düzeltme: Kültür ihlallerine gerektiğinden daha hızlı hareket edin. Bir tolere edilen kötü davranış, on iyi davranışın inşa ettiğini yok eder.

  **Kurucu kültürü tuzağı:** Kültür kurulundaki takımın kişiliğinde donmuş kalır. Yeni işe alımlar asimile olur ya da ayrılır.
  - Düzeltme: Değerleri ölçeklendirdikçe açıkça geliştirin. 10 kişide çalışan şey (hızlı hareket et, affedilmesi iste) 100'de yıkıcı olabilir (proses gerekli).

  **Osmoz yoluyla kültür:** Kültürün doğal olarak iletildiğini varsay. 10 kişide böyleydi. 50'de değil.
  - Düzeltme: Kültürü bilinçli yapın. Dokümante edin. Öğretin. Ölçün. Açıkça ödüllendirin.

  ## C-Suite ile Kültür Entegrasyonu

  | Zaman... | Kültür Mimarı birlikte çalışır... | Şöyle ki... |
  |---------|---------------------------------|-------|
  | İşe alım dalgası | İK Müdürü | Kültür uyumu tahmin değil, ölçülü olsun |
  | Org yeniden yapılanması | COO + CEO | Yapı değişikliğinden kültür bozulmasını yönet |
  | M&A veya ortaklık | CEO + COO | Kültür çatışmalarını erkende tespit ve çöz |
  | Performans sorunları | İK Müdürü | Kültür uyumunu beceri açığından ayır |
  | Strateji dönüşü | CEO | Dönüşümü eski kılan değerleri/davranışları güncelle |
  | Hızlı büyüme | Tümü | Kültür seyreltilmeden önce ritüelleri ölçekle |

  ## Kültür Mimarı'nın Sorduğu Anahtar Sorular

  - "Kültür nedeniyle kovduğumuz son kişinin adını sayabilir misin? Ne yaptılar?"
  - "Son terfi alan çalışanınızı hangi davranış terfi ettirdi? Bu değerlerinizde var mı?"
  - "Yeni bir işe alındı 1. günde gözlemleyeceği ne, burada neyin gerçekten değerli olduğunu söyler?"
  - "Tolere ettiğimiz ama etmememiz gereken nedir? Kim bilir ve hiçbir şey yapmaz?"
  - "Berlin'deki bir takım lideri Madrid'de kültürün ne olduğunu nasıl öğrensin?"

  ## Kırmızı Bayraklar

  - Değerler duvarda asılı, incelemeler veya kararlardan asla bahsedilmiyor
  - Yıldız performansçılar kültürel standartlardan korunuyor
  - Kültür ritüelleri için "zamanı olmayan" liderler
  - Yeni işe alımlar kültürün "reklamdan farklı" olduğunu hissediyor
  - Kültürel kaygıları güvenli bir şekilde ortaya koymak için mekanizma yok
  - Kültür anketi sonuçları ekipe asla paylaşılmıyor

  ## Detaylı Referanslar
  - `references/culture-playbook.md` — Netflix analizi, anket tasarımı, ritüel örnekleri, M&A oyun kitabı
  - `templates/culture-code-template.md` — Kültür kodu belge şablonu
---

# Culture Architect

Culture is what you DO, not what you SAY. This skill builds culture as an operational system — observable behaviors, measurable health, and rituals that scale.

## Keywords
culture, company culture, values, mission, vision, culture code, cultural rituals, culture health, values-to-behaviors, founder culture, culture debt, value-washing, culture assessment, culture survey, Netflix culture deck, HubSpot culture code, psychological safety, culture scaling

## Core Principle

**Culture = (What you reward) + (What you tolerate) + (What you celebrate)**

If your values say "transparency" but you punish bearers of bad news — your real value is "optics." Culture is not aspirational. It's descriptive. The work is closing the gap between stated and actual.

## Frameworks

### 1. Mission / Vision / Values Workshop

Run this conversationally, not as a corporate offsite. Three questions:

**Mission** — Why do we exist (beyond making money)?
- "What would be lost if we disappeared tomorrow?"
- Mission is present-tense. "We reduce preventable falls in elderly care." Not "to be the leading..."

**Vision** — What does winning look like in 5–10 years?
- Specific enough to be wrong. "Every care home in Europe uses our system" beats "be the market leader."

**Values** — What behaviors do we actually model?
- Start with what you observe, not what sounds good. "What did our last great hire do that nobody asked them to?"
- Keep to 3–5. More than 5 and none of them mean anything.

### 2. Values → Behaviors Translation

This is the work. Every value needs behavioral anchors or it's decoration.

| Value | Bad version | Behavioral anchor |
|-------|------------|-------------------|
| Transparency | "We're open and honest" | "We share bad news within 24 hours, including to our manager" |
| Ownership | "We take responsibility" | "We don't hand off problems — we own them until resolved, even across team boundaries" |
| Speed | "We move fast" | "Decisions under €5K happen at team level, same day, no approval needed" |
| Quality | "We don't cut corners" | "We stop the line before shipping something we're not proud of" |
| Customer-first | "Customers are our priority" | "Any team member can escalate a customer issue to leadership, bypassing normal channels" |

**Workshop exercise:** Write your value. Then ask "How would a new hire know we actually live this on day 30?" If you can't answer concretely, it's not a value — it's an aspiration.

### 3. Culture Code Creation

A culture code is a public document that describes how you operate. It should scare off the wrong people and attract the right ones.

**Structure:**
1. Who we are (mission + context)
2. Who thrives here (specific behaviors, not adjectives)
3. Who doesn't thrive here (honest — this is the useful part)
4. How we make decisions
5. How we communicate
6. How we grow people
7. What we expect of leaders

See `templates/culture-code-template.md` for a complete template.

**Anti-patterns to avoid:**
- "We're a family" — families don't fire each other for performance
- Listing only positive traits — the "who doesn't thrive here" section is what makes it credible
- Making it aspirational instead of descriptive

### 4. Culture Health Assessment

Run quarterly. 8–12 questions. Anonymous. See `references/culture-playbook.md` for survey design.

**Core areas to measure:**
1. Psychological safety — "Can I raise a concern without fear?"
2. Clarity — "Do I know how my work connects to company goals?"
3. Fairness — "Are decisions made consistently and transparently?"
4. Growth — "Am I learning and being challenged here?"
5. Trust in leadership — "Do I believe what leadership tells me?"

**Score interpretation:**
| Score | Signal | Action |
|-------|--------|--------|
| 80–100% | Healthy | Maintain, celebrate, document |
| 65–79% | Warning | Identify specific friction — don't over-react |
| 50–64% | Damaged | Urgent leadership attention + specific fixes |
| < 50% | Crisis | Culture emergency — all-hands intervention |

### 5. Cultural Rituals by Stage

Rituals are the delivery mechanism for culture. What works at 10 people breaks at 100.

**Seed stage (< 15 people)**
- Weekly all-hands (30 min): company update + one win + one learning
- Monthly retrospective: what's working, what's not — no hierarchy
- "Default to transparency": share everything unless there's a specific reason not to

**Early growth (15–50 people)**
- Quarterly culture survey: first formal check-in
- Recognition ritual: explicit, public, tied to values (not just results)
- Onboarding buddy program: cultural transmission now requires intentional effort
- Leadership office hours: founders stay accessible as layers appear

**Scaling (50–200 people)**
- Culture committee (peer-driven, not HR): 4–6 people rotating quarterly
- Values-based performance review: culture fit is measured, not assumed
- Manager training: culture now lives or dies in team leads
- Department all-hands + company all-hands separate

**Large (200+ people)**
- Culture as strategy: explicit annual culture plan with owner and KPIs
- Internal NPS for culture ("Would you recommend this company to a friend?")
- Subculture management: engineering culture ≠ sales culture — both must align to company core

### 6. Culture Anti-Patterns

**Value-washing:** Listing values you don't practice. Symptom: employees roll their eyes during values discussions.
- Fix: Run a values audit. Ask "What did the last person who got promoted demonstrate?" If it doesn't match your values, your real values are different.

**Culture debt:** Accumulating cultural compromises over time. "We'll address the toxic star performer later." Later compounds.
- Fix: Act on culture violations faster than you think necessary. One tolerated bad behavior destroys what ten good behaviors build.

**Founder culture trap:** Culture stays frozen at founding team's personality. New hires assimilate or leave.
- Fix: Explicitly evolve values as you scale. What worked at 10 people (move fast, ask forgiveness) may be destructive at 100 (we need process).

**Culture by osmosis:** Assuming culture transmits naturally. It did at 10 people. It doesn't at 50.
- Fix: Make culture intentional. Document it. Teach it. Measure it. Reward it explicitly.

## Culture Integration with C-Suite

| When... | Culture Architect works with... | To... |
|---------|---------------------------------|-------|
| Hiring surge | CHRO | Ensure culture fit is measured, not guessed |
| Org reorg | COO + CEO | Manage culture disruption from structure change |
| M&A or partnership | CEO + COO | Detect and resolve culture clashes early |
| Performance issues | CHRO | Separate culture fit from skill deficit |
| Strategy pivot | CEO | Update values/behaviors that the pivot makes obsolete |
| Rapid growth | All | Scale rituals before culture dilutes |

## Key Questions a Culture Architect Asks

- "Can you name the last person we fired for culture reasons? What did they do?"
- "What behavior got your last promoted employee promoted? Is that in your values?"
- "What would a new hire observe on day 1 that tells them what's really valued here?"
- "What do we tolerate that we shouldn't? Who knows and does nothing?"
- "How does a team lead in Berlin know what the culture is in Madrid?"

## Red Flags

- Values posted on the wall, never referenced in reviews or decisions
- Star performers protected from cultural standards
- Leaders who "don't have time" for culture rituals
- New hires feeling the culture is "different than advertised"
- No mechanism to raise cultural concerns safely
- Culture survey results never shared with the team

## Detailed References
- `references/culture-playbook.md` — Netflix analysis, survey design, ritual examples, M&A playbook
- `templates/culture-code-template.md` — Culture code document template
