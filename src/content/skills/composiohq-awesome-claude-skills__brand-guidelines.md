---
name: "brand-guidelines"
description_en: "Applies Anthropic's official brand colors and typography to any sort of artifact that may benefit from having Anthropic's look-and-feel. Use it when brand colors or style guidelines, visual formatting, or company design standards apply."
category: "Design"
repo: "ComposioHQ/awesome-claude-skills"
stars: 61753
url: "https://github.com/ComposioHQ/awesome-claude-skills/blob/HEAD/brand-guidelines/SKILL.md"
path: "brand-guidelines/SKILL.md"
is_collection: false
body_length: 1913
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Anthropic Brand Styling

  ## Genel Bakış

  Anthropic'in resmi marka kimliği ve stil kaynaklarına erişmek için bu beceriyi kullanın.

  **Anahtar Kelimeler**: branding, kurumsal kimlik, görsel kimlik, son işleme, styling, marka renkleri, tipografi, Anthropic markası, görsel biçimlendirme, görsel tasarım

  ## Marka Kılavuzları

  ### Renkler

  **Ana Renkler:**

  - Dark: `#141413` - Birincil metin ve koyu arka planlar
  - Light: `#faf9f5` - Açık arka planlar ve koyu üzerine metin
  - Mid Gray: `#b0aea5` - İkincil öğeler
  - Light Gray: `#e8e6dc` - Hafif arka planlar

  **Vurgu Renkleri:**

  - Orange: `#d97757` - Birincil vurgu
  - Blue: `#6a9bcc` - İkincil vurgu
  - Green: `#788c5d` - Üçüncül vurgu

  ### Tipografi

  - **Başlıklar**: Poppins (Arial yedek yazı tipi)
  - **Gövde Metni**: Lora (Georgia yedek yazı tipi)
  - **Not**: Yazı tiplerinin en iyi sonuçlar için ortamınızda önceden yüklü olması gerekir

  ## Özellikler

  ### Akıllı Yazı Tipi Uygulaması

  - Başlıklara Poppins yazı tipini uygular (24pt ve daha büyük)
  - Gövde metnine Lora yazı tipini uygular
  - Özel yazı tipleri kullanılamıyorsa otomatik olarak Arial/Georgia'ya geri döner
  - Tüm sistemlerde okunabilirliği korur

  ### Metin Styling

  - Başlıklar (24pt+): Poppins yazı tipi
  - Gövde metni: Lora yazı tipi
  - Arka plana dayalı akıllı renk seçimi
  - Metin hiyerarşisini ve biçimlendirmesini korur

  ### Şekil ve Vurgu Renkleri

  - Metin olmayan şekiller vurgu renkleri kullanır
  - Turuncu, mavi ve yeşil vurguları döngü olarak uygular
  - Marka kimliğine uygun kalırken görsel ilgiyi korur

  ## Teknik Detaylar

  ### Yazı Tipi Yönetimi

  - Mevcut olduğunda sistem tarafından yüklü Poppins ve Lora yazı tiplerini kullanır
  - Arial (başlıklar) ve Georgia (gövde) yazı tiplerine otomatik geri dönüş sağlar
  - Yazı tipi yüklemesi gerekli değildir - mevcut sistem yazı tipleriyle çalışır
  - En iyi sonuçlar için ortamınızda Poppins ve Lora yazı tiplerini önceden yükleyin

  ### Renk Uygulaması

  - Kesin marka eşleştirmesi için RGB renk değerlerini kullanır
  - python-pptx'in RGBColor sınıfı aracılığıyla uygulanır
  - Farklı sistemlerde renk doğruluğunu korur
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
