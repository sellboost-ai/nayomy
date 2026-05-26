---
name: "convex-cursorrules-prompt-file"
clean_name: "Convex"
description: "Cursor rules for Convex development with best practices."
description_tr: "Convex geliştirme için cursor rules ve en iyi uygulamalar."
category: "Other"
repo: "PatrickJS/awesome-cursorrules"
stars: 39709
path: "rules/convex-cursorrules-prompt-file.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/convex-cursorrules-prompt-file.mdc"
body_length: 30749
file_extension: ".mdc"
body_tr: |-
  # Convex yönergeleri
  ## Fonksiyon yönergeleri
  ### Yeni fonksiyon sözdizimi
  - Convex fonksiyonları için HER ZAMAN yeni fonksiyon sözdizimini kullanın. Örneğin:
        ```typescript
        import { query } from "./_generated/server";
        import { v } from "convex/values";
        export const f = query({
            args: {},
            returns: v.null(),
            handler: async (ctx, args) => {
            // Fonksiyon gövdesi
            },
        });
        ```

  ### Http endpoint sözdizimi
  - HTTP endpoint'leri `convex/http.ts` içinde tanımlanır ve bir `httpAction` dekoratörü gerektirir. Örneğin:
        ```typescript
        import { httpRouter } from "convex/server";
        import { httpAction } from "./_generated/server";
        const http = httpRouter();
        http.route({
            path: "/echo",
            method: "POST",
            handler: httpAction(async (ctx, req) => {
            const body = await req.bytes();
            return new Response(body, { status: 200 });
            }),
        });
        ```
  - HTTP endpoint'leri her zaman `path` alanında belirttiğiniz tam yolda kaydedilir. Örneğin, `/api/someRoute` belirtirseniz, endpoint `/api/someRoute` adresinde kaydedilecektir.

  ### Validatörler
  - Aşağıda bir array validatörü örneği verilmiştir:
                              ```typescript
                              import { mutation } from "./_generated/server";
                              import { v } from "convex/values";

                              export default mutation({
                              args: {
                                  simpleArray: v.array(v.union(v.string(), v.number())),
                              },
                              handler: async (ctx, args) => {
                                  //...
                              },
                              });
                              ```
  - Aşağıda ayrıştırılmış bir union türünü kodlaştıran validatörlü bir şema örneği verilmiştir:
                              ```typescript
                              import { defineSchema, defineTable } from "convex/server";
                              import { v } from "convex/values";

                              export default defineSchema({
                                  results: defineTable(
                                      v.union(
                                          v.object({
                                              kind: v.literal("error"),
                                              errorMessage: v.string(),
                                          }),
                                          v.object({
                                              kind: v.literal("success"),
                                              value: v.number(),
                                          }),
                                      ),
                                  )
                              });
                              ```
  - Null değer döndürürken her zaman `v.null()` validatörünü kullanın. Aşağıda null değer döndüren bir query örneği verilmiştir:
                                    ```typescript
                                    import { query } from "./_generated/server";
                                    import { v } from "convex/values";

                                    export const exampleQuery = query({
                                      args: {},
                                      returns: v.null(),
                                      handler: async (ctx, args) => {
                                          console.log("Bu query null değer döndürür");
                                          return null;
                                      },
                                    });
                                    ```
  - Geçerli Convex türleri ve ilgili validatörleri aşağıdadır:
   Convex Türü  | TS/JS türü  |  Örnek Kullanım         | Argüman doğrulaması ve şemalar için validatör  | Notlar                                                                                                                                                                                                 |
  | ----------- | ------------| -----------------------| -----------------------------------------------| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
  | Id          | string      | `doc._id`              | `v.id(tableName)`                              |                                                                                                                                                                                                       |
  | Null        | null        | `null`                 | `v.null()`                                     | JavaScript'in `undefined` geçerli bir Convex değeri değildir. `undefined` döndüren veya dönüş yapmayan fonksiyonlar bir istemciden çağrıldığında `null` döndürecektir. Bunun yerine `null` kullanın.                             |
  | Int64       | bigint      | `3n`                   | `v.int64()`                                    | Int64'ler yalnızca -2^63 ile 2^63-1 arasındaki BigInt'leri destekler. Convex çoğu modern tarayıcıda `bigint`'leri destekler.                                                                                                                                                              |
  | Float64     | number      | `3.1`                  | `v.number()`                                   | Convex tüm IEEE-754 çift hassasiyet kayan nokta sayılarını (NaN'lar gibi) destekler. Inf ve NaN JSON olarak string'ler olarak seri hale getirilir.                                                                                                                                      |
  | Boolean     | boolean     | `true`                 | `v.boolean()`                                  |
  | String      | string      | `"abc"`                | `v.string()`                                   | String'ler UTF-8 olarak depolanır ve geçerli Unicode dizileri olmalıdır. String'ler UTF-8 olarak kodlandığında 1MB toplam boyut sınırından küçük olmalıdır.                                                         |
  | Bytes       | ArrayBuffer | `new ArrayBuffer(8)`   | `v.bytes()`                                    | Convex birinci sınıf bytestring'leri destekler, `ArrayBuffer`'lar olarak geçirilir. Bytestring'ler Convex türleri için 1MB toplam boyut sınırından küçük olmalıdır.                                                     |
  | Array       | Array]      | `[1, 3.2, "abc"]`      | `v.array(values)`                              | Array'lar en fazla 8192 değere sahip olabilir.                                                                                                                                                                  |
  | Object      | Object      | `{a: "abc"}`           | `v.object({property: value})`                  | Convex yalnızca "plain old JavaScript objects" (özel prototype'ı olmayan nesneler) destekler. Nesneler en fazla 1024 giriş olabilir. Alan adları boş olmayan ve "$" veya "_" ile başlamayan olmalıdır. |
  | Record      | Record      | `{"a": "1", "b": "2"}` | `v.record(keys, values)`                       | Record'lar çalışma zamanında nesnelerdir, ancak dinamik anahtarlara sahip olabilir. Anahtarlar yalnızca ASCII karakterleri, boş olmayan ve "$" veya "_" ile başlamayan olmalıdır.                                                               |

  ### Fonksiyon kaydı
  - İç fonksiyonları kaydetmek için `internalQuery`, `internalMutation` ve `internalAction` kullanın. Bu fonksiyonlar özel nitelikte ve bir uygulamanın API'sinin parçası değildir. Bunlar yalnızca diğer Convex fonksiyonları tarafından çağrılabilir. Bu fonksiyonlar her zaman `./_generated/server` adresinden import edilir.
  - Herkese açık fonksiyonları kaydetmek için `query`, `mutation` ve `action` kullanın. Bu fonksiyonlar kamu API'sinin parçasıdır ve halka açık İnternete açıktır. `query`, `mutation` veya `action` kullanarak özel kalması gereken hassas iç fonksiyonları kaydetmeyin.
  - `api` veya `internal` nesneleri aracılığıyla bir fonksiyon KAYDETEMEZ.
  - Tüm Convex fonksiyonları için HER ZAMAN argüman ve dönüş validatörleri ekleyin. Bu, `query`, `internalQuery`, `mutation`, `internalMutation`, `action` ve `internalAction` hepsini içerir. Bir fonksiyon herhangi bir şey döndürmezse, çıktı validatörü olarak `returns: v.null()` ekleyin.
  - JavaScript uygulaması bir Convex fonksiyonunun dönüş değeri yoksa, örtülü olarak `null` döndürür.

  ### Fonksiyon çağırma
  - Bir query, mutation veya action'dan bir query çağırmak için `ctx.runQuery` kullanın.
  - Bir mutation veya action'dan bir mutation çağırmak için `ctx.runMutation` kullanın.
  - Bir action'dan bir action çağırmak için `ctx.runAction` kullanın.
  - Yalnızca çalışma zamanlarını geçmeniz gerekiyorsa (örn. V8'den Node'a) bir action'dan başka bir action çağırın. Aksi takdirde, paylaşılan kodu bir helper async fonksiyon'a çıkarın ve bunu doğrudan çağırın.
  - Action'lardan query'lere ve mutation'lara yapılan çağrıları mümkün olduğunca az tutmaya çalışın. Query'ler ve mutation'lar transaction'lardır, bu nedenle mantığı birden fazla çağrıya bölmek race condition riski getirir.
  - Tüm bu çağrılar bir `FunctionReference` alır. Çağrılan fonksiyonu doğrudan bu çağrılardan birine geçirmeyi DENEMEYIN.
  - Aynı dosyada bir fonksiyonu çağırmak için `ctx.runQuery`, `ctx.runMutation` veya `ctx.runAction` kullanırken, TypeScript döngüsellik sınırlamalarını çözmek için dönüş değerine bir tür ek açıklaması belirtin. Örneğin,
                              ```
                              export const f = query({
                                args: { name: v.string() },
                                returns: v.string(),
                                handler: async (ctx, args) => {
                                  return "Hello " + args.name;
                                },
                              });

                              export const g = query({
                                args: {},
                                returns: v.null(),
                                handler: async (ctx, args) => {
                                  const result: string = await ctx.runQuery(api.example.f, { name: "Bob" });
                                  return null;
                                },
                              });
                              ```

  ### Fonksiyon referansları
  - Fonksiyon referansları, kayıtlı Convex fonksiyonlarına işaretçilerdir.
  - `convex/_generated/api.ts` içinde tanımlanan ve `query`, `mutation` veya `action` ile kaydedilen herkese açık fonksiyonları çağırmak için `api` nesnesini kullanın.
  - `convex/_generated/api.ts` içinde tanımlanan ve `internalQuery`, `internalMutation` veya `internalAction` ile kaydedilen iç (veya özel) fonksiyonları çağırmak için `internal` nesnesini kullanın.
  - Convex dosya tabanlı routing kullanır, bu nedenle `convex/example.ts` içinde tanımlanan ve `f` adında bir herkese açık fonksiyon `api.example.f` fonksiyon referansına sahiptir.
  - `convex/example.ts` içinde tanımlanan ve `g` adında bir özel fonksiyon `internal.example.g` fonksiyon referansına sahiptir.
  - Fonksiyonlar ayrıca `convex/` klasörü içinde iç içe yerleştirilmiş dizinler içinde de kaydedilebilir. Örneğin, `convex/messages/access.ts` içinde tanımlanan bir herkese açık fonksiyon `h` `api.messages.access.h` fonksiyon referansına sahiptir.

  ### Api tasarımı
  - Convex dosya tabanlı routing kullanır, bu nedenle herkese açık query, mutation veya action fonksiyonlarını `convex/` dizini içinde düşünceli bir şekilde organize edin.
  - Herkese açık fonksiyonları tanımlamak için `query`, `mutation` ve `action` kullanın.
  - Özel, iç fonksiyonları tanımlamak için `internalQuery`, `internalMutation` ve `internalAction` kullanın.

  ### Sayfalandırma
  - Sayfalanmış query'ler, sonuçları kademeli sayfalar halinde döndüren query'lerdir.
  - Aşağıdaki sözdizimini kullanarak sayfalandırmayı tanımlayabilirsiniz:

                              ```ts
                              import { v } from "convex/values";
                              import { query, mutation } from "./_generated/server";
                              import { paginationOptsValidator } from "convex/server";
                              export const listWithExtraArg = query({
                                  args: { paginationOpts: paginationOptsValidator, author: v.string() },
                                  handler: async (ctx, args) => {
                                      return await ctx.db
                                      .query("messages")
                                      .filter((q) => q.eq(q.field("author"), args.author))
                                      .order("desc")
                                      .paginate(args.paginationOpts);
                                  },
                              });
                              ```
                              Not: `paginationOpts` aşağıdaki özelliklere sahip bir nesnedir:
                              - `numItems`: döndürülecek maksimum belge sayısı (validatör `v.number()`)
                              - `cursor`: belgelerin sonraki sayfasını almak için kullanılacak imleç (validatör `v.union(v.string(), v.null())`)
  - `.paginate()` ile biten bir query aşağıdaki özelliklere sahip bir nesne döndürür:
                              - page (aldığınız belgelerin dizisini içerir)
                              - isDone (bu belgelerin son sayfası olup olmadığını temsil eden bir boolean)
                              - continueCursor (belgelerin sonraki sayfasını almak için kullanılacak imleç olan bir string)


  ## Validatör yönergeleri
  - `v.bigint()` imzalı 64 bitlik tam sayıları temsil etmek için kullanımdan kaldırılmıştır. Bunun yerine `v.int64()` kullanın.
  - Bir record türü tanımlamak için `v.record()` kullanın. `v.map()` ve `v.set()` desteklenmez.

  ## Şema yönergeleri
  - Şemanızı her zaman `convex/schema.ts` içinde tanımlayın.
  - Şema tanım fonksiyonlarını her zaman `convex/server` adresinden import edin:
  - Sistem alanları otomatik olarak tüm belgelere eklenir ve bir alt çizgi ile ön eklenmiştir. Tüm belgelere otomatik olarak eklenen iki sistem alanı `_creationTime` (validatörü `v.number()`) ve `_id` (validatörü `v.id(tableName)`) dir.
  - Dizin adına her zaman tüm dizin alanlarını ekleyin. Örneğin, bir dizin `["field1", "field2"]` olarak tanımlanırsa, dizin adı "by_field1_and_field2" olmalıdır.
  - Dizin alanları, tanımlandıkları sırayla sorgulanmalıdır. "field1" sonra "field2" ve "field2" sonra "field1" tarafından sorgulayabilmek istiyorsanız, ayrı dizinler oluşturmalısınız.

  ## Typescript yönergeleri
  - Belirli bir tablo için id'nin türünü almak için './_generated/dataModel' adresinden import edilen `Id` helper typescript türünü kullanabilirsiniz. Örneğin, 'users' adında bir tablo varsa, bu tablo için id'nin türünü almak için `Id<'users'>` kullanabilirsiniz.
  - Bir `Record` tanımlamanız gerekiyorsa, türde anahtarın ve değerin türünü doğru bir şekilde sağladığınızdan emin olun. Örneğin, `v.record(v.id('users'), v.string())` validatörü `Record<Id<'users'>, string>` türüne sahip olurdu. Aşağıda bir query'de `Record` ile `Id` türü kullanımı örneği verilmiştir:
                      ```ts
                      import { query } from "./_generated/server";
                      import { Doc, Id } from "./_generated/dataModel";

                      export const exampleQuery = query({
                          args: { userIds: v.array(v.id("users")) },
                          returns: v.record(v.id("users"), v.string()),
                          handler: async (ctx, args) => {
                              const idToUsername: Record<Id<"users">, string> = {};
                              for (const userId of args.userIds) {
                                  const user = await ctx.db.get(userId);
                                  if (user) {
                                      users[user._id] = user.username;
                                  }
                              }

                              return idToUsername;
                          },
                      });
                      ```
  - Türler konusunda katı olun, özellikle belgelerin id'leri etrafında. Örneğin, bir fonksiyon 'users' tablosundaki bir belge için id alıyorsa, `string` yerine `Id<'users'>` alın.
  - Ayrıştırılmış union türlerinde string literalleri için her zaman `as const` kullanın.
  - `Array` türünü kullanırken, array'lerinizi her zaman `const array: Array<T> = [...];` olarak tanımlayın
  - `Record` türünü kullanırken, record'larınızı her zaman `const record: Record<KeyType, ValueType> = {...};` olarak tanımlayın
  - Node.js yerleşik modüllerini kullanırken `package.json` dosyanıza `@types/node` ekleyin.

  ## Tam metin arama yönergeleri
  - "#general" kanalında içeriğinde "hello hi" sorgusuna en iyi eşleşen "10 mesajı" arayan bir sorgu şöyle görünür:

  const messages = await ctx.db
    .query("messages")
    .withSearchIndex("search_body", (q) =>
      q.search("body", "hello hi").eq("channel", "#general"),
    )
    .take(10);

  ## Query yönergeleri
  - Query'lerde `filter` KULLANMAYIN. Bunun yerine şemada bir dizin tanımlayın ve `withIndex` kullanın.
  - Convex query'leri `.delete()` DESTEKLEMEZ. Bunun yerine `.collect()` sonuçlarını, onları yineleyip her sonuç üzerinde `ctx.db.delete(row._id)` çağırın.
  - Bir query'den tek bir belge almak için `.unique()` kullanın. Bu yöntem sorguya eşleşen birden fazla belge varsa bir hata fırlatacaktır.
  - Async yineleme kullanırken, bir query'nin sonucunda `.collect()` veya `.take(n)` KULLANMAYIN. Bunun yerine `for await (const row of query)` sözdizimini kullanın.
  ### Sıralama
  - Varsayılan olarak Convex her zaman belgeleri artan `_creationTime` sırasına göre döndürür.
  - Bir query'nin artan veya azalan sırada olup olmadığını seçmek için `.order('asc')` veya `.order('desc')` kullanabilirsiniz. Sıra belirtilmezse, varsayılan olarak artan sıradır.
  - Dizinleri kullanan belge query'leri, dizindeki sütunlara göre sıralanacak ve yavaş tablo taramasından kaçınabilir.


  ## Mutation yönergeleri
  - Mevcut bir belgeyi tam olarak değiştirmek için `ctx.db.replace` kullanın. Bu yöntem belge yoksa bir hata fırlatacaktır.
  - Mevcut bir belgeye güncellemeleri shallow merge etmek için `ctx.db.patch` kullanın. Bu yöntem belge yoksa bir hata fırlatacaktır.

  ## Action yönergeleri
  - Node.js yerleşik modüllerini kullanan action'ları içeren dosyaların en üstüne her zaman `"use node";` ekleyin.
  - Bir action'ın içinde `ctx.db` KULLANMAYIN. Action'lar veritabanına erişim sahibi değildir.
  - Aşağıda bir action'ın sözdizimi örneği verilmiştir:
                      ```ts
                      import { action } from "./_generated/server";

                      export const exampleAction = action({
                          args: {},
                          returns: v.null(),
                          handler: async (ctx, args) => {
                              console.log("Bu action herhangi bir şey döndürmez");
                              return null;
                          },
                      });
                      ```

  ## Planlama yönergeleri
  ### Cron yönergeleri
  - Cron işleri planlamak için yalnızca `crons.interval` veya `crons.cron` yöntemlerini kullanın. `crons.hourly`, `crons.daily` veya `crons.weekly` yardımcılarını KULLANMAYIN.
  - Her iki cron yöntemi de bir FunctionReference alır. Fonksiyonu doğrudan bu yöntemlerden birine geçirmeyi DENEMEYIN.
  - Üst düzey `crons` nesnesini bildirerek, bunu çağırarak bazı yöntemleri ve bunları varsayılan olarak dışa aktararak cron'ları tanımlayın. Örneğin,
                              ```ts
                              import { cronJobs } from "convex/server";
                              import { internal } from "./_generated/api";
                              import { internalAction } from "./_generated/server";

                              const empty = internalAction({
                                args: {},
                                returns: v.null(),
                                handler: async (ctx, args) => {
                                  console.log("empty");
                                },
                              });

                              const crons = cronJobs();

                              // `internal.crons.empty` öğesini her iki saatte bir çalıştırın.
                              crons.interval("delete inactive users", { hours: 2 }, internal.crons.empty, {});

                              export default crons;
                              ```
  - Convex fonksiyonlarını `crons.ts` içinde diğer dosyalarda olduğu gibi kaydedebilirsiniz.
  - Bir cron iç bir fonksiyon çağırırsa, iç fonksiyon aynı dosyada kaydedilmiş olsa bile, her zaman `_generated/api` adresinden `internal` nesnesini import edin.


  ## Dosya depolama yönergeleri
  - Convex, resimler, videolar ve PDF'ler gibi büyük dosyalar için dosya depolaması içerir.
  - `ctx.storage.getUrl()` yöntemi belirli bir dosya için imzalı bir URL döndürür. Dosya yoksa `null` döndürür.
  - Bir dosyanın meta verilerini yüklemek için kullanımdan kaldırılan `ctx.storage.getMetadata` çağrısını KULLANMAYIN.

                      Bunun yerine `_storage` sistem tablosunu sorgulayın. Örneğin, `Id<"_storage">` almak için `ctx.db.system.get` kullanabilirsiniz.
                      ```
                      import { query } from "./_generated/server";
                      import { Id } from "./_generated/dataModel";

                      type FileMetadata = {
                          _id: Id<"_storage">;
                          _creationTime: number;
                          contentType?: string;
                          sha256: string;
                          size: number;
                      }

                      export const exampleQuery = query({
                          args: { fileId: v.id("_storage") },
                          returns: v.null();
                          handler: async (ctx, args) => {
                              const metadata: FileMetadata | null = await ctx.db.system.get(args.fileId);
                              console.log(metadata);
                              return null;
                          },
                      });
                      ```
  - Convex depolama öğeleri `Blob` nesneleri olarak depolanır. Convex depolaması kullanırken tüm öğeleri `Blob` türüne/türünden dönüştürmelisiniz.


  # Örnekler:
  ## Örnek: chat-app

  ### Görev
  ```
  AI yanıtları içeren gerçek zamanlı bir sohbet uygulaması backend'i oluşturun. Uygulama aşağıdakileri yapmalıdır:
  - Adlarla kullanıcı oluşturmaya izin verme
  - Çoklu sohbet kanallarını destekleme
  - Kullanıcıların kanalara mesaj göndermesini sağlama
  - Kullanıcı mesajlarına otomatik olarak AI yanıtları oluşturma
  - Son mesaj geçmişini gösterme

  Backend aşağıdakiler için API'ler sağlamalıdır:
  1. Kullanıcı yönetimi (oluşturma)
  2. Kanal yönetimi (oluşturma)
  3. Mesaj işlemleri (gönderme, listeleme)
  4. OpenAI'nin GPT-4'ünü kullanarak AI yanıtı oluşturma

  Mesajlar kanal, yazar ve içerik bilgileriyle depolanmalıdır. Sistem mesaj sırasını korumalı
  ve kanal başına en son 10 mesajla geçmişi sınırlamalıdır.

  ```

  ### Analiz
  1. Görev Gereksinimleri Özeti:
  - AI entegrasyonu ile gerçek zamanlı bir sohbet backend'i inşa etme
  - Kullanıcı oluşturmayı destekleme
  - Kanala dayalı konuşmaları etkinleştirme
  - Uygun sıralama ile mesajları depolama ve alma
  - AI yanıtlarını otomatik olarak oluşturma

  2. Gerekli Ana Bileşenler:
  - Veritabanı tabloları: users, channels, messages
  - Kullanıcı/kanal yönetimi için herkese açık API'ler
  - Mesaj işleme fonksiyonları
  - İç AI yanıt oluşturma sistemi
  - AI yanıtları için bağlam yükleme

  3. Herkese Açık API ve İç Fonksiyonlar Tasarımı:
  Herkese Açık Mutation'lar:
  - createUser:
    - dosya yolu: convex/index.ts
    - argümanlar: {name: v.string()}
    - döndürür: v.object({userId: v.id("users")})
    - amaç: Belirli bir adla yeni bir kullanıcı oluşturma
  - createChannel:
    - dosya yolu: convex/index.ts
    - argümanlar: {name: v.string()}
    - döndürür: v.object({channelId: v.id("channels")})
    - amaç: Belirli bir adla yeni bir kanal oluşturma
  - sendMessage:
    - dosya yolu: convex/index.ts
    - argümanlar: {channelId: v.id("channels"), authorId: v.id("users"), content: v.string()}
    - döndürür: v.null()
    - amaç: Bir kanala mesaj göndermek ve AI'den bir yanıt zamanlamak

  Herkese Açık Query'ler:
  - listMessages:
    - dosya yolu: convex/index.ts
    - argümanlar: {channelId: v.id("channels")}
    - döndürür: v.array(v.object({
      _id: v.id("messages"),
      _creationTime: v.number(),
      channelId: v.id("channels"),
      authorId: v.optional(v.id("users")),
      content: v.string(),
      }))
    - amaç: Bir kanaldan azalan oluşturma sırasına göre en son 10 mesajı listeleme

  İç Fonksiyonlar:
  - generateResponse:
    - dosya yolu: convex/index.ts
    - argümanlar: {channelId: v.id("channels")}
    - döndürür: v.null()
    - amaç: Belirli bir kanal için AI'den yanıt oluşturma
  - loadContext:
    - dosya yolu: convex/index.ts
    - argümanlar: {channelId: v.id("channels")}
    - döndürür: v.array(v.object({
      _id: v.id("messages"),
      _creationTime: v.number(),
      channelId: v.id("channels"),
      authorId: v.optional(v.id("users")),
      content: v.string(),
    }))
  - writeAgentResponse:
    - dosya yolu: convex/index.ts
    - argümanlar: {channelId: v.id("channels"), content: v.string()}
    - döndürür: v.null()
    - amaç: Belirli bir kanala AI yanıtı yazma

  4. Şema Tasarımı:
  - users
    - validatör: { name: v.string() }
    - dizinler: <none>
  - channels
    - validatör: { name: v.string() }
    - dizinler: <none>
  - messages
    - validatör: { channelId: v.id("channels"), authorId: v.optional(v.id("users")), content: v.string() }
    - dizinler
      - by_channel: ["channelId"]

  5. Arka Plan İşleme:
  - AI yanıt oluşturma her kullanıcı mesajından sonra eşzamansız olarak çalışır
  - Bağlamsal yanıtlar oluşturmak için OpenAI'nin GPT-4'ünü kullanır
  - Son mesaj geçmişini kullanarak konuşma bağlamını korur


  ### Uygulama

  #### package.json
  ```typescript
  {
    "name": "chat-app",
    "description": "This example shows how to build a chat app without authentication.",
    "version": "1.0.0",
    "dependencies": {
      "convex": "^1.17.4",
      "openai": "^4.79.0"
    },
    "devDependencies": {
      "typescript": "^5.7.3"
    }
  }
  ```

  #### tsconfig.json
  ```typescript
  {
    "compilerOptions": {
      "target": "ESNext",
      "lib": ["DOM", "DOM.Iterable", "ESNext"],
      "skipLibCheck": true,
      "allowSyntheticDefaultImports": true,
      "strict": true,
      "forceConsistentCasingInFileNames": true,
      "module": "ESNext",
      "moduleResolution": "Bundler",
      "resolveJsonModule": true,
      "isolatedModules": true,
      "allowImportingTsExtensions": true,
      "noEmit": true,
      "jsx": "react-jsx"
    },
    "exclude": ["convex"],
    "include": ["**/src/**/*.tsx", "**/src/**/*.ts", "vite.config.ts"]
  }
  ```

  #### convex/index.ts
  ```typescript
  import {
    query,
    mutation,
    internalQuery,
    internalMutation,
    internalAction,
  } from "./_generated/server";
  import { v } from "convex/values";
  import OpenAI from "openai";
  import { internal } from "./_generated/api";

  /**
   * Belirli bir adla kullanıcı oluşturur.
   */
  export const createUser = mutation({
    args: {
      name: v.string(),
    },
    returns: v.id("users"),
    handler: async (ctx, args) => {
      return await ctx.db.insert("users", { name: args.name });
    },
  });

  /**
   * Belirli bir adla kanal oluşturur.
   */
  export const createChannel = mutation({
    args: {
      name: v.string(),
    },
    returns: v.id("channels"),
    handler: async (ctx, args) => {
      return await ctx.db.insert("channels", { name: args.name });
    },
  });

  /**
   * Bir kanaldan azalan oluşturma sırasına göre en son 10 mesajı listeler.
   */
  export const listMessages = query({
    args: {
      channelId: v.id("channels"),
    },
    returns: v.array(
      v.object({
        _id: v.id("messages"),
        _creationTime: v.number(),
        channelId: v.id("channels"),
        authorId: v.optional(v.id("users")),
        content: v.string(),
      }),
    ),
    handler: async (ctx, args) => {
      const messages = await ctx.db
        .query("messages")
        .withIndex("by_channel", (q) => q.eq("channelId", args.channelId))
        .order("desc")
        .take(10);
      return messages;
    },
  });

  /**
   * Bir kanala mesaj gönderer ve AI'den yanıt almayı planlar.
   */
  export const sendMessage = mutation({
    args: {
      channelId: v.id("channels"),
      authorId: v.id("users"),
      content: v.string(),
    },
    returns: v.null(),
    handler: async (ctx, args) => {
      const channel = await ctx.db.get(args.channelId);
      if (!channel) {
        throw new Error("Channel not found");
      }
      const user = await ctx.db.get(args.authorId);
      if (!user) {
        throw new Error("User not found");
      }
      await ctx.db.insert("messages", {
        channelId: args.channelId,
        authorId: args.authorId,
        content: args.content,
      });
      await ctx.scheduler.runAfter(0, internal.index.generateResponse, {
        channelId: args.channelId,
      });
      return null;
    },
  });

  const openai = new OpenAI();

  export const generateResponse = internalAction({
    args: {
      channelId: v.id("channels"),
    },
    returns: v.null(),
    handler: async (ctx, args) => {
      const context = await ctx.runQuery(internal.index.loadContext, {
        channelId: args.channelId,
      });
      const response = await openai.chat.completions.create({
        model: "gpt-4o",
        messages: context,
      });
      const content = response.choices[0].message.content;
      if (!content) {
        throw new Error("No content in response");
      }
      await ctx.runMutation(internal.index.writeAgentResponse, {
        channelId: args.channelId,
        content,
      });
      return null;
    },
  });

  export const loadContext = internalQuery({
    args: {
      channelId: v.id("channels"),
    },
    returns: v.array(
      v.object({
        role: v.union(v.literal("user"), v.literal("assistant")),
        content: v.string(),
      }),
    ),
    handler: async (ctx, args) => {
      const channel = await ctx.db.get(args.channelId);
      if (!channel) {
        throw new Error("Channel not found");
      }
      const messages = await ctx.db
        .query("messages")
        .withIndex("by_channel", (q) => q.eq("channelId", args.channelId))
        .order("desc")
        .take(10);

      const result = [];
      for (const message of messages) {
        if (message.authorId) {
          const user = await ctx.db.get(message.authorId);
          if (!user) {
            throw new Error("User not found");
          }
          result.push({
            role: "user" as const,
            content: `${user.name}: ${message.content}`,
          });
        } else {
          result.push({ role: "assistant" as const, content: message.content });
        }
      }
      return result;
    },
  });

  export const writeAgentResponse = internalMutation({
    args: {
      channelId: v.id("channels"),
      content: v.string(),
    },
    returns: v.null(),
    handler: async (ctx, args) => {
      await ctx.db.insert("messages", {
        channelId: args.channelId,
        content: args.content,
      });
      return null;
    },
  });
  ```

  #### convex/schema.ts
  ```typescript
  import { defineSchema, defineTable } from "convex/server";
  import { v } from "convex/values";

  export default defineSchema({
    channels: defineTable({
      name: v.string(),
    }),

    users: defineTable({
      name: v.string(),
    }),

    messages: defineTable({
      channelId: v.id("channels"),
      authorId: v.optional(v.id("users")),
      content: v.string(),
    }).index("by_channel", ["channelId"]),
  });
  ```

  #### src/App.tsx
  ```typescript
  export default function App() {
    return <div>Hello World</div>;
  }
  ```
---

# Convex guidelines
## Function guidelines
### New function syntax
- ALWAYS use the new function syntax for Convex functions. For example:
      ```typescript
      import { query } from "./_generated/server";
      import { v } from "convex/values";
      export const f = query({
          args: {},
          returns: v.null(),
          handler: async (ctx, args) => {
          // Function body
          },
      });
      ```

### Http endpoint syntax
- HTTP endpoints are defined in `convex/http.ts` and require an `httpAction` decorator. For example:
      ```typescript
      import { httpRouter } from "convex/server";
      import { httpAction } from "./_generated/server";
      const http = httpRouter();
      http.route({
          path: "/echo",
          method: "POST",
          handler: httpAction(async (ctx, req) => {
          const body = await req.bytes();
          return new Response(body, { status: 200 });
          }),
      });
      ```
- HTTP endpoints are always registered at the exact path you specify in the `path` field. For example, if you specify `/api/someRoute`, the endpoint will be registered at `/api/someRoute`.

### Validators
- Below is an example of an array validator:
                            ```typescript
                            import { mutation } from "./_generated/server";
                            import { v } from "convex/values";

                            export default mutation({
                            args: {
                                simpleArray: v.array(v.union(v.string(), v.number())),
                            },
                            handler: async (ctx, args) => {
                                //...
                            },
                            });
                            ```
- Below is an example of a schema with validators that codify a discriminated union type:
                            ```typescript
                            import { defineSchema, defineTable } from "convex/server";
                            import { v } from "convex/values";

                            export default defineSchema({
                                results: defineTable(
                                    v.union(
                                        v.object({
                                            kind: v.literal("error"),
                                            errorMessage: v.string(),
                                        }),
                                        v.object({
                                            kind: v.literal("success"),
                                            value: v.number(),
                                        }),
                                    ),
                                )
                            });
                            ```
- Always use the `v.null()` validator when returning a null value. Below is an example query that returns a null value:
                                  ```typescript
                                  import { query } from "./_generated/server";
                                  import { v } from "convex/values";

                                  export const exampleQuery = query({
                                    args: {},
                                    returns: v.null(),
                                    handler: async (ctx, args) => {
                                        console.log("This query returns a null value");
                                        return null;
                                    },
                                  });
                                  ```
- Here are the valid Convex types along with their respective validators:
 Convex Type  | TS/JS type  |  Example Usage         | Validator for argument validation and schemas  | Notes                                                                                                                                                                                                 |
| ----------- | ------------| -----------------------| -----------------------------------------------| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Id          | string      | `doc._id`              | `v.id(tableName)`                              |                                                                                                                                                                                                       |
| Null        | null        | `null`                 | `v.null()`                                     | JavaScript's `undefined` is not a valid Convex value. Functions the return `undefined` or do not return will return `null` when called from a client. Use `null` instead.                             |
| Int64       | bigint      | `3n`                   | `v.int64()`                                    | Int64s only support BigInts between -2^63 and 2^63-1. Convex supports `bigint`s in most modern browsers.                                                                                              |
| Float64     | number      | `3.1`                  | `v.number()`                                   | Convex supports all IEEE-754 double-precision floating point numbers (such as NaNs). Inf and NaN are JSON serialized as strings.                                                                      |
| Boolean     | boolean     | `true`                 | `v.boolean()`                                  |
| String      | string      | `"abc"`                | `v.string()`                                   | Strings are stored as UTF-8 and must be valid Unicode sequences. Strings must be smaller than the 1MB total size limit when encoded as UTF-8.                                                         |
| Bytes       | ArrayBuffer | `new ArrayBuffer(8)`   | `v.bytes()`                                    | Convex supports first class bytestrings, passed in as `ArrayBuffer`s. Bytestrings must be smaller than the 1MB total size limit for Convex types.                                                     |
| Array       | Array]      | `[1, 3.2, "abc"]`      | `v.array(values)`                              | Arrays can have at most 8192 values.                                                                                                                                                                  |
| Object      | Object      | `{a: "abc"}`           | `v.object({property: value})`                  | Convex only supports "plain old JavaScript objects" (objects that do not have a custom prototype). Objects can have at most 1024 entries. Field names must be nonempty and not start with "$" or "_". |
| Record      | Record      | `{"a": "1", "b": "2"}` | `v.record(keys, values)`                       | Records are objects at runtime, but can have dynamic keys. Keys must be only ASCII characters, nonempty, and not start with "$" or "_".                                                               |

