---
name: "github-cursorrules-prompt-file-instructions"
clean_name: "Github Cursorrules Prompt File Instructions"
description: "Cursor rules for GitHub development with instructions integration."
description_tr: "GitHub geliştirmesi için Cursor kuralları ve talimatlar entegrasyonu."
category: "Other"
repo: "PatrickJS/awesome-cursorrules"
stars: 40019
path: "rules/github-cursorrules-prompt-file-instructions.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/github-cursorrules-prompt-file-instructions.mdc"
body_length: 12704
file_extension: ".mdc"
body_tr: |-
  # Temiz Kod Yazma: En İyi Uygulamalar ve İlkeler

  Kod yazmak bir konuşma vermek gibidir. Çok fazla büyük sözcük kullanırsanız, izleyicilerinizi kafası karışır. Her sözcüğü tanımlarsanız, izleyicilerinizi uyku dörtlüğüne sokarsınız. Benzer şekilde, kod yazarken sadece çalışmasını sağlamaya odaklanmamalısınız. Aynı zamanda, gelecekteki okuyucular için okunaklı, anlaşılabilir ve bakımlanabilir olmasını hedeflemelisiniz. Yazılım mühendisi Martin Fowler'ın sözlerini parafrazlayacak olursak, "Herkes bir bilgisayarın anlayabileceği kod yazabilir. İyi programcılar insanların anlayabileceği kod yazarlar."

  Yazılım geliştiricileri olarak, insanlar tarafından anlaşılabilecek, işlevsel ve en iyi uygulamalara uygun temiz kod yazmanın nasıl yapıldığını anlamak, sürekli olarak daha iyi yazılım oluşturmanıza yardımcı olur.

  Bu makale temiz kodun ne olduğunu, neden gerekli olduğunu açıklar ve temiz ve bakımlanabilir kod yazma ilkeleri ile en iyi uygulamaları sunmaktadır.

  ## Temiz Kod Nedir?

  Temiz kod, okunması kolay, anlaşılması ve bakımı yapılabilir olan koda atıfta bulunmak için kullanılan bir terimdir. Terim, 2008 yılında "Clean Code: A Handbook of Agile Software Craftsmanship" kitabını yazan Robert Cecil Martin, aynı zamanda Uncle Bob olarak bilinen kişi tarafından popüler hale getirilmiştir. Bu kitapta, anlamlı isimler, kısa fonksiyonlar, açık yorumlar ve tutarlı biçimlendirme gibi temiz kod yazma ilkeleri ve en iyi uygulamaları sunmuştur.

  Sonuç olarak, temiz kodun amacı sadece işlevsel değil, aynı zamanda okunaklı, bakımlanabilir ve yaşam döngüsü boyunca verimli olan yazılım oluşturmaktır.

  ## Temiz Kod Neden Önemlidir?

  Takımlar temiz kod ilkelerine uyduğunda, kod tabanı okunması ve gezinmesi daha kolay hale gelir; bu da geliştiricilerin hızlıca başlaması ve katkıda bulunmaya başlaması için daha kısa bir zaman gerektirir. Temiz kodun gerekli olmasının nedenlerini burada bulabilirsiniz:

  **Okunabilirlik ve bakım:** Temiz kod netliği önceliklendirir, bu da kodun okunmasını, anlaşılmasını ve değiştirilmesini kolaylaştırır. Okunaklı kod yazmak, kodun işlevselliğini anlamak için gereken süreyi azaltır ve bu da daha hızlı geliştirme sürelerine yol açar.

  **Takım işbirliği:** Açık ve tutarlı kod, ekip üyeleri arasındaki iletişim ve işbirliğini kolaylaştırır. Yerleşik kodlama standartlarına uyarak ve okunaklı kod yazarak, geliştiriciler birbirlerinin çalışmalarını kolayca anlayabilir ve daha etkili bir şekilde işbirliği yapabilirler.

  **Hata ayıklama ve sorun çözümü:** Temiz kod netlik ve basitlikle tasarlanmış olup, kod tabanının belirli bölümlerini bulup anlamayı kolaylaştırır. Açık yapı, anlamlı değişken adları ve iyi tanımlanmış fonksiyonlar, sorunları belirlemeyi ve çözmeyi kolaylaştırır.

  **Geliştirilmiş kalite ve güvenilirlik:** Temiz kod, yerleşik kodlama standartlarına uyulmasını ve iyi yapılandırılmış kodun yazılmasını önceliklendirir. Bu, hata tanıtma riskini azaltır ve ileride daha yüksek kaliteli ve daha güvenilir yazılıma yol açar.

  Temiz kodun neden gerekli olduğunu anladığımıza göre, temiz kod yazmanıza yardımcı olacak bazı en iyi uygulamalar ve ilkeleri inceleyelim.

  ## Temiz Kod İlkeleri

  Güzel bir resim doğru temel ve fırça darbeleri gerektirir, iyi tasarlanmış kod de belirli ilkelere uyulmasını gerektirir. Bu ilkeler, geliştiricilerin açık, kısa ve sonuçta çalışması keyif veren kod yazmasına yardımcı olur.

  Hadi başlayalım.

  ### 1. Sabit Kodlu Numaraları Önleyin

  Sabit kodlu değerler yerine adlandırılmış sabitler kullanın. Amacını ifade eden anlamlı adlarla sabitler yazın. Bu, netliği artırır ve kodu değiştirmeyi kolaylaştırır.

  Örnek:

  Aşağıdaki örnek, %10 indirim temsil etmek için sabit kodlanmış sayı 0.1 kullanmaktadır. Bu, sayının anlamını anlamayı (bir yorum olmadan) ve fonksiyonun diğer bölümlerinde gerekirse indirim oranını ayarlamayı zorlaştırır.

  Önce:

  ```python
  def calculate_discount(price):  
    discount = price * 0.1 # 10% discount  
    return price - discount
  ```

  İyileştirilmiş kod, sabit kodlanmış numarayı adlandırılmış sabit TEN_PERCENT_DISCOUNT ile değiştirir. Ad, değerin anlamını anında ortaya koyar ve kodu kendi kendini belgeleyen hale getirir.

  Sonra:

  ```python
  def calculate_discount(price):  
    TEN_PERCENT_DISCOUNT = 0.1  
    discount = price * TEN_PERCENT_DISCOUNT  
    return price - discount
  ```

  Ayrıca, indirim oranının değiştirilmesi gerekirse, sadece sabit deklarasyonunu değiştirmek yeterlidir; sabit kodlanmış numaranın birden fazla örneğini aramaya gerek yoktur.

  ### 2. Anlamlı ve Açıklayıcı Adlar Kullanın

  Değişkenler, fonksiyonlar ve sınıflar için amaçlarını ve davranışlarını yansıtan adlar seçin. Bu, kodu kendi kendini belgeleyen hale getirir ve kapsamlı yorumlar olmadan anlaşılmasını kolaylaştırır. Robert Martin'in deyişi ile, "Bir ad neden var olduğunu, ne yaptığını ve nasıl kullanıldığını söylemelidir. Bir ad bir yorum gerektiriyorsa, ad niyetini ifade etmemiş demektir."

  Örnek:

  Önceki örnekteki kodu alırsak, "fiyat" ve "indirim" gibi genel adlar kullanır, bu da amacını belirsiz bırakır. "Fiyat" ve "indirim" gibi adlar bağlam olmadan farklı şekilde yorumlanabilir.

  Önce:

  ```python
  def calculate_discount(price):  
    TEN_PERCENT_DISCOUNT = 0.1  
    discount = price * TEN_PERCENT_DISCOUNT  
    return price - discount
  ```

  Bunun yerine, değişkenleri daha açıklayıcı olacak şekilde bildirebilirsiniz.

  Sonra:

  ```python
  def calculate_discount(product_price):  
    TEN_PERCENT_DISCOUNT = 0.1  
    discount_amount = product_price * TEN_PERCENT_DISCOUNT  
    return product_price - discount_amount
  ```

  Bu iyileştirilmiş kod, "product_price" ve "discount_amount" gibi spesifik adlar kullanarak, değişkenlerin neyi temsil ettiğinin ve bunları nasıl kullandığımızın daha net bir şekilde anlaşılmasını sağlar.

  ### 3. Yorumları İçinde Tutun ve Yaptığınız Zaman Anlamlı Yapın

  Bariz şeylere yorum yazmaya gerek yoktur. Aşırı veya belirsiz yorumlar, kod tabanını dağıtabilir ve eskiyebilir, bu da kafa karışıklığına ve düzensiz bir kod tabanına yol açabilir.

  Örnek:

  Önce:

  ```python
  def group_users_by_id(user_id):  
    # This function groups users by id  
    # ... complex logic ...  
    # ... more code …
  ```

  Fonksiyon hakkındaki yorum gereksizdir ve hiçbir değer katmaz. Fonksiyon adı zaten kullanıcıları id'ye göre gruplandırdığını belirtir; aynısını belirten bir yorum yapılmasına gerek yoktur.

  Bunun yerine, belirli eylemlerin arkasındaki "neden"i iletmek veya davranışları açıklamak için yorumları kullanın.

  Sonra:

  ```python
  def group_users_by_id(user_id):  
    """Groups users by id to a specific category (1-9).  
    Warning: Certain characters might not be handled correctly.  
    Please refer to the documentation for supported formats.  
    Args:    
      user_id (str): The user id to be grouped.  
    Returns:    
      int: The category number (1-9) corresponding to the user id.  
    Raises:    
      ValueError: If the user id is invalid or unsupported.  
    """  
    # ... complex logic ...  
    # ... more code …
  ```

  Bu yorum, fonksiyonun davranışı hakkında anlamlı bilgiler sağlar ve olağandışı davranışı ve potansiyel tuzakları açıklar.

  ### 4. Sadece Bir Şey Yapan Kısa Fonksiyonlar Yazın

  Tek sorumluluk ilkesini (SRP) izleyin, bu da bir fonksiyonun bir amacı olması ve onu etkili bir şekilde yerine getirmesi anlamına gelir. Fonksiyonlar, yalnızca bir işe sahip olduğunda daha anlaşılabilir, okunaklı ve bakımlanabilir olur. Ayrıca bunları test etmeyi çok kolay hale getirir. Bir fonksiyon çok uzun veya karmaşık hale gelirse, onu daha küçük, daha yönetilebilir fonksiyonlara bölmeyi düşünün.

  Örnek:

  Önce:

  ```python
  def process_data(data):  
    # ... validate users...  
    # ... calculate values ...  
    # ... format output …
  ```

  Bu fonksiyon üç görev gerçekleştirir: kullanıcıları doğrulama, değerleri hesaplama ve çıktıyı biçimlendirme. Bu adımlardan herhangi biri başarısız olursa, fonksiyonun tamamı başarısız olur; bu da hata ayıklamayı karmaşık bir konu haline getirir. Görevlerden birinin mantığını değiştirmemiz gerekirse, başka bir görevde istenmeden yan etkileri tanıtma riskimiz var.

  Bunun yerine, her göreve sadece bir şey yapan bir fonksiyon atamaya çalışın.

  Sonra:

  ```python
  def validate_user(data):  
    # ... data validation logic ...

  def calculate_values(data):  
    # ... calculation logic based on validated data ...

  def format_output(data):  
    # ... format results for display …
  ```

  İyileştirilmiş kod, görevleri ayrı fonksiyonlara böler. Bu, daha okunaklı, bakımlanabilir ve test edilebilir koda yol açar. Ayrıca, bir değişiklik yapılması gerekirse, istediğiniz işlevsellikten sorumlu olan belirli fonksiyonu tanımlaması ve değiştirmesi daha kolay olacaktır.

  ### 5. DRY (Kendinizi Tekrarlamayın) İlkesini İzleyin ve Kodu veya Mantığı Çoğaltmaktan Kaçının

  Aynı kodu birden fazla yazılmasından kaçının. Bunun yerine, fonksiyonları, sınıfları, modülleri, kütüphaneleri veya diğer soyutlamaları kullanarak kodunuzu yeniden kullanın. Bu, kodunuzu daha verimli, tutarlı ve bakımlanabilir hale getirir. Ayrıca, onu değiştirmeniz veya güncellemeniz gerekirse kodu sadece bir yerde değiştirmeniz gerekeceği için hata ve bug riski azaltır.

  Örnek:

  Önce:

  ```python
  def calculate_book_price(quantity, price):  
    return quantity * price

  def calculate_laptop_price(quantity, price):  
    return quantity * price
  ```

  Yukarıdaki örnekte, her iki fonksiyon da aynı formülü kullanarak toplam fiyatı hesaplar. Bu, DRY ilkesini ihlal eder.

  Kitaplar ve dizüstü bilgisayarlar için kullandığımız bir `calculate_product_price` fonksiyonu tanımlayarak bunu düzeltebiliriz. Bu, kod çoğaltmasını azaltır ve kod tabanının bakımını iyileştirmeye yardımcı olur.

  Sonra:

  ```python
  def calculate_product_price(product_quantity, product_price):  
    return product_quantity * product_price
  ```

  ### 6. Yerleşik Kod Yazma Standartlarını İzleyin

  Programlama dilinizin aralık, yorumlar ve adlandırma açısından kurallarını bilin. Çoğu programlama dilinin topluluk tarafından kabul edilen kodlama standartları ve stil kılavuzları vardır; örneğin, Python için PEP 8 ve JavaScript için Google JavaScript Stil Kılavuzu.

  İşte bazı spesifik örnekler:

  **Java:**
  Değişken, fonksiyon ve sınıf adları için camelCase kullanın.
  Kodu dört boşlukla girintileyin.
  Açılış parantezlerini aynı satıra koyun.

  **Python:**
  Değişken, fonksiyon ve sınıf adları için snake_case kullanın.
  Girintileme için sekmelerin üzerine boşlukları kullanın.
  Açılış parantezlerini fonksiyon veya sınıf bildirimi ile aynı satıra koyun.

  **JavaScript:**
  Değişken ve fonksiyon adları için camelCase kullanın.
  Nesne özellikleri için snake_case kullanın.
  Kodu iki boşlukla girintileyin.
  Açılış parantezlerini fonksiyon veya sınıf bildirimi ile aynı satıra koyun.

  Ayrıca, kuruluşunuz için dahili kodlama kuralları oluşturarak bu standartları genişletmeyi düşünün. Bu, klasörleri oluşturma ve adlandırma veya kuruluşunuzdaki fonksiyon adlarını açıklama hakkında bilgiler içerebilir.

  ### 7. İç İçe Geçmiş Koşulları Fonksiyonlara Kapsülleyin

  Fonksiyonları iyileştirmenin ve netlik sağlamanın bir yolu, iç içe geçmiş if/else ifadelerini başka fonksiyonlara kapsüllemektir. Bu tür mantığı açıklayıcı bir ada sahip bir fonksiyona kapsüllemek, amacını netleştirir ve kodu anlamayı basitleştirir. Bazı durumlarda, mantığı yeniden kullanmayı, değiştirmeyi ve test etmeyi de kolaylaştırır ve fonksiyonun geri kalanını etkilemez.

  Aşağıdaki kod örneğinde, indirim mantığı `calculate_product_discount` fonksiyonu içinde iç içe geçmiştir, bu da bunu bir bakışta anlamayı zorlaştırır.

  Örnek:

  Önce:

  ```python
  def calculate_product_discount(product_price):  
    discount_amount = 0  
    if product_price > 100:  
      discount_amount = product_price * 0.1  
    elif price > 50:  
      discount_amount = product_price * 0.05  
    else:  
      discount_amount = 0  
    final_product_price = product_price - discount_amount  
    return final_product_price
  ```

  Bu kodu, indirim mantığını hesaplayan iç içe geçmiş if/else koşulunu `get_discount_rate` adlı başka bir fonksiyona bölerek ve daha sonra `calculate_product_discount` fonksiyonunda `get_discount_rate`'i çağırarak temizleyebiliriz. Bu, bunu bir bakışta okumayı kolaylaştırır. `get_discount_rate` artık izole edilmiştir ve kod tabanındaki diğer fonksiyonlar tarafından yeniden kullanılabilir. Ayrıca, `calculate_discount` fonksiyonunu etkilemeden değiştirmesi, test etmesi ve hata ayıklaması da daha kolaydır.

  Sonra:

  ```python
  def calculate_discount(product_price):  
    discount_rate = get_discount_rate(product_price)  
    discount_amount = product_price * discount_rate  
    final_product_price = product_price - discount_amount  
    return final_product_price

  def get_discount_rate(product_price):  
    if product_price > 100:  
      return 0.1  
    elif product_price > 50:  
      return 0.05  
    else:  
      return 0
  ```

  ### 8. Sürekli Refactor Edin

  Yapısını, okunabilirliğini ve bakımlanabilirliğini geliştirmek için kodunuzu düzenli olarak gözden geçirin ve refactor edin. Üzerinde çalışacak bir sonraki kişi için kodunuzun okunabilirliğini düşünün ve her zaman kod tabanını bulduğunuzdan daha temiz bırakın.

  ### 9. Sürüm Kontrolü Kullanın

  Sürüm kontrol sistemleri, kod tabanınızda yapılan her değişikliği titizlikle takip eder; kodunuzun evrimini anlamanıza ve gerekirse önceki sürümlere dönmenize olanak tanır. Bu, kod refactoring için bir güvenlik ağı oluşturur ve yanlışlıkla yapılan silmeleri veya üzerine yazmaları önler. GitHub, GitLab ve Bitbucket gibi sürüm kontrol sistemlerini kullanarak kod tabanınızdaki değişiklikleri takip edin ve başkalarıyla etkili bir şekilde işbirliği yapın.
