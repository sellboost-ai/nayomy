---
name: "git-conventional-commit-messages"
clean_name: "Git Conventional Commit Messages"
description: "Cursor rules for Git development with conventional commit messages integration."
category: "Other"
repo: "PatrickJS/awesome-cursorrules"
stars: 40010
path: "rules/git-conventional-commit-messages.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/git-conventional-commit-messages.mdc"
body_length: 4439
file_extension: ".mdc"
body_tr: |-
  Geleneksel Commit Mesajları (Conventional Commit Messages) belirtimini kullanarak commit mesajları oluşturun

  Commit mesajı aşağıdaki şekilde yapılandırılmalıdır:


  ```
  <type>[optional scope]: <description>

  [optional body]

  [optional footer(s)]
  ``` 
  --------------------------------

  Commit, kütüphanenizin kullanıcılarına niyetinizi iletmek için aşağıdaki yapısal öğeleri içerir:

    - fix: fix türündeki bir commit, kodunuzdaki bir hatayı düzeltir (bu, Anlamsal Sürümleme'de PATCH ile ilişkilidir).
    - feat: feat türündeki bir commit, kodunuza yeni bir özellik ekler (bu, Anlamsal Sürümleme'de MINOR ile ilişkilidir).
    - BREAKING CHANGE: BREAKING CHANGE: altlık içeren veya tür/scope'tan sonra ! ekleyen bir commit, kırılma yapan bir API değişikliği tanıtır (Anlamsal Sürümleme'de MAJOR ile ilişkilidir). BREAKING CHANGE, herhangi bir türdeki commit'lerin parçası olabilir.
    - fix: ve feat: dışındaki türlere izin verilir, örneğin @commitlint/config-conventional (Angular kuralına dayalı) build:, chore:, ci:, docs:, style:, refactor:, perf:, test: ve diğerlerini önerir.
    - BREAKING CHANGE: <description> dışındaki altlıklar sağlanabilir ve git trailer formatına benzer bir kuralı izleyebilir.
    - Ek türler Geleneksel Commit Mesajları belirtimi tarafından zorunlu kılınmaz ve Anlamsal Sürümleme'de örtük bir etkiye sahip değildir (BREAKING CHANGE içermediği sürece). Ek bağlamsal bilgi sağlamak için bir commit'in türüne bir scope eklenebilir ve parantez içinde yer alır, örneğin feat(parser): add ability to parse arrays.



  ### Belirtim Ayrıntıları

  Bu belgede yer alan "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY" ve "OPTIONAL" anahtar kelimeleri RFC 2119'da açıklanan şekilde yorumlanmalıdır.

  Commit'ler, bir isimden oluşan bir türle, feat, fix vb., OPTIONAL scope, OPTIONAL ! ve REQUIRED terminal iki nokta ve boşluk ile başlamalıdır.
  feat türü, bir commit uygulamanıza veya kütüphanenize yeni bir özellik eklediğinde KULLANILMALIDIR.
  fix türü, bir commit uygulamanız için bir hata düzeltişini temsil ettiğinde KULLANILMALIDIR.
  Bir türden sonra bir scope eklenebilir. Bir scope, parantez içinde yer alan bir kod bölümünü açıklayan bir isimden OLUŞMALIDIR, örneğin fix(parser):
  Bir açıklama, tür/scope önekinden sonra iki nokta ve boşluğun hemen ardından GELMELIDIR. Açıklama, kod değişikliklerinin kısa bir özeti, örneğin fix: array parsing issue when multiple spaces were contained in string.
  Daha uzun bir commit gövdesi, kısa açıklamadan sonra sağlanabilir ve kod değişiklikleri hakkında ek bağlamsal bilgi sağlar. Gövde, açıklamadan bir satır boş bırakıldıktan sonra BAŞLAMALIDIR.
  Bir commit gövdesi serbest formatlıdır ve herhangi bir sayıda satırla ayrılmış paragraftan oluşabilir.
  Gövdeden bir satır boş bırakıldıktan sonra bir veya daha fazla altlık sağlanabilir. Her altlık, bir kelime belirtecinden, ardından bir :<space> veya <space># ayırıcısından ve bir dize değerinden OLUŞMALIDIR (bu git trailer kuralından esinlenmiştir).
  Bir altlığın belirteci, boşluk karakterleri yerine - KULLANMALIDIR, örneğin Acked-by (bu, altlık bölümünü çok paragraflı bir gövdeden ayırt etmeye yardımcı olur). BREAKING CHANGE için bir istisna yapılmıştır, bu da bir belirteç olarak KULLANILABILIR.
  Bir altlığın değeri boşluk ve satır sonları içerebilir ve ayrıştırma, sonraki geçerli altlık belirteci/ayırıcı çifti gözlendiğinde SONLANMALIDIR.
  Kırılma yapan değişiklikler, bir commit'in tür/scope önekinde veya altlıkta bir giriş olarak BELIRTILMELIDIR.
  Bir altlık olarak dahil edilirse, kırılma yapan değişiklik büyük harfli BREAKING CHANGE metni, ardından iki nokta, boşluk ve açıklama OLUŞMALIDIR, örneğin BREAKING CHANGE: environment variables now take precedence over config files.
  Tür/scope önekine dahil edilirse, kırılma yapan değişiklikler : öncesinde ! ile BELIRTILMELIDIR. Eğer ! kullanılırsa, BREAKING CHANGE: altlık bölümünden çıkarılabilir ve commit açıklaması kırılma yapan değişikliği açıklamak için KULLANILACAKTIR.
  feat ve fix dışındaki türler commit mesajlarınızda kullanılabilir, örneğin docs: update ref docs.
  Geleneksel Commit Mesajlarını oluşturan bilgi birimleri, BREAKING CHANGE gibi büyük harf olması ZORUNLU olan durum hariç, implementatörler tarafından büyük/küçük harfe duyarlı olarak DAVRANMAMALIDIR.
  BREAKING-CHANGE, bir altlıkta belirteç olarak kullanıldığında BREAKING CHANGE ile eş anlamlı OLMALIDIR.
---

Use the Conventional Commit Messages specification to generate commit messages

The commit message should be structured as follows:


```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
``` 
--------------------------------

The commit contains the following structural elements, to communicate intent to the consumers of your library:

  - fix: a commit of the type fix patches a bug in your codebase (this correlates with PATCH in Semantic Versioning).
  - feat: a commit of the type feat introduces a new feature to the codebase (this correlates with MINOR in Semantic Versioning).
  - BREAKING CHANGE: a commit that has a footer BREAKING CHANGE:, or appends a ! after the type/scope, introduces a breaking API change (correlating with MAJOR in Semantic Versioning). A BREAKING CHANGE can be part of commits of any type.
  - types other than fix: and feat: are allowed, for example @commitlint/config-conventional (based on the Angular convention) recommends build:, chore:, ci:, docs:, style:, refactor:, perf:, test:, and others.
  - footers other than BREAKING CHANGE: <description> may be provided and follow a convention similar to git trailer format.
  - Additional types are not mandated by the Conventional Commits specification, and have no implicit effect in Semantic Versioning (unless they include a BREAKING CHANGE). A scope may be provided to a commit’s type, to provide additional contextual information and is contained within parenthesis, e.g., feat(parser): add ability to parse arrays.



### Specification Details

The key words “MUST”, “MUST NOT”, “REQUIRED”, “SHALL”, “SHALL NOT”, “SHOULD”, “SHOULD NOT”, “RECOMMENDED”, “MAY”, and “OPTIONAL” in this document are to be interpreted as described in RFC 2119.

Commits MUST be prefixed with a type, which consists of a noun, feat, fix, etc., followed by the OPTIONAL scope, OPTIONAL !, and REQUIRED terminal colon and space.
The type feat MUST be used when a commit adds a new feature to your application or library.
The type fix MUST be used when a commit represents a bug fix for your application.
A scope MAY be provided after a type. A scope MUST consist of a noun describing a section of the codebase surrounded by parenthesis, e.g., fix(parser):
A description MUST immediately follow the colon and space after the type/scope prefix. The description is a short summary of the code changes, e.g., fix: array parsing issue when multiple spaces were contained in string.
A longer commit body MAY be provided after the short description, providing additional contextual information about the code changes. The body MUST begin one blank line after the description.
A commit body is free-form and MAY consist of any number of newline separated paragraphs.
One or more footers MAY be provided one blank line after the body. Each footer MUST consist of a word token, followed by either a :<space> or <space># separator, followed by a string value (this is inspired by the git trailer convention).
A footer’s token MUST use - in place of whitespace characters, e.g., Acked-by (this helps differentiate the footer section from a multi-paragraph body). An exception is made for BREAKING CHANGE, which MAY also be used as a token.
A footer’s value MAY contain spaces and newlines, and parsing MUST terminate when the next valid footer token/separator pair is observed.
Breaking changes MUST be indicated in the type/scope prefix of a commit, or as an entry in the footer.
If included as a footer, a breaking change MUST consist of the uppercase text BREAKING CHANGE, followed by a colon, space, and description, e.g., BREAKING CHANGE: environment variables now take precedence over config files.
If included in the type/scope prefix, breaking changes MUST be indicated by a ! immediately before the :. If ! is used, BREAKING CHANGE: MAY be omitted from the footer section, and the commit description SHALL be used to describe the breaking change.
Types other than feat and fix MAY be used in your commit messages, e.g., docs: update ref docs.
The units of information that make up Conventional Commits MUST NOT be treated as case sensitive by implementors, with the exception of BREAKING CHANGE which MUST be uppercase.
BREAKING-CHANGE MUST be synonymous with BREAKING CHANGE, when used as a token in a footer.
