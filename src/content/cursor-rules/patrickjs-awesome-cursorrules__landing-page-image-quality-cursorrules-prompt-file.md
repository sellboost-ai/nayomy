---
name: "landing-page-image-quality-cursorrules-prompt-file"
clean_name: "Landing Page Image Quality"
description: "Cursor rules for avoiding placeholder or broken image URLs, using stable visual assets, and checking alt text, dimensions, licensing, and responsive behavior."
description_tr: "Yer tutucu veya bozuk görsel URL'lerinden kaçınmak, kararlı görseller kullanmak ve alt metin, boyutlar, lisanslama ile responsive davranışları kontrol etmek için Cursor kuralları."
category: "Other"
repo: "PatrickJS/awesome-cursorrules"
stars: 39709
path: "rules/landing-page-image-quality-cursorrules-prompt-file.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/landing-page-image-quality-cursorrules-prompt-file.mdc"
body_length: 1816
file_extension: ".mdc"
body_tr: |-
  # Landing Page Görsel Kalitesi

  Kullanıcı tarafından görünen sayfalar oluştururken veya düzenlerken, yer tutucu görsel hizmetleri yerine gerçek ve ilgili görsel varlıkları kullanın.

  ## Görsel Kaynakları

  - `placehold.co`, `via.placeholder.com`, `dummyimage.com`, `picsum.photos`, rastgele görsel URL'leri veya bozuk/kullanımdan kaldırılan görsel hizmetlerini commit etmeyin.
  - Proje varlıkları, ürün ekran görüntüleri, kullanıcı tarafından onaylanan oluşturulan varlıklar veya onaylı bir görsel sağlayıcıdan gelen stabil URL'leri tercih edin.
  - Üçüncü taraf bir görsel kullanmadan önce, lisans ve atıf gereksinimlerinin projeyle uyumlu olduğunu doğrulayın.
  - Keyfi web sitelerinden görsel hotlinking'ini önleyin.

  ## Varlık Kalitesi

  - Görselleri temsil ettikleri gerçek içerik, ürün, yer, nesne veya kullanıcı durumu ile eşleştirin.
  - Kullanıcının bir ürünü, özelliği, iş akışını veya arayüzü incelemesi gerektiğinde belirsiz atmosferik görseller kullanmayın.
  - Tekrarlanan kartlar veya galeri öğeleri için tutarlı en boy oranlarını kullanın.
  - Layout shift'i önlemek için açık `width` ve `height` öznitelikleri veya CSS aspect-ratio kısıtlamaları sağlayın.
  - Hedef framework için uygun optimize edilmiş formatlar ve boyutlar kullanın.

  ## Erişilebilirlik

  - Her bilgilendirici görselin, görselin bağlam içindeki amacını tanımlayan spesifik `alt` metni olmalıdır.
  - Dekoratif görseller boş alt metin kullanmalı ve yardımcı teknolojilere duyurulmamalıdır.
  - Gerekli metni yalnızca bir görselin içine koymayın.

  ## Uygulama Kontrolleri

  - Görsel yollarının oluşturulan uygulamada çözüldüğünü doğrulayın.
  - Mobil ve masaüstü genişliklerinde duyarlı davranışı kontrol edin.
  - Yükleme, hata ve boş durumların üretim arayüzünde bozuk görsel simgeleri bırakmadığını doğrulayın.
---

# Landing Page Image Quality

When generating or editing user-facing pages, use real, relevant visual assets instead of placeholder image services.

## Image Sources

- Do not commit `placehold.co`, `via.placeholder.com`, `dummyimage.com`, `picsum.photos`, random image URLs, or broken/deprecated image services.
- Prefer committed project assets, product screenshots, generated assets approved by the user, or stable URLs from an approved image provider.
- Before using a third-party image, confirm the license and attribution requirements are compatible with the project.
- Avoid hotlinking images from arbitrary websites.

## Asset Quality

- Match images to the actual content, product, place, object, or user state they represent.
- Do not use vague atmospheric images when the user needs to inspect a product, feature, workflow, or interface.
- Use consistent aspect ratios for repeated cards or gallery items.
- Provide explicit `width` and `height` attributes or CSS aspect-ratio constraints to prevent layout shift.
- Use optimized formats and sizes appropriate for the target framework.

## Accessibility

- Every informative image must have specific `alt` text that describes the image's purpose in context.
- Decorative images must use empty alt text and should not be announced to assistive technology.
- Do not put essential text only inside an image.

## Implementation Checks

- Ensure image paths resolve in the built application.
- Check responsive behavior at mobile and desktop widths.
- Verify that loading, error, and empty states do not leave broken image icons in production UI.