### Function registration
- Use `internalQuery`, `internalMutation`, and `internalAction` to register internal functions. These functions are private and aren't part of an app's API. They can only be called by other Convex functions. These functions are always imported from `./_generated/server`.
- Use `query`, `mutation`, and `action` to register public functions. These functions are part of the public API and are exposed to the public Internet. Do NOT use `query`, `mutation`, or `action` to register sensitive internal functions that should be kept private.
- You CANNOT register a function through the `api` or `internal` objects.
- ALWAYS include argument and return validators for all Convex functions. This includes all of `query`, `internalQuery`, `mutation`, `internalMutation`, `action`, and `internalAction`. If a function doesn't return anything, include `returns: v.null()` as its output validator.
- If the JavaScript implementation of a Convex function doesn't have a return value, it implicitly returns `null`.

### Function calling
- Use `ctx.runQuery` to call a query from a query, mutation, or action.
- Use `ctx.runMutation` to call a mutation from a mutation or action.
- Use `ctx.runAction` to call an action from an action.
- ONLY call an action from another action if you need to cross runtimes (e.g. from V8 to Node). Otherwise, pull out the shared code into a helper async function and call that directly instead.
- Try to use as few calls from actions to queries and mutations as possible. Queries and mutations are transactions, so splitting logic up into multiple calls introduces the risk of race conditions.
- All of these calls take in a `FunctionReference`. Do NOT try to pass the callee function directly into one of these calls.
- When using `ctx.runQuery`, `ctx.runMutation`, or `ctx.runAction` to call a function in the same file, specify a type annotation on the return value to work around TypeScript circularity limitations. For example,
                            ```
                            export const f = query({
                              args: { name: v.string() },
                              returns: v.string(),
                              handler: async (ctx, args) => {
                                return "Hello " + args.name;
                              },
                            });

                            export const g = query({
                              args: {},
                              returns: v.null(),
                              handler: async (ctx, args) => {
                                const result: string = await ctx.runQuery(api.example.f, { name: "Bob" });
                                return null;
                              },
                            });
                            ```

