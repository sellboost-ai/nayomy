---
name: "landing-page-image-quality-cursorrules-prompt-file"
clean_name: "Landing Page Image Quality"
description: "Cursor rules for avoiding placeholder or broken image URLs, using stable visual assets, and checking alt text, dimensions, licensing, and responsive behavior."
description_tr: "Yer tutucu veya bozuk görüntü URL'lerinden kaçınmak, kararlı görsel varlıklar kullanmak ve alt metni, boyutları, lisanslamayı ve responsive davranışı kontrol etmek için Cursor kuralları."
category: "Other"
repo: "PatrickJS/awesome-cursorrules"
stars: 40010
path: "rules/landing-page-image-quality-cursorrules-prompt-file.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/landing-page-image-quality-cursorrules-prompt-file.mdc"
body_length: 1816
file_extension: ".mdc"
body_tr: |-
  # Landing Page Görsel Kalitesi

  Kullanıcı tarafından görülen sayfaları oluştururken veya düzenlerken, yer tutucu görsel hizmetleri yerine gerçek, ilgili görsel varlıkları kullanın.

  ## Görsel Kaynakları

  - `placehold.co`, `via.placeholder.com`, `dummyimage.com`, `picsum.photos`, rastgele görsel URL'leri veya kırık/kullanımdan kaldırılmış görsel hizmetlerini commit etmeyin.
  - Commit edilmiş proje varlıklarını, ürün ekran görüntülerini, kullanıcı tarafından onaylanmış oluşturulan varlıkları veya onaylanmış bir görsel sağlayıcıdan gelen sabit URL'leri tercih edin.
  - Üçüncü taraf bir görsel kullanmadan önce lisans ve atıf gereksinimlerinin projeyle uyumlu olduğunu doğrulayın.
  - Rasgele web sitelerinden görsel hotlinking'ini önleyin.

  ## Varlık Kalitesi

  - Görselleri temsil ettikleri gerçek içeriğe, ürüne, yere, nesneye veya kullanıcı durumuna eşleştirin.
  - Kullanıcının bir ürün, özellik, iş akışı veya arayüzü incelemesi gerektiğinde belirsiz atmosferik görseller kullanmayın.
  - Tekrarlanan kartlar veya galeri öğeleri için tutarlı en-boy oranları kullanın.
  - Düzen kaymasını önlemek için açık `width` ve `height` öznitelikleri veya CSS aspect-ratio kısıtlamaları sağlayın.
  - Hedef framework'e uygun optimize edilmiş formatlar ve boyutlar kullanın.

  ## Erişilebilirlik

  - Her bilgilendirici görsel, görselin bağlam içinde amacını açıklayan belirli `alt` metni içermelidir.
  - Dekoratif görseller boş alt metin kullanmalı ve yardımcı teknolojilere duyurulmamalıdır.
  - Temel metni yalnızca bir görsel içine koymayın.

  ## Uygulama Kontrolleri

  - Görsel yollarının oluşturulan uygulamada çözümlendiğini doğrulayın.
  - Mobil ve masaüstü genişliklerinde duyarlı davranışı kontrol edin.
  - Yükleme, hata ve boş durumların üretim UI'ında kırık görsel simgeleri bırakmadığını doğrulayın.
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
