---
name: "claude-api"
description_en: "Build, debug, and optimize Claude API / Anthropic SDK apps. Apps built with this skill should include prompt caching. Also handles migrating existing Claude API code between Claude model versions (4.5 → 4.6, 4.6 → 4.7, retired-model replacements). TRIGGER when: code imports `anthropic`/`@anthropic-ai/sdk`; user asks for the Claude API, Anthropic SDK, or Managed Agents; user adds/modifies/tunes a C"
category: "Design"
repo: "anthropics/skills"
stars: 140618
url: "https://github.com/anthropics/skills/blob/HEAD/skills/claude-api/SKILL.md"
path: "skills/claude-api/SKILL.md"
is_collection: false
body_length: 31925
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Claude ile LLM Destekli Uygulamalar Geliştirme

  Bu beceri, Claude ile LLM destekli uygulamalar geliştirmenize yardımcı olur. İhtiyaçlarınıza göre doğru platformu seçin, proje dilini tespit edin ve ardından ilgili dile özgü belgeleri okuyun.

  ## Başlamadan Önce

  Hedef dosyayı (veya hedef dosya yoksa, prompt ve projeyi) Anthropic dışı sağlayıcı işaretleyicileri açısından tarayın — `import openai`, `from openai`, `langchain_openai`, `OpenAI(`, `gpt-4`, `gpt-5`, `agent-openai.py` veya `*-generic.py` gibi dosya adları veya sağlayıcıdan bağımsız kod tutmanız için açık talimatlar. Bulursanız durun ve kullanıcıya bu becerisinin Claude/Anthropic SDK kodu ürettiğini söyleyin; dosyayı Claude'a değiştirmek isteyip istemiyor, yoksa Claude dışı bir uygulamayı mı istediğini sorun. Anthropic SDK çağrıları ile Anthropic dışı bir dosyayı düzenlemeyin.

  ## Çıktı Gereksinimi

  Kullanıcı Claude özelliği ekleme, değiştirme veya uygulama istediğinde, kodunuz Claude'u şu yollardan biriyle çağırmalıdır:

  1. **Resmi Anthropic SDK** - Projenin dili için (`anthropic`, `@anthropic-ai/sdk`, `com.anthropic.*`, vb.). Desteklenen SDK bulunduğunda bu varsayılandır.
  2. **Ham HTTP** (`curl`, `requests`, `fetch`, `httpx`, vb.) — yalnızca kullanıcı açıkça cURL/REST/ham HTTP istediğinde, proje bir shell/cURL projesi olduğunda veya dilde resmi SDK olmadığında.

  İkisini karıştırmayın — Python veya TypeScript projesinde `requests`/`fetch` kullanmayın sadece daha hafif hissettiği için. OpenAI uyumlu shim'lere geri dönmeyin.

  **SDK kullanımını tahmin etmeyin.** İşlev adları, sınıf adları, ad alanları, yöntem imzaları ve içe aktarma yolları açık belgelerden gelmeli — bu becerinin `{lang}/` dosyalarından veya resmi SDK depolarından ya da `shared/live-sources.md` dosyasında listelenen belgeleme bağlantılarından. İhtiyaç duyduğunuz bağlama bu beceri dosyalarında açıkça belgelenmişse, yazı yazmadan önce `shared/live-sources.md` dosyasından ilgili SDK deposunu WebFetch ile getirin. Ruby/Java/Go/PHP/C# API'lerini cURL şekillerinden veya başka bir dil SDK'sından çıkarmayın.

  ## Varsayılanlar

  Kullanıcı aksi talep etmedikçe:

  Claude model sürümü için lütfen Claude Opus 4.7'yi kullanın; buna `claude-opus-4-7` tam model dizesi aracılığıyla erişebilirsiniz. Lütfen biraz karmaşık olan her şey için uyarlanabilir düşünmeyi varsayılan olarak kullanın (`thinking: {type: "adaptive"}`). Son olarak, lütfen uzun girdi, uzun çıktı veya yüksek `max_tokens` olabilecek herhangi bir istek için varsayılan olarak akışı kullanın — istek zaman aşımlarına çarpmayı önler. Tam yanıtı almanız gerekmiyorsa, SDK'nın `.get_final_message()` / `.finalMessage()` yardımcısını kullanın

  ---

  ## Alt Komutlar

  Sayfanın altındaki Kullanıcı İsteği bare bir alt komut dizesi ise (herhangi bir konu olmadan), bu belgedeki her **Alt Komutlar** tablosunu arayın — eklenmiş bölümlerdeki tabloları da dahil — ve eşleşen Eylem sütununu doğrudan izleyin. Bu, kullanıcıların `/claude-api <alt-komut>` aracılığıyla belirli akışları çağırmasını sağlar. Belgede eşleşme yoksa, isteği normal konu olarak değerlendirin.


  ---

  ## Dil Tespiti

  Kod örneklerini okumadan önce, kullanıcının hangi dilde çalıştığını belirleyin:

  1. **Proje dosyalarına bakın** - dili çıkarın:

     - `*.py`, `requirements.txt`, `pyproject.toml`, `setup.py`, `Pipfile` → **Python** — `python/` dosyasından okuyun
     - `*.ts`, `*.tsx`, `package.json`, `tsconfig.json` → **TypeScript** — `typescript/` dosyasından okuyun
     - `*.js`, `*.jsx` (`.ts` dosyası yok) → **TypeScript** — JS aynı SDK'yı kullanır, `typescript/` dosyasından okuyun
     - `*.java`, `pom.xml`, `build.gradle` → **Java** — `java/` dosyasından okuyun
     - `*.kt`, `*.kts`, `build.gradle.kts` → **Java** — Kotlin, Java SDK'sını kullanır, `java/` dosyasından okuyun
     - `*.scala`, `build.sbt` → **Java** — Scala, Java SDK'sını kullanır, `java/` dosyasından okuyun
     - `*.go`, `go.mod` → **Go** — `go/` dosyasından okuyun
     - `*.rb`, `Gemfile` → **Ruby** — `ruby/` dosyasından okuyun
     - `*.cs`, `*.csproj` → **C#** — `csharp/` dosyasından okuyun
     - `*.php`, `composer.json` → **PHP** — `php/` dosyasından okuyun

  2. **Birden fazla dil tespit edilirse** (ör. hem Python hem de TypeScript dosyaları):

     - Kullanıcının geçerli dosyası veya sorusunun hangi dille ilgili olduğunu kontrol edin
     - Hala belirsizse sorun: "Python ve TypeScript dosyaları tespit ettim. Claude API entegrasyonu için hangi dili kullanıyorsunuz?"

  3. **Dil çıkarılamıyorsa** (boş proje, kaynak dosya yok veya desteklenmeyen dil):

     - Seçeneklerle AskUserQuestion kullanın: Python, TypeScript, Java, Go, Ruby, cURL/ham HTTP, C#, PHP
     - AskUserQuestion kullanılamıyorsa, Python örneklerini varsayılan olarak kullanın ve not edin: "Python örnekleri gösteriliyor. Farklı bir dile ihtiyacınız varsa bana söyleyin."

  4. **Desteklenmeyen dil tespit edilirse** (Rust, Swift, C++, Elixir, vb.):

     - `curl/` dosyasından cURL/ham HTTP örnekleri önerilir ve topluluk SDK'larının mevcut olabileceğini not edin
     - Python veya TypeScript örneklerini referans uygulamaları olarak göstermek için sunun

  5. **Kullanıcının cURL/ham HTTP örneklerine ihtiyacı varsa**, `curl/` dosyasından okuyun.

  ### Dile Özgü Özellik Desteği

  | Dil        | Tool Runner | Yönetilen Ajanlar | Notlar                                 |
  | ---------- | ----------- | -------------- | ------------------------------------- |
  | Python     | Evet (beta) | Evet (beta)     | Tam destek — `@beta_tool` dekoratörü |
  | TypeScript | Evet (beta) | Evet (beta)     | Tam destek — `betaZodTool` + Zod    |
  | Java       | Evet (beta) | Evet (beta)     | Ek açıklama yapılmış sınıflarla beta tool use  |
  | Go         | Evet (beta) | Evet (beta)     | `toolrunner` paketinde `BetaToolRunner`  |
  | Ruby       | Evet (beta) | Evet (beta)     | Beta'da `BaseTool` + `tool_runner`    |
  | C#         | Hayır       | Hayır          | Resmi SDK                          |
  | PHP        | Evet (beta) | Evet (beta)     | `BetaRunnableTool` + `toolRunner()`   |
  | cURL       | Yok         | Evet (beta)     | Ham HTTP, SDK özellikleri yok         |

  > **Yönetilen Ajanlar kod örnekleri**: Python, TypeScript, Go, Ruby, PHP, Java ve cURL için ayrılmış dile özgü README'ler sağlanır (`{lang}/managed-agents/README.md`, `curl/managed-agents.md`). Dilinizin README'sini artı dilden bağımsız `shared/managed-agents-*.md` kavram dosyalarını okuyun. **Ajanlar kalıcıdır — bir kez oluşturun, ID'ye göre referans verin.** `agents.create` tarafından döndürülen ajan ID'sini saklayın ve bunu her sonraki `sessions.create` çağrısına geçin; `agents.create` çağrısını istek yolunda kullanmayın. Anthropic CLI, ajanları ve ortamları versiyon kontrollü YAML'den oluşturmanın uygun bir yoludur — URL'si `shared/live-sources.md` dosyasında. Gerekli bir bağlama README'de gösterilmiyorsa, tahmin etmek yerine `shared/live-sources.md` dosyasından ilgili girişi WebFetch ile getirin. C# şu anda Yönetilen Ajanlar desteğine sahip değildir; API'ye karşı cURL stili ham HTTP isteklerini kullanın.

  ---

  ## Hangi Platformu Kullanmalıyım?

  > **Basit başlayın.** Varsayılan olarak, ihtiyaçlarınızı karşılayan en basit seviyeyi kullanın. Tek API çağrıları ve iş akışları çoğu kullanım durumunu işler — yalnızca görev gerçekten açık uçlu, model tarafından yönlendirilmiş keşif gerektirdiğinde ajanlar için yapın.

  | Kullanım Durumu                                        | Seviye           | Önerilen Platform       | Neden                                                          |
  | ----------------------------------------------- | --------------- | ------------------------- | ------------------------------------------------------------ |
  | Sınıflandırma, özet, çıkarma, S&C  | Tek LLM çağrısı | **Claude API**            | Bir istek, bir yanıt                                    |
  | Toplu işleme veya gömme                  | Tek LLM çağrısı | **Claude API**            | Uzmanlaşmış uç noktalar                                        |
  | Kod kontrollü mantık ile çok adımlı boru hatları | İş akışı        | **Claude API + tool use** | Siz döngüyü yönetirsiniz                                     |
  | Kendi araçlarınızla özel ajan | Ajan           | **Claude API + tool use** | Maksimum esneklik                                                      |
  | Çalışma alanı ile sunucu tarafından yönetilen durum bilgili ajan | Ajan           | **Yönetilen Ajanlar**        | Anthropic döngüyü çalıştırır ve tool yürütme sandbox'ını barındırır |
  | Kalıcı, sürümlü ajan yapılandırmaları              | Ajan           | **Yönetilen Ajanlar**        | Ajanlar saklanan nesnelerdir; oturumlar sürüme sabitlenir         |
  | Dosya takılı çok dönüşlü uzun çalışan ajan | Ajan           | **Yönetilen Ajanlar**        | Oturum başına kapsayıcılar, SSE olay akışı, Beceriler + MCP       |

  > **Not:** Yönetilen Ajanlar, Anthropic'in ajan döngüsünü çalıştırmasını *ve* araçların yürütüldüğü kapsayıcıyı barındırmasını istediğinizde doğru seçimdir — dosya işlemleri, bash, kod yürütme tümü oturum başına çalışma alanında çalışır. Hesaplamayı kendiniz barındırmak veya kendi özel tool çalışma zamanınızı çalıştırmak istiyorsanız, Claude API + tool use doğru seçimdir — otomatik döngü işleme için tool runner'ı kullanın veya manuel döngü için ince taneli kontrol (onay kapıları, özel günlüğe yazma, koşullu yürütme).

  > **Üçüncü taraf sağlayıcılar (Amazon Bedrock, Google Vertex AI, Microsoft Foundry):** Yönetilen Ajanlar Bedrock, Vertex veya Foundry'de **kullanılamaz**. Herhangi bir üçüncü taraf sağlayıcı aracılığıyla dağıtıyorsanız, tüm kullanım durumları için — Yönetilen Ajanlar'ın aksi takdirde önerileceği durumlar dahil — **Claude API + tool use** kullanın.

  ### Karar Ağacı

  ```
  Uygulamanızın ne gerekiyor?

  0. Amazon Bedrock, Google Vertex AI veya Microsoft Foundry aracılığıyla dağıtıyor musunuz?
     └── Evet → Claude API (ajanlar için + tool use) — Yönetilen Ajanlar sadece 1P'dir.
     Hayır → devam edin.

  1. Tek LLM çağrısı (sınıflandırma, özet, çıkarma, S&C)
     └── Claude API — bir istek, bir yanıt

  2. Anthropic'in ajan döngüsünü çalıştırmasını ve Claude'un araçları yürüttüğü
     oturum başına kapsayıcı barındırmasını mı istiyorsunuz (bash, dosya işlemleri, kod)?
     └── Evet → Yönetilen Ajanlar — sunucu tarafından yönetilen oturumlar, kalıcı ajan yapılandırmaları,
         SSE olay akışı, Beceriler + MCP, dosya takısı.
         Örnekler: "çalışma alanı olan durum bilgili kodlama ajanı",
                   "olayları UI'ye akışa sokan uzun çalışan araştırma ajanı",
                   "birçok oturumda kullanılan kalıcı, sürümlü yapılandırmaya sahip ajan"

  3. İş akışı (çok adımlı, kod tarafından yönetilen, kendi araçlarınız ile)
     └── Tool use ile Claude API — siz döngüyü kontrol edersiniz

  4. Açık uçlu ajan (model kendi yolunu belirler, kendi araçlarınız, siz hesaplamayı barındırırsınız)
     └── Claude API ajantik döngü (maksimum esneklik)
  ```

  ### Ajan İnşa Etmeliyim mi?

  Ajan seviyesini seçmeden önce dört kriteri kontrol edin:

  - **Karmaşıklık** — Görev çok adımlı ve önceden tam olarak belirtilmesi zor mu? (ör. "bu tasarım belgesini PR'ye dönüştür" vs. "bu PDF'den başlığı çıkar")
  - **Değer** — Sonuç daha yüksek maliyet ve gecikmeyi haklı çıkarır mı?
  - **Viability** — Claude bu görev türünde yeterli mi?
  - **Hata maliyeti** — Hatalar yakalanıp kurtarılabilir mi? (testler, inceleme, geri alma)

  Bunlardan herhangi birine "hayır" cevabı ise, daha basit bir seviyede kalın (tek çağrı veya iş akışı).

  ---

  ## Mimari

  Her şey `POST /v1/messages` aracılığıyla gider. Araçlar ve çıktı kısıtlamaları bu tek uç noktanın özellikleri — ayrı API'ler değil.

  **Kullanıcı tanımlı araçlar** — Araçları tanımlarsınız (dekoratörler, Zod şemaları veya ham JSON aracılığıyla) ve SDK'nın tool runner'ı API çağrısı, işlevlerinizi yürütme ve Claude bitene kadar döngüyü yürütmeyi işler. Tam kontrol için döngüyü kendiniz yazabilirsiniz.

  **Sunucu tarafındaki araçlar** — Anthropic tarafından barındırılan araçlar Anthropic'in altyapısında çalışır. Kod yürütme tamamen sunucu tarafındadır (`tools` içinde bildirin, Claude otomatik olarak çalıştırır). Bilgisayar kullanımı sunucu tarafından barındırılabilir veya kendi barındırılan olabilir.

  **Yapılandırılmış çıktılar** — Messages API yanıt formatını kısıtlar (`output_config.format`) ve/veya tool parametre doğrulaması (`strict: true`). Önerilen yaklaşım `client.messages.parse()` - yanıtları şemanıza karşı otomatik olarak doğrular. Not: eski `output_format` parametresi kullanımdan kaldırılmıştır; `messages.create()` üzerinde `output_config: {format: {...}}` kullanın.

  **Destekleyici uç noktalar** — Toplu işler (`POST /v1/messages/batches`), Dosyalar (`POST /v1/files`), Token Sayma ve Modeller (`GET /v1/models`, `GET /v1/models/{id}` — canlı beceri/bağlam penceresi keşfi) Messages API isteklerine beslenirler.

  ---

  ## Geçerli Modeller (önbelleğe alınan: 2026-04-15)

  | Model             | Model ID            | Bağlam        | Giriş $/1M | Çıktı $/1M |
  | ----------------- | ------------------- | -------------- | ---------- | ----------- |
  | Claude Opus 4.7   | `claude-opus-4-7`   | 1M             | $5.00      | $25.00      |
  | Claude Opus 4.6   | `claude-opus-4-6`   | 1M             | $5.00      | $25.00      |
  | Claude Sonnet 4.6 | `claude-sonnet-4-6` | 1M             | $3.00      | $15.00      |
  | Claude Haiku 4.5  | `claude-haiku-4-5`  | 200K           | $1.00      | $5.00       |

  **Kullanıcı açıkça farklı bir model belirtmedikçe HER ZAMAN `claude-opus-4-7` kullanın.** Bu tartışmaz. Kullanıcı kelimenin tam anlamıyla "sonnet kullan" veya "haiku kullan" söylemediği sürece `claude-sonnet-4-6`, `claude-sonnet-4-5` veya başka bir model kullanmayın. Maliyet için asla düşürmeyin — bu kullanıcının kararı, sizin değil.

  **KRİTİK: Tablodaki tam model ID dizelerini kullanın — oldukları gibi tamdir. Tarih sonekleri eklemeyin.** Örneğin, `claude-sonnet-4-5` kullanın, asla `claude-sonnet-4-5-20250514` veya eğitim verilerinizden hatırlayabileceğiniz başka tarih içeren varyantı kullanmayın. Kullanıcı tabloda olmayan eski bir model isterse (ör. "opus 4.5", "sonnet 3.7"), tam ID için `shared/models.md` dosyasını okuyun — kendiniz bir tane inşa etmeyin.

  Bir not: yukarıdaki model dizelerinden herhangi biri size yabancı gelirse, bunu beklemeyin — bu sadece eğitim verilerinizin kesilişinden sonra yayınlandığı anlamına gelir. Emin olun bunlar gerçek modellerdir; size böyle bir şaka yapmazdık.

  **Canlı beceri araması:** Yukarıdaki tablo önbelleğe alınmıştır. Kullanıcı "X için bağlam penceresi nedir", "X vizyon/düşünme/çabayı destekliyor mu" veya "hangi modeller Y'yi destekliyor" sorduğunda, Models API'sini sorgulayın (`client.models.retrieve(id)` / `client.models.list()`) — alan referansı ve beceri filtresi örnekleri için `shared/models.md` dosyasını okuyun.

  ---

  ## Düşünme & Çaba (Hızlı Referans)

  **Opus 4.7 — Sadece uyarlanabilir düşünme:** `thinking: {type: "adaptive"}` kullanın. `thinking: {type: "enabled", budget_tokens: N}` Opus 4.7'de 400 döndürür — uyarlanabilir tek açılı moddur. `{type: "disabled"}` ve `thinking` çıkarması her ikisi de çalışır. Örnekleme parametreleri (`temperature`, `top_p`, `top_k`) da kaldırılır ve 400 dönecektir. Tam breaking-change listesi için `shared/model-migration.md` → Opus 4.7'ye Taşıma bölümüne bakın.
  **Opus 4.6 — Uyarlanabilir düşünme (önerilen):** `thinking: {type: "adaptive"}` kullanın. Claude dinamik olarak ne zaman ve ne kadar düşüneceğine karar verir. `budget_tokens` gerekli değildir — `budget_tokens` Opus 4.6 ve Sonnet 4.6'da kullanımdan kaldırılmıştır ve yeni kod için kullanılmamalıdır. Uyarlanabilir düşünme otomatik olarak iç içe düşünmeyi etkinleştirir (beta başlığı gerekmez). **Kullanıcı "genişletilmiş düşünme", "düşünme bütçesi" veya `budget_tokens` istediğinde: `thinking: {type: "adaptive"}` ile Opus 4.7 veya 4.6 kullanın. Düşünme için sabit token bütçesi kavramı kullanımdan kaldırılmıştır — uyarlanabilir düşünme bunu değiştirir. Yeni 4.6/4.7 kodunda `budget_tokens` KULLANMAYIN ve eski bir modele GEÇMEYİN.** *Kademeli göç çıkışı:* `budget_tokens` hala Opus 4.6 ve Sonnet 4.6'da geçiş halı olarak işlev görmektedir — mevcut kodu taşıyorsanız ve `effort` ayarlamadan önce sabit bir token tavanı gerekiyorsa, `shared/model-migration.md` → Geçişsel kaçış kapısı bölümüne bakın. Not: bu kaçış kapısı **Opus 4.7 için geçerli değildir** — `budget_tokens` tamamen orada kaldırılmıştır.
  **Çaba parametresi (GA, beta başlığı yok):** `output_config: {effort: "low"|"medium"|"high"|"max"}` (top-level değil `output_config` içinde) aracılığıyla düşünme derinliği ve genel token harcamasını kontrol eder. Varsayılan `high` (onu çıkarmaya eşdeğer). `max` sadece Opus seviyesi (Opus 4.6 ve sonrası — Sonnet veya Haiku değil). Opus 4.7, `"xhigh"` ekler (`high` ve `max` arasında) — 4.7'de çoğu kodlama ve ajantik kullanım durumları için en iyi ayar ve Claude Code'da varsayılan; çoğu zeka duyarlı işler için en az `high` kullanın. Opus 4.5, Opus 4.6, Opus 4.7 ve Sonnet 4.6 üzerinde çalışır. Sonnet 4.5 / Haiku 4.5 üzerinde hata verecektir. Opus 4.7'de, çaba önceki herhangi bir Opus'tan daha fazla önem taşır — taşırken ayarını yeniden ayarlayın. Daha düşük çaba, daha az ve daha birleşik tool çağrıları, daha az preamble ve daha kısa onaylamalar anlamına gelir — `high` çoğunlukla kalite ve token verimliliğini dengeleyen tatlı nokta; doğruluk maliyetten daha önemli olduğunda `max` kullanın; basit görevler veya alt ajanlar için `low` kullanın.

  **Opus 4.7 — düşünme içeriği varsayılan olarak çıkarılır:** `thinking` blokları hala akışa alınır ancak metinleri `thinking: {type: "adaptive", display: "summarized"}` (varsayılan `"omitted"`) ile tercih etmedikçe boş. Sessiz değişiklik — hata yok. Akıllandırmayı kullanıcılara aktarıyorsanız, varsayılan çıktıdan önce uzun bir duraklama gibi görünür; görünür ilerlemeyi geri yüklemek için `"summarized"` olarak ayarlayın.

  **Görev Bütçeleri (beta, Opus 4.7):** `output_config: {task_budget: {type: "tokens", total: N}}` modele tam ajantik döngü için kaç tokeni olduğunu söyler — bir çalışan geri sayımı görür ve kendi moderatörü olur (minimum 20.000; beta başlığı `task-budgets-2026-03-13`). Model tarafından bilinen enforced per-response tavanı olan `max_tokens` değerinden ayrı. `shared/model-migration.md` → Görev Bütçeleri bölümüne bakın.

  **Sonnet 4.6:** Uyarlanabilir düşünmeyi destekler (`thinking: {type: "adaptive"}`). `budget_tokens` Sonnet 4.6'da kullanımdan kaldırılmıştır — bunun yerine uyarlanabilir düşünme kullanın.

  **Eski modeller (yalnızca açıkça istenirse):** Kullanıcı özel olarak Sonnet 4.5 veya başka eski bir model isterse, `thinking: {type: "enabled", budget_tokens: N}` kullanın. `budget_tokens` `max_tokens` değerinden daha küçük olmalıdır (minimum 1024). Sadece kullanıcı `budget_tokens` adını anıştığı için eski bir modeli seçmeyin — bunun yerine Opus 4.7 ile uyarlanabilir düşünme kullanın.

  ---

  ## Sıkıştırma (Hızlı Referans)

  **Beta, Opus 4.7, Opus 4.6 ve Sonnet 4.6'da.** 1M bağlam penceresini aşabilecek uzun çalışan konuşmalar için sunucu tarafındaki sıkıştırmayı etkinleştirin. API, tetikleme eşiğine yaklaştığında önceki bağlamı otomatik olarak özetler (varsayılan: 150K token). Beta başlığı `compact-2026-01-12` gerekir.

  **Kritik:** `response.content` (sadece metin değil) her dönüşte iletilerinize ekleyin. Yanıttaki sıkıştırma blokları korunmalıdır — API bunları sonraki istekte sıkıştırılmış geçmişi değiştirmek için kullanır. Sadece metin dizesini çıkarmak ve onu eklemek sessizce sıkıştırma durumunu kaybedecektir.

  Kod örnekleri için `{lang}/claude-api/README.md` (Sıkıştırma bölümü) dosyasına bakın. Tam belgeler için `shared/live-sources.md` aracılığıyla WebFetch yapın.

  ---

  ## Prompt Önbelleğe Alma (Hızlı Referans)

  **Önek eşlemesi.** Ön
