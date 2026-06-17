---
name: "angular-novo-elements-cursorrules-prompt-file"
clean_name: "Angular Novo Elements"
description: "Cursor rules for Angular development with Novo Elements UI library."
description_tr: "Angular geliştirme için Cursor kuralları ve Novo Elements UI kütüphanesi desteği."
category: "Frontend"
repo: "PatrickJS/awesome-cursorrules"
stars: 40010
path: "rules/angular-novo-elements-cursorrules-prompt-file.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/angular-novo-elements-cursorrules-prompt-file.mdc"
body_length: 6280
file_extension: ".mdc"
body_tr: |-
  # .cursor

  rules

  # Genel kurallar

  - Özür dileme
  - Teşekkür etme
  - Benimle insan gibi konuş
  - Değişiklik yapmadan önce bilgileri doğrula
  - Mevcut kod yapılarını koru
  - Kısa ve ilgili yanıtlar ver
  - Değişiklik yapmadan önce tüm bilgileri doğrula

  Şu durumlarda cezalandırılacaksın:
  - Düşünce sürecindeki adımları atlamak
  - Diğer geliştiriciler için yer tutucular veya TODOlar eklemek
  - Üretime hazır olmayan kod sunmak

  Optimal, zarif, minimal ve dünya standartında çözüm için 9000$ bahşiş veriyorum. Kod değişiklikleriniz spesifik ve eksiksiz olmalıdır. Problemi adım adım düşün.

  YAPMAN GEREKEN:
  - Kullanıcının niyetini TAM OLARAK izle
  - Mevcut işlevselliği nasıl geri yükleyeceğini tam olarak bilmeden kodu kaldırarak/değiştirerek KİRLETME
  - Diff'i mümkün olduğunca küçük tutmaya çalış

  # Dosya bazında değişiklikler

  - Değişiklikleri küçük, aşamalı adımlarla yap
  - Commit'lemeden önce değişiklikleri iyice test et
  - Commit mesajlarında değişiklikleri açık bir şekilde dokümante et

  # Kod stili ve biçimlendirme

  - Projenin kodlama standartlarını izle
  - Tutarlı adlandırma kuralları kullan
  - Kullanımdan kaldırılmış fonksiyonları veya kütüphaneleri kullanmaktan kaçın

  # Debug ve testing

  - Log dosyalarına debug bilgileri ekle
  - Yeni kod için unit test yaz
  - Merge'lemeden önce tüm testlerin geçtiğinden emin ol

  # Proje yapısı

  - Açık ve organize bir proje yapısı koru
  - Dosya ve dizinler için anlamlı isimler kullan
  - Gereksiz dosyaları kaldırarak karışıklığı önle

  # Clean Code

  Kendinizi Tekrarlamayın (DRY)

  Kod tekrarı kodun bakımını çok zor hale getirebilir. Mantıktaki herhangi bir değişiklik kodu hatalara eğilimli hale getirebilir veya kod değişikliğini zorlaştırabilir. Bu, kod yeniden kullanımı (DRY İlkesi) yapılarak düzeltilebilir.

  DRY ilkesi şu şekilde belirtilir: "Her bilgi parçası bir sistem içinde tek, kesin ve yetkili bir temsile sahip olmalıdır".

  DRY'ye ulaşmanın yolu, herhangi bir mantığın yalnızca bir yerde yazılmasını sağlamak için fonksiyonlar ve sınıflar oluşturmaktır.

  Curly'nin Yasası - Bir Şey Yap

  Curly'nin Yasası, herhangi bir kod parçası için tek, açık bir hedef seçmekle ilgilidir: Bir Şey Yap.

  Curly'nin Yasası: Bir varlık (sınıf, fonksiyon, değişken) bir şey anlamına gelmeli ve yalnızca bir şey. Bir durumda bir şey anlamına gelmeli ve başka bir zamanda farklı bir alanından farklı bir değer taşımamalıdır. Aynı anda iki şey anlamına gelmemelidir. Bir Şey anlamına gelmeli ve her zaman onu anlammalıdır.

  Basit Tut Aptal (KISS)

  KISS ilkesi, çoğu sistemin karmaşık hale getirilmesinden ziyade basit tutulduğunda en iyi şekilde çalıştığını belirtir; bu nedenle basitlik tasarımda önemli bir amaç olmalı ve gereksiz karmaşıklık önlenmelidir.

  Basit kod aşağıdaki faydaları sağlar:
  yazılacak daha az zaman
  daha az hata şansı
  anlamak, hata ayıklamak ve değiştirmek daha kolay

  İşe yarayabilecek en basit şeyi yap.

  Beni düşündürme

  Kod çok düşünmeden kolay okunabilir ve anlaşılabilir olmalıdır. Değilse, basitleştirilme ihtimali vardır.

  İhtiyacın Olmayacak (YAGNI)

  İhtiyacın Olmayacak (YAGNI), Extreme Programming (XP) pratiğidir ve şunu belirtir: "Her zaman ihtiyacın olduğunda şeyler uygula, asla sadece ihtiyacın olacağını önceden gördüğünde değil."

  Daha sonra mutlaka ihtiyacın olacağından tamamen emin olsan da, şimdi uygulamayın. Genellikle aşağıdakilerden biri ortaya çıkar:
  sonuçta buna ihtiyacın yok, veya
  aslında ihtiyaç duyduğun şey önceden ihtiyaç duymayı öngördüğün şeyden oldukça farklıdır.

  Bu, kodunuza esneklik eklemeyi önlemek anlamına gelmez. Bu, daha sonra ihtiyacın olabileceğini düşündüğün şeye dayanarak bir şeyi aşırı mühendislik yapmayı önlemek anlamına gelir.

  YAGNI'yi uygulamak için iki ana neden vardır:
  Yazmanız gerekmeyen kodu yazmaktan kaçındığınız için zaman kazanırsınız.
  Kodunuz daha iyi olur çünkü onu 'tahminler' ile kirletmekten kaçınırsınız ve bu tahminler daha veya daha az yanlış ortaya çıksa bile etrafta kalır.

  Erken Optimizasyon Tüm Kötülüklerin Kökü

  Programcılar programlarının kritik olmayan bölümlerinin hızı hakkında düşünerek veya endişelenerek muazzam miktarda zaman boşa harcıyorlar ve bu verimlilik girişimleri debug ve bakım göz önüne alındığında güçlü bir olumsuz etkiye sahiptir.

  Küçük verimlilikleri unutmalıyız, zamanın yaklaşık %97'sinde söyleyin: erken optimizasyon tüm kötülüklerin kökü. Yine de o kritik %3'te fırsatlarımızı kaçırmamalıyız.

  - Donald Knuth

  Boy-Scout Kuralı

  Birisi açık olmayan kodu gördüğünde, o anda düzeltme fırsatını alması gerekir - ya da en azından birkaç dakika içinde.

  Bu opportunist refactoring, Uncle Bob tarafından boy-scout kuralını izlemek olarak adlandırılır - kodu bulduğunuz durumdan her zaman daha iyi bir durumda bırakın.

  Kod kalitesi her değişiklikle kötüleşme eğilimindedir. Bu teknik borç ile sonuçlanır. Boy-Scout İlkesi bizi bundan kurtarır.

  Bakıcı İçin Kod Yazın

  Kod bakımı pahalı ve zor bir süreçtir. Bakıcı olarak her zaman başka birini göz önünde bulundurarak kod yazın ve siz bakıcı olsanız bile buna göre değişiklikler yapın. Bir süre sonra kodu yabancı kadar hatırlarsınız.

  Kodunu bakacak kişinin şiddetli bir psikopat olduğu ve nerede yaşadığını bildiği varsayarak her zaman kod yazın.

  En Az Şaşkınlık İlkesi

  En Az Şaşkınlık İlkesi, bir sistemin bileşeninin, çoğu kullanıcının bunun davranacağını beklediği şekilde davranması gerektiğini belirtir. Davranış kullanıcıları şaşırtmamalı veya sürpriz yapmamalıdır.

  Kod, adının ve açıklamalarının önerdiği şeyi yapmalıdır. Kurallar izlenmelidir. Şaşırtıcı yan etkiler mümkün olduğunca önlenmelidir.

  # Projeye özel kurallar

  Angular'ı standalone komponenlarla kullanıyorum
  novo-elements module olan novo elements'i entegre ediyorum

  Dokümantasyon burada: https://bullhorn.github.io/novo-elements/docs/#/home
  Github burada: https://github.com/bullhorn/novo-elements

  Module dosyam yok. Standalone komponentleri kullanıyorum

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