### Function references
- Function references are pointers to registered Convex functions.
- Use the `api` object defined by the framework in `convex/_generated/api.ts` to call public functions registered with `query`, `mutation`, or `action`.
- Use the `internal` object defined by the framework in `convex/_generated/api.ts` to call internal (or private) functions registered with `internalQuery`, `internalMutation`, or `internalAction`.
- Convex uses file-based routing, so a public function defined in `convex/example.ts` named `f` has a function reference of `api.example.f`.
- A private function defined in `convex/example.ts` named `g` has a function reference of `internal.example.g`.
- Functions can also registered within directories nested within the `convex/` folder. For example, a public function `h` defined in `convex/messages/access.ts` has a function reference of `api.messages.access.h`.

### Api design
- Convex uses file-based routing, so thoughtfully organize files with public query, mutation, or action functions within the `convex/` directory.
- Use `query`, `mutation`, and `action` to define public functions.
- Use `internalQuery`, `internalMutation`, and `internalAction` to define private, internal functions.

### Pagination
- Paginated queries are queries that return a list of results in incremental pages.
- You can define pagination using the following syntax:

                            ```ts
                            import { v } from "convex/values";
                            import { query, mutation } from "./_generated/server";
                            import { paginationOptsValidator } from "convex/server";
                            export const listWithExtraArg = query({
                                args: { paginationOpts: paginationOptsValidator, author: v.string() },
                                handler: async (ctx, args) => {
                                    return await ctx.db
                                    .query("messages")
                                    .filter((q) => q.eq(q.field("author"), args.author))
                                    .order("desc")
                                    .paginate(args.paginationOpts);
                                },
                            });
                            ```
                            Note: `paginationOpts` is an object with the following properties:
                            - `numItems`: the maximum number of documents to return (the validator is `v.number()`)
                            - `cursor`: the cursor to use to fetch the next page of documents (the validator is `v.union(v.string(), v.null())`)