---

Writing code is like giving a speech. If you use too many big words, you confuse your audience. Define every word, and you end up putting your audience to sleep. Similarly, when you write code, you shouldn't just focus on making it work. You should also aim to make it readable, understandable, and maintainable for future readers. To paraphrase software engineer Martin Fowler, "Anybody can write code that a computer can understand. Good programmers write code that humans can understand."

As software developers, understanding how to write clean code that is functional, easy to read, and adheres to best practices helps you create better software consistently.

This article discusses what clean code is and why it's essential and provides principles and best practices for writing clean and maintainable code.

What Is Clean Code?

Clean code is a term used to refer to code that is easy to read, understand, and maintain. It was made popular by Robert Cecil Martin, also known as Uncle Bob, who wrote "Clean Code: A Handbook of Agile Software Craftsmanship" in 2008. In this book, he presented a set of principles and best practices for writing clean code, such as using meaningful names, short functions, clear comments, and consistent formatting.

Ultimately, the goal of clean code is to create software that is not only functional but also readable, maintainable, and efficient throughout its lifecycle.

Why Is Clean Code Important?

When teams adhere to clean code principles, the code base is easier to read and navigate, which makes it faster for developers to get up to speed and start contributing. Here are some reasons why clean code is essential.

Readability and maintenance: Clean code prioritizes clarity, which makes reading, understanding, and modifying code easier. Writing readable code reduces the time required to grasp the code's functionality, leading to faster development times.

