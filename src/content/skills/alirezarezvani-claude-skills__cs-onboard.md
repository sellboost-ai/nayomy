---
name: "cs-onboard"
description_en: "Founder onboarding interview that captures company context across 7 dimensions. Invoke with /cs:setup for initial interview or /cs:update for quarterly refresh. Generates ~/.claude/company-context.md used by all C-suite advisor skills. Use when setting up the C-suite advisors for the first time, or when company context is missing or more than 90 days old — e.g. after a fundraise or pivot."
description_tr: "Şirket bağlamını 7 boyut üzerinden yakalayan kurucu onboarding görüşmesi. İlk görüşme için /cs:setup, üç aylık güncelleme için /cs:update komutunu kullanın. Tüm C-suite danışman becerilerine sunulan ~/.claude/company-context.md dosyasını oluşturur. C-suite danışmanlarını ilk kez kurarken, şirket bağlamı eksikken veya 90 günden eski olduğunda — örneğin bir finansman turunda veya pivot sonrasında — kullanın."
category: "Design"
repo: "alirezarezvani/claude-skills"
stars: 18642
url: "https://github.com/alirezarezvani/claude-skills/blob/HEAD/.gemini/skills/cs-onboard/SKILL.md"
path: ".gemini/skills/cs-onboard/SKILL.md"
is_collection: false
body_length: 4133
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # C-Suite Onboarding
  
  Şirket bağlamı dosyasını güçlendiren yapılandırılmış kurucu görüşmesi, her C-suite danışmanını destekler. Bir 45 dakikalık konuşma. Tüm rollerde kalıcı bağlam.
  
  ## Komutlar
  
  - `/cs:setup` — Tam onboarding görüşmesi (~45 dk, 7 boyut)
  - `/cs:update` — Üç aylık güncelleme (~15 dk, "ne değişti?")
  
  ## Anahtar Kelimeler
  cs:setup, cs:update, company context, founder interview, onboarding, company profile, c-suite setup, advisor setup
  
  ---
  
  ## Konuşma İlkeleri
  
  Bir sorgulamadan ziyade bir konuşma olun. Bir seferde bir soru sorun. Thread'leri takip edin. Geri yansıtın: "Öyleyse gerçek sorun X gibi görünüyor — doğru mu?" Atladıkları şeyleri izleyin — gerçek hikaye orada yaşıyor. Asla soru listesi okumayın.
  
  Şu şekilde başlayın: *"Şirketi kendi sözlerinizle anlatın — ne inşa ediyorsunuz ve neden önemli?"*
  
  ---
  
  ## 7 Görüşme Boyutu
  
  ### 1. Şirket Kimliği
  Yakala: ne yaptıkları, kime yaptıkları, gerçek kuruluş "neden"i, tek cümlelik pitch, vazgeçilmez değerler.
  Temel sonda: *"İhlal ettikleri için kovacağınız bir değer var mı?"*
  Kırmızı bayrak: Pazarlama kopyası gibi görünen değerler.
  
  ### 2. Aşama & Ölçek
  Yakala: çalışan sayısı (FT vs müteahhit), gelir aralığı, runway, aşama (pre-PMF / scaling / optimizing), son 90 günde ne kırıldı.
  Temel sonda: *"Eğer aşamanızı etiketlemeniz gerekirse — henüz PMF buluyorsunuz, işe yarayan şeyi ölçekliyor, yoksa optimize mi ediyorsunuz?"*
  
  ### 3. Kurucu Profili
  Yakala: kendi tanımlı süpergücü, kabul edilen kör noktaları, arketip (product/sales/technical/operator), gerçekten neyi tweetebilir.
  Temel sonda: *"Ortak kurucunuz ne yapmanızı bırakmanız gerektiğini söyleseydim?"*
  Kırmızı bayrak: Kör nokta yok veya zayıflık güç olarak çerçevelenmiş.
  
  ### 4. Takım & Kültür
  Yakala: takım 3 kelimede, son gerçek çatışma ve çözüm, hangi değerler gerçek vs aspirasyonel, en güçlü ve en zayıf lider.
  Temel sonda: *"Belirtilen değerlerinizden hangisi en gerçek? Hangisi duvarda bir poster?"*
  Kırmızı bayrak: "Hiç çatışmamız yok."
  
  ### 5. Pazar & Rekabet
  Yakala: kim kazanıyor ve neden (dürüst versiyon), gerçek haksız avantaj, onlara zarar verebilecek bir rekabet hamlesi.
  Temel sonda: *"Gerçek haksız avantajınız nedir — yatırımcı versiyonu değil?"*
  Kırmızı bayrak: "Gerçek bir rekabetimiz yok."
  
  ### 6. Mevcut Zorluklar
  Yakala: ürün/büyüme/insanlar/para/operasyonlar arasında öncelik sıralaması, kaçındıkları karar, "bir ekstra gün" cevabı.
  Temel sonda: *"Haftalar boyunca ertelediğiniz karar nedir?"*
  Not: "Ekstra gün" cevabı gerçek öncelikleri ortaya çıkarır.
  
  ### 7. Hedefler & Ambisyon
  Yakala: 12 aylık hedef (spesifik), 36 aylık hedef (yönsel), çıkış vs sonsuza kadar inşa etme yönelimi, kişisel başarı tanımı.
  Temel sonda: *"Başarı sizin için kişisel olarak neye benziyor — şirketten ayrı?"*
  
  ---
  
  ## Çıktı: company-context.md
  
  Görüşmeden sonra `~/.claude/company-context.md` dosyasını `templates/company-context-template.md` kullanarak oluşturun.
  
  Her bölümü doldurun. Bilinmeyenler için `[not captured]` yazın — hiçbir zaman boş bırakmayın. Zaman damgası ekleyin, `fresh` olarak işaretleyin.
  
  Kurucuya şunu söyleyin: *"Her şeyi şirket bağlamınıza kaydettim. Her danışman bunu spesifik, alakalı tavsiye vermek için kullanacak. 90 günde /cs:update komutunu çalıştırarak güncel tutun."*
  
  ---
  
  ## /cs:update — Üç Aylık Yenileme
  
  **Tetik:** Her 90 günde bir veya büyük bir değişiklikten sonra. Süre: ~15 dakika.
  
  Şu şekilde başlayın: *"Son company context'i yaptığımızdan bu yana [X zaman] geçti. Ne değişti?"*
  
  Her boyutu bir "ne değişti?" sorusuyla yürüyün:
  1. Kimlik: aynı misyon mu yoksa kaymış mı?
  2. Ölçek: takım, gelir, runway şimdi ne?
  3. Kurucu: rol veya sizi ne getiştiriyor?
  4. Takım: liderlik değişiklikleri var mı?
  5. Pazar: herhangi bir rekabet sürprizi?
  6. Zorluklar: 90 gün öncesine göre şimdi #1 sorun nedir?
  7. Hedefler: 12 aylık hedef için hala yolda mı?
  
  Bağlam dosyasını güncelleyin, zaman damgasını yenileyin, `fresh` olarak sıfırlayın.
  
  ---
  
  ## Bağlam Dosyası Konumu
  
  `~/.claude/company-context.md` — tüm C-suite becerilerine yönelik tek doğru kaynak. Taşımayın. Kopyalar oluşturmayın.
  
  ## Referanslar
  - `templates/company-context-template.md` — çıktı için boş şablon
  - `references/interview-guide.md` — derin görüşme el sanatı: sondalar, kırmızı bayraklar, isteksiz kurucuları işleme alma
