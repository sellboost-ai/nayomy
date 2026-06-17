---
name: "company-os"
description_en: "The meta-framework for how a company runs — the connective tissue between all C-suite roles. Covers operating system selection (EOS, Scaling Up, OKR-native, hybrid), accountability charts, scorecards, meeting pulse, issue resolution, and 90-day rocks. Use when setting up company operations, selecting a management framework, designing meeting rhythms, building accountability systems, implementing O"
description_tr: "Bir şirketin nasıl işlediğine dair meta-framework — C-suite rolleri arasındaki bağlantı dokusu. İşletim sistemi seçimi (EOS, Scaling Up, OKR-native, hybrid), sorumluluk haritaları, scorecardlar, toplantı ritmi, sorun çözümü ve 90 günlük rockları kapsar. Şirket operasyonlarını kurarken, yönetim framework'ü seçerken, toplantı ritimleri tasarlarken ve sorumluluk sistemleri oluştururken kullanın."
category: "Design"
repo: "alirezarezvani/claude-skills"
stars: 18266
url: "https://github.com/alirezarezvani/claude-skills/blob/HEAD/.gemini/skills/company-os/SKILL.md"
path: ".gemini/skills/company-os/SKILL.md"
is_collection: false
body_length: 9866
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Şirket İşletme Sistemi

  İşletme sistemi, şirketin nasıl çalıştığını belirleyen araçlar, ritimler ve anlaşmaların toplamıdır. Her şirketin biri vardır — çoğu sadece neyin olduğunu bilmez. Bunu açık hale getirmek onu iyileştirilebilir kılar.

  ## Anahtar Kelimeler
  operating system, EOS, Entrepreneurial Operating System, Scaling Up, Rockefeller Habits, OKR, Holacracy, L10 meeting, rocks, scorecard, accountability chart, issues list, IDS, meeting pulse, quarterly planning, weekly scorecard, management framework, company rhythm, traction, Gino Wickman, Verne Harnish

  ## Neden Bu Önemli

  Çoğu operasyonel aksaklık bir insan problemi değil — sistem problemidir. Şu durumlarda:
  - Aynı sorunlar her hafta tekrarlanır: sorun çözme sistemi yok
  - Toplantılar anlamsız gözüküyor: yapılandırılmış toplantı ritmi yok
  - Kimse kimin neyin sorumlu olduğunu bilmiyor: hesap verebilirlik şeması yok
  - Üç aylık hedefler kaymaya devam ediyor: rocks gerçek taahhütler değil

  Sistemi düzelt. İnsanlar onun içinde daha iyi çalışacak.

  ## Altı Temel Bileşen

  Her etkili işletme sisteminin seçtiğin çerçeve ne olursa olsun bu altısı vardır:

  ### 1. Hesap Verebilirlik Şeması

  Bir org chart değil. Hesap verebilirlik şeması şu soruyu cevaplar: "Kim bu sonucun sahibi?"

  **Temel fark:** Her fonksiyon için bir kişi sahibi olur. İçinde birden çok kişi çalışabilir. Sahiplik, sorumluluk tek bir kişinin omuzunda durması anlamına gelir.

  **Yapı:**
  ```
  CEO
  ├── Satış (CRO/VP Sales)
  │   ├── Gelen pipeline
  │   └── Giden pipeline
  ├── Ürün & Mühendislik (CTO/CPO)
  │   ├── Ürün yol haritası
  │   └── Mühendislik teslimi
  ├── Operasyonlar (COO)
  │   ├── Müşteri başarısı
  │   └── Finans & Hukuk
  └── İnsan Kaynakları (CHRO/VP People)
      ├── İşe alım
      └── İnsan kaynakları operasyonları
  ```

  **Kurallar:**
  - Paylaşılan sahiplik yok. "Alice ve Bob ikisi de sahibi" anlamına gelir hiç kimse sahibi değil.
  - Erken aşamalarda bir kişi birden çok pozisyona sahip olabilir. Bu sorun değil. Sadece açık ol.
  - Ölçekledikçe üç ayda bir gözden geçir. Sahiplik şirket büyüdükçe değişir.

  **Workshop'ta oluştur:**
  1. Şirketin gerçekleştirdiği tüm fonksiyonları listele
  2. Her fonksiyona bir sahip ata — hiç istisna yok
  3. Boşlukları belirle (kimsenin sahip olmadığı fonksiyonlar) ve örtüşmeleri (iki kişinin sahibi olduğunu düşündüğü fonksiyonlar)
  4. Yayınla. Değiştiğinde güncelle.

  ### 2. Scorecard

  Şirketin doğru yolda olup olmadığını anlatan haftalık metrikler. Aylık değil. Üç aylık değil. Haftalık.

  **Kurallar:**
  - Maksimum 5–15 metrik. 15'ten fazlası dikkat alır.
  - Her metriğin bir sahibi ve haftalık hedefi var (bir aralık değil — bir sayı).
  - Kırmızı/sarı/yeşil durum. Paragraflar değil.
  - Scorecard liderlik ekibi haftalık toplantısında tartışılır. Sadece kırmızı metrikler tartışma zamanı alır.

  **Örnek scorecard yapısı:**

  | Metrik | Sahip | Hedef | Bu Hafta | Durum |
  |--------|-------|-------|----------|-------|
  | Yeni MRR | CRO | €50K | €43K | 🔴 |
  | Churn | CS Lead | < 1% | 0.8% | 🟢 |
  | Aktif kullanıcılar | CPO | 2,000 | 2,150 | 🟢 |
  | Deploymentlar | CTO | 3/hafta | 3 | 🟢 |
  | Açık kritik buglar | CTO | 0 | 2 | 🔴 |
  | Runway | CFO | > 18 ay | 16 ay | 🟡 |

  **Anti-pattern:** Her şeyi ölçmek. 40 KPI takip ediyorsan, izliyorsun, yönetmiyorsun.

  ### 3. Toplantı Ritmi

  Şirketi yönlendiren toplantı süresi. İsteğe bağlı değil — ritim şirketi hayatta tutan şeydir.

  **Tam ritim:**

  | Toplantı | Sıklık | Süre | Katılanlar | Amaç |
  |----------|--------|------|-----------|------|
  | Günlük standup | Günlük | 15 dk | Her ekip | Sadece engeller |
  | L10 / Liderlik senkronizasyonu | Haftalık | 90 dk | Liderlik ekibi | Scorecard + sorunlar |
  | Departman incelemesi | Aylık | 60 dk | Departman + liderlik | OKR ilerlemesi |
  | Üç aylık planlama | Üç aylık | 1–2 gün | Liderlik | Rocks belirle, strateji gözden geçir |
  | Yıllık planlama | Yıllık | 2–3 gün | Liderlik | 1 yıl + 3 yıl vizyonu |

  **L10 Toplantısı (Haftalık Liderlik Senkronizasyonu):**
  Her toplantının amacının 10/10 olması nedeniyle adlandırılmıştır. Sabit gündem:
  1. İyi haber (5 dk) — kişisel + iş
  2. Scorecard incelemesi (5 dk) — sadece kırmızı öğeleri işaretle
  3. Rock incelemesi (5 dk) — her rock için doğru yolda/sapma
  4. Müşteri/çalışan başlıkları (5 dk)
  5. Sorunlar listesi (60 dk) — IDS (aşağıya bak)
  6. To-dos incelemesi (5 dk) — geçen haftanın taahhütleri
  7. Sonlandır (5 dk) — toplantıyı 1–10 ile değerlendir, bir sonraki toplantının 10 olması için ne gerekir

  ### 4. Sorun Çözme (IDS)

  Çekirdek problem-çözme döngüsü. Sorun başına maksimum 15 dakika.

  **IDS: Identify, Discuss, Solve (Tanımla, Tartış, Çöz)**

  - **Tanımla:** Gerçek sorun nedir? (Semptom değil — kök neden) Bunu bir cümlede belirt.
  - **Tartış:** İlgili gerçekler + bakış açıları. Zaman sınırlı. Tartışma tekrarlamaya başladığında dur.
  - **Çöz:** Bir sahip. Bir aksiyon. Bir bitiş tarihi. To-do listesine yazılmış.

  **Anti-patternler:**
  - "Bunu sonra konuşalım" — offline alınan çoğu şey hiçbir zaman çözülmez
  - Karar vermeden tartışmak — aksiyon öğesi olmayan harika bir tartışma israf edilmiş zamandır
  - Çözülen sorunları yeniden gözden geçirmek — çözüldükten sonra listeden çıkar. Sadece yeni bilgiyle yeniden aç.

  **Sorunlar Listesi:** Tüm çözülmemiş sorunların çalışan, önceliklendirilmiş listesi. Liderlik ekibi tarafından sahiplenilir. Haftalık olarak incelenir ve budanır. Bir sorun 3+ toplantıdan beri listede varsa ve tartışılmadıysa, o gerçek bir sorun değildir ya da ele alınmayı çok korkutur — her iki durumda da dikkat gerekir.

  ### 5. Rocks (90 Günlük Öncelikler)

  Rocks, sonraki 90 günde her kişinin başarması gereken 3–7 en önemli şeydir. İş tanımı değildir — bunlar şirketi ileri taşıyan şeylerdir.

  **Neden 90 gün?** Anlamlı ilerleme için yeterince uzun. Gerçekçi kalabilmek için yeterince kısa.

  **Rock kuralları:**
  - Her kişi: maksimum 3–7 rock. 7'den fazlası yapılmaz.
  - Şirket düzeyinde rocklar (paylaşılan öncelikler): liderlik ekibi için 3–7
  - Her rock ikilidir: yapıldı ya da yapılmadı. "Yüzde 60 tamamlandı" olmaz.
  - Üç aylık planlama oturumunda belirlenir. Haftalık incelenir (doğru yolda/sapma).

  **Kötü rock:** "Satış sürecimizi iyileştir"
  **İyi rock:** "Salesforce CRM'i tam pipeline aşamaları ve haftalık raporlamalar ile 31 Mart'a kadar uygula"

  **Rock vs. to-do:** Bir to-do bir aksiyon alır. Bir rock 90 günlük tutarlı çalışma alır.

  ### 6. İletişim Temposu

  Kim hangi bilgiyi, ne zaman ve nasıl alır.

  | Hedef Kitle | Ne | Ne Zaman | Format |
  |------------|-----|---------|--------|
  | Tüm çalışanlar | Şirket güncellemesi | Aylık | Yazılı + Q&A |
  | Tüm çalışanlar | Üç aylık sonuçlar + sonraki öncelikler | Üç aylık | All-hands |
  | Liderlik ekibi | Scorecard | Haftalık | Dashboard |
  | Board | Şirket performansı | Aylık | Board notası |
  | Yatırımcılar | Temel metrikler + anlatı | Aylık ya da üç aylık | Yatırımcı güncellemesi |
  | Müşteriler | Ürün güncellemeleri | Sürüm başına | Sürüm notları |

  **Varsayılan kural:** Bir şeyi şirket içinde paylaşıp paylaşmayacağını düşünüyorsan, paylaş. Bir şirket içinde az iletişim maliyeti her zaman aşırı iletişim maliyetini aşar.

  ---

  ## İşletme Sistemi Seçimi

  Tam karşılaştırma için `references/os-comparison.md` dosyasına bak. Hızlı rehber:

  | Eğer sen... | Düşün... |
  |-----------|---------|
  | 10–250 kişilik şirket, kurucu liderliği, operasyonel kaos | EOS / Traction |
  | Hırslı büyüme şirketi, sıkı strateji kaskadına ihtiyaç | Scaling Up |
  | Teknoloji şirketi, mühendislik kültürü, hipotez-odaklı | OKR-native |
  | Merkezi olmayan, düz, yüksek otonomi | Holacracy (sadece sabırlıysan) |
  | Yukarıdakilerden hiçbiri tam uymuyor | Özel hibrit |

  ---

  ## Uygulama Yol Haritası

  Bunların hepsini aynı anda uygulama. Tam 90 günlük plan için `references/implementation-guide.md` dosyasına bak.

  **Hızlı başlangıç (ilk 30 gün):**
  1. Hesap verebilirlik şeması oluştur (1 workshop, 2 saat)
  2. 5–10 haftalık scorecard metriki tanımla (liderlik ekibi hizalaması, 1 saat)
  3. Haftalık L10 toplantısını başlat (hazırlık yok — sadece başla)

  Bu üçü bile çoğu şirketin bir yılda başardığından daha fazla koordinasyonu iyileştirecek.

  ---

  ## Yaygın Başarısızlık Modları

  **Kısmi uygulama:** "Biz OKRs yapıyoruz ama haftalık check-in'i atlıyoruz." Yarım işletme sistemi hiçbir sistemden daha kötüdür — sorumluluk olmadan tiyatro yaratır.

  **Toplantı yorgunluğu:** Mevcut toplantıların üzerine tam ritmi ekleme. Toplantı ekleyerek değil, değiştirerek başla.

  **Metrik aşırısı:** 30 KPI ile başlama çünkü "hepsi önemlidir." 5 ile başla. Tempo kurulduktan sonra ekle.

  **Rock enflasyonu:** Kişi başına 12 rock belirleme çünkü "her şey bir önceliktir." Her şey bir öncelik olduğunda, hiçbir şey değildir. Sert sınır: 7.

  **Liderlik uyummazlığı:** Liderlik ekibi L10'u atlar ya da IDS'i takip etmez. İşletme sistemi liderliğin ona verdiği saygıyı yansıtır. Liderler bunu ciddiye almıyorsa, hiç kimse almaz.

  **Yıllık planlama olmadan üç aylık inceleme:** Yıllık hedefleri belirleme ve yıl sonunda kontrol etme. Üç aylık, herhangi bir anlamlı hedef için en düşük inceleme döngüsüdür.

  ---

  ## C-Suite ile Entegrasyon

  Şirket işletme sistemi bağlantı dokusudur. Her diğer rol buna bağlıdır:

  | C-Suite Rolü | İşletme Sistemi Bağımlılığı |
  |-------------|--------------------------|
  | CEO | 1 yıllık plan ve rocklar'a beslenen vizyonu belirler |
  | COO | Toplantı ritmi ve sorun çözme temposunun sahibi |
  | CFO | Scorecard'daki finansal metriklerinin sahibi |
  | CTO | Mühendislik rockları ve teknoloji scorecard metriklerinin sahibi |
  | CHRO | Scorecard'daki insan metriklerinin sahibi (attrition, işe alım hızı) |
  | Kültür Mimarı | Kültür ritüelleri toplantı ritminin içine takılır |
  | Stratejik Hizalama Motoru | Takım rockları'nın şirket rockları'ndan kaskad olduğunu doğrular |

  ---

  ## İşletme Sistemi için Temel Sorular

  - "Beş farklı ekip liderine bu çeyrekteki şirketin ilk 3 önceliğinin ne olduğunu sorsam, aynı cevapları verirler mi?"
  - "Geçen haftanın liderlik toplantısında gündeme alınan en önemli sorun neydi? Çözüldü mü yoksa hâlâ açık mı?"
  - "Bu haftanın iyi bir hafta olup olmadığını Cuma'ya kadar bize söyleyecek bir metriki adlandır. Bunu takip ediyor muyuz?"
  - "Müşteri churn'unu kimin sahibi? O kişiyi hiç tereddüt etmeden adlandırabilir misin?"
  - "Hesap verebilirlik şeması ne zaman güncellendi?"

  ## Detaylı Referanslar
  - `references/os-comparison.md` — EOS vs Scaling Up vs OKRs vs Holacracy vs hibrit
  - `references/implementation-guide.md` — 90 günlük uygulama planı