---

# Building LLM-Powered Applications with Claude

This skill helps you build LLM-powered applications with Claude. Choose the right surface based on your needs, detect the project language, then read the relevant language-specific documentation.

## Before You Start

Scan the target file (or, if no target file, the prompt and project) for non-Anthropic provider markers — `import openai`, `from openai`, `langchain_openai`, `OpenAI(`, `gpt-4`, `gpt-5`, file names like `agent-openai.py` or `*-generic.py`, or any explicit instruction to keep the code provider-neutral. If you find any, stop and tell the user that this skill produces Claude/Anthropic SDK code; ask whether they want to switch the file to Claude or want a non-Claude implementation. Do not edit a non-Anthropic file with Anthropic SDK calls.

## Output Requirement

When the user asks you to add, modify, or implement a Claude feature, your code must call Claude through one of:

1. **The official Anthropic SDK** for the project's language (`anthropic`, `@anthropic-ai/sdk`, `com.anthropic.*`, etc.). This is the default whenever a supported SDK exists for the project.
2. **Raw HTTP** (`curl`, `requests`, `fetch`, `httpx`, etc.) — only when the user explicitly asks for cURL/REST/raw HTTP, the project is a shell/cURL project, or the language has no official SDK.

Never mix the two — don't reach for `requests`/`fetch` in a Python or TypeScript project just because it feels lighter. Never fall back to OpenAI-compatible shims.

