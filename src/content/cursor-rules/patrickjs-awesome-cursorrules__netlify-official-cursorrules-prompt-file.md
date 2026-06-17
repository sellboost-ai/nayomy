---
name: "netlify-official-cursorrules-prompt-file"
clean_name: "Netlify Official"
description: "Cursor rules for Netlify development with official integration."
description_tr: "Netlify geliştirmesi için resmi entegrasyon ile Cursor kuralları."
category: "Other"
repo: "PatrickJS/awesome-cursorrules"
stars: 40019
path: "rules/netlify-official-cursorrules-prompt-file.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/netlify-official-cursorrules-prompt-file.mdc"
body_length: 39563
file_extension: ".mdc"
body_tr: |-
  <ProviderContextOverrides>
  	// Geliştiriciler içeriği gerektiği gibi geçersiz kılabilir, ancak tümü bu bölüme yerleştirilmelidir.


  </ProviderContextOverrides>

  ProviderContextOverrides BÖLÜMÜNDEKI KURALLAR ProviderContext'teki belirli kuralları geçersiz kılabilir

  <ProviderContext version="1.0" provider="netlify">
    ## Genel

    - `.netlify` klasörü kullanıcı kodu için değildir. `.gitignore` listesine eklenmelidir
    - İçe aktarılan koda sürüm numaraları eklemeyin. (örneğin `@netlify/functions` kullanın, asla `@netlify/functions@VERSION` kullanmayın)
    - CORS başlıkları (Access-Control-Allow-Origin gibi) eklemeyin; kullanıcı AÇIKÇA talep etmedikçe.
    - Başka bir dev komutu istenmediği sürece dev sunucusunu başlatmak için `netlify dev` kullanmayı tercih edin

    # Rehberler

    - Yazabileceğiniz 4 türde işlem sistemi vardır:
      - Sunucusuz fonksiyonlar - genellikle işlemsel sunucu/api istekleri için kullanılır.
      - Edge fonksiyonları - genellikle sunucuya ulaşmadan önce istekleri değiştiren veya kullanıcılara dönmeden önce yanıtları değiştiren kod için kullanılır.
      - Arka plan fonksiyonları - asenkron çalışma için uzun çalışan fonksiyonlar.
      - Zamanlanmış fonksiyonlar - CRON tabanlı aralıklarla çalışacak şekilde yapılandırılmış mantık.
    - Netlify Blobs, durum depolaması, veri depolaması vb. sağlamak için kullanılabilen genel bir nesne depolamasıdır.
    - Netlify Image CDN, derleme sürelerini etkilemeden veya yükleme sırasında görüntüleri optimize etmeden isteğe bağlı görüntü dönüştürmelerini sağlar. İstemci yeteneklerine ve önbelleğe alınan dönüştürmelere dayalı olarak görüntüleri dinamik olarak optimize eder. Görüntüleri dinamik olarak optimize ettiğinizde bunu kullanın. Geliştirme/derleme işlemi sırasında görüntüyü değiştirmeniz gerektiğinde bunu kullanmayın.
    - Ortam değişkenleri, gizli dizileri, API anahtarlarını ve kod dışında kontrol etmek istediğiniz veya koda koymak için çok hassas olan diğer değerleri depolamak için kullanılabilir.


    ## Netlify işlem

    - ASLA hiçbir türde sunucusuz veya edge fonksiyonu public veya publish dizinine koymayın
    - Açıkça istenmedikçe varsayılan fonksiyonları veya edge fonksiyonları dizinini değiştirmeyin.
    - HER ZAMAN fonksiyonları veya edge fonksiyonları yerleştirmek için doğru dizini doğrulayın

    ### Sunucusuz fonksiyonlar ve edge fonksiyonları için bağlam nesnesi

    Sunucusuz ve edge fonksiyonlara verilen context argümanından kullanılabilir alanlar/fonksiyonlar aşağıdadır.

    ```
    {
      account: {
        id: string, // Site ve fonksiyonla ilişkilendirilen Netlify ekip hesabının benzersiz kimliği.
      },
      cookies: {
        get: (name: string) => string | undefined, // Gelen istekten bir çerezi okur.
        set: (options: { name: string; value: string; path?: string; domain?: string; secure?: boolean; httpOnly?: boolean; expires?: Date }) => void, // Giden yanıta CookieStore.set web standardı izleyerek bir çerez ayarlar.
        delete: (nameOrOptions: string | { name: string; path?: string; domain?: string }) => void, // Giden yanıttan CookieStore.delete web standardı izleyerek bir çerezi siler.
      },
      deploy: {
        context: string, // Dağıtım bağlamı (ör. production, deploy-preview).
        id: string, // Fonksiyonun ait olduğu dağıtımın benzersiz kimliği.
        published: boolean, // Fonksiyonun şu anda yayınlanan dağıtıma ait olup olmadığını gösterir.
      },
      geo: {
        city: string, // İstemci konumunun şehir adı.
        country: {
          code: string, // ISO 3166 ülke kodu.
          name: string, // Tam ülke adı.
        },
        latitude: number, // İstemci konumunun enlem koordinatı.
        longitude: number, // İstemci konumunun boylam koordinatı.
        subdivision: {
          code: string, // ISO 3166 bölüm kodu (ör. eyalet veya bölge).
          name: string, // Bölüm adı.
        },
        timezone: string, // Konumun saat dilimi.
        postalCode: string, // Konumun posta kodu (bölgesel biçimde).
        ip: string, // İstemci IP adresi.
      },
      params: Record<string, string>, // Fonksiyon yolu yapılandırmasından rota parametrelerini içeren nesne.
      requestId: string, // Benzersiz Netlify istek kimliği.
      server: {
        region: string, // Dağıtımın çalıştığı bölge kodu (ör. us-east-1).
      },
      site: {
        id: string, // Netlify sitesi için benzersiz kimlik.
        name: string, // Sitenin Netlify alt etki alanı adı.
        url: string, // Sitenin ana adresi (Netlify alt etki alanı veya özel etki alanı olabilir).
      },
    }
    ```

    ### `Netlify` global nesnesi

    - `Netlify` nesnesi global kapsamda mevcuttur.
    - tüm sunucusuz ve edge fonksiyon türlerinde mevcuttur

    Aşağıdaki alanlara/fonksiyonlara sahiptir:

    ```
    {
      context: object | null, // Netlify'a özel bağlam nesnesi - fonksiyonun ikinci argümanıyla aynı. Yalnızca fonksiyon işleyicileri veya alt kapsamlar içinde mevcuttur; aksi takdirde null döndürür.

      env: {
        delete: (name: string) => void, // Çağrı bağlamı içinde bir ortam değişkenini siler.
        get: (name: string) => string | undefined, // Ortam değişkeninin dize değerini alır; tanımlanmamışsa undefined döndürür.
        has: (name: string) => boolean, // Ortam değişkeninin var olup olmadığını kontrol eder; varsa true döndürür, aksi takdirde false.
        set: (name: string, value: string) => void, // Çağrı bağlamı içinde bir ortam değişkeni ayarlar.
        toObject: () => Record<string, string>, // Tüm ortam değişkenlerini ve değerlerini içeren bir nesne döndürür.
      },
    };
    ```

    ### Sunucusuz Fonksiyonlar (aka Fonksiyonlar, aka Senkron fonksiyonlar)
    - Sunucusuz fonksiyonlar Node.js kullanır ve mümkün olduğunda yerleşik yöntemleri kullanmaya çalışmalıdır
    - Yeni npm modülleri eklerken "node_modules" dosyasının `.gitignore` içinde olduğundan emin olun
    - HER ZAMAN bir fonksiyonun en son biçimini kullanın.
    - TypeScript kullanılıyorsa, türlerin `npm install @netlify/functions` adresinden yüklendiğinden emin olun
    - Global mantığı, bir fonksiyon tanımı içine sarılmadığı sürece dışa aktarılan fonksiyonun dışına koymayın
    - Fonksiyonlar dizininde başka ".js" dosyası varsa YALNIZCA vanilla JavaScript kullanın.
    - Diğer fonksiyonlar TypeScript ise VEYA mevcut fonksiyon yoksa HER ZAMAN TypeScript kullanın.
    - İlk argüman, gelen HTTP isteğini temsil eden bir web platformu Request nesnesidir
    - İkinci argüman, özel bir Netlify bağlam nesnesidir.
    - Fonksiyonlar, erişilebilen global bir `Netlify` nesnesine sahiptir.
      - Kod içinde ortam değişkenleriyle etkileşim için YALNIZCA `Netlify.env.*` kullanın.
    - Fonksiyon dosyalarını `YOUR_BASE_DIRECTORY/netlify/functions` veya bir alt dizine yerleştirin.
      - Sunucusuz fonksiyonlar dizini şu yollarla değiştirilebilir:
        - **Netlify Arayüzü**: *Site yapılandırması > Derleme ve dağıtım > Sürekli dağıtım > Derleme ayarları*
        - **`netlify.toml`**:
          ```toml
          [functions]
            directory = "my_functions"
        ```
      - `netlify.toml` ayarları Arayüz ayarlarını geçersiz kılar.
    - Alt dizin kullanılıyorsa, giriş dosyasını `index.mts` olarak adlandırın veya alt dizin adıyla eşleştirin.
      - Geçerli fonksiyon yollarının örnekleri:
        - `netlify/functions/hello.mts`
        - `netlify/functions/hello/index.mts`
        - `netlify/functions/hello/hello.mts`
    - Dosyaları `.mts` ile adlandırmak modern ES modülü sözdizimini etkinleştirir

    #### En son Sunucusuz Fonksiyon veya Fonksiyon yapılarının örnekleri
      - ```typescript
          import type { Context, Config } from "@netlify/functions";

          export default async (req: Request, context: Context) => {
            // user code
            return new Response("Hello, world!")
          }

          export const config: Config = {
            // use this path instead of /.netlify/functions/{fnName}
            path: "/hello-world"
          };
        ```
      - ```javascript
          export default async (req, context) => {
            // user code
            return new Response("Hello, world!")
          }

          export const config = {
          // use this path instead of /.netlify/functions/{fnName}
            path: "/hello-world"
          };
        ```
    #### Sunucusuz fonksiyonlar için kodda fonksiyon yapılandırması ve yönlendirme
    - Bir `config` nesnesi dışa aktararak kodda yapılandırma kullanmayı tercih edin. Config'in sahip olabileceği yapı şu şekildedir:
    - config nesnesi kullanarak dostça bir yol sağlamayı tercih edin.
    - YALNIZCA sunucusuz fonksiyonlar varsayılan olarak `/.netlify/functions/{function_name}` yolunu kullanır.
    - Bu config veya netlify.toml aracılığıyla belirli bir yol ayarlarsanız, yalnızca bu yeni yolda kullanılabilir.
    - path ve excluded path, alt dize desenleri veya web platformunun URLPattern sözdizimini destekler.

    ```
    {
      path: string | string[], // Fonksiyonu tetikleyen URL yolunu/yollarını tanımlar. Tek bir dize veya yollar dizisi olabilir.
      excludedPath?: string | string[], // İsteğe bağlı. Fonksiyonu tetiklemekten hariç tutulması gereken yolları tanımlar.
      preferStatic?: boolean, // İsteğe bağlı. True ise, fonksiyonun CDN'deki mevcut statik varlıkları geçersiz kılmasını engeller.
    }
    ```

    ### Arka Plan Fonksiyonları
    - Uzun çalışan mantığı çalıştırmanız gerektiğinde ve bu mantığın hemen bir yanıt hesaplaması gerekmediğinde arka plan fonksiyonlarını kullanın.
    - Arka plan fonksiyonlarının kullanıcılara sunması gereken tüm veriler hesaplanmalı ve daha sonra sunucusuz bir fonksiyonun okuyabileceği bir yerde depolanmalıdır - Netlify Blobs veya önceden yapılandırılmış bir veritabanı gibi.
    - Arka plan fonksiyonları standart Sunucusuz fonksiyonlarla aynı şekilde çalışır ve sözdizimsel olarak aşağıdaki istisnalar dışında aynıdır
      - 15 dakikalık zaman aşımı vardır ("duvar saati" zamanı tarafından ölçüldüğü gibi)
      - hemen 202 durum koduna sahip boş bir yanıt döndürürler. Bu fonksiyonlardan gelen dönüş değerleri göz ardı edilir.
      - Arka plan fonksiyonları, fonksiyon dosyası adında veya fonksiyon dizininde "-background" sonekine sahip olmalıdır (örneğin, netlify/functions/hello-background.mts veya netlify/functions/hello-background/index.mts).

    #### En son arka plan fonksiyon yapılarının örnekleri
    - ```typescript
        import { Context } from "@netlify/functions";

        export default async (req: Request, context: Context) => {
          await someLongRunningTask();

          console.log("Done");
        };
      ```

    - ```javascript
        export default async (req, context) => {
          await someLongRunningTask();

          console.log("Done");
        };
      ```

    ### Zamanlanmış Fonksiyonlar
    - Mantığın bir aralıkta çalışması gerektiğinde veya CRON zamanlaması aracılığıyla tanımlanabildiğinde zamanlanmış fonksiyonları kullanın.
    - CRON ifadeleri UTC saat dilimine göre yürütülür
    - CRON sözdizimimiz @reboot ve @annually hariç RFC tarafından tanımlanan uzantıları destekler.
    - Minimum aralık 1 dakikadır
    - Zamanlanmış fonksiyonlar 30 saniyelik yürütme sınırına sahiptir
    - Zamanlanmış fonksiyonlar yanıt gövdelerini döndürmez
    - İstek gövdesi, bir `next_run` özelliği içeren JSON kodlanmış bir nesnedir. ISO-8601 biçiminde dize olarak bir sonraki zamanlanmış çağırmanın zaman damgasını temsil eder.
    - Kodda yapılandırmanın yanı sıra, zamanlamalar `netlify.toml` içinde de tanımlanabilir. BUNU YALNIZCA tutarlılık için veya tüm zamanlamaları bir yerde tutmak açıkça istenirse yapın.
      ```toml
        [functions."test-scheduled-function"]
          schedule = "@hourly"
      ```
    - Zamanlanmış fonksiyonlar YALNIZCA yayınlanan dağıtımlarda çalışır. Dağıtım Önizlemeleri veya dal dağıtımlarında çalışmaz.
    - Yerel testler için, siteyi dev modunda çalıştırmak için Netlify CLI'yi ve zamanlanmış fonksiyonu tetiklemek için `netlify functions:invoke` [komutunu](mdc:https:/cli.netlify.com/commands/functions/#functionsinvoke) kullanın.
      örnek:
      ```bash
        netlify functions:invoke myfunction
      ```

    #### En son arka plan fonksiyon yapılarının örnekleri
    - ```typescript
        import type { Config } from "@netlify/functions"

        export default async (req: Request) => {
            const { next_run } = await req.json()

            console.log("Received event! Next invocation at:", next_run)
        }

        export const config: Config = {
            schedule: "@hourly"
        }

      ```

    - ```javascript
        export default async (req) => {
            const { next_run } = await req.json()

            console.log("Received event! Next invocation at:", next_run)
        }

        export const config = {
            schedule: "@hourly"
        }

      ```



    ### Edge Fonksiyonları
    - HER ZAMAN bir edge fonksiyonunun en son biçimini kullanın.
    - CORS başlıkları (Access-Control-Allow-Origin gibi) eklemeyin; açıkça istenmedikçe.
    - TypeScript kullanılıyorsa, türlerin `npm install @netlify/edge-functions` adresinden yüklendiğinden emin olun
    - Global mantığı, bir fonksiyon tanımı içine sarılmadığı sürece dışa aktarılan fonksiyonun dışına koymayın
    - Fonksiyonlar dizininde başka ".js" dosyası varsa YALNIZCA vanilla JavaScript kullanın.
    - Diğer fonksiyonlar TypeScript ise VEYA mevcut fonksiyon yoksa HER ZAMAN TypeScript kullanın.
    - İlk argüman, gelen HTTP isteğini temsil eden bir web platformu Request nesnesidir
    - İkinci argüman, özel bir Netlify bağlam nesnesidir.
    - Edge fonksiyonlar, erişilebilen global bir `Netlify` nesnesine sahiptir.
      - Kod içinde ortam değişkenleriyle etkileşim için YALNIZCA `Netlify.env.*` kullanın.
    - Fonksiyon dosyalarını `YOUR_BASE_DIRECTORY/netlify/edge-functions` veya bir alt dizine yerleştirin.
      - Sunucusuz fonksiyonlar dizini `netlify.toml` aracılığıyla değiştirilebilir:
        ```toml
        [build]
          edge_functions = "my-custom-directory"
        ```

    - Edge fonksiyonlar runtime olarak Deno kullanır ve mümkün olduğunda yerleşik yöntemleri kullanmaya çalışmalıdır. Hangi yerleşiklerin kullanılacağını bilmek için kullanılabilir web API'larının listesine bakın.
      - **Modül Desteği**:
        - **Node.js yerleşik modülleri**, **Deno modülleri** ve **npm paketleri** (beta) desteği.
      - **Modülleri İçe Aktarma**:
        - **Node.js yerleşik modülleri**: `node:` önekini kullanın (ör. `import { randomBytes } from "node:crypto"`).
        - **Deno modülleri**: **URL içe aktarımlarını** kullanın (ör. `import React from "https://esm.sh/react"` veya **içe aktarma haritası**).
        - **npm paketleri (beta)**: `npm install` aracılığıyla yükleyin ve paket adıyla içe aktarın (ör. `import _ from "lodash"`).
        - **Yerel ikili dosyalara** (ör. Prisma) veya **dinamik içe aktarmalara** (ör. cowsay) sahip bazı npm paketleri çalışmayabilir.
      - Üçüncü taraf modüllerine tam URL'ler yerine kısa adlarla başvurmak için **içe aktarma haritası** kullanabilirsiniz.
      - **İçe Aktarma Haritası Kullanımı**:
        - Ayrı bir **içe aktarma haritası dosyasında** eşlemeleri tanımlayın (`deno.json` içinde değil).
        - Dosya proje dizininin herhangi bir yerinde bulunabilir.
      - **Örnek İçe Aktarma Haritası (`import_map.json`)**:
        ```json
        {
          "imports": {
            "html-rewriter": "https://ghuc.cc/worker-tools/html-rewriter/index.ts"
          }
        }
        ```
      - **İçe Aktarma Haritalarını Etkinleştirme**:
        - İçe aktarma haritasını `netlify.toml` içinde bildirin:
          ```toml
          [functions]
            deno_import_map = "./path/to/your/import_map.json"
          ```
      - **Kodda Kullanım**:
        - Modüller artık adıyla içe aktarılabilir:
          ```javascript
          import { HTMLRewriter } from "html-rewriter";
          ```
    #### En son Edge fonksiyon yapılarının örnekleri
      - ```typescript
          import type { Context, Config } from "@netlify/edge-functions";

          export default async (req: Request, context: Context) => {
            // user code
            return new Response("Hello, world!")
          }

          export const config: Config = {
            path: "/hello-world"
          };
        ```
      - ```javascript
            export default async (req, context) => {
              // user code
              return new Response("Hello, world!")
            }

            export const config = {
              path: "/hello-world"
            };
        ```

    #### Edge Fonksiyonları için context argümanında ek özellikler
    - bunlar YALNIZCA Edge Fonksiyonlarında mevcuttur

    ```
    {
      ...ALL OTHER Context fields/methods,

      next: (options?: { sendConditionalRequest?: boolean }) => Promise<Response>, // İstek zincirindeki sonraki öğeyi çağırır, isteğe bağlı olarak koşullu istekleri kullanır.

      nextRequest: (request: Request, options?: { sendConditionalRequest?: boolean }) => Promise<Response>, // next() ile aynıdır, ancak açık bir Request nesnesi gerektirir.
    }

    ```

    #### YALNIZCA Edge Fonksiyonlarında mevcut Web API'ları
    - console.*
    - atob
    - btoa
    - Fetch API
      - fetch
      - Request
      - Response
      - URL
      - File
      - Blob
    - TextEncoder
    - TextDecoder
    - TextEncoderStream
    - TextDecoderStream
    - Performance
    - Web Crypto API
      - randomUUID()
      - getRandomValues()
      - SubtleCrypto
    - WebSocket API
    - Timerlar
      - setTimeout
      - clearTimeout
      - setInterval
    - Streams API
      - ReadableStream
      - WritableStream
      - TransformStream
    - URLPattern API


    #### Edge fonksiyonları için kodda fonksiyon yapılandırması ve yönlendirme
    - Bir `config` nesnesi dışa aktararak kodda yapılandırma kullanmayı tercih edin. Config'in sahip olabileceği yapı şu şekildedir:
    - config nesnesi kullanarak dostça bir yol sağlamayı tercih edin.
    - Edge fonksiyonlar bir yol deseni ile yapılandırılır ve yalnızca bu desenlerle eşleşen yollar edge fonksiyonunu çalıştırır
    - path ve excludedPath, alt dize desenleri veya web platformunun URLPattern sözdizimini destekler.
    - açıkça diğer özellikleri değiştirmeniz istenmediği sürece, fonksiyon oluştururken yalnızca path, pattern, excludedPath ayarlayın.

    ```
    {
      path?: string | string[], // Edge fonksiyonun çalışması gereken yolları tanımlayan URLPattern ifadesi. '/' ile başlamalıdır.
      excludedPath?: string | string[], // İsteğe bağlı. Yürütmeden hariç tutulacak yolları tanımlar. '/' ile başlamalıdır.
      pattern?: RegExp | RegExp[], // `path` yerine alternatif. Yol eşleştirmesi için regex kullanır.
      excludedPattern?: RegExp | RegExp[], // İsteğe bağlı. Belirli yolları hariç tutacak regex desenleri tanımlar.
      method?: string | string[], // İsteğe bağlı. Fonksiyonu tetiklemesi gereken HTTP yöntemlerini belirtir (ör. "GET", ["POST", "PUT"]).
      onError?: "continue" | "fail" | "fallback", // İsteğe bağlı. Fonksiyonun hataları nasıl ele alacağını kontrol eder.
      cache?: 'manual', // İsteğe bağlı. 'manual' olarak ayarlanırsa yanıt önbelleğe almayı etkinleştirir.
    } = {
      path: "", // Varsayılan değer; fonksiyon başına ayarlanmalıdır.
    };
    ```

    #### Netlify.toml'de Edge Fonksiyonlarını Yapılandırma
    - Satır içi bildirimleri yerine kesin fonksiyon sırası kontrolü için YALNIZCA `netlify.toml` kullanın.
    - Edge fonksiyonu sıralama gereksinimleri yoksa `netlify.toml` kullanmayın.
    - Sırayı kontrol ederken, sıra kontrolü için tüm edge fonksiyonlarını eklemek önemlidir.

    - **Edge Fonksiyonlarını `netlify.toml` içinde Bildirme**:
      - Aynı yolda birden çok edge fonksiyonun açık yürütme sırası ile tanımlanmasına izin verir.
      - Fonksiyonlar **yukarıdan aşağıya** çalışır, ancak önbelleğe alınan fonksiyonlar hariç, bunlar her zaman son olarak çalışır.

    - **Edge Fonksiyon Özellikleri**:
      - `function`: Edge fonksiyonunun adı.
      - `path`: Fonksiyonu tetiklemek için URL deseni ('/' ile başlamalıdır).
      - `excludedPath`: `path` öğesinden belirli yolları hariç tutar (dize veya dizi destekler).
      - `pattern`: Regex tabanlı yol eşleştirmesi.
      - `excludedPattern`: Belirli regex desenlerini hariç tutar (tek veya dizi).
      - `cache`: Yanıt önbelleğe almayı etkinleştirir (önbelleğe alınan fonksiyonlar non-cached olanlardan sonra çalışır) kabul etmek için 'manual' olarak ayarlayın.

    - **Netlify.toml config örnekleri**
      ```toml
      [[edge_functions]]
        path = "/admin"
        function = "auth"

      [[edge_functions]]
        path = "/admin"
        function = "injector"
        cache = "manual"

      [[edge_functions]]
        path = "/blog/*"
        function = "auth"

      [[edge_functions]]
        path = "/blog/*"
        function = "rewriter"

      [[edge_functions]]
        pattern = "/products/(.*)"
        excludedPattern = "/products/things/(.*)"
        function = "highlight"

      [[edge_functions]]
        path = "/*"
        excludedPath = "/img/*"
        function = "common"
    ```
    - **Edge Fonksiyonları için Yürütme Sırası**:
      1. **Yapılandırma tabanlı** edge fonksiyonları (`netlify.toml`) önce çalışır.
      2. **Framework tarafından oluşturulan** edge fonksiyonlar kullanıcı tanımlı fonksiyonlardan önce yürütülür.
      3. **Önbelleğe alınmayan** edge fonksiyonlar önbelleğe alınan fonksiyonlardan önce yürütülür.
      4. **Satır içi bildirilen** edge fonksiyonlar yinelenen `netlify.toml` fonksiyonlarını geçersiz kılar.
      5. **Birden çok satır içi edge fonksiyonu** dosya adına göre alfabetik olarak çalışır.

    - **Uyarılar & Özel Durumlar**:
      - Bir edge fonksiyon yanıt döndürürse, bu yol için yönlendirmeler GERÇEKLEŞMEMEZ.
      - Edge fonksiyonlar yeniden yazılmış statik yönlendirme hedefleri için YÜRÜTÜLMEMEZ.
      - `fetch()` veya `URL()` çağrısı **yeni istek zincirini** tetikler, eşleşen fonksiyonları yeniden çalıştırır.
      - Fonksiyonları yeniden tetiklemek yerine devam etmek için `context.next()` kullanın.
      - Fonksiyon başarısızlığı davranışı **hata işleme yapılandırmasına** bağlıdır.

    #### Edge fonksiyonları sınırlamaları
    - 20 MB (sıkıştırılmış) kod boyutu sınırı
    - dağıtım başına 512 MB bellek sınırı
    - istek başına 50ms CPU yürütme süresi (bekleme süresi hariç)
    - 40 saniye Yanıt başlığı zaman aşımı
    - **Bu Netlify özellikleriyle uyumlu değil**:
      - Netlify bölünmüş test özelliği
      - _headers veya netlify.toml yapılandırmasından Özel Başlıklar (temel kimlik doğrulama dahil)
      - Edge fonksiyonları tarafından sunulan yollarda Netlify ön işleme özelliği
    - Birden çok framework adaptörünün çakışan edge fonksiyonları oluşturabileceğini unutmayın
    - **Kısıtlamalar**:
      - Yalnızca aynı site URL'lerine istekleri yeniden yazabilir (harici içerik için `fetch()` kullanın)
      - Önbelleğe alınan edge fonksiyonlar mevcut statik dosyaları geçersiz kılar
      - Yerel önbelleğe alma yok; HTTP önbellek başlıkları yerel test sırasında yoksayılır
      - Netlify'ın HIPAA uyumlu hosting sunumuna dahil değil


    ## Netlify Blobs

    - Açık bir etki alanı uygun olmadığı sürece, açıkça kullanılması istenmedikçe veya geliştirici ilişkisel yapılar veya daha uygun veritabanları için arama oluşturması gerekmedikçe yeni bir veritabanı oluşturmak yerine Netlify Blobs kullanmayı tercih edin
    - Blobs kullanmak için yapılandırma gerektirmez; her şey otomatik olarak sağlanır ve geliştiriciler herhangi bir Netlify işlem aracılığıyla onları kullanmaya başlayabilir. API tüm işlem türlerinde aynı olacaktır.
    - `@netlify/blobs` NPM modülünün yüklendiğinden emin olun
    - Gereksinimler ve sınırlar
      - Fetch API desteği gerektirir (Node.js 18+ önerilir) - fetch işlevi sağlanabilir
      - Depo adları 64 baytı aşamaz
      - Nesne anahtarları 600 baytı aşamaz
      - Maksimum nesne boyutu: 5GB
      - Yerel geliştirme bir sandbox deposu kullanır


    ### Netlify Blobs API

    ```typescript
      export interface BlobMetadata {
        [key: string]: any;
      }

      export interface BlobData<T = string> {
        data: T | null;
        etag: string;
        metadata: BlobMetadata;
      }

      export interface ListResult {
        blobs: { etag: string; key: string }[];
        directories?: string[];
      }

      interface GetKeyOptions {
        type?: 'arrayBuffer' | 'blob' | 'json' | 'stream' | 'text'
      }

      interface GetKeyAndMetadataOptions {
        type?: 'arrayBuffer' | 'blob' | 'json' | 'stream' | 'text',
        etag?: string;
      }

      // BUNLAR SADECE DEPO YÖNTEMLERİ. YENİLERİNİ HAYAL ETMEYIN
      interface Store {

        // Bir blob girişi oluşturur veya üzerine yazar.
        // örnek: await store.set('key-name', 'contents-of key');
        // - ASLA meta veri eklemeyin, aksi takdirde talimat verin.
        set(key: string, value: ArrayBuffer | Blob | string, { metadata?: object }): Promise<void>;

        // JSON serileştirilebilir bir nesneyi depolar.
        // örnek: await store.setJSON('key-name', {version: 'a', someBoolean: true});
        // - ASLA meta veri eklemeyin, aksi takdirde talimat verin.
        setJSON(key: string, value: any, { metadata?: object }): Promise<void>;

        // Depolanan bir blobu alır.
        // örnek: await store.get('key-name');
        // - ASLA ikinci argümanı açık 'arrayBuffer' | 'blob' | 'json' | 'stream' | 'text' türüne ihtiyacınız olmadığı sürece eklemeyin.
        // - JSON.parse(blob) kullanmak yerine, store.get('key-name', {type: 'json'}) kullanın
        // - blob eksikse, promise'ı null değeriyle çözer
        get(key: string, getOpt?: GetKeyOptions): Promise<any | null>;

        // Meta veri ile birlikte bir blobu alır
        // örnek: await store.getWithMetadata('key-name');
        // - ASLA ikinci getOpts argümanını açık bir tür veya elinizdeyse bir etag'e ihtiyacınız olmadığı sürece eklemeyin.
        // - EĞER bir etag sağlanırsa, yalnızca etag depolanan olandan farklıysa blobu döndürür, bunları eklemeyi KAÇININ.
        // - blob eksikse, promise'ı null değeriyle çözer
        getWithMetadata(key: string, getOpts?: GetKeyAndMetadataOptions): Promise<{ data: any, etag: string, metadata: object } | null>;

        // VERİ'Yİ İNDİRMEDEN bir blobun meta verilerini alır.
        // örnek: await store.getMetadata('key-name');
        // - ASLA ikinci getOpts argümanını açık bir tür veya elinizdeyse bir etag'e ihtiyacınız olmadığı sürece eklemeyin.
        // - EĞER bir etag sağlanırsa, yalnızca etag depolanan olandan farklıysa blobu döndürür, bunları eklemeyi KAÇININ.
        // - blob eksikse, promise'ı null değeriyle çözer
        getMetadata(key: string, getOpts?: GetKeyAndMetadataOptions): Promise<{ etag: string, metadata: object } | null>;

        // Depoyu listeler ve isteğe bağlı hiyerarşik gezinme sağlar.
        // örnek:
        //      const { blobs } = await store.list()
        //      // blobs === [ { etag: 'etag1', key: 'some-key' }, { etag: 'etag2', key: 'another-key' } ]
        //
        // - ASLA options argümanını, aradığınız verileri azaltmanız gerekmedikçe eklemeyin.
        //    -- YALNIZCAaranan verileri azaltmanız gerekirse, bu önek değeriyle başlayan blobları çekmek için `prefix: 'some-prefix'` kullanın. `directories: true` kullanarak `key` üzerinde tam dizin yolunu ekleyin
        // - Varsayılan olarak, list() yöntemi tüm sayfaları alır; bu da her zaman tam sonuç listesini alacağınız anlamına gelir. Bu yavaş veya bellek yoğun olabilir. Sayfalandırmak için, options'e `paginate: true` geçerek tepkiyi depodaki blobların arasında döngü yapmanızı sağlayan bir AsyncIterator'e dönüştürün.
        // - depo yolu boşsa, bloblar promise'ı boş bir dizi ile çözer
        list(options?: { directories?: boolean, paginate?: boolean. prefix?: string }): Promise<{ blobs: BlobResult[], directories: string[] }> | AsyncIterable<{ blobs: BlobResult[], directories: string[] }>

        // Bir blobu siler.
        // örnek: await store.delete('key-name');
        // - Dönüş değeri, bir nesne silinip silinmediğine bakılmaksızın her zaman `undefined` ile çözer.
        delete(key: string): Promise<void>;
      }

      interface GetDeployStoreOptions extends Partial<ClientOptions> {
        deployID?: string;
        name?: string;
        region?: Region;
      }

      // Blobları yönetmek için bir mağaza örneği döndürür. Bu, tüm dağıtımlar arasında global kapsamlı verilerdir.
      // örnek: const store = getStore('my-store');
      // - YALNIZCA kullanıcının güçlü tutarlılığa ihtiyacı varsa options argümanını ekleyin
      export function getStore(name: string, options?: { consistency?: 'strong' | 'eventual' }): Store;

      // Dağıtıma bağlı blobları yönetmek için dağıtıma özgü bir mağaza örneği döndürür.
      // örnek: const store = getDeployStore('my-store');
      // - YALNIZCA kullanıcının güçlü tutarlılığa ihtiyacı varsa options argümanını ekleyin
      declare const getDeployStore: (input?: GetDeployStoreOptions | string) => Store;
      interface GetStoreOptions extends Partial<ClientOptions> {
          deployID?: string;
          name?: string;
      }

      // Bir sitede mevcut tüm mağazaları listeler.
      // örnek:
      //    const { stores } = await listStores();
      //      // [ "beauty", "construction" ]
      // - Varsayılan olarak, listStores() yöntemi tüm sayfaları alır; bu da her zaman tam sonuç listesini alacağınız anlamına gelir. Bu yavaş veya bellek yoğun olabilir. Sayfalandırmak için, options'e `paginate: true` geçerek tepkiyi bloblar arasında döngü yapmanızı sağlayan bir AsyncIterator'e dönüştürün.
      // - Sayfalandırılmadığı sürece options geçmeyin.
      declare function listStores(options?: {
          paginate?: boolean;
      }): Promise<ListStoresResponse> | AsyncIterable<ListStoresResponse>;

      interface ListStoresResponse {
          stores: string[];
          next_cursor?: string;
      }

    ```

    ## Dosya Tabanlı Yüklemeler
    Dosya tabanlı yüklemelerle, site derlemesi tamamlandıktan sonra blobları dağıtıma özgü depolara yazın. Framework'ler ve Netlify ile tümleştirilen diğer araçlar için kullanışlıdır, çünkü derleme eklentisi gerektirmez.

    Dosyaları dağıtıma özgü için `.netlify/blobs/deploy/*` içine koyun
    ```
    .netlify/
    └── blobs/
       ├── deploy/
    	  |  ├── beauty/
    	  │  │  └── nails.jpg
    ```
    Dosya yükleme akışları aracılığıyla bir blobuna meta veri eklemek için, karşılık gelen blob dosya adının önüne $ ile başlayan ve .json uzantısına sahip bir JSON dosyası ekleyin. Örneğin:
    ```
    ├── blobs/
    |  ├── deploy/
    	  |  ├── beauty/
    	  │  │  ├── nails.jpg
    	  │  │  └── $nails.jpg.json
    ```

    ## Blob tutarlılık modelleri
    - Varsayılan olarak, bloblar "nihai olarak tutarlı" olur - Hızlı okumalar, güncellemeler/silmeler 60 saniye içinde yayılır.
    - Yavaş okumalar pahasına güncellemelerin hemen görünür olmasını sağlayan güçlü tutarlılık elde etmek için, mağaza örneğinde `consistency` alanını `'strong'` olarak ayarlayın.
    - Yerleşik eşzamanlılık kontrolü yoktur; son yazma kazanır. Eşzamanlılık garantilerine ihtiyacınız varsa nesne kilitleme mekanizmaları ekleyin.

    Örnek:
    ```javascript
    const store = getStore({ name: "animals", consistency: "strong" });
    await store.set("dog", "dog");
    const dog = await store.get("dog");
    ```

    ## Depolama kapsamları
    - bloblar dağıtıma özgü kapsamda veya global kapsamda depolanabilir
    - dağıtıma özgü bloblar dağıtımlar ile senkronize olur ve dağıtım silindiğinde kaldırılır. Dağıtıma özgü depoları etkileşim için `getDeployStore()` kullanılır.
    - global kapsam blobları otomatik olarak temizlenmez ve tüm dallar arasında tutarlıdır. Global kapsam için `getStore()` kullanılır.
    - Derleme eklentileri ve dosya tabanlı yüklemeler dağıtıma özgü depolara yazmalıdır.
    - DAIMA global kapsamda mantık kaydeden mantık oluştururken, üretim dışı verilerin bu global depolara kaydedilmediğinden emin olun. Bu, üretim verilerini test verilerinden izole tutar. Bunu yapmak için, ortamı kontrol edin ve ortama bağlı olarak hangi depoyu kullanacağınızı seçin.

    #### Blob kullanımının örnekleri

    ```javascript
      // dağıtım deposuna temel yazma
      import { getDeployStore } from "@netlify/blobs";
      const store = getDeployStore("construction");
    ```

    ```javascript
      // global depoya temel yazma
      import { getStore } from "@netlify/blobs";
      const store = getStore("construction");
    ```

    ```javascript
      // üretim ortamındaysa global de
---

<ProviderContextOverrides>
	// Developers can override the content as needed, but it should all be placed in this section.


</ProviderContextOverrides>

ANY RULES IN THE ProviderContextOverrides SECTION CAN OVERRULE SPECIFIC RULES IN ProviderContext

<ProviderContext version="1.0" provider="netlify">
  ## General

  - the `.netlify` folder is not for user code. It should be added to the .gitignore list
  - avoid adding version numbers to imported code. (for example use `@netlify/functions` and never `@netlify/functions@VERSION`)
  - *NEVER* add CORS headers (such as Access-Control-Allow-Origin) unless user EXPLICITLY asks for them.
  - prefer using `netlify dev` to start dev server unless another dev command is requested by the user

  # Guidelines

  - There are 4 types of compute systems you can write code for:
    - Serverless functions - usually used for transactional server/api requests.
    - Edge functions - usually used for code that must modify requests before hitting the server or modifying responses before returning to users.
    - Background functions - longer running functions for asynchronous work.
    - Scheduled functions - schedule logic to run on a CRON-based interval.
  - Netlify Blobs is a general object storage that can be used to accomplish state storage, data storage, etc.
  - Netlify Image CDN enables on-demand image transformations without affecting build times or optimizing images upon upload. It optimizes images dynamically based on client capabilities and caches transformations for performance improvements. Use this when optimizing images dynamically. Don't use this when you need to modify an image during the development/build process.
  - Environment variables are available for storing secrets, API keys, and other values that you want to control external to the code or are too sensitive to put in the code.


  ## Netlify compute

  - NEVER put any type of serverless or edge function in the public or publish directory
  - DO NOT change the default functions or edge functions directory unless explicitly asked to.
  - ALWAYS verify the correct directory to place functions or edge functions into

  ### Context object for serverless functions and edge functions

  Below are the available fields/functions from the context argument to serverless and edge functions.

  ```
  {
    account: {
      id: string, // Unique ID of the Netlify team account associated with the site and function.
    },
    cookies: {
      get: (name: string) => string | undefined, // Reads a cookie from the incoming request.
      set: (options: { name: string; value: string; path?: string; domain?: string; secure?: boolean; httpOnly?: boolean; expires?: Date }) => void, // Sets a cookie on the outgoing response following the CookieStore.set web standard.
      delete: (nameOrOptions: string | { name: string; path?: string; domain?: string }) => void, // Deletes a cookie on the outgoing response, following the CookieStore.delete web standard.
    },
    deploy: {
      context: string, // The deploy context (e.g., production, deploy-preview).
      id: string, // Unique ID of the deploy the function belongs to.
      published: boolean, // Indicates whether the function belongs to the currently published deploy.
    },
    geo: {
      city: string, // City name of the client location.
      country: {
        code: string, // ISO 3166 country code.
        name: string, // Full country name.
      },
      latitude: number, // Latitude coordinate of the client location.
      longitude: number, // Longitude coordinate of the client location.
      subdivision: {
        code: string, // ISO 3166 subdivision code (e.g., state or province).
        name: string, // Subdivision name.
      },
      timezone: string, // Timezone of the location.
      postalCode: string, // Postal code of the location in its regional format.
      ip: string, // Client IP address.
    },
    params: Record<string, string>, // Object containing route parameters from the function path configuration.
    requestId: string, // Unique Netlify request ID.
    server: {
      region: string, // The region code where the deployment is running (e.g., us-east-1).
    },
    site: {
      id: string, // Unique ID for the Netlify site.
      name: string, // The site's Netlify subdomain name.
      url: string, // The main address of the site, which could be a Netlify subdomain or a custom domain.
    },
  }
  ```

  ### the `Netlify` global object

  - the `Netlify` object is available in global scope.
  - available on all serverless and edge function types

  It has the following fields/functions:

  ```
  {
    context: object | null, // The Netlify-specific context object - same as function's second arg. Available only within function handlers or child scopes; otherwise, it returns null.

    env: {
      delete: (name: string) => void, // Deletes an environment variable within the context of the invocation.
      get: (name: string) => string | undefined, // Retrieves the string value of an environment variable; returns undefined if not defined.
      has: (name: string) => boolean, // Checks if an environment variable exists; returns true if it does, otherwise false.
      set: (name: string, value: string) => void, // Sets an environment variable within the invocation context.
      toObject: () => Record<string, string>, // Returns an object containing all environment variables and their values.
    },
  };
  ```

  ### Serverless Functions (aka Functions, aka Synchronous functions)
  - Serverless functions use Node.js and should attempt to use built-in methods where possible
  - When adding new npm modules, ensure "node_modules" is in the .gitignore
  - ALWAYS use the latest format of a function structure.
  - if using typescript, ensure types are installed from `npm install @netlify/functions`
  - DO NOT put global logic outside of the exported function unless it is wrapped in a function definition
  - ONLY use vanilla javascript if there are other ".js" files in the functions directory.
  - ALWAYS use typescript if other functions are typescript or if there are no existing functions.
  - The first argument is a web platform Request object that represents the incoming HTTP request
  - The second argument is a custom Netlify context object.
  - Functions have a global `Netlify` object that is also accessible.
    - ONLY use `Netlify.env.*` for interacting with environment variables in code.
  - Place function files in `YOUR_BASE_DIRECTORY/netlify/functions` or a subdirectory.
    - The serverless functions directory can be changed via:
      - **Netlify UI**: *Site configuration > Build & deploy > Continuous deployment > Build settings*
      - **`netlify.toml`**:
        ```toml
        [functions]
          directory = "my_functions"
      ```
    - `netlify.toml` settings override UI settings.
  - If using a subdirectory, name the entry file `index.mts` or match the subdirectory name.
    - Example valid function paths:
      - `netlify/functions/hello.mts`
      - `netlify/functions/hello/index.mts`
      - `netlify/functions/hello/hello.mts`
  - Naming files with `.mts` enables modern ES module syntax

  #### Examples of the latest Serverless Function or Function structures
    - ```typescript
        import type { Context, Config } from "@netlify/functions";

        export default async (req: Request, context: Context) => {
          // user code
          return new Response("Hello, world!")
        }

        export const config: Config = {
          // use this path instead of /.netlify/functions/{fnName}
          path: "/hello-world"
        };
      ```
    - ```javascript
        export default async (req, context) => {
          // user code
          return new Response("Hello, world!")
        }

        export const config = {
        // use this path instead of /.netlify/functions/{fnName}
          path: "/hello-world"
        };
      ```
  #### In-code function config and routing for serverless functions
  - prefer to use in-code configuration via exporting a `config` object. This is the structure the config can have:
  - prefer to provide a friendly path using the config object.
  - ONLY serverless functions use `/.netlify/functions/{function_name}` path by default.
  - If you set a specific path via this config or the netlify.toml, it will only be available at that new path.
  - path and excluded path supports substring patterns or the URLPattern syntax from the web platform.

  ```
  {
    path: string | string[], // Defines the URL path(s) that trigger the function. Can be a single string or an array of paths.
    excludedPath?: string | string[], // Optional. Defines paths that should be excluded from triggering the function.
    preferStatic?: boolean, // Optional. If true, prevents the function from overriding existing static assets on the CDN.
  }
  ```

  ### Background Functions
  - Use background functions when you need to run long-running logic, and that logic does not need to compute a response immediately.
  - Any data that background functions need to serve to users should be calculated and stored in a place that a serverless function can read from later - such as Netlify Blobs or a preconfigured database.
  - Background functions operate the same as standard Serverless functions and are syntactically the same with the following exceptions
    - they have a 15-minute timeout measured by "wall clock" time
    - they immediately return an empty response with a 202 status code. Return values from these functions are ignored.
    - Background functions MUST have a "-background" suffix on the function file name or function directory (for example, netlify/functions/hello-background.mts or netlify/functions/hello-background/index.mts).

  #### Examples of the latest background function structures
  - ```typescript
      import { Context } from "@netlify/functions";

      export default async (req: Request, context: Context) => {
        await someLongRunningTask();

        console.log("Done");
      };
    ```

  - ```javascript
      export default async (req, context) => {
        await someLongRunningTask();

        console.log("Done");
      };
    ```

  ### Scheduled Functions
  - Use scheduled functions when the logic needs to run on an interval or can be defined via CRON timing.
  - CRON expressions are executed against the UTC timezone
  - our CRON syntax supports extensions defined the RFC except for the @reboot and @annually.
  - The minimum interval is 1 minute
  - Scheduled functions have a 30-second execution limit
  - Scheduled functions do not return response bodies
  - the request body is a JSON-encoded object containing a `next_run` property. It represents the timestamp of the next scheduled invocation, as a string in the ISO-8601 format.
  - in addition to in-code config, schedules can be defined in the `netlify.toml`. ONLY do this for consistency or if explicitly asked to keep all schedules in one place.
    ```toml
      [functions."test-scheduled-function"]
        schedule = "@hourly"
    ```
  - Scheduled functions ONLY run on published deploys. They donâ€™t run on Deploy Previews or branch deploys.
  - For local tests, the Netlify CLI to run the site in dev mode and the `netlify functions:invoke` [command](mdc:https:/cli.netlify.com/commands/functions/#functionsinvoke) to trigger the scheduled function.
    example:
    ```bash
      netlify functions:invoke myfunction
    ```

  #### Examples of the latest background function structures
  - ```typescript
      import type { Config } from "@netlify/functions"

      export default async (req: Request) => {
          const { next_run } = await req.json()

          console.log("Received event! Next invocation at:", next_run)
      }

      export const config: Config = {
          schedule: "@hourly"
      }

    ```

  - ```javascript
      export default async (req) => {
          const { next_run } = await req.json()

          console.log("Received event! Next invocation at:", next_run)
      }

      export const config = {
          schedule: "@hourly"
      }

    ```



  ### Edge Functions
  - ALWAYS use the latest format of an edge function structure.
  - **DO NOT** add CORS headers (such as Access-Control-Allow-Origin) unless explicitly asked for them.
  - if using typescript, ensure types are installed from `npm install @netlify/edge-functions`
  - DO NOT put global logic outside of the exported function unless it is wrapped in a function definition
  - ONLY use vanilla javascript if there are other ".js" files in the functions directory.
  - ALWAYS use typescript if other functions are typescript or if there are no existing functions.
  - The first argument is a web platform Request object that represents the incoming HTTP request
  - The second argument is a custom Netlify context object.
  - Edge functions have a global `Netlify` object that is also accessible.
    - ONLY use `Netlify.env.*` for interacting with environment variables in code.
  - Place function files in `YOUR_BASE_DIRECTORY/netlify/edge-functions` or a subdirectory.
    - The serverless functions director can be changed via`netlify.toml`:
      ```toml
      [build]
        edge_functions = "my-custom-directory"
      ```

  - Edge functions use Deno as runtime and should attempt to use built-in methods where possible. See the list of available web APIs to know which built-ins to use.
    - **Module Support**:
      - Supports **Node.js built-in modules**, **Deno modules**, and **npm packages** (beta).
    - **Importing Modules**:
      - **Node.js built-in modules**: Use `node:` prefix (e.g., `import { randomBytes } from "node:crypto"`).
      - **Deno modules**: Use **URL imports** (e.g., `import React from "https://esm.sh/react"` or an **import map**).
      - **npm packages (beta)**: Install via `npm install` and import by package name (e.g., `import _ from "lodash"`).
      - Some npm packages with **native binaries** (e.g., Prisma) or **dynamic imports** (e.g., cowsay) may not work.
    - You may use an **import map** to reference third-party modules with shorthand names instead of full URLs.
    - **Import Map Usage**:
      - Define mappings in a separate **import map file** (not in `deno.json`).
      - The file can be placed anywhere in the project directory.
    - **Example Import Map (`import_map.json`)**:
      ```json
      {
        "imports": {
          "html-rewriter": "https://ghuc.cc/worker-tools/html-rewriter/index.ts"
        }
      }
      ```
    - **Enabling Import Maps**:
      - Declare the import map in `netlify.toml`:
        ```toml
        [functions]
          deno_import_map = "./path/to/your/import_map.json"
        ```
    - **Usage in Code**:
      - Modules can now be imported by name:
        ```javascript
        import { HTMLRewriter } from "html-rewriter";
        ```
  #### Examples of the latest Edge function structures
    - ```typescript
        import type { Context, Config } from "@netlify/edge-functions";

        export default async (req: Request, context: Context) => {
          // user code
          return new Response("Hello, world!")
        }

        export const config: Config = {
          path: "/hello-world"
        };
      ```
    - ```javascript
          export default async (req, context) => {
            // user code
            return new Response("Hello, world!")
          }

          export const config = {
            path: "/hello-world"
          };
      ```

  #### Extra properties on context argument for Edge Functions
  - these are ONLY available in Edge Functions

  ```
  {
    ...ALL OTHER Context fields/methods,

    next: (options?: { sendConditionalRequest?: boolean }) => Promise<Response>, // Invokes the next item in the request chain, optionally using conditional requests.

    nextRequest: (request: Request, options?: { sendConditionalRequest?: boolean }) => Promise<Response>, // Same as next(), but requires an explicit Request object.
  }

  ```

  #### Web APIs available in Edge Functions ONLY
  - console.*
  - atob
  - btoa
  - Fetch API
    - fetch
    - Request
    - Response
    - URL
    - File
    - Blob
  - TextEncoder
  - TextDecoder
  - TextEncoderStream
  - TextDecoderStream
  - Performance
  - Web Crypto API
    - randomUUID()
    - getRandomValues()
    - SubtleCrypto
  - WebSocket API
  - Timers
    - setTimeout
    - clearTimeout
    - setInterval
  - Streams API
    - ReadableStream
    - WritableStream
    - TransformStream
  - URLPattern API


  #### In-code function config and routing for Edge functions
  - prefer to use in-code configuration via exporting a `config` object. This is the structure the config can have:
  - prefer to provide a friendly path using the config object.
  - Edge functions are configured with a path pattern and only paths matching those patterns will run the edge function
  - path and excludedPath supports substring patterns or the URLPattern syntax from the web platform.
  - unless explicitly asked to modify other properties, only set path, pattern, excludedPath when creating functions.

  ```
  {
    path?: string | string[], // URLPattern expression defining paths where the edge function should run. Must start with '/'.
    excludedPath?: string | string[], // Optional. Defines paths to exclude from execution. Must start with '/'.
    pattern?: RegExp | RegExp[], // Alternative to `path`. Uses regex for path matching.
    excludedPattern?: RegExp | RegExp[], // Optional. Defines regex patterns to exclude certain routes.
    method?: string | string[], // Optional. Specifies HTTP methods that should trigger the function (e.g., "GET", ["POST", "PUT"]).
    onError?: "continue" | "fail" | "fallback", // Optional. Controls how the function handles errors.
    cache?: 'manual', // Optional. Enables response caching if set to 'manual'.
  } = {
    path: "", // Default value; should be set per function.
  };
  ```

  #### Configuring Edge Functions in netlify.toml
  - ONLY Use `netlify.toml` for precise function order control instead of inline declarations.
  - DO NOT use `netlify.toml` if there is not edge function ordering requirements.
  - When controlling order, it's important to include all edge functions for order control.

  - **Declare Edge Functions in `netlify.toml`**:
    - Allows multiple edge functions on the same path with explicit execution order.
    - Functions run **top-to-bottom**, except cached functions, which always run last.

  - **Edge Function Properties**:
    - `function`: Name of the edge function.
    - `path`: URL pattern to trigger the function (must start with `/`).
    - `excludedPath`: Excludes specific routes from `path` (supports string or array).
    - `pattern`: Regex-based path matching.
    - `excludedPattern`: Excludes specific regex patterns (single or array).
    - `cache`: Enables response caching (cached functions run after non-cached ones) set to 'manual' to opt in.

  - **Netlify.toml config examples**
    ```toml
    [[edge_functions]]
      path = "/admin"
      function = "auth"

    [[edge_functions]]
      path = "/admin"
      function = "injector"
      cache = "manual"

    [[edge_functions]]
      path = "/blog/*"
      function = "auth"

    [[edge_functions]]
      path = "/blog/*"
      function = "rewriter"

    [[edge_functions]]
      pattern = "/products/(.*)"
      excludedPattern = "/products/things/(.*)"
      function = "highlight"

    [[edge_functions]]
      path = "/*"
      excludedPath = "/img/*"
      function = "common"
  ```
  - **Execution Order for Edge Functions**:
    1. **Configuration-based** edge functions (`netlify.toml`) run first.
    2. **Framework-generated** edge functions execute before user-defined functions.
    3. **Non-cached** edge functions execute before cached functions.
    4. **Inline-declared** edge functions override duplicate `netlify.toml` functions.
    5. **Multiple inline edge functions** run alphabetically by filename.

  - **Caveats & Special Cases**:
    - If an edge function returns a response, redirects for that path DO NOT occur.
    - Edge functions DO NOT execute for rewritten static routing targets.
    - `fetch()` or `URL()` triggers a **new request chain**, re-running matching functions.
    - Use `context.next()` to continue processing instead of re-triggering functions.
    - Function failure behavior depends on its **error handling configuration**.

  #### Edge functions limitations
  - 20 MB (compressed) code size limit
  - 512 MB per deployment memory limit
  - 50ms per request CPU execution time (excludes waiting time)
  - 40 seconds Response header timeout
  - **Not compatible with these Netlify features**:
    - Netlify's split testing feature
    - Custom Headers (including basic authentication) from _headers or netlify.toml config
    - Netlify prerendering feature on paths served by edge functions
  - Be aware that multiple framework adapters may generate conflicting edge functions
  - **Restrictions**:
    - Can only rewrite requests to same-site URLs (use `fetch()` for external content)
    - Cached edge functions override existing static files
    - No local caching; HTTP cache headers are ignored in local testing
    - Not included in Netlifyâ€™s HIPAA-compliant hosting offering


  ## Netlify Blobs

  - Prefer using Netlify Blobs over creating a new database unless a flat file is not appropriate data layer, if explicitly asking to use a tool, or the dev needs to created relational structures or search that's more appropriate for databases
  - Blobs do not require configuration to use, everything is automatically provisions, and devs can simply start using them via any Netlify compute. The API will be the same across all compute types.
  - ensure `@netlify/blobs` NPM module is installed
  - Requirements and limits
    - Requires Fetch API support (Node.js 18+ recommended) - a fetch function can be provided to the store
    - Store names cannot exceed 64 bytes
    - Object keys cannot exceed 600 bytes
    - Maximum object size: 5GB
    - Local development uses a sandboxed store


  ### Netlify Blobs API

  ```typescript
    export interface BlobMetadata {
      [key: string]: any;
    }

    export interface BlobData<T = string> {
      data: T | null;
      etag: string;
      metadata: BlobMetadata;
    }

    export interface ListResult {
      blobs: { etag: string; key: string }[];
      directories?: string[];
    }

    interface GetKeyOptions {
      type?: 'arrayBuffer' | 'blob' | 'json' | 'stream' | 'text'
    }

    interface GetKeyAndMetadataOptions {
      type?: 'arrayBuffer' | 'blob' | 'json' | 'stream' | 'text',
      etag?: string;
    }

    // THESE ARE THE ONLY STORE METHODS. DO NOT MAKE UP NEW ONES
    interface Store {

      // Creates or overwrites a blob entry.
      // example: await store.set('key-name', 'contents-of key');
      // - NEVER add metadata unless instructed to.
      set(key: string, value: ArrayBuffer | Blob | string, { metadata?: object }): Promise<void>;

      // Stores a JSON-serializable object.
      // example: await store.setJSON('key-name', {version: 'a', someBoolean: true});
      // - NEVER add metadata unless instructed to.
      setJSON(key: string, value: any, { metadata?: object }): Promise<void>;

      // Retrieves a stored blob.
      // example: await store.get('key-name');
      // - NEVER add the second arg unless you need an explicit type 'arrayBuffer' | 'blob' | 'json' | 'stream' | 'text'.
      // - Instead of using JSON.parse(blob), use store.get('key-name', {type: 'json'})
      // - if the blob is missing, it will resolve the promise with a null value
      get(key: string, getOpt?: GetKeyOptions): Promise<any | null>;

      // Retrieves a blob along with metadata
      // example: await store.getWithMetadata('key-name');
      // - NEVER add the second getOpts arg unless you need an explicit type or have an etag to check against.
      // - AVOID adding it unless it's reliably available but IF an etag is provided, it will only return the blob if the etag is different that what's stored.
      // - if the blob is missing, it will resolve the promise with a null value
      getWithMetadata(key: string, getOpts?: GetKeyAndMetadataOptions): Promise<{ data: any, etag: string, metadata: object } | null>;

      // Retrieves metadata of a blob WITHOUT downloading the data.
      // example: await store.getMetadata('key-name');
      // - NEVER add the second getOpts arg unless you need an explicit type or have an etag to check against.
      // - AVOID adding it unless it's reliably available but IF an etag is provided, it will only return the blob if the etag is different that what's stored.
      // - if the blob is missing, it will resolve the promise with a null value
      getMetadata(key: string, getOpts?: GetKeyAndMetadataOptions): Promise<{ etag: string, metadata: object } | null>;

      // Lists blobs in the store with optional hierarchical browsing.
      // example:
      //      const { blobs } = await store.list()
      //      // blobs === [ { etag: 'etag1', key: 'some-key' }, { etag: 'etag2', key: 'another-key' } ]
      //
      // - NEVER add the options arg unless you need an explicit reduce the searched data.
      //    -- ONLY if you have to reduce searched data, use `prefix: 'some-prefix'` to pull blobs that start with that prefix value. Use `directories: true` to include the full directory path on the `key`
      // - By default, the list() method retrieves all pages, meaning you'll always get the full list of results. This can be slow or memory intensive. To paginate, pass the `paginate: true` in the options to turn the response into an AsyncIterator that allows you to for-of loop through the blobs in the store.
      // - if store path is empty, the blobs will resolve the promise with an empty array
      list(options?: { directories?: boolean, paginate?: boolean. prefix?: string }): Promise<{ blobs: BlobResult[], directories: string[] }> | AsyncIterable<{ blobs: BlobResult[], directories: string[] }>

      // Deletes a blob.
      // example: await store.delete('key-name');
      // - The return value is always resolves to `undefined`, regardless of whether or not there was an object to delete.
      delete(key: string): Promise<void>;
    }

    interface GetDeployStoreOptions extends Partial<ClientOptions> {
      deployID?: string;
      name?: string;
      region?: Region;
    }

    // Returns a store instance for managing blobs. This is global scoped data across all deploys.
    // example: const store = getStore('my-store');
    // - ONLY add the options argument if the user needs strong consistency
    export function getStore(name: string, options?: { consistency?: 'strong' | 'eventual' }): Store;

    // Returns a deploy-specific store instance for managing blobs tied to a deploy.
    // example: const store = getDeployStore('my-store');
    // - ONLY add the options argument if the user needs strong consistency
    declare const getDeployStore: (input?: GetDeployStoreOptions | string) => Store;
    interface GetStoreOptions extends Partial<ClientOptions> {
        deployID?: string;
        name?: string;
    }

    // Lists all stores available on a site.
    // example:
    //    const { stores } = await listStores();
    //      // [ "beauty", "construction" ]
    // - By default, the listStores() method retrieves all pages, meaning you'll always get the full list of results. This can be slow or memory intensive. To paginate, pass the `paginate: true` in the options to turn the response into an AsyncIterator that allows you to for-of loop through the blobs in the store.
    // - DO NOT pass options unless paginating.
    declare function listStores(options?: {
        paginate?: boolean;
    }): Promise<ListStoresResponse> | AsyncIterable<ListStoresResponse>;

    interface ListStoresResponse {
        stores: string[];
        next_cursor?: string;
    }

  ```

  ## File-Based Uploads
  With file-based uploads, write blobs to deploy-specific stores after the site build completes. Useful for frameworks and other tools integrating with Netlify as it does not require a build plugin.

  Put files in `.netlify/blobs/deploy/*` for deploy specific
  ```
  .netlify/
  â”œâ”€ blobs/
  |  â”œâ”€ deploy/
  â”‚  |  â”œâ”€ beauty/
  â”‚  â”‚  |  â””â”€ nails.jpg
  ```
  To attach metadata to a blob via file upload flows, include a JSON file that prefixes the corresponding blob filename with $ and has a .json extension. For example:
  ```
  â”œâ”€ blobs/
  |  â”œâ”€ deploy/
  â”‚  |  â”œâ”€ beauty/
  â”‚  â”‚  |  â”œâ”€ nails.jpg
  â”‚  â”‚  |  â””â”€ $nails.jpg.json
  ```

  ## Blob consistency models
  - By default, blobs are "eventually consistent" - Fast reads, updates/deletions propagated within 60 seconds.
  - To have strong consistency that ensures updates are immediately visible at the cost of slower reads. set the `consistency` field to `'strong'` on the store instantiation.
  - There is no concurrency control built in, last write wins. Add object-locking mechanisms if you need concurrency guarantees.

  Example:
  ```javascript
  const store = getStore({ name: "animals", consistency: "strong" });
  await store.set("dog", "dog");
  const dog = await store.get("dog");
  ```

  ## Storage scopes
  - blobs can be stored in a deploy-specific scope or at a global scope
  - deploy-specific blobs sync with deploys and are removed with deploy deletions. `getDeployStore()` is used to interact with deploy specific stores.
  - global scope blobs are not automatically cleaned up and are consistent across all branches. `getStore()` is used for global scope.
  - Build plugins and file-based uploads must write to deploy-specific stores.
  - ALWAYS When creating logic that saves to global scope, ensure that non-production data does not get stored in these global stores. This keeps production data isolated from test data. To do that, check for the environment and choose which store to use depending on the environment.

  #### Examples of blob usage

  ```javascript
    // basic writing to a deploy store
    import { getDeployStore } from "@netlify/blobs";
    const store = getDeployStore("construction");
  ```

  ```javascript
    // basic writing to a global store
    import { getStore } from "@netlify/blobs";
    const store = getStore("construction");
  ```

  ```javascript
    // using global store if in production, otherwise use deploy scope store
    import { getStore, getDeployStore } from "@netlify/blobs";

    function getBlobStore(...storeOptions){

      if((Netlify.context?.deploy.context === 'production'){
        return getStore(...storeOptions);
      }

      return getDeployStore(...storeOptions)
    }

    const store = getBlobStore("construction");
  ```

  ---

  ## Netlify Image CDN
  - All Netlify sites have a `/.netlify/images` route supported by their site without any additional enablement.
  - Transform images via query parameters in requests to `/.netlify/images`.
  - NEVER introduce circular dependencies with urls redirecting to urls that redirect back to the same url in a loop
  - when using the ?url={URL} parameter, ensure the url is a URI encoded component.
  - Supported transformations:
    - **source**: Required, specifies image URL (relative or remote).
    - **size**: `w` (width) and `h` (height) in pixels.
    - **fit**: Determines how the image is resized (`contain`, `cover`, `fill`).
    - **position**: Cropping alignment (`top`, `bottom`, `left`, `right`, `center`).
    - **format**: Convert to `avif`, `jpg`, `png`, `webp`, `gif`, or `blurhash`.
    - **quality**: Controls lossy format quality (`q`, 1-100, default 75).

  ### Example transformations
  ```html
    <!-- get an image hosted on this site and change its size and format -->
    <img src="/.netlify/images?url=/image.jpg&w=100&h=100&fit=cover&fm=webp&q=80" />

    <!-- get an image hosted externally and change its size and format -->
    <img src="/.netlify/images?url=https://example.com/path/to/image&w=40&h=10&fm=jpg&q=80" />
  ```

  ### Caching & deployment behavior
  - Transformed images are cached at the edge.
  - Source images are cached for future transformations.
  - After a new deploy cached images are invalidated and so images can be reprocessed in case of changes
  - Cache-busting via asset fingerprinting is recommended if you must finely control cache key.
  - In order to use externally hosted (aka remote) images the domain pattern must be allowlisted in the Netlify `netlify.toml`.
    - Allow remote sources using:
      ```toml
      [images]
        remote_images = ["https://externalexample.com/.*"]
      ```
      - only absolute urls to external servers need to be in remote_images

  ### Redirects & Rewrites
  - If you do not want to use the default `/.netlify/images` path, a redirect or rewrite can be used to have a different url.
  - Define reusable transformation routes in `_redirects` or `netlify.toml` files.
  - When doing so, the parameters can remain parameters to pass in or can be statically defined.
  - Examples:
    - netlify.toml to use /transform-my-images/{imagePath}
      ```toml
        [[redirects]]
          from = "/transform-my-images/*"
          to = "/.netlify/images?url=/:splat&w=50&h=50"
          status = 200
      ```
    - _redirects to use /transform-all/{...imagePath}
      ```
        /transform-all/* /.netlify/images?url=/:splat&w=50&h=50 200
      ```

  ### Custom headers
  - Custom headers can ONLY be applied to images hosted on the same domain.
  - ONLY do this when explicitly asked
  - Examples:
    - netlify.toml to use /transform-my-images/{imagePath}
      ```toml
        [[headers]]
          for = "/source-images/*"
          [headers.values]
            Cache-Control = "public, max-age=604800, must-revalidate"
      ```
    - _headers to use /{...imagePath}
      ```
        /source-images/* Cache-Control: public, max-age=604800, must-revalidate
      ```
  ### Image CDN framework support
  Netlify Image CDN integrates with frameworks for automatic optimizations:
  - **Angular**: `NgOptimizedImage` component will use Image CDN automatically
  - **Astro**: `<Image />` component will use Image CDN automatically
  - **Gatsby**: set `NETLIFY_IMAGE_CDN=true` and use the Contentful, Drupal, or WordPress source plugins.
  - **Next.js**: set `remotePatterns` in `next.config.js`
  - **Nuxt**: `nuxt/image` module will use Image CDN automatically

  ---

  ## Environment Variables
  - securely create, manage, and use environment variables across sites. These variables can be set via the UI, CLI, API, or configuration files.
  - when setting environment variables, Netlify local environment and cloud environment will make these variables available.
  - **Precedence**: `netlify.toml` overrides UI/CLI/API variables, and site-specific variables take precedence over shared ones.

  ### Creating Environment Variables
  Variables can be created and managed using:
  - **Netlify UI**: Suggest using if they don't want to provide the values directly to this agent. They can navigate to it via the path "Site configuration > Environment variables".
  - **Netlify CLI**: Prefer using this if the agent can run commands. This requires the site to be linked.
  - **Netlify Configuration (`netlify.toml`)**: Defines variables at the repository level. ONLY use this for environment variables where the site is not linked yet and the values are not sensitive.

  ### Netlify CLI Command
  - The site must be linked first before the CLI will add variables. See the rules for initializing and linking sites for how to do this.
  - Use `env:set` for changes, `env:unset` to delete. `env:import` to import from a dotenv`.env` file.

  #### Example usage of env var CLI
  - Basic setting an environment variable for the site
    ```sh
      netlify env:set API_KEY "not-a-secret"
    ```
  - Setting an environment variable that should be treated as a secret
    ```sh
        netlify env:set API_KEY "secret-value" --secret
    ```

  ### Example `netlify.toml` Configuration
  - Using the netlify.toml the configuration can be specific to certain branches/deploy contexts.
  - examples
    ```toml
      # Production context: all deploys from the Production branch
      # set in your siteâ€™s Branches settings in the UI will inherit
      # these settings. You can define environment variables
      # here but we recommend using the Netlify UI for sensitive
      # values to keep them out of your source repository.
      [context.production]
        publish = "output/"
        command = "make publish"
        environment = { NODE_VERSION = "14.15.3" }

      # Here is an example of how to define context-specific
      # environment variables. Be mindful when using this
      # option and avoid committing sensitive values to public
      # source repositories.
      [context.deploy-preview.environment]
        NOT_PRIVATE_ITEM = "not so secret"

      # Branch Deploy context: all deploys that are not from
      # a pull/merge request or from the Production branch
      # will inherit these settings.
      [context.branch-deploy.environment]
        NODE_ENV = "development"

      # Dev context: environment variables set here
      # are available for local development environments
      # run using Netlify Dev. These values can be
      # overwritten on branches that have a more specific
      # branch context configured.
      [context.dev.environment]
        NODE_ENV = "development"

      # Specific branch context: all deploys from
      # this specific branch will inherit these settings.
      [context.staging.environment] # staging is a branch name
        NODE_ENV = "development"
    ```

  ### `.env` File Handling
  - Netlify builds do not read `.env` files directly
  - Import `.env` variables into Netlify using the UI or CLI (`netlify env:import .env`).
  - Export Netlify variables via UI or CLI (`env:list`) only after confirming where the output will be stored.
  - Do not write production context values to `.env` by default.

  ### Export `.env` Variables
  ```sh
  # list the production deploy context values in .env format
  netlify env:list --plain --context production

  # only after explicit user confirmation:
  # 1. confirm .env.local is gitignored
  # 2. confirm the user wants a local production-context export
  # 3. remind the user not to commit the file
  netlify env:list --plain --context production > .env.local
  ```

  ---

  # Creating new sites

  - do not add redirects to netlify.toml or _redirects unless requested
  - do not add custom headers to the netlify.toml or _headers unless requested

  # Initializing sites or linking them
  - determine if a site is linked by checking if `PROJECT_FOLDER/.netlify/state.json` file exists and it has a populated `siteId` value.
  - if the site is not linked, run `netlify init` to allow the user to set up the site with Netlify. If the user deploys manually, it will set up the site to use Netlify automatically. If the user decides to set up a repo, they might have to set up the repo first. If the site is already set up on netlify then run `netlify link` for the user to input the credentials to link.

</ProviderContext>
