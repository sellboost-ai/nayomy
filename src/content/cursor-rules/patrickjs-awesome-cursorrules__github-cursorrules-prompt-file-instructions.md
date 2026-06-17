---
name: "github-cursorrules-prompt-file-instructions"
clean_name: "Github Cursorrules Prompt File Instructions"
description: "Cursor rules for GitHub development with instructions integration."
description_tr: "GitHub geliştirmesi için Cursor kuralları ve talimatlar entegrasyonu."
category: "Other"
repo: "PatrickJS/awesome-cursorrules"
stars: 40010
path: "rules/github-cursorrules-prompt-file-instructions.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/github-cursorrules-prompt-file-instructions.mdc"
body_length: 12704
file_extension: ".mdc"
body_tr: |-
  # Temiz Kod Yazmanın İlkeleri ve En İyi Uygulamaları

  Kod yazmak konuşma yapmak gibidir. Çok fazla büyük sözcük kullanırsanız, dinleyicilerinizi kafası karışır. Her sözcüğü tanımlarsanız, dinleyicilerinizi uyutur. Benzer şekilde, kod yazarken sadece çalışmasına odaklanmamalısınız. Aynı zamanda onu gelecekteki okuyucular için okunabilir, anlaşılabilir ve bakımı yapılabilir hale getirmeyi amaçlamalısınız. Yazılım mühendisi Martin Fowler'ı parafraza etmek gerekirse, "Herkes bir bilgisayarın anlayabileceği kod yazabilir. İyi programcılar insanların anlayabileceği kod yazarlar."

  Yazılım geliştirici olarak, işlevsel, okunması kolay ve en iyi uygulamalara uygun temiz kod yazmanın nasıl yapılacağını anlamak, tutarlı şekilde daha iyi yazılım oluşturmanıza yardımcı olur.

  Bu makale, temiz kodun ne olduğunu ve neden gerekli olduğunu açıklar ve temiz ve bakımı yapılabilir kod yazmayla ilgili ilkeler ve en iyi uygulamaları sunmaktadır.

  ## Temiz Kod Nedir?

  Temiz kod, okunması kolay, anlaşılması kolay ve bakımı yapılabilir kod anlamına gelmek için kullanılan bir terimdir. Bunu, 2008 yılında "Clean Code: A Handbook of Agile Software Craftsmanship" (Temiz Kod: Çevik Yazılım Zanaatkarlığı El Kitabı) adlı kitabı yazan Robert Cecil Martin (Uncle Bob olarak da bilinir) popüler hale getirmiştir. Bu kitapta, anlamlı adlar kullanmak, kısa fonksiyonlar, net açıklamalar ve tutarlı biçimlendirme gibi temiz kod yazmayla ilgili bir dizi ilke ve en iyi uygulamayı sunmuştur.

  Sonuç olarak, temiz kodun amacı, yalnızca işlevsel değil, aynı zamanda yaşam döngüsü boyunca okunabilir, bakımı yapılabilir ve etkili olan yazılım oluşturmaktır.

  ## Temiz Kod Neden Önemlidir?

  Takımlar temiz kod ilkelerine uyduğunda, kod tabanı okunması ve gezinmesi daha kolay olur, bu da geliştiricilerin hızlı bir şekilde başlamasını ve katkı sağlamaya başlamasını hızlandırır. Temiz kodun neden gerekli olduğunun bazı nedenleri aşağıda verilmiştir.

  **Okunabilirlik ve bakım:** Temiz kod, net olmayı öncelik kılar, bu da kodu okumayı, anlamayı ve değiştirmeyi kolaylaştırır. Okunabilir kod yazması, kodun işlevselliğini anlamak için gereken zamanı azaltır ve bu da daha hızlı geliştirme sürelerine yol açar.

  **Takım işbirliği:** Net ve tutarlı kod, takım üyeleri arasındaki iletişim ve işbirliğini kolaylaştırır. Belirlenmiş kodlama standartlarına uyarak ve okunabilir kod yazarak, geliştiriciler birbirlerinin çalışmalarını kolayca anlayabilir ve daha etkili bir şekilde işbirliği yapabilirler.

  **Hata ayıklama ve sorun çözme:** Temiz kod, netlik ve basitlik göz önünde bulundurularak tasarlanmıştır, bu da kod tabanının belirli bölümlerini bulup anlamayı kolaylaştırır. Net yapı, anlamlı değişken adları ve iyi tanımlanmış fonksiyonlar, sorunları belirlemeyi ve çözmeyi kolaylaştırır.

  **Geliştirilmiş kalite ve güvenilirlik:** Temiz kod, belirlenmiş kodlama standartlarını izlemeyi ve iyi yapılandırılmış kod yazmayı öncelik kılar. Bu, hata bulunma riskini azaltır ve uzun vadede daha yüksek kaliteli ve daha güvenilir yazılıma yol açar.

  Artık temiz kodun neden gerekli olduğunu anladığımıza göre, temiz kod yazmanıza yardımcı olacak bazı en iyi uygulamaları ve ilkeleri inceleyelim.

  ## Temiz Kod İlkeleri

  Güzel bir resim doğru temel ve fırça darbeleri gerektirdiği gibi, iyi tasarlanmış kod da belirli ilkelere uyumlu olmayı gerektirir. Bu ilkeler, geliştiricilerin net, özlü ve sonuçta, birlikte çalışmaktan zevk alan kod yazmasına yardımcı olur.

  Başlayalım.

  ### 1. Sabit Kodlanmış Sayılardan Kaçının

  Sabit kodlanmış değerler yerine adlandırılmış sabitler kullanın. Sabitler, amacını açık şekilde ifade eden anlamlı adlarla yazın. Bu, netliği artırır ve kodun değiştirilmesini kolaylaştırır.

  **Örnek:**

  Aşağıdaki örnek, %10 indirim temsil etmek için sabit kodlanmış sayı 0.1 kullanır. Bu, sayının anlamını anlamayı (bir yorum olmadan) ve fonksiyonun diğer bölümlerinde gerekirse indirim oranını ayarlamayı zorlaştırır.

  **Öncesi:**

  ```
  def calculate_discount(price):  
    discount = price * 0.1 # 10% discount  
    return price - discount
  ```

  İyileştirilmiş kod, sabit kodlanmış sayıyı TEN_PERCENT_DISCOUNT adında adlandırılmış bir sabit ile değiştirir. Ad, değerin anlamını anında ifade eder, kodu kendini açıklayan hale getirir.

  **Sonrası:**

  ```
  def calculate_discount(price):  
    TEN_PERCENT_DISCOUNT = 0.1  
    discount = price * TEN_PERCENT_DISCOUNT  
    return price - discount
  ```

  Ayrıca, indirim oranının değiştirilmesi gerekirse, yalnızca sabit bildirimi değiştirilmesine ihtiyaç vardır, sabit kodlanmış sayının birden çok örneğini aramaya gerek yoktur.

  ### 2. Anlamlı ve Açıklayıcı Adlar Kullanın

  Değişkenler, fonksiyonlar ve sınıflar için adlarını seçin ve amacını ve davranışını yansıtan adlar seçin. Bu, kodu kendini açıklayan hale getirir ve kapsamlı açıklamalar olmadan anlaşılmasını kolaylaştırır. Robert Martin'in deyişi ile, "Bir ad, neden var olduğunu, ne yaptığını ve nasıl kullanıldığını söylemeli. Bir ad bir açıklama gerektirirse, o ad amacını ortaya koymaz."

  **Örnek:**

  Önceki örneğin kodunu alırsak, "price" ve "discount" gibi genel adlar kullanır, bu da amacını belirsiz bırakır. "price" ve "discount" gibi adlar, bağlam olmadan farklı şekilde yorumlanabilir.

  **Öncesi:**

  ```
  def calculate_discount(price):  
    TEN_PERCENT_DISCOUNT = 0.1  
    discount = price * TEN_PERCENT_DISCOUNT  
    return price - discount
  ```

  Bunun yerine, değişkenleri daha açıklayıcı olacak şekilde bildirebilirsiniz.

  **Sonrası:**

  ```
  def calculate_discount(product_price):  
    TEN_PERCENT_DISCOUNT = 0.1  
    discount_amount = product_price * TEN_PERCENT_DISCOUNT  
    return product_price - discount_amount
  ```

  Bu iyileştirilmiş kod, "product_price" ve "discount_amount" gibi belirli adlar kullanarak, değişkenlerin ne temsil ettiğini ve bunları nasıl kullandığımızı daha net şekilde anlamaya imkan tanır.

  ### 3. Açıklamaları Dikkatle Kullanın ve Kullandığınız Zaman Anlamlı Kılın

  Açıkça görünen şeyleri açıklamanıza gerek yoktur. Aşırı veya net olmayan açıklamalar, kod tabanını karıştırabilir ve güncelliğini yitirebilir, bu da karışıklığa ve karmaşık bir kod tabanına yol açabilir.

  **Örnek:**

  **Öncesi:**

  ```
  def group_users_by_id(user_id):  
    # This function groups users by id  
    # ... complex logic ...  
    # ... more code …
  ```

  Fonksiyon hakkındaki açıklama gereksiz ve hiçbir değer eklemez. Fonksiyon adı zaten kullanıcıları id'ye göre grupladığını belirtir; aynı şeyi söyleyen bir açıklamaya gerek yoktur.

  Bunun yerine, belirli eylemlerin arkasındaki "neden"i açıklamak veya davranışları açıklamak için açıklamaları kullanın.

  **Sonrası:**

  ```
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

  Bu açıklama, fonksiyonun davranışı hakkında anlamlı bilgi sağlar ve alışılmadık davranışları ve olası sorunları açıklar.

  ### 4. Tek İşi Yapan Kısa Fonksiyonlar Yazın

  Tek sorumluluk ilkesini (SRP) izleyin, bu da bir fonksiyonun tek bir amacı olması ve bunu etkili bir şekilde gerçekleştirmesi gerektiğini söyler. Fonksiyonlar yalnızca bir işi varsa daha anlaşılabilir, okunabilir ve bakımı yapılabilir. Ayrıca onları test etmeyi çok kolaylaştırır. Bir fonksiyon çok uzun veya karmaşık hale gelirse, onu daha küçük, yönetilebilir fonksiyonlara bölmeyi düşünün.

  **Örnek:**

  **Öncesi:**

  ```
  def process_data(data):  
    # ... validate users...  
    # ... calculate values ...  
    # ... format output …
  ```

  Bu fonksiyon üç görev gerçekleştirir: kullanıcıları doğrulama, değerleri hesaplama ve çıktıyı biçimlendirme. Bu adımlardan herhangi biri başarısız olursa, tüm fonksiyon başarısız olur, bu da hata ayıklamayı karmaşık bir sorun haline getirir. Ayrıca görevlerden birinin mantığını değiştirmemiz gerekirse, başka bir görevde istenmeyen yan etkilere neden olma riskimiz vardır.

  Bunun yerine, her göreve yalnızca bir şey yapan bir fonksiyon atamaya çalışın.

  **Sonrası:**

  ```
  def validate_user(data):  
    # ... data validation logic ...

  def calculate_values(data):  
    # ... calculation logic based on validated data ...

  def format_output(data):  
    # ... format results for display …
  ```

  İyileştirilmiş kod, görevleri ayrı fonksiyonlara ayırır. Bu, daha okunabilir, bakımı yapılabilir ve test edilebilir kod ile sonuçlanır. Ayrıca, bir değişiklik yapılması gerekirse, istenen işlevsellikten sorumlu belirli fonksiyonu belirlemeyi ve değiştirmeyi daha kolay olacaktır.

  ### 5. DRY (Kendinizi Tekrarlamayın) İlkesini İzleyin ve Kod veya Mantığı Çoğaltmaktan Kaçının

  Aynı kodu birden fazla kez yazmaktan kaçının. Bunun yerine, fonksiyonlar, sınıflar, modüller, kütüphaneler veya diğer soyutlamalar kullanarak kodunuzu yeniden kullanın. Bu, kodunuzu daha verimli, tutarlı ve bakımı yapılabilir hale getirir. Ayrıca, kodunu değiştirmeniz veya güncellemeniz gerekirse, sadece bir yerde değiştirmeniz gerektiğinden hata ve bug riski azalır.

  **Örnek:**

  **Öncesi:**

  ```
  def calculate_book_price(quantity, price):  
    return quantity * price

  def calculate_laptop_price(quantity, price):  
    return quantity * price
  ```

  Yukarıdaki örnekte, her iki fonksiyon da aynı formülü kullanarak toplam fiyatı hesaplar. Bu, DRY ilkesini ihlal eder.

  Bunu, kitaplar ve dizüstü bilgisayarlar için kullandığımız tek bir calculate_product_price fonksiyonu tanımlayarak düzeltebiliyoruz. Bu, kod tekrarını azaltır ve kod tabanının bakımını geliştirmeye yardımcı olur.

  **Sonrası:**

  ```
  def calculate_product_price(product_quantity, product_price):  
    return product_quantity * product_price
  ```

  ### 6. Belirlenmiş Kod Yazma Standartlarını İzleyin

  Programlama dilinizin boşluk, açıklama ve adlandırma açısından konvansiyonlarını öğrenin. Çoğu programlama dilinin topluluk tarafından kabul edilen kodlama standartları ve stil kılavuzları vardır, örneğin Python için PEP 8 ve JavaScript için Google JavaScript Style Guide.

  İşte bazı belirli örnekler:

  **Java:**
  - Değişken, fonksiyon ve sınıf adları için camelCase kullanın.
  - Kodu dört boşlukla girintileyin.
  - Açılış küme parantezlerini aynı satıra koyun.

  **Python:**
  - Değişken, fonksiyon ve sınıf adları için snake_case kullanın.
  - Girintilemek için sekmeler yerine boşluklar kullanın.
  - Açılış küme parantezlerini fonksiyon veya sınıf bildiriminin aynı satırına koyun.

  **JavaScript:**
  - Değişken ve fonksiyon adları için camelCase kullanın.
  - Nesne özellikleri için snake_case kullanın.
  - Kodu iki boşlukla girintileyin.
  - Açılış küme parantezlerini fonksiyon veya sınıf bildiriminin aynı satırına koyun.

  Ayrıca, kuruluşunuz için dahili kodlama kuralları oluşturarak bu standartlardan bazılarını genişletmeyi düşünün. Bu, kuruluşunuzda klasörleri oluşturmayı ve adlandırmayı veya fonksiyon adlarını açıklamayı hakkındaki bilgileri içerebilir.

  ### 7. İç İçe Koşulları Fonksiyonlara Kapsülleyin

  Fonksiyonların okunabilirliğini ve netliğini geliştirmenin bir yolu, iç içe if/else deyimlerini diğer fonksiyonlara kapsüllemektir. Bu tür mantığı açıklayıcı bir ada sahip bir fonksiyona kapsüllemek, amacını netleştirir ve kod kavramasını basitleştirir. Bazı durumlarda, mantığı fonksiyonun geri kalanını etkilemeden yeniden kullanmayı, değiştirmeyi ve test etmeyi de kolaylaştırır.

  Aşağıdaki kod örneğinde, indirim mantığı calculate_product_discount fonksiyonun içine iç içe yerleştirilmiştir, bu da onu bir bakışta anlamayı zorlaştırır.

  **Örnek:**

  **Öncesi:**

  ```
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

  Bu kodu, indirim mantığını hesaplayan iç içe if/else koşulunu get_discount_rate adlı başka bir fonksiyona ayırarak ve ardından get_discount_rate'i calculate_product_discount fonksiyonunda çağırarak temizleyebiliyoruz. Bu, bir bakışta okumayı kolaylaştırır. get_discount_rate artık yalıtılmış ve kod tabanındaki diğer fonksiyonlar tarafından yeniden kullanılabilir. Ayrıca, calculate_discount fonksiyonunu etkilemeden onu değiştirmek, test etmek ve hata ayıklamak daha kolaydır.

  **Sonrası:**

  ```
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

  Kodunuzu yapısını, okunabilirliğini ve bakımı yapılabilirliğini geliştirmek için düzenli olarak gözden geçirin ve refactor edin. Kodunuzun okunabilirliğini sonrasında üzerinde çalışacak olan kişi düşünerek değerlendirin ve her zaman kod tabanını bulduğunuzdan daha temiz bırakın.

  ### 9. Versiyon Kontrolü Kullanın

  Versiyon kontrol sistemleri, kod tabanınıza yapılan her değişikliği titizlikle takip eder, kodunuzun evrimini anlamanızı ve gerekirse önceki sürümlere dönmenizi sağlar. Bu, kod refaktörleme için bir güvenlik ağı oluşturur ve istemeden silmeyi veya üzerine yazmayı önler. Kod tabanınızdaki değişiklikleri izlemek ve diğerleriyle etkili bir şekilde işbirliği yapmak için GitHub, GitLab ve Bitbucket gibi versiyon kontrol sistemleri kullanın.
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