**Never guess SDK usage.** Function names, class names, namespaces, method signatures, and import paths must come from explicit documentation — either the `{lang}/` files in this skill or the official SDK repositories or documentation links listed in `shared/live-sources.md`. If the binding you need is not explicitly documented in the skill files, WebFetch the relevant SDK repo from `shared/live-sources.md` before writing code. Do not infer Ruby/Java/Go/PHP/C# APIs from cURL shapes or from another language's SDK.

## Defaults

Unless the user requests otherwise:

For the Claude model version, please use Claude Opus 4.7, which you can access via the exact model string `claude-opus-4-7`. Please default to using adaptive thinking (`thinking: {type: "adaptive"}`) for anything remotely complicated. And finally, please default to streaming for any request that may involve long input, long output, or high `max_tokens` — it prevents hitting request timeouts. Use the SDK's `.get_final_message()` / `.finalMessage()` helper to get the complete response if you don't need to handle individual stream events

---

## Subcommands

If the User Request at the bottom of this prompt is a bare subcommand string (no prose), search every **Subcommands** table in this document — including any in sections appended below — and follow the matching Action column directly. This lets users invoke specific flows via `/claude-api <subcommand>`. If no table in the document matches, treat the request as normal prose.


---

## Language Detection

Before reading code examples, determine which language the user is working in:

