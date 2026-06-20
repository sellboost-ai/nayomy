---
name: "hard-call"
description_en: "/em:hard-call — Framework for decisions with no good options. Use when every option is painful and a structured 10/10/10 + regret-minimization pass is needed — e.g. choosing between a layoff and a down round, or killing a beloved product line."
description_tr: "/em:hard-call — Hiçbir seçeneği iyi olmayan kararlar için framework. Her opsiyon ağrılı olduğunda ve yapılandırılmış bir 10/10/10 analizi ile pişmanlık minimizasyonu gerektiğinde kullanın — örneğin, işten çıkarma ile down round arasında seçim yapmak ya da sevilen bir ürün serisini sonlandırmak gibi."
category: "Development"
repo: "alirezarezvani/claude-skills"
stars: 18572
url: "https://github.com/alirezarezvani/claude-skills/blob/HEAD/.gemini/skills/hard-call/SKILL.md"
path: ".gemini/skills/hard-call/SKILL.md"
is_collection: false
body_length: 7028
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # /em:hard-call — Zor Seçimlerin Çerçevesi
  
  **Komut:** `/em:hard-call <decision>`
  
  Sizi saat 3'te uyandıran kararlar için. Bir kurucu ortağı işten çıkarmak. Ekibin %20'sini layoff etmek. Müşterilerin sevdiği bir ürünü öldürmek. Pivot yapmak. Kapanmak.
  
  Bu kararların doğru bir cevabı yok. Sahip oldukları daha az yanlış bir cevaptır. Bu çerçeve bunu bulmanıza yardımcı olur.
  
  ---
  
  ## Bu Kararlar Neden Zordur
  
  Veriler belirsiz olduğu için değil. Çoğu zaman veriler açıktır. Zordurlar çünkü:
  
  1. **Gerçek insanlar etkileniyor** — birisi işini kaybediyor, bir ilişki bitiyor, bir ekip zarar görüyor
  2. **Karardan kaçınıyorsunuz** — bu da sorunun daha kötü hale geldiği anlamına geliyor
  3. **Geri döndürülemezlik** — çoğu iş kararının aksine, bunu kolayca geri alamazsınız
  4. **Oyuna katıldınız** — doğru çağrı hakkındaki yargınız bunun hakkındaki duygularınız tarafından bulanıyor
  
  Zor bir karardan ne kadar uzun kaçınırsanız, durum genellikle o kadar kötüleşir. 6 ay önce %10 kesintiye ihtiyacı olan şirket şimdi %25 kesintiye ihtiyacı vardır. Ay 4'te gerçekleşmesi gereken kurucu ortak konuşması ay 14'te gerçekleşiyor.
  
  **Çoğu zor karar, geç alınan kararlardır.**
  
  ---
  
  ## Çerçeve
  
  ### Adım 1: Geri Döndürülebilirlik Testi
  
  En önemli soru ilk: **bunu geri alabilir misiniz?**
  
  - **Geri döndürülebilir** — deneyin, öğrenin, ayarlayın (satıcıyı işten çıkarın, özelliği öldürün, stratejisini değiştirin)
  - **Kısmen geri döndürülebilir** — geri almak acılı ama mümkün (yeniden yapılandırma, kurucu ortak rollerini değiştirme)
  - **Geri döndürülemez** — geri alınamaz (bir kişiyi layoff etmek, müşteri lock-in'i olan bir ürünü kapatmak, hukuki bir varlığı kapatmak)
  
  Geri döndürülemez kararlar için kesinlik çubuğu daha yüksektir. Harekete geçmeden önce daha fazla durum tespiti yapmalısınız. Yanılıyor olabileceğiniz için değil — onu geri alamayacağınız için.
  
  **Geri döndürülebilir bir kararı geri döndürülemez gibi ele alıyorsanız, ondan kaçınıyorsunuz.**
  
  ### Adım 2: 10/10/10 Çerçevesi
  
  Her seçenek hakkında üç soru sorun:
  
  - **Şimdi 10 dakika sonra**: Bu kararı verdikten hemen sonra nasıl hissedersiniz?
  - **10 ay sonra**: Etki ne olacak? Sorun çözülecek mi?
  - **10 yıl sonra**: Geri baktığınızda, bu doğru çağrı olmuş mu?
  
  10 dakikalık his genellikle en az güvenilir rehberdir. 10 yıllık görünüş genellikle doğru çağrının gerçekte ne olduğunu netleştirir.
  
  **Çoğu zor karar, 10 yılda belirgin görünür. Soru, 10 dakikalık acıya katlanıp katlanamayacağınızdır.**
  
  ### Adım 3: Andy Grove Testi
  
  Andy Grove'un stratejik kararlar için testi: "Yarın bizi değiştirilseydi ve yeni bir CEO gelseydi, ne yapardı?"
  
  Taze bir bakış açısı, mevcut yola hiçbir duygusal yatırım yok, batık maliyet yok. Dışarıdan bakıldığında belirgin doğru çağrı nedir?
  
  Cevap bir yabancıya açık ise, soru şu hale gelir: neden bunu henüz yapmadınız?
  
  ### Adım 4: Paydaş Etki Haritalama
  
  Her seçenek için, kimin etkilendiğini ve nasıl etkilendiğini haritalamalandırın:
  
  | Paydaş | Seçenek A Etkisi | Seçenek B Etkisi | Onların Tepkisi |
  |--------|------------------|------------------|-----------------|
  | Etkilenen çalışanlar | | | |
  | Kalan ekip | | | |
  | Müşteriler | | | |
  | Yatırımcılar | | | |
  | Siz | | | |
  
  Bu, kimseyi incinme seçeneği bulma hakkında değil — öyle bir seçenek yok. Karar vermeden önce tam resmi anlamak hakkındadır.
  
  ### Adım 5: Duyuru Öncesi Testi
  
  Karar vermeden önce: duyuruyu yazın. Ekibe gönderilecek email, müşteriye gönderilecek mesaj, yapacağınız konuşma.
  
  **Bu duyuruyu yazamazsanız, bu kararı almaya hazır değilsiniz.**
  
  Bunu yazmak sizi ne yaptığınızın gerçeğiyle yüzleştirmeye zorlar. Ayrıca, akıl yürütmenizin inceleme altında tutulup tutulmadığını da ortaya çıkarır. "Bu değişikliği yapıyoruz çünkü..." — bu cümle doğru geliyor mu?
  
  ### Adım 6: İletişim Planı
  
  Zor kararlar, iletişim kötü ise neredeyse her zaman daha da zorlaşır. Karar kendisi önemli değil — nasıl yapıldığı çok önemlidir.
  
  Her zor çağrı için planlamanız gereken şeyler:
  - **Önce kimin bilmesi gerekiyor** (doğrudan etkilenen kişi, başka kimse olmadan önce)
  - **Onlara nasıl söyleyeceğiniz** (mümkün olduğunda yüz yüze, kişisel etkiler için asla email ile değil)
  - **Ne söyleyeceğiniz** (dürüst, doğrudan, şefkatli — bkz. `../executive-mentor/references/hard_things.md`)
  - **Ne sorabilecekleri** (her soruya hazır olun)
  - **Sonra ne geldiği** (onlara sonrasında ne olacağının açık bir resmini verin)
  
  ---
  
  ## Karar Özgü Çerçeveler
  
  ### Kurucu Ortak İşten Çıkarma
  Tam çerçeve için bkz. `../executive-mentor/references/hard_things.md — Co-Founder Conflicts`.
  
  Önce yanıtlaması gereken kilit sorular:
  - Bu bir performans sorunu mu yoksa değer/kültür sorunu mu? (Farklı konuşmalar)
  - Açık mı konuştunuz — işaret etmekle değil, doğrudan mı?
  - Cap table nasıl görünüyor ve yasal çıkarımlar neler?
  - Onlar için daha iyi bir rol var mı, yoksa bu tam bir çıkış mı?
  - Kimin bilmesi gerekiyor (kurul, ekip, yatırımcılar) ve hangi sırada?
  
  **Kural:** Bunu 3 aydan fazla düşünüyorsanız, zaten cevabı biliyorsunuz. Soru ne olduğu değil, ne zaman olduğudur.
  
  ### Layoff
  Kilit sorular:
  - Bu bir kerelik reset mi yoksa daha uzun bir düşüşün başlangıcı mı? (Bir reset kurtarılabilir. Seri layoff'lar kültürü öldürür.)
  - Yeterince derin mi kesiyorsunuz? (Yetersiz layoff'lar hiç layoff olmamaktan daha kötüdür — iki tur güveni yok eder.)
  - Duyuruya kimin sahip olduğu ve doğrudan ve dürüst mü?
  - Kıdem tazminatı nedir ve adil mi?
  - En iyi insanların sonrasında gitmesini nasıl önleyebilirsiniz?
  
  **Kural:** Bir kez kesin, derin kesin, haysiyetle kesin. Belirsizlik açıklıktan daha kötüdür.
  
  ### Pivot Yapmak
  Kilit sorular:
  - Bu gerçek bir pivot mi (yeni yön) yoksa bir optimizasyon mu (aynı yön, farklı taktik)?
  - Neyi tutuyorsunuz ve neyi terk ediyorsunuz?
  - Yeni yönün çalışacağına dair kanıtınız var mı, yoksa başarısızlıktan kaçıyor musunuz?
  - Eski vizyonu satın alan mevcut müşterilere bunu nasıl anlatıyorsunuz?
  - Bu, kurulun güvenine ne yapıyor?
  
  **Kural:** Pivot'ler yeni fırsat kanıtı tarafından çekilmeli, mevcut yolun başarısızlığı tarafından itilmemelidir.
  
  ### Bir Ürün Hattını Öldürmek
  Kilit sorular:
  - Şu anda kullanan müşterilere ne oluyor?
  - Geçiş yolu nedir?
  - Bunu inşa eden insanlar ne yapar?
  - "Öldür" doğru çağrı mı yoksa "Sat" veya "Spin out" daha iyi mi?
  - Anlatım nedir — içeride ve dışarıda?
  
  ---
  
  ## Kaçınılmayı Test Etmek
  
  Zor bir çağrıdan kaçındığınızı bilirsiniz eğer:
  - Bir aydan fazla süre boyunca bunu her hafta düşündünüz
  - Durumun kendini "çözeceğini" umuyorsunuz
  - Hiçbir zaman yeterli hissedeceğiniz daha fazla veri bekliyorsunuz
  - Konuşmayı kafanızda defalarca yaptınız ama gerçek hayatta yapmadınız
  - Etrafınızdaki diğer insanlar sorunu fark ettiler
  
  **Gecikmenin maliyeti, karar maliyetinden neredeyse her zaman daha yüksektir.**
  
  Bekledikçe sorun bileşir. İşi yapamayan kurucu ortak daha derinden kök salar. Ölmesi gereken ürün hattı daha fazla kaynak tüketir. Layoff edilmesi gereken kişi etrafındaki insanları etkiler.
  
  Çağrıyı yapın. Açık bir şekilde yapın. Haysiyetle yapın.
---

# /em:hard-call — Framework for Decisions With No Good Options

**Command:** `/em:hard-call <decision>`

For the decisions that keep you up at 3am. Firing a co-founder. Laying off 20% of the team. Killing a product that customers love. Pivoting. Shutting down.

These decisions don't have a right answer. They have a less wrong answer. This framework helps you find it.

---

## Why These Decisions Are Hard

Not because the data is unclear. Often, the data is clear. They're hard because:

1. **Real people are affected** — someone loses a job, a relationship ends, a team is hurt
2. **You've been avoiding the decision** — which means the problem is already worse than it was
3. **Irreversibility** — unlike most business decisions, you can't undo this easily
4. **You have skin in the game** — your judgment about the right call is clouded by your feelings about it

The longer you avoid a hard call, the worse the situation usually gets. The company that needed a 10% cut 6 months ago now needs a 25% cut. The co-founder conversation that should have happened at month 4 is happening at month 14.

**Most hard decisions are late decisions.**

---

## The Framework

### Step 1: The Reversibility Test

The most important question first: **can you undo this?**

- **Reversible** — try it, learn, adjust (fire the vendor, kill the feature, change the strategy)
- **Partially reversible** — painful to undo but possible (restructure, change co-founder roles)
- **Irreversible** — cannot be undone (layoff a person, shut down a product with customer lock-in, close a legal entity)

For irreversible decisions, the bar for certainty is higher. You must do more due diligence before acting. Not because you might be wrong — but because you can't take it back.

**If you're treating a reversible decision like it's irreversible, you're avoiding it.**

### Step 2: The 10/10/10 Framework

Ask three questions about each option:

- **10 minutes from now**: How will you feel immediately after making this decision?
- **10 months from now**: What will the impact be? Will the problem be solved?
- **10 years from now**: When you look back, will this have been the right call?

The 10-minute feeling is usually the least reliable guide. The 10-year view usually clarifies what the right call actually is.

**Most hard decisions look obvious at 10 years. The question is whether you can tolerate the 10-minute pain.**

### Step 3: The Andy Grove Test

Andy Grove's test for strategic decisions: "If we got replaced tomorrow and a new CEO came in, what would they do?"

A fresh set of eyes, no emotional investment in the current path, no sunk cost. What's the obvious right call from the outside?

If the answer is clear to an outsider, the question becomes: why haven't you done it yet?

### Step 4: Stakeholder Impact Mapping

For each option, map who's affected and how:

| Stakeholder | Option A Impact | Option B Impact | Their reaction |
|-------------|----------------|----------------|----------------|
| Affected employees | | | |
| Remaining team | | | |
| Customers | | | |
| Investors | | | |
| You | | | |

This isn't about finding the option that hurts nobody — there isn't one. It's about understanding the full picture before you decide.

### Step 5: The Pre-Announcement Test

Before making the decision: write the announcement. The email to the team, the message to the customer, the conversation you'll have.

**If you can't write that announcement, you're not ready to make the decision.**

Writing it forces you to confront the reality of what you're doing. It also surfaces whether your reasoning holds under examination. "We're making this change because…" — does that sentence ring true?

### Step 6: The Communication Plan

Hard decisions almost always get harder if communication is bad. The decision itself is not the only thing that matters — how it's done matters enormously.

For every hard call, plan:
- **Who needs to know first** (the person directly affected, before anyone else)
- **How you'll tell them** (in person when possible, never via email for personal impact)
- **What you'll say** (honest, direct, compassionate — see `../executive-mentor/references/hard_things.md`)
- **What they can ask** (be ready for every question)
- **What comes next** (give them a clear picture of what happens after)

---

## Decision-Specific Frameworks

### Firing a Co-Founder
See `../executive-mentor/references/hard_things.md — Co-Founder Conflicts` for full framework.

Key questions to answer first:
- Is this a performance problem or a values/culture problem? (Different conversations)
- Have you been explicit — not hinted, but direct — about the problem?
- What does the cap table look like and what are the legal implications?
- Is there a role that works better for them, or is this a full exit?
- Who needs to know (board, team, investors) and in what order?

**The rule:** If you've been thinking about this for more than 3 months, you already know the answer. The question is when, not whether.

### Layoffs
Key questions:
- Is this a one-time reset or the beginning of a longer decline? (One reset is recoverable. Serial layoffs kill culture.)
- Are you cutting deep enough? (Insufficient layoffs are worse than no layoffs — two rounds destroys trust.)
- Who owns the announcement and is it direct and honest?
- What's the severance and is it fair?
- How do you prevent the best people from leaving after?

**The rule:** Cut once, cut deep, cut with dignity. Uncertainty is worse than clarity.

### Pivoting
Key questions:
- Is this a true pivot (new direction) or an optimization (same direction, different tactic)?
- What are you keeping and what are you abandoning?
- Do you have evidence the new direction works, or are you running from failure?
- How do you tell current customers who bought the old vision?
- What does this do to the board's confidence?

**The rule:** Pivots should be pulled by evidence of new opportunity, not pushed by failure of the current path.

### Killing a Product Line
Key questions:
- What happens to customers currently using it?
- What's the migration path?
- What do the people who built it do?
- Is "kill it" the right call or is "sell it" or "spin it out" better?
- What's the narrative — internally and externally?

---

## The Avoiding-It Test

You know you've been avoiding a hard call if:
- You've thought about it every week for more than a month
- You're hoping the situation will "resolve itself"
- You're waiting for more data that you'll never feel is enough
- You've had the conversation in your head many times but not in real life
- Other people around you have noticed the problem

**The cost of delay is almost always higher than the cost of the decision.**

Every month you wait, the problem compounds. The co-founder who's not working out becomes more entrenched. The product line that needs to die consumes more resources. The person who needs to be let go affects the people around them.

Make the call. Make it clearly. Make it with dignity.