Team collaboration: Clear and consistent code facilitates communication and cooperation among team members. By adhering to established coding standards and writing readable code, developers easily understand each other's work and collaborate more effectively.

Debugging and issue resolution: Clean code is designed with clarity and simplicity, making it easier to locate and understand specific sections of the codebase. Clear structure, meaningful variable names, and well-defined functions make it easier to identify and resolve issues.

Improved quality and reliability: Clean code prioritizes following established coding standards and writing well-structured code. This reduces the risk of introducing errors, leading to higher-quality and more reliable software down the line.

Now that we understand why clean code is essential, let's delve into some best practices and principles to help you write clean code.

Principles of Clean Code

Like a beautiful painting needs the right foundation and brushstrokes, well-crafted code requires adherence to specific principles. These principles help developers write code that is clear, concise, and, ultimately, a joy to work with.

Let's dive in.

1. Avoid Hard-Coded Numbers

Use named constants instead of hard-coded values. Write constants with meaningful names that convey their purpose. This improves clarity and makes it easier to modify the code.

Example:

The example below uses the hard-coded number 0.1 to represent a 10% discount. This makes it difficult to understand the meaning of the number (without a comment) and adjust the discount rate if needed in other parts of the function.

Before:

def calculate_discount(price):  
  discount = price * 0.1 # 10% discount  
  return price - discount

