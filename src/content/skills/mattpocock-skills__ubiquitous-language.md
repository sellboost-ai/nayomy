---
name: "ubiquitous-language"
description_en: "Extract a DDD-style ubiquitous language glossary from the current conversation, flagging ambiguities and proposing canonical terms. Saves to UBIQUITOUS_LANGUAGE.md. Use when user wants to define domain terms, build a glossary, harden terminology, create a ubiquitous language, or mentions \"domain model\" or \"DDD\"."
description_tr: "Mevcut konuşmadan DDD tarzında evrensel bir dil sözlüğü çıkarın, belirsizlikleri işaretleyin ve kanonik terimler önerilir. UBIQUITOUS_LANGUAGE.md dosyasına kaydedilir. Kullanıcı domain terimlerini tanımlamak, sözlük oluşturmak, terminolojiyi sağlamlaştırmak, evrensel dil oluşturmak veya \"domain model\" ya da \"DDD\" bahsettiğinde kullanın."
category: "Design"
repo: "mattpocock/skills"
stars: 140637
url: "https://github.com/mattpocock/skills/blob/HEAD/skills/deprecated/ubiquitous-language/SKILL.md"
path: "skills/deprecated/ubiquitous-language/SKILL.md"
is_collection: false
body_length: 4488
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Evrensel Dil
  
  Mevcut konuşmadan etki alanı terminolojisini çıkarın ve tutarlı bir sözlüğe dönüştürün, yerel bir dosyaya kaydedin.
  
  ## Süreç
  
  1. **Konuşmayı tarayın** etki alanıyla ilgili isimler, fiiller ve kavramlar için
  2. **Sorunları belirleyin**:
     - Aynı sözcük farklı kavramlar için kullanılıyor (belirsizlik)
     - Aynı kavram için farklı sözcükler kullanılıyor (eş anlamlılar)
     - Belirsiz veya aşırı yüklü terimler
  3. **Kanonik bir sözlük önerir** kararlaştırılmış terim seçimleriyle
  4. **`UBIQUITOUS_LANGUAGE.md`** dosyasına yazın çalışma dizininde, aşağıdaki biçimi kullanarak
  5. **Özet çıktısı verin** konuşmada satır içi olarak
  
  ## Çıktı Biçimi
  
  Bu yapıyla bir `UBIQUITOUS_LANGUAGE.md` dosyası yazın:
  
  ```md
  # Evrensel Dil
  
  ## Sipariş yaşam döngüsü
  
  | Terim        | Tanım                                                   | Kaçınılacak eş anlamlılar |
  | ----------- | ------------------------------------------------------- | --------------------- |
  | **Sipariş**   | Müşterinin bir veya daha fazla öğe satın almak için yaptığı talep      | Satın alma, işlem |
  | **Fatura** | Teslimat sonrasında müşteriye gönderilen ödeme talebi | Hesap, ödeme talebi |
  
  ## İnsanlar
  
  | Terim         | Tanım                                  | Kaçınılacak eş anlamlılar       |
  | ------------ | ------------------------------------------- | ---------------------- |
  | **Müşteri** | Sipariş veren kişi veya kuruluş    | İstemci, alıcı, hesap |
  | **Kullanıcı**     | Sistemdeki bir kimlik doğrulama kimliği    | Giriş, hesap         |
  
  ## İlişkiler
  
  - Bir **Fatura** tam olarak bir **Müşteri**ye aittir
  - Bir **Sipariş** bir veya daha fazla **Fatura** üretir
  
  ## Örnek diyalog
  
  > **Dev:** "Bir **Müşteri** bir **Sipariş** verdiğinde, **Fatura**yı hemen oluşturuyor muyuz?"
  > **Etki alanı uzmanı:** "Hayır — **Fatura** yalnızca bir **Yerine Getirme** onaylandıktan sonra oluşturulur. Tek bir **Sipariş** öğeler ayrı **Gönderi**lerde gönderildiyse birden fazla **Fatura** üretebilir."
  > **Dev:** "Yani bir **Gönderi** gönderilmeden önce iptal edilirse, onun için **Fatura** yok mu?"
  > **Etki alanı uzmanı:** "Tam olarak. **Fatura** yaşam döngüsü **Sipariş**e değil **Yerine Getirme**ye bağlıdır."
  
  ## İşaretli belirsizlikler
  
  - "hesap" hem **Müşteri** hem de **Kullanıcı** anlamında kullanıldı — bunlar farklı kavramlardır: **Müşteri** siparişler verirken, **Kullanıcı** bir **Müşteri**yi temsil edebilecek veya etmeyebilecek bir kimlik doğrulama kimliğidir.
  ```
  
  ## Kurallar
  
  - **Görüş belirtin.** Aynı kavram için birden fazla sözcük varsa, en iyisini seçin ve diğerlerini kaçınılacak eş anlamlılar olarak listeleyin.
  - **Çatışmaları açıkça işaretleyin.** Bir terim konuşmada belirsiz şekilde kullanılıyorsa, "İşaretli belirsizlikler" bölümünde açık bir önerilendirmeyle bunu vurgulayın.
  - **Yalnızca etki alanı uzmanları için ilgili terimleri ekleyin.** Modül veya sınıf adlarını atlayın; bunların etki alanı dilinde anlamı yoksa.
  - **Tanımları sıkı tutun.** Maksimum bir cümle. NE olduğunu tanımlayın, ne yaptığını değil.
  - **İlişkileri gösterin.** Kalın terim adlarını kullanın ve açık olduğunda kardinaliteyi ifade edin.
  - **Yalnızca etki alanı terimlerini ekleyin.** Genel programlama kavramlarını (dizi, fonksiyon, endpoint) atlayın; bunların etki alanına özgü anlamı yoksa.
  - **Doğal kümeler ortaya çıktığında terimleri birden fazla tabloya gruplandırın** (örn. alt etki alanı, yaşam döngüsü veya aktöre göre). Her grup kendi başlığını ve tablosunu alır. Tüm terimler tek bir uyumlu etki alanına aitse, bir tablo iyidir — yapay gruplandırmalar yapmayın.
  - **Bir örnek diyalog yazın.** Bir geliştirici ile bir etki alanı uzmanı arasında kısa bir konuşma (3-5 değişim) terimlerin nasıl doğal şekilde etkileşim kurduğunu gösterir. Diyalog ilişkili kavramlar arasındaki sınırları netleştirmeli ve terimlerin kesin şekilde kullanılmasını göstermelidir.
  
  <example>
  
  ## Örnek diyalog
  
  > **Dev:** "Docker olmadan **sync service** nasıl test edebilirim?"
  
  > **Etki alanı uzmanı:** "**Docker layer** yerine **filesystem layer** sağlayın. Aynı **Sandbox service** arayüzünü uygular ancak **sandbox** olarak yerel bir dizin kullanır."
  
  > **Dev:** "Yani **sync-in** yine bir **bundle** oluşturuyor ve onu açıyor mu?"
  
  > **Etki alanı uzmanı:** "Tam olarak. **Sync service** hangi katmanla konuştuğunu bilmiyor. `exec` ve `copyIn`'i çağırıyor — **filesystem layer** bunları yalnızca yerel shell komutları olarak çalıştırıyor."
  
  </example>
  
  ## Yeniden çalıştırma
  
  Aynı konuşmada tekrar çağrıldığında:
  
  1. Mevcut `UBIQUITOUS_LANGUAGE.md` dosyasını okuyun
  2. Sonraki tartışmalardan yeni terimleri birleştirin
  3. Anlayış gelişmişse tanımları güncelleyin
  4. Yeni belirsizlikleri yeniden işaretleyin
  5. Örnek diyaloğu yeni terimleri içerecek şekilde yeniden yazın