- A query that ends in `.paginate()` returns an object that has the following properties:
                            - page (contains an array of documents that you fetches)
                            - isDone (a boolean that represents whether or not this is the last page of documents)
                            - continueCursor (a string that represents the cursor to use to fetch the next page of documents)


## Validator guidelines
- `v.bigint()` is deprecated for representing signed 64-bit integers. Use `v.int64()` instead.
- Use `v.record()` for defining a record type. `v.map()` and `v.set()` are not supported.

## Schema guidelines
- Always define your schema in `convex/schema.ts`.
- Always import the schema definition functions from `convex/server`:
- System fields are automatically added to all documents and are prefixed with an underscore. The two system fields that are automatically added to all documents are `_creationTime` which has the validator `v.number()` and `_id` which has the validator `v.id(tableName)`.
- Always include all index fields in the index name. For example, if an index is defined as `["field1", "field2"]`, the index name should be "by_field1_and_field2".
- Index fields must be queried in the same order they are defined. If you want to be able to query by "field1" then "field2" and by "field2" then "field1", you must create separate indexes.

## Typescript guidelines
- You can use the helper typescript type `Id` imported from './_generated/dataModel' to get the type of the id for a given table. For example if there is a table called 'users' you can use `Id<'users'>` to get the type of the id for that table.
- If you need to define a `Record` make sure that you correctly provide the type of the key and value in the type. For example a validator `v.record(v.id('users'), v.string())` would have the type `Record<Id<'users'>, string>`. Below is an example of using `Record` with an `Id` type in a query:
                    ```ts
                    import { query } from "./_generated/server";
                    import { Doc, Id } from "./_generated/dataModel";

                    export const exampleQuery = query({
                        args: { userIds: v.array(v.id("users")) },
                        returns: v.record(v.id("users"), v.string()),
                        handler: async (ctx, args) => {
                            const idToUsername: Record<Id<"users">, string> = {};
                            for (const userId of args.userIds) {
                                const user = await ctx.db.get(userId);
                                if (user) {
                                    users[user._id] = user.username;
                                }
                            }

                            return idToUsername;
                        },
                    });
                    ```
