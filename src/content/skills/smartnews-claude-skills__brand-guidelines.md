---
name: "brand-guidelines"
description_en: "Applies Anthropic's official brand colors and typography to any sort of artifact that may benefit from having Anthropic's look-and-feel. Use it when brand colors or style guidelines, visual formatting, or company design standards apply."
category: "Design"
repo: "smartnews/claude-skills"
stars: 2
url: "https://github.com/smartnews/claude-skills/blob/HEAD/brand-guidelines/SKILL.md"
path: "brand-guidelines/SKILL.md"
is_collection: false
body_length: 1913
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Anthropic Marka Tasarımı

  ## Genel Bakış

  Anthropic'in resmi marka kimliğine ve stil kaynaklarına erişmek için bu skill'i kullanın.

  **Anahtar Kelimeler**: marka tasarımı, kurumsal kimlik, görsel kimlik, son işleme, styling, marka renkleri, tipografi, Anthropic markası, görsel biçimlendirme, görsel tasarım

  ## Marka Rehberi

  ### Renkler

  **Ana Renkler:**

  - Dark: `#141413` - Birincil metin ve koyu arka planlar
  - Light: `#faf9f5` - Açık arka planlar ve koyu üzerine metin
  - Mid Gray: `#b0aea5` - İkincil öğeler
  - Light Gray: `#e8e6dc` - Zarif arka planlar

  **Accent Renkler:**

  - Orange: `#d97757` - Birincil accent
  - Blue: `#6a9bcc` - İkincil accent
  - Green: `#788c5d` - Üçüncül accent

  ### Tipografi

  - **Başlıklar**: Poppins (Arial fallback ile)
  - **Body Text**: Lora (Georgia fallback ile)
  - **Not**: Fontlar en iyi sonuçlar için ortamınızda önceden yüklü olmalıdır

  ## Özellikler

  ### Akıllı Font Uygulaması

  - Başlıklara Poppins fontunu uygular (24pt ve daha büyük)
  - Body text'e Lora fontunu uygular
  - Custom fontlar kullanılamadığında otomatik olarak Arial/Georgia'ya döner
  - Tüm sistemlerde okunabilirliği korur

  ### Metin Stillemesi

  - Başlıklar (24pt+): Poppins font
  - Body text: Lora font
  - Arka plana dayalı akıllı renk seçimi
  - Metin hiyerarşisini ve biçimlendirmesini korur

  ### Şekil ve Accent Renkler

  - Metin dışı şekiller accent renkler kullanır
  - Orange, blue ve green accent'ler arasında döngü yapar
  - Marka uyumluluğunu korurken görsel ilgi yaratır

  ## Teknik Detaylar

  ### Font Yönetimi

  - Mevcut olduğunda sistem-yüklü Poppins ve Lora fontlarını kullanır
  - Arial (başlıklar) ve Georgia (body) için otomatik fallback sağlar
  - Font yüklemesi gerekmez - mevcut sistem fontlarıyla çalışır
  - En iyi sonuçlar için Poppins ve Lora fontlarını ortamınızda önceden yükleyin

  ### Renk Uygulaması

  - Hassas marka eşleştirmesi için RGB renk değerleri kullanır
  - python-pptx'in RGBColor sınıfı aracılığıyla uygulanır
  - Farklı sistemler arasında renk sadakatini korur
---

# Anthropic Brand Styling

## Overview

To access Anthropic's official brand identity and style resources, use this skill.

**Keywords**: branding, corporate identity, visual identity, post-processing, styling, brand colors, typography, Anthropic brand, visual formatting, visual design

## Brand Guidelines

### Colors

**Main Colors:**

- Dark: `#141413` - Primary text and dark backgrounds
- Light: `#faf9f5` - Light backgrounds and text on dark
- Mid Gray: `#b0aea5` - Secondary elements
- Light Gray: `#e8e6dc` - Subtle backgrounds

**Accent Colors:**

- Orange: `#d97757` - Primary accent
- Blue: `#6a9bcc` - Secondary accent
- Green: `#788c5d` - Tertiary accent

### Typography

- **Headings**: Poppins (with Arial fallback)
- **Body Text**: Lora (with Georgia fallback)
- **Note**: Fonts should be pre-installed in your environment for best results

## Features

### Smart Font Application

- Applies Poppins font to headings (24pt and larger)
- Applies Lora font to body text
- Automatically falls back to Arial/Georgia if custom fonts unavailable
- Preserves readability across all systems

### Text Styling

- Headings (24pt+): Poppins font
- Body text: Lora font
- Smart color selection based on background
- Preserves text hierarchy and formatting

### Shape and Accent Colors

- Non-text shapes use accent colors
- Cycles through orange, blue, and green accents
- Maintains visual interest while staying on-brand

## Technical Details

### Font Management

- Uses system-installed Poppins and Lora fonts when available
- Provides automatic fallback to Arial (headings) and Georgia (body)
- No font installation required - works with existing system fonts
- For best results, pre-install Poppins and Lora fonts in your environment

### Color Application

- Uses RGB color values for precise brand matching
- Applied via python-pptx's RGBColor class
- Maintains color fidelity across different systems
