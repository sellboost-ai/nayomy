---
name: "neondatabase/mcp-server-neon"
description: "MCP server for interacting with Neon Management API and databases."
description_tr: "Neon Management API ve veritabanları ile etkileşim kurmanız için MCP sunucusu."
category: "Databases"
repo: "neondatabase/mcp-server-neon"
stars: 603
url: "https://github.com/neondatabase/mcp-server-neon"
body_length: 21621
license: "MIT"
language: "TypeScript"
homepage: "https://mcp-server-neon-jet.vercel.app"
body_tr: |-
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://neon.com/brand/neon-logo-dark-color.svg">
    <source media="(prefers-color-scheme: light)" srcset="https://neon.com/brand/neon-logo-light-color.svg">
    
  </picture>

  # Neon MCP Server

  [![Cursor'a MCP Server Yükle](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=Neon&config=eyJ1cmwiOiJodHRwczovL21jcC5uZW9uLnRlY2gvbWNwIn0%3D)
  [![Kiro'ya Ekle](https://kiro.dev/images/add-to-kiro.svg)](https://kiro.dev/launch/mcp/add?name=Neon&config=%7B%22url%22%3A%20%22https%3A//mcp.neon.tech/mcp%22%7D)

  **Neon MCP Server**, Neon Postgres veritabanlarınız ile **doğal dil** kullanarak etkileşime girmenize olanak tanıyan açık kaynaklı bir araçtır.

  [![Lisans: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

  Model Context Protocol (MCP), büyük dil modelleri (LLM'ler) ile harici sistemler arasında bağlamı yönetmek için tasarlanmış [standartlaştırılmış bir protokoldür](https://modelcontextprotocol.io/introduction). Bu depo, [Neon](https://neon.tech) için uzak bir MCP Server sağlar.

  Neon'un MCP server'ı, doğal dil istekleri ile [Neon API](https://api-docs.neon.tech/reference/getting-started-with-neon-api) arasında bir köprü görevi görmektedir. MCP'yi temel alarak, isteklerinizi gerekli API çağrılarına çevirerek proje ve branch oluşturma, sorgu çalıştırma ve veritabanı göçlerini sorunsuzca gerçekleştirme gibi görevleri yönetmenizi sağlar.

  Neon MCP server'ının temel özellikleri arasında:

  - **Doğal dil etkileşimi:** Sezgisel, konuşumsal komutlar kullanarak Neon veritabanlarını yönetin.
  - **Basitleştirilmiş veritabanı yönetimi:** SQL yazıp veya doğrudan Neon API'yi kullanmadan karmaşık işlemleri gerçekleştirin.
  - **Geliştirici olmayan kullanıcılar için erişilebilirlik:** Değişken teknik geçmiş olan kullanıcıları Neon veritabanlarıyla etkileşim kurabilmeleri için güçlendirin.
  - **Veritabanı göçü desteği:** Doğal dil aracılığıyla başlatılan veritabanı şeması değişiklikleri için Neon'un branch özelliklerinden yararlanın.

  Örneğin, Claude Code veya herhangi bir MCP Client'ında, Neon ile aşağıdakiler gibi işlemleri gerçekleştirmek için doğal dil kullanabilirsiniz:

  - `Yeni bir Postgres veritabanı oluşturalım ve "my-database" olarak adlandıralım. Ardından, şu sütunları içeren "users" adında bir tablo oluşturalım: id, name, email ve password.`
  - `"my-project" adlı projemde, users tablosuna "created_at" adlı yeni bir sütun ekleyen bir migration çalıştırmak istiyorum.`
  - `Bütün Neon projelerim ve her birinde ne tür veri bulunduğu hakkında bir özet verebilir misin?`

  > [!WARNING]  
  > **Neon MCP Server Güvenlik Değerlendirmeleri**  
  > Neon MCP Server, doğal dil istekleri aracılığıyla güçlü veritabanı yönetimi yeteneklerini sağlar. **Yürütülmeden önce LLM tarafından istenen eylemleri her zaman gözden geçirin ve yetkilendirin.** Yalnızca yetkili kullanıcılar ve uygulamaların Neon MCP Server'a erişim sahibi olduğundan emin olun.
  >
  > Neon MCP Server, yalnızca yerel geliştirme ve IDE entegrasyonları için tasarlanmıştır. **Neon MCP Server'ı üretim ortamlarında kullanmanızı önermiyoruz.** Kaza veya yetkisiz değişikliklere neden olabilecek güçlü işlemler yürütebilir.
  >
  > Daha fazla bilgi için bkz. [MCP güvenlik rehberi →](https://neon.tech/docs/ai/neon-mcp-server#mcp-security-guidance).

  ## Neon MCP Server'ı Kurma

  Neon MCP Server'ı kurmanız için birkaç seçeneğiniz vardır:

  1. **API Anahtarı ile Hızlı Kurulum (Cursor, VS Code ve Claude Code):** Neon'un MCP Server'ını, [agent skills](https://github.com/neondatabase/agent-skills) ve VS Code uzantısını tek komutla otomatik olarak yapılandırmak için [`neonctl@latest init`](https://neon.com/docs/reference/cli-init) komutunu çalıştırın.
  2. **Uzak MCP Server (OAuth Tabanlı Kimlik Doğrulama):** OAuth kullanarak kimlik doğrulamasıyla Neon'un yönetilen MCP server'ına bağlanın. Bu yöntem, API anahtarları yönetme ihtiyacını ortadan kaldırdığından daha kullanışlıdır. Ayrıca, yeni özellikler ve geliştirmeler yayınlandığı anda otomatik olarak alırsınız.
  3. **Uzak MCP Server (API Anahtarı Tabanlı Kimlik Doğrulama):** API anahtarı kullanarak kimlik doğrulamasıyla Neon'un yönetilen MCP server'ına bağlanın. Bu yöntem, OAuth'un kullanılamadığı bir uzak agent'ı Neon'a bağlamak istediğinizde kullanışlıdır. Ayrıca, yeni özellikler ve geliştirmeler yayınlandığı anda otomatik olarak alırsınız.

  ### Ön Koşullar

  - Bir MCP Client uygulaması.
  - Bir [Neon hesabı](https://console.neon.tech/signup).
  - **Node.js (>= v18.0.0):** [nodejs.org](https://nodejs.org) adresinden indirin.

  Geliştirme için, Node.js 22+ gereklidir (pnpm Corepack aracılığıyla sağlanır — etkinleştirmek için `corepack enable` komutunu çalıştırın).

  ### Seçenek 1. API Anahtarı ile Hızlı Kurulum

  **Bir API anahtarını manuel olarak oluşturmak istemiyorsunuz?**

  Neon'un MCP Server'ını tek komutla otomatik olarak yapılandırmak için [`neonctl@latest init`](https://neon.com/docs/reference/cli-init) komutunu çalıştırın:

  ```bash
  npx neonctl@latest init
  ```

  Bu, Cursor, VS Code (GitHub Copilot) ve Claude Code ile çalışır. OAuth aracılığıyla kimlik doğrulama yapacak, sizin için bir Neon API anahtarı oluşturacak ve editörünüzü otomatik olarak yapılandıracaktır.

  ### Seçenek 2. Uzak Barındırılan MCP Server (OAuth Tabanlı Kimlik Doğrulama)

  OAuth kullanarak kimlik doğrulamasıyla Neon'un yönetilen MCP server'ına bağlanın. Bu, en kolay kurulum yöntemidir, bu server'ın yerel kurulumunu gerektirmez ve client'ta yapılandırılan bir Neon API anahtarına gerek duyulmaz.

  Çalışma alanınızdaki tüm algılanan agent'lar ve editörler için Neon MCP Server'ını eklemek üzere aşağıdaki komutu çalıştırın:

  ```bash
  npx add-mcp https://mcp.neon.tech/mcp
  ```

  Neon MCP Server'ını proje kapsamında yerine global MCP server listesine eklemek için `-g` bayrağını ekleyin.

  Alternatif olarak, client'ınızın MCP server yapılandırma dosyasına (örneğin, `mcp.json`, `mcp_config.json`) aşağıdaki "Neon" girişini ekleyebilirsiniz:

  ```json
  {
    "mcpServers": {
      "Neon": {
        "type": "http",
        "url": "https://mcp.neon.tech/mcp"
      }
    }
  }
  ```

  **Kiro:** Kiro MCP config dosyanıza (`~/.kiro/settings/mcp.json` global için veya `.kiro/settings/mcp.json` proje kapsamında) aşağıdakini ekleyin:

  ```json
  {
    "mcpServers": {
      "Neon": {
        "url": "https://mcp.neon.tech/mcp"
      }
    }
  }
  ```

  Veya bu README'nin başındaki tek tıklamalı yükleme düğmesini kullanın. Daha fazla bilgi için [Kiro MCP belgesine](https://kiro.dev/docs/mcp/) bakın.

  - MCP client'ınızı yeniden başlatın veya yenileyin.
  - Tarayıcınızda bir OAuth penceresi açılacaktır. MCP client'ınızın Neon hesabınıza erişim yetkisini vermek için istemler takip edin.

  > OAuth tabanlı kimlik doğrulama ile MCP server, varsayılan olarak kişisel Neon hesabınızın altındaki projeler üzerinde çalışır. Kuruluşa ait projelere erişmek veya bunları yönetmek için, MCP client'a isteminde `org_id` veya `project_id` açıkça sağlamanız gerekir.

  ### Seçenek 3. Uzak Barındırılan MCP Server (API Anahtarı Tabanlı Kimlik Doğrulama)

  Uzak MCP Server, client'ınız destekliyorsa `Authorization` başlığında bir API anahtarı kullanarak kimlik doğrulamayı da destekler.

  [Neon Console'de bir Neon API anahtarı oluşturun](https://console.neon.tech/app/settings?modal=create_api_key). Ardından, çalışma alanınızdaki tüm algılanan agent'lar ve editörler için Neon MCP Server'ını eklemek üzere aşağıdaki komutu çalıştırın:

  ```bash
  npx add-mcp https://mcp.neon.tech/mcp --header "Authorization: Bearer <$NEON_API_KEY>"
  ```

  Alternatif olarak, client'ınızın MCP server yapılandırma dosyasına (örneğin, `mcp.json`, `mcp_config.json`) aşağıdaki "Neon" girişini ekleyebilirsiniz:

  ```json
  {
    "mcpServers": {
      "Neon": {
        "type": "http",
        "url": "https://mcp.neon.tech/mcp",
        "headers": {
          "Authorization": "Bearer <$NEON_API_KEY>"
        }
      }
    }
  }
  ```

  > Kuruluşun API anahtarını sağlayarak erişimi yalnızca o kuruluş altındaki projelerle sınırlayın.

  ### Kapsamlar ve Salt Okunur Mod

  Neon MCP, OAuth kapsamlarını `read`, `write` ve `*` (`*` her ikisini de anlamına gelir) destekler. MCP client'ınız bu kapsamları doğrudan isteyebilir veya OAuth izinleri UI'sinde seçim yapabilirsiniz.

  **Salt okunur mod**, projeleri oluşturma, branch'ler oluşturma veya migration'ları çalıştırma gibi yazma işlemlerini devre dışı bırakarak hangi araçların kullanılabileceğini kısıtlar. Salt okunur araçlar, projeleri listeleme, şemaları açıklama, veri sorgulama ve performans metriklerini görüntülemeyi içerir.

  Salt okunur modu iki şekilde ayarlayabilirsiniz:

  1. **OAuth scope seçimi (önerilen):** OAuth'ta, yetkilendirme UI'sinde **Tam erişim** seçeneğini işaretini kaldırarak salt okunur seçin.
  2. **`readonly` sorgu parametresi:** MCP server URL'sine `?readonly=true` ekleyin:

  ```json
  {
    "mcpServers": {
      "Neon": {
        "url": "https://mcp.neon.tech/mcp?readonly=true"
      }
    }
  }
  ```

  Sorgu parametresi nasıl davranır:

  - **API anahtarı akışı:** `readonly=true` salt okunur modu etkinleştirmenin yoludur (bu akışta OAuth scope değişimi yoktur).
  - **OAuth akışı:** `readonly=true` OAuth scope'unu geçersiz kılar. Olmadan, salt okunur OAuth onay UI'sinde seçilen scope tarafından belirlenir.

  Eski HTTP başlığı `x-read-only` de bir alternatif olarak desteklenir (sorgu parametresinden daha düşük öncelik).

  > **Not:** Salt okunur mod, hangi _araçların_ kullanılabileceğini kısıtlar. Ayrıca, `run_sql` aracı yalnızca salt okunur sorgular için kullanılabilir kalır.

  ### URL Sorgu Parametreleri Erişim Denetimi İçin

  İzin bağlamı (kapsam kategorileri, proje kapsamı, salt okunur mod), MCP server URL'sinin URL sorgu parametreleri aracılığıyla yapılandırılır. Yapılandırma her istek ile birlikte seyahat eder ve hemen etkili olur — yeniden kimlik doğrulamaya gerek yoktur.

  | Parametre   | Açıklama                                               | Örnek                                |
  | ----------- | ------------------------------------------------------ | ------------------------------------ |
  | `readonly`  | Salt okunur modu etkinleştir (`true`/`false`)          | `?readonly=true`                     |
  | `category`  | Belirli araç kategorilerine kısıtla (tekrar veya CSV)  | `?category=querying&category=schema` |
  | `projectId` | Tüm işlemleri tek bir projeye kapsam al                | `?projectId=proj-123`                |

  **Salt okunur + proje kapsamlı örnek:**

  ```json
  {
    "mcpServers": {
      "Neon": {
        "url": "https://mcp.neon.tech/mcp?readonly=true&projectId=my-project-id"
      }
    }
  }
  ```

  **Kategori filtrelenmiş örnek (yalnızca querying ve schema araçları):**

  ```json
  {
    "mcpServers": {
      "Neon": {
        "url": "https://mcp.neon.tech/mcp?category=querying&category=schema"
      }
    }
  }
  ```

  `/api/list-tools` endpoint'ini kullanarak herhangi bir yapılandırma için hangi araçların görünür olduğunu önizleyebilirsiniz (kimlik doğrulaması gerekmez):

  ```bash
  curl "https://mcp.neon.tech/api/list-tools?readonly=true&category=querying"
  ```

  <details>
  <summary><strong>Salt okunur modda kullanılabilen araçlar</strong></summary>

  - `list_projects`, `list_shared_projects`, `describe_project`, `list_organizations`
  - `describe_branch`, `list_branch_computes`, `compare_database_schema`
  - `run_sql`, `run_sql_transaction`, `get_database_tables`, `describe_table_schema`
  - `list_slow_queries`, `explain_sql_statement`
  - `get_connection_string`
  - `search`, `fetch`, `list_docs_resources`, `get_doc_resource`

  **Yazma erişimi gerektiren araçlar:**

  - `create_project`, `delete_project`
  - `create_branch`, `delete_branch`, `reset_from_parent`
  - `provision_neon_auth`, `provision_neon_data_api`
  - `prepare_database_migration`, `complete_database_migration`
  - `prepare_query_tuning`, `complete_query_tuning`

  </details>

  ### Server-Sent Events (SSE) Transport'ı (Kullanımdan Kaldırılmış)

  MCP, iki uzak server transport'unu destekler: kullanımdan kaldırılan Server-Sent Events (SSE) ve daha yeni, önerilen Streamable HTTP. LLM client'ınız henüz Streamable HTTP'yi desteklemiyorsa, endpoint'i `https://mcp.neon.tech/mcp` adresinden `https://mcp.neon.tech/sse` adresine değiştirerek bunun yerine SSE'yi kullanabilirsiniz.

  SSE transport'unu kullanarak çalışma alanınızdaki tüm algılanan agent'lar ve editörler için Neon MCP Server'ını eklemek üzere aşağıdaki komutu çalıştırın:

  ```bash
  npx add-mcp https://mcp.neon.tech/sse --type sse
  ```

  ## Uzak Server Mimarisi

  Uzak server, Vercel'de `mcp.neon.tech` adresinde bir Next.js App Router uygulaması olarak çalışır.

  > [!NOTE]
  > Kök `/` yolu [Neon MCP Server dokümanlarına](https://neon.tech/docs/ai/neon-mcp-server) yönlendirilir. Bir açılış sayfası yoktur.

  Temel uygulama alanları:

  - `landing/app/api/[transport]/route.ts`: Streamable HTTP (`/mcp`) ve SSE (`/sse`) için MCP transport endpoint'i
  - `landing/app/api/authorize/`, `landing/app/callback/`, `landing/app/api/token/`, `landing/app/api/revoke/`: OAuth akış endpoint'leri
  - `landing/app/.well-known/`: OAuth keşif metaveri endpoint'leri
  - `landing/mcp-src/`: MCP server, araçlar, işleyiciler, analitik ve Sentry entegrasyonu
  - `landing/lib/`: Next.js uyumlu yardımcılar (OAuth, yapılandırma, hata işleme)
  - `landing/mcp-src/utils/read-only.ts`: salt okunur mod ve kapsam işleme

  ## Rehberler

  - [Neon MCP Server Rehberi](https://neon.tech/docs/ai/neon-mcp-server)
  - [MCP Client'larını Neon'a Bağlama](https://neon.tech/docs/ai/connect-mcp-clients-to-neon)
  - [Neon MCP Server ile Cursor](https://neon.tech/guides/cursor-mcp-neon)
  - [Neon MCP Server ile Claude Desktop](https://neon.tech/guides/neon-mcp-server)
  - [Neon MCP Server ile Cline](https://neon.tech/guides/cline-mcp-neon)
  - [Neon MCP Server ile Windsurf](https://neon.tech/guides/windsurf-mcp-neon)
  - [Neon MCP Server ile Zed](https://neon.tech/guides/zed-mcp-neon)

  # Özellikler

  ## Desteklenen Araçlar

  Neon MCP Server, aşağıdaki eylemleri sağlar ve bunlar MCP Client'larına "araçlar" olarak sunulur. Bu araçları kullanarak Neon projeleriniz ve veritabanlarınız ile doğal dil komutları aracılığıyla etkileşime girebilirsiniz.

  ### Araç Kapsam Metaveri

  Her araç tanımı, izin tabanlı araç filtreleme ve onay UX için kullanılan bir `scope` kategorisi içerir. Mevcut kategoriler:

  - `projects`
  - `branches`
  - `schema`
  - `querying`
  - `neon_auth`
  - `data_api`
  - `docs`
  - `null` (kapsam kategorisi olmayan araçlar)

  Notlar:

  - `compare_database_schema` `schema` altında kategorize edilir.
  - `provision_neon_data_api` `data_api` altında kategorize edilir (`neon_auth` ayrı).
  - Salt okunur yaptırım yine de `readOnlySafe` ve sunucu tarafı salt okunur mantığına dayanır; `scope` kategori metaveridir, bağımsız bir okuma/yazma anahtarı değildir.
  - Proje kapsamlı modda (`?projectId=...`), `search` ve `fetch` kullanılamaz.

  **Proje Yönetimi:**

  - **`list_projects`**: Hesabınızdaki ilk 10 Neon projesini listeler ve her projenin bir özeti sağlar. Belirli bir proje bulamıyorsanız, `limit` parametresine daha yüksek bir değer geçerek limiti artırın.
  - **`list_shared_projects`**: Mevcut kullanıcı ile paylaşılan Neon projelerini listeler. Bir arama parametresini ve döndürülecek projelerin sayısını sınırlamayı destekler (varsayılan: 10).
  - **`describe_project`**: Belirli bir Neon projesi hakkında ID, adı ve ilişkili branch'ler ve veritabanları da dahil olmak üzere ayrıntılı bilgiler getirir.
  - **`create_project`**: Neon hesabınızda yeni bir Neon projesi oluşturur. Proje, branch'ler, veritabanları, roller ve compute'ler için bir kapsayıcı görevi görmektedir.
  - **`delete_project`**: Mevcut bir Neon projesini ve onunla ilişkili tüm kaynakları siler.
  - **`list_organizations`**: Mevcut kullanıcının erişim sahibi olduğu tüm kuruluşları listeler. İsteğe bağlı olarak arama parametresini kullanarak kuruluş adına veya ID'sine göre filtreleyebilirsiniz.

  **Branch Yönetimi:**

  - **`create_branch`**: Belirli bir Neon projesi içinde yeni bir branch oluşturur. Geliştirme, test veya göçler için [Neon'un branching](/docs/introduction/branching) özelliğinden yararlanır.
  - **`delete_branch`**: Mevcut bir branch'i Neon projesinden siler.
  - **`describe_branch`**: Belirli bir branch'in adı, ID'si ve ana branch'i gibi ayrıntılarını alır.
  - **`list_branch_computes`**: Bir proje veya belirli bir branch için compute endpoint'lerini listeler; compute ID'si, türü, boyutu, son aktif saati ve otomatik ölçeklendirme bilgilerini de içerir.
  - **`compare_database_schema`**: Alt branch ile ana branch'i arasında şema farkını gösterir
  - **`reset_from_parent`**: Mevcut branch'i ana branch'inin durumuna sıfırlar, yerel değişiklikleri atar. Branch'in alt branch'leri varsa otomatik olarak yedek olarak saklar veya özel bir ad ile istenirse isteğe bağlı olarak korur.

  **SQL Sorgusu Yürütme:**

  - **`get_connection_string`**: Veritabanı bağlantı dizesini döndürür.
  - **`run_sql`**: Belirli bir Neon veritabanında tek bir SQL sorgusu yürütür. Hem okuma hem yazma işlemlerini destekler.
  - **`run_sql_transaction`**: Neon veritabanında tek bir transaction içinde bir dizi SQL sorgusu yürütür.
  - **`get_database_tables`**: Belirli bir Neon veritabanı içindeki tüm tabloları listeler.
  - **`describe_table_schema`**: Belirli bir tablonun şema tanımını alır; sütunları, veri türlerini ve kısıtlamaları detaylandırır.

  **Veritabanı Göçleri (Şema Değişiklikleri):**

  - **`prepare_database_migration`**: Veritabanı göçü işlemini başlatır. Önemlisi, migration'ı ana branch'i etkilemeden önce güvenli bir şekilde uygulamak ve test etmek için geçici bir branch oluşturur.
  - **`complete_database_migration`**: Hazırlanmış bir veritabanı göçünü sonlandırır ve ana branch'e uygular. Bu işlem, geçici göç branch'inden değişiklikleri birleştirir ve geçici kaynakları temizler.

  **SQL Sorgulama ve Optimizasyon:**

  - **`list_slow_queries`**: Bir veritabanındaki en yavaş sorguları bularak performans darboğazlarını tanımlar. `pg_stat_statements` uzantısını gerektirir.
  - **`explain_sql_statement`**: SQL sorguları için ayrıntılı yürütme planları sağlayarak performans darboğazlarını belirlemeye yardımcı olur.
  - **`prepare_query_tuning`**: Sorgu performansını analiz eder ve dizin oluşturma gibi optimizasyonlar önerir. Bu optimizasyonları güvenli bir şekilde test etmek için geçici bir branch oluşturur.
  - **`complete_query_tuning`**: Sorgu ayarını, optimizasyonları ana branch'e uygulayarak veya atarak sonlandırır. Geçici ayar branch'ini temizler.

  **Neon Auth:**

  - **`provision_neon_auth`**: Neon Auth'u Neon projesi için hazırlar. Geliştiricilerin bir Auth sağlayıcı ile bir entegrasyon oluşturarak kimlik doğrulama altyapısını kolayca kurmasına olanak tanır.

  **Neon Data API:**

  - **`provision_neon_data_api`**: HTTP tabanlı veritabanı erişimi için Neon Data API'sini Neon Auth veya harici JWKS sağlayıcıları aracılığıyla isteğe bağlı JWT kimlik doğrulamasıyla hazırlar.

  **Arama ve Keşif:**

  - **`search`**: Sorgu ile eşleşen kuruluşlar, projeler ve branch'leri arar. Neon Console'e doğrudan bağlantılar ile ID'ler ve başlıklar döndürür.
  - **`fetch`**: Bir ID kullanarak (genellikle arama aracından) belirli bir kuruluş, proje veya branch'in ayrıntılı bilgilerini getirir.

  **Dokümantasyon ve Kaynaklar:**

  - **`list_docs_resources`**: `https://neon.com/docs/llms.txt` adresinden dizini getirerek tüm kullanılabilen Neon dokümantasyon sayfalarını listeler. `get_doc_resource` aracı kullanılarak tek tek getirme yapılabilecek sayfa URL'lerini ve başlıklarını döndürür.
  - **`get_doc_resource`**: Belirli bir Neon dokümantasyon sayfasını markdown içeriği olarak getirir. Kullanılabilen sayfa slug'larını keşfetmek için önce `list_docs_resources` aracını kullanın, ardından slug'ı bu aracına geçirin.

  ## Göçler

  Göçler, veritabanı şemanızdaki değişiklikleri zaman içinde yönetmenin bir yoludur. Neon MCP server'ı ile, LLM'ler ayrı "Başla" (`prepare_database_migration`) ve "Tamamla" (`complete_database_migration`) komutları ile göçleri güvenli bir şekilde yapabilirler.

  "Başla" komutu bir göç kabul eder ve bunu yeni bir geçici branch'te çalıştırır. Dönüş üzerine, bu komut LLM'ye migration'ı bu branch
---

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://neon.com/brand/neon-logo-dark-color.svg">
  <source media="(prefers-color-scheme: light)" srcset="https://neon.com/brand/neon-logo-light-color.svg">
  
</picture>

# Neon MCP Server

[![Install MCP Server in Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=Neon&config=eyJ1cmwiOiJodHRwczovL21jcC5uZW9uLnRlY2gvbWNwIn0%3D)
[![Add to Kiro](https://kiro.dev/images/add-to-kiro.svg)](https://kiro.dev/launch/mcp/add?name=Neon&config=%7B%22url%22%3A%20%22https%3A//mcp.neon.tech/mcp%22%7D)

**Neon MCP Server** is an open-source tool that lets you interact with your Neon Postgres databases in **natural language**.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

The Model Context Protocol (MCP) is a [standardized protocol](https://modelcontextprotocol.io/introduction) designed to manage context between large language models (LLMs) and external systems. This repository provides a remote MCP Server for [Neon](https://neon.tech).

Neon's MCP server acts as a bridge between natural language requests and the [Neon API](https://api-docs.neon.tech/reference/getting-started-with-neon-api). Built upon MCP, it translates your requests into the necessary API calls, enabling you to manage tasks such as creating projects and branches, running queries, and performing database migrations seamlessly.

Some of the key features of the Neon MCP server include:

- **Natural language interaction:** Manage Neon databases using intuitive, conversational commands.
- **Simplified database management:** Perform complex actions without writing SQL or directly using the Neon API.
- **Accessibility for non-developers:** Empower users with varying technical backgrounds to interact with Neon databases.
- **Database migration support:** Leverage Neon's branching capabilities for database schema changes initiated via natural language.

For example, in Claude Code, or any MCP Client, you can use natural language to accomplish things with Neon, such as:

- `Let's create a new Postgres database, and call it "my-database". Let's then create a table called users with the following columns: id, name, email, and password.`
- `I want to run a migration on my project called "my-project" that alters the users table to add a new column called "created_at".`
- `Can you give me a summary of all of my Neon projects and what data is in each one?`

> [!WARNING]  
> **Neon MCP Server Security Considerations**  
> The Neon MCP Server grants powerful database management capabilities through natural language requests. **Always review and authorize actions requested by the LLM before execution.** Ensure that only authorized users and applications have access to the Neon MCP Server.
>
> The Neon MCP Server is intended for local development and IDE integrations only. **We do not recommend using the Neon MCP Server in production environments.** It can execute powerful operations that may lead to accidental or unauthorized changes.
>
> For more information, see [MCP security guidance →](https://neon.tech/docs/ai/neon-mcp-server#mcp-security-guidance).

## Setting up Neon MCP Server

There are a few options for setting up the Neon MCP Server:

1. **Quick Setup with API Key (Cursor, VS Code, and Claude Code):** Run [`neonctl@latest init`](https://neon.com/docs/reference/cli-init) to automatically configure Neon's MCP Server, [agent skills](https://github.com/neondatabase/agent-skills), and VS Code extension with one command.
2. **Remote MCP Server (OAuth Based Authentication):** Connect to Neon's managed MCP server using OAuth for authentication. This method is more convenient as it eliminates the need to manage API keys. Additionally, you will automatically receive the latest features and improvements as soon as they are released.
3. **Remote MCP Server (API Key Based Authentication):** Connect to Neon's managed MCP server using API key for authentication. This method is useful if you want to connect a remote agent to Neon where OAuth is not available. Additionally, you will automatically receive the latest features and improvements as soon as they are released.

### Prerequisites

- An MCP Client application.
- A [Neon account](https://console.neon.tech/signup).
- **Node.js (>= v18.0.0):** Download from [nodejs.org](https://nodejs.org).

For development, you'll need Node.js 22+ (pnpm is provided via Corepack — run `corepack enable` to activate it).

### Option 1. Quick Setup with API Key

**Don't want to manually create an API key?**

Run [`neonctl@latest init`](https://neon.com/docs/reference/cli-init) to automatically configure Neon's MCP Server with one command:

```bash
npx neonctl@latest init
```

This works with Cursor, VS Code (GitHub Copilot), and Claude Code. It will authenticate via OAuth, create a Neon API key for you, and configure your editor automatically.

### Option 2. Remote Hosted MCP Server (OAuth Based Authentication)

Connect to Neon's managed MCP server using OAuth for authentication. This is the easiest setup, requires no local installation of this server, and doesn't need a Neon API key configured in the client.

Run the following command to add the Neon MCP Server for all detected agents and editors in your workspace:

```bash
npx add-mcp https://mcp.neon.tech/mcp
```

Add the `-g` flag to add the Neon MCP Server to the global MCP server list instead of project-scoped.

Alternatively, you can add the following "Neon" entry to your client's MCP server configuration file (e.g., `mcp.json`, `mcp_config.json`):

```json
{
  "mcpServers": {
    "Neon": {
      "type": "http",
      "url": "https://mcp.neon.tech/mcp"
    }
  }
}
```

**Kiro:** Add the following to your Kiro MCP config file (`~/.kiro/settings/mcp.json` for global, or `.kiro/settings/mcp.json` for project-scoped):

```json
{
  "mcpServers": {
    "Neon": {
      "url": "https://mcp.neon.tech/mcp"
    }
  }
}
```

Or use the one-click install button at the top of this README. For more information, see the [Kiro MCP documentation](https://kiro.dev/docs/mcp/).

- Restart or refresh your MCP client.
- An OAuth window will open in your browser. Follow the prompts to authorize your MCP client to access your Neon account.

> With OAuth-based authentication, the MCP server will, by default, operate on projects under your personal Neon account. To access or manage projects that belong to an organization, you must explicitly provide either the `org_id` or the `project_id` in your prompt to MCP client.

### Option 3. Remote Hosted MCP Server (API Key Based Authentication)

Remote MCP Server also supports authentication using an API key in the `Authorization` header if your client supports it.

[Create a Neon API key](https://console.neon.tech/app/settings?modal=create_api_key) in the Neon Console. Next, run the following command to add the Neon MCP Server for all detected agents and editors in your workspace:

```bash
npx add-mcp https://mcp.neon.tech/mcp --header "Authorization: Bearer <$NEON_API_KEY>"
```

Alternatively, you can add the following "Neon" entry to your client's MCP server configuration file (e.g., `mcp.json`, `mcp_config.json`):

```json
{
  "mcpServers": {
    "Neon": {
      "type": "http",
      "url": "https://mcp.neon.tech/mcp",
      "headers": {
        "Authorization": "Bearer <$NEON_API_KEY>"
      }
    }
  }
}
```

> Provide an organization's API key to limit access to projects under the organization only.

### Scopes and Read-Only Mode

Neon MCP supports OAuth scopes `read`, `write`, and `*` (`*` means both). Your MCP client can request these scopes directly, or you can make the selection in the OAuth permissions UI.

**Read-only mode** restricts which tools are available, disabling write operations like creating projects, branches, or running migrations. Read-only tools include listing projects, describing schemas, querying data, and viewing performance metrics.

You can set read-only mode in two ways:

1. **OAuth scope selection (recommended):** In OAuth, select read-only by unchecking **Full access** in the authorization UI.
2. **`readonly` query param:** Add `?readonly=true` to your MCP server URL:

```json
{
  "mcpServers": {
    "Neon": {
      "url": "https://mcp.neon.tech/mcp?readonly=true"
    }
  }
}
```

How the query param behaves:

- **API key flow:** `readonly=true` is the way to enable read-only mode (there is no OAuth scope exchange in this flow).
- **OAuth flow:** `readonly=true` overrides the OAuth scope. Without it, read-only is determined by the scope selected in the OAuth consent UI.

Legacy HTTP header `x-read-only` is also supported as a fallback (lower priority than the query param).

> **Note:** Read-only mode restricts which _tools_ are available. Further, the `run_sql` tool remains available only for read-only queries.

### URL Query Params for Access Control

Grant context (scope categories, project scoping, read-only mode) is configured via URL query params on the MCP server URL. Config travels with every request and takes effect immediately — no re-auth needed.

| Param       | Description                                            | Example                              |
| ----------- | ------------------------------------------------------ | ------------------------------------ |
| `readonly`  | Enable read-only mode (`true`/`false`)                 | `?readonly=true`                     |
| `category`  | Restrict to specific tool categories (repeated or CSV) | `?category=querying&category=schema` |
| `projectId` | Scope all operations to a single project               | `?projectId=proj-123`                |

**Read-only + project-scoped example:**

```json
{
  "mcpServers": {
    "Neon": {
      "url": "https://mcp.neon.tech/mcp?readonly=true&projectId=my-project-id"
    }
  }
}
```

**Category-filtered example (only querying and schema tools):**

```json
{
  "mcpServers": {
    "Neon": {
      "url": "https://mcp.neon.tech/mcp?category=querying&category=schema"
    }
  }
}
```

You can preview which tools are visible for any configuration using the `/api/list-tools` endpoint (no auth required):

```bash
curl "https://mcp.neon.tech/api/list-tools?readonly=true&category=querying"
```

<details>
<summary><strong>Tools available in read-only mode</strong></summary>

- `list_projects`, `list_shared_projects`, `describe_project`, `list_organizations`
- `describe_branch`, `list_branch_computes`, `compare_database_schema`
- `run_sql`, `run_sql_transaction`, `get_database_tables`, `describe_table_schema`
- `list_slow_queries`, `explain_sql_statement`
- `get_connection_string`
- `search`, `fetch`, `list_docs_resources`, `get_doc_resource`

**Tools requiring write access:**

- `create_project`, `delete_project`
- `create_branch`, `delete_branch`, `reset_from_parent`
- `provision_neon_auth`, `provision_neon_data_api`
- `prepare_database_migration`, `complete_database_migration`
- `prepare_query_tuning`, `complete_query_tuning`

</details>

### Server-Sent Events (SSE) Transport (Deprecated)

MCP supports two remote server transports: the deprecated Server-Sent Events (SSE) and the newer, recommended Streamable HTTP. If your LLM client doesn't support Streamable HTTP yet, you can switch the endpoint from `https://mcp.neon.tech/mcp` to `https://mcp.neon.tech/sse` to use SSE instead.

Run the following command to add the Neon MCP Server for all detected agents and editors in your workspace using the SSE transport:

```bash
npx add-mcp https://mcp.neon.tech/sse --type sse
```

## Remote Server Architecture

The remote server runs as a Next.js App Router application on Vercel at `mcp.neon.tech`.

> [!NOTE]
> The root `/` path redirects to [Neon MCP Server docs](https://neon.tech/docs/ai/neon-mcp-server). There is no landing page.

Core implementation areas:

- `landing/app/api/[transport]/route.ts`: MCP transport endpoint for Streamable HTTP (`/mcp`) and SSE (`/sse`)
- `landing/app/api/authorize/`, `landing/app/callback/`, `landing/app/api/token/`, `landing/app/api/revoke/`: OAuth flow endpoints
- `landing/app/.well-known/`: OAuth discovery metadata endpoints
- `landing/mcp-src/`: MCP server, tools, handlers, analytics, and Sentry integration
- `landing/lib/`: Next.js-compatible helpers (OAuth, configuration, error handling)
- `landing/mcp-src/utils/read-only.ts`: read-only mode and scope handling

## Guides

- [Neon MCP Server Guide](https://neon.tech/docs/ai/neon-mcp-server)
- [Connect MCP Clients to Neon](https://neon.tech/docs/ai/connect-mcp-clients-to-neon)
- [Cursor with Neon MCP Server](https://neon.tech/guides/cursor-mcp-neon)
- [Claude Desktop with Neon MCP Server](https://neon.tech/guides/neon-mcp-server)
- [Cline with Neon MCP Server](https://neon.tech/guides/cline-mcp-neon)
- [Windsurf with Neon MCP Server](https://neon.tech/guides/windsurf-mcp-neon)
- [Zed with Neon MCP Server](https://neon.tech/guides/zed-mcp-neon)

# Features

## Supported Tools

The Neon MCP Server provides the following actions, which are exposed as "tools" to MCP Clients. You can use these tools to interact with your Neon projects and databases using natural language commands.

### Tool Scope Metadata

Each tool definition includes a `scope` category used for grant-based tool filtering and consent UX. Current categories are:

- `projects`
- `branches`
- `schema`
- `querying`
- `neon_auth`
- `data_api`
- `docs`
- `null` (tools without a scope category)

Notes:

- `compare_database_schema` is categorized under `schema`.
- `provision_neon_data_api` is categorized under `data_api` (separate from `neon_auth`).
- Read-only enforcement still relies on `readOnlySafe` and server-side read-only logic; `scope` is category metadata, not a standalone read/write switch.
- In project-scoped mode (`?projectId=...`), `search` and `fetch` are not available.

**Project Management:**

- **`list_projects`**: Lists the first 10 Neon projects in your account, providing a summary of each project. If you can't find a specific project, increase the limit by passing a higher value to the `limit` parameter.
- **`list_shared_projects`**: Lists Neon projects shared with the current user. Supports a search parameter and limiting the number of projects returned (default: 10).
- **`describe_project`**: Fetches detailed information about a specific Neon project, including its ID, name, and associated branches and databases.
- **`create_project`**: Creates a new Neon project in your Neon account. A project acts as a container for branches, databases, roles, and computes.
- **`delete_project`**: Deletes an existing Neon project and all its associated resources.
- **`list_organizations`**: Lists all organizations that the current user has access to. Optionally filter by organization name or ID using the search parameter.

**Branch Management:**

- **`create_branch`**: Creates a new branch within a specified Neon project. Leverages [Neon's branching](/docs/introduction/branching) feature for development, testing, or migrations.
- **`delete_branch`**: Deletes an existing branch from a Neon project.
- **`describe_branch`**: Retrieves details about a specific branch, such as its name, ID, and parent branch.
- **`list_branch_computes`**: Lists compute endpoints for a project or specific branch, including compute ID, type, size, last active time, and autoscaling information.
- **`compare_database_schema`**: Shows the schema diff between the child branch and its parent
- **`reset_from_parent`**: Resets the current branch to its parent's state, discarding local changes. Automatically preserves to backup if branch has children, or optionally preserve on request with a custom name.

**SQL Query Execution:**

- **`get_connection_string`**: Returns your database connection string.
- **`run_sql`**: Executes a single SQL query against a specified Neon database. Supports both read and write operations.
- **`run_sql_transaction`**: Executes a series of SQL queries within a single transaction against a Neon database.
- **`get_database_tables`**: Lists all tables within a specified Neon database.
- **`describe_table_schema`**: Retrieves the schema definition of a specific table, detailing columns, data types, and constraints.

**Database Migrations (Schema Changes):**

- **`prepare_database_migration`**: Initiates a database migration process. Critically, it creates a temporary branch to apply and test the migration safely before affecting the main branch.
- **`complete_database_migration`**: Finalizes and applies a prepared database migration to the main branch. This action merges changes from the temporary migration branch and cleans up temporary resources.

**SQL Querying and Optimization:**

- **`list_slow_queries`**: Identifies performance bottlenecks by finding the slowest queries in a database. Requires the pg_stat_statements extension.
- **`explain_sql_statement`**: Provides detailed execution plans for SQL queries to help identify performance bottlenecks.
- **`prepare_query_tuning`**: Analyzes query performance and suggests optimizations, like index creation. Creates a temporary branch for safely testing these optimizations.
- **`complete_query_tuning`**: Finalizes query tuning by either applying optimizations to the main branch or discarding them. Cleans up the temporary tuning branch.

**Neon Auth:**

- **`provision_neon_auth`**: Provisions Neon Auth for a Neon project. It allows developers to easily set up authentication infrastructure by creating an integration with an Auth provider.

**Neon Data API:**

- **`provision_neon_data_api`**: Provisions the Neon Data API for HTTP-based database access with optional JWT authentication via Neon Auth or external JWKS providers.

**Search and Discovery:**

- **`search`**: Searches across organizations, projects, and branches matching a query. Returns IDs, titles, and direct links to the Neon Console.
- **`fetch`**: Fetches detailed information about a specific organization, project, or branch using an ID (typically from the search tool).

**Documentation and Resources:**

- **`list_docs_resources`**: Lists all available Neon documentation pages by fetching the index from `https://neon.com/docs/llms.txt`. Returns page URLs and titles that can be fetched individually using the `get_doc_resource` tool.
- **`get_doc_resource`**: Fetches a specific Neon documentation page as markdown content. Use the `list_docs_resources` tool first to discover available page slugs, then pass the slug to this tool.

## Migrations

Migrations are a way to manage changes to your database schema over time. With the Neon MCP server, LLMs are empowered to do migrations safely with separate "Start" (`prepare_database_migration`) and "Commit" (`complete_database_migration`) commands.

The "Start" command accepts a migration and runs it in a new temporary branch. Upon returning, this command hints to the LLM that it should test the migration on this branch. The LLM can then run the "Commit" command to apply the migration to the original branch.

# Development

This project uses [pnpm](https://pnpm.io) as the package manager, pinned via Corepack.

## Project Structure

The MCP server code lives in the `landing/` directory, which is a Next.js application deployed to Vercel at `mcp.neon.tech`.

```bash
cd landing
corepack enable
pnpm install
```

## Local Development

```bash
# Start the Next.js dev server (for the remote MCP server)
pnpm run dev
```

## Linting and Type Checking

```bash
pnpm run lint
pnpm run typecheck
```

## Environment Variables

Required for remote server runtime:

| Variable              | Description                           |
| --------------------- | ------------------------------------- |
| `SERVER_HOST`         | Server URL (defaults to `VERCEL_URL`) |
| `UPSTREAM_OAUTH_HOST` | Neon OAuth provider URL               |
| `CLIENT_ID`           | OAuth client ID                       |
| `CLIENT_SECRET`       | OAuth client secret                   |
| `COOKIE_SECRET`       | Secret for signed cookies             |
| `KV_URL`              | Vercel KV (Upstash Redis) URL         |
| `OAUTH_DATABASE_URL`  | Postgres URL for token storage        |

Optional:

| Variable    | Description                                                                       |
| ----------- | --------------------------------------------------------------------------------- |
| `LOG_LEVEL` | Winston log level: `error`, `warn`, `info` (default), `debug`, `verbose`, `silly` |

## Testing Pyramid

All tests run from `landing/`.

```bash
cd landing

# Unit tests
pnpm run test:unit

# Integration tests
pnpm run test:integration

# MCP protocol end-to-end tests (real MCP client/server tool calls)
pnpm run test:e2e:mcp

# Website end-to-end tests (Playwright; provisions/validates ephemeral DB first)
pnpm run test:e2e:web

# Full end-to-end suite
pnpm run test:e2e

# Full test pyramid (unit + integration + e2e; used in CI)
pnpm run test
```

Testing strategy:

- Prefer **E2E** for transport/protocol and user-visible behavior.
- Use **integration** tests for deterministic tool contracts and workflow behavior.
- Use **unit** tests for pure logic and edge cases.
- Avoid relying on third-party uptime in merge-gating tests; mock external dependencies in integration/unit tiers.

## Deployment

Vercel deploys the remote server automatically from the repository branch configuration. Preview environments are available for pull requests.
