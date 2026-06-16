---
name: "theme-factory"
description_en: "Toolkit for styling artifacts with a theme. These artifacts can be slides, docs, reportings, HTML landing pages, etc. There are 10 pre-set themes with colors/fonts that you can apply to any artifact that has been creating, or can generate a new theme on-the-fly."
category: "Document"
repo: "smartnews/claude-skills"
stars: 2
url: "https://github.com/smartnews/claude-skills/blob/HEAD/theme-factory/SKILL.md"
path: "theme-factory/SKILL.md"
is_collection: false
body_length: 2778
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Theme Factory Skill

  Bu skill, profesyonelce seçilmiş renk paleti ve font eşleştirmeleriyle birlikte, kurulu bir koleksiyona sahip tema koleksiyonu sağlar. Bir tema seçildikten sonra, herhangi bir artifact'a uygulanabilir.

  ## Amaç

  Sunum slayt destelerine tutarlı, profesyonel stil uygulamak için bu skill'i kullanın. Her tema şunları içerir:
  - Hex kodlarıyla uyumlu bir renk paleti
  - Başlık ve gövde metni için tamamlayıcı font eşleştirmeleri
  - Farklı bağlamlar ve hedef kitleler için uygun belirgin bir görsel kimlik

  ## Kullanım Talimatları

  Slayt destesine veya diğer artifact'a stil uygulamak için:

  1. **Tema vitrinini gösterin**: Kullanıcıların tüm mevcut temaları görsel olarak görmelerine izin vermek için `theme-showcase.pdf` dosyasını görüntüleyin. Bunu değiştirmeyin; yalnızca görüntüleme için dosyayı gösterin.
  2. **Seçimlerini sorun**: Desteye hangi temayı uygulayacaklarını sorun
  3. **Seçim için bekleyin**: Seçilen tema hakkında açık onay alın
  4. **Temayı uygulayın**: Bir tema seçildikten sonra, seçilen temayı renk ve fontlarını destege/artifact'a uygulayın

  ## Mevcut Temalar

  Aşağıdaki 10 tema mevcuttur ve her biri `theme-showcase.pdf` içinde gösterilmektedir:

  1. **Ocean Depths** - Profesyonel ve sakinleştirici denizcilik teması
  2. **Sunset Boulevard** - Sıcak ve canlı gün batımı renkleri
  3. **Forest Canopy** - Doğal ve yerleşik toprak tonları
  4. **Modern Minimalist** - Temiz ve çağdaş gri tonlaması
  5. **Golden Hour** - Zengin ve sıcak sonbahar paleti
  6. **Arctic Frost** - Serin ve net kış-ilham teması
  7. **Desert Rose** - Yumuşak ve sofistike soluk tonlar
  8. **Tech Innovation** - Cesur ve modern teknoloji estetiği
  9. **Botanical Garden** - Taze ve organik bahçe renkleri
  10. **Midnight Galaxy** - Dramatik ve kozmik derin tonlar

  ## Tema Detayları

  Her tema `themes/` dizininde aşağıdakiler de dahil olmak üzere tam özelliklerle tanımlanmıştır:
  - Hex kodlarıyla uyumlu renk paleti
  - Başlık ve gövde metni için tamamlayıcı font eşleştirmeleri
  - Farklı bağlamlar ve hedef kitleler için uygun belirgin bir görsel kimlik

  ## Uygulama Süreci

  Tercih edilen bir tema seçildikten sonra:
  1. `themes/` dizininden ilgili tema dosyasını okuyun
  2. Belirtilen renk ve fontları destede tutarlı bir şekilde uygulayın
  3. Uygun kontrast ve okunabilirliği sağlayın
  4. Temanın görsel kimliğini tüm slaytlarda koruyun

  ## Kendi Temamı Oluşturun
  Mevcut temaların hiçbirinin bir artifact için uygun olmadığı durumlarda, özel bir tema oluşturun. Sağlanan girdilere göre, yukarıdakine benzer yeni bir tema oluşturun. Temaya, font/renk kombinasyonlarının ne temsil ettiğini açıklayan benzer bir ad verin. Uygun renk ve fontları seçmek için sağlanan herhangi bir temel açıklamayı kullanın. Temayı oluşturduktan sonra, inceleme ve doğrulama için gösterin. Bunun ardından temayı yukarıda açıklandığı gibi uygulayın.
---

# Theme Factory Skill

This skill provides a curated collection of professional font and color themes themes, each with carefully selected color palettes and font pairings. Once a theme is chosen, it can be applied to any artifact.

## Purpose

To apply consistent, professional styling to presentation slide decks, use this skill. Each theme includes:
- A cohesive color palette with hex codes
- Complementary font pairings for headers and body text
- A distinct visual identity suitable for different contexts and audiences

## Usage Instructions

To apply styling to a slide deck or other artifact:

1. **Show the theme showcase**: Display the `theme-showcase.pdf` file to allow users to see all available themes visually. Do not make any modifications to it; simply show the file for viewing.
2. **Ask for their choice**: Ask which theme to apply to the deck
3. **Wait for selection**: Get explicit confirmation about the chosen theme
4. **Apply the theme**: Once a theme has been chosen, apply the selected theme's colors and fonts to the deck/artifact

## Themes Available

The following 10 themes are available, each showcased in `theme-showcase.pdf`:

1. **Ocean Depths** - Professional and calming maritime theme
2. **Sunset Boulevard** - Warm and vibrant sunset colors
3. **Forest Canopy** - Natural and grounded earth tones
4. **Modern Minimalist** - Clean and contemporary grayscale
5. **Golden Hour** - Rich and warm autumnal palette
6. **Arctic Frost** - Cool and crisp winter-inspired theme
7. **Desert Rose** - Soft and sophisticated dusty tones
8. **Tech Innovation** - Bold and modern tech aesthetic
9. **Botanical Garden** - Fresh and organic garden colors
10. **Midnight Galaxy** - Dramatic and cosmic deep tones

## Theme Details

Each theme is defined in the `themes/` directory with complete specifications including:
- Cohesive color palette with hex codes
- Complementary font pairings for headers and body text
- Distinct visual identity suitable for different contexts and audiences

## Application Process

After a preferred theme is selected:
1. Read the corresponding theme file from the `themes/` directory
2. Apply the specified colors and fonts consistently throughout the deck
3. Ensure proper contrast and readability
4. Maintain the theme's visual identity across all slides

## Create your Own Theme
To handle cases where none of the existing themes work for an artifact, create a custom theme. Based on provided inputs, generate a new theme similar to the ones above. Give the theme a similar name describing what the font/color combinations represent. Use any basic description provided to choose appropriate colors/fonts. After generating the theme, show it for review and verification. Following that, apply the theme as described above.
