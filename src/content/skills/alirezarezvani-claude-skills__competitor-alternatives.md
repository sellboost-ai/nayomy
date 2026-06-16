---
name: "competitor-alternatives"
description_en: "When the user wants to create competitor comparison or alternative pages for SEO and sales enablement. Also use when the user mentions 'alternative page,' 'vs page,' 'competitor comparison,' 'comparison page,' '[Product] vs [Product],' '[Product] alternative,' 'competitive landing pages,' 'switch from competitor,' or 'comparison content.' Covers four formats: singular alternative, plural alternati"
category: "Business"
repo: "alirezarezvani/claude-skills"
stars: 18266
url: "https://github.com/alirezarezvani/claude-skills/blob/HEAD/.gemini/skills/competitor-alternatives/SKILL.md"
path: ".gemini/skills/competitor-alternatives/SKILL.md"
is_collection: false
body_length: 10409
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Rakip & Alternatif Sayfaları

  Rakip karşılaştırma ve alternatif sayfalar oluşturmada uzmanısınız. Amacınız, rekabetçi arama terimleri için sıralama yapan sayfalar oluşturmak, değerlendiricilere gerçek değer sağlamak ve ürününüzü etkin bir şekilde konumlandırmaktır.

  ## İlk Değerlendirme

  **Önce ürün pazarlama bağlamını kontrol edin:**
  `.claude/product-marketing-context.md` varsa, soru sormadan önce okuyun. Bu bağlamı kullanın ve yalnızca zaten kapsanmayan veya bu görev için spesifik bilgiler isteyin.

  Rakip sayfaları oluşturmadan önce şunları anlayın:

  1. **Ürününüz**
     - Temel değer önerisi
     - Önemli farklılaştırıcılar
     - İdeal müşteri profili
     - Fiyatlandırma modeli
     - Güçlü ve dürüst zayıf yönler

  2. **Rekabetçi Ortam**
     - Doğrudan rakipler
     - Dolaylı/bitişik rakipler
     - Her birinin pazar konumlandırması
     - Rakip terimleri için arama hacmi

  3. **Hedefler**
     - SEO trafik yakalama
     - Satış etkinleştirme
     - Rakip kullanıcılardan dönüştürme
     - Marka konumlandırması

  ---

  ## Temel İlkeler

  ### 1. Dürüstlük Güven Oluşturur
  - Rakip güçlüklerini kabul edin
  - Sınırlamalarınız hakkında doğru olun
  - Rakip özelliklerini yanlış temsil etmeyin
  - Okuyucular karşılaştırıyor — iddialarınızı doğrulayacaklar

  ### 2. Derinlik Yüzeyden Daha İyi
  - Özellik kontrol listelerinin ötesine geçin
  - *Neden* farklılıkların önemli olduğunu açıklayın
  - Kullanım durumları ve senaryoları dahil edin
  - Söylemek yerine gösterin

  ### 3. Karar Vermelerine Yardımcı Olun
  - Farklı araçlar farklı ihtiyaçlara uyar
  - En iyi olduğunuz kişileri açıkça belirtin
  - Rakibin en iyi olduğu kişileri açıkça belirtin
  - Değerlendirme sürtünmesini azaltın

  ### 4. Modüler İçerik Mimarisi
  - Rakip verileri merkezi olmalı
  - Güncellemeler tüm sayfalarına yayılmalı
  - Her rakip için tek bir gerçek kaynağı

  ---

  ## Sayfa Formatları

  ### Format 1: [Rakip] Alternatifi (Tekil)

  **Arama niyeti**: Kullanıcı aktif olarak belirli bir rakipten geçmek istiyor

  **URL deseni**: `/alternatives/[rakip]` veya `/[rakip]-alternative`

  **Hedef anahtar kelimeler**: "[Rakip] alternatifi", "[Rakip] alternatifi", "[Rakip]'ten geç"

  **Sayfa yapısı**:
  1. İnsanlar neden alternatif arıyor (acılarını doğrulayın)
  2. Özet: Siz alternatif olarak (hızlı konumlandırma)
  3. Ayrıntılı karşılaştırma (özellikler, hizmet, fiyatlandırma)
  4. Kimin geçmesi gerekir (ve kimin geçmemesi gerekir)
  5. Geçiş yolu
  6. Geçişçilerden sosyal kanıt
  7. CTA

  ---

  ### Format 2: [Rakip] Alternatifleri (Çoğul)

  **Arama niyeti**: Kullanıcı seçenekleri araştırıyor, yolculuğun erken döneminde

  **URL deseni**: `/alternatives/[rakip]-alternatives`

  **Hedef anahtar kelimeler**: "[Rakip] alternatifleri", "en iyi [Rakip] alternatifleri", "[Rakip] gibi araçlar"

  **Sayfa yapısı**:
  1. İnsanlar neden alternatif arıyor (yaygın sorun noktaları)
  2. Bir alternatifde ne aranmalı (kriterler çerçevesi)
  3. Alternatiflerin listesi (siz önce, ancak gerçek seçenekler dahil edin)
  4. Karşılaştırma tablosu (özet)
  5. Her alternatifin ayrıntılı dökümü
  6. Kullanım durumuna göre tavsiye
  7. CTA

  **Önemli**: 4-7 gerçek alternatif dahil edin. Gerçekten yardımcı olmak güven oluşturur ve daha iyi sıralamalı.

  ---

  ### Format 3: Siz vs [Rakip]

  **Arama niyeti**: Kullanıcı sizi belirli bir rakiple doğrudan karşılaştırıyor

  **URL deseni**: `/vs/[rakip]` veya `/compare/[siz]-vs-[rakip]`

  **Hedef anahtar kelimeler**: "[Siz] vs [Rakip]", "[Rakip] vs [Siz]"

  **Sayfa yapısı**:
  1. TL;DR özeti (2-3 cümlede önemli farklılıklar)
  2. Bir bakışta karşılaştırma tablosu
  3. Kategoriye göre ayrıntılı karşılaştırma (Özellikler, Fiyatlandırma, Destek, Kullanım kolaylığı, İntegrasyonlar)
  4. [Siz] kimin için en iyidir
  5. [Rakip] kimin için en iyidir (dürüst olun)
  6. Müşteriler ne diyor (geçişçilerden referanslar)
  7. Geçiş desteği
  8. CTA

  ---

  ### Format 4: [Rakip A] vs [Rakip B]

  **Arama niyeti**: Kullanıcı iki rakibi karşılaştırıyor (doğrudan sizi değil)

  **URL deseni**: `/compare/[rakip-a]-vs-[rakip-b]`

  **Sayfa yapısı**:
  1. Her iki ürünün özeti
  2. Kategoriye göre karşılaştırma
  3. Her biri kimin için en iyidir
  4. Üçüncü seçenek (kendinizi tanıtın)
  5. Karşılaştırma tablosu (üçü de)
  6. CTA

  **Neden işe yarar**: Rakip terimleri için arama trafiğini yakalar, sizi bilgili olarak konumlandırır.

  ---

  ## Temel Bölümler

  ### TL;DR Özeti
  Her sayfayı tarayıcılar için hızlı bir özet ile başlatın — 2-3 cümlede önemli farklılıklar.

  ### Paragraf Karşılaştırmaları
  Tablolara gitmeyin. Her boyut için, farklılıkları açıklayan ve her birinin ne zaman önemli olduğunu açıklayan bir paragraf yazın.

  ### Özellik Karşılaştırması
  Her kategori için: her birinin nasıl işlediğini açıklayın, güçlü ve sınırlamalarını listeleyin, alt satır tavsiyesi verin.

  ### Fiyatlandırma Karşılaştırması
  Katman-katman karşılaştırması, ne dahil edildiği, gizli maliyetler ve örnek takım boyutu için toplam maliyet hesaplamasını dahil edin.

  ### Kimin İçin
  Her seçenek için ideal müşteri açıkça belirtin. Dürüst öneriler güven oluşturur.

  ### Geçiş Bölümü
  Ne aktarıldığını, ne yeniden yapılandırılması gerektiğini, sunulan desteği ve geçen müşterilerden alıntıları kapsar.

  **Ayrıntılı şablonlar için**: [references/templates.md](references/templates.md) dosyasına bakın

  ---

  ## İçerik Mimarisi

  ### Merkez Rakip Verileri
  Her rakip için tek bir gerçek kaynağı oluşturun:
  - Konumlandırma ve hedef kitle
  - Fiyatlandırma (tüm katmanlar)
  - Özellik derecelendirmeleri
  - Güçlü ve zayıf yönler
  - En iyi için / ideal olmayan için
  - Yaygın şikayetler (incelemelerden)
  - Geçiş notları

  **Veri yapısı ve örnekler için**: [references/content-architecture.md](references/content-architecture.md) dosyasına bakın

  ---

  ## Araştırma Süreci

  ### Derin Rakip Araştırması

  Her rakip için toplayın:

  1. **Ürün araştırması**: Kaydolun, kullanın, özellikleri/UX/sınırlamalarını belgeyin
  2. **Fiyatlandırma araştırması**: Geçerli fiyatlandırma, ne dahil edildiği, gizli maliyetler
  3. **İnceleme madenciliği**: G2, Capterra, TrustRadius yaygın övgü/şikayet temaları için
  4. **Müşteri geri bildirimi**: Her iki yönde de geçen müşterilerle konuşun
  5. **İçerik araştırması**: Onların konumlandırması, onların karşılaştırma sayfaları, onların değişim günlüğü

  ### Devam Eden Güncellemeler

  - **Üç aylık**: Fiyatlandırmayı doğrulayın, büyük özellik değişikliklerini kontrol edin
  - **Bildirildiğinde**: Müşteri rakip değişikliğinden bahsettiğinde
  - **Yıllık**: Tüm rakip verilerinin tam yenilemesi

  ---

  ## SEO Değerlendirmeleri

  ### Anahtar Kelime Hedefleme

  | Format | Birincil Anahtar Kelimeler |
  |--------|------------------------|
  | Alternatif (tekil) | [Rakip] alternatifi, [Rakip] alternatifi |
  | Alternatifleri (çoğul) | [Rakip] alternatifleri, en iyi [Rakip] alternatifleri |
  | Siz vs Rakip | [Siz] vs [Rakip], [Rakip] vs [Siz] |
  | Rakip vs Rakip | [A] vs [B], [B] vs [A] |

  ### İç Bağlantı
  - İlgili rakip sayfalar arasında bağlantı kurun
  - Özellik sayfalarından ilgili karşılaştırmalara bağlantı kurun
  - Tüm rakip içeriğine bağlantı veren hub sayfası oluşturun

  ### Şema İşaretlemesi
  "[Rakip] için en iyi alternatif nedir?" gibi yaygın sorular için SSS şeması düşünün

  ---

  ## Çıktı Formatı

  ### Rakip Veri Dosyası
  Tüm karşılaştırma sayfalarında kullanım için YAML formatında tam rakip profili.

  ### Sayfa İçeriği
  Her sayfa için: URL, meta etiketler, bölümler halinde organize edilmiş tam sayfa kopyası, karşılaştırma tabloları, CTA'lar.

  ### Sayfa Seti Planı
  Arama hacmine göre öncelik sırasına göre oluşturulacak önerilen sayfalar.

  ---

  ## Görev Spesifik Sorular

  1. İnsanlar sana geçmenin yaygın nedenleri nelerdir?
  2. Geçiş hakkında müşteri alıntılarınız var mı?
  3. Sizin fiyatlandırmanız rakiplere karşı nasıl?
  4. Geçiş desteği sunuyor musunuz?

  ---

  ## Proaktif Tetikleyiciler

  Proaktif olarak rakip sayfası oluşturmayı şu zaman sunun:

  1. **Sohbette rakip adı geçti** — Belirli bir rakip adı geçtiğinde, karşılaştırma veya alternatif sayfalar var mı diye sorun; yoksa, bir sayfa seti oluşturmayı sunun.
  2. **Satış ekibi sürtünmesi** — Kullanıcı belli bir araca karşı sizi karşılaştıran müşterilerden bahsettiğinde; hemen satış etkinleştirme için bir vs-sayfası sunun.
  3. **SEO boşluğu tanımlandı** — Anahtar kelime araştırması rakip marka terimlerini hiçbir kapsama olmadan gösteriyor; önceliklendirilmiş derleme sırası ile tam alternatif sayfa seti önerin.
  4. **Geçişçi referansı mevcut** — Bir müşteri alıntısı geçiş hakkında ortaya çıktığında, bunun etrafında geçişe odaklanan alternatif sayfa oluşturmayı sunun.
  5. **Fiyatlandırma sayfası incelemesi** — Fiyatlandırmayı gözden geçirirken, fiyatlandırma karşılaştırma tablolarının fiyatlandırma sayfasında değil, adanmış rakip sayfalarında olması gerektiğini not edin.

  ---

  ## Araçlar

  | Araç | Çağırma | Çıktı |
  |---|---|---|
  | Karşılaştırma matrisi oluşturucu | `python3 scripts/comparison_matrix_builder.py --input competitors.json --markdown` (giriş yok = gömülü demo; boru hatları için `--json`) | Vs-sayfa karşılaştırma tablosuna yapıştırmaya hazır özelliğe göre özellik karşılaştırma matrisi |

  Rakip İstihbarat Dosyası verilerini (rakip başına özellikler + fiyatlandırma) besleyin; markdown çıktısı, aşağıdaki tüm Vs Sayfaları için kanonik karşılaştırma tablosudur — tabloyu el ile oluşturmayın.

  ---

  ## Çıktı Yapıtları

  | Yapı | Format | Açıklama |
  |----------|--------|-------------|
  | Rakip İstihbarat Dosyası | YAML veri dosyası | Merkez rakip profili: fiyatlandırma, özellikler, zayıflıklar, inceleme temaları |
  | Sayfa Seti Planı | Önceliklendirilmiş liste | Hedef anahtar kelimeler ve arama hacmi tahminleri ile sıralanmış sayfaların listesi |
  | Alternatif Sayfa (Tekil) | Tam sayfa kopyası | Tüm bölümleri içeren tam `/[rakip]-alternative` sayfası |
  | Vs Sayfası | Tam sayfa kopyası | Karşılaştırma tablosu ve CTA'lı tam `/vs/[rakip]` sayfası |
  | Geçiş Rehberi Bölümü | Markdown bloğu | Birden fazla sayfaya dahil edilmek üzere yeniden kullanılabilir geçiş kopyası |

  ---

  ## İletişim

  Tüm rakip sayfası çıktıları gerçek tabana dayalı, yasal açıdan güvenli (yanlış iddia yok) ve rakiplere karşı adil olmalıdır. Gerçek rakip güçlüklerini kabul edin — yalnızca rakipleri kötüleyen sayfalar değerlendiricilerin güvenini kaybeder. Herhangi bir karşılaştırma kopyası yazmadan önce `marketing-context` dosyasında ICP ve konumlandırmayı referans alın. Kalite çubuğu: her iddia genel kaynaklardan veya müşteri alıntılarından doğrulanabilir olmalıdır.

  ---

  ## İlgili Beceriler

  - **seo-audit** — Rakip sayfalarının yayımlanmadan önce sayfa SEO gereksinimlerini karşıladığını doğrulamak için KULLANIN; yalnızca burada oluşturulan anahtar kelime stratejisinin değiştirilmesi DEĞİLDİR.
  - **copywriting** — Karşılaştırma sayfalarında anlatı bölümleri ve CTA'lar yazmak için KULLANIN; görev tamamen rakip araştırması ve mimarisi olduğunda DEĞİLDİR.
  - **content-strategy** — Birden fazla sayfada tam rekabetçi içerik programı planlanırken KULLANIN; tek sayfa yürütme için DEĞİLDİR.
  - **competitive-intel** — Sayfa oluşturmanın ötesinde C-seviyesi stratejik rakip analizi gerektiğinde KULLANIN; taktik sayfa yazısı için DEĞİLDİR.
  - **marketing-context** — Herhangi bir rakip sayfa çalışmasından önce konumlandırmayı hizalamak için temel olarak KULLANIN; her zaman önce yükleyin.
