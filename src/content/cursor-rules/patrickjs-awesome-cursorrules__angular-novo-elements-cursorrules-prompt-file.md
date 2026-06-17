---
name: "angular-novo-elements-cursorrules-prompt-file"
clean_name: "Angular Novo Elements"
description: "Cursor rules for Angular development with Novo Elements UI library."
description_tr: "Novo Elements UI kütüphanesi ile Angular geliştirme için Cursor rules."
category: "Frontend"
repo: "PatrickJS/awesome-cursorrules"
stars: 40019
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
  - Kısa ve ilgili yanıtlar sağla
  - Değişiklik yapmadan önce tüm bilgileri doğrula

  Şu durumlarda cezalandırılacaksın:
  - Düşünce sürecindeki adımları atlamak
  - Diğer geliştirici için yer tutucular veya TODO'lar eklemek
  - Üretim ortamında hazır olmayan kod sunmak

  $9000 bahşiş vereceğim optimal, zarif, minimal ve dünya standartlarında çözüm için tüm şartları karşılarsa. Kod değişiklikleriniz spesifik ve eksiksiz olmalıdır. Problemi adım adım düşün.

  ZORUNLU:
  - Kullanıcının niyetine TAM OLARAK uyun
  - Kod veya CSS'i çıkararak/değiştirerek mevcut işlevselliği ASLA bozma; aynı işlevi nasıl geri yükleyeceğini tam olarak bilmeden yapma
  - Diff'inizi mümkün olduğunca küçük tutmaya çalış

  # Dosya dosya değişiklikler

  - Küçük, kademeli adımlarla değişiklik yap
  - Commit etmeden önce değişiklikleri kapsamlı şekilde test et
  - Commit mesajlarında değişiklikleri açıkça dokümante et

  # Kod stili ve formatlaması

  - Projenin kodlama standartlarını takip et
  - Tutarlı adlandırma kuralları kullan
  - Kullanım dışı kalmış fonksiyonları veya kütüphaneleri kullanmaktan kaçın

  # Hata ayıklama ve test etme

  - Log dosyalarına hata ayıklama bilgisi ekle
  - Yeni kod için birim testleri yaz
  - Merge etmeden önce tüm testlerin geçtiğinden emin ol

  # Proje yapısı

  - Açık ve düzenli bir proje yapısını koru
  - Dosya ve dizinler için anlamlı isimler kullan
  - Gereksiz dosyaları çıkararak karışıklığı önle

  # Temiz Kod

  Kendini Tekrar Etme (DRY)

  Kod tekrarlanması, kodu bakımını çok zor hale getirebilir. Mantıkta yapılan herhangi bir değişiklik kodu hatalara yatkın hale getirebilir veya kod değişikliğini zorlaştırabilir. Bu, kod yeniden kullanımı ile (DRY Prensibi) çözülebilir.

  DRY prensibi şöyle ifade edilir: "Her bilgi parçası, sistem içinde tek, net ve otoriter bir temsiline sahip olmalıdır".

  DRY'ye ulaşmanın yolu, herhangi bir mantığın yalnızca bir yerde yazılmasını sağlamak için fonksiyonlar ve sınıflar oluşturmaktır.

  Curly Yasası - Bir Şey Yap

  Curly Yasası, herhangi bir kod parçası için tek, açıkça tanımlanmış bir amaca seçilmesi hakkındadır: Bir Şey Yap.

  Curly Yasası: Bir varlık (sınıf, fonksiyon, değişken) bir şey anlamına gelmeli ve yalnızca bir şey. Bir durumda bir şey anlamına gelmemeli ve başka bir durumda farklı bir alanın değerini taşımamalıdır. Aynı anda iki şey anlamına gelmemeldir. Bir Şey anlamına gelmeli ve her zaman onu anlamına gelmeli.

  Basit Tutun Aptal (KISS)

  KISS prensibi, çoğu sistemin karmaşık hale getirilmekten ziyade basit tutulduğunda en iyi şekilde çalıştığını belirtir; bu nedenle basitlik tasarımda ana hedef olmalı ve gereksiz karmaşıklık kaçınılmalıdır.

  Basit kod aşağıdaki faydaları sağlar:
  yazılacak daha az zaman
  hata şansı daha az
  anlaşılması, hata ayıklanması ve değiştirilmesi daha kolay

  Mümkün olan en basit şeyi yap.

  Beni düşündürme

  Kod, çok fazla düşünmeden okunması ve anlaşılması kolay olmalıdır. Değilse, basitleştirilme olasılığı vardır.

  Buna İhtiyacın Olmayacak (YAGNI)

  Buna İhtiyacın Olmayacak (YAGNI), Extreme Programming (XP) uygulaması olup şunları belirtir: "Her zaman aslında ihtiyaç duyduğunda şeyleri uygula, yalnızca ihtiyacın olacağını öngördüğünde değil."

  Daha sonra bir özelliğe ihtiyacın olacağından tamamen emin olsan bile, şimdi uygulama. Genellikle şu iki durumdan biri ortaya çıkar:
  sonuçta buna ihtiyacın olmadığını anlamak, veya
  aslında ihtiyacın olduğun şey, daha önce ihtiyacın olacağını öngördüğün şeyden oldukça farklı.

  Bu, kodunuza esneklik yerleştirmekten kaçınmanız gerektiği anlamına gelmez. Bu, daha sonra ihtiyacın olabileceğini düşündüğünüz şeye göre bir şeyi aşırı mühendislik yapmamanız anlamına gelir.

  YAGNI'yi uygulamanın iki ana nedeni vardır:
  İhtiyacın olmadığı ortaya çıkan kodu yazmaktan kaçındığın için zaman kaydedersin.
  Kodun daha iyi olur çünkü onu 'tahminler' ile kirletmekten kaçınırsın ve bu tahminler ya da daha az yanlış olur ama yine de etrafta kalırlar.

  Erken Optimizasyon Tüm Kötülüğün Kökü

  Programcılar, programlarının kritik olmayan parçalarının hızı hakkında düşünmek veya endişelenmek için muazzam miktarda zaman israf ederler ve bu verimlilik çabalarının hata ayıklama ve bakım düşünüldüğünde güçlü bir olumsuz etkisi vardır.

  Küçük verimlilikleri unutmalıyız, diyelim zamanın yaklaşık yüzde 97'si: erken optimizasyon tüm kötülüğün köküdür. Ancak o kritik yüzde 3'lük fırsatları kaçırmamalıyız.

  - Donald Knuth

  Boy-Scout Kuralı

  Birisinin açık olmadığından daha net olması gereken bazı kodları gördüğü her zaman, bunu hemen orada düzeltme fırsatı bulması gerekir - veya en azından birkaç dakika içinde.

  Bu fırsat avcılığı refactoring, Uncle Bob tarafından boy-scout kuralını takip etmek olarak adlandırılır - bulduğunuz kodun arkasını her zaman daha iyi bir durumda bırakın.

  Kod kalitesi her değişiklikle bozulma eğilimindedir. Bu, teknik borç ile sonuçlanır. Boy-Scout Prensibi bizi bundan kurtarır.

  Bakıcı İçin Kod

  Kod bakımı pahalı ve zor bir süreçtir. Her zaman başka birini bakıcı olarak düşünerek ve bunu göz önünde bulundurarak değişiklikler yaparak kod yaz, hatta sen bakıcı olsan da. Bir süre sonra, kodu garip biri kadar hatırlayacaksın.

  Her zaman, kodunun bakımını yapacak olan kişi senin nerede yaşadığını bilen şiddet eğilimli bir psikopat gibi kod yaz.

  Azlık Şaşırtması Prensibi

  Azlık Şaşırtması Prensibi, bir sistemin bileşeninin çoğu kullanıcının bunu nasıl davranmasını bekleyeceklerini uygun şekilde davranması gerektiğini belirtir. Davranış kullanıcıları şaşırtmamalı veya überraşe etmemelidir.

  Kod, adının ve yorumlarının önerdiği şeyi yapmalıdır. Kurallar takip edilmelidir. Şaşırtıcı yan etkiler mümkün olduğunca kaçınılmalıdır.

  # Projeye özel kurallar

  Angular kullanıyorum standalone components ile
  novo elements entegrasyonu yapıyorum, novo-elements modülünü kullanıyorum

  Dokümantasyon burada: https://bullhorn.github.io/novo-elements/docs/#/home
  Github burada: https://github.com/bullhorn/novo-elements

  Bir modül dosyam yok. Standalone components kullanıyorum

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