1. **Look at project files** to infer the language:

   - `*.py`, `requirements.txt`, `pyproject.toml`, `setup.py`, `Pipfile` → **Python** — read from `python/`
   - `*.ts`, `*.tsx`, `package.json`, `tsconfig.json` → **TypeScript** — read from `typescript/`
   - `*.js`, `*.jsx` (no `.ts` files present) → **TypeScript** — JS uses the same SDK, read from `typescript/`
   - `*.java`, `pom.xml`, `build.gradle` → **Java** — read from `java/`
   - `*.kt`, `*.kts`, `build.gradle.kts` → **Java** — Kotlin uses the Java SDK, read from `java/`
   - `*.scala`, `build.sbt` → **Java** — Scala uses the Java SDK, read from `java/`
   - `*.go`, `go.mod` → **Go** — read from `go/`
   - `*.rb`, `Gemfile` → **Ruby** — read from `ruby/`
   - `*.cs`, `*.csproj` → **C#** — read from `csharp/`
   - `*.php`, `composer.json` → **PHP** — read from `php/`

2. **If multiple languages detected** (e.g., both Python and TypeScript files):

   - Check which language the user's current file or question relates to
   - If still ambiguous, ask: "I detected both Python and TypeScript files. Which language are you using for the Claude API integration?"

