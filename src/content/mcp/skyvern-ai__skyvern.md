---
name: "Skyvern-AI/skyvern"
description: "Automates browser-based workflows using LLMs and computer vision — navigate pages, fill forms, extract data, handle authentication, and automate any website via natural language"
description_tr: "LLM ve bilgisayar görüşü kullanarak tarayıcı tabanlı iş akışlarını otomatikleştirin — sayfaları gezin, formları doldurun, veri çıkarın, kimlik doğrulamayı yönetin ve herhangi bir web sitesini doğal dil ile otomatikleştirin."
category: "Browser Automation"
repo: "Skyvern-AI/skyvern"
stars: 21734
url: "https://github.com/Skyvern-AI/skyvern"
body_length: 24860
license: "AGPL-3.0"
language: "Python"
homepage: "https://www.skyvern.com"
body_tr: |-
  <!-- DOCTOC SKIP -->

  <h1 align="center">
   <a href="https://www.skyvern.com">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="fern/images/skyvern_logo.png"/>
      
    </picture>
   </a>
   <br />
  </h1>
  <p align="center">
  🐉 LLM ve Bilgisayarla Görü Kullanarak Tarayıcı Tabanlı İş Akışlarını Otomatikleştirin 🐉
  </p>
  <p align="center">
    <a href="https://www.skyvern.com/"></a>
    <a href="https://www.skyvern.com/docs/"></a>
    <a href="https://discord.gg/fG2XXEuQX3"></a>
    <!-- <a href="https://pepy.tech/project/skyvern" target="_blank"></a> -->
    <a href="https://github.com/skyvern-ai/skyvern"></a>
    <a href="https://github.com/Skyvern-AI/skyvern/blob/main/LICENSE"></a>
    <a href="https://twitter.com/skyvernai"></a>
    <a href="https://www.linkedin.com/company/95726232"></a>
  </p>

  [Skyvern](https://www.skyvern.com) LLM ve bilgisayarla görü kullanarak tarayıcı tabanlı iş akışlarını otomatikleştirir. Playwright'ın üstüne AI işlevselliği ekleyen Playwright uyumlu bir SDK sağlar ve hem teknik hem de teknik olmayan kullanıcıların herhangi bir web sitesinde manuel iş akışlarını otomatikleştirmesine yardımcı olmak için kodlamaya gerek olmayan bir iş akışı oluşturucusu sağlar, bu da kırılgan veya güvenilmez otomasyon çözümlerinin yerini alır.

  <p align="center">
    
  </p>

  Tarayıcı otomasyonuna yönelik geleneksel yaklaşımlar, web sitelerine yönelik özel betikler yazmayı gerektiriyordu ve genellikle web sitesi düzenlemeleri değiştiğinde kesilen DOM ayrıştırması ve XPath tabanlı etkileşimlere dayanıyordu.

  Skyvern, yalnızca kod tarafından tanımlanan XPath etkileşimlerine güvenmek yerine, web sitelerini öğrenmek ve bunlarla etkileşim kurmak için Vision LLM'leri kullanır.

  # Nasıl Çalışır
  Skyvern, [BabyAGI](https://github.com/yoheinakajima/babyagi) ve [AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) tarafından popülerleştirilen Task-Driven özerk agent tasarımından ilham almıştır - bir ana avantajı vardır: Skyvern'e [Playwright](https://playwright.dev/) gibi tarayıcı otomasyon kütüphaneleri kullanarak web sitelerle etkileşim kurma yeteneği veriyoruz.

  Skyvern bir web sitesini anlamak ve eylemlerini planlamak ve yürütmek için bir agent sürüsü kullanır:

  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="fern/images/skyvern_2_0_system_diagram.png" />
    
  </picture>

  Bu yaklaşımın birkaç avantajı vardır:

  1. Skyvern daha önce görmediği web sitelerinde çalışabilir, çünkü herhangi bir özelleştirilmiş kod olmadan görsel öğeleri bir iş akışını tamamlamak için gerekli eylemlerle eşleyebilir
  1. Skyvern web sitesi düzen değişikliklerine karşı dirençlidir, çünkü sistemimizin gezinmeye çalışırken aradığı önceden belirlenmiş XPath'ler veya diğer seçiciler yoktur
  1. Skyvern tek bir iş akışını çok sayıda web sitesine uygulayabilir, çünkü iş akışını tamamlamak için gerekli etkileşimler konusunda mantık yürütebilir
  Ayrıntılı bir teknik rapor [burada](https://www.skyvern.com/blog/skyvern-2-0-state-of-the-art-web-navigation-with-85-8-on-webvoyager-eval/) bulunabilir.

  # Demo
  <!-- Redo demo -->
  https://github.com/user-attachments/assets/5cab4668-e8e2-4982-8551-aab05ff73a7f

  # Hızlı Başlangıç

  ## Skyvern Cloud
  [Skyvern Cloud](https://app.skyvern.com), altyapı hakkında endişelenmenize gerek kalmadan Skyvern'i çalıştırmanızı sağlayan yönetilen bir bulut sürümüdür. Birden fazla Skyvern örneğini paralel olarak çalıştırmanıza izin verir ve bot algılama karşıtı mekanizmalar, proxy ağı ve CAPTCHA çözücüleriyle birlikte gelir.

  Denemek istiyorsanız [app.skyvern.com](https://app.skyvern.com) adresine gidip bir hesap oluşturun.

  ## Yerel Olarak Çalıştırın (UI + Server)

  Tercih ettiğiniz kurulum yöntemini seçin:

  > **Veritabanı varsayılanı**: `skyvern quickstart` ve `skyvern run server` varsayılan olarak `~/.skyvern/data.db` adresinde bir SQLite veritabanına ayarlanmıştır, bu nedenle pip yolu Postgres veya Docker olmadan çalışır. Bunun yerine Postgres kullanmak için, yerel bir konteyner için `--postgres` veya mevcut bir veritabanı için `--database-string` iletin. Docker Compose her zaman bundled Postgres hizmetini kullanır.

  ### Seçenek A: pip install (Python tarafından yönetilen yerel kurulum için önerilen)

  Gerekli bağımlılıklar:
  - [Python 3.11, 3.12 veya 3.13](https://www.python.org/downloads/)

  Ek olarak, Windows için:
  - [Rust](https://rustup.rs/)
  - C++ geliştirme araçları ve Windows SDK'sı olan VS Code

  #### 1. Skyvern'i Yükleyin

  ```bash
  pip install "skyvern[all]"
  ```

  #### 2. Skyvern'i Çalıştırın

  ```bash
  skyvern quickstart
  ```

  Pip hızlı başlangıç varsayılan olarak SQLite'yi kullanır. Yerel bir Postgres kapsayıcısı için `skyvern quickstart --postgres` komutunu çalıştırın.

  ### Seçenek B: Docker Compose

  Her şey kapsayıcılı olmak (Postgres, API, UI) istiyorsanız ve Python/Node'u yerel olarak yüklemek istemiyorsanız bu seçeneği kullanın.

  1. [Docker Desktop](https://www.docker.com/products/docker-desktop/) yükleyin
  2. Depoyu klonlayın:
     ```bash
     git clone https://github.com/skyvern-ai/skyvern.git && cd skyvern
     ```
  3. `.env` dosyasında LLM sağlayıcınızı yapılandırın (aşağıdaki `quickstart --docker-compose` komutu `.env.example` dosyasından oluşturmazsa onu oluşturacaktır):
     ```bash
     cp .env.example .env  # henüz oluşturılmadıysa
     # LLM API anahtarınızı eklemek için .env dosyasını düzenleyin
     ```
  4. Her şeyi başlatın:
     ```bash
     docker compose up -d
     ```
  5. http://localhost:8080 adresini açın

  ### Sorun Giderme

  **`(sqlite3.OperationalError) table organizations already exists`** — `pip install skyvern==1.0.31` içinde bilinen bir hataya çarptınız. Düzeltme:

  ```bash
  rm ~/.skyvern/data.db   # artık kalmayan SQLite dosyasını kaldırın
  pip install --upgrade skyvern   # 1.0.32+ düzeltmeyi içerir
  skyvern quickstart
  ```

  Hâlâ 1.0.31 üzerindeyseniz ve yükseltemiyorsanız, bunun yerine uv kullanarak kurun:

  ```bash
  uv pip install skyvern
  ```

  **`pip install skyvern` ResolutionImpossible ile başarısız olur (litellm / fastmcp)** — 1.0.31'de bir bağımlılık çözümlemesi çatışmasına çarptınız. 1.0.32+ sürümüne yükseltin veya uv'yi kullanın: `uv pip install skyvern`.

  ## SDK

  **Skyvern, AI destekli tarayıcı otomasyonu ekleyen bir Playwright uzantısıdır.** Playwright'ın tüm gücünü ek AI yetenekleriyle birlikte sunar - doğal dil istemlerini kullanarak öğelerle etkileşim kurun, verileri çıkartın ve karmaşık çok adımlı iş akışlarını otomatikleştirin.

  **Kurulum:**
  - Python SDK / bulut API: `pip install skyvern`
  - Yerel sunucu + paketlenmiş UI: `pip install "skyvern[all]"` ardından `skyvern quickstart` komutunu çalıştırın
  - Postgres ile yerel sunucu + paketlenmiş UI: `pip install "skyvern[all]"` ardından `skyvern quickstart --postgres` komutunu çalıştırın
  - Mevcut bir API için paketlenmiş UI: `pip install "skyvern[ui]"` ardından `skyvern run ui --api-url <api-url> --api-key <api-key>` komutunu çalıştırın
  - TypeScript: `npm install @skyvern/client`

  ### AI Destekli Sayfa Komutları

  Skyvern sayfa nesnesine doğrudan dört temel AI komutu ekler:

  | Komut | Açıklama |
  |---------|-------------|
  | `page.act(prompt)` | Doğal dili kullanarak işlem gerçekleştirin (örn. "Giriş düğmesini tıklayın") |
  | `page.extract(prompt, schema)` | Sayfadan isteğe bağlı JSON şemasıyla yapılandırılmış verileri çıkartın |
  | `page.validate(prompt)` | Sayfa durumunu doğrulayın, `bool` döndürür (örn. "Kullanıcının oturum açmış olup olmadığını kontrol edin") |
  | `page.prompt(prompt, schema)` | LLM'ye isteğe bağlı yanıt şeması ile keyfi istemler gönderin |

  Ek olarak, `page.agent` daha yüksek seviye iş akışı komutları sağlar:

  | Komut | Açıklama |
  |---------|-------------|
  | `page.agent.run_task(prompt)` | Karmaşık çok adımlı görevleri yürütün |
  | `page.agent.login(credential_type, credential_id)` | Depolanmış kimlik bilgileriyle kimlik doğrulaması yapın (Skyvern, Bitwarden, 1Password) |
  | `page.agent.download_files(prompt)` | Dosyalara gezinin ve dosyaları indirin |
  | `page.agent.run_workflow(workflow_id)` | Önceden oluşturulmuş iş akışlarını yürütün |

  ### AI Destekli Playwright Eylemleri

  Tüm standart Playwright eylemleri, AI destekli öğe konumu için isteğe bağlı bir `prompt` parametresini destekler:

  | İşlem | Playwright | AI Destekli |
  |--------|------------|--------------|
  | Tıklama | `page.click("#btn")` | `page.click(prompt="Giriş düğmesini tıklayın")` |
  | Doldurma | `page.fill("#email", "a@b.com")` | `page.fill(prompt="Email alanı", value="a@b.com")` |
  | Seçme | `page.select_option("#country", "US")` | `page.select_option(prompt="Ülke açılır menüsü", value="US")` |
  | Yükleme | `page.upload_file("#file", "doc.pdf")` | `page.upload_file(prompt="Yükleme alanı", files="doc.pdf")` |

  **Üç etkileşim modu:**
  ```python
  # 1. Geleneksel Playwright - CSS/XPath seçicileri
  await page.click("#submit-button")

  # 2. AI destekli - doğal dil
  await page.click(prompt="Yeşil Gönder düğmesini tıklayın")

  # 3. AI geri dönüşü - önce seçiciyi dener, başarısız olursa AI'ye geri döner
  await page.click("#submit-btn", prompt="Gönder düğmesini tıklayın")
  ```

  ### Temel AI Komutları - Örnekler

  ```python
  # act - Doğal dili kullanarak işlem gerçekleştirin
  await page.act("Giriş düğmesini tıklayın ve panelin yüklenmesini bekleyin")

  # extract - İsteğe bağlı JSON şemasıyla yapılandırılmış verileri çıkartın
  result = await page.extract("Ürün adı ve fiyatını alın")
  result = await page.extract(
      prompt="Sipariş detaylarını çıkartın",
      schema={"order_id": "string", "total": "number", "items": "array"}
  )

  # validate - Sayfa durumunu kontrol edin (bool döndürür)
  is_logged_in = await page.validate("Kullanıcının oturum açmış olup olmadığını kontrol edin")

  # prompt - LLM'ye keyfi istemler gönderin
  summary = await page.prompt("Bu sayfada ne var özetleyin")
  ```

  ### Hızlı Başlangıç Örnekleri

  **UI aracılığıyla çalıştırın:**
  ```bash
  skyvern run all
  ```
  Web arayüzü aracılığıyla görevleri çalıştırmak için http://localhost:8080 adresine gidin. Paketlenmiş UI eksikse, `skyvern run ui` eşleşen UI paketini yüklemek için bir seçenek sunacaktır. İnteraktif olmayan kurulum için `skyvern run ui --install-ui` veya `skyvern run all --install-ui` kullanın.

  Mevcut bir Skyvern API'sine karşı yalnızca paketlenmiş UI'yi çalıştırmak için `skyvern[ui]` yükleyin ve `--api-url` iletin; CLI aksi takdirde geçersiz kılmadığınız sürece API URL'sinden `--wss-url` çıkarım yapın. Ayrıca `skyvern run ui` komutunu çalıştırmadan önce `VITE_API_BASE_URL`, `VITE_WSS_BASE_URL`, `VITE_ARTIFACT_API_BASE_URL`, `VITE_SKYVERN_API_KEY` ve `VITE_BROWSER_STREAMING_MODE` değişkenlerini ayarlayabilirsiniz.

  **Python SDK:**
  ```python
  from skyvern import Skyvern

  # Yerel mod
  skyvern = Skyvern.local()

  # Veya Skyvern Cloud'a bağlanın
  skyvern = Skyvern(api_key="your-api-key")

  # Tarayıcıyı başlatın ve sayfa alın
  browser = await skyvern.launch_cloud_browser()
  page = await browser.get_working_page()

  # Playwright'ı AI destekli eylemlerle karıştırın
  await page.goto("https://example.com")
  await page.click("#login-button")  # Geleneksel Playwright
  await page.agent.login(credential_type="skyvern", credential_id="cred_123")  # AI giriş
  await page.click(prompt="Sepete ilk öğeyi ekleyin")  # AI destekli tıklama
  await page.agent.run_task("Checkout'u şu kişi ile tamamlayın: John Snow, 12345")  # AI görevi
  ```

  **TypeScript SDK:**
  ```typescript
  import { Skyvern } from "@skyvern/client";

  const skyvern = new Skyvern({ apiKey: "your-api-key" });
  const browser = await skyvern.launchCloudBrowser();
  const page = await browser.getWorkingPage();

  // Playwright'ı AI destekli eylemlerle karıştırın
  await page.goto("https://example.com");
  await page.click("#login-button");  // Geleneksel Playwright
  await page.agent.login("skyvern", { credentialId: "cred_123" });  // AI giriş
  await page.click({ prompt: "Sepete ilk öğeyi ekleyin" });  // AI destekli tıklama
  await page.agent.runTask("Checkout'u şu kişi ile tamamlayın: John Snow, 12345");  // AI görevi

  await browser.close();
  ```

  **Basit görev yürütme:**
  ```python
  from skyvern import Skyvern

  skyvern = Skyvern()
  task = await skyvern.run_task(prompt="Bugünün hackernews'teki en iyi gönderisini bulun")
  print(task)
  ```

  ## Gelişmiş Kullanım

  ### Kendi tarayıcınızı kontrol edin (Chrome)

  Skyvern'in mevcut Chrome tarayıcınızı kontrol etmesine izin verin - tüm çerezleriniz, giriş bilgileriniz ve uzantılarınız ile birlikte.

  #### Adım 1: Chrome'da uzaktan hata ayıklamayı etkinleştirin

  1. Chrome'u açın ve `chrome://inspect/#remote-debugging` adresine gidin
  2. Hata ayıklama sunucusunu başlatmak için **Etkinleştir** düğmesine tıklayın
  3. Şunu görmelisiniz: **Server running at: 127.0.0.1:9222**

  > [!TIP]
  > `skyvern init browser` komutu bunu otomatik olarak yapabilir — `chrome://inspect/#remote-debugging` adresini açar, etkinleştirmenizi bekler ve yapılandırmayı kaydeder.

  #### Adım 2: Skyvern'i Bağlayın

  **Seçenek A — Python Kodu:**
  ```python
  from skyvern import Skyvern

  skyvern = Skyvern(
      base_url="http://localhost:8000",
      api_key="YOUR_API_KEY",
      browser_address="http://127.0.0.1:9222",
  )
  task = await skyvern.run_task(
      prompt="Bugünün hackernews'teki en iyi gönderisini bulun",
  )
  ```

  **Seçenek B — Skyvern Hizmeti:**

  .env dosyasına iki değişken ekleyin:
  ```bash
  BROWSER_TYPE=cdp-connect
  BROWSER_REMOTE_DEBUGGING_URL=http://127.0.0.1:9222
  ```

  Skyvern hizmetini `skyvern run all` komutunu çalıştırarak yeniden başlatın ve UI veya kod aracılığıyla görevi çalıştırın

  ### Skyvern Cloud'u yerel tarayıcınıza bağlayın

  Skyvern Cloud'un makinenizde çalışan bir Chrome tarayıcısını kontrol etmesine izin verin - tüm mevcut çerezleriniz, giriş bilgileriniz ve uzantılarınız ile birlikte. Zaten oturum açtığınız veya VPN arkasında olduğunuz siteleri otomatikleştirmek için kullanışlıdır.

  ```bash
  # Chrome'u başlatmak ve Skyvern Cloud'a bir tünel oluşturmak için bir komut
  skyvern browser serve --tunnel
  ```

  Ardından görevinizde tünel URL'sini kullanın:

  ```python
  from skyvern import Skyvern

  skyvern = Skyvern(api_key="your-api-key")
  task = await skyvern.run_task(
      prompt="Hesabımdan en son faturayı indirin",
      browser_address="https://abc123.ngrok-free.dev",
  )
  ```

  > [!WARNING]
  > Tarayıcınızı bir tünel aracılığıyla gösterirken her zaman `--api-key` kullanın. Olmadan, URL'ye sahip herkesin tarayıcının tam kontrolü vardır. [Güvenlik dokümanlarına](https://www.skyvern.com/docs/optimization/browser-tunneling#security) bakın.

  Tüm seçenekler, manuel tünel kurulumu ve sorun giderme için [tam dokümantasyona](https://www.skyvern.com/docs/optimization/browser-tunneling) bakın.

  ### Çalışmanızdan tutarlı çıktı şeması alın
  Bunu `data_extraction_schema` parametresini ekleyerek yapabilirsiniz:
  ```python
  from skyvern import Skyvern

  skyvern = Skyvern()
  task = await skyvern.run_task(
      prompt="Bugünün hackernews'teki en iyi gönderisini bulun",
      data_extraction_schema={
          "type": "object",
          "properties": {
              "title": {
                  "type": "string",
                  "description": "En iyi gönderinin başlığı"
              },
              "url": {
                  "type": "string",
                  "description": "En iyi gönderinin URL'si"
              },
              "points": {
                  "type": "integer",
                  "description": "Gönderinin aldığı puan sayısı"
              }
          }
      }
  )
  ```

  ### Sorunları ayıklamak için faydalı komutlar


  ```bash
  # Skyvern Sunucusunu Ayrı Olarak Başlatın*
  skyvern run server

  # Skyvern UI'yi Başlatın
  skyvern run ui

  # Skyvern hizmetinin durumunu kontrol edin
  skyvern status

  # Skyvern hizmetini durdurun
  skyvern stop all

  # Skyvern UI'yi durdurun
  skyvern stop ui

  # Skyvern Sunucusunu Ayrı Olarak Durdurun
  skyvern stop server
  ```

  # Performans ve Değerlendirme

  Skyvern, %64.4 doğruluk oranı ile [WebBench kıyaslamasında](webbench.ai) SOTA performansına sahiptir. Teknik rapor + değerlendirme [burada](https://www.skyvern.com/blog/web-bench-a-new-way-to-compare-ai-browser-agents/) bulunabilir

  <p align="center">
    
  </p>

  ## WRITE görevlerindeki performans (örneğin formları doldurma, oturum açma, dosya indirme vb.)

  Skyvern, WRITE görevlerinde (örneğin formları doldurma, oturum açma, dosya indirme vb.) en iyi performans gösteren aracıdır; bu, birincil olarak RPA (Robotic Process Automation) ile ilgili görevler için kullanılır.

  <p align="center">
    
  </p>

  # Skyvern Özellikleri

  ## Skyvern Görevleri
  Görevler, Skyvern içindeki temel yapı taşıdır. Her görev, Skyvern'e bir web sitesinde gezinme ve belirli bir hedefi başarma talimatı veren tek bir istektir.

  Görevler, `url`, `prompt` belirtmenizi gerektirir ve isteğe bağlı olarak `data schema` (çıktının belirli bir şemaya uymasını istiyorsanız) ve `error codes` (Skyvern'in belirli durumlarda çalışmayı durdurmasını istiyorsanız) içerebilir.

  <p align="center">
    
  </p>


  ## Skyvern İş Akışları
  İş akışları, birden fazla görevi bir araya getirerek tutarlı bir iş akışı birimi oluşturmak için bir yoldur.

  Örneğin, 1 Ocak'tan daha yeni tüm faturaları indirmek isteyorsanız, önce faturaların sayfasına giden, ardından yalnızca 1 Ocak'tan daha yeni faturaları göstermek için filtrelenen, uygun tüm faturaların bir listesini çıkaran ve her faturayı indirmek için her faturada döngü yapan bir iş akışı oluşturabilirsiniz.

  Başka bir örnek, bir e-ticaret mağazasından ürün satın almayı otomatikleştirmek istiyorsanız, önce istenen ürüne giden, ardından bunu sepete ekleyen bir iş akışı oluşturabilirsiniz. İkinci olarak, sepete gidip sepet durumunu doğrulaması gerekir. Son olarak, satın almak için checkout işleminden geçer.

  Desteklenen iş akışı özellikleri şunları içerir:
  1. Tarayıcı Görevi
  1. Tarayıcı Eylemi
  1. Veri Çıkarma
  1. Doğrulama
  1. For Döngüleri
  1. Dosya ayrıştırma
  1. E-posta gönderme
  1. Metin İstemler
  1. HTTP İstek Bloğu
  1. Özel Kod Bloğu
  1. Dosyaları blok depolamaya yükleme
  1. (Çok Yakında) Koşullar

  <p align="center">
    
  </p>

  ## Canlı Yayın
  Skyvern, tarayıcının görüntü alanını yerel makinenize canlı yayınlamanıza olanak tanır, böylece Skyvern'in web üzerinde tam olarak ne yaptığını görebilirsiniz. Bu, hata ayıklama ve Skyvern'in bir web sitesiyle nasıl etkileşim kurduğunu anlamak için faydalıdır ve gerektiğinde müdahale etmek için

  ## Form Doldurma
  Skyvern, web sitelerindeki form girdilerini doldurma açısından natively yetkindir. `navigation_goal` aracılığıyla bilgi iletmek, Skyvern'in bilgiyi anlamasını ve formu buna göre doldurmasını sağlayacaktır.

  ## Veri Çıkarma
  Skyvern ayrıca bir web sitesinden veri çıkarma konusunda da yetkilidir.

  Ayrıca, Skyvern'e web sitesinden tam olarak hangi verileri çıkartmak istediğinizi söylemek için doğrudan ana isteme içinde jsonc formatında bir `data_extraction_schema` belirtebilirsiniz. Skyvern'in çıktısı sağlanan şemaya göre yapılandırılacaktır.

  ## Dosya İndirme
  Skyvern ayrıca bir web sitesinden dosya indirme konusunda da yetkilidir. İndirilen tüm dosyalar otomatik olarak blok depolamaya yüklenir (yapılandırılmışsa) ve bunlara UI aracılığıyla erişebilirsiniz.

  ## Kimlik Doğrulama
  Skyvern, giriş arkasındaki görevleri otomatikleştirmeyi kolaylaştırmak için çok sayıda farklı kimlik doğrulama yöntemini destekler. Denemek isterseniz, lütfen bize [e-posta](mailto:founders@skyvern.com) veya [discord](https://discord.gg/fG2XXEuQX3) aracılığıyla ulaşın.

  <p align="center">
    
  </p>


  ### 🔐 2FA Desteği (TOTP)
  Skyvern, 2FA gerektiren iş akışlarını otomatikleştirmenizi sağlamak için çok sayıda 2FA yöntemini destekler.

  Örnekler şunları içerir:
  1. QR tabanlı 2FA (örn. Google Authenticator, Authy)
  1. E-posta tabanlı 2FA
  1. SMS tabanlı 2FA

  🔐 2FA desteği hakkında [daha fazlasını öğrenin](https://www.skyvern.com/docs/credentials/totp).

  ### Ş
---

<!-- DOCTOC SKIP -->

<h1 align="center">
 <a href="https://www.skyvern.com">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="fern/images/skyvern_logo.png"/>
    
  </picture>
 </a>
 <br />
</h1>
<p align="center">
🐉 Automate Browser-based workflows using LLMs and Computer Vision 🐉
</p>
<p align="center">
  <a href="https://www.skyvern.com/"></a>
  <a href="https://www.skyvern.com/docs/"></a>
  <a href="https://discord.gg/fG2XXEuQX3"></a>
  <!-- <a href="https://pepy.tech/project/skyvern" target="_blank"></a> -->
  <a href="https://github.com/skyvern-ai/skyvern"></a>
  <a href="https://github.com/Skyvern-AI/skyvern/blob/main/LICENSE"></a>
  <a href="https://twitter.com/skyvernai"></a>
  <a href="https://www.linkedin.com/company/95726232"></a>
</p>

[Skyvern](https://www.skyvern.com) automates browser-based workflows using LLMs and computer vision. It provides a Playwright-compatible SDK that adds AI functionality on top of playwright, as well as a no-code workflow builder to help both technical and non-technical users automate manual workflows on any website, replacing brittle or unreliable automation solutions.

<p align="center">
  
</p>

Traditional approaches to browser automations required writing custom scripts for websites, often relying on DOM parsing and XPath-based interactions which would break whenever the website layouts changed.

Instead of only relying on code-defined XPath interactions, Skyvern relies on Vision LLMs to learn and interact with the websites.

# How it works
Skyvern was inspired by the Task-Driven autonomous agent design popularized by [BabyAGI](https://github.com/yoheinakajima/babyagi) and [AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) -- with one major bonus: we give Skyvern the ability to interact with websites using browser automation libraries like [Playwright](https://playwright.dev/).

Skyvern uses a swarm of agents to comprehend a website, and plan and execute its actions:

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="fern/images/skyvern_2_0_system_diagram.png" />
  
</picture>

This approach has a few advantages:

1. Skyvern can operate on websites it's never seen before, as it's able to map visual elements to actions necessary to complete a workflow, without any customized code
1. Skyvern is resistant to website layout changes, as there are no pre-determined XPaths or other selectors our system is looking for while trying to navigate
1. Skyvern is able to take a single workflow and apply it to a large number of websites, as it's able to reason through the interactions necessary to complete the workflow
A detailed technical report can be found [here](https://www.skyvern.com/blog/skyvern-2-0-state-of-the-art-web-navigation-with-85-8-on-webvoyager-eval/).

# Demo
<!-- Redo demo -->
https://github.com/user-attachments/assets/5cab4668-e8e2-4982-8551-aab05ff73a7f

# Quickstart

## Skyvern Cloud
[Skyvern Cloud](https://app.skyvern.com) is a managed cloud version of Skyvern that allows you to run Skyvern without worrying about the infrastructure. It allows you to run multiple Skyvern instances in parallel and comes bundled with anti-bot detection mechanisms, proxy network, and CAPTCHA solvers.

If you'd like to try it out, navigate to [app.skyvern.com](https://app.skyvern.com) and create an account.

## Run Locally (UI + Server)

Choose your preferred setup method:

> **Database default**: `skyvern quickstart` and `skyvern run server` default to a SQLite database at `~/.skyvern/data.db` so the pip path works without Postgres or Docker. To use Postgres instead, pass `--postgres` for a local container or `--database-string` for an existing database. Docker Compose always uses the bundled Postgres service.

### Option A: pip install (Recommended for Python-managed local setup)

Dependencies needed:
- [Python 3.11, 3.12, or 3.13](https://www.python.org/downloads/)

Additionally, for Windows:
- [Rust](https://rustup.rs/)
- VS Code with C++ dev tools and Windows SDK

#### 1. Install Skyvern

```bash
pip install "skyvern[all]"
```

#### 2. Run Skyvern

```bash
skyvern quickstart
```

The pip quickstart uses SQLite by default. For a local Postgres container, run `skyvern quickstart --postgres`.

### Option B: Docker Compose

Use this option if you want everything containerized (Postgres, API, UI) and don't want to install Python/Node locally.

1. Install [Docker Desktop](https://www.docker.com/products/docker-desktop/)
2. Clone the repository:
   ```bash
   git clone https://github.com/skyvern-ai/skyvern.git && cd skyvern
   ```
3. Configure your LLM provider in `.env` (the `quickstart --docker-compose` command below will create it from `.env.example` if missing):
   ```bash
   cp .env.example .env  # if not already created
   # edit .env to add your LLM API key
   ```
4. Start everything:
   ```bash
   docker compose up -d
   ```
5. Open http://localhost:8080

### Troubleshooting

**`(sqlite3.OperationalError) table organizations already exists`** — You hit a known bug in `pip install skyvern==1.0.31`. Fix:

```bash
rm ~/.skyvern/data.db   # remove the leftover SQLite file
pip install --upgrade skyvern   # 1.0.32+ contains the fix
skyvern quickstart
```

If you are still on 1.0.31 and cannot upgrade, install via uv instead:

```bash
uv pip install skyvern
```

**`pip install skyvern` fails with ResolutionImpossible (litellm / fastmcp)** — You hit a dependency-resolution conflict in 1.0.31. Either upgrade to 1.0.32+ or use uv: `uv pip install skyvern`.

## SDK

**Skyvern is a Playwright extension that adds AI-powered browser automation.** It gives you the full power of Playwright with additional AI capabilities—use natural language prompts to interact with elements, extract data, and automate complex multi-step workflows.

**Installation:**
- Python SDK / cloud API: `pip install skyvern`
- Local server + packaged UI: `pip install "skyvern[all]"` then run `skyvern quickstart`
- Local server + packaged UI with Postgres: `pip install "skyvern[all]"` then run `skyvern quickstart --postgres`
- Packaged UI for an existing API: `pip install "skyvern[ui]"` then run
  `skyvern run ui --api-url <api-url> --api-key <api-key>`
- TypeScript: `npm install @skyvern/client`

### AI-Powered Page Commands

Skyvern adds four core AI commands directly on the page object:

| Command | Description |
|---------|-------------|
| `page.act(prompt)` | Perform actions using natural language (e.g., "Click the login button") |
| `page.extract(prompt, schema)` | Extract structured data from the page with optional JSON schema |
| `page.validate(prompt)` | Validate page state, returns `bool` (e.g., "Check if user is logged in") |
| `page.prompt(prompt, schema)` | Send arbitrary prompts to the LLM with optional response schema |

Additionally, `page.agent` provides higher-level workflow commands:

| Command | Description |
|---------|-------------|
| `page.agent.run_task(prompt)` | Execute complex multi-step tasks |
| `page.agent.login(credential_type, credential_id)` | Authenticate with stored credentials (Skyvern, Bitwarden, 1Password) |
| `page.agent.download_files(prompt)` | Navigate and download files |
| `page.agent.run_workflow(workflow_id)` | Execute pre-built workflows |

### AI-Augmented Playwright Actions

All standard Playwright actions support an optional `prompt` parameter for AI-powered element location:

| Action | Playwright | AI-Augmented |
|--------|------------|--------------|
| Click | `page.click("#btn")` | `page.click(prompt="Click login button")` |
| Fill | `page.fill("#email", "a@b.com")` | `page.fill(prompt="Email field", value="a@b.com")` |
| Select | `page.select_option("#country", "US")` | `page.select_option(prompt="Country dropdown", value="US")` |
| Upload | `page.upload_file("#file", "doc.pdf")` | `page.upload_file(prompt="Upload area", files="doc.pdf")` |

**Three interaction modes:**
```python
# 1. Traditional Playwright - CSS/XPath selectors
await page.click("#submit-button")

# 2. AI-powered - natural language
await page.click(prompt="Click the green Submit button")

# 3. AI fallback - tries selector first, falls back to AI if it fails
await page.click("#submit-btn", prompt="Click the Submit button")
```

### Core AI Commands - Examples

```python
# act - Perform actions using natural language
await page.act("Click the login button and wait for the dashboard to load")

# extract - Extract structured data with optional JSON schema
result = await page.extract("Get the product name and price")
result = await page.extract(
    prompt="Extract order details",
    schema={"order_id": "string", "total": "number", "items": "array"}
)

# validate - Check page state (returns bool)
is_logged_in = await page.validate("Check if the user is logged in")

# prompt - Send arbitrary prompts to the LLM
summary = await page.prompt("Summarize what's on this page")
```

### Quick Start Examples

**Run via UI:**
```bash
skyvern run all
```
Navigate to http://localhost:8080 to run tasks through the web interface. If the packaged UI is missing, `skyvern run ui` will offer to install the matching UI package. For non-interactive setup, use `skyvern run ui --install-ui` or `skyvern run all --install-ui`.

To run only the packaged UI against an existing Skyvern API, install `skyvern[ui]` and pass
`--api-url`; the CLI infers `--wss-url` from the API URL unless you override it. You can also set
`VITE_API_BASE_URL`, `VITE_WSS_BASE_URL`, `VITE_ARTIFACT_API_BASE_URL`, `VITE_SKYVERN_API_KEY`,
and `VITE_BROWSER_STREAMING_MODE` before running `skyvern run ui`.

**Python SDK:**
```python
from skyvern import Skyvern

# Local mode
skyvern = Skyvern.local()

# Or connect to Skyvern Cloud
skyvern = Skyvern(api_key="your-api-key")

# Launch browser and get page
browser = await skyvern.launch_cloud_browser()
page = await browser.get_working_page()

# Mix Playwright with AI-powered actions
await page.goto("https://example.com")
await page.click("#login-button")  # Traditional Playwright
await page.agent.login(credential_type="skyvern", credential_id="cred_123")  # AI login
await page.click(prompt="Add first item to cart")  # AI-augmented click
await page.agent.run_task("Complete checkout with: John Snow, 12345")  # AI task
```

**TypeScript SDK:**
```typescript
import { Skyvern } from "@skyvern/client";

const skyvern = new Skyvern({ apiKey: "your-api-key" });
const browser = await skyvern.launchCloudBrowser();
const page = await browser.getWorkingPage();

// Mix Playwright with AI-powered actions
await page.goto("https://example.com");
await page.click("#login-button");  // Traditional Playwright
await page.agent.login("skyvern", { credentialId: "cred_123" });  // AI login
await page.click({ prompt: "Add first item to cart" });  // AI-augmented click
await page.agent.runTask("Complete checkout with: John Snow, 12345");  // AI task

await browser.close();
```

**Simple task execution:**
```python
from skyvern import Skyvern

skyvern = Skyvern()
task = await skyvern.run_task(prompt="Find the top post on hackernews today")
print(task)
```

## Advanced Usage

### Control your own browser (Chrome)

Let Skyvern control your existing Chrome browser — with all your cookies, logins, and extensions.

#### Step 1: Enable remote debugging in Chrome

1. Open Chrome and navigate to `chrome://inspect/#remote-debugging`
2. Click **Enable** to start the debugging server
3. You should see: **Server running at: 127.0.0.1:9222**

> [!TIP]
> The `skyvern init browser` command can do this automatically — it opens `chrome://inspect/#remote-debugging`, waits for you to enable it, and saves the config.

#### Step 2: Connect Skyvern

**Option A — Python Code:**
```python
from skyvern import Skyvern

skyvern = Skyvern(
    base_url="http://localhost:8000",
    api_key="YOUR_API_KEY",
    browser_address="http://127.0.0.1:9222",
)
task = await skyvern.run_task(
    prompt="Find the top post on hackernews today",
)
```

**Option B — Skyvern Service:**

Add two variables to your .env file:
```bash
BROWSER_TYPE=cdp-connect
BROWSER_REMOTE_DEBUGGING_URL=http://127.0.0.1:9222
```

Restart Skyvern service `skyvern run all` and run the task through UI or code

### Connect Skyvern Cloud to your local browser

Let Skyvern Cloud control a Chrome browser running on your machine — with all your existing cookies, logins, and extensions. Useful for automating sites where you're already logged in or behind a VPN.

```bash
# One command to start Chrome + create a tunnel to Skyvern Cloud
skyvern browser serve --tunnel
```

Then use the tunnel URL in your task:

```python
from skyvern import Skyvern

skyvern = Skyvern(api_key="your-api-key")
task = await skyvern.run_task(
    prompt="Download the latest invoice from my account",
    browser_address="https://abc123.ngrok-free.dev",
)
```

> [!WARNING]
> Always use `--api-key` when exposing your browser via a tunnel. Without it, anyone with the URL has full control of your browser. See the [security docs](https://www.skyvern.com/docs/optimization/browser-tunneling#security).

See the [full documentation](https://www.skyvern.com/docs/optimization/browser-tunneling) for all options, manual tunnel setup, and troubleshooting.

### Get consistent output schema from your run
You can do this by adding the `data_extraction_schema` parameter:
```python
from skyvern import Skyvern

skyvern = Skyvern()
task = await skyvern.run_task(
    prompt="Find the top post on hackernews today",
    data_extraction_schema={
        "type": "object",
        "properties": {
            "title": {
                "type": "string",
                "description": "The title of the top post"
            },
            "url": {
                "type": "string",
                "description": "The URL of the top post"
            },
            "points": {
                "type": "integer",
                "description": "Number of points the post has received"
            }
        }
    }
)
```

### Helpful commands to debug issues


```bash
# Launch the Skyvern Server Separately*
skyvern run server

# Launch the Skyvern UI
skyvern run ui

# Check status of the Skyvern service
skyvern status

# Stop the Skyvern service
skyvern stop all

# Stop the Skyvern UI
skyvern stop ui

# Stop the Skyvern Server Separately
skyvern stop server
```

# Performance & Evaluation

Skyvern has SOTA performance on the [WebBench benchmark](webbench.ai) with a 64.4% accuracy. The technical report + evaluation can be found [here](https://www.skyvern.com/blog/web-bench-a-new-way-to-compare-ai-browser-agents/)

<p align="center">
  
</p>

## Performance on WRITE tasks (eg filling out forms, logging in, downloading files, etc)

Skyvern is the best performing agent on WRITE tasks (eg filling out forms, logging in, downloading files, etc), which is primarily used for RPA (Robotic Process Automation) adjacent tasks.

<p align="center">
  
</p>

# Skyvern Features

## Skyvern Tasks
Tasks are the fundamental building block inside Skyvern. Each task is a single request to Skyvern, instructing it to navigate through a website and accomplish a specific goal.

Tasks require you to specify a `url`, `prompt`, and can optionally include a `data schema` (if you want the output to conform to a specific schema) and `error codes` (if you want Skyvern to stop running in specific situations).

<p align="center">
  
</p>


## Skyvern Workflows
Workflows are a way to chain multiple tasks together to form a cohesive unit of work.

For example, if you wanted to download all invoices newer than January 1st, you could create a workflow that first navigated to the invoices page, then filtered down to only show invoices newer than January 1st, extracted a list of all eligible invoices, and iterated through each invoice to download it.

Another example is if you wanted to automate purchasing products from an e-commerce store, you could create a workflow that first navigated to the desired product, then added it to a cart. Second, it would navigate to the cart and validate the cart state. Finally, it would go through the checkout process to purchase the items.

Supported workflow features include:
1. Browser Task
1. Browser Action
1. Data Extraction
1. Validation
1. For Loops
1. File parsing
1. Sending emails
1. Text Prompts
1. HTTP Request Block
1. Custom Code Block
1. Uploading files to block storage
1. (Coming soon) Conditionals

<p align="center">
  
</p>

## Livestreaming
Skyvern allows you to livestream the viewport of the browser to your local machine so that you can see exactly what Skyvern is doing on the web. This is useful for debugging and understanding how Skyvern is interacting with a website, and intervening when necessary

## Form Filling
Skyvern is natively capable of filling out form inputs on websites. Passing in information via the `navigation_goal` will allow Skyvern to comprehend the information and fill out the form accordingly.

## Data Extraction
Skyvern is also capable of extracting data from a website.

You can also specify a `data_extraction_schema` directly within the main prompt to tell Skyvern exactly what data you'd like to extract from the website, in jsonc format. Skyvern's output will be structured in accordance to the supplied schema.

## File Downloading
Skyvern is also capable of downloading files from a website. All downloaded files are automatically uploaded to block storage (if configured), and you can access them via the UI.

## Authentication
Skyvern supports a number of different authentication methods to make it easier to automate tasks behind a login. If you'd like to try it out, please reach out to us [via email](mailto:founders@skyvern.com) or [discord](https://discord.gg/fG2XXEuQX3).

<p align="center">
  
</p>


### 🔐 2FA Support (TOTP)
Skyvern supports a number of different 2FA methods to allow you to automate workflows that require 2FA.

Examples include:
1. QR-based 2FA (e.g. Google Authenticator, Authy)
1. Email based 2FA
1. SMS based 2FA

🔐 Learn more about 2FA support [here](https://www.skyvern.com/docs/credentials/totp).

### Password Manager Integrations
Skyvern currently supports the following password manager integrations:
- [x] Bitwarden
- [x] Custom Credential Service (HTTP API)
- [ ] 1Password
- [ ] LastPass


## Model Context Protocol (MCP)

Skyvern supports the Model Context Protocol (MCP) to allow you to use any LLM that supports MCP.

See the MCP documentation [here](https://www.skyvern.com/docs/integrations/mcp#mcp-server)

## Zapier / Make.com / N8N Integration
Skyvern supports Zapier, Make.com, and N8N to allow you to connect your Skyvern workflows to other apps.

* [Zapier](https://www.skyvern.com/docs/integrations/zapier)
* [Make.com](https://www.skyvern.com/docs/integrations/make.com)
* [N8N](https://www.skyvern.com/docs/integrations/n8n)

🔐 Learn more about 2FA support [here](https://www.skyvern.com/docs/credentials/totp).


# Real-world examples of Skyvern
We love to see how Skyvern is being used in the wild. Here are some examples of how Skyvern is being used to automate workflows in the real world. Please open PRs to add your own examples!

## Invoice Downloading on many different websites
[Book a demo to see it live](https://meetings.hubspot.com/skyvern/demo)

<p align="center">
  
</p>

## Automate the job application process
[💡 See it in action](https://app.skyvern.com/tasks/create/job_application)
<p align="center">
  
</p>

## Automate materials procurement for a manufacturing company
[💡 See it in action](https://app.skyvern.com/tasks/create/finditparts)
<p align="center">
  
</p>

## Navigating to government websites to register accounts or fill out forms
[💡 See it in action](https://app.skyvern.com/tasks/create/california_edd)
<p align="center">
  
</p>
<!-- Add example of delaware entity lookups x2 -->

## Filling out random contact us forms
[💡 See it in action](https://app.skyvern.com/tasks/create/contact_us_forms)
<p align="center">
  
</p>


## Retrieving insurance quotes from insurance providers in any language
[💡 See it in action](https://app.skyvern.com/tasks/create/bci_seguros)
<p align="center">
  
</p>

[💡 See it in action](https://app.skyvern.com/tasks/create/geico)

<p align="center">
  
</p>

# Contributor Setup
Make sure to have [uv](https://docs.astral.sh/uv/getting-started/installation/) installed.
1. Run this to create your virtual environment (`.venv`)
    ```bash
    uv sync --group dev
    ```
2. Perform initial server configuration
    ```bash
    uv run skyvern quickstart
    ```
3. Navigate to `http://localhost:8080` in your browser to start using the UI
   *The Skyvern CLI supports Windows, WSL, macOS, and Linux environments.*

# Documentation

More extensive documentation can be found on our [📕 docs page](https://www.skyvern.com/docs). Please let us know if something is unclear or missing by opening an issue or reaching out to us [via email](mailto:founders@skyvern.com) or [discord](https://discord.gg/fG2XXEuQX3).

# Supported LLMs
| Provider | Supported Models |
| -------- | ------- |
| OpenAI   | GPT-5.5, GPT-5.4, GPT-5, GPT-4.1, o3, o4-mini |
| Anthropic | Claude 4.7 Opus, Claude 4.6 (Sonnet, Opus), Claude 4.5 (Haiku, Sonnet, Opus) |
| Azure OpenAI | Any GPT models deployed to your Azure subscription |
| AWS Bedrock | Claude 4.7, Claude 4.6 (Sonnet, Opus), Claude 4.5 (Sonnet, Opus) |
| Gemini | Gemini 3.1 Pro, Gemini 3 Flash, Gemini 2.5 Pro/Flash |
| Ollama | Run any locally hosted model via [Ollama](https://github.com/ollama/ollama) |
| OpenRouter | Access models through [OpenRouter](https://openrouter.ai) |
| OpenAI-compatible | Any custom API endpoint that follows OpenAI's API format (via [liteLLM](https://docs.litellm.ai/docs/providers/openai_compatible)) |

For detailed LLM configuration including all available model keys, environment variables, and multi-model setups, see the [LLM Configuration docs](https://www.skyvern.com/docs/self-hosted/llm-configuration).

# Contributing

We welcome PRs and suggestions! Don't hesitate to open a PR/issue or to reach out to us [via email](mailto:founders@skyvern.com) or [discord](https://discord.gg/fG2XXEuQX3).
Please have a look at our [contribution guide](CONTRIBUTING.md) and
["Help Wanted" issues](https://github.com/skyvern-ai/skyvern/issues?q=is%3Aopen+is%3Aissue+label%3A%22help+wanted%22) to get started!

If you want to chat with the skyvern repository to get a high level overview of how it is structured, how to build off it, and how to resolve usage questions, check out [Code Sage](https://sage.storia.ai?utm_source=github&utm_medium=referral&utm_campaign=skyvern-readme).

# Telemetry

By Default, Skyvern collects basic usage statistics to help us understand how Skyvern is being used. If you would like to opt-out of telemetry, please set the `SKYVERN_TELEMETRY` environment variable to `false`.

# License
Skyvern's open source repository is supported via a managed cloud. All of the core logic powering Skyvern is available in this open source repository licensed under the [AGPL-3.0 License](LICENSE), with the exception of anti-bot measures available in our managed cloud offering.

If you have any questions or concerns around licensing, please [contact us](mailto:support@skyvern.com) and we would be happy to help.

# Star History

[![Star History Chart](https://api.star-history.com/svg?repos=Skyvern-AI/skyvern&type=Date)](https://star-history.com/#Skyvern-AI/skyvern&Date)
