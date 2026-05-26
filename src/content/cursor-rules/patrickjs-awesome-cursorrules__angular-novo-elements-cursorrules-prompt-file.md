---
name: "angular-novo-elements-cursorrules-prompt-file"
clean_name: "Angular Novo Elements"
description: "Cursor rules for Angular development with Novo Elements UI library."
description_tr: "Novo Elements UI kütüphanesi ile Angular geliştirmesi için Cursor kuralları."
category: "Frontend"
repo: "PatrickJS/awesome-cursorrules"
stars: 39709
path: "rules/angular-novo-elements-cursorrules-prompt-file.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/angular-novo-elements-cursorrules-prompt-file.mdc"
body_length: 6280
file_extension: ".mdc"
body_tr: |-
  # .cursor

  kurallar

  # Genel kurallar

  - Özür dileme
  - Bana teşekkür etme
  - Benimle insan gibi konuş
  - Değişiklik yapmadan önce bilgileri doğrula
  - Mevcut kod yapılarını koru
  - Kısa ve ilgili yanıtlar ver
  - Değişiklik yapmadan önce tüm bilgileri doğrula

  Şu durumlar için cezalandırılacaksın:
  - Düşünce sürecinde adım atlamak
  - Diğer geliştiriciler için yer tutucu veya TODO eklemek
  - Üretim ortamı için hazır olmayan kod sunmak

  YAPMAN GEREKEN:
  - Kullanıcının niyetini TAM OLARAK takip et
  - Mevcut işlevselliği bozma, tam olarak nasıl geri yükleneceğini bilmeden kod veya CSS'i kaldırma/değiştirme
  - Diff'i mümkün olduğunca küçük tutmaya çalış

  # Dosya bazında değişiklikler

  - Değişiklikleri küçük, kademeli adımlarla yap
  - Commit etmeden önce değişiklikleri kapsamlı test et
  - Commit mesajlarında değişiklikleri net bir şekilde dokümante et

  # Kod stili ve biçimlendirmesi

  - Projenin kodlama standartlarını takip et
  - Tutarlı adlandırma konvansiyonları kullan
  - Kullanımdan kaldırılmış fonksiyon veya kütüphaneleri kullanmaktan kaçın

  # Hata ayıklama ve test

  - Log dosyalarına hata ayıklama bilgileri dahil et
  - Yeni kod için unit testler yaz
  - Merge etmeden önce tüm testlerin geçtiğinden emin ol

  # Proje yapısı

  - Net ve organize bir proje yapısı koru
  - Dosya ve dizinler için anlamlı isimler kullan
  - Gereksiz dosyaları silerek dağınıklığı önle

  # Temiz Kod

  Kendini Tekrar Etme (DRY)

  Kod tekrarı kodun bakımını çok zor hale getirebilir. Mantıkta yapılan herhangi bir değişiklik kodu hatalara açık hale getirebilir veya kod değişikliğini zorlaştırabilir. Bu, kod yeniden kullanımı yaparak (DRY Prensibi) çözülebilir.

  DRY prensibi şu şekilde ifade edilir: "Bilginin her parçası bir sistem içinde tek, açık ve yetkili bir temsile sahip olmalıdır".

  DRY'ye ulaşmanın yolu, herhangi bir mantığın yalnızca bir yerde yazılmasını sağlamak için fonksiyonlar ve sınıflar oluşturmaktır.

  Curly Kanunu - Bir Şey Yap

  Curly Kanunu, herhangi bir kod parçası için tek ve net bir şekilde tanımlanmış bir hedefi seçmekle ilgilidir: Bir Şey Yap.

  Curly Kanunu: Bir varlık (sınıf, fonksiyon, değişken) bir şey anlamlandırmalı ve yalnızca bir şey. Bir durumda bir şey anlamlandırmalı ve farklı bir alan tarafından farklı bir zaman da farklı bir değer taşımamalı. Aynı anda iki şey anlamlandırmamalı. Bir Şey anlamlandırmalı ve her zaman o şeyi anlamlandırmalı.

  Basit Tut, Aptal (KISS)

  KISS prensibi, çoğu sistemin karmaşık hale getirilmesinden ziyade basit tutulduğunda en iyi şekilde çalıştığını belirtir; bu nedenle basitlik tasarımda temel bir hedef olmalı ve gereksiz karmaşıklıktan kaçınılmalıdır.

  Basit kod aşağıdaki faydaları sağlar:
  yazma süresi azalır
  hata ihtimali düşer
  anlamak, hata ayıklamak ve değiştirmek daha kolay

  Çalışabilecek en basit şeyi yap.

  Beni düşünme

  Kod çok fazla düşünülmeden anlaşılması kolay olmalıdır. Eğer değilse, basitleştirme ihtimali vardır.

  Buna İhtiyacın Olmayacak (YAGNI)

  Buna İhtiyacın Olmayacak (YAGNI), Extreme Programming (XP) uygulamasıdır: "Her zaman ihtiyacın olduğunda şeyler uygula, sadece ihtiyacın olacağını önceden gördüğünde değil."

  Daha sonra kesinlikle, kesinlikle, kesinlikle bir özelliğe ihtiyacın olacağından emin olsan bile, şimdi uygulanmıyor. Genellikle, aşağıdakilerden biri ortaya çıkıyor:
  sonuçta buna ihtiyacın olmadı, veya
  gerçekten ihtiyaç duyduğun şey, daha önceden ihtiyaç göreceğini düşündüğün şeyden oldukça farklı.

  Bu, kodunuza esneklik yerleştirmekten kaçınman gerektiği anlamına gelmez. Bu, daha sonra ihtiyacın olabileceğini düşündüğün şeye göre bir şeyi aşırı mühendislik yapmamalısın anlamına gelir.

  YAGNI'yi uygulamanın iki ana nedeni var:
  Gerçekten ihtiyacın olmadığı kodu yazmaktan kaçındığın için zaman tasarrufu yaparsın.
  Kodunuz daha iyidir çünkü 'tahminler' ile dolduramazın; bu da daha az yanlış olmaya eğilimi gösteren ama yine de kalıyor.

  Erken Optimizasyon Tüm Kötülüğün Kökü

  Programcılar, programlarının performans kritik olmayan kısımlarının hızı hakkında düşünerek ya da endişelenerek muazzam miktarda zaman boşa harcarlar ve bu verimlilik çabaları hata ayıklama ve bakım göz önüne alındığında güçlü bir olumsuz etkiye sahiptir.

  Küçük verimlilikleri, zamanın yaklaşık %97'sini unutmalıyız: erken optimizasyon tüm kötülüğün kökü. Yine de o kritik %3'te fırsatlarımızı kaçırmamalıyız.

  - Donald Knuth

  Boy-Scout Kuralı

  Birisi kodun net olmadığı kadar açık olmayan herhangi bir kod gördüğünde, bunu hemen düzeltme fırsatını kullanmalıdır - ya da en azından birkaç dakika içinde.

  Bu fırsat avcı refaktoring, Uncle Bob tarafından boy-scout kuralını takip etme olarak adlandırılır - kodu bulduğundan daha iyi bir durumda bırakmanız.

  Kod kalitesi her değişiklikle bozulmaya eğilimi gösterir. Bu teknik borç ile sonuçlanır. Boy-Scout Prensibi bizi bundan kurtarır.

  Bakımcı İçin Kod Yazma

  Kod bakımı pahalı ve zor bir işlemdir. Diğer birini bakımcı olarak düşünerek ve sen bakımcı olsan bile değişiklikleri ona göre yap. Bir süre sonra kodu yabancı kadar hatırlayacaksın.

  Her zaman kodunuzu bakımı yapacak kişinin şiddetli bir psikopat olduğunu ve nerede yaşadığını bildiğini düşünerek yaz.

  En Az Şaşırtma Prensibi

  En Az Şaşırtma Prensibi, bir sistemin bileşeninin çoğu kullanıcının bekleyeceği şekilde davranması gerektiğini belirtir. Davranış kullanıcıları şaşırtmamalı veya beklenmedik şekilde etkilememeli.

  Kod, adı ve yorumların önerdiğini yapmalı. Konvansiyonlar takip edilmeli. Şaşırtıcı yan etkiler mümkün olduğunca kaçınılmalı.

  # Projeye özgü kurallar

  Angular'ı standalone bileşenlerle kullanıyorum
  Novo Elements entegre ediyorum - novo-elements modülü

  Dokümantasyon burada: https://bullhorn.github.io/novo-elements/docs/#/home
  Github burada: https://github.com/bullhorn/novo-elements

  Modül dosyam yok. Standalone bileşenler kullanıyorum

  @Docs{
    "library_name": "Novo Elements",
    "documentation": "https://bullhorn.github.io/novo-elements/docs/#/home"
  }

  @Docs{
    "library_name": "Novo Elements",
    "documentation": "https://github.com/bullhorn/novo-elements"
  }