- Be strict with types, particularly around id's of documents. For example, if a function takes in an id for a document in the 'users' table, take in `Id<'users'>` rather than `string`.
- Always use `as const` for string literals in discriminated union types.
- When using the `Array` type, make sure to always define your arrays as `const array: Array<T> = [...];`
- When using the `Record` type, make sure to always define your records as `const record: Record<KeyType, ValueType> = {...};`
- Always add `@types/node` to your `package.json` when using any Node.js built-in modules.

## Full text search guidelines
- A query for "10 messages in channel '#general' that best match the query 'hello hi' in their body" would look like:

const messages = await ctx.db
  .query("messages")
  .withSearchIndex("search_body", (q) =>
    q.search("body", "hello hi").eq("channel", "#general"),
  )
  .take(10);

## Query guidelines
- Do NOT use `filter` in queries. Instead, define an index in the schema and use `withIndex` instead.
- Convex queries do NOT support `.delete()`. Instead, `.collect()` the results, iterate over them, and call `ctx.db.delete(row._id)` on each result.
- Use `.unique()` to get a single document from a query. This method will throw an error if there are multiple documents that match the query.
- When using async iteration, don't use `.collect()` or `.take(n)` on the result of a query. Instead, use the `for await (const row of query)` syntax.
### Ordering
- By default Convex always returns documents in ascending `_creationTime` order.
- You can use `.order('asc')` or `.order('desc')` to pick whether a query is in ascending or descending order. If the order isn't specified, it defaults to ascending.
- Document queries that use indexes will be ordered based on the columns in the index and can avoid slow table scans.