3. **If language can't be inferred** (empty project, no source files, or unsupported language):

   - Use AskUserQuestion with options: Python, TypeScript, Java, Go, Ruby, cURL/raw HTTP, C#, PHP
   - If AskUserQuestion is unavailable, default to Python examples and note: "Showing Python examples. Let me know if you need a different language."

4. **If unsupported language detected** (Rust, Swift, C++, Elixir, etc.):

   - Suggest cURL/raw HTTP examples from `curl/` and note that community SDKs may exist
   - Offer to show Python or TypeScript examples as reference implementations

5. **If user needs cURL/raw HTTP examples**, read from `curl/`.

### Language-Specific Feature Support

| Language   | Tool Runner | Managed Agents | Notes                                 |
| ---------- | ----------- | -------------- | ------------------------------------- |
| Python     | Yes (beta)  | Yes (beta)     | Full support — `@beta_tool` decorator |
| TypeScript | Yes (beta)  | Yes (beta)     | Full support — `betaZodTool` + Zod    |
| Java       | Yes (beta)  | Yes (beta)     | Beta tool use with annotated classes  |
| Go         | Yes (beta)  | Yes (beta)     | `BetaToolRunner` in `toolrunner` pkg  |
| Ruby       | Yes (beta)  | Yes (beta)     | `BaseTool` + `tool_runner` in beta    |
| C#         | No          | No             | Official SDK                          |
| PHP        | Yes (beta)  | Yes (beta)     | `BetaRunnableTool` + `toolRunner()`   |
| cURL       | N/A         | Yes (beta)     | Raw HTTP, no SDK features             |

> **Managed Agents code examples**: dedicated language-specific READMEs are provided for Python, TypeScript, Go, Ruby, PHP, Java, and cURL (`{lang}/managed-agents/README.md`, `curl/managed-agents.md`). Read your language's README plus the language-agnostic `shared/managed-agents-*.md` concept files. **Agents are persistent — create once, reference by ID.** Store the agent ID returned by `agents.create` and pass it to every subsequent `sessions.create`; do not call `agents.create` in the request path. The Anthropic CLI is one convenient way to create agents and environments from version-controlled YAML — its URL is in `shared/live-sources.md`. If a binding you need isn't shown in the README, WebFetch the relevant entry from `shared/live-sources.md` rather than guess. C# does not currently have Managed Agents support; use cURL-style raw HTTP requests against the API.

---

## Which Surface Should I Use?

> **Start simple.** Default to the simplest tier that meets your needs. Single API calls and workflows handle most use cases — only reach for agents when the task genuinely requires open-ended, model-driven exploration.

| Use Case                                        | Tier            | Recommended Surface       | Why                                                          |
| ----------------------------------------------- | --------------- | ------------------------- | ------------------------------------------------------------ |
| Classification, summarization, extraction, Q&A  | Single LLM call | **Claude API**            | One request, one response                                    |
| Batch processing or embeddings                  | Single LLM call | **Claude API**            | Specialized endpoints                                        |
| Multi-step pipelines with code-controlled logic | Workflow        | **Claude API + tool use** | You orchestrate the loop                                     |
| Custom agent with your own tools                | Agent           | **Claude API + tool use** | Maximum flexibility                                          |
| Server-managed stateful agent with workspace    | Agent           | **Managed Agents**        | Anthropic runs the loop and hosts the tool-execution sandbox |
| Persisted, versioned agent configs              | Agent           | **Managed Agents**        | Agents are stored objects; sessions pin to a version         |
| Long-running multi-turn agent with file mounts  | Agent           | **Managed Agents**        | Per-session containers, SSE event stream, Skills + MCP       |

> **Note:** Managed Agents is the right choice when you want Anthropic to run the agent loop *and* host the container where tools execute — file ops, bash, code execution all run in the per-session workspace. If you want to host the compute yourself or run your own custom tool runtime, Claude API + tool use is the right choice — use the tool runner for automatic loop handling, or the manual loop for fine-grained control (approval gates, custom logging, conditional execution).

> **Third-party providers (Amazon Bedrock, Google Vertex AI, Microsoft Foundry):** Managed Agents is **not available** on Bedrock, Vertex, or Foundry. If you are deploying through any third-party provider, use **Claude API + tool use** for all use cases — including ones where Managed Agents would otherwise be the recommended surface.

### Decision Tree

```
What does your application need?

0. Are you deploying through Amazon Bedrock, Google Vertex AI, or Microsoft Foundry?
   └── Yes → Claude API (+ tool use for agents) — Managed Agents is 1P only.
   No → continue.

1. Single LLM call (classification, summarization, extraction, Q&A)
   └── Claude API — one request, one response

2. Do you want Anthropic to run the agent loop and host a per-session
   container where Claude executes tools (bash, file ops, code)?
   └── Yes → Managed Agents — server-managed sessions, persisted agent configs,
       SSE event stream, Skills + MCP, file mounts.
       Examples: "stateful coding agent with a workspace per task",
                 "long-running research agent that streams events to a UI",
                 "agent with persisted, versioned config used across many sessions"

3. Workflow (multi-step, code-orchestrated, with your own tools)
   └── Claude API with tool use — you control the loop

4. Open-ended agent (model decides its own trajectory, your own tools, you host the compute)
   └── Claude API agentic loop (maximum flexibility)
```