---

# Company Operating System

The operating system is the collection of tools, rhythms, and agreements that determine how the company functions. Every company has one — most just don't know what it is. Making it explicit makes it improvable.

## Keywords
operating system, EOS, Entrepreneurial Operating System, Scaling Up, Rockefeller Habits, OKR, Holacracy, L10 meeting, rocks, scorecard, accountability chart, issues list, IDS, meeting pulse, quarterly planning, weekly scorecard, management framework, company rhythm, traction, Gino Wickman, Verne Harnish

## Why This Matters

Most operational dysfunction isn't a people problem — it's a system problem. When:
- The same issues recur every week: no issue resolution system
- Meetings feel pointless: no structured meeting pulse
- Nobody knows who owns what: no accountability chart
- Quarterly goals slip: rocks aren't real commitments

Fix the system. The people will operate better inside it.

## The Six Core Components

Every effective operating system has these six, regardless of which framework you choose:

### 1. Accountability Chart

Not an org chart. An accountability chart answers: "Who owns this outcome?"

**Key distinction:** One person owns each function. Multiple people may work in it. Ownership means the buck stops with one person.

**Structure:**
```
CEO
├── Sales (CRO/VP Sales)
│   ├── Inbound pipeline
│   └── Outbound pipeline
├── Product & Engineering (CTO/CPO)
│   ├── Product roadmap
│   └── Engineering delivery
├── Operations (COO)
│   ├── Customer success
│   └── Finance & Legal
└── People (CHRO/VP People)
    ├── Recruiting
    └── People operations
```