---

# .cursor

rules

# General rules

- Do not apologize
- Do not thank me
- Talk to me like a human
- Verify information before making changes
- Preserve existing code structures
- Provide concise and relevant responses
- Verify all information before making changes

You will be penalized if you:
- Skip steps in your thought process
- Add placeholders or TODOs for other developers
- Deliver code that is not production-ready

I'm tipping $9000 for an optimal, elegant, minimal world-class solution that meets all specifications. Your code changes should be specific and complete. Think through the problem step-by-step.

YOU MUST:
- Follow the User's intent PRECISELY
- NEVER break existing functionality by removing/modifying code or CSS without knowing exactly how to restore the same function
- Always strive to make your diff as tiny as possible

# File-by-file changes

- Make changes in small, incremental steps
- Test changes thoroughly before committing
- Document changes clearly in commit messages

# Code style and formatting

- Follow the project's coding standards
- Use consistent naming conventions
- Avoid using deprecated functions or libraries

# Debugging and testing

- Include debug information in log files
- Write unit tests for new code
- Ensure all tests pass before merging

# Project structure

- Maintain a clear and organized project structure
- Use meaningful names for files and directories
- Avoid clutter by removing unnecessary files

# Clean Code

Don't Repeat Yourself (DRY)

Duplication of code can make code very difficult to maintain. Any change in logic can make the code prone to bugs or can make the code change difficult. This can be fixed by doing code reuse (DRY Principle).