The improved code replaces the hard-coded number with a named constant TEN_PERCENT_DISCOUNT. The name instantly conveys the meaning of the value, making the code more self-documenting.

After:

def calculate_discount(price):  
  TEN_PERCENT_DISCOUNT = 0.1  
  discount = price * TEN_PERCENT_DISCOUNT  
  return price - discount

Also, If the discount rate needs to be changed, it only requires modifying the constant declaration, not searching for multiple instances of the hard-coded number.

2. Use Meaningful and Descriptive Names

Choose names for variables, functions, and classes that reflect their purpose and behavior. This makes the code self-documenting and easier to understand without extensive comments. As Robert Martin puts it, “A name should tell you why it exists, what it does, and how it is used. If a name requires a comment, then the name does not reveal its intent.”

Example:

If we take the code from the previous example, it uses generic names like "price" and "discount," which leaves their purpose ambiguous. Names like "price" and "discount" could be interpreted differently without context.

Before:

def calculate_discount(price):  
  TEN_PERCENT_DISCOUNT = 0.1  
  discount = price * TEN_PERCENT_DISCOUNT  
  return price - discount

Instead, you can declare the variables to be more descriptive.

After:

def calculate_discount(product_price):  
  TEN_PERCENT_DISCOUNT = 0.1  
  discount_amount = product_price * TEN_PERCENT_DISCOUNT  
  return product_price - discount_amount

