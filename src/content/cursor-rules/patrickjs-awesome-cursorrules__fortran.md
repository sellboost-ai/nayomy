---
name: "fortran"
clean_name: "Fortran"
description: "Modern Fortran rules for scientific computing, modules, explicit interfaces, kind parameters, memory safety, and testing"
description_tr: "Bilimsel hesaplama için modern Fortran kuralları, modüller, açık arayüzler, kind parametreleri, bellek güvenliği ve testing"
category: "Other"
repo: "PatrickJS/awesome-cursorrules"
stars: 39709
path: "rules/fortran.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/fortran.mdc"
body_length: 3007
file_extension: ".mdc"
body_tr: |-
  # Fortran Programlama Kılavuzu

  ## Temel İlkeler

  - Fortran 2003, 2008 veya daha yeni gibi modern Fortran standartlarını kullanın.
  - Her program birimi içinde `implicit none` kullanın.
  - Prosedürleri modüllere yerleştirerek açık arayüzler sağlayın.
  - Modülleri odaklı tutun ve her büyük modülü kendi dosyasına yerleştirin.
  - Zekice dil hilelerine tercih etmeden açık, yapılandırılmış kod yazın.
  - COMMON blokları, GOTO-ağır kontrol akışı ve sayısal etiketler gibi eski özellikleri önleyin.

  ## Türler ve Tür Parametreleri

  - Sayısal tür parametrelerini `kind_mod` gibi bir paylaşılan modülde tanımlayın.
  - Kayan nokta değerleri için `real(kind=dp)` veya proje tarafından onaylanan gerçek türünü kullanın.
  - Tamsayı değerleri için `integer(kind=i4)` veya proje tarafından onaylanan tamsayı türünü kullanın.
  - pi gibi sabitleri açıkça tanımlayın.
  - Fiziksel nicelikler için yorumlara birim ekleyin.
  - Birçok ilkel argüman geçirmek yerine ilgili verileri gruplandırmak için türetilmiş türler kullanın.

  ## İsimlendirme ve Stil

  - Dil anahtar sözcükleri ve çoğu tanımlayıcı için küçük harfleri kullanın.
  - Çok kelimeli isimler için alt çizgileri kullanın.
  - Yalnızca büyük/küçük harf açısından farklı olan adlardan kaçının.
  - Prosedürler ve durum için açıklayıcı isimler kullanın.
  - `end` deyimlerinden sonra prosedür veya modül adını tekrarlayın.
  - `do`, `if`, `select case` ve modül blokları içinde girinti tutarlılığını koruyun.

  ## Prosedürler

  - Alt programları ve fonksiyonları kısa ve tek amaçlı tutun.
  - Her kukla argüman için `intent(in)`, `intent(out)` veya `intent(inout)` kullanın.
  - Fonksiyonları mümkün olduğunca yan etkilerden arındırın.
  - Derin iç içe geçmeye tercih etmeden erken doğrulama ve açık dönüşleri tercih edin.
  - Modüllerden içe aktarırken `use, only:` kullanın.

  ## Bellek ve Diziler

  - İşaretçi semantiği gerekli olmadığı sürece işaretçilere tercih ederek tahsis edilebilir dizileri kullanın.
  - Tahsis durumunu ve dizi boyutlarını kullanmadan önce kontrol edin.
  - Ömrü doğal olarak kapsamda olmayan tahsis edilebilir dizileri serbest bırakın.
  - Dizi sınırlarını önemli olduğunda açıkça belirtin.
  - Sık kullanılan döngülerde gereksiz dinamik tahsisten kaçının.

  ## Test ve Derleme

  - CMake, fpm, Make veya proje standardı derleme sistemini tutarlı bir şekilde kullanın.
  - Uyarılar etkinleştirilmiş olarak derleyin ve önemli uyarıları CI'de hata olarak değerlendirin.
  - Genel prosedürler için birim testleri ve sayısal iş akışları için entegrasyon testleri ekleyin.
  - Sınır koşullarını, geçersiz girdileri ve temsili bilimsel durumları test edin.
  - Tam kayan nokta eşitliğine güvenmek yerine sayısal toleransları açıkça doğrulayın.

  ## Yaygın Hatalar

  - Blok yapısı kullanmıyor olmadıkça yürütülebilir koddan sonra değişken bildirmeyin.
  - `random_number`'ın bir fonksiyon olduğunu varsaymayın; bu bir alt programdır.
  - Saf prosedürlerden stdout'a yazmayın.
  - Aynı kapsamda aynı değişkeni iki kez bildirmeyin.
  - İçe aktarmadan veya tanımlamadan pi, dp veya proje türlerinin zaten var olduğunu varsaymayın.
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
