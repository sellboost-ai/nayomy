---
name: "git-conventional-commit-messages"
clean_name: "Git Conventional Commit Messages"
description: "Cursor rules for Git development with conventional commit messages integration."
description_tr: "Git geliştirmesi için cursor kuralları ve conventional commit messages entegrasyonu."
category: "Other"
repo: "PatrickJS/awesome-cursorrules"
stars: 39709
path: "rules/git-conventional-commit-messages.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/git-conventional-commit-messages.mdc"
body_length: 4439
file_extension: ".mdc"
body_tr: |-
  Geleneksel Commit Mesajları (Conventional Commit Messages) spesifikasyonunu kullanarak commit mesajları oluşturun

  Commit mesajı aşağıdaki şekilde yapılandırılmalıdır:


  ```
  <type>[optional scope]: <description>

  [optional body]

  [optional footer(s)]
  ``` 
  --------------------------------

  Commit, kütüphanenizin tüketicilerine niyeti iletişim kurmak için aşağıdaki yapısal öğeleri içerir:

    - fix: fix türündeki bir commit, kodunuzdaki bir hatayı düzeltir (bu Anlamsal Versiyonlamada PATCH ile ilişkilidir).
    - feat: feat türündeki bir commit, kodunuza yeni bir özellik tanıtır (bu Anlamsal Versiyonlamada MINOR ile ilişkilidir).
    - BREAKING CHANGE: BREAKING CHANGE: footerına sahip bir commit veya type/scope'tan sonra ! ekleyen bir commit, kırılmış bir API değişikliği tanıtır (Anlamsal Versiyonlamada MAJOR ile ilişkilidir). BREAKING CHANGE, herhangi bir türdeki commitlerin parçası olabilir.
    - fix: ve feat: dışındaki türler kullanılabilir, örneğin @commitlint/config-conventional (Angular kuralına dayalı) build:, chore:, ci:, docs:, style:, refactor:, perf:, test: ve diğerlerini önerir.
    - BREAKING CHANGE: <description> dışındaki footerlar sağlanabilir ve git trailer formatına benzer bir kurala uyabilir.
    - Ek türler Geleneksel Commits spesifikasyonu tarafından zorunlu kılınmaz ve Anlamsal Versiyonlamada (BREAKING CHANGE içermedikleri sürece) örtük bir etkiye sahip değildir. Ek bağlamsal bilgi sağlamak için bir commitin türüne bir scope eklenebilir ve parantez içine alınır, örneğin feat(parser): add ability to parse arrays.



  ### Spesifikasyon Detayları

  Bu belgede "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY" ve "OPTIONAL" anahtar sözcükleri RFC 2119'da açıklandığı şekilde yorumlanmalıdır.

  Commitler bir type ile başına getirilmelidir (MUST), bu bir isim, feat, fix, vb.'den oluşur ve ardından OPTIONAL scope, OPTIONAL !, ve REQUIRED terminal iki nokta ve boşluk gelir.
  feat türü, bir commit uygulamanıza veya kütüphanenize yeni bir özellik eklediğinde kullanılmalıdır (MUST).
  fix türü, bir commit uygulamanız için bir hata düzeltmesini temsil ettiğinde kullanılmalıdır (MUST).
  Bir scope, bir type'dan sonra sağlanabilir (MAY). Bir scope, parantez içine alınmış kodun bir bölümünü açıklayan bir isimden oluşmalıdır (MUST), örneğin fix(parser):
  Bir description, type/scope önekinden sonra iki nokta ve boşluğun hemen ardından gelmelidir (MUST). Description, kod değişikliklerinin kısa bir özeti olup, örneğin, fix: array parsing issue when multiple spaces were contained in string.
  Kod değişiklikleri hakkında ek bağlamsal bilgi sağlamak için description'dan sonra daha uzun bir commit body sağlanabilir (MAY). Body, description'dan sonra bir boş satır ile başlamalıdır (MUST).
  Bir commit body serbest formda olup, herhangi bir sayıda satır sonu ile ayrılmış paragraftan oluşabilir (MAY).
  Body'den sonra bir boş satır ile bir veya daha fazla footer sağlanabilir (MAY). Her footer, bir sözcük token'ı ve ardından iki nokta boşluk ya da boşluk # ayırıcısı ile başlamalıdır (MUST), bunu bir dize değeri takip eder (bu git trailer kuralından esinlenmiştir).
  Bir footer'ın token'ı, boşluk karakterleri yerine - kullanmalıdır (MUST), örneğin, Acked-by (bu footer bölümünü çok paragraftan oluşan bir body'den ayırt etmeye yardımcı olur). BREAKING CHANGE için bir istisna yapılır, bu token olarak da kullanılabilir (MAY).
  Bir footer'ın değeri boşluklar ve satır sonları içerebilir (MAY), ve ayrıştırma bir sonraki geçerli footer token/ayırıcı çifti gözlendiğinde sonlandırılmalıdır (MUST).
  Kırılmış değişiklikler, bir commitin type/scope önekinde veya footer'da bir giriş olarak gösterilmelidir (MUST).
  Bir footer olarak dahil edilirse, kırılmış bir değişiklik büyük harfler BREAKING CHANGE ile oluşmalı (MUST), ardından iki nokta, boşluk ve description gelir, örneğin, BREAKING CHANGE: environment variables now take precedence over config files.
  type/scope önekine dahil edilirse, kırılmış değişiklikler, iki noktadan hemen önce ! ile gösterilmelidir (MUST). Eğer ! kullanılırsa, BREAKING CHANGE: footer bölümünden atlanabilir (MAY) ve commit description kırılmış değişikliği açıklamak için kullanılacaktır (SHALL).
  feat ve fix dışındaki türler commit mesajlarınızda kullanılabilir (MAY), örneğin, docs: update ref docs.
  Geleneksel Commits'i oluşturan bilgi birlikleri, BREAKING CHANGE'in büyük harf olması gereken istisnası dışında, uygulayıcılar tarafından büyük/küçük harfe duyarlı olarak ele alınmamalıdır (MUST NOT).
  BREAKING-CHANGE, footer'da bir token olarak kullanıldığında BREAKING CHANGE ile eş anlamlı olmalıdır (MUST).
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
