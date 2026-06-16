---
name: "fortran"
clean_name: "Fortran"
description: "Modern Fortran rules for scientific computing, modules, explicit interfaces, kind parameters, memory safety, and testing"
category: "Other"
repo: "PatrickJS/awesome-cursorrules"
stars: 40010
path: "rules/fortran.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/fortran.mdc"
body_length: 3007
file_extension: ".mdc"
body_tr: |-
  # Fortran Programlama Yönergeleri

  ## Temel İlkeler

  - Fortran 2003, 2008 veya daha yeni modern Fortran standartlarını kullanın.
  - Her program biriminde `implicit none` kullanın.
  - Açık arayüzler sağlamak için prosedürleri modüllere yerleştirin.
  - Modülleri odaklanmış tutun ve her büyük modülü kendi dosyasına yerleştirin.
  - Akıllı dil hileleri yerine açık, yapılandırılmış kodu tercih edin.
  - COMMON blokları, GOTO-ağır kontrol akışı ve sayısal etiketler gibi eski özellikleri kullanmaktan kaçının.

  ## Türler ve Kinds

  - Sayısal kind parametrelerini `kind_mod` gibi bir paylaşılan modülde tanımlayın.
  - Kayan nokta değerleri için `real(kind=dp)` veya proje tarafından onaylanan real kind'ı kullanın.
  - Tamsayı değerleri için `integer(kind=i4)` veya proje tarafından onaylanan integer kind'ı kullanın.
  - pi gibi sabitleri açıkça tanımlayın.
  - Fiziksel büyüklükler için yorumlara birimler ekleyin.
  - Birçok ilkel argümanı geçmek yerine ilgili verileri gruplamak için türetilmiş türler kullanın.

  ## Adlandırma ve Stil

  - Dil anahtar sözcükleri ve çoğu tanımlayıcı için küçük harfleri kullanın.
  - Çok sözcüklü adlar için alt çizgileri kullanın.
  - Yalnızca büyük harfle farklı olan adlardan kaçının.
  - Prosedürler ve durumlar için açıklayıcı adlar kullanın.
  - `end` ifadelerinden sonra prosedür veya modül adını tekrarlayın.
  - `do`, `if`, `select case` ve modül bloklarında tutarlı girintileme tutun.

  ## Prosedürler

  - Subroutine'leri ve fonksiyonları kısa ve tek amaçlı tutun.
  - Her dummy argümanı için `intent(in)`, `intent(out)` veya `intent(inout)` kullanın.
  - Mümkün olduğunca fonksiyonları yan etkilerden arındırın.
  - Derin iç içeliklerin yerine erken doğrulama ve açık dönüşleri tercih edin.
  - Modüllerden içeri aktarırken `use, only:` kullanın.

  ## Bellek ve Diziler

  - İşaretçi semantikleri gerekli olmadıkça işaretçilere tercih olarak allocatable dizileri kullanın.
  - Kullanmadan önce tahsis durumunu ve dizi boyutlarını kontrol edin.
  - Allocatable dizileri yaşam süresi doğal olarak kapsamlı olmadığında serbest bırakın.
  - Dizi sınırlarını önemli olduğunda açıkça belirtin.
  - Sıcak döngülerde gereksiz dinamik tahsisten kaçının.

  ## Test ve Build

  - CMake, fpm, Make veya proje standardı build sistemini tutarlı şekilde kullanın.
  - Uyarılar etkinleştirilmiş şekilde derleyin ve CI'da önemli uyarıları başarısızlık olarak işleyin.
  - Genel prosedürler için birim testler ve sayısal iş akışları için entegrasyon testleri ekleyin.
  - Sınır koşullarını, geçersiz girdileri ve temsili bilimsel durumları test edin.
  - Sayısal toleransları açıkça doğrulayın; kesin kayan nokta eşitliğine güvenmeyin.

  ## Yaygın Hatalar

  - Bir blok yapısı kullanmadıkça çalıştırılabilir kod sonrasında değişkenleri bildirmeyin.
  - `random_number`'ın bir fonksiyon olduğunu varsaymayın; bu bir subroutine'dir.
  - Pure prosedürlerden stdout'a yazmayın.
  - Aynı kapsamda aynı değişkeni iki kez bildirmeyin.
  - İçeri aktarmadan veya tanımlamadan pi, dp veya proje kind'larının zaten var olduğunu varsaymayın.
---


# Fortran Programming Guidelines

## Basic Principles

- Use modern Fortran standards such as Fortran 2003, 2008, or newer.
- Use `implicit none` in every program unit.
- Put procedures in modules to provide explicit interfaces.
- Keep modules focused and place each major module in its own file.
- Prefer clear, structured code over clever language tricks.
- Avoid obsolete features such as COMMON blocks, GOTO-heavy control flow, and numeric labels.

## Kinds and Types

- Define numeric kind parameters in one shared module, such as `kind_mod`.
- Use `real(kind=dp)` or the project-approved real kind for floating point values.
- Use `integer(kind=i4)` or the project-approved integer kind for integer values.
- Define constants such as pi explicitly.
- Include units in comments for physical quantities.
- Use derived types to group related data instead of passing many primitive arguments.

## Naming and Style

- Use lowercase for language keywords and most identifiers.
- Use underscores for multi-word names.
- Avoid names that differ only by case.
- Use descriptive names for procedures and state.
- Repeat the procedure or module name after `end` statements.
- Keep indentation consistent in `do`, `if`, `select case`, and module blocks.

## Procedures

- Keep subroutines and functions short and single-purpose.
- Use `intent(in)`, `intent(out)`, or `intent(inout)` for every dummy argument.
- Keep functions free of side effects whenever possible.
- Prefer early validation and clear returns over deep nesting.
- Use `use, only:` when importing from modules.

## Memory and Arrays

- Prefer allocatable arrays over pointers unless pointer semantics are required.
- Check allocation state and array sizes before use.
- Deallocate allocatable arrays when their lifetime is not naturally scoped.
- Specify array bounds clearly when they matter.
- Avoid unnecessary dynamic allocation in hot loops.

## Testing and Build

- Use CMake, fpm, Make, or the project-standard build system consistently.
- Compile with warnings enabled and treat important warnings as failures in CI.
- Add unit tests for public procedures and integration tests for numerical workflows.
- Test boundary conditions, invalid inputs, and representative scientific cases.
- Verify numerical tolerances explicitly rather than relying on exact floating point equality.

## Common Mistakes

- Do not declare variables after executable code unless using a block construct.
- Do not assume `random_number` is a function; it is a subroutine.
- Do not write to stdout from pure procedures.
- Do not declare the same variable twice in the same scope.
- Do not assume pi, dp, or project kinds already exist without importing or defining them.