**Rules:**
- No shared ownership. "Alice and Bob both own it" means nobody owns it.
- One person can own multiple seats at early stages. That's fine. Just be explicit.
- Revisit quarterly as you scale. Ownership shifts as the company grows.

**Build it in a workshop:**
1. List all functions the company performs
2. Assign one owner per function — no exceptions
3. Identify gaps (functions nobody owns) and overlaps (functions two people think they own)
4. Publish it. Update it when something changes.

### 2. Scorecard

Weekly metrics that tell you if the company is on track. Not monthly. Not quarterly. Weekly.

**Rules:**
- 5–15 metrics maximum. More than 15 and nothing gets attention.
- Each metric has an owner and a weekly target (not a range — a number).
- Red/yellow/green status. Not paragraphs.
- The scorecard is discussed at the leadership team weekly meeting. Only red metrics get discussion time.

**Example scorecard structure:**

| Metric | Owner | Target | This Week | Status |
|--------|-------|--------|-----------|--------|
| New MRR | CRO | €50K | €43K | 🔴 |
| Churn | CS Lead | < 1% | 0.8% | 🟢 |
| Active users | CPO | 2,000 | 2,150 | 🟢 |
| Deployments | CTO | 3/week | 3 | 🟢 |
| Open critical bugs | CTO | 0 | 2 | 🔴 |
| Runway | CFO | > 18mo | 16mo | 🟡 |