The DRY principle is stated as "Every piece of knowledge must have a single, unambiguous, authoritative representation within a system".

The way to achieve DRY is by creating functions and classes to make sure that any logic should be written in only one place.

Curly's Law - Do One Thing

Curly's Law is about choosing a single, clearly defined goal for any particular bit of code: Do One Thing.

Curly's Law: A entity (class, function, variable) should mean one thing, and one thing only. It should not mean one thing in one circumstance and carry a different value from a different domain some other time. It should not mean two things at once. It should mean One Thing and should mean it all of the time.

Keep It Simple Stupid (KISS)

The KISS principle states that most systems work best if they are kept simple rather than made complicated; therefore, simplicity should be a key goal in design, and unnecessary complexity should be avoided.

Simple code has the following benefits:
less time to write
less chances of bugs
easier to understand, debug and modify

Do the simplest thing that could possibly work.

Don't make me think

Code should be easy to read and understand without much thinking. If it isn't then there is a prospect of simplification.

You Aren't Gonna Need It (YAGNI)

You Aren't Gonna Need It (YAGNI) is an Extreme Programming (XP) practice which states: "Always implement things when you actually need them, never when you just foresee that you need them."

Even if you're totally, totally, totally sure that you'll need a feature, later on, don't implement it now. Usually, it'll turn out either:
you don't need it after all, or
what you actually need is quite different from what you foresaw needing earlier.

This doesn't mean you should avoid building flexibility into your code. It means you shouldn't overengineer something based on what you think you might need later on.

There are two main reasons to practice YAGNI:
You save time because you avoid writing code that you turn out not to need.
Your code is better because you avoid polluting it with 'guesses' that turn out to be more or less wrong but stick around anyway.

Premature Optimization is the Root of All Evil

Programmers waste enormous amounts of time thinking about or worrying about, the speed of noncritical parts of their programs, and these attempts at efficiency actually have a strong negative impact when debugging and maintenance are considered.

We should forget about small efficiencies, say about 97% of the time: premature optimization is the root of all evil. Yet we should not pass up our opportunities in that critical 3%.

- Donald Knuth

Boy-Scout Rule

Any time someone sees some code that isn't as clear as it should be, they should take the opportunity to fix it right there and then - or at least within a few minutes.

This opportunistic refactoring is referred to by Uncle Bob as following the boy-scout rule - always leave the code behind in a better state than you found it.

The code quality tends to degrade with each change. This results in technical debt. The Boy-Scout Principle saves us from that.

Code for the Maintainer

Code maintenance is an expensive and difficult process. Always code considering someone else as the maintainer and making changes accordingly even if you're the maintainer. After a while, you'll remember the code as much as a stranger.

Always code as if the person who ends up maintaining your code is a violent psychopath who knows where you live.

Principle of Least Astonishment

Principle of Least Astonishment states that a component of a system should behave in a way that most users will expect it to behave. The behavior should not astonish or surprise users.

Code should do what the name and comments suggest. Conventions should be followed. Surprising side effects should be avoided as much as possible.

# Project specific rules

I'm using angular with standalone components
I'm integrating novo elements which is the novo-elements module

Documentation is here: https://bullhorn.github.io/novo-elements/docs/#/home
Github is here: https://github.com/bullhorn/novo-elements

I don''t have a module file. I am using standalone components

@Docs{
  "library_name": "Novo Elements",
  "documentation": "https://bullhorn.github.io/novo-elements/docs/#/home"
}

@Docs{
  "library_name": "Novo Elements",
  "documentation": "https://github.com/bullhorn/novo-elements"
}
