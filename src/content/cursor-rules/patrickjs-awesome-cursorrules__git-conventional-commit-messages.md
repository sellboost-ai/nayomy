---
name: "git-conventional-commit-messages"
clean_name: "Git Conventional Commit Messages"
description: "Cursor rules for Git development with conventional commit messages integration."
description_tr: "Git geliştirmesi için Cursor kuralları, conventional commit mesajları entegrasyonu ile."
category: "Other"
repo: "PatrickJS/awesome-cursorrules"
stars: 40019
path: "rules/git-conventional-commit-messages.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/git-conventional-commit-messages.mdc"
body_length: 4439
file_extension: ".mdc"
body_tr: |-
  Conventional Commit Messages spesifikasyonunu kullanarak commit mesajları oluşturun

  Commit mesajı aşağıdaki şekilde yapılandırılmalıdır:


  ```
  <type>[optional scope]: <description>

  [optional body]

  [optional footer(s)]
  ``` 
  --------------------------------

  Commit, kütüphanenizin tüketicilerine niyeti iletişim kurmak için aşağıdaki yapısal öğeleri içerir:

    - fix: fix türündeki bir commit, kodunuzdaki bir hatayı düzeltir (bu Semantic Versioning'deki PATCH ile ilişkilidir).
    - feat: feat türündeki bir commit, kodunuza yeni bir özellik tanıtır (bu Semantic Versioning'deki MINOR ile ilişkilidir).
    - BREAKING CHANGE: BREAKING CHANGE: footer'ına sahip olan veya type/scope'dan sonra ! ekleyen bir commit, kırılma yapan bir API değişikliği tanıtır (Semantic Versioning'deki MAJOR ile ilişkilidir). Bir BREAKING CHANGE herhangi bir türdeki commitin parçası olabilir.
    - fix: ve feat: dışındaki türlere izin verilir, örneğin @commitlint/config-conventional (Angular kuralına dayalı) build:, chore:, ci:, docs:, style:, refactor:, perf:, test: ve diğerlerini önerir.
    - BREAKING CHANGE: <description> dışındaki footer'lar sağlanabilir ve git trailer formatına benzer bir kuralı izler.
    - Ek türler Conventional Commits spesifikasyonu tarafından zorunlu tutulmaz ve Semantic Versioning'de örtülü bir etkiye sahip değildir (BREAKING CHANGE içermediği sürece). Commit'in type'ına, ek bağlamsal bilgi sağlamak için bir scope eklenebilir ve parantez içinde yer alır, örneğin feat(parser): add ability to parse arrays.



  ### Spesifikasyon Detayları

  Bu belgede "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY" ve "OPTIONAL" anahtar kelimeleri RFC 2119'da açıklanan şekilde yorumlanmalıdır.

  Commitler type ile başlatılmalıdır ve bu type, feat, fix, vb. gibi bir isimden, ardından OPTIONAL scope'dan, OPTIONAL !'dan ve REQUIRED terminal iki noktadan ve boşluktan oluşur.
  feat türü, bir commit uygulamanıza veya kütüphanenize yeni bir özellik eklediğinde KULLANILMALI'dır.
  fix türü, bir commit uygulamanız için bir hata düzeltmesini temsil ettiğinde KULLANILMALI'dır.
  Bir type'dan sonra scope sağlanabilir. Scope, parantez içinde yer alan kodunuzun bir bölümünü açıklayan bir isimden oluşmalıdır, örneğin fix(parser):
  Bir açıklama, type/scope prefix'inden sonra iki nokta ve boşluğun hemen ardından gelmelidir. Açıklama, kod değişikliklerinin kısa bir özeti, örneğin fix: array parsing issue when multiple spaces were contained in string.
  Kod değişiklikleri hakkında ek bağlamsal bilgi sağlayarak, kısa açıklamadan sonra daha uzun bir commit body'si sağlanabilir. Body, açıklamadan bir satır boş bırakıldıktan sonra başlamalıdır.
  Bir commit body serbest formattadır ve herhangi bir sayıda newline ile ayrılmış paragraftan oluşabilir.
  Body'den sonra bir satır boş bırakılarak bir veya daha fazla footer sağlanabilir. Her footer, bir word token'ından, ardından ': ' veya ' #' separator'ından, ardından bir string değerinden oluşmalıdır (bu git trailer kuralından esinlenmiştir).
  Bir footer'ın token'ı, whitespace karakterleri yerine - kullanmalıdır, örneğin Acked-by (bu footer bölümünü çok paragrafı bir gövdeden ayırt etmeye yardımcı olur). BREAKING CHANGE için istisna yapılır, bu da token olarak kullanılabilir.
  Bir footer'ın değeri boşluk ve newline içerebilir, ve parsing sonraki geçerli footer token/separator çifti gözlemlendiğinde sonlandırılmalıdır.
  Kırılma yapan değişiklikler, commit'in type/scope prefix'inde veya footer'da bir giriş olarak belirtilmelidir.
  Footer olarak dahil edilirse, bir breaking change büyük harf BREAKING CHANGE, ardından iki nokta, boşluk ve açıklamadan oluşmalıdır, örneğin BREAKING CHANGE: environment variables now take precedence over config files.
  Type/scope prefix'inde dahil edilirse, breaking change'ler ':' den hemen önce '!' ile belirtilmelidir. '!' kullanılırsa, BREAKING CHANGE: footer bölümünden atlanabilir ve commit açıklaması breaking change'i açıklamak için kullanılacaktır.
  feat ve fix dışındaki türler commit mesajlarınızda kullanılabilir, örneğin docs: update ref docs.
  Conventional Commits'i oluşturan bilgi birimleri, BREAKING CHANGE dışında, uygulayıcılar tarafından büyük/küçük harfe duyarlı olarak değerlendirilmemelidir; BREAKING CHANGE büyük harf olmalıdır.
  BREAKING-CHANGE, footer'da token olarak kullanıldığında BREAKING CHANGE ile eşanlamlı olmalıdır.
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
