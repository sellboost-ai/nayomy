---
name: "FreePeak/db-mcp-server"
description: "A high-performance multi-database MCP server built with Golang, supporting MySQL & PostgreSQL (NoSQL coming soon). Includes built-in tools for query execution, transaction management, schema exploration, query building, and performance analysis, with seamless Cursor integration for enhanced database workflows."
description_tr: "Golang ile geliştirilmiş, MySQL ve PostgreSQL desteği sunan (NoSQL yakında), yüksek performanslı multi-database MCP sunucusu. Query execution, transaction management, schema exploration, query building ve performance analysis için yerleşik araçlar içerir, Cursor entegrasyonu ile geliştirilmiş database workflow'larını destekler."
category: "Databases"
repo: "FreePeak/db-mcp-server"
stars: 382
url: "https://github.com/FreePeak/db-mcp-server"
body_length: 20703
license: "MIT"
language: "Go"
body_tr: |-
  <div align="center">



  # Multi Database MCP Server

  [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
  [![Go Report Card](https://goreportcard.com/badge/github.com/FreePeak/db-mcp-server)](https://goreportcard.com/report/github.com/FreePeak/db-mcp-server)
  [![Go Reference](https://pkg.go.dev/badge/github.com/FreePeak/db-mcp-server.svg)](https://pkg.go.dev/github.com/FreePeak/db-mcp-server)
  [![Contributors](https://img.shields.io/github/contributors/FreePeak/db-mcp-server)](https://github.com/FreePeak/db-mcp-server/graphs/contributors)

  <h3>Model Context Protocol (MCP) uygulayan, yapay zeka asistanlarına veritabanlarına yapılandırılmış erişim sağlayan güçlü bir çok veritabanı sunucusu.</h3>

  <div class="toc">
    <a href="#overview">Genel Bakış</a> •
    <a href="#core-concepts">Temel Kavramlar</a> •
    <a href="#features">Özellikler</a> •
    <a href="#supported-databases">Desteklenen Veritabanları</a> •
    <a href="#deployment-options">Dağıtım Seçenekleri</a> •
    <a href="#configuration">Yapılandırma</a> •
    <a href="#available-tools">Mevcut Araçlar</a> •
    <a href="#examples">Örnekler</a> •
    <a href="#troubleshooting">Sorun Giderme</a> •
    <a href="#contributing">Katkıda Bulunma</a>
  </div>

  </div>

  ## Genel Bakış

  DB MCP Server, yapay zeka modellerinin birden fazla veritabanıyla aynı anda etkileşim kurması için standartlaştırılmış bir yol sağlar. [FreePeak/cortex](https://github.com/FreePeak/cortex) framework'ü üzerine inşa edilen bu sunucu, yapay zeka asistanlarının SQL sorguları yürütmesine, işlemleri yönetmesine, şemaları keşfetmesine ve farklı veritabanı sistemleri arasında birleşik bir arayüz üzerinden performansı analiz etmesine olanak tanır.

  ## Temel Kavramlar

  ### Çok Veritabanı Desteği

  Geleneksel veritabanı bağlayıcılarından farklı olarak, DB MCP Server birden fazla veritabanına aynı anda bağlanabilir ve bunlarla etkileşim kurabilir:

  ```json
  {
    "connections": [
      {
        "id": "mysql1",
        "type": "mysql",
        "host": "localhost",
        "port": 3306,
        "name": "db1",
        "user": "user1",
        "password": "password1"
      },
      {
        "id": "postgres1",
        "type": "postgres",
        "host": "localhost",
        "port": 5432,
        "name": "db2",
        "user": "user2",
        "password": "password2"
      },
      {
        "id": "oracle1",
        "type": "oracle",
        "host": "localhost",
        "port": 1521,
        "service_name": "XEPDB1",
        "user": "user3",
        "password": "password3"
      }
    ]
  }
  ```

  ### Dinamik Tool Üretimi

  Bağlı her veritabanı için, sunucu otomatik olarak özel araçlar oluşturur:

  ```go
  // "mysql1" kimliğine sahip veritabanı için şu araçlar oluşturulur:
  query_mysql1       // SQL sorguları yürüt
  execute_mysql1     // Veri değiştirme ifadelerini çalıştır
  transaction_mysql1 // İşlemleri yönet
  schema_mysql1      // Veritabanı şemasını keşfet
  performance_mysql1 // Sorgu performansını analiz et
  ```

  ### Temiz Mimari

  Sunucu, Clean Architecture prensiplerini şu katmanlarla takip eder:

  1. **Domain Layer**: Temel iş varlıkları ve arayüzleri
  2. **Repository Layer**: Veri erişim uygulamaları
  3. **Use Case Layer**: Uygulama iş mantığı
  4. **Delivery Layer**: Dış arayüzler (MCP araçları)

  ## Özellikler

  - **Eşzamanlı Çok Veritabanı Desteği**: Birden fazla MySQL, PostgreSQL, SQLite ve Oracle veritabanlarına aynı anda bağlanın
  - **Lazy Loading Modu**: Bağlantı kurmayı ilk kullanım için erteleme - 10+ veritabanı kurulumu için ideal (`--lazy-loading` bayrağıyla etkinleştirin)
  - **Veritabanına Özgü Tool Üretimi**: Bağlı her veritabanı için otomatik olarak özel araçlar oluşturur
  - **Clean Architecture**: Endişelerin açık bir şekilde ayrıldığı modüler tasarım
  - **OpenAI Agents SDK Uyumluluğu**: Sorunsuz yapay zeka asistanı entegrasyonu için tam uyumluluk
  - **Dinamik Veritabanı Araçları**: Sorguları yürütün, ifadeleri çalıştırın, işlemleri yönetin, şemaları keşfedin, performansı analiz edin
  - **Birleşik Arayüz**: Farklı veritabanı türleri arasında tutarlı etkileşim desenleri
  - **Bağlantı Yönetimi**: Birden fazla veritabanı bağlantısı için basit yapılandırma
  - **Sağlık Kontrolü**: Başlatma sırasında otomatik veritabanı bağlantısı doğrulaması

  ## Desteklenen Veritabanları

  | Veritabanı   | Durum                     | Özellikler                                                   |
  | ---------- | ------------------------- | ------------------------------------------------------------ |
  | MySQL      | ✅ Tam Destek           | Sorgular, İşlemler, Şema Analizi, Performans İçgörüleri |
  | PostgreSQL | ✅ Tam Destek (v9.6-17) | Sorgular, İşlemler, Şema Analizi, Performans İçgörüleri |
  | SQLite     | ✅ Tam Destek           | Dosya tabanlı ve In-memory veritabanları, SQLCipher şifreleme desteği |
  | Oracle     | ✅ Tam Destek (10g-23c) | Sorgular, İşlemler, Şema Analizi, RAC, Cloud Wallet, TNS |
  | TimescaleDB| ✅ Tam Destek           | Hypertables, Zaman Serisi Sorguları, Sürekli Agregasyonlar, Sıkıştırma, Saklama Politikaları |

  ## Dağıtım Seçenekleri

  DB MCP Server, farklı ortamlara ve entegrasyon ihtiyaçlarına uygun birden fazla yolla dağıtılabilir:

  ### Docker Dağıtımı

  ```bash
  # En son imajı çek
  docker pull freepeak/db-mcp-server:latest

  # Bağlı yapılandırma dosyasıyla çalıştır
  docker run -p 9092:9092 \
    -v $(pwd)/config.json:/app/my-config.json \
    -e TRANSPORT_MODE=sse \
    -e CONFIG_PATH=/app/my-config.json \
    freepeak/db-mcp-server
  ```

  > **Not**: Konteyner `/app/config.json` konumunda varsayılan bir dosyaya sahip olduğundan, `/app/my-config.json` konumuna bağlayın.

  ### STDIO Modu (IDE Entegrasyonu)

  ```bash
  # Sunucuyu STDIO modunda çalıştır
  ./bin/server -t stdio -c config.json
  ```

  Cursor IDE entegrasyonu için `.cursor/mcp.json` dosyasına ekleyin:

  ```json
  {
    "mcpServers": {
      "stdio-db-mcp-server": {
        "command": "/path/to/db-mcp-server/server",
        "args": ["-t", "stdio", "-c", "/path/to/config.json"]
      }
    }
  }
  ```

  ### SSE Modu (Server-Sent Events)

  ```bash
  # Varsayılan yapılandırma (localhost:9092)
  ./bin/server -t sse -c config.json

  # Özel ana bilgisayar ve port
  ./bin/server -t sse -host 0.0.0.0 -port 8080 -c config.json
  ```

  İstemci bağlantı uç noktası: `http://localhost:9092/sse`

  ### Kaynak Kodu Kurulumu

  ```bash
  # Depoyu klonla
  git clone https://github.com/FreePeak/db-mcp-server.git
  cd db-mcp-server

  # Sunucuyu derle
  make build

  # Sunucuyu çalıştır
  ./bin/server -t sse -c config.json
  ```

  ## Yapılandırma

  ### Veritabanı Yapılandırma Dosyası

  `config.json` dosyasını veritabanı bağlantılarınızla oluşturun:

  ```json
  {
    "connections": [
      {
        "id": "mysql1",
        "type": "mysql",
        "host": "mysql1",
        "port": 3306,
        "name": "db1",
        "user": "user1",
        "password": "password1",
        "query_timeout": 60,
        "max_open_conns": 20,
        "max_idle_conns": 5,
        "conn_max_lifetime_seconds": 300,
        "conn_max_idle_time_seconds": 60
      },
      {
        "id": "postgres1",
        "type": "postgres",
        "host": "postgres1",
        "port": 5432,
        "name": "db1",
        "user": "user1",
        "password": "password1"
      },
      {
        "id": "sqlite_app",
        "type": "sqlite",
        "database_path": "./data/app.db",
        "journal_mode": "WAL",
        "cache_size": 2000,
        "read_only": false,
        "use_modernc_driver": true,
        "query_timeout": 30,
        "max_open_conns": 1,
        "max_idle_conns": 1
      },
      {
        "id": "sqlite_encrypted",
        "type": "sqlite",
        "database_path": "./data/secure.db",
        "encryption_key": "your-secret-key-here",
        "journal_mode": "WAL",
        "use_modernc_driver": false
      },
      {
        "id": "sqlite_memory",
        "type": "sqlite",
        "database_path": ":memory:",
        "cache_size": 1000,
        "use_modernc_driver": true
      }
    ]
  }
  ```

  ### Komut Satırı Seçenekleri

  ```bash
  # Temel söz dizimi
  ./bin/server -t <transport> -c <config-file>

  # SSE taşıma seçenekleri
  ./bin/server -t sse -host <hostname> -port <port> -c <config-file>

  # Lazy loading modu (10+ veritabanı için önerilir)
  ./bin/server -t stdio -c <config-file> --lazy-loading

  # Günlük dizinini özelleştir (çok projeli kurulumlar için yararlı)
  ./bin/server -t stdio -c <config-file> -log-dir /tmp/db-mcp-logs

  # Satır içi veritabanı yapılandırması
  ./bin/server -t stdio -db-config '{"connections":[...]}'

  # Ortam değişkeni yapılandırması
  export DB_CONFIG='{"connections":[...]}'
  ./bin/server -t stdio
  ```

  **Mevcut Bayraklar:**
  - `-t, -transport`: Taşıma modu (`stdio` veya `sse`)
  - `-c, -config`: Veritabanı yapılandırma dosyasının yolu
  - `-p, -port`: SSE modu için sunucu portu (varsayılan: 9092)
  - `-h, -host`: SSE modu için sunucu ana bilgisayarı (varsayılan: localhost)
  - `-log-level`: Günlük seviyesi (`debug`, `info`, `warn`, `error`)
  - `-log-dir`: Günlük dosyaları için dizin (varsayılan: `./logs` mevcut dizinde)
  - `-db-config`: Satır içi JSON veritabanı yapılandırması

  ## SQLite Yapılandırma Seçenekleri

  SQLite veritabanlarını kullanırken, şu ek yapılandırma seçeneklerinden yararlanabilirsiniz:

  ### SQLite Bağlantı Parametreleri

  | Parametre | Tür | Varsayılan | Açıklama |
  |-----------|------|---------|-------------|
  | `database_path` | string | Gerekli | SQLite veritabanı dosyasının yolu veya `:memory:` in-memory için |
  | `encryption_key` | string | - | SQLCipher şifreli veritabanları için anahtar |
  | `read_only` | boolean | false | Veritabanını salt okunur modunda aç |
  | `cache_size` | integer | 2000 | SQLite önbellek boyutu sayfalar cinsinden |
  | `journal_mode` | string | "WAL" | Günlük modu: DELETE, TRUNCATE, PERSIST, WAL, OFF |
  | `use_modernc_driver` | boolean | true | modernc.org/sqlite (CGO-free) veya mattn/go-sqlite3 kullan |

  ### SQLite Örnekleri

  #### Temel Dosya Veritabanı
  ```json
  {
    "id": "my_sqlite_db",
    "type": "sqlite",
    "database_path": "./data/myapp.db",
    "journal_mode": "WAL",
    "cache_size": 2000
  }
  ```

  #### Şifreli Veritabanı (SQLCipher)
  ```json
  {
    "id": "encrypted_db",
    "type": "sqlite",
    "database_path": "./data/secure.db",
    "encryption_key": "your-secret-encryption-key",
    "use_modernc_driver": false
  }
  ```

  #### In-Memory Veritabanı
  ```json
  {
    "id": "memory_db",
    "type": "sqlite",
    "database_path": ":memory:",
    "cache_size": 1000
  }
  ```

  #### Salt Okunur Veritabanı
  ```json
  {
    "id": "reference_data",
    "type": "sqlite",
    "database_path": "./data/reference.db",
    "read_only": true,
    "journal_mode": "DELETE"
  }
  ```

  ## Oracle Yapılandırma Seçenekleri

  Oracle veritabanlarını kullanırken, şu ek yapılandırma seçeneklerinden yararlanabilirsiniz:

  ### Oracle Bağlantı Parametreleri

  | Parametre | Tür | Varsayılan | Açıklama |
  |-----------|------|---------|-------------|
  | `host` | string | Gerekli | Oracle veritabanı ana bilgisayarı |
  | `port` | integer | 1521 | Oracle dinleyici portu |
  | `service_name` | string | - | Hizmet adı (RAC için önerilir) |
  | `sid` | string | - | Sistem tanımlayıcı (eski, bunun yerine service_name kullanın) |
  | `user` | string | Gerekli | Veritabanı kullanıcı adı |
  | `password` | string | Gerekli | Veritabanı şifresi |
  | `wallet_location` | string | - | Oracle Cloud wallet dizininin yolu |
  | `tns_admin` | string | - | tnsnames.ora içeren dizinin yolu |
  | `tns_entry` | string | - | tnsnames.ora dosyasındaki adlandırılmış giriş |
  | `edition` | string | - | Edition-Based Redefinition sürümü adı |
  | `pooling` | boolean | false | Sürücü seviyesi bağlantı havuzlamasını etkinleştir |
  | `standby_sessions` | boolean | false | Bekleme veritabanlarında sorgulara izin ver |
  | `nls_lang` | string | AMERICAN_AMERICA.AL32UTF8 | Karakter seti yapılandırması |

  ### Oracle Örnekleri

  #### Temel Oracle Bağlantısı (Geliştirme)
  ```json
  {
    "id": "oracle_dev",
    "type": "oracle",
    "host": "localhost",
    "port": 1521,
    "service_name": "XEPDB1",
    "user": "testuser",
    "password": "testpass",
    "max_open_conns": 50,
    "max_idle_conns": 10,
    "conn_max_lifetime_seconds": 1800
  }
  ```

  #### Oracle SID ile (Eski)
  ```json
  {
    "id": "oracle_legacy",
    "type": "oracle",
    "host": "oracledb.company.com",
    "port": 1521,
    "sid": "ORCL",
    "user": "app_user",
    "password": "app_password"
  }
  ```

  #### Oracle Cloud Otonom Veritabanı (Wallet ile)
  ```json
  {
    "id": "oracle_cloud",
    "type": "oracle",
    "user": "ADMIN",
    "password": "your-cloud-password",
    "wallet_location": "/path/to/wallet_DBNAME",
    "service_name": "dbname_high"
  }
  ```

  #### Oracle RAC (Real Application Clusters)
  ```json
  {
    "id": "oracle_rac",
    "type": "oracle",
    "host": "scan.company.com",
    "port": 1521,
    "service_name": "production",
    "user": "app_user",
    "password": "app_password",
    "max_open_conns": 100,
    "max_idle_conns": 20
  }
  ```

  #### Oracle TNS Girişi ile
  ```json
  {
    "id": "oracle_tns",
    "type": "oracle",
    "tns_admin": "/opt/oracle/network/admin",
    "tns_entry": "PROD_DB",
    "user": "app_user",
    "password": "app_password"
  }
  ```

  #### Oracle Edition-Based Redefinition ile
  ```json
  {
    "id": "oracle_ebr",
    "type": "oracle",
    "host": "oracledb.company.com",
    "port": 1521,
    "service_name": "production",
    "user": "app_user",
    "password": "app_password",
    "edition": "v2_0"
  }
  ```

  ### Oracle Bağlantı Dizesi Önceliği

  Birden fazla bağlantı yöntemi yapılandırıldığında, şu öncelik kullanılır:

  1. **TNS Girişi** (`tns_entry` ve `tns_admin` yapılandırıldıysa)
  2. **Wallet** (`wallet_location` yapılandırıldıysa) - Oracle Cloud için
  3. **Standart** (host:port/service_name) - varsayılan yöntem

  ## Mevcut Araçlar

  Bağlı her veritabanı için, DB MCP Server otomatik olarak şu özel araçları oluşturur:

  ### Sorgu Araçları

  | Tool Adı | Açıklama |
  |-----------|-------------|
  | `query_<db_id>` | SELECT sorguları yürüt ve sonuçları tablo veri seti olarak al |
  | `execute_<db_id>` | Veri manipülasyon ifadelerini çalıştır (INSERT, UPDATE, DELETE) |
  | `transaction_<db_id>` | İşlemleri başlat, bağla ve geri al |

  ### Şema Araçları

  | Tool Adı | Açıklama |
  |-----------|-------------|
  | `schema_<db_id>` | Tablolar, sütunlar, dizinler ve yabancı anahtarlar hakkında bilgi al |
  | `generate_schema_<db_id>` | Veritabanı şemasından SQL veya kod üret |

  ### Performans Araçları

  | Tool Adı | Açıklama |
  |-----------|-------------|
  | `performance_<db_id>` | Sorgu performansını analiz et ve optimizasyon önerileri al |

  ### TimescaleDB Araçları

  TimescaleDB uzantısına sahip PostgreSQL veritabanları için, şu ek özel araçlar mevcuttur:

  | Tool Adı | Açıklama |
  |-----------|-------------|
  | `timescaledb_<db_id>` | Genel TimescaleDB işlemlerini gerçekleştir |
  | `create_hypertable_<db_id>` | Standart tabloyu TimescaleDB hypertable'a dönüştür |
  | `list_hypertables_<db_id>` | Veritabanındaki tüm hypertable'ları listele |
  | `time_series_query_<db_id>` | Gruplama ile optimize edilmiş zaman serisi sorguları yürüt |
  | `time_series_analyze_<db_id>` | Zaman serisi veri düzenlerini analiz et |
  | `continuous_aggregate_<db_id>` | Otomatik olarak güncelleştirilen materyalleştirilmiş görünümler oluştur |
  | `refresh_continuous_aggregate_<db_id>` | Sürekli agregasyonları manuel olarak yenile |

  TimescaleDB araçları hakkında ayrıntılı dokümantasyon için bkz. [TIMESCALEDB_TOOLS.md](docs/TIMESCALEDB_TOOLS.md).

  ## Örnekler

  ### Birden Fazla Veritabanını Sorgulama

  ```sql
  -- MySQL veritabanını sorgula
  query_mysql1("SELECT * FROM users LIMIT 10")

  -- Aynı bağlamda PostgreSQL veritabanını sorgula
  query_postgres1("SELECT * FROM products WHERE price > 100")

  -- SQLite veritabanını sorgula
  query_sqlite_app("SELECT * FROM local_data WHERE created_at > datetime('now', '-1 day')")

  -- Oracle veritabanını sorgula
  query_oracle_dev("SELECT * FROM employees WHERE hire_date > SYSDATE - 30")
  ```

  ### İşlemleri Yönetme

  ```sql
  -- Bir işlem başlat
  transaction_mysql1("BEGIN")

  -- İşlem içinde ifadeleri yürüt
  execute_mysql1("INSERT INTO orders (customer_id, product_id) VALUES (1, 2)")
  execute_mysql1("UPDATE inventory SET stock = stock - 1 WHERE product_id = 2")

  -- Bağla veya geri al
  transaction_mysql1("COMMIT")
  -- VEYA
  transaction_mysql1("ROLLBACK")
  ```

  ### Veritabanı Şemasını Keşfetme

  ```sql
  -- Veritabanındaki tüm tabloları al
  schema_mysql1("tables")

  -- Belirli bir tablo için sütunları al
  schema_mysql1("columns", "users")

  -- Kısıtlamaları al
  schema_mysql1("constraints", "orders")
  ```

  ### SQLite'a Özgü Özellikleri Kullanma

  ```sql
  -- SQLite'da bir tablo oluştur
  execute_sqlite_app("CREATE TABLE IF NOT EXISTS local_cache (key TEXT PRIMARY KEY, value TEXT, timestamp DATETIME)")

  -- SQLite'a özgü tarih işlevlerini kullan
  query_sqlite_app("SELECT * FROM events WHERE date(created_at) = date('now')")

  -- Şema bilgileri için SQLite master tablosunu sorgula
  query_sqlite_app("SELECT name, sql FROM sqlite_master WHERE type='table' AND name NOT LIKE 'sqlite_%'")

  -- WAL modu ile performans optimizasyonu
  execute_sqlite_app("PRAGMA journal_mode = WAL")
  execute_sqlite_app("PRAGMA synchronous = NORMAL")
  ```

  ### Oracle'a Özgü Özellikleri Kullanma

  ```sql
  -- Kullanıcı tablolarını sorgula (sistem şemalarını hariç tutar)
  query_oracle_dev("SELECT table_name FROM user_tables ORDER BY table_name")

  -- Oracle'a özgü tarih işlevlerini kullan
  query_oracle_dev("SELECT employee_id, hire_date FROM employees WHERE hire_date >= TRUNC(SYSDATE, 'YEAR')")

  -- Oracle sequence işlemleri
  execute_oracle_dev("CREATE SEQUENCE emp_seq START WITH 1000 INCREMENT BY 1")
  query_oracle_dev("SELECT emp_seq.NEXTVAL FROM DUAL")

  -- Oracle'a özgü veri türleri
  query_oracle_dev("SELECT order_id, TO_CHAR(order_date, 'YYYY-MM-DD HH24:MI:SS') FROM orders")

  -- Oracle data dictionary'sinden şema metaverilerini al
  query_oracle_dev("SELECT column_name, data_type, nullable FROM user_tab_columns WHERE table_name = 'EMPLOYEES'")

  -- Oracle analitik işlevlerini kullan
  query_oracle_dev("SELECT employee_id, salary, RANK() OVER (ORDER BY salary DESC) as salary_rank FROM employees")
  ```

  ## Sorun Giderme

  ### Yaygın Sorunlar

  - **Bağlantı Hataları**: Ağ bağlantısı ve veritabanı kimlik bilgilerini doğrulayın
  - **İzin Hataları**: Veritabanı kullanıcısının uygun izinlere sahip olduğundan emin olun
  - **Zaman Aşımı Sorunları**: Yapılandırmanızda `query_timeout` ayarını kontrol edin

  ### Günlükler

  Sorun giderme için ayrıntılı günlüğü etkinleştirin:

  ```bash
  ./bin/server -t sse -c config.json -v
  ```

  ## Test

  ### Testleri Çalıştırma

  Proje, desteklenen tüm veritabanları için kapsamlı birim ve entegrasyon testleri içerir.

  #### Birim Testleri

  Birim testlerini çalıştırın (veritabanı gerekli değildir):

  ```bash
  make test
  # veya
  go test -short ./...
  ```

  #### Entegrasyon Testleri

  Entegrasyon testleri çalışan veritabanı örneklerini gerektirir. Kolay kurulum için Docker Compose yapılandırmaları sağlıyoruz.

  **Tüm Veritabanlarını Test Et:**

  ```bash
  # Test veritabanlarını başlat
  docker-compose -f docker-compose.test.yml up -d

  # Tüm entegrasyon testlerini çalıştır
  go test ./... -v

  # Test veritabanlarını durdur
  docker-compose -f docker-compose.test.yml down -v
  ```

  **Oracle Veritabanını Test Et:**

  ```bash
  # Oracle test ortamını başlat
  ./oracle-test.sh start

  # Oracle testlerini çalıştır
  ./oracle-test.sh test
  # veya manuel olarak
  ORACLE_TEST_HOST=localhost go test -v ./pkg/db -run TestOracle
  ORACLE_TEST_HOST=localhost go test -v ./pkg/dbtools -run TestOracle

  # Oracle test ortamını durdur
  ./oracle-test.sh stop

  # Tam temizlik (hacimleri kaldırır)
  ./oracle-test.sh cleanup
  ```

  **TimescaleDB'yi Test Et:**

  ```bash
  # TimescaleDB test ortamını başlat
  ./timescaledb-test.sh start

  # TimescaleDB testlerini çalıştır
  TIMESCALEDB_TEST_HOST=localhost go test -v ./pkg/db/timescale ./internal/delivery/mcp

  # TimescaleDB test ortamını durdur
  ./timescaledb-test.sh stop
  ```

  #### Regresyon Testleri

  Tüm veritabanı türleri arasında kapsamlı regresyon testleri çalıştırın:

  ```bash
  # Tüm test veritabanlarının çalıştığından emin olun
  docker-compose -f docker-compose.test.yml up -d
  ./oracle-test.sh start

  # Regresyon testlerini çalıştır
  MYSQL_TEST_HOST=localhost \
  POSTGRES_TEST_HOST=localhost \
  ORACLE_TEST_HOST=localhost \
  go test -v ./pkg/db -run TestRegression

  # Bağlantı havuzu testlerini çalıştır
  go test -v ./pkg/db -run TestConnectionPooling
  ```

  ### Sürekli Entegrasyon

  Tüm testler her pull request üzerinde GitHub Actions aracılığıyla otomatik olarak çalıştırılır. CI hattı şunları içerir:

  - **Bi
---

<div align="center">



# Multi Database MCP Server

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Go Report Card](https://goreportcard.com/badge/github.com/FreePeak/db-mcp-server)](https://goreportcard.com/report/github.com/FreePeak/db-mcp-server)
[![Go Reference](https://pkg.go.dev/badge/github.com/FreePeak/db-mcp-server.svg)](https://pkg.go.dev/github.com/FreePeak/db-mcp-server)
[![Contributors](https://img.shields.io/github/contributors/FreePeak/db-mcp-server)](https://github.com/FreePeak/db-mcp-server/graphs/contributors)

<h3>A powerful multi-database server implementing the Model Context Protocol (MCP) to provide AI assistants with structured access to databases.</h3>

<div class="toc">
  <a href="#overview">Overview</a> •
  <a href="#core-concepts">Core Concepts</a> •
  <a href="#features">Features</a> •
  <a href="#supported-databases">Supported Databases</a> •
  <a href="#deployment-options">Deployment Options</a> •
  <a href="#configuration">Configuration</a> •
  <a href="#available-tools">Available Tools</a> •
  <a href="#examples">Examples</a> •
  <a href="#troubleshooting">Troubleshooting</a> •
  <a href="#contributing">Contributing</a>
</div>

</div>

## Overview

The DB MCP Server provides a standardized way for AI models to interact with multiple databases simultaneously. Built on the [FreePeak/cortex](https://github.com/FreePeak/cortex) framework, it enables AI assistants to execute SQL queries, manage transactions, explore schemas, and analyze performance across different database systems through a unified interface.

## Core Concepts

### Multi-Database Support

Unlike traditional database connectors, DB MCP Server can connect to and interact with multiple databases concurrently:

```json
{
  "connections": [
    {
      "id": "mysql1",
      "type": "mysql",
      "host": "localhost",
      "port": 3306,
      "name": "db1",
      "user": "user1",
      "password": "password1"
    },
    {
      "id": "postgres1",
      "type": "postgres",
      "host": "localhost",
      "port": 5432,
      "name": "db2",
      "user": "user2",
      "password": "password2"
    },
    {
      "id": "oracle1",
      "type": "oracle",
      "host": "localhost",
      "port": 1521,
      "service_name": "XEPDB1",
      "user": "user3",
      "password": "password3"
    }
  ]
}
```

### Dynamic Tool Generation

For each connected database, the server automatically generates specialized tools:

```go
// For a database with ID "mysql1", these tools are generated:
query_mysql1       // Execute SQL queries
execute_mysql1     // Run data modification statements
transaction_mysql1 // Manage transactions
schema_mysql1      // Explore database schema
performance_mysql1 // Analyze query performance
```

### Clean Architecture

The server follows Clean Architecture principles with these layers:

1. **Domain Layer**: Core business entities and interfaces
2. **Repository Layer**: Data access implementations
3. **Use Case Layer**: Application business logic
4. **Delivery Layer**: External interfaces (MCP tools)

## Features

- **Simultaneous Multi-Database Support**: Connect to multiple MySQL, PostgreSQL, SQLite, and Oracle databases concurrently
- **Lazy Loading Mode**: Defer connection establishment until first use - perfect for setups with 10+ databases (enable with `--lazy-loading` flag)
- **Database-Specific Tool Generation**: Auto-creates specialized tools for each connected database
- **Clean Architecture**: Modular design with clear separation of concerns
- **OpenAI Agents SDK Compatibility**: Full compatibility for seamless AI assistant integration
- **Dynamic Database Tools**: Execute queries, run statements, manage transactions, explore schemas, analyze performance
- **Unified Interface**: Consistent interaction patterns across different database types
- **Connection Management**: Simple configuration for multiple database connections
- **Health Check**: Automatic validation of database connectivity on startup

## Supported Databases

| Database   | Status                    | Features                                                     |
| ---------- | ------------------------- | ------------------------------------------------------------ |
| MySQL      | ✅ Full Support           | Queries, Transactions, Schema Analysis, Performance Insights |
| PostgreSQL | ✅ Full Support (v9.6-17) | Queries, Transactions, Schema Analysis, Performance Insights |
| SQLite     | ✅ Full Support           | File-based & In-memory databases, SQLCipher encryption support |
| Oracle     | ✅ Full Support (10g-23c) | Queries, Transactions, Schema Analysis, RAC, Cloud Wallet, TNS |
| TimescaleDB| ✅ Full Support           | Hypertables, Time-Series Queries, Continuous Aggregates, Compression, Retention Policies |

## Deployment Options

The DB MCP Server can be deployed in multiple ways to suit different environments and integration needs:

### Docker Deployment

```bash
# Pull the latest image
docker pull freepeak/db-mcp-server:latest

# Run with mounted config file
docker run -p 9092:9092 \
  -v $(pwd)/config.json:/app/my-config.json \
  -e TRANSPORT_MODE=sse \
  -e CONFIG_PATH=/app/my-config.json \
  freepeak/db-mcp-server
```

> **Note**: Mount to `/app/my-config.json` as the container has a default file at `/app/config.json`.

### STDIO Mode (IDE Integration)

```bash
# Run the server in STDIO mode
./bin/server -t stdio -c config.json
```

For Cursor IDE integration, add to `.cursor/mcp.json`:

```json
{
  "mcpServers": {
    "stdio-db-mcp-server": {
      "command": "/path/to/db-mcp-server/server",
      "args": ["-t", "stdio", "-c", "/path/to/config.json"]
    }
  }
}
```

### SSE Mode (Server-Sent Events)

```bash
# Default configuration (localhost:9092)
./bin/server -t sse -c config.json

# Custom host and port
./bin/server -t sse -host 0.0.0.0 -port 8080 -c config.json
```

Client connection endpoint: `http://localhost:9092/sse`

### Source Code Installation

```bash
# Clone the repository
git clone https://github.com/FreePeak/db-mcp-server.git
cd db-mcp-server

# Build the server
make build

# Run the server
./bin/server -t sse -c config.json
```

## Configuration

### Database Configuration File

Create a `config.json` file with your database connections:

```json
{
  "connections": [
    {
      "id": "mysql1",
      "type": "mysql",
      "host": "mysql1",
      "port": 3306,
      "name": "db1",
      "user": "user1",
      "password": "password1",
      "query_timeout": 60,
      "max_open_conns": 20,
      "max_idle_conns": 5,
      "conn_max_lifetime_seconds": 300,
      "conn_max_idle_time_seconds": 60
    },
    {
      "id": "postgres1",
      "type": "postgres",
      "host": "postgres1",
      "port": 5432,
      "name": "db1",
      "user": "user1",
      "password": "password1"
    },
    {
      "id": "sqlite_app",
      "type": "sqlite",
      "database_path": "./data/app.db",
      "journal_mode": "WAL",
      "cache_size": 2000,
      "read_only": false,
      "use_modernc_driver": true,
      "query_timeout": 30,
      "max_open_conns": 1,
      "max_idle_conns": 1
    },
    {
      "id": "sqlite_encrypted",
      "type": "sqlite",
      "database_path": "./data/secure.db",
      "encryption_key": "your-secret-key-here",
      "journal_mode": "WAL",
      "use_modernc_driver": false
    },
    {
      "id": "sqlite_memory",
      "type": "sqlite",
      "database_path": ":memory:",
      "cache_size": 1000,
      "use_modernc_driver": true
    }
  ]
}
```

### Command-Line Options

```bash
# Basic syntax
./bin/server -t <transport> -c <config-file>

# SSE transport options
./bin/server -t sse -host <hostname> -port <port> -c <config-file>

# Lazy loading mode (recommended for 10+ databases)
./bin/server -t stdio -c <config-file> --lazy-loading

# Customize log directory (useful for multi-project setups)
./bin/server -t stdio -c <config-file> -log-dir /tmp/db-mcp-logs

# Inline database configuration
./bin/server -t stdio -db-config '{"connections":[...]}'

# Environment variable configuration
export DB_CONFIG='{"connections":[...]}'
./bin/server -t stdio
```

**Available Flags:**
- `-t, -transport`: Transport mode (`stdio` or `sse`)
- `-c, -config`: Path to database configuration file
- `-p, -port`: Server port for SSE mode (default: 9092)
- `-h, -host`: Server host for SSE mode (default: localhost)
- `-log-level`: Log level (`debug`, `info`, `warn`, `error`)
- `-log-dir`: Directory for log files (default: `./logs` in current directory)
- `-db-config`: Inline JSON database configuration

## SQLite Configuration Options

When using SQLite databases, you can leverage these additional configuration options:

### SQLite Connection Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `database_path` | string | Required | Path to SQLite database file or `:memory:` for in-memory |
| `encryption_key` | string | - | Key for SQLCipher encrypted databases |
| `read_only` | boolean | false | Open database in read-only mode |
| `cache_size` | integer | 2000 | SQLite cache size in pages |
| `journal_mode` | string | "WAL" | Journal mode: DELETE, TRUNCATE, PERSIST, WAL, OFF |
| `use_modernc_driver` | boolean | true | Use modernc.org/sqlite (CGO-free) or mattn/go-sqlite3 |

### SQLite Examples

#### Basic File Database
```json
{
  "id": "my_sqlite_db",
  "type": "sqlite",
  "database_path": "./data/myapp.db",
  "journal_mode": "WAL",
  "cache_size": 2000
}
```

#### Encrypted Database (SQLCipher)
```json
{
  "id": "encrypted_db",
  "type": "sqlite",
  "database_path": "./data/secure.db",
  "encryption_key": "your-secret-encryption-key",
  "use_modernc_driver": false
}
```

#### In-Memory Database
```json
{
  "id": "memory_db",
  "type": "sqlite",
  "database_path": ":memory:",
  "cache_size": 1000
}
```

#### Read-Only Database
```json
{
  "id": "reference_data",
  "type": "sqlite",
  "database_path": "./data/reference.db",
  "read_only": true,
  "journal_mode": "DELETE"
}
```

## Oracle Configuration Options

When using Oracle databases, you can leverage these additional configuration options:

### Oracle Connection Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `host` | string | Required | Oracle database host |
| `port` | integer | 1521 | Oracle listener port |
| `service_name` | string | - | Service name (recommended for RAC) |
| `sid` | string | - | System identifier (legacy, use service_name instead) |
| `user` | string | Required | Database username |
| `password` | string | Required | Database password |
| `wallet_location` | string | - | Path to Oracle Cloud wallet directory |
| `tns_admin` | string | - | Path to directory containing tnsnames.ora |
| `tns_entry` | string | - | Named entry from tnsnames.ora |
| `edition` | string | - | Edition-Based Redefinition edition name |
| `pooling` | boolean | false | Enable driver-level connection pooling |
| `standby_sessions` | boolean | false | Allow queries on standby databases |
| `nls_lang` | string | AMERICAN_AMERICA.AL32UTF8 | Character set configuration |

### Oracle Examples

#### Basic Oracle Connection (Development)
```json
{
  "id": "oracle_dev",
  "type": "oracle",
  "host": "localhost",
  "port": 1521,
  "service_name": "XEPDB1",
  "user": "testuser",
  "password": "testpass",
  "max_open_conns": 50,
  "max_idle_conns": 10,
  "conn_max_lifetime_seconds": 1800
}
```

#### Oracle with SID (Legacy)
```json
{
  "id": "oracle_legacy",
  "type": "oracle",
  "host": "oracledb.company.com",
  "port": 1521,
  "sid": "ORCL",
  "user": "app_user",
  "password": "app_password"
}
```

#### Oracle Cloud Autonomous Database (with Wallet)
```json
{
  "id": "oracle_cloud",
  "type": "oracle",
  "user": "ADMIN",
  "password": "your-cloud-password",
  "wallet_location": "/path/to/wallet_DBNAME",
  "service_name": "dbname_high"
}
```

#### Oracle RAC (Real Application Clusters)
```json
{
  "id": "oracle_rac",
  "type": "oracle",
  "host": "scan.company.com",
  "port": 1521,
  "service_name": "production",
  "user": "app_user",
  "password": "app_password",
  "max_open_conns": 100,
  "max_idle_conns": 20
}
```

#### Oracle with TNS Entry
```json
{
  "id": "oracle_tns",
  "type": "oracle",
  "tns_admin": "/opt/oracle/network/admin",
  "tns_entry": "PROD_DB",
  "user": "app_user",
  "password": "app_password"
}
```

#### Oracle with Edition-Based Redefinition
```json
{
  "id": "oracle_ebr",
  "type": "oracle",
  "host": "oracledb.company.com",
  "port": 1521,
  "service_name": "production",
  "user": "app_user",
  "password": "app_password",
  "edition": "v2_0"
}
```

### Oracle Connection String Priority

When multiple connection methods are configured, the following priority is used:

1. **TNS Entry** (if `tns_entry` and `tns_admin` are configured)
2. **Wallet** (if `wallet_location` is configured) - for Oracle Cloud
3. **Standard** (host:port/service_name) - default method

## Available Tools

For each connected database, DB MCP Server automatically generates these specialized tools:

### Query Tools

| Tool Name | Description |
|-----------|-------------|
| `query_<db_id>` | Execute SELECT queries and get results as a tabular dataset |
| `execute_<db_id>` | Run data manipulation statements (INSERT, UPDATE, DELETE) |
| `transaction_<db_id>` | Begin, commit, and rollback transactions |

### Schema Tools

| Tool Name | Description |
|-----------|-------------|
| `schema_<db_id>` | Get information about tables, columns, indexes, and foreign keys |
| `generate_schema_<db_id>` | Generate SQL or code from database schema |

### Performance Tools

| Tool Name | Description |
|-----------|-------------|
| `performance_<db_id>` | Analyze query performance and get optimization suggestions |

### TimescaleDB Tools

For PostgreSQL databases with TimescaleDB extension, these additional specialized tools are available:

| Tool Name | Description |
|-----------|-------------|
| `timescaledb_<db_id>` | Perform general TimescaleDB operations |
| `create_hypertable_<db_id>` | Convert a standard table to a TimescaleDB hypertable |
| `list_hypertables_<db_id>` | List all hypertables in the database |
| `time_series_query_<db_id>` | Execute optimized time-series queries with bucketing |
| `time_series_analyze_<db_id>` | Analyze time-series data patterns |
| `continuous_aggregate_<db_id>` | Create materialized views that automatically update |
| `refresh_continuous_aggregate_<db_id>` | Manually refresh continuous aggregates |

For detailed documentation on TimescaleDB tools, see [TIMESCALEDB_TOOLS.md](docs/TIMESCALEDB_TOOLS.md).

## Examples

### Querying Multiple Databases

```sql
-- Query the MySQL database
query_mysql1("SELECT * FROM users LIMIT 10")

-- Query the PostgreSQL database in the same context
query_postgres1("SELECT * FROM products WHERE price > 100")

-- Query the SQLite database
query_sqlite_app("SELECT * FROM local_data WHERE created_at > datetime('now', '-1 day')")

-- Query the Oracle database
query_oracle_dev("SELECT * FROM employees WHERE hire_date > SYSDATE - 30")
```

### Managing Transactions

```sql
-- Start a transaction
transaction_mysql1("BEGIN")

-- Execute statements within the transaction
execute_mysql1("INSERT INTO orders (customer_id, product_id) VALUES (1, 2)")
execute_mysql1("UPDATE inventory SET stock = stock - 1 WHERE product_id = 2")

-- Commit or rollback
transaction_mysql1("COMMIT")
-- OR
transaction_mysql1("ROLLBACK")
```

### Exploring Database Schema

```sql
-- Get all tables in the database
schema_mysql1("tables")

-- Get columns for a specific table
schema_mysql1("columns", "users")

-- Get constraints
schema_mysql1("constraints", "orders")
```

### Working with SQLite-Specific Features

```sql
-- Create a table in SQLite
execute_sqlite_app("CREATE TABLE IF NOT EXISTS local_cache (key TEXT PRIMARY KEY, value TEXT, timestamp DATETIME)")

-- Use SQLite-specific date functions
query_sqlite_app("SELECT * FROM events WHERE date(created_at) = date('now')")

-- Query SQLite master table for schema information
query_sqlite_app("SELECT name, sql FROM sqlite_master WHERE type='table' AND name NOT LIKE 'sqlite_%'")

-- Performance optimization with WAL mode
execute_sqlite_app("PRAGMA journal_mode = WAL")
execute_sqlite_app("PRAGMA synchronous = NORMAL")
```

### Working with Oracle-Specific Features

```sql
-- Query user tables (excludes system schemas)
query_oracle_dev("SELECT table_name FROM user_tables ORDER BY table_name")

-- Use Oracle-specific date functions
query_oracle_dev("SELECT employee_id, hire_date FROM employees WHERE hire_date >= TRUNC(SYSDATE, 'YEAR')")

-- Oracle sequence operations
execute_oracle_dev("CREATE SEQUENCE emp_seq START WITH 1000 INCREMENT BY 1")
query_oracle_dev("SELECT emp_seq.NEXTVAL FROM DUAL")

-- Oracle-specific data types
query_oracle_dev("SELECT order_id, TO_CHAR(order_date, 'YYYY-MM-DD HH24:MI:SS') FROM orders")

-- Get schema metadata from Oracle data dictionary
query_oracle_dev("SELECT column_name, data_type, nullable FROM user_tab_columns WHERE table_name = 'EMPLOYEES'")

-- Use Oracle analytic functions
query_oracle_dev("SELECT employee_id, salary, RANK() OVER (ORDER BY salary DESC) as salary_rank FROM employees")
```

## Troubleshooting

### Common Issues

- **Connection Failures**: Verify network connectivity and database credentials
- **Permission Errors**: Ensure the database user has appropriate permissions
- **Timeout Issues**: Check the `query_timeout` setting in your configuration

### Logs

Enable verbose logging for troubleshooting:

```bash
./bin/server -t sse -c config.json -v
```

## Testing

### Running Tests

The project includes comprehensive unit and integration tests for all supported databases.

#### Unit Tests

Run unit tests (no database required):

```bash
make test
# or
go test -short ./...
```

#### Integration Tests

Integration tests require running database instances. We provide Docker Compose configurations for easy setup.

**Test All Databases:**

```bash
# Start test databases
docker-compose -f docker-compose.test.yml up -d

# Run all integration tests
go test ./... -v

# Stop test databases
docker-compose -f docker-compose.test.yml down -v
```

**Test Oracle Database:**

```bash
# Start Oracle test environment
./oracle-test.sh start

# Run Oracle tests
./oracle-test.sh test
# or manually
ORACLE_TEST_HOST=localhost go test -v ./pkg/db -run TestOracle
ORACLE_TEST_HOST=localhost go test -v ./pkg/dbtools -run TestOracle

# Stop Oracle test environment
./oracle-test.sh stop

# Full cleanup (removes volumes)
./oracle-test.sh cleanup
```

**Test TimescaleDB:**

```bash
# Start TimescaleDB test environment
./timescaledb-test.sh start

# Run TimescaleDB tests
TIMESCALEDB_TEST_HOST=localhost go test -v ./pkg/db/timescale ./internal/delivery/mcp

# Stop TimescaleDB test environment
./timescaledb-test.sh stop
```

#### Regression Tests

Run comprehensive regression tests across all database types:

```bash
# Ensure all test databases are running
docker-compose -f docker-compose.test.yml up -d
./oracle-test.sh start

# Run regression tests
MYSQL_TEST_HOST=localhost \
POSTGRES_TEST_HOST=localhost \
ORACLE_TEST_HOST=localhost \
go test -v ./pkg/db -run TestRegression

# Run connection pooling tests
go test -v ./pkg/db -run TestConnectionPooling
```

### Continuous Integration

All tests run automatically on every pull request via GitHub Actions. The CI pipeline includes:

- **Unit Tests**: Fast tests that don't require database connections
- **Integration Tests**: Tests against MySQL, PostgreSQL, SQLite, and Oracle databases
- **Regression Tests**: Comprehensive tests ensuring backward compatibility
- **Linting**: Code quality checks with golangci-lint

## Contributing

We welcome contributions to the DB MCP Server project! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Please see our [CONTRIBUTING.md](docs/CONTRIBUTING.md) file for detailed guidelines.

### Testing Your Changes

Before submitting a pull request, please ensure:

1. All unit tests pass: `go test -short ./...`
2. Integration tests pass for affected databases
3. Code follows the project's style guidelines: `golangci-lint run ./...`
4. New features include appropriate test coverage

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