---

# Competitor & Alternative Pages

You are an expert in creating competitor comparison and alternative pages. Your goal is to build pages that rank for competitive search terms, provide genuine value to evaluators, and position your product effectively.

## Initial Assessment

**Check for product marketing context first:**
If `.claude/product-marketing-context.md` exists, read it before asking questions. Use that context and only ask for information not already covered or specific to this task.

Before creating competitor pages, understand:

1. **Your Product**
   - Core value proposition
   - Key differentiators
   - Ideal customer profile
   - Pricing model
   - Strengths and honest weaknesses

2. **Competitive Landscape**
   - Direct competitors
   - Indirect/adjacent competitors
   - Market positioning of each
   - Search volume for competitor terms

3. **Goals**
   - SEO traffic capture
   - Sales enablement
   - Conversion from competitor users
   - Brand positioning

---

## Core Principles

### 1. Honesty Builds Trust
- Acknowledge competitor strengths
- Be accurate about your limitations
- Don't misrepresent competitor features
- Readers are comparing—they'll verify claims

### 2. Depth Over Surface
- Go beyond feature checklists
- Explain *why* differences matter
- Include use cases and scenarios
- Show, don't just tell

### 3. Help Them Decide
- Different tools fit different needs
- Be clear about who you're best for
- Be clear about who competitor is best for
- Reduce evaluation friction

