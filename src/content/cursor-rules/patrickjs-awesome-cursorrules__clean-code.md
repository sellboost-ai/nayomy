---
name: "clean-code"
clean_name: "Clean Code"
description: "Guidelines for writing clean, maintainable, and human-readable code. Apply these rules when writing or reviewing code to ensure consistency and quality."
description_tr: "Temiz, bakımı kolay ve anlaşılır kod yazma yönergeleri. Kod yazarken veya gözden geçirirken tutarlılık ve kaliteyi sağlamak için bu kuralları uygulayın."
category: "Other"
repo: "PatrickJS/awesome-cursorrules"
stars: 40010
path: "rules/clean-code.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/clean-code.mdc"
body_length: 1847
file_extension: ".mdc"
body_tr: |-
  # Temiz Kod Rehberi

  ## Sabit Değerler Yerine Magic Numbers
  - Hardcoded değerleri adlandırılmış sabitlerle değiştirin
  - Değerin amacını açıklayan açıklayıcı sabit isimleri kullanın
  - Sabitleri dosyanın üstünde veya ayrılmış bir sabit dosyasında tutun

  ## Anlamlı İsimler
  - Değişkenler, fonksiyonlar ve sınıflar amacını ortaya koymak zorundadır
  - İsimler bir şeyin neden var olduğunu ve nasıl kullanıldığını açıklamalıdır
  - Evrensel olarak anlaşılmadıkça kısaltmalardan kaçının

  ## Akıllı Açıklamalar
  - Kodun ne yaptığını açıklamayın - kodu kendini belgeleyen yapın
  - Bir şeyin neden belirli bir şekilde yapıldığını açıklamak için açıklamalar kullanın
  - API'ları, karmaşık algoritmaları ve açık olmayan yan etkileri belgeleyin

  ## Tek Sorumluluk
  - Her fonksiyon tam olarak bir şey yapmalıdır
  - Fonksiyonlar küçük ve odaklanmış olmalıdır
  - Bir fonksiyonun ne yaptığını açıklamak için yorum gerekiyorsa, bölünmelidir

  ## DRY (Kendini Tekrar Etme)
  - Tekrarlanan kodu yeniden kullanılabilir fonksiyonlara ayıklayın
  - Uygun soyutlama ile ortak mantığı paylaşın
  - Tek bir doğruluk kaynağını koruyu

  ## Temiz Yapı
  - İlgili kodu bir arada tutun
  - Kodu mantıklı bir hiyerarşide organize edin
  - Tutarlı dosya ve klasör adlandırma kuralları kullanın

  ## Kapsülleme
  - İmplementasyon detaylarını gizleyin
  - Net arayüzler ortaya koymak
  - İç içe koşulları iyi adlandırılmış fonksiyonlara taşıyın

  ## Kod Kalitesi Bakımı
  - Sürekli refaktör yapın
  - Teknik borcu erken giderin
  - Kodu bulduğunuzdan daha temiz bırakın

  ## Test
  - Bug'ı düzeltmeden önce test yazın
  - Testleri okunabilir ve bakımı yapılabilir tutun
  - Edge case'leri ve hata koşullarını test edin

  ## Versiyon Kontrol
  - Net commit mesajları yazın
  - Küçük, odaklanmış commit'ler yapın
  - Anlamlı branch isimleri kullanın
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