### Should I Build an Agent?

Before choosing the agent tier, check all four criteria:

- **Complexity** — Is the task multi-step and hard to fully specify in advance? (e.g., "turn this design doc into a PR" vs. "extract the title from this PDF")
- **Value** — Does the outcome justify higher cost and latency?
- **Viability** — Is Claude capable at this task type?
- **Cost of error** — Can errors be caught and recovered from? (tests, review, rollback)

If the answer is "no" to any of these, stay at a simpler tier (single call or workflow).

---

## Architecture

Everything goes through `POST /v1/messages`. Tools and output constraints are features of this single endpoint — not separate APIs.

**User-defined tools** — You define tools (via decorators, Zod schemas, or raw JSON), and the SDK's tool runner handles calling the API, executing your functions, and looping until Claude is done. For full control, you can write the loop manually.

**Server-side tools** — Anthropic-hosted tools that run on Anthropic's infrastructure. Code execution is fully server-side (declare it in `tools`, Claude runs code automatically). Computer use can be server-hosted or self-hosted.

**Structured outputs** — Constrains the Messages API response format (`output_config.format`) and/or tool parameter validation (`strict: true`). The recommended approach is `client.messages.parse()` which validates responses against your schema automatically. Note: the old `output_format` parameter is deprecated; use `output_config: {format: {...}}` on `messages.create()`.

**Supporting endpoints** — Batches (`POST /v1/messages/batches`), Files (`POST /v1/files`), Token Counting, and Models (`GET /v1/models`, `GET /v1/models/{id}` — live capability/context-window discovery) feed into or support Messages API requests.

---

## Current Models (cached: 2026-04-15)

| Model             | Model ID            | Context        | Input $/1M | Output $/1M |
| ----------------- | ------------------- | -------------- | ---------- | ----------- |
| Claude Opus 4.7   | `claude-opus-4-7`   | 1M             | $5.00      | $25.00      |
| Claude Opus 4.6   | `claude-opus-4-6`   | 1M             | $5.00      | $25.00      |
| Claude Sonnet 4.6 | `claude-sonnet-4-6` | 1M             | $3.00      | $15.00      |
| Claude Haiku 4.5  | `claude-haiku-4-5`  | 200K           | $1.00      | $5.00       |

**ALWAYS use `claude-opus-4-7` unless the user explicitly names a different model.** This is non-negotiable. Do not use `claude-sonnet-4-6`, `claude-sonnet-4-5`, or any other model unless the user literally says "use sonnet" or "use haiku". Never downgrade for cost — that's the user's decision, not yours.

**CRITICAL: Use only the exact model ID strings from the table above — they are complete as-is. Do not append date suffixes.** For example, use `claude-sonnet-4-5`, never `claude-sonnet-4-5-20250514` or any other date-suffixed variant you might recall from training data. If the user requests an older model not in the table (e.g., "opus 4.5", "sonnet 3.7"), read `shared/models.md` for the exact ID — do not construct one yourself.

A note: if any of the model strings above look unfamiliar to you, that's to be expected — that just means they were released after your training data cutoff. Rest assured they are real models; we wouldn't mess with you like that.

**Live capability lookup:** The table above is cached. When the user asks "what's the context window for X", "does X support vision/thinking/effort", or "which models support Y", query the Models API (`client.models.retrieve(id)` / `client.models.list()`) — see `shared/models.md` for the field reference and capability-filter examples.

---

## Thinking & Effort (Quick Reference)

**Opus 4.7 — Adaptive thinking only:** Use `thinking: {type: "adaptive"}`. `thinking: {type: "enabled", budget_tokens: N}` returns a 400 on Opus 4.7 — adaptive is the only on-mode. `{type: "disabled"}` and omitting `thinking` both work. Sampling parameters (`temperature`, `top_p`, `top_k`) are also removed and will 400. See `shared/model-migration.md` → Migrating to Opus 4.7 for the full breaking-change list.
**Opus 4.6 — Adaptive thinking (recommended):** Use `thinking: {type: "adaptive"}`. Claude dynamically decides when and how much to think. No `budget_tokens` needed — `budget_tokens` is deprecated on Opus 4.6 and Sonnet 4.6 and should not be used for new code. Adaptive thinking also automatically enables interleaved thinking (no beta header needed). **When the user asks for "extended thinking", a "thinking budget", or `budget_tokens`: always use Opus 4.7 or 4.6 with `thinking: {type: "adaptive"}`. The concept of a fixed token budget for thinking is deprecated — adaptive thinking replaces it. Do NOT use `budget_tokens` for new 4.6/4.7 code and do NOT switch to an older model.** *Gradual-migration carve-out:* `budget_tokens` is still functional on Opus 4.6 and Sonnet 4.6 as a transitional escape hatch — if you're migrating existing code and need a hard token ceiling before you've tuned `effort`, see `shared/model-migration.md` → Transitional escape hatch. Note: this carve-out does **not** apply to Opus 4.7 — `budget_tokens` is fully removed there.
**Effort parameter (GA, no beta header):** Controls thinking depth and overall token spend via `output_config: {effort: "low"|"medium"|"high"|"max"}` (inside `output_config`, not top-level). Default is `high` (equivalent to omitting it). `max` is Opus-tier only (Opus 4.6 and later — not Sonnet or Haiku). Opus 4.7 adds `"xhigh"` (between `high` and `max`) — the best setting for most coding and agentic use cases on 4.7, and the default in Claude Code; use a minimum of `high` for most intelligence-sensitive work. Works on Opus 4.5, Opus 4.6, Opus 4.7, and Sonnet 4.6. Will error on Sonnet 4.5 / Haiku 4.5. On Opus 4.7, effort matters more than on any prior Opus — re-tune it when migrating. Combine with adaptive thinking for the best cost-quality tradeoffs. Lower effort means fewer and more-consolidated tool calls, less preamble, and terser confirmations — `high` is often the sweet spot balancing quality and token efficiency; use `max` when correctness matters more than cost; use `low` for subagents or simple tasks.

**Opus 4.7 — thinking content omitted by default:** `thinking` blocks still stream but their text is empty unless you opt in with `thinking: {type: "adaptive", display: "summarized"}` (default is `"omitted"`). Silent change — no error. If you stream reasoning to users, the default looks like a long pause before output; set `"summarized"` to restore visible progress.

**Task Budgets (beta, Opus 4.7):** `output_config: {task_budget: {type: "tokens", total: N}}` tells the model how many tokens it has for a full agentic loop — it sees a running countdown and self-moderates (minimum 20,000; beta header `task-budgets-2026-03-13`). Distinct from `max_tokens`, which is an enforced per-response ceiling the model is not aware of. See `shared/model-migration.md` → Task Budgets.