## Mutation guidelines
- Use `ctx.db.replace` to fully replace an existing document. This method will throw an error if the document does not exist.
- Use `ctx.db.patch` to shallow merge updates into an existing document. This method will throw an error if the document does not exist.

## Action guidelines
- Always add `"use node";` to the top of files containing actions that use Node.js built-in modules.
- Never use `ctx.db` inside of an action. Actions don't have access to the database.
- Below is an example of the syntax for an action:
                    ```ts
                    import { action } from "./_generated/server";

                    export const exampleAction = action({
                        args: {},
                        returns: v.null(),
                        handler: async (ctx, args) => {
                            console.log("This action does not return anything");
                            return null;
                        },
                    });
                    ```

## Scheduling guidelines
### Cron guidelines
- Only use the `crons.interval` or `crons.cron` methods to schedule cron jobs. Do NOT use the `crons.hourly`, `crons.daily`, or `crons.weekly` helpers.
- Both cron methods take in a FunctionReference. Do NOT try to pass the function directly into one of these methods.
- Define crons by declaring the top-level `crons` object, calling some methods on it, and then exporting it as default. For example,
                            ```ts
                            import { cronJobs } from "convex/server";
                            import { internal } from "./_generated/api";
                            import { internalAction } from "./_generated/server";

                            const empty = internalAction({
                              args: {},
                              returns: v.null(),
                              handler: async (ctx, args) => {
                                console.log("empty");
                              },
                            });

                            const crons = cronJobs();

                            // Run `internal.crons.empty` every two hours.
                            crons.interval("delete inactive users", { hours: 2 }, internal.crons.empty, {});

                            export default crons;
                            ```