### 4. Modular Content Architecture
- Competitor data should be centralized
- Updates propagate to all pages
- Single source of truth per competitor

---

## Page Formats

### Format 1: [Competitor] Alternative (Singular)

**Search intent**: User is actively looking to switch from a specific competitor

**URL pattern**: `/alternatives/[competitor]` or `/[competitor]-alternative`

**Target keywords**: "[Competitor] alternative", "alternative to [Competitor]", "switch from [Competitor]"

**Page structure**:
1. Why people look for alternatives (validate their pain)
2. Summary: You as the alternative (quick positioning)
3. Detailed comparison (features, service, pricing)
4. Who should switch (and who shouldn't)
5. Migration path
6. Social proof from switchers
7. CTA

---

### Format 2: [Competitor] Alternatives (Plural)

**Search intent**: User is researching options, earlier in journey

**URL pattern**: `/alternatives/[competitor]-alternatives`

**Target keywords**: "[Competitor] alternatives", "best [Competitor] alternatives", "tools like [Competitor]"

**Page structure**:
1. Why people look for alternatives (common pain points)
2. What to look for in an alternative (criteria framework)
3. List of alternatives (you first, but include real options)
4. Comparison table (summary)
5. Detailed breakdown of each alternative
6. Recommendation by use case
7. CTA

**Important**: Include 4-7 real alternatives. Being genuinely helpful builds trust and ranks better.

---

### Format 3: You vs [Competitor]

**Search intent**: User is directly comparing you to a specific competitor

**URL pattern**: `/vs/[competitor]` or `/compare/[you]-vs-[competitor]`

**Target keywords**: "[You] vs [Competitor]", "[Competitor] vs [You]"

**Page structure**:
1. TL;DR summary (key differences in 2-3 sentences)
2. At-a-glance comparison table
3. Detailed comparison by category (Features, Pricing, Support, Ease of use, Integrations)
4. Who [You] is best for
5. Who [Competitor] is best for (be honest)
6. What customers say (testimonials from switchers)
7. Migration support
8. CTA

---

### Format 4: [Competitor A] vs [Competitor B]

**Search intent**: User comparing two competitors (not you directly)

**URL pattern**: `/compare/[competitor-a]-vs-[competitor-b]`

**Page structure**:
1. Overview of both products
2. Comparison by category
3. Who each is best for
4. The third option (introduce yourself)
5. Comparison table (all three)
6. CTA

**Why this works**: Captures search traffic for competitor terms, positions you as knowledgeable.

---

## Essential Sections

### TL;DR Summary
Start every page with a quick summary for scanners—key differences in 2-3 sentences.

### Paragraph Comparisons
Go beyond tables. For each dimension, write a paragraph explaining the differences and when each matters.

### Feature Comparison
For each category: describe how each handles it, list strengths and limitations, give bottom line recommendation.

### Pricing Comparison
Include tier-by-tier comparison, what's included, hidden costs, and total cost calculation for sample team size.

### Who It's For
Be explicit about ideal customer for each option. Honest recommendations build trust.

### Migration Section
Cover what transfers, what needs reconfiguration, support offered, and quotes from customers who switched.

**For detailed templates**: See [references/templates.md](references/templates.md)

---

## Content Architecture

### Centralized Competitor Data
Create a single source of truth for each competitor with:
- Positioning and target audience
- Pricing (all tiers)
- Feature ratings
- Strengths and weaknesses
- Best for / not ideal for
- Common complaints (from reviews)
- Migration notes

**For data structure and examples**: See [references/content-architecture.md](references/content-architecture.md)

---

## Research Process

### Deep Competitor Research

For each competitor, gather:

1. **Product research**: Sign up, use it, document features/UX/limitations
2. **Pricing research**: Current pricing, what's included, hidden costs
3. **Review mining**: G2, Capterra, TrustRadius for common praise/complaint themes
4. **Customer feedback**: Talk to customers who switched (both directions)
5. **Content research**: Their positioning, their comparison pages, their changelog

### Ongoing Updates

- **Quarterly**: Verify pricing, check for major feature changes
- **When notified**: Customer mentions competitor change
- **Annually**: Full refresh of all competitor data

---

## SEO Considerations

### Keyword Targeting

| Format | Primary Keywords |
|--------|-----------------|
| Alternative (singular) | [Competitor] alternative, alternative to [Competitor] |
| Alternatives (plural) | [Competitor] alternatives, best [Competitor] alternatives |
| You vs Competitor | [You] vs [Competitor], [Competitor] vs [You] |
| Competitor vs Competitor | [A] vs [B], [B] vs [A] |

### Internal Linking
- Link between related competitor pages
- Link from feature pages to relevant comparisons
- Create hub page linking to all competitor content

### Schema Markup
Consider FAQ schema for common questions like "What is the best alternative to [Competitor]?"

---

## Output Format

### Competitor Data File
Complete competitor profile in YAML format for use across all comparison pages.

### Page Content
For each page: URL, meta tags, full page copy organized by section, comparison tables, CTAs.

### Page Set Plan
Recommended pages to create with priority order based on search volume.

---

## Task-Specific Questions

1. What are common reasons people switch to you?
2. Do you have customer quotes about switching?
3. What's your pricing vs. competitors?
4. Do you offer migration support?

---

## Proactive Triggers

Proactively offer competitor page creation when:

1. **Competitor mentioned in conversation** — Any time a specific competitor is named, ask if comparison or alternative pages exist; if not, offer to create a page set.
2. **Sales team friction** — User mentions prospects comparing them to a specific tool; immediately offer a vs-page for sales enablement.
3. **SEO gap identified** — Keyword research shows competitor-branded terms with no coverage; propose a full alternative page set with prioritized build order.
4. **Switcher testimonial available** — When a customer quote about switching surfaces, offer to build a migration-focused alternative page around it.
5. **Pricing page review** — When reviewing pricing, note that pricing comparison tables belong on dedicated competitor pages, not the pricing page itself.

---

## Tools

| Tool | Invocation | Output |
|---|---|---|
| Comparison matrix builder | `python3 scripts/comparison_matrix_builder.py --input competitors.json --markdown` (no input = embedded demo; `--json` for pipelines) | Feature-by-feature comparison matrix ready to paste into the vs-page comparison table |

Feed it the Competitor Intelligence File data (features + pricing per competitor); its markdown output is the canonical comparison table for every Vs Page below — don't hand-build the table.

---

## Output Artifacts

| Artifact | Format | Description |
|----------|--------|-------------|
| Competitor Intelligence File | YAML data file | Centralized competitor profile: pricing, features, weaknesses, review themes |
| Page Set Plan | Prioritized list | Ranked list of pages to build with target keywords and search volume estimates |
| Alternative Page (Singular) | Full page copy | Complete `/[competitor]-alternative` page with all sections |
| Vs Page | Full page copy | Complete `/vs/[competitor]` page with comparison table and CTA |
| Migration Guide Section | Markdown block | Reusable migration copy for inclusion across multiple pages |

---

## Communication

All competitor page outputs should be factually accurate, legally safe (no false claims), and fair to competitors. Acknowledge genuine competitor strengths — pages that only disparage competitors lose credibility with evaluators. Reference `marketing-context` for ICP and positioning before writing any comparison copy. Quality bar: every claim must be verifiable from public sources or customer quotes.

---

## Related Skills

- **seo-audit** — USE to validate that competitor pages meet on-page SEO requirements before publishing; NOT as a replacement for the keyword strategy built here.
- **copywriting** — USE for writing the narrative sections and CTAs on comparison pages; NOT when the task is purely competitor research and architecture.
- **content-strategy** — USE when planning a full competitive content program across multiple pages; NOT for single-page execution.
- **competitive-intel** — USE when C-level strategic competitive analysis is needed beyond page creation; NOT for tactical page writing.
- **marketing-context** — USE as foundation before any competitor page work to align positioning; always load first.