**Anti-pattern:** Measuring everything. If you track 40 KPIs, you're watching, not managing.

### 3. Meeting Pulse

The meeting rhythm that drives the company. Not optional — the pulse is what keeps the company alive.

**The full rhythm:**

| Meeting | Frequency | Duration | Who | Purpose |
|---------|-----------|----------|-----|---------|
| Daily standup | Daily | 15 min | Each team | Blockers only |
| L10 / Leadership sync | Weekly | 90 min | Leadership team | Scorecard + issues |
| Department review | Monthly | 60 min | Dept + leadership | OKR progress |
| Quarterly planning | Quarterly | 1–2 days | Leadership | Set rocks, review strategy |
| Annual planning | Annual | 2–3 days | Leadership | 1-year + 3-year vision |

**The L10 meeting (Weekly Leadership Sync):**
Named for the goal of each meeting being a 10/10. Fixed agenda:
1. Good news (5 min) — personal + business
2. Scorecard review (5 min) — flag red items only
3. Rock review (5 min) — on/off track for each rock
4. Customer/employee headlines (5 min)
5. Issues list (60 min) — IDS (see below)
6. To-dos review (5 min) — last week's commitments
7. Conclude (5 min) — rate the meeting 1–10, what would make it a 10 next time

### 4. Issue Resolution (IDS)