---

# Ubiquitous Language

Extract and formalize domain terminology from the current conversation into a consistent glossary, saved to a local file.

## Process

1. **Scan the conversation** for domain-relevant nouns, verbs, and concepts
2. **Identify problems**:
   - Same word used for different concepts (ambiguity)
   - Different words used for the same concept (synonyms)
   - Vague or overloaded terms
3. **Propose a canonical glossary** with opinionated term choices
4. **Write to `UBIQUITOUS_LANGUAGE.md`** in the working directory using the format below
5. **Output a summary** inline in the conversation

## Output Format

Write a `UBIQUITOUS_LANGUAGE.md` file with this structure:

```md
# Ubiquitous Language

## Order lifecycle

| Term        | Definition                                              | Aliases to avoid      |
| ----------- | ------------------------------------------------------- | --------------------- |
| **Order**   | A customer's request to purchase one or more items      | Purchase, transaction |
| **Invoice** | A request for payment sent to a customer after delivery | Bill, payment request |

## People

| Term         | Definition                                  | Aliases to avoid       |
| ------------ | ------------------------------------------- | ---------------------- |
| **Customer** | A person or organization that places orders | Client, buyer, account |
| **User**     | An authentication identity in the system    | Login, account         |

## Relationships

- An **Invoice** belongs to exactly one **Customer**
- An **Order** produces one or more **Invoices**

## Example dialogue

> **Dev:** "When a **Customer** places an **Order**, do we create the **Invoice** immediately?"
> **Domain expert:** "No — an **Invoice** is only generated once a **Fulfillment** is confirmed. A single **Order** can produce multiple **Invoices** if items ship in separate **Shipments**."
> **Dev:** "So if a **Shipment** is cancelled before dispatch, no **Invoice** exists for it?"
> **Domain expert:** "Exactly. The **Invoice** lifecycle is tied to the **Fulfillment**, not the **Order**."

## Flagged ambiguities

- "account" was used to mean both **Customer** and **User** — these are distinct concepts: a **Customer** places orders, while a **User** is an authentication identity that may or may not represent a **Customer**.
```