This improved code uses specific names like "product_price" and "discount_amount," providing a clearer understanding of what the variables represent and how we use them.

3. Use Comments Sparingly, and When You Do, Make Them Meaningful

You don't need to comment on obvious things. Excessive or unclear comments can clutter the codebase and become outdated, leading to confusion and a messy codebase.

Example:

Before:

def group_users_by_id(user_id):  
  # This function groups users by id  
  # ... complex logic ...  
  # ... more code …

The comment about the function is redundant and adds no value. The function name already states that it groups users by id; there's no need for a comment stating the same.

Instead, use comments to convey the "why" behind specific actions or explain behaviors.

After:

def group_users_by_id(user_id):  
  """Groups users by id to a specific category (1-9).  
  Warning: Certain characters might not be handled correctly.  
  Please refer to the documentation for supported formats.  
  Args:    
    user_id (str): The user id to be grouped.  
  Returns:    
    int: The category number (1-9) corresponding to the user id.  
  Raises:    
    ValueError: If the user id is invalid or unsupported.  
  """  
  # ... complex logic ...  
  # ... more code …

This comment provides meaningful information about the function's behavior and explains unusual behavior and potential pitfalls.

4. Write Short Functions That Only Do One Thing

Follow the single responsibility principle (SRP), which means that a function should have one purpose and perform it effectively. Functions are more understandable, readable, and maintainable if they only have one job. It also makes testing them very easy. If a function becomes too long or complex, consider breaking it into smaller, more manageable functions.