**Sonnet 4.6:** Supports adaptive thinking (`thinking: {type: "adaptive"}`). `budget_tokens` is deprecated on Sonnet 4.6 — use adaptive thinking instead.

**Older models (only if explicitly requested):** If the user specifically asks for Sonnet 4.5 or another older model, use `thinking: {type: "enabled", budget_tokens: N}`. `budget_tokens` must be less than `max_tokens` (minimum 1024). Never choose an older model just because the user mentions `budget_tokens` — use Opus 4.7 with adaptive thinking instead.

---

## Compaction (Quick Reference)

**Beta, Opus 4.7, Opus 4.6, and Sonnet 4.6.** For long-running conversations that may exceed the 1M context window, enable server-side compaction. The API automatically summarizes earlier context when it approaches the trigger threshold (default: 150K tokens). Requires beta header `compact-2026-01-12`.

**Critical:** Append `response.content` (not just the text) back to your messages on every turn. Compaction blocks in the response must be preserved — the API uses them to replace the compacted history on the next request. Extracting only the text string and appending that will silently lose the compaction state.

See `{lang}/claude-api/README.md` (Compaction section) for code examples. Full docs via WebFetch in `shared/live-sources.md`.

---

## Prompt Caching (Quick Reference)

**Prefix match.** Any byte change anywhere in the prefix invalidates everything after it. Render order is `tools` → `system` → `messages`. Keep stable content first (frozen system prompt, deterministic tool list), put volatile content (timestamps, per-request IDs, varying questions) after the last `cache_control` breakpoint.

**Top-level auto-caching** (`cache_control: {type: "ephemeral"}` on `messages.create()`) is the simplest option when you don't need fine-grained placement. Max 4 breakpoints per request. Minimum cacheable prefix is ~1024 tokens — shorter prefixes silently won't cache.

**Verify with `usage.cache_read_input_tokens`** — if it's zero across repeated requests, a silent invalidator is at work (`datetime.now()` in system prompt, unsorted JSON, varying tool set).

For placement patterns, architectural guidance, and the silent-invalidator audit checklist: read `shared/prompt-caching.md`. Language-specific syntax: `{lang}/claude-api/README.md` (Prompt Caching section).

---

## Managed Agents (Beta)

**Managed Agents** is a third surface: server-managed stateful agents with Anthropic-hosted tool execution. You create a persisted, versioned Agent config (`POST /v1/agents`), then start Sessions that reference it. Each session provisions a container as the agent's workspace — bash, file ops, and code execution run there; the agent loop itself runs on Anthropic's orchestration layer and acts on the container via tools. The session streams events; you send messages and tool results back.

**Managed Agents is first-party only.** It is not available on Amazon Bedrock, Google Vertex AI, or Microsoft Foundry. For agents on third-party providers, use Claude API + tool use.

**Mandatory flow:** Agent (once) → Session (every run). `model`/`system`/`tools` live on the agent, never the session. See `shared/managed-agents-overview.md` for the full reading guide, beta headers, and pitfalls.

**Beta headers:** `managed-agents-2026-04-01` — the SDK sets this automatically for all `client.beta.{agents,environments,sessions,vaults,memory_stores}.*` calls. Skills API uses `skills-2025-10-02` and Files API uses `files-api-2025-04-14`, but you don't need to explicitly pass those in for endpoints other than `/v1/skills` and `/v1/files`.

**Subcommands** — invoke directly with `/claude-api <subcommand>`:

| Subcommand | Action |
|---|---|
| `managed-agents-onboard` | Walk the user through setting up a Managed Agent from scratch. **Read `shared/managed-agents-onboarding.md` immediately** and follow its interview script: mental model → know-or-explore branch → template config → session setup → emit code. Do not summarize — run the interview. |

**Reading guide:** Start with `shared/managed-agents-overview.md`, then the topical `shared/managed-agents-*.md` files (core, environments, tools, events, outcomes, multiagent, webhooks, memory, client-patterns, onboarding, api-reference). For Python, TypeScript, Go, Ruby, PHP, and Java, read `{lang}/managed-agents/README.md` for code examples. For cURL, read `curl/managed-agents.md`. **Agents are persistent — create once, reference by ID.** Store the agent ID returned by `agents.create` and pass it to every subsequent `sessions.create`; do not call `agents.create` in the request path. The Anthropic CLI is one convenient way to create agents and environments from version-controlled YAML (URL in `shared/live-sources.md`). If a binding you need isn't shown in the language README, WebFetch the relevant entry from `shared/live-sources.md` rather than guess. C# does not currently have Managed Agents support; use raw HTTP from `curl/managed-agents.md` as a reference.

**When the user wants to set up a Managed Agent from scratch** (e.g. "how do I get started", "walk me through creating one", "set up a new agent"): read `shared/managed-agents-onboarding.md` and run its interview — same flow as the `managed-agents-onboard` subcommand.

**When the user asks "how do I write the client code for X":** reach for `shared/managed-agents-client-patterns.md` — covers lossless stream reconnect, `processed_at` queued/processed gate, interrupt, `tool_confirmation` round-trip, the correct idle/terminated break gate, post-idle status race, stream-first ordering, file-mount gotchas, keeping credentials host-side via custom tools, etc.

---

## Reading Guide

After detecting the language, read the relevant files based on what the user needs:

### Quick Task Reference

**Single text classification/summarization/extraction/Q&A:**
→ Read only `{lang}/claude-api/README.md`

**Chat UI or real-time response display:**
→ Read `{lang}/claude-api/README.md` + `{lang}/claude-api/streaming.md`

**Long-running conversations (may exceed context window):**
→ Read `{lang}/claude-api/README.md` — see Compaction section
**Migrating to a newer model (Opus 4.7 / Opus 4.6 / Sonnet 4.6) or replacing a retired model:**
→ Read `shared/model-migration.md`
**Prompt caching / optimize caching / "why is my cache hit rate low":**
→ Read `shared/prompt-caching.md` + `{lang}/claude-api/README.md` (Prompt Caching section)

**Function calling / tool use / agents:**
→ Read `{lang}/claude-api/README.md` + `shared/tool-use-concepts.md` + `{lang}/claude-api/tool-use.md`

**Agent design (tool surface, context management, caching strategy):**
→ Read `shared/agent-design.md`

**Batch processing (non-latency-sensitive):**
→ Read `{lang}/claude-api/README.md` + `{lang}/claude-api/batches.md`

**File uploads across multiple requests:**
→ Read `{lang}/claude-api/README.md` + `{lang}/claude-api/files-api.md`