## Rules

- **Be opinionated.** When multiple words exist for the same concept, pick the best one and list the others as aliases to avoid.
- **Flag conflicts explicitly.** If a term is used ambiguously in the conversation, call it out in the "Flagged ambiguities" section with a clear recommendation.
- **Only include terms relevant for domain experts.** Skip the names of modules or classes unless they have meaning in the domain language.
- **Keep definitions tight.** One sentence max. Define what it IS, not what it does.
- **Show relationships.** Use bold term names and express cardinality where obvious.
- **Only include domain terms.** Skip generic programming concepts (array, function, endpoint) unless they have domain-specific meaning.
- **Group terms into multiple tables** when natural clusters emerge (e.g. by subdomain, lifecycle, or actor). Each group gets its own heading and table. If all terms belong to a single cohesive domain, one table is fine — don't force groupings.
- **Write an example dialogue.** A short conversation (3-5 exchanges) between a dev and a domain expert that demonstrates how the terms interact naturally. The dialogue should clarify boundaries between related concepts and show terms being used precisely.

<example>

## Example dialogue

> **Dev:** "How do I test the **sync service** without Docker?"

> **Domain expert:** "Provide the **filesystem layer** instead of the **Docker layer**. It implements the same **Sandbox service** interface but uses a local directory as the **sandbox**."

> **Dev:** "So **sync-in** still creates a **bundle** and unpacks it?"

> **Domain expert:** "Exactly. The **sync service** doesn't know which layer it's talking to. It calls `exec` and `copyIn` — the **filesystem layer** just runs those as local shell commands."

</example>

## Re-running

When invoked again in the same conversation:

1. Read the existing `UBIQUITOUS_LANGUAGE.md`
2. Incorporate any new terms from subsequent discussion
3. Update definitions if understanding has evolved
4. Re-flag any new ambiguities
5. Rewrite the example dialogue to incorporate new terms
