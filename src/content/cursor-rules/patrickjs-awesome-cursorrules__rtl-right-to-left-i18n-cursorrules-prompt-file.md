---
name: "rtl-right-to-left-i18n-cursorrules-prompt-file"
clean_name: "Rtl Right To Left I18n"
description: "Cursor rules for RTL development with logical CSS properties, Tailwind logical classes, bidirectional text, and automated auditing via rtlify-ai."
description_tr: "RTL geliştirme için cursor kuralları: logical CSS properties, Tailwind logical classes, çift yönlü metin desteği ve rtlify-ai ile otomatik denetim."
category: "Other"
repo: "PatrickJS/awesome-cursorrules"
stars: 40010
path: "rules/rtl-right-to-left-i18n-cursorrules-prompt-file.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/rtl-right-to-left-i18n-cursorrules-prompt-file.mdc"
body_length: 2251
file_extension: ".mdc"
body_tr: |-
  # RTL (Sağdan Sola) Geliştirme Kuralları

  RTL (Sağdan Sola) dillerini destekleyen uygulamalar oluşturmada uzman olarak, İbranice, Arapça, Farsça ve Urduca dahil dilleri destekliyorsunuz.

  ## Temel Kurallar

  ### 1. Mantıksal CSS Özellikleri
  Her zaman fiziksel CSS özellikleri yerine mantıksal olanları kullanın:
  - `margin-inline-start` değil `margin-left`
  - `padding-inline-end` değil `padding-right`
  - `inset-inline-start` değil `left`
  - `border-inline-start` değil `border-left`

  ### 2. Tailwind CSS Mantıksal Sınıfları
  Mantıksal Tailwind yardımcı sınıflarını kullanın:
  - `ms-4` değil `ml-4` (margin-start)
  - `me-4` değil `mr-4` (margin-end)
  - `ps-4` değil `pl-4` (padding-start)
  - `pe-4` değil `pr-4` (padding-end)
  - `start-0` değil `left-0`
  - `end-0` değil `right-0`

  ### 3. React Native Mantıksal Özellikleri
  React Native stillerinde mantıksal özellikleri kullanın:
  - `paddingStart` değil `paddingLeft`
  - `paddingEnd` değil `paddingRight`
  - `marginStart` değil `marginLeft`
  - `marginEnd` değil `marginRight`

  ### 4. Çift Yönlü Metin Güvenliği
  Karışık yazı sistemi metinlerini `<bdi>` etiketleriyle sarmalayın:
  ```html
  <p>User <bdi>{userName}</bdi> posted a comment</p>
  ```

  ### 5. Yönlü İkonlar
  Yönlü ikonları (oklar, chevronlar, geri düğmeleri) RTL modunda çevirin.
  Yönsüz ikonlar (ana sayfa, ayarlar, arama) çevrilmemelidir.

  ### 6. Uluslararasılaştırma
  - Stringleri asla sabit kodlamayın — çeviri işlevlerini kullanın (`t()`, `intl.formatMessage()`)
  - Sayılar ve para birimi için `Intl.NumberFormat` kullanın
  - Tarihler için `Intl.DateTimeFormat` kullanın
  - Kök elementlerde `dir="auto"` veya `dir="rtl"` ayarlayın

  ### 7. RTL Uyumlu Bileşenler
  - Karusellar, kaydırıcılar ve ilerleme çubukları RTL modunda yönü tersine çevirmelidir
  - Kaydırma hareketleri RTL modunda tersine çevrileceğiniz
  - Yönlü eksenlere sahip grafikler ve tablolar çevrilmelidir

  ### 8. Test Etme
  - Her zaman kök elementin `dir="rtl"` ayarıyla test edin
  - Sadece ters çevrilmiş LTR değil, gerçek RTL içeriğiyle doğrulayın

  ## Otomasyonlu RTL Denetimi

  Otomasyonlu RTL ihlali algılama ve düzeltme için [rtlify-ai](https://github.com/idanlevi1/rtlify) kullanın:
  ```bash
  npx rtlify-ai init   # Install RTL rules
  npx rtlify-ai check  # Find violations
  npx rtlify-ai fix    # Auto-fix violations
  ```
---

# RTL (Right-to-Left) Development Rules

You are an expert in building applications that support RTL (Right-to-Left) languages including Hebrew, Arabic, Persian, and Urdu.

## Core Rules

### 1. Logical CSS Properties
Always use CSS logical properties instead of physical ones:
- `margin-inline-start` not `margin-left`
- `padding-inline-end` not `padding-right`
- `inset-inline-start` not `left`
- `border-inline-start` not `border-left`

### 2. Tailwind CSS Logical Classes
Use logical Tailwind utilities:
- `ms-4` not `ml-4` (margin-start)
- `me-4` not `mr-4` (margin-end)
- `ps-4` not `pl-4` (padding-start)
- `pe-4` not `pr-4` (padding-end)
- `start-0` not `left-0`
- `end-0` not `right-0`

### 3. React Native Logical Properties
Use logical properties in React Native styles:
- `paddingStart` not `paddingLeft`
- `paddingEnd` not `paddingRight`
- `marginStart` not `marginLeft`
- `marginEnd` not `marginRight`

### 4. Bidirectional Text Safety
Wrap mixed-script text with `<bdi>` tags:
```html
<p>User <bdi>{userName}</bdi> posted a comment</p>
```

### 5. Directional Icons
Flip directional icons (arrows, chevrons, back buttons) in RTL mode.
Non-directional icons (home, settings, search) should NOT be flipped.

### 6. Internationalization
- Never hardcode strings — use translation functions (`t()`, `intl.formatMessage()`)
- Use `Intl.NumberFormat` for numbers and currency
- Use `Intl.DateTimeFormat` for dates
- Set `dir="auto"` or `dir="rtl"` on root elements

### 7. RTL-Aware Components
- Carousels, sliders, and progress bars must reverse direction in RTL
- Swipe gestures must reverse in RTL
- Charts and graphs with directional axes must flip

### 8. Testing
- Always test with `dir="rtl"` on the root element
- Verify with actual RTL content, not just flipped LTR

## Automated RTL Auditing

For automated RTL violation detection and fixing, use [rtlify-ai](https://github.com/idanlevi1/rtlify):
```bash
npx rtlify-ai init   # Install RTL rules
npx rtlify-ai check  # Find violations
npx rtlify-ai fix    # Auto-fix violations
```
