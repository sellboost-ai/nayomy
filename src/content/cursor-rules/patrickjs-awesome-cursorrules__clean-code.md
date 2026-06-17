---
name: "clean-code"
clean_name: "Clean Code"
description: "Guidelines for writing clean, maintainable, and human-readable code. Apply these rules when writing or reviewing code to ensure consistency and quality."
description_tr: "Temiz, bakımı kolay ve okunabilir kod yazma kılavuzu. Kod yazarken veya review ederken bu kuralları uygulayarak tutarlılık ve kaliteyi sağlayın."
category: "Other"
repo: "PatrickJS/awesome-cursorrules"
stars: 40019
path: "rules/clean-code.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/clean-code.mdc"
body_length: 1847
file_extension: ".mdc"
body_tr: |-
  # Temiz Kod Yönergeleri

  ## Sabit Değerler Yerine Magic Numbers Kullanmayın
  - Sabit kodlanmış değerleri adlandırılmış sabitlerle değiştirin
  - Değerin amacını açıklayan açıklayıcı sabit adları kullanın
  - Sabitleri dosyanın başında veya ayrı bir constants dosyasında tutun

  ## Anlamlı İsimler
  - Değişkenler, fonksiyonlar ve sınıflar amacını ortaya koymmalıdır
  - İsimler neden bir şeyin var olduğunu ve nasıl kullanıldığını açıklamalıdır
  - Genel olarak bilinen kısaltmalar dışında kısaltmalardan kaçının

  ## Akıllı Yorumlar
  - Kodun ne yaptığını yorumlamayın - kodu kendi kendini açıklayan hale getirin
  - Bir şeyin neden belirli bir şekilde yapıldığını açıklamak için yorumlar kullanın
  - API'leri, karmaşık algoritmaları ve bariz olmayan yan etkileri belgelendir

  ## Tek Sorumluluk Prensibi
  - Her fonksiyon tam olarak bir şey yapmalıdır
  - Fonksiyonlar küçük ve odaklanmış olmalıdır
  - Eğer bir fonksiyonu açıklamak için yorum gerekiyorsa, bölünmelidir

  ## DRY (Kendini Tekrar Etme)
  - Tekrarlanan kodu yeniden kullanılabilir fonksiyonlara çıkarın
  - Ortak mantığı uygun abstraction aracılığıyla paylaşın
  - Tek kaynaktan gelen gerçekleri koruyun

  ## Temiz Yapı
  - İlgili kodu bir arada tutun
  - Kodu mantıksal bir hiyerarşiye göre organize edin
  - Tutarlı dosya ve klasör adlandırma kuralları kullanın

  ## Kapsülleme
  - Uygulama detaylarını gizleyin
  - Açık arayüzler sunun
  - İç içe koşulları iyi adlandırılmış fonksiyonlara taşıyın

  ## Kod Kalitesi Bakımı
  - Sürekli olarak refactor yapın
  - Teknik borcu erkenden giderin
  - Kodu bulduğunuzdan daha temiz bırakın

  ## Test Etme
  - Hataları düzeltmeden önce testler yazın
  - Testleri okunabilir ve bakımı yapılabilir tutun
  - Edge case'leri ve hata koşullarını test edin

  ## Versiyon Kontrol
  - Açık commit mesajları yazın
  - Küçük, odaklanmış commitler yapın
  - Anlamlı branch adları kullanın
---

# Clean Code Guidelines

## Constants Over Magic Numbers
- Replace hard-coded values with named constants
- Use descriptive constant names that explain the value's purpose
- Keep constants at the top of the file or in a dedicated constants file

## Meaningful Names
- Variables, functions, and classes should reveal their purpose
- Names should explain why something exists and how it's used
- Avoid abbreviations unless they're universally understood

## Smart Comments
- Don't comment on what the code does - make the code self-documenting
- Use comments to explain why something is done a certain way
- Document APIs, complex algorithms, and non-obvious side effects

## Single Responsibility
- Each function should do exactly one thing
- Functions should be small and focused
- If a function needs a comment to explain what it does, it should be split

## DRY (Don't Repeat Yourself)
- Extract repeated code into reusable functions
- Share common logic through proper abstraction
- Maintain single sources of truth

## Clean Structure
- Keep related code together
- Organize code in a logical hierarchy
- Use consistent file and folder naming conventions

## Encapsulation
- Hide implementation details
- Expose clear interfaces
- Move nested conditionals into well-named functions

## Code Quality Maintenance
- Refactor continuously
- Fix technical debt early
- Leave code cleaner than you found it

## Testing
- Write tests before fixing bugs
- Keep tests readable and maintainable
- Test edge cases and error conditions

## Version Control
- Write clear commit messages
- Make small, focused commits
- Use meaningful branch names
