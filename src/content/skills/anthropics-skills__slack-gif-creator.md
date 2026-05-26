---
name: "slack-gif-creator"
description_en: "Knowledge and utilities for creating animated GIFs optimized for Slack. Provides constraints, validation tools, and animation concepts. Use when users request animated GIFs for Slack like \"make me a GIF of X doing Y for Slack."
description_tr: "Slack için optimize edilmiş animasyonlu GIF'ler oluşturmak için bilgi ve araçlar sunar. Kısıtlamalar, doğrulama araçları ve animasyon konseptleri içerir. Kullanıcılar \"Slack için X'in Y yapmasını gösteren bir GIF yap\" gibi isteklerde bulunduğunda kullanılır."
category: "Design"
repo: "anthropics/skills"
stars: 140618
url: "https://github.com/anthropics/skills/blob/HEAD/skills/slack-gif-creator/SKILL.md"
path: "skills/slack-gif-creator/SKILL.md"
is_collection: false
body_length: 7527
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Slack GIF Oluşturucu

  Slack için optimize edilmiş animasyonlu GIF'ler oluşturmak üzere yardımcı programlar ve bilgi sağlayan bir araç seti.

  ## Slack Gereksinimleri

  **Boyutlar:**
  - Emoji GIF'leri: 128x128 (önerilen)
  - Mesaj GIF'leri: 480x480

  **Parametreler:**
  - FPS: 10-30 (düşük = daha küçük dosya boyutu)
  - Renkler: 48-128 (az = daha küçük dosya boyutu)
  - Süre: Emoji GIF'leri için 3 saniyenin altında tutun

  ## Temel İş Akışı

  ```python
  from core.gif_builder import GIFBuilder
  from PIL import Image, ImageDraw

  # 1. Builder oluştur
  builder = GIFBuilder(width=128, height=128, fps=10)

  # 2. Kareleri üret
  for i in range(12):
      frame = Image.new('RGB', (128, 128), (240, 248, 255))
      draw = ImageDraw.Draw(frame)

      # PIL primitive'lerini kullanarak animasyonunuzu çizin
      # (daireler, çokgenler, çizgiler, vb.)

      builder.add_frame(frame)

  # 3. Optimizasyon ile kaydet
  builder.save('output.gif', num_colors=48, optimize_for_emoji=True)
  ```

  ## Grafikleri Çizme

  ### Kullanıcı Tarafından Yüklenen Görüntülerle Çalışma
  Bir kullanıcı görüntü yüklerse, şunlardan birini isteyip istemediğini göz önünde bulundurun:
  - **Doğrudan kullan** (ör. "bunu canlandır", "bunu karelere böl")
  - **İlham kaynağı olarak kullan** (ör. "buna benzer bir şey yap")

  PIL kullanarak görüntüleri yükleyin ve çalışın:
  ```python
  from PIL import Image

  uploaded = Image.open('file.png')
  # Doğrudan kullanın veya sadece renkler/stil için referans olarak kullanın
  ```

  ### Sıfırdan Çizim
  Grafikleri sıfırdan çizerken, PIL ImageDraw primitive'lerini kullanın:

  ```python
  from PIL import ImageDraw

  draw = ImageDraw.Draw(frame)

  # Daireler/ovaller
  draw.ellipse([x1, y1, x2, y2], fill=(r, g, b), outline=(r, g, b), width=3)

  # Yıldızlar, üçgenler, herhangi bir çokgen
  points = [(x1, y1), (x2, y2), (x3, y3), ...]
  draw.polygon(points, fill=(r, g, b), outline=(r, g, b), width=3)

  # Çizgiler
  draw.line([(x1, y1), (x2, y2)], fill=(r, g, b), width=5)

  # Dikdörtgenler
  draw.rectangle([x1, y1, x2, y2], fill=(r, g, b), outline=(r, g, b), width=3)
  ```

  **Kullanmayın:** Emoji fontları (platformlar arasında güvenilmez) veya bu beceri içinde önceden paketlenmiş grafiklerin var olduğunu varsaymayın.

  ### Grafikleri İyi Görünür Kılma

  Grafikler temel değil, cilalı ve yaratıcı görünmelidir. İşte nasıl yapılır:

  **Daha kalın çizgiler kullanın** - Her zaman konturlar ve çizgiler için `width=2` veya daha yüksek ayarlayın. İnce çizgiler (width=1) sıçramalı ve amatörcü görünür.

  **Görsel derinlik ekleyin**:
  - Arka planlar için gradyan kullanın (`create_gradient_background`)
  - Karmaşıklık için birden fazla şekli katmanlayın (ör. içinde daha küçük bir yıldız olan bir yıldız)

  **Şekilleri daha ilginç hale getirin**:
  - Sadece sade bir daire çizmeyin - vurgular, halkalar veya desenler ekleyin
  - Yıldızların parlaması olabilir (arkasında daha büyük, yarı şeffaf versiyonlar çizin)
  - Birden fazla şekli birleştirin (yıldızlar + kıvılcımlar, daireler + halkalar)

  **Renklere dikkat edin**:
  - Canlı, tamamlayıcı renkler kullanın
  - Kontrast ekleyin (açık şekillerde koyu konturlar, koyu şekillerde açık konturlar)
  - Genel bileşimi göz önünde bulundurun

  **Karmaşık şekiller için** (kalpler, kar kristalleri, vb.):
  - Çokgen ve elips kombinasyonları kullanın
  - Simetri için noktaları dikkatlice hesaplayın
  - Detaylar ekleyin (bir kalp vurgu eğrisine sahip olabilir, kar kristalleri karmaşık dallar içerir)

  Yaratıcı olun ve detaylı olun! İyi bir Slack GIF'i, yer tutucu grafikleri değil, cilalı görünmelidir.

  ## Mevcut Yardımcı Programlar

  ### GIFBuilder (`core.gif_builder`)
  Kareleri bir araya getirir ve Slack için optimize eder:
  ```python
  builder = GIFBuilder(width=128, height=128, fps=10)
  builder.add_frame(frame)  # PIL Image ekle
  builder.add_frames(frames)  # Kare listesi ekle
  builder.save('out.gif', num_colors=48, optimize_for_emoji=True, remove_duplicates=True)
  ```

  ### Validators (`core.validators`)
  GIF'in Slack gereksinimlerini karşılayıp karşılamadığını kontrol edin:
  ```python
  from core.validators import validate_gif, is_slack_ready

  # Detaylı doğrulama
  passes, info = validate_gif('my.gif', is_emoji=True, verbose=True)

  # Hızlı kontrol
  if is_slack_ready('my.gif'):
      print("Hazır!")
  ```

  ### Easing Fonksiyonları (`core.easing`)
  Doğrusal yerine düzgün hareket:
  ```python
  from core.easing import interpolate

  # 0.0 ile 1.0 arasında ilerleme
  t = i / (num_frames - 1)

  # Easing uygula
  y = interpolate(start=0, end=400, t=t, easing='ease_out')

  # Mevcut: linear, ease_in, ease_out, ease_in_out,
  #         bounce_out, elastic_out, back_out
  ```

  ### Kare Yardımcıları (`core.frame_composer`)
  Yaygın ihtiyaçlar için kolaylık fonksiyonları:
  ```python
  from core.frame_composer import (
      create_blank_frame,         # Solid renk arka planı
      create_gradient_background,  # Dikey gradyan
      draw_circle,                # Daireler için yardımcı
      draw_text,                  # Basit metin oluşturma
      draw_star                   # 5 köşeli yıldız
  )
  ```

  ## Animasyon Kavramları

  ### Sallantı/Titreme
  Nesne konumunu salınımla ofset edin:
  - `math.sin()` veya `math.cos()` öğesini kare indeksi ile kullanın
  - Doğal bir his için küçük rastgele varyasyonlar ekleyin
  - x ve/veya y konumuna uygulayın

  ### Nabız/Kalp Atışı
  Nesne boyutunu ritmik olarak ölçekleyin:
  - Düzgün nabız için `math.sin(t * frequency * 2 * math.pi)` kullanın
  - Kalp atışı için: iki hızlı nabız ardından duraklatma (sinüs dalgasını ayarlayın)
  - Temel boyutun 0.8 ile 1.2 arasında ölçekleyin

  ### Sıçrama
  Nesne düşer ve sıçrar:
  - İniş için `interpolate()` öğesini `easing='bounce_out'` ile kullanın
  - Düşüş için `easing='ease_in'` kullanın (hızlanıyor)
  - Her kare için y hızını artırarak yerçekimi uygulayın

  ### Döndür/Döndürme
  Nesneyi merkez etrafında döndürün:
  - PIL: `image.rotate(angle, resample=Image.BICUBIC)`
  - Sallanma için: doğrusal yerine açı için sinüs dalgası kullanın

  ### Solma İçeri/Dışarı
  Kademeli olarak görün veya kaybolun:
  - RGBA görüntüsü oluşturun, alfa kanalını ayarlayın
  - Veya `Image.blend(image1, image2, alpha)` kullanın
  - Solma: alfa 0'dan 1'e
  - Solma dışarı: alfa 1'den 0'a

  ### Kaydır
  Nesneyi ekran dışından konuma taşıyın:
  - Başlangıç konumu: kare sınırlarının dışı
  - Son konum: hedef konum
  - Düzgün durdurma için `interpolate()` öğesini `easing='ease_out'` ile kullanın
  - Fazlalık için: `easing='back_out'` kullanın

  ### Yakınlaş
  Yakınlaştırma efekti için ölçekleyin ve konumlandırın:
  - Yakınlaş: 0.1'den 2.0'ye ölçekleyin, merkezi kırpın
  - Uzaklaş: 2.0'dan 1.0'ye ölçekleyin
  - Drama için hareket bulanıklığı ekleyebilir (PIL filtresi)

  ### Patla/Parçacık Patlaması
  Radyal olarak dışa doğru yayılan parçacıklar oluşturun:
  - Rastgele açılar ve hızlar ile parçacıklar oluşturun
  - Her parçacığı güncelleyin: `x += vx`, `y += vy`
  - Yerçekimi ekleyin: `vy += gravity_constant`
  - Zamanla parçacıkları soluklayın (alfa'yı azaltın)

  ## Optimizasyon Stratejileri

  Dosya boyutunu küçültmek için istendiğinde, aşağıdaki yöntemlerden birkaçını uygulayın:

  1. **Daha az kare** - Daha düşük FPS (20 yerine 10) veya daha kısa süre
  2. **Daha az renk** - `num_colors=48` yerine 128
  3. **Daha küçük boyutlar** - 480x480 yerine 128x128
  4. **Dublikaları kaldır** - save() öğesinde `remove_duplicates=True`
  5. **Emoji modu** - `optimize_for_emoji=True` otomatik olarak optimize eder

  ```python
  # Emoji için maksimum optimizasyon
  builder.save(
      'emoji.gif',
      num_colors=48,
      optimize_for_emoji=True,
      remove_duplicates=True
  )
  ```

  ## Felsefe

  Bu beceri sağlar:
  - **Bilgi**: Slack'in gereksinimleri ve animasyon kavramları
  - **Yardımcı Programlar**: GIFBuilder, validators, easing fonksiyonları
  - **Esneklik**: PIL primitive'lerini kullanarak animasyon mantığını oluşturun

  Sağlamaz:
  - Katı animasyon şablonları veya önceden hazırlanmış fonksiyonlar
  - Emoji yazı tipi oluşturma (platformlar arasında güvenilmez)
  - Beceriye yerleştirilmiş önceden paketlenmiş grafiklerin bir kütüphanesi

  **Kullanıcı yüklemeleri hakkında not**: Bu beceri önceden oluşturulmuş grafikler içermez, ancak bir kullanıcı görüntü yüklerse, PIL kullanarak yükleyin ve çalışın - onların isteğine göre doğrudan kullanılmasını mı yoksa sadece ilham kaynağı olarak mı kullanıldığını yorumlayın.

  Yaratıcı olun! Kavramları birleştirin (sıçrayan + dönen, atılan + kayan, vb.) ve PIL'in tam yeteneklerini kullanın.

  ## Bağımlılıklar

  ```bash
  pip install pillow imageio numpy
  ```
---

# Slack GIF Creator

A toolkit providing utilities and knowledge for creating animated GIFs optimized for Slack.

## Slack Requirements

**Dimensions:**
- Emoji GIFs: 128x128 (recommended)
- Message GIFs: 480x480

**Parameters:**
- FPS: 10-30 (lower is smaller file size)
- Colors: 48-128 (fewer = smaller file size)
- Duration: Keep under 3 seconds for emoji GIFs

## Core Workflow

```python
from core.gif_builder import GIFBuilder
from PIL import Image, ImageDraw

# 1. Create builder
builder = GIFBuilder(width=128, height=128, fps=10)

# 2. Generate frames
for i in range(12):
    frame = Image.new('RGB', (128, 128), (240, 248, 255))
    draw = ImageDraw.Draw(frame)

    # Draw your animation using PIL primitives
    # (circles, polygons, lines, etc.)

    builder.add_frame(frame)

# 3. Save with optimization
builder.save('output.gif', num_colors=48, optimize_for_emoji=True)
```

## Drawing Graphics

### Working with User-Uploaded Images
If a user uploads an image, consider whether they want to:
- **Use it directly** (e.g., "animate this", "split this into frames")
- **Use it as inspiration** (e.g., "make something like this")

Load and work with images using PIL:
```python
from PIL import Image

uploaded = Image.open('file.png')
# Use directly, or just as reference for colors/style
```

### Drawing from Scratch
When drawing graphics from scratch, use PIL ImageDraw primitives:

```python
from PIL import ImageDraw

draw = ImageDraw.Draw(frame)

# Circles/ovals
draw.ellipse([x1, y1, x2, y2], fill=(r, g, b), outline=(r, g, b), width=3)

# Stars, triangles, any polygon
points = [(x1, y1), (x2, y2), (x3, y3), ...]
draw.polygon(points, fill=(r, g, b), outline=(r, g, b), width=3)

# Lines
draw.line([(x1, y1), (x2, y2)], fill=(r, g, b), width=5)

# Rectangles
draw.rectangle([x1, y1, x2, y2], fill=(r, g, b), outline=(r, g, b), width=3)
```

**Don't use:** Emoji fonts (unreliable across platforms) or assume pre-packaged graphics exist in this skill.

### Making Graphics Look Good

Graphics should look polished and creative, not basic. Here's how:

**Use thicker lines** - Always set `width=2` or higher for outlines and lines. Thin lines (width=1) look choppy and amateurish.

**Add visual depth**:
- Use gradients for backgrounds (`create_gradient_background`)
- Layer multiple shapes for complexity (e.g., a star with a smaller star inside)

**Make shapes more interesting**:
- Don't just draw a plain circle - add highlights, rings, or patterns
- Stars can have glows (draw larger, semi-transparent versions behind)
- Combine multiple shapes (stars + sparkles, circles + rings)

**Pay attention to colors**:
- Use vibrant, complementary colors
- Add contrast (dark outlines on light shapes, light outlines on dark shapes)
- Consider the overall composition

**For complex shapes** (hearts, snowflakes, etc.):
- Use combinations of polygons and ellipses
- Calculate points carefully for symmetry
- Add details (a heart can have a highlight curve, snowflakes have intricate branches)

Be creative and detailed! A good Slack GIF should look polished, not like placeholder graphics.

## Available Utilities

### GIFBuilder (`core.gif_builder`)
Assembles frames and optimizes for Slack:
```python
builder = GIFBuilder(width=128, height=128, fps=10)
builder.add_frame(frame)  # Add PIL Image
builder.add_frames(frames)  # Add list of frames
builder.save('out.gif', num_colors=48, optimize_for_emoji=True, remove_duplicates=True)
```

### Validators (`core.validators`)
Check if GIF meets Slack requirements:
```python
from core.validators import validate_gif, is_slack_ready

# Detailed validation
passes, info = validate_gif('my.gif', is_emoji=True, verbose=True)

# Quick check
if is_slack_ready('my.gif'):
    print("Ready!")
```

### Easing Functions (`core.easing`)
Smooth motion instead of linear:
```python
from core.easing import interpolate

# Progress from 0.0 to 1.0
t = i / (num_frames - 1)

# Apply easing
y = interpolate(start=0, end=400, t=t, easing='ease_out')

# Available: linear, ease_in, ease_out, ease_in_out,
#           bounce_out, elastic_out, back_out
```

### Frame Helpers (`core.frame_composer`)
Convenience functions for common needs:
```python
from core.frame_composer import (
    create_blank_frame,         # Solid color background
    create_gradient_background,  # Vertical gradient
    draw_circle,                # Helper for circles
    draw_text,                  # Simple text rendering
    draw_star                   # 5-pointed star
)
```

## Animation Concepts

### Shake/Vibrate
Offset object position with oscillation:
- Use `math.sin()` or `math.cos()` with frame index
- Add small random variations for natural feel
- Apply to x and/or y position

### Pulse/Heartbeat
Scale object size rhythmically:
- Use `math.sin(t * frequency * 2 * math.pi)` for smooth pulse
- For heartbeat: two quick pulses then pause (adjust sine wave)
- Scale between 0.8 and 1.2 of base size

### Bounce
Object falls and bounces:
- Use `interpolate()` with `easing='bounce_out'` for landing
- Use `easing='ease_in'` for falling (accelerating)
- Apply gravity by increasing y velocity each frame

### Spin/Rotate
Rotate object around center:
- PIL: `image.rotate(angle, resample=Image.BICUBIC)`
- For wobble: use sine wave for angle instead of linear

### Fade In/Out
Gradually appear or disappear:
- Create RGBA image, adjust alpha channel
- Or use `Image.blend(image1, image2, alpha)`
- Fade in: alpha from 0 to 1
- Fade out: alpha from 1 to 0

### Slide
Move object from off-screen to position:
- Start position: outside frame bounds
- End position: target location
- Use `interpolate()` with `easing='ease_out'` for smooth stop
- For overshoot: use `easing='back_out'`

### Zoom
Scale and position for zoom effect:
- Zoom in: scale from 0.1 to 2.0, crop center
- Zoom out: scale from 2.0 to 1.0
- Can add motion blur for drama (PIL filter)

### Explode/Particle Burst
Create particles radiating outward:
- Generate particles with random angles and velocities
- Update each particle: `x += vx`, `y += vy`
- Add gravity: `vy += gravity_constant`
- Fade out particles over time (reduce alpha)

## Optimization Strategies

Only when asked to make the file size smaller, implement a few of the following methods:

1. **Fewer frames** - Lower FPS (10 instead of 20) or shorter duration
2. **Fewer colors** - `num_colors=48` instead of 128
3. **Smaller dimensions** - 128x128 instead of 480x480
4. **Remove duplicates** - `remove_duplicates=True` in save()
5. **Emoji mode** - `optimize_for_emoji=True` auto-optimizes

```python
# Maximum optimization for emoji
builder.save(
    'emoji.gif',
    num_colors=48,
    optimize_for_emoji=True,
    remove_duplicates=True
)
```

## Philosophy

This skill provides:
- **Knowledge**: Slack's requirements and animation concepts
- **Utilities**: GIFBuilder, validators, easing functions
- **Flexibility**: Create the animation logic using PIL primitives

It does NOT provide:
- Rigid animation templates or pre-made functions
- Emoji font rendering (unreliable across platforms)
- A library of pre-packaged graphics built into the skill

**Note on user uploads**: This skill doesn't include pre-built graphics, but if a user uploads an image, use PIL to load and work with it - interpret based on their request whether they want it used directly or just as inspiration.

Be creative! Combine concepts (bouncing + rotating, pulsing + sliding, etc.) and use PIL's full capabilities.

## Dependencies

```bash
pip install pillow imageio numpy
```