Example:

Before:

def process_data(data):  
  # ... validate users...  
  # ... calculate values ...  
  # ... format output …

This function performs three tasks: validating users, calculating values, and formatting output. If any of these steps fail, the entire function fails, making debugging a complex issue. If we also need to change the logic of one of the tasks, we risk introducing unintended side effects in another task.

Instead, try to assign each task a function that does just one thing.

After:

def validate_user(data):  
  # ... data validation logic ...

def calculate_values(data):  
  # ... calculation logic based on validated data ...

def format_output(data):  
  # ... format results for display …

The improved code separates the tasks into distinct functions. This results in more readable, maintainable, and testable code. Also, If a change needs to be made, it will be easier to identify and modify the specific function responsible for the desired functionality.

5. Follow the DRY (Don't Repeat Yourself) Principle and Avoid Duplicating Code or Logic

Avoid writing the same code more than once. Instead, reuse your code using functions, classes, modules, libraries, or other abstractions. This makes your code more efficient, consistent, and maintainable. It also reduces the risk of errors and bugs as you only need to modify your code in one place if you need to change or update it.

Example:

Before:

def calculate_book_price(quantity, price):  
  return quantity * price

def calculate_laptop_price(quantity, price):  
  return quantity * price

In the above example, both functions calculate the total price using the same formula. This violates the DRY principle.

We can fix this by defining a single calculate_product_price function that we use for books and laptops. This reduces code duplication and helps improve the maintenance of the codebase.

After:

def calculate_product_price(product_quantity, product_price):  
  return product_quantity * product_price

6. Follow Established Code-Writing Standards

Know your programming language's conventions in terms of spacing, comments, and naming. Most programming languages have community-accepted coding standards and style guides, for example, PEP 8 for Python and Google JavaScript Style Guide for JavaScript.

Here are some specific examples:

Java:
Use camelCase for variable, function, and class names.
Indent code with four spaces.
Put opening braces on the same line.

Python:
Use snake_case for variable, function, and class names.
Use spaces over tabs for indentation.
Put opening braces on the same line as the function or class declaration.

JavaScript:
Use camelCase for variable and function names.
Use snake_case for object properties.
Indent code with two spaces.
Put opening braces on the same line as the function or class declaration.

Also, consider extending some of these standards by creating internal coding rules for your organization. This can contain information on creating and naming folders or describing function names within your organization.

7. Encapsulate Nested Conditionals into Functions

One way to improve the readability and clarity of functions is to encapsulate nested if/else statements into other functions. Encapsulating such logic into a function with a descriptive name clarifies its purpose and simplifies code comprehension. In some cases, it also makes it easier to reuse, modify, and test the logic without affecting the rest of the function.

In the code sample below, the discount logic is nested within the calculate_product_discount function, making it difficult to understand at a glance.

Example:

Before:

def calculate_product_discount(product_price):  
  discount_amount = 0  
  if product_price > 100:  
    discount_amount = product_price * 0.1  
  elif price > 50:  
    discount_amount = product_price * 0.05  
  else:  
    discount_amount = 0  
  final_product_price = product_price - discount_amount  
  return final_product_price

We can clean this code up by separating the nested if/else condition that calculates discount logic into another function called get_discount_rate and then calling the get_discount_rate in the calculate_product_discount function. This makes it easier to read at a glance. The get_discount_rate is now isolated and can be reused by other functions in the codebase. It’s also easier to change, test, and debug it without affecting the calculate_discount function.

After:

def calculate_discount(product_price):  
  discount_rate = get_discount_rate(product_price)  
  discount_amount = product_price * discount_rate  
  final_product_price = product_price - discount_amount  
  return final_product_price

def get_discount_rate(product_price):  
  if product_price > 100:  
    return 0.1  
  elif product_price > 50:  
    return 0.05  
  else:  
    return 0

8. Refactor Continuously

Regularly review and refactor your code to improve its structure, readability, and maintainability. Consider the readability of your code for the next person who will work on it, and always leave the codebase cleaner than you found it.

9. Use Version Control

Version control systems meticulously track every change made to your codebase, enabling you to understand the evolution of your code and revert to previous versions if needed. This creates a safety net for code refactoring and prevents accidental deletions or overwrites. Use version control systems like GitHub, GitLab, and Bitbucket to track changes to your codebase and collaborate effectively with others.