The core problem-solving loop. Maximum 15 minutes per issue.

**IDS: Identify, Discuss, Solve**

- **Identify:** What is the actual issue? (Not the symptom — the root cause) State it in one sentence.
- **Discuss:** Relevant facts + perspectives. Time-boxed. When discussion starts repeating, stop.
- **Solve:** One owner. One action. One due date. Written on the to-do list.

**Anti-patterns:**
- "Let's take this offline" — most things taken offline never get resolved
- Discussing without deciding — a great discussion with no action item is wasted time
- Revisiting decided issues — once solved, it leaves the list. Reopen only with new information.

**The Issues List:** A running, prioritized list of all unresolved issues. Owned by the leadership team. Reviewed and pruned weekly. If an issue has been on the list for 3+ meetings and hasn't been discussed, it's either not a real issue or it's too scary to address — both deserve attention.

### 5. Rocks (90-Day Priorities)

Rocks are the 3–7 most important things each person must accomplish in the next 90 days. They're not the job description — they're the things that move the company forward.

**Why 90 days?** Long enough for meaningful progress. Short enough to stay real.

**Rock rules:**
- Each person: 3–7 rocks maximum. More than 7 and none get done.
- Company-level rocks (shared priorities): 3–7 for the leadership team
- Each rock is binary: done or not done. No "60% complete."
- Set at the quarterly planning session. Reviewed weekly (on/off track).