- You can register Convex functions within `crons.ts` just like any other file.
- If a cron calls an internal function, always import the `internal` object from '_generated/api`, even if the internal function is registered in the same file.


## File storage guidelines
- Convex includes file storage for large files like images, videos, and PDFs.
- The `ctx.storage.getUrl()` method returns a signed URL for a given file. It returns `null` if the file doesn't exist.
- Do NOT use the deprecated `ctx.storage.getMetadata` call for loading a file's metadata.

                    Instead, query the `_storage` system table. For example, you can use `ctx.db.system.get` to get an `Id<"_storage">`.
                    ```
                    import { query } from "./_generated/server";
                    import { Id } from "./_generated/dataModel";

                    type FileMetadata = {
                        _id: Id<"_storage">;
                        _creationTime: number;
                        contentType?: string;
                        sha256: string;
                        size: number;
                    }

                    export const exampleQuery = query({
                        args: { fileId: v.id("_storage") },
                        returns: v.null();
                        handler: async (ctx, args) => {
                            const metadata: FileMetadata | null = await ctx.db.system.get(args.fileId);
                            console.log(metadata);
                            return null;
                        },
                    });
                    ```
- Convex storage stores items as `Blob` objects. You must convert all items to/from a `Blob` when using Convex storage.


# Examples:
## Example: chat-app

### Task
```
Create a real-time chat application backend with AI responses. The app should:
- Allow creating users with names
- Support multiple chat channels
- Enable users to send messages to channels
- Automatically generate AI responses to user messages
- Show recent message history

The backend should provide APIs for:
1. User management (creation)
2. Channel management (creation)
3. Message operations (sending, listing)
4. AI response generation using OpenAI's GPT-4

Messages should be stored with their channel, author, and content. The system should maintain message order
and limit history display to the 10 most recent messages per channel.

```

### Analysis
1. Task Requirements Summary:
- Build a real-time chat backend with AI integration
- Support user creation
- Enable channel-based conversations
- Store and retrieve messages with proper ordering
- Generate AI responses automatically

2. Main Components Needed:
- Database tables: users, channels, messages
- Public APIs for user/channel management
- Message handling functions
- Internal AI response generation system
- Context loading for AI responses

3. Public API and Internal Functions Design:
Public Mutations:
- createUser:
  - file path: convex/index.ts
  - arguments: {name: v.string()}
  - returns: v.object({userId: v.id("users")})
  - purpose: Create a new user with a given name
- createChannel:
  - file path: convex/index.ts
  - arguments: {name: v.string()}
  - returns: v.object({channelId: v.id("channels")})
  - purpose: Create a new channel with a given name
- sendMessage:
  - file path: convex/index.ts
  - arguments: {channelId: v.id("channels"), authorId: v.id("users"), content: v.string()}
  - returns: v.null()
  - purpose: Send a message to a channel and schedule a response from the AI

