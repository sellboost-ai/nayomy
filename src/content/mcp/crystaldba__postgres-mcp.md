---
name: "crystaldba/postgres-mcp"
description: "All-in-one MCP server for Postgres development and operations, with tools for performance analysis, tuning, and health checks"
category: "Databases"
repo: "crystaldba/postgres-mcp"
stars: 2801
url: "https://github.com/crystaldba/postgres-mcp"
body_length: 37467
license: "MIT"
language: "Python"
body_tr: |-
  <div align="center">



  [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
  [![PyPI - Version](https://img.shields.io/pypi/v/postgres-mcp)](https://pypi.org/project/postgres-mcp/)
  [![Discord](https://img.shields.io/discord/1336769798603931789?label=Discord)](https://discord.gg/4BEHC7ZM)
  [![Twitter Follow](https://img.shields.io/twitter/follow/auto_dba?style=flat)](https://x.com/auto_dba)
  [![Contributors](https://img.shields.io/github/contributors/crystaldba/postgres-mcp)](https://github.com/crystaldba/postgres-mcp/graphs/contributors)

  <h3>Index ayarlaması, açıklama planları, sistem sağlığı kontrolleri ve güvenli SQL yürütme özelliklerine sahip bir Postgres MCP sunucusu.</h3>

  <div class="toc">
    <a href="#overview">Genel Bakış</a> •
    <a href="#demo">Demo</a> •
    <a href="#quick-start">Hızlı Başlangıç</a> •
    <a href="#technical-notes">Teknik Notlar</a> •
    <a href="#mcp-server-api">MCP API</a> •
    <a href="#related-projects">İlgili Projeler</a> •
    <a href="#frequently-asked-questions">SSS</a>
  </div>

  </div>

  ## Genel Bakış

  **Postgres MCP Pro**, tüm geliştirme süreci boyunca sizleri ve AI ajanlarınızı desteklemek için inşa edilmiş açık kaynak bir Model Context Protocol (MCP) sunucusudur—ilk kodlamadan, test ve deployment aşamasından geçerek, production ayarlaması ve bakımı aşamasına kadar.

  Postgres MCP Pro, bir veritabanı bağlantısını basitçe sarmaktan çok daha fazlasını yapar.

  Özellikler şunları içerir:

  - **🔍 Veritabanı Sağlığı** - Index sağlığını, bağlantı kullanımını, buffer cache'ini, vakum sağlığını, sequence sınırlarını, replication lag'ini ve daha fazlasını analiz edin.
  - **⚡ Index Ayarlaması** - İş yükünüz için en iyi çözümü bulmak için endüstriyel güçte algoritmalar kullanarak binlerce olası index'i keşfedin.
  - **📈 Sorgu Planları** - EXPLAIN planlarını inceleyerek ve varsayımsal index'lerin etkisini simüle ederek performansı doğrulayın ve optimize edin.
  - **🧠 Schema İstihbarat** - Veritabanı şemasının ayrıntılı anlayışına dayalı bağlam duyarlı SQL oluşturma.
  - **🛡️ Güvenli SQL Yürütme** - Yapılandırılabilir erişim kontrolü, salt okunur modu ve güvenli SQL ayrıştırması desteği dahil, geliştirme ve production ortamları için kullanılabilir hale gelir.

  Postgres MCP Pro, farklı ortamlarda esneklik için [Standard Input/Output (stdio)](https://modelcontextprotocol.io/docs/concepts/transports#standard-input%2Foutput-stdio) ve [Server-Sent Events (SSE)](https://modelcontextprotocol.io/docs/concepts/transports#server-sent-events-sse) taşımaları destekler.

  Postgres MCP Pro'yu neden inşa ettiğimiz hakkında ek bilgi için [başlangıç blog yazımıza](https://www.crystaldba.ai/blog/post/announcing-postgres-mcp-server-pro) bakın.

  ## Demo

  *Kullanılamaz Durumdan Işık Hızına*
  - **Zorluk:** Bir AI asistanı kullanarak bir film uygulaması oluşturduk, ancak SQLAlchemy ORM kodu acı verici derecede yavaş çalışıyordu.
  - **Çözüm:** Postgres MCP Pro'yu Cursor ile kullanarak, performans sorunlarını dakikalar içinde düzelttik.

  Ne yaptık:
  - 🚀 Performansı düzelttik - ORM sorguları, indexleme ve cache'leme dahil
  - 🛠️ Bozuk bir sayfayı düzelttik - ajanı verileri keşfetmeye, sorguları düzeltmeye ve ilgili içerik eklemeye yönlendirerek.
  - 🧠 En popüler filmleri iyileştirdik - verileri keşfederek ve daha alakalı sonuçları ortaya çıkarmak için ORM sorgusunu düzelterek.

  Aşağıdaki videoyu izleyin veya [oyun detayını](examples/movie-app.md) okuyun.

  https://github.com/user-attachments/assets/24e05745-65e9-4998-b877-a368f1eadc13




  ## Hızlı Başlangıç

  ### Ön Koşullar

  Başlamadan önce aşağıdakileri sağlayın:
  1. Veritabanınız için erişim kimlik bilgileriniz.
  2. Docker *veya* Python 3.12 veya üstü.

  #### Erişim Kimlik Bilgileri
   `psql` veya [pgAdmin](https://www.pgadmin.org/) gibi bir GUI aracı kullanarak erişim kimlik bilgilerinizin geçerli olduğunu doğrulayabilirsiniz.


  #### Docker veya Python

  Docker veya Python kullanma seçimi sizin. Genel olarak Docker'ı öneriyoruz çünkü Python kullanıcıları daha fazla ortama özgü sorunlarla karşılaşabilir. Ancak, genellikle sizin en alışık olduğunuz yöntemi kullanmak mantıklıdır.


  ### Kurulum

  Postgres MCP Pro'yu yüklemek için aşağıdaki yöntemlerden birini seçin:

  #### Seçenek 1: Docker Kullanma

  Postgres MCP Pro MCP sunucusu Docker görüntüsünü çekin.
  Bu görüntü tüm gerekli bağımlılıkları içerir ve Postgres MCP Pro'yu çeşitli ortamlarda çalıştırmanın güvenilir bir yolunu sağlar.

  ```bash
  docker pull crystaldba/postgres-mcp
  ```


  #### Seçenek 2: Python Kullanma

  `pipx` yüklüyse, Postgres MCP Pro'yu şu şekilde yükleyebilirsiniz:

  ```bash
  pipx install postgres-mcp
  ```

  Aksi halde, Postgres MCP Pro'yu `uv` ile yükleyin:

  ```bash
  uv pip install postgres-mcp
  ```

  `uv` yüklemeniz gerekiyorsa, [uv kurulum talimatlarını](https://docs.astral.sh/uv/getting-started/installation/) görün.


  ### AI Asistanınızı Yapılandırın

  Postgres MCP Pro'yu Claude Desktop ile yapılandırmak için tam talimatlar sağlıyoruz.
  Birçok MCP istemcisinin benzer yapılandırma dosyaları vardır, bu adımları seçtiğiniz istemciyle çalışacak şekilde uyarlayabilirsiniz.

  #### Claude Desktop Yapılandırması

  Postgres MCP Pro'yu eklemek için Claude Desktop yapılandırma dosyasını düzenlemeniz gerekecektir.
  Bu dosyanın konumu işletim sisteminize bağlıdır:
  - MacOS: `~/Library/Application Support/Claude/claude_desktop_config.json`
  - Windows: `%APPDATA%/Claude/claude_desktop_config.json`

  Claude Desktop'taki `Settings` menü öğesini kullanarak yapılandırma dosyasını da bulabilirsiniz.

  Şimdi yapılandırma dosyasının `mcpServers` bölümünü düzenleyeceksiniz.

  ##### Docker Kullanıyorsanız

  ```json
  {
    "mcpServers": {
      "postgres": {
        "command": "docker",
        "args": [
          "run",
          "-i",
          "--rm",
          "-e",
          "DATABASE_URI",
          "crystaldba/postgres-mcp",
          "--access-mode=unrestricted"
        ],
        "env": {
          "DATABASE_URI": "postgresql://username:password@localhost:5432/dbname"
        }
      }
    }
  }
  ```

  Postgres MCP Pro Docker görüntüsü, `localhost` host adresini konteyner içinden çalışacak şekilde otomatik olarak yeniden eşler.

  - MacOS/Windows: `host.docker.internal` kullanır otomatik olarak
  - Linux: `172.17.0.1` veya uygun host adresini otomatik olarak kullanır

  ##### `uvx` Kullanıyorsanız

  ```json
  {
    "mcpServers": {
      "postgres": {
        "command": "uvx",
        "args": [
          "postgres-mcp",
          "--access-mode=unrestricted"
        ],
        "env": {
          "DATABASE_URI": "postgresql://username:password@localhost:5432/dbname"
        }
      }
    }
  }
  ```


  ##### `pipx` Kullanıyorsanız

  ```json
  {
    "mcpServers": {
      "postgres": {
        "command": "postgres-mcp",
        "args": [
          "--access-mode=unrestricted"
        ],
        "env": {
          "DATABASE_URI": "postgresql://username:password@localhost:5432/dbname"
        }
      }
    }
  }
  ```


  ##### `uv` Kullanıyorsanız

  ```json
  {
    "mcpServers": {
      "postgres": {
        "command": "uv",
        "args": [
          "run",
          "postgres-mcp",
          "--access-mode=unrestricted"
        ],
        "env": {
          "DATABASE_URI": "postgresql://username:password@localhost:5432/dbname"
        }
      }
    }
  }
  ```


  ##### Bağlantı URI'si

  `postgresql://...` yerine [Postgres veritabanı bağlantısı URI'nizi](https://www.postgresql.org/docs/current/libpq-connect.html#LIBPQ-CONNSTRING-URIS) girin.


  ##### Erişim Modu

  Postgres MCP Pro, AI ajanının veritabanında gerçekleştirebileceği işlemleri kontrol etmek için birden çok *erişim modu* destekler:
  - **Kısıtlanmamış Mod**: Verileri ve şemayı değiştirmek için tam okuma/yazma erişimine izin verir. Geliştirme ortamları için uygundur.
  - **Kısıtlı Mod**: İşlemleri salt okunur işlemlere sınırlar ve kaynak kullanımına kısıtlama getirir (şu anda yalnızca yürütme süresi). Production ortamları için uygundur.

  Kısıtlı modu kullanmak için yukarıdaki yapılandırma örneklerinde `--access-mode=unrestricted` yerine `--access-mode=restricted` yazın.


  #### Diğer MCP İstemcileri

  Birçok MCP istemcisinin Claude Desktop'a benzer yapılandırma dosyaları vardır ve yukarıdaki örnekleri seçtiğiniz istemciyle çalışacak şekilde uyarlayabilirsiniz.

  - Cursor kullanıyorsanız, `Command Palette`'ten `Cursor Settings`'e gidebilir, ardından `MCP` sekmesini açabilirsiniz.
  - Windsurf kullanıyorsanız, `Command Palette`'ten `Open Windsurf Settings Page`'e gidebilirsiniz.
  - Goose kullanıyorsanız `goose configure` komutunu çalıştırın, ardından `Add Extension` seçin.
  - Qodo Gen kullanıyorsanız, Chat panelini açın, `Connect more tools` öğesine tıklayın, `+ Add new MCP` öğesine tıklayın, ardından yeni yapılandırmayı ekleyin.

  ## SSE Taşıması

  Postgres MCP Pro, [SSE taşımasını](https://modelcontextprotocol.io/docs/concepts/transports#server-sent-events-sse) destekler; bu, birden çok MCP istemcisinin bir sunucuyu (muhtemelen uzak bir sunucu) paylaşmasına olanak tanır.
  SSE taşımasını kullanmak için sunucuyu `--transport=sse` seçeneğiyle başlatmanız gerekir.

  Örneğin, Docker ile çalıştırma:

  ```bash
  docker run -p 8000:8000 \
    -e DATABASE_URI=postgresql://username:password@localhost:5432/dbname \
    crystaldba/postgres-mcp --access-mode=unrestricted --transport=sse
  ```

  Ardından MCP istemci yapılandırmanızı MCP sunucusunu çağırmak üzere güncelleyin.
  Örneğin, Cursor'un `mcp.json` veya Cline'nin `cline_mcp_settings.json` dosyasında şunu yazabilirsiniz:

  ```json
  {
      "mcpServers": {
          "postgres": {
              "type": "sse",
              "url": "http://localhost:8000/sse"
          }
      }
  }
  ```

  Windsurf için `mcp_config.json` dosyasındaki biçim biraz farklıdır:

  ```json
  {
      "mcpServers": {
          "postgres": {
              "type": "sse",
              "serverUrl": "http://localhost:8000/sse"
          }
      }
  }
  ```

  ## Postgres Uzantısı Kurulumu (İsteğe Bağlı)

  Index ayarlaması ve kapsamlı performans analizi etkinleştirmek için veritabanınıza `pg_stat_statements` ve `hypopg` uzantılarını yüklemeniz gerekir.

  - `pg_stat_statements` uzantısı, Postgres MCP Pro'nun sorgu yürütme istatistiklerini analiz etmesine olanak tanır.
  Örneğin, bu, hangi sorguların yavaş çalıştığını veya önemli kaynakları tükettiğini anlamasını sağlar.
  - `hypopg` uzantısı, Postgres MCP Pro'nun index'ler eklendikten sonra Postgres sorgu planlayıcısının davranışını simüle etmesine olanak tanır.

  ### AWS RDS, Azure SQL veya Google Cloud SQL'de Uzantıları Kurma

  Postgres veritabanınız bir bulut sağlayıcısı yönetilen hizmetinde çalışıyorsa, `pg_stat_statements` ve `hypopg` uzantıları sistemde zaten kullanılabilir olmalıdır.
  Bu durumda, yeterli ayrıcalıklara sahip bir rol kullanarak sadece `CREATE EXTENSION` komutlarını çalıştırabilirsiniz:

  ```sql
  CREATE EXTENSION IF NOT EXISTS pg_stat_statements;
  CREATE EXTENSION IF NOT EXISTS hypopg;
  ```

  ### Kendi Kendini Yöneten Postgres'te Uzantıları Kurma

  Kendi Postgres kurulumunuzu yönetiyorsanız, ek çalışma gerekebilir.
  `pg_stat_statements` uzantısını yüklemeden önce, bunun Postgres yapılandırma dosyasının `shared_preload_libraries` kısmında listelendiğinden emin olmalısınız.
  `hypopg` uzantısı, Postgres ile her zaman gelmediği için ek sistem düzeyinde kurulum (örneğin, paket yöneticiniz aracılığıyla) gerektirebilir.

  ## Kullanım Örnekleri

  ### Veritabanı Sağlığına Genel Bakış Alın

  Sorun:
  > Veritabanımın sağlığını kontrol edin ve sorunları belirleyin.

  ### Yavaş Sorguları Analiz Edin

  Sorun:
  > Veritabanımın en yavaş sorguları nelerdir? Ve bunları nasıl hızlandırabilirim?

  ### Şeyleri Hızlandırma Hakkında Önerileri Alın

  Sorun:
  > Uygulamamız yavaş. Onu nasıl daha hızlı yapabilirim?

  ### Index Önerileri Oluşturun

  Sorun:
  > Veritabanı iş yükümü analiz edin ve performansı iyileştirmek için index'ler öneriniz.

  ### Belirli Bir Sorguyu Optimize Edin

  Sorun:
  > Bu sorguyu optimize etmeme yardımcı olun: SELECT \* FROM orders JOIN customers ON orders.customer_id = customers.id WHERE orders.created_at > '2023-01-01';

  ## MCP Sunucusu API

  [MCP standardı](https://modelcontextprotocol.io/), çeşitli uç nokta türlerini tanımlar: Tools, Resources, Prompts ve diğerleri.

  Postgres MCP Pro işlevselliği yalnızca [MCP tools](https://modelcontextprotocol.io/docs/concepts/tools) aracılığıyla sağlar.
  Bunu seçtik çünkü [MCP istemci ekosistemi](https://modelcontextprotocol.io/clients) MCP tools için yaygın desteğe sahiptir.
  Bu, [Reference Postgres MCP Server](https://github.com/modelcontextprotocol/servers-archived/tree/main/src/postgres) dahil diğer Postgres MCP sunucularının [MCP resources](https://modelcontextprotocol.io/docs/concepts/resources) kullanarak şema bilgisini ortaya çıkaran yaklaşımından farklıdır.


  Postgres MCP Pro Tools'ları:

  | Tool Adı | Açıklama |
  |-----------|-------------|
  | `list_schemas` | PostgreSQL örneğinde bulunan tüm veritabanı şemalarını listeler. |
  | `list_objects` | Belirtilen şema içinde veritabanı nesnelerini (tablolar, görünümler, diziler, uzantılar) listeler. |
  | `get_object_details` | Belirli bir veritabanı nesnesi hakkında bilgi sağlar; örneğin, bir tablonun sütunları, kısıtlamaları ve index'leri. |
  | `execute_sql` | SQL deyimlerini veritabanında yürütür, kısıtlı modda bağlandığında salt okunur sınırlamalarıyla. |
  | `explain_query` | Postgres'in bir SQL sorgusunu nasıl işleyeceğini açıklayan bir yürütme planını alır ve sorgu planlayıcısının maliyet modelini ortaya çıkarır. Index'ler eklendikten sonra davranışı simüle etmek için varsayımsal index'lerle çağrılabilir. |
  | `get_top_queries` | `pg_stat_statements` verilerini kullanarak toplam yürütme süresine dayalı en yavaş SQL sorgularını raporlar. |
  | `analyze_workload_indexes` | Veritabanı iş yükünü analiz ederek kaynak yoğun sorguları tanımlar, sonra bunlar için optimal index'leri önerir. |
  | `analyze_query_indexes` | Belirli SQL sorguları listesini (en fazla 10) analiz eder ve bunlar için optimal index'leri önerir. |
  | `analyze_db_health` | Şunları içeren kapsamlı sistem sağlığı kontrolleri gerçekleştirir: buffer cache hit oranları, bağlantı sağlığı, kısıtlama doğrulaması, index sağlığı (yinelenen/kullanılmayan/geçersiz), sequence sınırları ve vakum sağlığı. |


  ## İlgili Projeler

  **Postgres MCP Sunucuları**
  - [Query MCP](https://github.com/alexander-zuev/supabase-mcp-server). Üç katmanlı güvenlik mimarisi ve Supabase yönetim API'ı desteğiyle Supabase Postgres için bir MCP sunucusu.
  - [PG-MCP](https://github.com/stuzero/pg-mcp-server). Esnek bağlantı seçenekleri, açıklama planları, uzantı bağlamı ve daha fazlasıyla PostgreSQL için bir MCP sunucusu.
  - [Reference PostgreSQL MCP Server](https://github.com/modelcontextprotocol/servers-archived/tree/main/src/postgres). Şema bilgisini MCP resources olarak ortaya çıkaran ve salt okunur sorguları yürüten basit bir MCP Sunucusu uygulaması.
  - [Supabase Postgres MCP Server](https://github.com/supabase-community/supabase-mcp). Supabase yönetim özelliklerini sağlayan ve Supabase topluluğu tarafından aktif olarak yönetilen bu MCP Sunucusu.
  - [Nile MCP Server](https://github.com/niledatabase/nile-mcp-server). Nile'nin multi-tenant Postgres hizmeti için yönetim API'sine erişim sağlayan bir MCP sunucusu.
  - [Neon MCP Server](https://github.com/neondatabase-labs/mcp-server-neon). Neon'un serverless Postgres hizmeti için yönetim API'sine erişim sağlayan bir MCP sunucusu.
  - [Wren MCP Server](https://github.com/Canner/wren-engine). Postgres ve diğer veritabanları için işletme analitiklerini güçlendiren bir anlamsal motor sağlar.

  **DBA Araçları (ticari teklifleri dahil)**
  - [Aiven Database Optimizer](https://aiven.io/solutions/aiven-ai-database-optimizer). Bütünsel veritabanı iş yükü analizi, sorgu optimizasyonları ve diğer performans iyileştirmeleri sağlayan bir araç.
  - [dba.ai](https://www.dba.ai/). GitHub ile entegre olan, kod sorunlarını çözen bir yapay zeka destekli veritabanı yönetim asistanı.
  - [pgAnalyze](https://pganalyze.com/). Performans darboğazlarını tanımlamak, sorguları optimize etmek ve gerçek zamanlı uyarı vermek için kapsamlı bir izleme ve analitik platformu.
  - [Postgres.ai](https://postgres.ai/). Kapsamlı bir Postgres bilgi tabanı ve GPT-4'ü birleştiren etkileşimli bir sohbet deneyimi.
  - [Xata Agent](https://github.com/xataio/agent). LLM destekli mantık ve playbookları kullanarak veritabanı sağlığını otomatik olarak izleyen, sorunları tanılayan ve öneriler sunan açık kaynak bir yapay zeka ajanı.

  **Postgres Araçları**
  - [Dexter](https://github.com/DexterDB/dexter). PostgreSQL'de varsayımsal index'ler oluşturan ve test eden bir araç.
  - [PgHero](https://github.com/ankane/pghero). Öneriler içeren Postgres için bir performans kontrol paneli.
  Postgres MCP Pro, PgHero'dan sistem sağlığı kontrollerini içerir.
  - [PgTune](https://github.com/le0pard/pgtune?tab=readme-ov-file). Postgres yapılandırması ayarlaması için buluşsal yöntemler.

  ## Sıkça Sorulan Sorular

  *Postgres MCP Pro diğer Postgres MCP sunucularından nasıl farklı?*
  Bir yapay zeka ajanının Postgres veritabanında sorgu çalıştırmasına izin veren birçok MCP sunucusu vardır.
  Postgres MCP Pro bunu da yapar, ancak aynı zamanda Postgres veritabanının performansını anlamak ve iyileştirmek için araçlar ekler.
  Örneğin, [Microsoft SQL Server'ın Database Tuning Advisor'ının Anytime Algoritmasının](https://www.microsoft.com/en-us/research/wp-content/uploads/2020/06/Anytime-Algorithm-of-Database-Tuning-Advisor-for-Microsoft-SQL-Server.pdf) otomatik index ayarlaması için sürümünü uygular; bu modern endüstriyel güçte bir algoritmadır.

  | Postgres MCP Pro | Diğer Postgres MCP Sunucuları |
  |--------------|----------------------------|
  | ✅ Deterministik veritabanı sistem sağlığı kontrolleri | ❌ Tekrarlanamayan LLM tarafından oluşturulan sistem sağlığı sorguları |
  | ✅ İlkeli indexleme arama stratejileri | ❌ Indexleme iyileştirmeleri hakkında Gen-AI tahminleri |
  | ✅ En iyi sorunları bulmak için iş yükü analizi | ❌ Tutarsız sorun analizi |
  | ✅ Performans iyileştirmelerini simüle eder | ❌ Kendiniz deneyin ve çalışıp çalışmadığını görün |

  Postgres MCP Pro, deterministik araçlar ve klasik optimizasyon algoritmaları ekleyerek üretken yapay zekayı tamamlar. Kombinasyon hem güvenilir hem de esnek.


  *LLM mantık yürütebiliyorken, SQL oluşturabiliyorken vb. MCP araçlarına neden ihtiyaç duyuluyor?*
  LLM'ler, belirsizlik, mantık veya doğal dil içeren görevler için priceless'tır.
  Prosedürel kod ile karşılaştırıldığında, ancak yavaş, pahalı, rastgele olabilir ve bazen güvenilmez sonuçlar üretebilir.
  Veritabanı ayarlaması söz konusu olduğunda, çalışması kanıtlanmış onyıllar boyunca geliştirilen iyi kurulmuş algoritmalarımız vardır.
  Postgres MCP Pro, LLM'leri klasik optimizasyon algoritmaları ve diğer prosedürel araçlarla eşleştirerek her ikisinin en iyi yönlerini birleştirmenize olanak tanır.

  *Postgres MCP Pro nasıl test edilir?*
  Test, Postgres MCP Pro'nun güvenilir ve doğru olmasını sağlamak için kritiktir.
  Postgres MCP Pro'ya meydan okumak ve çeşitli senaryolarda performans göstermesini sağlamak için tasarlanmış yapay zeka tarafından oluşturulan antagonistik iş yükleri hakkında bir test paketini geliştiriyoruz.

  *Hangi Postgres sürümleri destekleniyor?*
  Şu anda test ettiğimiz sürümler Postgres 15, 16 ve 17'dir.
  Postgres 13 ile 17 arasındaki sürümleri desteklemeyi planlıyoruz.

  *Bu projeyi kim oluşturdu?*
  Bu proje [Crystal DBA](https://www.crystaldba.ai) tarafından oluşturulup yönetilmektedir.

  ## Yol Haritası

  *TBD*

  Siz ve ihtiyaçlarınız, inşa ettiğimiz şeyler için kritik bir itici güçtür.
  [Issue](https://github.com/crystaldba/postgres-mcp/issues) veya [pull request](https://github.com/crystaldba/postgres-mcp/pulls) açarak görmek istediğiniz şeyleri bize anlatın.
  Ayrıca [Discord](https://discord.gg/4BEHC7ZM) üzerinden bize ulaşabilirsiniz.

  ## Teknik Notlar

  Bu bölüm, Postgres MCP Pro tasarımını etkileyen teknik hususlarının üst düzey bir özeti içerir.

  ### Index Ayarlaması

  Geliştiriciler, eksik index'lerin en yaygın veritabanı performans sorunlarından biri olduğunu bilirler.
  Index'ler, Postgres'in bir sorguyu yürütmek için gereken verileri hızlı bir şekilde bulmasına olanak tanıyan erişim yöntemleri sağlar.
  Tablolar küçük olduğunda, index'ler çok az fark yaratır, ancak veri boyutu büyüdükçe, tablo taraması ile index araması arasındaki algoritmik karmaşıklık farkı önemli hale gelir (tipik olarak *O*(*n*) vs *O*(*log* *n*), birden çok tabl
---

<div align="center">



[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![PyPI - Version](https://img.shields.io/pypi/v/postgres-mcp)](https://pypi.org/project/postgres-mcp/)
[![Discord](https://img.shields.io/discord/1336769798603931789?label=Discord)](https://discord.gg/4BEHC7ZM)
[![Twitter Follow](https://img.shields.io/twitter/follow/auto_dba?style=flat)](https://x.com/auto_dba)
[![Contributors](https://img.shields.io/github/contributors/crystaldba/postgres-mcp)](https://github.com/crystaldba/postgres-mcp/graphs/contributors)

<h3>A Postgres MCP server with index tuning, explain plans, health checks, and safe sql execution.</h3>

<div class="toc">
  <a href="#overview">Overview</a> •
  <a href="#demo">Demo</a> •
  <a href="#quick-start">Quick Start</a> •
  <a href="#technical-notes">Technical Notes</a> •
  <a href="#mcp-server-api">MCP API</a> •
  <a href="#related-projects">Related Projects</a> •
  <a href="#frequently-asked-questions">FAQ</a>
</div>

</div>

## Overview

**Postgres MCP Pro** is an open source Model Context Protocol (MCP) server built to support you and your AI agents throughout the **entire development process**—from initial coding, through testing and deployment, and to production tuning and maintenance.

Postgres MCP Pro does much more than wrap a database connection.

Features include:

- **🔍 Database Health** - analyze index health, connection utilization, buffer cache, vacuum health, sequence limits, replication lag, and more.
- **⚡ Index Tuning** - explore thousands of possible indexes to find the best solution for your workload, using industrial-strength algorithms.
- **📈 Query Plans** - validate and optimize performance by reviewing EXPLAIN plans and simulating the impact of hypothetical indexes.
- **🧠 Schema Intelligence** - context-aware SQL generation based on detailed understanding of the database schema.
- **🛡️ Safe SQL Execution** - configurable access control, including support for read-only mode and safe SQL parsing, making it usable for both development and production.

Postgres MCP Pro supports both the [Standard Input/Output (stdio)](https://modelcontextprotocol.io/docs/concepts/transports#standard-input%2Foutput-stdio) and [Server-Sent Events (SSE)](https://modelcontextprotocol.io/docs/concepts/transports#server-sent-events-sse) transports, for flexibility in different environments.

For additional background on why we built Postgres MCP Pro, see [our launch blog post](https://www.crystaldba.ai/blog/post/announcing-postgres-mcp-server-pro).

## Demo

*From Unusable to Lightning Fast*
- **Challenge:** We generated a movie app using an AI assistant, but the SQLAlchemy ORM code ran painfully slow.
- **Solution:** Using Postgres MCP Pro with Cursor, we fixed the performance issues in minutes.

What we did:
- 🚀 Fixed performance - including ORM queries, indexing, and caching
- 🛠️ Fixed a broken page - by prompting the agent to explore the data, fix queries, and add related content.
- 🧠 Improved the top movies - by exploring the data and fixing the ORM query to surface more relevant results.

See the video below or read the [play-by-play](examples/movie-app.md).

https://github.com/user-attachments/assets/24e05745-65e9-4998-b877-a368f1eadc13




## Quick Start

### Prerequisites

Before getting started, ensure you have:
1. Access credentials for your database.
2. Docker *or* Python 3.12 or higher.

#### Access Credentials
 You can confirm your access credentials are valid by using `psql` or a GUI tool such as [pgAdmin](https://www.pgadmin.org/).


#### Docker or Python

The choice to use Docker or Python is yours.
We generally recommend Docker because Python users can encounter more environment-specific issues.
However, it often makes sense to use whichever method you are most familiar with.


### Installation

Choose one of the following methods to install Postgres MCP Pro:

#### Option 1: Using Docker

Pull the Postgres MCP Pro MCP server Docker image.
This image contains all necessary dependencies, providing a reliable way to run Postgres MCP Pro in a variety of environments.

```bash
docker pull crystaldba/postgres-mcp
```


#### Option 2: Using Python

If you have `pipx` installed you can install Postgres MCP Pro with:

```bash
pipx install postgres-mcp
```

Otherwise, install Postgres MCP Pro with `uv`:

```bash
uv pip install postgres-mcp
```

If you need to install `uv`, see the [uv installation instructions](https://docs.astral.sh/uv/getting-started/installation/).


### Configure Your AI Assistant

We provide full instructions for configuring Postgres MCP Pro with Claude Desktop.
Many MCP clients have similar configuration files, you can adapt these steps to work with the client of your choice.

#### Claude Desktop Configuration

You will need to edit the Claude Desktop configuration file to add Postgres MCP Pro.
The location of this file depends on your operating system:
- MacOS: `~/Library/Application Support/Claude/claude_desktop_config.json`
- Windows: `%APPDATA%/Claude/claude_desktop_config.json`

You can also use `Settings` menu item in Claude Desktop to locate the configuration file.

You will now edit the `mcpServers` section of the configuration file.

##### If you are using Docker

```json
{
  "mcpServers": {
    "postgres": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "-e",
        "DATABASE_URI",
        "crystaldba/postgres-mcp",
        "--access-mode=unrestricted"
      ],
      "env": {
        "DATABASE_URI": "postgresql://username:password@localhost:5432/dbname"
      }
    }
  }
}
```

The Postgres MCP Pro Docker image will automatically remap the hostname `localhost` to work from inside of the container.

- MacOS/Windows: Uses `host.docker.internal` automatically
- Linux: Uses `172.17.0.1` or the appropriate host address automatically

##### If you are using `uvx`

```json
{
  "mcpServers": {
    "postgres": {
      "command": "uvx",
      "args": [
        "postgres-mcp",
        "--access-mode=unrestricted"
      ],
      "env": {
        "DATABASE_URI": "postgresql://username:password@localhost:5432/dbname"
      }
    }
  }
}
```


##### If you are using `pipx`

```json
{
  "mcpServers": {
    "postgres": {
      "command": "postgres-mcp",
      "args": [
        "--access-mode=unrestricted"
      ],
      "env": {
        "DATABASE_URI": "postgresql://username:password@localhost:5432/dbname"
      }
    }
  }
}
```


##### If you are using `uv`

```json
{
  "mcpServers": {
    "postgres": {
      "command": "uv",
      "args": [
        "run",
        "postgres-mcp",
        "--access-mode=unrestricted"
      ],
      "env": {
        "DATABASE_URI": "postgresql://username:password@localhost:5432/dbname"
      }
    }
  }
}
```


##### Connection URI

Replace `postgresql://...` with your [Postgres database connection URI](https://www.postgresql.org/docs/current/libpq-connect.html#LIBPQ-CONNSTRING-URIS).


##### Access Mode

Postgres MCP Pro supports multiple *access modes* to give you control over the operations that the AI agent can perform on the database:
- **Unrestricted Mode**: Allows full read/write access to modify data and schema. It is suitable for development environments.
- **Restricted Mode**: Limits operations to read-only transactions and imposes constraints on resource utilization (presently only execution time). It is suitable for production environments.

To use restricted mode, replace `--access-mode=unrestricted` with `--access-mode=restricted` in the configuration examples above.


#### Other MCP Clients

Many MCP clients have similar configuration files to Claude Desktop, and you can adapt the examples above to work with the client of your choice.

- If you are using Cursor, you can use navigate from the `Command Palette` to `Cursor Settings`, then open the `MCP` tab to access the configuration file.
- If you are using Windsurf, you can navigate to from the `Command Palette` to `Open Windsurf Settings Page` to access the configuration file.
- If you are using Goose run `goose configure`, then select `Add Extension`.
- If you are using Qodo Gen, open the Chat panel, click `Connect more tools`, click `+ Add new MCP`, then add the new configuration.

## SSE Transport

Postgres MCP Pro supports the [SSE transport](https://modelcontextprotocol.io/docs/concepts/transports#server-sent-events-sse), which allows multiple MCP clients to share one server, possibly a remote server.
To use the SSE transport, you need to start the server with the `--transport=sse` option.

For example, with Docker run:

```bash
docker run -p 8000:8000 \
  -e DATABASE_URI=postgresql://username:password@localhost:5432/dbname \
  crystaldba/postgres-mcp --access-mode=unrestricted --transport=sse
```

Then update your MCP client configuration to call the the MCP server.
For example, in Cursor's `mcp.json` or Cline's `cline_mcp_settings.json` you can put:

```json
{
    "mcpServers": {
        "postgres": {
            "type": "sse",
            "url": "http://localhost:8000/sse"
        }
    }
}
```

For Windsurf, the format in `mcp_config.json` is slightly different:

```json
{
    "mcpServers": {
        "postgres": {
            "type": "sse",
            "serverUrl": "http://localhost:8000/sse"
        }
    }
}
```

## Postgres Extension Installation (Optional)

To enable index tuning and comprehensive performance analysis you need to load the `pg_stat_statements` and `hypopg` extensions on your database.

- The `pg_stat_statements` extension allows Postgres MCP Pro to analyze query execution statistics.
For example, this allows it to understand which queries are running slow or consuming significant resources.
- The `hypopg` extension allows Postgres MCP Pro to simulate the behavior of the Postgres query planner after adding indexes.

### Installing extensions on AWS RDS, Azure SQL, or Google Cloud SQL

If your Postgres database is running on a cloud provider managed service, the `pg_stat_statements` and `hypopg` extensions should already be available on the system.
In this case, you can just run `CREATE EXTENSION` commands using a role with sufficient privileges:

```sql
CREATE EXTENSION IF NOT EXISTS pg_stat_statements;
CREATE EXTENSION IF NOT EXISTS hypopg;
```

### Installing extensions on self-managed Postgres

If you are managing your own Postgres installation, you may need to do additional work.
Before loading the `pg_stat_statements` extension you must ensure that it is listed in the `shared_preload_libraries` in the Postgres configuration file.
The `hypopg` extension may also require additional system-level installation (e.g., via your package manager) because it does not always ship with Postgres.

## Usage Examples

### Get Database Health Overview

Ask:
> Check the health of my database and identify any issues.

### Analyze Slow Queries

Ask:
> What are the slowest queries in my database? And how can I speed them up?

### Get Recommendations On How To Speed Things Up

Ask:
> My app is slow. How can I make it faster?

### Generate Index Recommendations

Ask:
> Analyze my database workload and suggest indexes to improve performance.

### Optimize a Specific Query

Ask:
> Help me optimize this query: SELECT \* FROM orders JOIN customers ON orders.customer_id = customers.id WHERE orders.created_at > '2023-01-01';

## MCP Server API

The [MCP standard](https://modelcontextprotocol.io/) defines various types of endpoints: Tools, Resources, Prompts, and others.

Postgres MCP Pro provides functionality via [MCP tools](https://modelcontextprotocol.io/docs/concepts/tools) alone.
We chose this approach because the [MCP client ecosystem](https://modelcontextprotocol.io/clients) has widespread support for MCP tools.
This contrasts with the approach of other Postgres MCP servers, including the [Reference Postgres MCP Server](https://github.com/modelcontextprotocol/servers-archived/tree/main/src/postgres), which use [MCP resources](https://modelcontextprotocol.io/docs/concepts/resources) to expose schema information.


Postgres MCP Pro Tools:

| Tool Name | Description |
|-----------|-------------|
| `list_schemas` | Lists all database schemas available in the PostgreSQL instance. |
| `list_objects` | Lists database objects (tables, views, sequences, extensions) within a specified schema. |
| `get_object_details` | Provides information about a specific database object, for example, a table's columns, constraints, and indexes. |
| `execute_sql` | Executes SQL statements on the database, with read-only limitations when connected in restricted mode. |
| `explain_query` | Gets the execution plan for a SQL query describing how PostgreSQL will process it and exposing the query planner's cost model. Can be invoked with hypothetical indexes to simulate the behavior after adding indexes. |
| `get_top_queries` | Reports the slowest SQL queries based on total execution time using `pg_stat_statements` data. |
| `analyze_workload_indexes` | Analyzes the database workload to identify resource-intensive queries, then recommends optimal indexes for them. |
| `analyze_query_indexes` | Analyzes a list of specific SQL queries (up to 10) and recommends optimal indexes for them. |
| `analyze_db_health` | Performs comprehensive health checks including: buffer cache hit rates, connection health, constraint validation, index health (duplicate/unused/invalid), sequence limits, and vacuum health. |


## Related Projects

**Postgres MCP Servers**
- [Query MCP](https://github.com/alexander-zuev/supabase-mcp-server). An MCP server for Supabase Postgres with a three-tier safety architecture and Supabase management API support.
- [PG-MCP](https://github.com/stuzero/pg-mcp-server). An MCP server for PostgreSQL with flexible connection options, explain plans, extension context, and more.
- [Reference PostgreSQL MCP Server](https://github.com/modelcontextprotocol/servers-archived/tree/main/src/postgres). A simple MCP Server implementation exposing schema information as MCP resources and executing read-only queries.
- [Supabase Postgres MCP Server](https://github.com/supabase-community/supabase-mcp). This MCP Server provides Supabase management features and is actively maintained by the Supabase community.
- [Nile MCP Server](https://github.com/niledatabase/nile-mcp-server). An MCP server providing access to the management API for the Nile's multi-tenant Postgres service.
- [Neon MCP Server](https://github.com/neondatabase-labs/mcp-server-neon). An MCP server providing access to the management API for Neon's serverless Postgres service.
- [Wren MCP Server](https://github.com/Canner/wren-engine). Provides a semantic engine powering business intelligence for Postgres and other databases.

**DBA Tools (including commercial offerings)**
- [Aiven Database Optimizer](https://aiven.io/solutions/aiven-ai-database-optimizer). A tool that provides holistic database workload analysis, query optimizations, and other performance improvements.
- [dba.ai](https://www.dba.ai/). An AI-powered database administration assistant that integrates with GitHub to resolve code issues.
- [pgAnalyze](https://pganalyze.com/). A comprehensive monitoring and analytics platform for identifying performance bottlenecks, optimizing queries, and real-time alerting.
- [Postgres.ai](https://postgres.ai/). An interactive chat experience combining an extensive Postgres knowledge base and GPT-4.
- [Xata Agent](https://github.com/xataio/agent). An open-source AI agent that automatically monitors database health, diagnoses issues, and provides recommendations using LLM-powered reasoning and playbooks.

**Postgres Utilities**
- [Dexter](https://github.com/DexterDB/dexter). A tool for generating and testing hypothetical indexes on PostgreSQL.
- [PgHero](https://github.com/ankane/pghero). A performance dashboard for Postgres, with recommendations.
Postgres MCP Pro incorporates health checks from PgHero.
- [PgTune](https://github.com/le0pard/pgtune?tab=readme-ov-file). Heuristics for tuning Postgres configuration.

## Frequently Asked Questions

*How is Postgres MCP Pro different from other Postgres MCP servers?*
There are many MCP servers allow an AI agent to run queries against a Postgres database.
Postgres MCP Pro does that too, but also adds tools for understanding and improving the performance of your Postgres database.
For example, it implements a version of the [Anytime Algorithm of Database Tuning Advisor for Microsoft SQL Server](https://www.microsoft.com/en-us/research/wp-content/uploads/2020/06/Anytime-Algorithm-of-Database-Tuning-Advisor-for-Microsoft-SQL-Server.pdf), a modern industrial-strength algorithm for automatic index tuning.

| Postgres MCP Pro | Other Postgres MCP Servers |
|--------------|----------------------------|
| ✅ Deterministic database health checks | ❌ Unrepeatable LLM-generated health queries |
| ✅ Principled indexing search strategies | ❌ Gen-AI guesses at indexing improvements |
| ✅ Workload analysis to find top problems | ❌ Inconsistent problem analysis |
| ✅ Simulates performance improvements | ❌ Try it yourself and see if it works |

Postgres MCP Pro complements generative AI by adding deterministic tools and classical optimization algorithms
The combination is both reliable and flexible.


*Why are MCP tools needed when the LLM can reason, generate SQL, etc?*
LLMs are invaluable for tasks that involve ambiguity, reasoning, or natural language.
When compared to procedural code, however, they can be slow, expensive, non-deterministic, and sometimes produce unreliable results.
In the case of database tuning, we have well established algorithms, developed over decades, that are proven to work.
Postgres MCP Pro lets you combine the best of both worlds by pairing LLMs with classical optimization algorithms and other procedural tools.

*How do you test Postgres MCP Pro?*
Testing is critical to ensuring that Postgres MCP Pro is reliable and accurate.
We are building out a suite of AI-generated adversarial workloads designed to challenge Postgres MCP Pro and ensure it performs under a broad variety of scenarios.

*What Postgres versions are supported?*
Our testing presently focuses on Postgres 15, 16, and 17.
We plan to support Postgres versions 13 through 17.

*Who created this project?*
This project is created and maintained by [Crystal DBA](https://www.crystaldba.ai).

## Roadmap

*TBD*

You and your needs are a critical driver for what we build.
Tell us what you want to see by opening an [issue](https://github.com/crystaldba/postgres-mcp/issues) or a [pull request](https://github.com/crystaldba/postgres-mcp/pulls).
You can also contact us on [Discord](https://discord.gg/4BEHC7ZM).

## Technical Notes

This section includes a high-level overview technical considerations that influenced the design of Postgres MCP Pro.

### Index Tuning

Developers know that missing indexes are one of the most common causes of database performance issues.
Indexes provide access methods that allow Postgres to quickly locate data that is required to execute a query.
When tables are small, indexes make little difference, but as the size of the data grows, the difference in algorithmic complexity between a table scan and an index lookup becomes significant (typically *O*(*n*) vs *O*(*log* *n*), potentially more if joins on multiple tables are involved).

Generating suggested indexes in Postgres MCP Pro proceeds in several stages:

1. *Identify SQL queries in need of tuning*.
    If you know you are having a problem with a specific SQL query you can provide it.
    Postgres MCP Pro can also analyze the workload to identify index tuning targets.
    To do this, it relies on the `pg_stat_statements` extension, which records the runtime and resource consumption of each query.

    A query is a candidate for index tuning if it is a top resource consumer, either on a per-execution basis or in aggregate.
    At present, we use execution time as a proxy for cumulative resource consumption, but it may also make sense to look at specifics resources, e.g., the number of blocks accessed or the number of blocks read from disk.
    The `analyze_query_workload` tool focuses on slow queries, using the mean time per execution with thresholds for execution count and mean execution time.
    Agents may also call `get_top_queries`, which accepts a parameter for mean vs. total execution time, then pass these queries `analyze_query_indexes` to get index recommendations.

    Sophisticated index tuning systems use "workload compression" to produce a representative subset of queries that reflects the characteristics of the workload as a whole, reducing the problem for downstream algorithms.
    Postgres MCP Pro performs a limited form of workload compression by normalizing queries so that those generated from the same template appear as one.
    It weights each query equally, a simplification that works when the benefits to indexing are large.

2. *Generate candidate indexes*
    Once we have a list of SQL queries that we want to improve through indexing, we generate a list of indexes that we might want to add.
    To do this, we parse the SQL and identify any columns used in filters, joins, grouping, or sorting.

    To generate all possible indexes we need to consider combinations of these columns, because Postgres supports [multicolumn indexes](https://www.postgresql.org/docs/current/indexes-multicolumn.html).
    In the present implementation, we include only one permutation of each possible multicolumn index, which is selected at random.
    We make this simplification to reduce the search space because permutations often have equivalent performance.
    However, we hope to improve in this area.

3. *Search for the optimal index configuration*.
    Our objective is to find the combination of indexes that optimally balances the performance benefits against the costs of storing and maintaining those indexes.
    We estimate the performance improvement by using the "what if?" capabilities provided by the `hypopg` extension.
    This simulates how the Postgres query optimizer will execute a query after the addition of indexes, and reports changes based on the actual Postgres cost model.

    One challenge is that generating query plans generally requires knowledge of the specific parameter values used in the query.
    Query normalization, which is necessary to reduce the queries under consideration, removes parameter constants.
    Parameter values provided via bind variables are similarly not available to us.

    To address this problem, we produce realistic constants that we can provide as parameters by sampling from the table statistics.
    In version 16, Postgres added [generic explain plan functionality](https://www.postgresql.org/docs/current/sql-explain.html), but it has limitations, for example around `LIKE` clauses, which our implementation does not have.

    Search strategy is critical because evaluating all possible index combinations feasible only in simple situations.
    This is what most sets apart various indexing approaches.
    Adapting the approach of Microsoft's Anytime algorithm, we employ a greedy search strategy, i.e., find the best one-index solution, then find the best index to add to that to produce a two-index solution.
    Our search terminates when the time budget is exhausted or when a round of exploration fails to produce any gains above the minimum improvement threshold of 10%.

4. *Cost-benefit analysis*.
    When posed with two indexing alternatives, one which produces better performance and one which requires more space, how do we decide which to choose?
    Traditionally, index advisors ask for a storage budget and optimize performance with respect to that storage budget.
    We also take a storage budget, but perform a cost-benefit analysis throughout the optimization.

    We frame this as the problem of selecting a point along the [Pareto front](https://en.wikipedia.org/wiki/Pareto_front)—the set of choices for which improving one quality metric necessarily worsens another.
    In an ideal world, we might want to assess the cost of the storage and the benefit of improved performance in monetary terms.
    However, there is a simpler and more practical approach: to look at the changes in relative terms.
    Most people would agree that a 100x performance improvement is worth it, even if the storage cost is 2x.
    In our implementation, we use a configurable parameter to set this threshold.
    By default, we require the change in the log (base 10) of the performance improvement to be 2x the difference in the log of the space cost.
    This works out to allowing a maximum 10x increase in space for a 100x performance improvement.

Our implementation is most closely related to the [Anytime Algorithm](https://www.microsoft.com/en-us/research/wp-content/uploads/2020/06/Anytime-Algorithm-of-Database-Tuning-Advisor-for-Microsoft-SQL-Server.pdf) found in Microsoft SQL Server.
Compared to [Dexter](https://github.com/ankane/dexter/), an automatic indexing tool for Postgres, we search a larger space and use different heuristics.
This allows us to generate better solutions at the cost of longer runtime.

We also show the work done in each round of the search, including a comparison of the query plans before and after the addition of each index.
This give the LLM additional context that it can use when responding to the indexing recommendations.

### Experimental: Index Tuning by LLM

Postgres MCP Pro includes an experimental index tuning feature based on [Optimization by LLM](https://arxiv.org/abs/2309.03409).
Instead of using heuristics to explore possible index configurations, we provide the database schema and query plans to an LLM and ask it to propose index configurations.
We then use `hypopg` to predict performance with the proposed indexes, then feed those results back into the LLM to produce a new set of suggestions.
We repeat this process until multiple rounds of iteration produce no further improvements.

Index optimization by LLM is has advantages when the index search space is large, or when indexes with many columns need to be considered.
Like traditional search-based approaches, it relies on the accuracy of the `hypopg` performance predictions.

In order to perform index optimization by LLM, you must provide an OpenAI API key by setting the `OPENAI_API_KEY` environment variable.


### Database Health

Database health checks identify tuning opportunities and maintenance needs before they lead to critical issues.
In the present release, Postgres MCP Pro adapts the database health checks directly from [PgHero](https://github.com/ankane/pghero).
We are working to fully validate these checks and may extend them in the future.

- *Index Health*. Looks for unused indexes, duplicate indexes, and indexes that are bloated. Bloated indexes make inefficient use of database pages.
  Postgres autovacuum cleans up index entries pointing to dead tuples, and marks the entries as reusable. However, it does not compact the index pages and, eventually, index pages may contain few live tuple references.
- *Buffer Cache Hit Rate*. Measures the proportion of database reads that are served from the buffer cache instead of disk.
  A low buffer cache hit rate must be investigated as it is often not cost-optimal and leads to degraded application performance.
- *Connection Health*. Checks the number of connections to the database and reports on their utilization.
  The biggest risk is running out of connections, but a high number of idle or blocked connections can also indicate issues.
- *Vacuum Health*. Vacuum is important for many reasons.
  A critical one is preventing transaction id wraparound, which can cause the database to stop accepting writes.
  The Postgres multi-version concurrency control (MVCC) mechanism requires a unique transaction id for each transaction.
  However, because Postgres uses a 32-bit signed integer for transaction ids, it needs to reuse transaction ids after after a maximum of 2 billion transactions.
  To do this it "freezes" the transaction ids of historical transactions, setting them all to a special value that indicates distant past.
  When records first go to disk, they are written visibility for a range of transaction ids.
  Before re-using these transaction ids, Postgres must update any on-disk records, "freezing" them to remove the references to the transaction ids to be reused.
  This check looks for tables that require vacuuming to prevent transaction id wraparound.
- *Replication Health*. Checks replication health by monitoring lag between primary and replicas, verifying replication status, and tracking usage of replication slots.
- *Constraint Health*. During normal operation, Postgres rejects any transactions that would cause a constraint violation.
  However, invalid constraints may occur after loading data or in recovery scenarios. This check looks for any invalid constraints.
- *Sequence Health*. Looks for sequences that are at risk of exceeding their maximum value.


### Postgres Client Library

Postgres MCP Pro uses [psycopg3](https://www.psycopg.org/) to connect to Postgres using asynchronous I/O.
Under the hood, psycopg3 uses the [libpq](https://www.postgresql.org/docs/current/libpq.html) library to connect to Postgres, providing access to the full Postgres feature set and an underlying implementation fully supported by the Postgres community.

Some other Python-based MCP servers use [asyncpg](https://github.com/MagicStack/asyncpg), which may simplify installation by eliminating the `libpq` dependency.
Asyncpg is also probably [faster](https://fernandoarteaga.dev/blog/psycopg-vs-asyncpg/) than psycopg3, but we have not validated this ourselves.
[Older benchmarks](https://gistpreview.github.io/?0ed296e93523831ea0918d42dd1258c2) report a larger performance gap, suggesting that the newer psycopg3 has closed the gap as it matures.

Balancing these considerations, we selected `psycopg3` over `asyncpg`.
We remain open to revising this decision in the future.


### Connection Configuration

Like the [Reference PostgreSQL MCP Server](https://github.com/modelcontextprotocol/servers-archived/tree/main/src/postgres), Postgres MCP Pro takes Postgres connection information at startup.
This is convenient for users who always connect to the same database but can be cumbersome when users switch databases.

An alternative approach, taken by [PG-MCP](https://github.com/stuzero/pg-mcp-server), is provide connection details via MCP tool calls at the time of use.
This is more convenient for users who switch databases, and allows a single MCP server to simultaneously support multiple end-users.

There must be a better approach than either of these.
Both have security weaknesses—few MCP clients store the MCP server configuration securely (an exception is Goose), and credentials provided via MCP tools are passed through the LLM and stored in the chat history.
Both also have usability issues in some scenarios.


### Schema Information

The purpose of the schema information tool is to provide the calling AI agent with the information it needs to generate correct and performant SQL.
For example, suppose a user asks, "How many flights took off from San Francisco and landed in Paris during the past year?"
The AI agent needs to find the table that stores the flights, the columns that store the origin and destinations, and perhaps a table that maps between airport codes and airport locations.


*Why provide schema information tools when LLMs are generally capable of generating the SQL to retrieve this information from Postgres directly?*

Our experience using Claude indicates that the calling LLM is very good at generating SQL to explore the Postgres schema by querying the [Postgres system catalog](https://www.postgresql.org/docs/current/catalogs.html) and the [information schema](https://www.postgresql.org/docs/current/information-schema.html) (an ANSI-standardized database metadata view).
However, we do not know whether other LLMs do so as reliably and capably.

*Would it be better to provide schema information using [MCP resources](https://modelcontextprotocol.io/docs/concepts/resources) rather than [MCP tools](https://modelcontextprotocol.io/docs/concepts/tools)?*

The [Reference PostgreSQL MCP Server](https://github.com/modelcontextprotocol/servers-archived/tree/main/src/postgres) uses resources to expose schema information rather than tools.
Navigating resources is similar to navigating a file system, so this approach is natural in many ways.
However, resource support is less widespread than tool support in the MCP client ecosystem (see [example clients](https://modelcontextprotocol.io/clients)).
In addition, while the MCP standard says that resources can be accessed by either AI agents or end-user humans, some clients only support human navigation of the resource tree.


### Protected SQL Execution

AI amplifies longstanding challenges of protecting databases from a range of threats, ranging from simple mistakes to sophisticated attacks by malicious actors.
Whether the threat is accidental or malicious, a similar security framework applies, with aims that fall into three categories: confidentiality, integrity, and availability.
The familiar tension between convenience and safety is also evident and pronounced.

Postgres MCP Pro's protected SQL execution mode focuses on integrity.
In the context of MCP, we are most concerned with LLM-generated SQL causing damage—for example, unintended data modification or deletion, or other changes that might circumvent an organization's change management process.

The simplest way to provide integrity is to ensure that all SQL executed against the database is read-only.
One way to do this is by creating a database user with read-only access permissions.
While this is a good approach, many find this cumbersome in practice.
Postgres does not provide a way to place a connection or session into read-only mode, so Postgres MCP Pro uses a more complex approach to ensure read-only SQL execution on top of a read-write connection.

Postgres MCP Provides a read-only transaction mode that prevents data and schema modifications.
Like the [Reference PostgreSQL MCP Server](https://github.com/modelcontextprotocol/servers-archived/tree/main/src/postgres), we use read-only transactions to provide protected SQL execution.

To make this mechanism robust, we need to ensure that the SQL does not somehow circumvent the read-only transaction mode, say by issuing a `COMMIT` or `ROLLBACK` statement and then beginning a new transaction.

For example, the LLM can circumvent the read-only transaction mode by issuing a `ROLLBACK` statement and then beginning a new transaction.
For example:
```sql
ROLLBACK; DROP TABLE users;
```

To prevent cases like this, we parse the SQL before execution using the [pglast](https://pglast.readthedocs.io/) library.
We reject any SQL that contains `commit` or `rollback` statements.
Helpfully, the popular Postgres stored procedure languages, including PL/pgSQL and PL/Python, do not allow for `COMMIT` or `ROLLBACK` statements.
If you have unsafe stored procedure languages enabled on your database, then our read-only protections could be circumvented.

At present, Postgres MCP Pro provides two levels of protection for the database, one at either extreme of the convenience/safety spectrum.
- "Unrestricted" provides maximum flexibility.
It is suitable for development environments where speed and flexibility are paramount, and where there is no need to protect valuable or sensitive data.
- "Restricted" provides a balance between flexibility and safety.
It is suitable for production environments where the database is exposed to untrusted users, and where it is important to protect valuable or sensitive data.

Unrestricted mode aligns with the approach of [Cursor's auto-run mode](https://docs.cursor.com/chat/tools#auto-run), where the AI agent operates with limited human oversight or approvals.
We expect auto-run to be deployed in development environments where the consequences of mistakes are low, where databases do not contain valuable or sensitive data, and where they can be recreated or restored from backups when needed.

We designed restricted mode to be conservative, erring on the side of safety even though it may be inconvenient.
Restricted mode is limited to read-only operations, and we limit query execution time to prevent long-running queries from impacting system performance.
We may add measures in the future to make sure that restricted mode is safe to use with production databases.


## Postgres MCP Pro Development

The instructions below are for developers who want to work on Postgres MCP Pro, or users who prefer to install Postgres MCP Pro from source.

### Local Development Setup

1. **Install uv**:

   ```bash
   curl -sSL https://astral.sh/uv/install.sh | sh
   ```

2. **Clone the repository**:

   ```bash
   git clone https://github.com/crystaldba/postgres-mcp.git
   cd postgres-mcp
   ```

3. **Install dependencies**:

   ```bash
   uv pip install -e .
   uv sync
   ```

4. **Run the server**:
   ```bash
   uv run postgres-mcp "postgres://user:password@localhost:5432/dbname"
   ```
