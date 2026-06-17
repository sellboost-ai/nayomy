---
name: "landing-page-image-quality-cursorrules-prompt-file"
clean_name: "Landing Page Image Quality"
description: "Cursor rules for avoiding placeholder or broken image URLs, using stable visual assets, and checking alt text, dimensions, licensing, and responsive behavior."
description_tr: "Cursor kuralları, yer tutucu veya bozuk görsel URL'lerinden kaçınmak, stabil görsel varlıklar kullanmak ve alt metni, boyutları, lisanslama ve responsive davranışını kontrol etmek için."
category: "Other"
repo: "PatrickJS/awesome-cursorrules"
stars: 40019
path: "rules/landing-page-image-quality-cursorrules-prompt-file.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/landing-page-image-quality-cursorrules-prompt-file.mdc"
body_length: 1816
file_extension: ".mdc"
body_tr: |-
  # Giriş Sayfası Görüntü Kalitesi

  Kullanıcıya yönelik sayfaları oluştururken veya düzenlerken, yer tutucu görüntü hizmetleri yerine gerçek, ilgili görsel varlıkları kullanın.

  ## Görüntü Kaynakları

  - `placehold.co`, `via.placeholder.com`, `dummyimage.com`, `picsum.photos`, rastgele görüntü URL'leri veya bozuk/kullanımdan kaldırılmış görüntü hizmetlerini commit etmeyin.
  - Proje varlıklarını commit etmeyi, ürün ekran görüntülerini, kullanıcı tarafından onaylanmış oluşturulan varlıkları veya onaylı bir görüntü sağlayıcısından gelen kararlı URL'leri tercih edin.
  - Üçüncü taraf bir görüntü kullanmadan önce, lisans ve atıf gerekliliklerinin proje ile uyumlu olduğunu doğrulayın.
  - Rasgele web sitelerinden görüntülere hotlink vermekten kaçının.

  ## Varlık Kalitesi

  - Görüntüleri temsil ettikleri gerçek içeriğe, ürüne, yere, nesneye veya kullanıcı durumuna uyarlayın.
  - Kullanıcının bir ürünü, özelliği, iş akışını veya arayüzü incelemesi gerektiğinde belirsiz atmosferik görüntüler kullanmayın.
  - Tekrarlanan kartlar veya galeri öğeleri için tutarlı en-boy oranları kullanın.
  - Layout shift'i önlemek için açık `width` ve `height` öznitelikleri veya CSS aspect-ratio kısıtlamaları sağlayın.
  - Hedef framework'e uygun optimize edilmiş formatlar ve boyutlar kullanın.

  ## Erişilebilirlik

  - Her bilgilendirici görüntü, görüntünün bağlamda amacını tanımlayan spesifik `alt` metni içermelidir.
  - Dekoratif görüntüler boş alt metni kullanmalı ve yardımcı teknoloji tarafından duyurulmamalıdır.
  - Temel metni yalnızca bir görüntünün içine koymayın.

  ## Uygulama Kontrolleri

  - Görüntü yollarının inşa edilen uygulamada çözümlendiğinden emin olun.
  - Mobil ve masaüstü genişliklerde duyarlı davranışı kontrol edin.
  - Yükleme, hata ve boş durumlarının üretim arayüzünde bozuk görüntü simgeleri bırakmadığını doğrulayın.
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