**Bad rock:** "Improve our sales process"
**Good rock:** "Implement Salesforce CRM with full pipeline stages and weekly reporting by March 31"

**Rock vs. to-do:** A to-do takes one action. A rock takes 90 days of consistent work.

### 6. Communication Cadence

Who gets what information, when, and how.

| Audience | What | When | Format |
|----------|------|------|--------|
| All employees | Company update | Monthly | Written + Q&A |
| All employees | Quarterly results + next priorities | Quarterly | All-hands |
| Leadership team | Scorecard | Weekly | Dashboard |
| Board | Company performance | Monthly | Board memo |
| Investors | Key metrics + narrative | Monthly or quarterly | Investor update |
| Customers | Product updates | Per release | Release notes |

**Default rule:** If you're deciding whether to share something internally, share it. The cost of under-communication always exceeds the cost of over-communication inside a company.

---

## Operating System Selection

See `references/os-comparison.md` for full comparison. Quick guide:

| If you are... | Consider... |
|---------------|-------------|
| 10–250 person company, founder-led, operational chaos | EOS / Traction |
| Ambitious growth company, need rigorous strategy cascade | Scaling Up |
| Tech company, engineering culture, hypothesis-driven | OKR-native |
| Decentralized, flat, high autonomy | Holacracy (only if you're patient) |
| None of the above quite fit | Custom hybrid |

---

## Implementation Roadmap

Don't implement everything at once. See `references/implementation-guide.md` for the full 90-day plan.

**Quick start (first 30 days):**
1. Build the accountability chart (1 workshop, 2 hours)
2. Define 5–10 weekly scorecard metrics (leadership team alignment, 1 hour)
3. Start the weekly L10 meeting (no prep — just start)

These three alone will improve coordination more than most companies achieve in a year.

---

## Common Failure Modes

**Partial implementation:** "We do OKRs but skip the weekly check-in." Half an operating system is worse than none — it creates theater without accountability.

**Meeting fatigue:** Adding the full rhythm on top of existing meetings. Start by replacing meetings, not adding them.

**Metric overload:** Starting with 30 KPIs because "they all matter." Start with 5. Add when the cadence is established.

**Rock inflation:** Setting 12 rocks per person because "everything is a priority." When everything is a priority, nothing is. Hard limit: 7.

**Leader non-compliance:** Leadership team skips the L10 or doesn't follow IDS. The operating system mirrors the respect leadership gives it. If leaders don't take it seriously, nobody will.

**Annual planning without quarterly review:** Setting annual goals and checking in at year-end. Quarterly is the minimum review cycle for any meaningful goal.

---

## Integration with C-Suite

The company OS is the connective tissue. Every other role depends on it:

| C-Suite Role | OS Dependency |
|-------------|---------------|
| CEO | Sets vision that feeds into 1-year plan and rocks |
| COO | Owns the meeting pulse and issue resolution cadence |
| CFO | Owns the financial metrics in the scorecard |
| CTO | Owns engineering rocks and tech scorecard metrics |
| CHRO | Owns people metrics (attrition, hiring velocity) in scorecard |
| Culture Architect | Culture rituals plug into the meeting pulse |
| Strategic Alignment Engine | Validates that team rocks cascade from company rocks |

---

## Key Questions for the Operating System

- "If I asked five different team leads what the company's top 3 priorities are this quarter, would they give the same answers?"
- "What was the most important issue raised in last week's leadership meeting? Was it resolved or is it still open?"
- "Name a metric that would tell us by Friday whether this week was a good week. Do we track it?"
- "Who owns customer churn? Can you name that person without hesitation?"
- "When was the last time we updated the accountability chart?"

## Detailed References
- `references/os-comparison.md` — EOS vs Scaling Up vs OKRs vs Holacracy vs hybrid
- `references/implementation-guide.md` — 90-day implementation plan