Public Queries:
- listMessages:
  - file path: convex/index.ts
  - arguments: {channelId: v.id("channels")}
  - returns: v.array(v.object({
    _id: v.id("messages"),
    _creationTime: v.number(),
    channelId: v.id("channels"),
    authorId: v.optional(v.id("users")),
    content: v.string(),
    }))
  - purpose: List the 10 most recent messages from a channel in descending creation order

Internal Functions:
- generateResponse:
  - file path: convex/index.ts
  - arguments: {channelId: v.id("channels")}
  - returns: v.null()
  - purpose: Generate a response from the AI for a given channel
- loadContext:
  - file path: convex/index.ts
  - arguments: {channelId: v.id("channels")}
  - returns: v.array(v.object({
    _id: v.id("messages"),
    _creationTime: v.number(),
    channelId: v.id("channels"),
    authorId: v.optional(v.id("users")),
    content: v.string(),
  }))
- writeAgentResponse:
  - file path: convex/index.ts
  - arguments: {channelId: v.id("channels"), content: v.string()}
  - returns: v.null()
  - purpose: Write an AI response to a given channel

4. Schema Design:
- users
  - validator: { name: v.string() }
  - indexes: <none>
- channels
  - validator: { name: v.string() }
  - indexes: <none>
- messages
  - validator: { channelId: v.id("channels"), authorId: v.optional(v.id("users")), content: v.string() }
  - indexes
    - by_channel: ["channelId"]

5. Background Processing:
- AI response generation runs asynchronously after each user message
- Uses OpenAI's GPT-4 to generate contextual responses
- Maintains conversation context using recent message history


### Implementation

#### package.json
```typescript
{
  "name": "chat-app",
  "description": "This example shows how to build a chat app without authentication.",
  "version": "1.0.0",
  "dependencies": {
    "convex": "^1.17.4",
    "openai": "^4.79.0"
  },
  "devDependencies": {
    "typescript": "^5.7.3"
  }
}
```

#### tsconfig.json
```typescript
{
  "compilerOptions": {
    "target": "ESNext",
    "lib": ["DOM", "DOM.Iterable", "ESNext"],
    "skipLibCheck": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "module": "ESNext",
    "moduleResolution": "Bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "allowImportingTsExtensions": true,
    "noEmit": true,
    "jsx": "react-jsx"
  },
  "exclude": ["convex"],
  "include": ["**/src/**/*.tsx", "**/src/**/*.ts", "vite.config.ts"]
}
```

#### convex/index.ts
```typescript
import {
  query,
  mutation,
  internalQuery,
  internalMutation,
  internalAction,
} from "./_generated/server";
import { v } from "convex/values";
import OpenAI from "openai";
import { internal } from "./_generated/api";

/**
 * Create a user with a given name.
 */
export const createUser = mutation({
  args: {
    name: v.string(),
  },
  returns: v.id("users"),
  handler: async (ctx, args) => {
    return await ctx.db.insert("users", { name: args.name });
  },
});

/**
 * Create a channel with a given name.
 */
export const createChannel = mutation({
  args: {
    name: v.string(),
  },
  returns: v.id("channels"),
  handler: async (ctx, args) => {
    return await ctx.db.insert("channels", { name: args.name });
  },
});

/**
 * List the 10 most recent messages from a channel in descending creation order.
 */
export const listMessages = query({
  args: {
    channelId: v.id("channels"),
  },
  returns: v.array(
    v.object({
      _id: v.id("messages"),
      _creationTime: v.number(),
      channelId: v.id("channels"),
      authorId: v.optional(v.id("users")),
      content: v.string(),
    }),
  ),
  handler: async (ctx, args) => {
    const messages = await ctx.db
      .query("messages")
      .withIndex("by_channel", (q) => q.eq("channelId", args.channelId))
      .order("desc")
      .take(10);
    return messages;
  },
});

/**
 * Send a message to a channel and schedule a response from the AI.
 */
export const sendMessage = mutation({
  args: {
    channelId: v.id("channels"),
    authorId: v.id("users"),
    content: v.string(),
  },
  returns: v.null(),
  handler: async (ctx, args) => {
    const channel = await ctx.db.get(args.channelId);
    if (!channel) {
      throw new Error("Channel not found");
    }
    const user = await ctx.db.get(args.authorId);
    if (!user) {
      throw new Error("User not found");
    }
    await ctx.db.insert("messages", {
      channelId: args.channelId,
      authorId: args.authorId,
      content: args.content,
    });
    await ctx.scheduler.runAfter(0, internal.index.generateResponse, {
      channelId: args.channelId,
    });
    return null;
  },
});

const openai = new OpenAI();

export const generateResponse = internalAction({
  args: {
    channelId: v.id("channels"),
  },
  returns: v.null(),
  handler: async (ctx, args) => {
    const context = await ctx.runQuery(internal.index.loadContext, {
      channelId: args.channelId,
    });
    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: context,
    });
    const content = response.choices[0].message.content;
    if (!content) {
      throw new Error("No content in response");
    }
    await ctx.runMutation(internal.index.writeAgentResponse, {
      channelId: args.channelId,
      content,
    });
    return null;
  },
});

export const loadContext = internalQuery({
  args: {
    channelId: v.id("channels"),
  },
  returns: v.array(
    v.object({
      role: v.union(v.literal("user"), v.literal("assistant")),
      content: v.string(),
    }),
  ),
  handler: async (ctx, args) => {
    const channel = await ctx.db.get(args.channelId);
    if (!channel) {
      throw new Error("Channel not found");
    }
    const messages = await ctx.db
      .query("messages")
      .withIndex("by_channel", (q) => q.eq("channelId", args.channelId))
      .order("desc")
      .take(10);

    const result = [];
    for (const message of messages) {
      if (message.authorId) {
        const user = await ctx.db.get(message.authorId);
        if (!user) {
          throw new Error("User not found");
        }
        result.push({
          role: "user" as const,
          content: `${user.name}: ${message.content}`,
        });
      } else {
        result.push({ role: "assistant" as const, content: message.content });
      }
    }
    return result;
  },
});

export const writeAgentResponse = internalMutation({
  args: {
    channelId: v.id("channels"),
    content: v.string(),
  },
  returns: v.null(),
  handler: async (ctx, args) => {
    await ctx.db.insert("messages", {
      channelId: args.channelId,
      content: args.content,
    });
    return null;
  },
});
```

#### convex/schema.ts
```typescript
import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  channels: defineTable({
    name: v.string(),
  }),

  users: defineTable({
    name: v.string(),
  }),

  messages: defineTable({
    channelId: v.id("channels"),
    authorId: v.optional(v.id("users")),
    content: v.string(),
  }).index("by_channel", ["channelId"]),
});
```

#### src/App.tsx
```typescript
export default function App() {
  return <div>Hello World</div>;
}
```
