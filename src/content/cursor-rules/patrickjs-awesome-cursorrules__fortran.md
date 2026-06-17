---
name: "fortran"
clean_name: "Fortran"
description: "Modern Fortran rules for scientific computing, modules, explicit interfaces, kind parameters, memory safety, and testing"
description_tr: "Modern Fortran'ın bilimsel hesaplama, modüller, açık arayüzler, kind parametreleri, bellek güvenliği ve test etme konularındaki kuralları"
category: "Other"
repo: "PatrickJS/awesome-cursorrules"
stars: 40019
path: "rules/fortran.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/fortran.mdc"
body_length: 3007
file_extension: ".mdc"
body_tr: |-
  # Fortran Programlama Yönergeleri

  ## Temel İlkeler

  - Fortran 2003, 2008 veya daha yeni gibi modern Fortran standartlarını kullanın.
  - Her program biriminde `implicit none` kullanın.
  - Prosedürleri modüllere yerleştirerek açık arayüzler sağlayın.
  - Modülleri odaklanmış tutun ve her önemli modülü kendi dosyasına yerleştirin.
  - Akıllı dil numaralarından ziyade açık, yapılandırılmış koda tercih edin.
  - COMMON blokları, GOTO-ağır kontrol akışı ve sayısal etiketler gibi eski özellikleri kullanmaktan kaçının.

  ## Türler ve Tipleri

  - `kind_mod` gibi bir paylaşılan modülde sayısal tür parametrelerini tanımlayın.
  - Kayan nokta değerleri için `real(kind=dp)` veya proje onaylı gerçek türünü kullanın.
  - Tamsayı değerleri için `integer(kind=i4)` veya proje onaylı tamsayı türünü kullanın.
  - pi gibi sabitleri açıkça tanımlayın.
  - Fiziksel büyüklükler için yorumlara birimler ekleyin.
  - Birçok ilkel argüman geçirmek yerine ilgili verileri gruplandırmak için türetilmiş türler kullanın.

  ## İsimlendirme ve Stil

  - Dil anahtar sözcükleri ve çoğu tanımlayıcı için küçük harfleri kullanın.
  - Çok kelimeli isimler için alt çizgi kullanın.
  - Yalnızca büyüklük açısından farklı olan isimlerden kaçının.
  - Prosedürler ve durumlar için açıklayıcı isimler kullanın.
  - `end` ifadelerinden sonra prosedür veya modül adını tekrar edin.
  - `do`, `if`, `select case` ve modül bloklarında girintilemeyi tutarlı tutun.

  ## Prosedürler

  - Subroutine ve function'ları kısa ve tek amaçlı tutun.
  - Her kukla argüman için `intent(in)`, `intent(out)` veya `intent(inout)` kullanın.
  - Function'ları mümkün olduğunca yan etkilerden arındırın.
  - Derin iç içelik yerine erken doğrulama ve net dönüşleri tercih edin.
  - Modüllerden import ederken `use, only:` kullanın.

  ## Bellek ve Diziler

  - İşaretçi semantiği gerekli olmadıkça işaretçiler yerine allocatable dizileri tercih edin.
  - Kullanmadan önce tahsis durumunu ve dizi boyutlarını kontrol edin.
  - Yaşam döngüsü doğal olarak kapsamlı olmadığında allocatable dizileri deallocate edin.
  - Dizi sınırlarını önemli olduğu zaman açıkça belirtin.
  - Sıcak döngülerde gereksiz dinamik tahsisten kaçının.

  ## Test ve Derleme

  - CMake, fpm, Make veya proje standardı derleme sistemini tutarlı bir şekilde kullanın.
  - Uyarılarla derleyin ve CI'da önemli uyarıları hata olarak değerlendirin.
  - Halk prosedürleri için birim testleri ve sayısal iş akışları için entegrasyon testleri ekleyin.
  - Sınır koşullarını, geçersiz girdileri ve temsili bilimsel durumları test edin.
  - Tam kayan nokta eşitliğine güvenmek yerine sayısal toleransları açıkça doğrulayın.

  ## Yaygın Hatalar

  - Bir blok yapısı kullanılmadığı sürece yürütülebilir koddan sonra değişkenleri bildirmeyin.
  - `random_number`'ın bir function olduğunu varsaymayın; bu bir subroutine'dir.
  - Saf prosedürlerden stdout'a yazmayın.
  - Aynı kapsamda aynı değişkeni iki kez bildirmeyin.
  - İmport etmeden veya tanımlamadan pi, dp veya proje türlerinin zaten var olduğunu varsaymayın.
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
