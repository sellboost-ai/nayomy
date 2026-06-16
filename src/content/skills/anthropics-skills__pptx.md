---
name: "pptx"
description_en: "Use this skill any time a .pptx file is involved in any way — as input, output, or both. This includes: creating slide decks, pitch decks, or presentations; reading, parsing, or extracting text from any .pptx file (even if the extracted content will be used elsewhere, like in an email or summary); editing, modifying, or updating existing presentations; combining or splitting slide files; working w"
category: "Document"
repo: "anthropics/skills"
stars: 140618
url: "https://github.com/anthropics/skills/blob/HEAD/skills/pptx/SKILL.md"
path: "skills/pptx/SKILL.md"
is_collection: false
body_length: 8344
has_scripts: true
has_references: false
has_examples: false
related_files: ["editing.md", "pptxgenjs.md"]
body_tr: |-
  # PPTX Becerisi

  ## Hızlı Başvuru

  | Görev | Rehber |
  |------|-------|
  | İçeriği okuma/analiz etme | `python -m markitdown presentation.pptx` |
  | Şablondan düzenleme veya oluşturma | [editing.md](editing.md) dosyasını okuyun |
  | Sıfırdan oluşturma | [pptxgenjs.md](pptxgenjs.md) dosyasını okuyun |

  ---

  ## İçeriği Okuma

  ```bash
  # Metin çıkarma
  python -m markitdown presentation.pptx

  # Görsel özet
  python scripts/thumbnail.py presentation.pptx

  # Ham XML
  python scripts/office/unpack.py presentation.pptx unpacked/
  ```

  ---

  ## Düzenleme İş Akışı

  **Tam ayrıntılar için [editing.md](editing.md) dosyasını okuyun.**

  1. Şablonu `thumbnail.py` ile analiz edin
  2. Aç → slaytları değiştir → içeriği düzenle → temizle → pakla

  ---

  ## Sıfırdan Oluşturma

  **Tam ayrıntılar için [pptxgenjs.md](pptxgenjs.md) dosyasını okuyun.**

  Şablon veya referans sunumu olmadığında kullanın.

  ---

  ## Tasarım Fikirleri

  **Sıkıcı slaytlar oluşturmayın.** Beyaz arka fonda düz madde işaretleri kimseyi etkilemeyecektir. Her slayt için bu listeden fikirler göz önünde bulundurun.

  ### Başlamadan Önce

  - **Cesur, içerik temelli bir renk paleti seçin**: Palet bu KONUya hazırlanmış gibi hissetmelidir. Renklerinizi tamamen farklı bir sunuma taşısanız bile "çalışacak" gibi görünüyorsa, yeterince spesifik seçimler yapmamışsınız demektir.
  - **Eşitlik yerine baskınlık**: Bir renk baskın olmalıdır (% 60-70 görsel ağırlık), 1-2 yardımcı ton ve bir keskin vurgu ile. Asla tüm renklere eşit ağırlık vermeyin.
  - **Koyu/açık kontrast**: Başlık + kapanış slaytları için koyu arka fon, içerik için açık ("sandwich" yapısı). Veya premium bir his için koyu renge tamamen bağlı kalın.
  - **Bir görsel motife bağlı kalın**: BİR farklı öğe seçin ve tekrarlayın — yuvarlak görüntü çerçeveleri, renkli dairelerde simgeler, kalın tek taraflı kenarlıklar. Bunu her slayt üzerinde taşıyın.

  ### Renk Paletleri

  Konunuza uyan renkler seçin — genel mavi renge düşmeyin. Bu paletleri ilham kaynağı olarak kullanın:

  | Tema | Birincil | İkincil | Vurgu |
  |------|---------|---------|-------|
  | **Gece Yarısı Yönetici** | `1E2761` (lacivert) | `CADCFC` (buz mavisi) | `FFFFFF` (beyaz) |
  | **Orman & Yosun** | `2C5F2D` (orman) | `97BC62` (yosun) | `F5F5F5` (krem) |
  | **Mercan Enerji** | `F96167` (mercan) | `F9E795` (altın) | `2F3C7E` (lacivert) |
  | **Sıcak Terrakota** | `B85042` (terrakota) | `E7E8D1` (kum) | `A7BEAE` (adaçayı) |
  | **Okyanus Degradesi** | `065A82` (derin mavi) | `1C7293` (teal) | `21295C` (gece yarısı) |
  | **Kömür Minimal** | `36454F` (kömür) | `F2F2F2` (off-white) | `212121` (siyah) |
  | **Teal Güven** | `028090` (teal) | `00A896` (deniz köpüğü) | `02C39A` (nane) |
  | **Berry & Krem** | `6D2E46` (berry) | `A26769` (toza bulanmış gül) | `ECE2D0` (krem) |
  | **Adaçayı Sakinliği** | `84B59F` (adaçayı) | `69A297` (okaliptus) | `50808E` (arduvaz) |
  | **Kiraz Cesur** | `990011` (kiraz) | `FCF6F5` (off-white) | `2F3C7E` (lacivert) |

  ### Her Slayt İçin

  **Her slaytın görsel bir öğeye ihtiyacı vardır** — görüntü, grafik, simge veya şekil. Yalnız metin içeren slaytlar unutulur.

  **Düzen seçenekleri:**
  - İki sütun (sol metni, sağda illüstrasyon)
  - Simge + metin satırları (renkli dairede simge, kalın başlık, aşağıda açıklama)
  - 2x2 veya 2x3 ızgara (bir tarafta görüntü, diğer tarafta içerik blokları ızgarası)
  - Yarı çıkıntılı görüntü (tam sol veya sağ taraf) içerik bindirmesi ile

  **Veri gösterimi:**
  - Büyük istatistik açılır pencereleri (60-72pt büyük numaralar küçük etiketler altında)
  - Karşılaştırma sütunları (önce/sonra, artılar/eksiler, yan yana seçenekler)
  - Zaman çizelgesi veya işlem akışı (numaralandırılmış adımlar, oklar)

  **Görsel parlatma:**
  - Bölüm başlıklarının yanında renkli küçük dairelerde simgeler
  - Temel istatistikler veya sloganlar için italik vurgu metni

  ### Tipografi

  **İlginç bir font kombinasyonu seçin** — Arial'e düşmeyin. Kişiliğe sahip bir başlık fontunu seçin ve temiz bir gövde fontuna eşleştirin.

  | Başlık Fontu | Gövde Fontu |
  |-------------|-----------|
  | Georgia | Calibri |
  | Arial Black | Arial |
  | Calibri | Calibri Light |
  | Cambria | Calibri |
  | Trebuchet MS | Calibri |
  | Impact | Arial |
  | Palatino | Garamond |
  | Consolas | Calibri |

  | Eleman | Boyut |
  |---------|-------|
  | Slayt başlığı | 36-44pt kalın |
  | Bölüm başlığı | 20-24pt kalın |
  | Gövde metni | 14-16pt |
  | Açıklamalar | 10-12pt soluk |

  ### Aralık

  - Minimum 0,5" kenarları
  - İçerik blokları arasında 0,3-0,5"
  - Nefes alma alanı bırakın—her inç doldurmeyin

  ### Kaçınılması Gereken (Yaygın Hatalar)

  - **Aynı düzeni tekrarlamayın** — sütunları, kartları ve açılır pencereleri slaytlar arasında değiştirin
  - **Gövde metni ortaya almayın** — paragrafları ve listeleri sola hizalayın; yalnızca başlıkları ortala
  - **Boyut kontrastında para biriktirmeyin** — başlıklara 36pt+ olmak zorundadır 14-16pt gövdeden ayrılmak için
  - **Maviye düşmeyin** — konuya yansıtan renkler seçin
  - **Aralığı rastgele karıştırmayın** — 0,3" veya 0,5" boşluk seçin ve tutarlı şekilde kullanın
  - **Bir slaytı stilize etmeyin ve geri kalanını düz bırakmayın** — tamamen bağlı kalın veya basit tutun
  - **Yalnız metin olan slaytlar oluşturmayın** — görüntüler, simgeler, grafikler veya görsel öğeler ekleyin; düz başlık + madde işaretlerinden kaçının
  - **Metin kutusu dolgusu unutmayın** — satırları veya şekilleri metin kenarlarıyla hizalarken, metin kutusunda `margin: 0` ayarlayın veya dolguyu hesaba katmak için şekli dengeleyin
  - **Düşük kontrastlı öğeler kullanmayın** — simgeler VE metin arka plana karşı güçlü kontrasta ihtiyaç duyar; açık arka fonda açık metin veya koyu arka fonda koyu metinten kaçının
  - **Başlıkların altında asla vurgu çizgileri kullanmayın** — bunlar yapay zeka tarafından üretilen slaytların bir özelliğidir; bunun yerine boş alanı veya arka plan rengini kullanın

  ---

  ## QA (Gerekli)

  **Sorunlar olduğunu varsayın. İşiniz bunları bulmaktır.**

  İlk render neredeyse hiçbir zaman doğru değildir. QA'ya bir onaylama adımı değil, bir hata avı olarak yaklaşın. İlk incelemede sıfır sorun bulduysanız, yeterince dikkatli bakmıyordunuz demektir.

  ### İçerik QA

  ```bash
  python -m markitdown output.pptx
  ```

  Eksik içeriği, yazım hatalarını, yanlış sırayı kontrol edin.

  **Şablonlar kullanırken, kalan yer tutucu metni kontrol edin:**

  ```bash
  python -m markitdown output.pptx | grep -iE "xxxx|lorem|ipsum|this.*(page|slide).*layout"
  ```

  Grep sonuçlar döndürürse, başarı ilan etmeden önce düzeltin.

  ### Görsel QA

  **⚠️ SUBAGENT'LERI KULLANIN** — hatta 2-3 slayt için bile. Kodu inceledikten sonra, beklediğinizi göreceksiniz, orada ne varsa değil. Subagent'ler taze bakışa sahiptir.

  Slaytları görüntülere dönüştürün (bkz. [Görüntülere Dönüştürme](#converting-to-images)), ardından şu istemi kullanın:

  ```
  Bu slaytları görsel olarak inceleyin. Sorunlar olduğunu varsayın — bunları bulun.

  Arayın:
  - Örtüşen öğeler (şekillerin içinden metin, kelimelerin içinden çizgiler, yığılmış öğeler)
  - Metin taşması veya kenarlar/kutu sınırlarında kesilmiş
  - Tek satırlı metin için konumlandırılmış dekoratif çizgiler ancak başlık iki satıra sarılı
  - Kaynak alıntıları veya altbilgiler yukarıdaki içerikle çarpışıyor
  - Çok yakın öğeler (< 0,3" boşluk) veya neredeyse dokunma kartları/bölümler
  - Eşit olmayan boşluklar (bir yerde büyük boş alan, başka yerde sıkışık)
  - Slayt kenarlarından yetersiz kenar boşluğu (< 0,5")
  - Sütunlar veya benzer öğeler tutarlı şekilde hizalanmamış
  - Düşük kontrastlı metin (örn., krem renkli arka fonda açık gri metin)
  - Düşük kontrastlı simgeler (örn., karşıt bir daire olmaksızın koyu arka funda koyu simgeler)
  - Çok dar metin kutuları aşırı sarma neden oluyor
  - Kalan yer tutucu içeriği

  Her slayt için, minör de olsa sorunları veya endişe alanlarını listeleyin.

  Bu görüntüleri okuyun ve analiz edin:
  1. /path/to/slide-01.jpg (Beklenen: [kısa açıklama])
  2. /path/to/slide-02.jpg (Beklenen: [kısa açıklama])

  Bulunan TÜM sorunları, minör olanlar da dahil olmak üzere bildirin.
  ```

  ### Doğrulama Döngüsü

  1. Slaytlar oluştur → Görüntülere dönüştür → İncele
  2. **Bulunan sorunları listele** (sıfır bulunduysa, daha eleştirel bak)
  3. Sorunları düzelt
  4. **Etkilenen slaytları yeniden doğrula** — bir düzeltme genellikle başka bir soruna neden olur
  5. Tam bir geçiş yeni sorunları ortaya çıkarmadı kadar tekrarlayın

  **En az bir düzeltme-ve-doğrulama döngüsü tamamlayana kadar başarı ilan etmeyin.**

  ---

  ## Görüntülere Dönüştürme

  Sunuları görsel inceleme için ayrı slayt görüntülerine dönüştürün:

  ```bash
  python scripts/office/soffice.py --headless --convert-to pdf output.pptx
  pdftoppm -jpeg -r 150 output.pdf slide
  ```

  Bu `slide-01.jpg`, `slide-02.jpg` vb. oluşturur.

  Düzeltmelerden sonra belirli slaytları yeniden işlemek için:

  ```bash
  pdftoppm -jpeg -r 150 -f N -l N output.pdf slide-fixed
  ```

  ---

  ## Bağımlılıklar

  - `pip install "markitdown[pptx]"` - metin çıkarma
  - `pip install Pillow` - küçük resim ızgaraları
  - `npm install -g pptxgenjs` - sıfırdan oluşturma
  - LibreOffice (`soffice`) - PDF dönüşümü (sandbox ortamlarında `scripts/office/soffice.py` aracılığıyla otomatik yapılandırılmış)
  - Poppler (`pdftoppm`) - PDF'i görüntülere
---

# PPTX Skill

## Quick Reference

| Task | Guide |
|------|-------|
| Read/analyze content | `python -m markitdown presentation.pptx` |
| Edit or create from template | Read [editing.md](editing.md) |
| Create from scratch | Read [pptxgenjs.md](pptxgenjs.md) |

---

## Reading Content

```bash
# Text extraction
python -m markitdown presentation.pptx

# Visual overview
python scripts/thumbnail.py presentation.pptx

# Raw XML
python scripts/office/unpack.py presentation.pptx unpacked/
```

---

## Editing Workflow

**Read [editing.md](editing.md) for full details.**

1. Analyze template with `thumbnail.py`
2. Unpack → manipulate slides → edit content → clean → pack

---

## Creating from Scratch

**Read [pptxgenjs.md](pptxgenjs.md) for full details.**

Use when no template or reference presentation is available.

---

## Design Ideas

**Don't create boring slides.** Plain bullets on a white background won't impress anyone. Consider ideas from this list for each slide.

### Before Starting

- **Pick a bold, content-informed color palette**: The palette should feel designed for THIS topic. If swapping your colors into a completely different presentation would still "work," you haven't made specific enough choices.
- **Dominance over equality**: One color should dominate (60-70% visual weight), with 1-2 supporting tones and one sharp accent. Never give all colors equal weight.
- **Dark/light contrast**: Dark backgrounds for title + conclusion slides, light for content ("sandwich" structure). Or commit to dark throughout for a premium feel.
- **Commit to a visual motif**: Pick ONE distinctive element and repeat it — rounded image frames, icons in colored circles, thick single-side borders. Carry it across every slide.

### Color Palettes

Choose colors that match your topic — don't default to generic blue. Use these palettes as inspiration:

| Theme | Primary | Secondary | Accent |
|-------|---------|-----------|--------|
| **Midnight Executive** | `1E2761` (navy) | `CADCFC` (ice blue) | `FFFFFF` (white) |
| **Forest & Moss** | `2C5F2D` (forest) | `97BC62` (moss) | `F5F5F5` (cream) |
| **Coral Energy** | `F96167` (coral) | `F9E795` (gold) | `2F3C7E` (navy) |
| **Warm Terracotta** | `B85042` (terracotta) | `E7E8D1` (sand) | `A7BEAE` (sage) |
| **Ocean Gradient** | `065A82` (deep blue) | `1C7293` (teal) | `21295C` (midnight) |
| **Charcoal Minimal** | `36454F` (charcoal) | `F2F2F2` (off-white) | `212121` (black) |
| **Teal Trust** | `028090` (teal) | `00A896` (seafoam) | `02C39A` (mint) |
| **Berry & Cream** | `6D2E46` (berry) | `A26769` (dusty rose) | `ECE2D0` (cream) |
| **Sage Calm** | `84B59F` (sage) | `69A297` (eucalyptus) | `50808E` (slate) |
| **Cherry Bold** | `990011` (cherry) | `FCF6F5` (off-white) | `2F3C7E` (navy) |

### For Each Slide

**Every slide needs a visual element** — image, chart, icon, or shape. Text-only slides are forgettable.

**Layout options:**
- Two-column (text left, illustration on right)
- Icon + text rows (icon in colored circle, bold header, description below)
- 2x2 or 2x3 grid (image on one side, grid of content blocks on other)
- Half-bleed image (full left or right side) with content overlay

**Data display:**
- Large stat callouts (big numbers 60-72pt with small labels below)
- Comparison columns (before/after, pros/cons, side-by-side options)
- Timeline or process flow (numbered steps, arrows)

**Visual polish:**
- Icons in small colored circles next to section headers
- Italic accent text for key stats or taglines

### Typography

**Choose an interesting font pairing** — don't default to Arial. Pick a header font with personality and pair it with a clean body font.

| Header Font | Body Font |
|-------------|-----------|
| Georgia | Calibri |
| Arial Black | Arial |
| Calibri | Calibri Light |
| Cambria | Calibri |
| Trebuchet MS | Calibri |
| Impact | Arial |
| Palatino | Garamond |
| Consolas | Calibri |

| Element | Size |
|---------|------|
| Slide title | 36-44pt bold |
| Section header | 20-24pt bold |
| Body text | 14-16pt |
| Captions | 10-12pt muted |

### Spacing

- 0.5" minimum margins
- 0.3-0.5" between content blocks
- Leave breathing room—don't fill every inch

### Avoid (Common Mistakes)

- **Don't repeat the same layout** — vary columns, cards, and callouts across slides
- **Don't center body text** — left-align paragraphs and lists; center only titles
- **Don't skimp on size contrast** — titles need 36pt+ to stand out from 14-16pt body
- **Don't default to blue** — pick colors that reflect the specific topic
- **Don't mix spacing randomly** — choose 0.3" or 0.5" gaps and use consistently
- **Don't style one slide and leave the rest plain** — commit fully or keep it simple throughout
- **Don't create text-only slides** — add images, icons, charts, or visual elements; avoid plain title + bullets
- **Don't forget text box padding** — when aligning lines or shapes with text edges, set `margin: 0` on the text box or offset the shape to account for padding
- **Don't use low-contrast elements** — icons AND text need strong contrast against the background; avoid light text on light backgrounds or dark text on dark backgrounds
- **NEVER use accent lines under titles** — these are a hallmark of AI-generated slides; use whitespace or background color instead

---

## QA (Required)

**Assume there are problems. Your job is to find them.**

Your first render is almost never correct. Approach QA as a bug hunt, not a confirmation step. If you found zero issues on first inspection, you weren't looking hard enough.

### Content QA

```bash
python -m markitdown output.pptx
```

Check for missing content, typos, wrong order.

**When using templates, check for leftover placeholder text:**

```bash
python -m markitdown output.pptx | grep -iE "xxxx|lorem|ipsum|this.*(page|slide).*layout"
```

If grep returns results, fix them before declaring success.

### Visual QA

**⚠️ USE SUBAGENTS** — even for 2-3 slides. You've been staring at the code and will see what you expect, not what's there. Subagents have fresh eyes.

Convert slides to images (see [Converting to Images](#converting-to-images)), then use this prompt:

```
Visually inspect these slides. Assume there are issues — find them.

Look for:
- Overlapping elements (text through shapes, lines through words, stacked elements)
- Text overflow or cut off at edges/box boundaries
- Decorative lines positioned for single-line text but title wrapped to two lines
- Source citations or footers colliding with content above
- Elements too close (< 0.3" gaps) or cards/sections nearly touching
- Uneven gaps (large empty area in one place, cramped in another)
- Insufficient margin from slide edges (< 0.5")
- Columns or similar elements not aligned consistently
- Low-contrast text (e.g., light gray text on cream-colored background)
- Low-contrast icons (e.g., dark icons on dark backgrounds without a contrasting circle)
- Text boxes too narrow causing excessive wrapping
- Leftover placeholder content

For each slide, list issues or areas of concern, even if minor.

Read and analyze these images:
1. /path/to/slide-01.jpg (Expected: [brief description])
2. /path/to/slide-02.jpg (Expected: [brief description])

Report ALL issues found, including minor ones.
```

### Verification Loop

1. Generate slides → Convert to images → Inspect
2. **List issues found** (if none found, look again more critically)
3. Fix issues
4. **Re-verify affected slides** — one fix often creates another problem
5. Repeat until a full pass reveals no new issues

**Do not declare success until you've completed at least one fix-and-verify cycle.**

---

## Converting to Images

Convert presentations to individual slide images for visual inspection:

```bash
python scripts/office/soffice.py --headless --convert-to pdf output.pptx
pdftoppm -jpeg -r 150 output.pdf slide
```

This creates `slide-01.jpg`, `slide-02.jpg`, etc.

To re-render specific slides after fixes:

```bash
pdftoppm -jpeg -r 150 -f N -l N output.pdf slide-fixed
```

---

## Dependencies

- `pip install "markitdown[pptx]"` - text extraction
- `pip install Pillow` - thumbnail grids
- `npm install -g pptxgenjs` - creating from scratch
- LibreOffice (`soffice`) - PDF conversion (auto-configured for sandboxed environments via `scripts/office/soffice.py`)
- Poppler (`pdftoppm`) - PDF to images