**Managed Agents (server-managed stateful agents with workspace):**
→ Read `shared/managed-agents-overview.md` + the rest of the `shared/managed-agents-*.md` files. For Python, TypeScript, Go, Ruby, PHP, and Java, read `{lang}/managed-agents/README.md` for code examples. For cURL, read `curl/managed-agents.md`. **Agents are persistent — create once, reference by ID.** Store the agent ID returned by `agents.create` and pass it to every subsequent `sessions.create`; do not call `agents.create` in the request path. The Anthropic CLI is one convenient way to create agents and environments from version-controlled YAML (URL in `shared/live-sources.md`). If a binding you need isn't shown in the language README, WebFetch the relevant entry from `shared/live-sources.md` rather than guess. C# does not currently support Managed Agents — use raw HTTP from `curl/managed-agents.md` as a reference.

### Claude API (Full File Reference)

Read the **language-specific Claude API folder** (`{language}/claude-api/`):

1. **`{language}/claude-api/README.md`** — **Read this first.** Installation, quick start, common patterns, error handling.
2. **`shared/tool-use-concepts.md`** — Read when the user needs function calling, code execution, memory, or structured outputs. Covers conceptual foundations.
3. **`shared/agent-design.md`** — Read when designing an agent: bash vs. dedicated tools, programmatic tool calling, tool search/skills, context editing vs. compaction vs. memory, caching principles.
4. **`{language}/claude-api/tool-use.md`** — Read for language-specific tool use code examples (tool runner, manual loop, code execution, memory, structured outputs).
5. **`{language}/claude-api/streaming.md`** — Read when building chat UIs or interfaces that display responses incrementally.
6. **`{language}/claude-api/batches.md`** — Read when processing many requests offline (not latency-sensitive). Runs asynchronously at 50% cost.
7. **`{language}/claude-api/files-api.md`** — Read when sending the same file across multiple requests without re-uploading.
8. **`shared/prompt-caching.md`** — Read when adding or optimizing prompt caching. Covers prefix-stability design, breakpoint placement, and anti-patterns that silently invalidate cache.
9. **`shared/error-codes.md`** — Read when debugging HTTP errors or implementing error handling.
10. **`shared/model-migration.md`** — Read when upgrading to newer models, replacing retired models, or translating `budget_tokens` / prefill patterns to the current API.
11. **`shared/live-sources.md`** — WebFetch URLs for fetching the latest official documentation.

> **Note:** For Java, Go, Ruby, C#, PHP, and cURL — these have a single file each covering all basics. Read that file plus `shared/tool-use-concepts.md` and `shared/error-codes.md` as needed.

> **Note:** For the Managed Agents file reference, see the `## Managed Agents (Beta)` section above — it lists every `shared/managed-agents-*.md` file and the language-specific READMEs.

---

## When to Use WebFetch

Use WebFetch to get the latest documentation when:

- User asks for "latest" or "current" information
- Cached data seems incorrect
- User asks about features not covered here

Live documentation URLs are in `shared/live-sources.md`.

## Common Pitfalls

- Don't truncate inputs when passing files or content to the API. If the content is too long to fit in the context window, notify the user and discuss options (chunking, summarization, etc.) rather than silently truncating.
- **Opus 4.7 thinking:** Adaptive only. `thinking: {type: "enabled", budget_tokens: N}` returns 400 on Opus 4.7 — `budget_tokens` is fully removed there (along with `temperature`, `top_p`, `top_k`). Use `thinking: {type: "adaptive"}`.
- **Opus 4.6 / Sonnet 4.6 thinking:** Use `thinking: {type: "adaptive"}` — do NOT use `budget_tokens` for new 4.6 code (deprecated on both Opus 4.6 and Sonnet 4.6; for gradual migration of existing code, see the transitional escape hatch in `shared/model-migration.md` — note this carve-out does not apply to Opus 4.7). For older models, `budget_tokens` must be less than `max_tokens` (minimum 1024). This will throw an error if you get it wrong.
- **4.6/4.7 family prefill removed:** Assistant message prefills (last-assistant-turn prefills) return a 400 error on Opus 4.6, Opus 4.7, and Sonnet 4.6. Use structured outputs (`output_config.format`) or system prompt instructions to control response format instead.
- **Confirm migration scope before editing:** When a user asks to migrate code to a newer Claude model without naming a specific file, directory, or file list, **ask which scope to apply first** — the entire working directory, a specific subdirectory, or a specific set of files. Do not start editing until the user confirms. Imperative phrasings like "migrate my codebase", "move my project to X", "upgrade to Sonnet 4.6", or bare "migrate to Opus 4.7" are **still ambiguous** — they tell you what to do but not where, so ask. Proceed without asking only when the prompt names an exact file, a specific directory, or an explicit file list ("migrate `app.py`", "migrate everything under `services/`", "update `a.py` and `b.py`"). See `shared/model-migration.md` Step 0.
- **`max_tokens` defaults:** Don't lowball `max_tokens` — hitting the cap truncates output mid-thought and requires a retry. For non-streaming requests, default to `~16000` (keeps responses under SDK HTTP timeouts). For streaming requests, default to `~64000` (timeouts aren't a concern, so give the model room). Only go lower when you have a hard reason: classification (`~256`), cost caps, or deliberately short outputs.
- **128K output tokens:** Opus 4.6 and Opus 4.7 support up to 128K `max_tokens`, but the SDKs require streaming for values that large to avoid HTTP timeouts. Use `.stream()` with `.get_final_message()` / `.finalMessage()`.
- **Tool call JSON parsing (4.6/4.7 family):** Opus 4.6, Opus 4.7, and Sonnet 4.6 may produce different JSON string escaping in tool call `input` fields (e.g., Unicode or forward-slash escaping). Always parse tool inputs with `json.loads()` / `JSON.parse()` — never do raw string matching on the serialized input.
- **Structured outputs (all models):** Use `output_config: {format: {...}}` instead of the deprecated `output_format` parameter on `messages.create()`. This is a general API change, not 4.6-specific.
- **Don't reimplement SDK functionality:** The SDK provides high-level helpers — use them instead of building from scratch. Specifically: use `stream.finalMessage()` instead of wrapping `.on()` events in `new Promise()`; use typed exception classes (`Anthropic.RateLimitError`, etc.) instead of string-matching error messages; use SDK types (`Anthropic.MessageParam`, `Anthropic.Tool`, `Anthropic.Message`, etc.) instead of redefining equivalent interfaces.
- **Don't define custom types for SDK data structures:** The SDK exports types for all API objects. Use `Anthropic.MessageParam` for messages, `Anthropic.Tool` for tool definitions, `Anthropic.ToolUseBlock` / `Anthropic.ToolResultBlockParam` for tool results, `Anthropic.Message` for responses. Defining your own `interface ChatMessage { role: string; content: unknown }` duplicates what the SDK already provides and loses type safety.
- **Report and document output:** For tasks that produce reports, documents, or visualizations, the code execution sandbox has `python-docx`, `python-pptx`, `matplotlib`, `pillow`, and `pypdf` pre-installed. Claude can generate formatted files (DOCX, PDF, charts) and return them via the Files API — consider this for "report" or "document" type requests instead of plain stdout text.