---

# C-Suite Onboarding

Structured founder interview that builds the company context file powering every C-suite advisor. One 45-minute conversation. Persistent context across all roles.

## Commands

- `/cs:setup` — Full onboarding interview (~45 min, 7 dimensions)
- `/cs:update` — Quarterly refresh (~15 min, "what changed?")

## Keywords
cs:setup, cs:update, company context, founder interview, onboarding, company profile, c-suite setup, advisor setup

---

## Conversation Principles

Be a conversation, not an interrogation. Ask one question at a time. Follow threads. Reflect back: "So the real issue sounds like X — is that right?" Watch for what they skip — that's where the real story lives. Never read a list of questions.

Open with: *"Tell me about the company in your own words — what are you building and why does it matter?"*

---

## 7 Interview Dimensions

### 1. Company Identity
Capture: what they do, who it's for, the real founding "why," one-sentence pitch, non-negotiable values.
Key probe: *"What's a value you'd fire someone over violating?"*
Red flag: Values that sound like marketing copy.

### 2. Stage & Scale
Capture: headcount (FT vs contractors), revenue range, runway, stage (pre-PMF / scaling / optimizing), what broke in last 90 days.
Key probe: *"If you had to label your stage — still finding PMF, scaling what works, or optimizing?"*

### 3. Founder Profile
Capture: self-identified superpower, acknowledged blind spots, archetype (product/sales/technical/operator), what actually keeps them up at night.
Key probe: *"What would your co-founder say you should stop doing?"*
Red flag: No blind spots, or weakness framed as a strength.

### 4. Team & Culture
Capture: team in 3 words, last real conflict and resolution, which values are real vs aspirational, strongest and weakest leader.
Key probe: *"Which of your stated values is most real? Which is a poster on the wall?"*
Red flag: "We have no conflict."

### 5. Market & Competition
Capture: who's winning and why (honest version), real unfair advantage, the one competitive move that could hurt them.
Key probe: *"What's your real unfair advantage — not the investor version?"*
Red flag: "We have no real competition."

### 6. Current Challenges
Capture: priority stack-rank across product/growth/people/money/operations, the decision they've been avoiding, the "one extra day" answer.
Key probe: *"What's the decision you've been putting off for weeks?"*
Note: The "extra day" answer reveals true priorities.

### 7. Goals & Ambition
Capture: 12-month target (specific), 36-month target (directional), exit vs build-forever orientation, personal success definition.
Key probe: *"What does success look like for you personally — separate from the company?"*

---

## Output: company-context.md

After the interview, generate `~/.claude/company-context.md` using `templates/company-context-template.md`.

Fill every section. Write `[not captured]` for unknowns — never leave blank. Add timestamp, mark as `fresh`.

Tell the founder: *"I've captured everything in your company context. Every advisor will use this to give specific, relevant advice. Run /cs:update in 90 days to keep it current."*

---

## /cs:update — Quarterly Refresh

**Trigger:** Every 90 days or after a major change. Duration: ~15 minutes.

Open with: *"It's been [X time] since we did your company context. What's changed?"*

Walk each dimension with one "what changed?" question:
1. Identity: same mission or shifted?
2. Scale: team, revenue, runway now?
3. Founder: role or what's stretching you?
4. Team: any leadership changes?
5. Market: any competitive surprises?
6. Challenges: #1 problem now vs 90 days ago?
7. Goals: still on track for 12-month target?

Update the context file, refresh timestamp, reset to `fresh`.

---

## Context File Location

`~/.claude/company-context.md` — single source of truth for all C-suite skills. Do not move it. Do not create duplicates.

## References
- `templates/company-context-template.md` — blank template for output
- `references/interview-guide.md` — deep interview craft: probes, red flags, handling reluctant founders
