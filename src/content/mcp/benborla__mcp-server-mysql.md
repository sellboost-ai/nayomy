---
name: "benborla/mcp-server-mysql"
description: "MySQL database integration in NodeJS with configurable access controls and schema inspection"
description_tr: "NodeJS'de MySQL veritabanı entegrasyonu, yapılandırılabilir erişim kontrolleri ve schema incelemesi özellikleri ile sağlanır."
category: "Databases"
repo: "benborla/mcp-server-mysql"
stars: 1855
url: "https://github.com/benborla/mcp-server-mysql"
body_length: 2976
license: "MIT"
language: "JavaScript"
body_tr: |-
  # MySQL için MCP Server - Claude Code Sürümü
  
  > **🚀 SSH tunnel desteği ile Claude Code için optimize edilmiş değiştirilmiş sürüm**  
  > **Orijinal Yazar:** [@benborla29](https://github.com/benborla)  
  > **Orijinal Repository:** [https://github.com/benborla/mcp-server-mysql](https://github.com/benborla/mcp-server-mysql)  
  > **Lisans:** MIT  
  
  ## NodeJS Tabanlı MySQL için MCP Server
  
  [![Trust Score](https://archestra.ai/mcp-catalog/api/badge/quality/benborla/mcp-server-mysql)](https://archestra.ai/mcp-catalog/benborla__mcp-server-mysql)
  
  ### Bu Fork'un Temel Özellikleri
  
  - ✅ **Claude Code Entegrasyonu** - Anthropic'in Claude Code CLI'si ile kullanım için optimize edilmiş
  - ✅ **SSH Tunnel Desteği** - Uzak veritabanlarına yönelik yerleşik SSH tunnel desteği
  - ✅ **Auto-start/stop Hooks** - Claude start/stop ile otomatik tunnel yönetimi
  - ✅ **DDL İşlemleri** - CREATE TABLE desteği için `MYSQL_DISABLE_READ_ONLY_TRANSACTIONS` eklendi
  - ✅ **Multi-Project Kurulumu** - Farklı veritabanlarla birden fazla proje için kolay konfigürasyon
  
  ### Claude Code Kullanıcıları için Hızlı Başlangıç
  
  1. **Setup Rehberini Okuyun**: Ayrıntılı talimatlar için [PROJECT_SETUP_GUIDE.md](https://github.com/benborla/mcp-server-mysql/blob/HEAD/PROJECT_SETUP_GUIDE.md) dosyasını inceleyin
  2. **SSH Tunnel'larını Yapılandırın**: Uzak veritabanları için otomatik SSH tunnel'larını ayarlayın
  3. **Claude ile Kullanın**: Entegre MCP server Claude Code ile sorunsuz çalışır
  
  Model Context Protocol server'ı SSH tunnel'ları aracılığıyla MySQL veritabanlarına erişim sağlar. Bu server Claude ve diğer LLM'lerin veritabanı şemalarını incelemesine ve SQL sorguları güvenli bir şekilde çalıştırmasına olanak tanır.
  
  ## İçindekiler
  
  - [Gereksinimler](#gereksinimler)
  - [Kurulum](#kurulum)
    - [Smithery](#smithery-kullanarak)
    - [Yerel Repository'ye Klonlama](#yerel-repositoryden-çalıştırma)
    - [Uzak mod](#uzak-modda-çalıştırma)
  - [Bileşenler](#bileşenler)
  - [Konfigürasyon](#konfigürasyon)
  - [Environment Variables](#environment-variables)
  - [Multi-DB Modu](#multi-db-modu)
  - [Schema-Specific Permissions](#schema-specific-permissions)
  - [Test](#test)
  - [Sorun Giderme](#sorun-giderme)
  - [Katkı Sağlama](#katkı-sağlama)
  - [Lisans](#lisans)
  
  ## Gereksinimler
  
  - Node.js v20 veya üstü
  - MySQL 5.7 veya üstü (MySQL 8.0+ önerilir)
  - İhtiyaç duyduğunuz işlemler için uygun izinlere sahip MySQL kullanıcısı
  - Yazma işlemleri için: INSERT, UPDATE ve/veya DELETE ayrıcalıklarına sahip MySQL kullanıcısı
  
  ## Kurulum
  
  ### Smithery Kullanarak
  
  MCP server'ı kurmanın ve yapılandırmanın birkaç yolu vardır, ancak en yaygın olanı bu website'i ziyaret etmek olacaktır: [https://smithery.ai/server/@benborla29/mcp-server-mysql](https://smithery.ai/server/@benborla29/mcp-server-mysql)
  
  ### Cursor
  
  Cursor IDE için bu MCP server'ını projenizde aşağıdaki komutla kurabilirsiniz:
  
  1. [https://smithery.ai/server/@benborla29/mcp-server-mysql](https://smithery.ai/server/@benborla29/mcp-server-mysql) sayfasını ziyaret edin
  2. Cursor'a yönelik talimatları izleyin
  
  MCP Get, MCP server'larının merkezi bir registry'sini sağlar ve kurulum işlemini basitleştirir.
  
  ### Codex CLI
  
  Codex CLI kurulumu aşağıdaki Claude Code'a benzerdir
  
  ```bash
  codex mcp add mcp_server_mysql \
    --env MYSQL_HOST="127.0.0.1" \
    --env MYSQL_PORT="3306" \
    --env MYSQL_USER="root" \
    --env MYSQL_PASS="your_password" \
    --env MYSQL_DB="your_database" \
    --env ALLOW_INSERT_OPERATION="false" \
    --env ALLOW_UPDATE_OPERATION="false" \
    --env ALLOW_DELETE_OPERATION="false" \
    -- npx -y @benborla29/mcp-server-mysql
  ```
  
  ### Claude Code
  
  #### Seçenek 1: Claude Desktop'tan İçe Aktarma (Zaten yapılandırılmışsa önerilir)
  
  Bu MCP server'ını Claude Desktop'ta zaten yapılandırılmışsa, otomatik olarak içe aktarabilirsiniz:
  
  ```bash
  claude mcp add-from-claude-desktop
  ```
  
  Bu, yapılandırılan `mcp_server_mysql` server'ını tüm mevcut konfigürasyonla seçebileceğiniz etkileşimli bir dialog gösterecektir.
  
  #### Seçenek 2: Manuel Yapılandırma
  
  **NPM/PNPM Global Kurulumu Kullanarak:**
  
  Öncelikle paketi global olarak kurun:
  
  ```bash
  # npm kullanarak
  npm install -g @benborla29/mcp-server-mysql
  
  # pnpm kullanarak
  pnpm add -g @benborla29/mcp-server-mysql
  ```
  
  Ardından server'ı Claude Code'a ekleyin:
  
  ```bash
  claude mcp add mcp_server_mysql \
    -e MYSQL_HOST="127.0.0.1" \
    -e MYSQL_PORT="3306" \
    -e MYSQL_USER="root" \
    -e MYSQL_PASS="your_password" \
    -e MYSQL_DB="your_database" \
    -e ALLOW_INSERT_OPERATION="false" \
    -e ALLOW_UPDATE_OPERATION="false" \
    -e ALLOW_DELETE_OPERATION="false" \
    -- npx @benborla29/mcp-server-mysql
  ```
  
  **Yerel Repository Kullanarak (geliştirme için):**
  
  Klonlanmış bir repository'den çalıştırıyorsanız:
  
  ```bash
  claude mcp add mcp_server_mysql \
    -e MYSQL_HOST="127.0.0.1" \
    -e MYSQL_PORT="3306" \
    -e MYSQL_USER="root" \
    -e MYSQL_PASS="your_password" \
    -e MYSQL_DB="your_database" \
    -e ALLOW_INSERT_OPERATION="false" \
    -e ALLOW_UPDATE_OPERATION="false" \
    -e ALLOW_DELETE_OPERATION="false" \
    -e PATH="/path/to/node/bin:/usr/bin:/bin" \
    -e NODE_PATH="/path/to/node/lib/node_modules" \
    -- /path/to/node /full/path/to/mcp-server-mysql/dist/index.js
  ```
  
  Aşağıdakileri değiştirin:
  
  - `/path/to/node` yerine Node.js binary dosyasının yolu (`which node` ile bulun)
  - `/full/path/to/mcp-server-mysql` yerine klonladığınız repository'nin tam yolu
  - MySQL kimlik bilgilerini ortamınıza uygun şekilde güncelleyin
  
  **Unix Socket Bağlantısı Kullanarak:**
  
  Unix socket'ler kullanarak yerel MySQL örnekleri için:
  
  ```bash
  claude mcp add mcp_server_mysql \
    -e MYSQL_SOCKET_PATH="/tmp/mysql.sock" \
    -e MYSQL_USER="root" \
    -e MYSQL_PASS="your_password" \
    -e MYSQL_DB="your_database" \
    -e ALLOW_INSERT_OPERATION="false" \
    -e ALLOW_UPDATE_OPERATION="false" \
    -e ALLOW_DELETE_OPERATION="false" \
    -- npx @benborla29/mcp-server-mysql
  ```
  
  #### Doğru Scope'u Seçme
  
  İhtiyaçlarınıza bağlı olarak hangi scope'u kullanacağınızı göz önünde bulundurun:
  
  ```bash
  # Yerel scope (varsayılan) - yalnızca geçerli projede mevcut
  claude mcp add mcp_server_mysql [options...]
  
  # Kullanıcı scope'u - tüm projelerinizde mevcut
  claude mcp add mcp_server_mysql -s user [options...]
  
  # Proje scope'u - .mcp.json aracılığıyla takım üyeleriyle paylaşılır
  claude mcp add mcp_server_mysql -s project [options...]
  ```
  
  Kimlik bilgileri olan veritabanı server'ları için, kimlik bilgilerini özel tutmak amacıyla **yerel** veya **kullanıcı** scope'u önerilir.
  
  #### Doğrulama
  
  Server'ı ekledikten sonra, düzgün yapılandırıldığını doğrulayın:
  
  ```bash
  # Yapılandırılan tüm server'ları listele
  claude mcp list
  
  # MySQL server'ınız için ayrıntıları al
  claude mcp get mcp_server_mysql
  
  # Claude Code içinde server durumunu kontrol et
  /mcp
  ```
  
  #### Multi-Database Yapılandırması
  
  Multi-database modu için `MYSQL_DB` environment variable'ını atlayın:
  
  ```bash
  claude mcp add mcp_server_mysql_multi \
    -e MYSQL_HOST="127.0.0.1" \
    -e MYSQL_PORT="3306" \
    -e MYSQL_USER="root" \
    -e MYSQL_PASS="your_password" \
    -e MULTI_DB_WRITE_MODE="false" \
    -- npx @benborla29/mcp-server-mysql
  ```
  
  #### Gelişmiş Yapılandırma
  
  Gelişmiş özellikler için ek environment variable'lar ekleyin:
  
  ```bash
  claude mcp add mcp_server_mysql \
    -e MYSQL_HOST="127.0.0.1" \
    -e MYSQL_PORT="3306" \
    -e MYSQL_USER="root" \
    -e MYSQL_PASS="your_password" \
    -e MYSQL_DB="your_database" \
    -e MYSQL_POOL_SIZE="10" \
    -e MYSQL_QUERY_TIMEOUT="30000" \
    -e MYSQL_CACHE_TTL="60000" \
    -e MYSQL_RATE_LIMIT="100" \
    -e MYSQL_SSL="true" \
    -e ALLOW_INSERT_OPERATION="false" \
    -e ALLOW_UPDATE_OPERATION="false" \
    -e ALLOW_DELETE_OPERATION="false" \
    -e MYSQL_ENABLE_LOGGING="true" \
    -- npx @benborla29/mcp-server-mysql
  ```
  
  #### Claude Code Setup Sorun Giderme
  
  1. **Server Bağlantı Sorunları**: Server durumunu kontrol etmek ve gerekirse kimlik doğrulamak için Claude Code'da `/mcp` komutunu kullanın.
  
  2. **Path Sorunları**: Yerel repository kullanıyorsanız, Node.js path'lerinin doğru ayarlandığından emin olun:
  
     ```bash
     # Node.js path'inizi bulun
     which node
  
     # PATH environment variable'ı için
     echo "$(which node)/../"
  
     # NODE_PATH environment variable'ı için
     echo "$(which node)/../../lib/node_modules"
     ```
  
  3. **Permission Hataları**: MySQL kullanıcınızın etkinleştirdiğiniz işlemler için uygun izinlere sahip olduğundan emin olun.
  
  4. **Server Başlamıyor**: Claude Code log'larını kontrol edin veya sorun gidermek için server'ı doğrudan çalıştırın:
  
     ```bash
     # Server'ı doğrudan test et
     npx @benborla29/mcp-server-mysql
     ```
  
  ### NPM/PNPM Kullanarak
  
  Manuel kurulum için:
  
  ```bash
  # npm kullanarak
  npm install -g @benborla29/mcp-server-mysql
  
  # pnpm kullanarak
  pnpm add -g @benborla29/mcp-server-mysql
  ```
  
  Manuel kurulumdan sonra, LLM uygulamanızı MCP server'ını kullanacak şekilde yapılandırmanız gerekecektir (aşağıdaki Konfigürasyon bölümüne bakın).
  
  ### Yerel Repository'den Çalıştırma
  
  MCP server'ını kaynak kodundan doğrudan klonlamak ve çalıştırmak istiyorsanız, aşağıdaki adımları izleyin:
  
  1. **Repository'yi klonlayın**
  
     ```bash
     git clone https://github.com/benborla/mcp-server-mysql.git
     cd mcp-server-mysql
     ```
  
  2. **Bağımlılıkları kurun**
  
     ```bash
     npm install
     # veya
     pnpm install
     ```
  
  3. **Projeyi derleyin**
  
     ```bash
     npm run build
     # veya
     pnpm run build
     ```
  
  4. **Claude Desktop'ı yapılandırın**
  
     Claude Desktop konfigürasyon dosyanıza (`claude_desktop_config.json`) aşağıdakileri ekleyin:
  
     ```json
     {
       "mcpServers": {
         "mcp_server_mysql": {
           "command": "/path/to/node",
           "args": [
             "/full/path/to/mcp-server-mysql/dist/index.js"
           ],
           "env": {
             "MYSQL_HOST": "127.0.0.1",
             "MYSQL_PORT": "3306",
             "MYSQL_USER": "root",
             "MYSQL_PASS": "your_password",
             "MYSQL_DB": "your_database",
             "ALLOW_INSERT_OPERATION": "false",
             "ALLOW_UPDATE_OPERATION": "false",
             "ALLOW_DELETE_OPERATION": "false",
             "PATH": "/path/to/node/bin:/usr/bin:/bin", // <--- Aşağıdakini eklemeyi unutmayın, terminalinizde `echo "$(which node)/../"` komutunu çalıştırarak path'i alın
             "NODE_PATH": "/path/to/node/lib/node_modules" // <--- Aşağıdakini eklemeyi unutmayın, terminalinizde `echo "$(which node)/../../lib/node_modules"` komutunu çalıştırarak path'i alın
           }
         }
       }
     }
     ```
  
     Aşağıdakileri değiştirin:
     - `/path/to/node` yerine Node.js binary dosyasının tam yolu (`which node` ile bulun)
     - `/full/path/to/mcp-server-mysql` yerine klonladığınız repository'nin tam yolu
     - MySQL kimlik bilgilerini ortamınıza uygun şekilde ayarlayın
  
  5. **Server'ı test edin**
  
     ```bash
     # Server'ı doğrudan çalıştırarak test et
     node dist/index.js
     ```
  
     MySQL'e başarıyla bağlanırsa, Claude Desktop'ta kullanmaya hazırsınız.
  
  ### Uzak Modda Çalıştırma
  
  Uzak modda çalıştırmak için, npx script'ine [environment variables](https://github.com/benborla/mcp-server-mysql?tab=readme-ov-file#environment-variables) sağlamanız gerekecektir.
  
  1. Tercih ettiğiniz dizinde env dosyası oluşturun
  
     ```bash
     # .env dosyası oluştur
     touch .env
     ```
  
  2. Bu repository'deki [örnek dosyayı](https://github.com/benborla/mcp-server-mysql/blob/main/.env) kopyala-yapıştır yapın
  3. MySQL kimlik bilgilerini ortamınıza uygun şekilde ayarlayın
  4. `IS_REMOTE_MCP=true` olarak ayarlayın
  5. `REMOTE_SECRET_KEY` değerini güvenli bir string olarak ayarlayın
  6. Gerekirse özel `PORT` sağlayın. Varsayılan 3000'dir.
  7. Değişkenleri geçerli oturuma yükleyin:
  
     ```bash
     source .env
     ```
  
  8. Server'ı çalıştırın
  
     ```bash
     npx @benborla29/mcp-server-mysql
     ```
  
  9. Agent'ınızı MCP'ye aşağıdaki yapılandırmayla bağlanacak şekilde yapılandırın:
  
     ```json
     {
       "mcpServers": {
         "mysql": {
           "url": "http://your-host:3000/mcp",
           "type": "streamableHttp",
           "headers": {
             "Authorization": "Bearer <REMOTE_SECRET_KEY>"
           }
         }
       }
     }
     ```
  
  ## Bileşenler
  
  ### Tools
  
  - **mysql_query**
    - Bağlı veritabanına karşı SQL sorguları çalıştır
    - Input: `sql` (string): Çalıştırılacak SQL sorgusu
    - Varsayılan olarak, SALT OKUNUR işlemlerle sınırlıdır
    - İsteğe bağlı yazma işlemleri (konfigürasyon yoluyla etkinleştirildiğinde):
      - INSERT: Tablolara yeni veri ekle (`ALLOW_INSERT_OPERATION=true` gerektirir)
      - UPDATE: Mevcut verileri değiştir (`ALLOW_UPDATE_OPERATION=true` gerektirir)
      - DELETE: Veri sil (`ALLOW_DELETE_OPERATION=true` gerektirir)
    - Tüm işlemler uygun commit/rollback işleme ile bir transaction içinde yürütülür
    - Güvenli parametre işleme için prepared statement'ları destekler
    - Yapılandırılabilir query timeout'ları ve sonuç pagination'ı
    - Yerleşik query yürütme istatistikleri
  
  ### Resources
  
  Server kapsamlı veritabanı bilgisi sağlar:
  
  - **Table Şemaları**
    - Her tablo için JSON şema bilgisi
    - Sütun adları ve veri türleri
    - İndex bilgisi ve constraint'ler
    - Yabancı anahtar ilişkileri
    - Tablo istatistikleri ve metrikler
    - Veritabanı metadata'sından otomatik olarak keşfedilmiştir
  
  ### Güvenlik Özellikleri
  
  - Prepared statement'lar aracılığıyla SQL injection önleme
  - Query whitelist/blacklist yeteneği
  - Query yürütme için rate limiting
  - Query complexity analizi
  - Yapılandırılabilir bağlantı şifreleme
  - Salt-okunur transaction uygulanması
  
  ### Performance Optimizasyonları
  
  - Optimize edilmiş bağlantı pooling
  - Query sonuç caching'i
  - Büyük sonuç seti akışı
  - Query execution plan analizi
  - Yapılandırılabilir query timeout'ları
  
  ### Monitoring ve Debugging
  
  - Kapsamlı query logging
  - Performance metrik'leri toplama
  - Error tracking ve reporting
  - Health check endpoint'leri
  - Query yürütme istatistikleri
  
  ## Konfigürasyon
  
  ### Smithery ile Otomatik Konfigürasyon
  
  Smithery kullanarak kurulum yaptıysanız, yapılandırmanız zaten hazırdır. Bunu aşağıdaki komutla görüntüleyebilir veya değiştirebilirsiniz:
  
  ```bash
  smithery configure @benborla29/mcp-server-mysql
  ```
  
  Yeniden yapılandırırken, MySQL bağlantı ayrıntılarının yanı sıra yazma işlemi ayarlarından herhangi birini güncelleyebilirsiniz:
  
  - **Temel bağlantı ayarları**:
    - MySQL Host, Port, User, Password, Database
    - SSL/TLS yapılandırması (veritabanınız güvenli bağlantı gerektiriyorsa)
  
  - **Yazma işlemi izinleri**:
    - INSERT İşlemlerine İzin Ver: Yeni veri eklemeye izin vermek istiyorsanız true olarak ayarlayın
    - UPDATE İşlemlerine İzin Ver: Mevcut verileri güncelleye izin vermek istiyorsanız true olarak ayarlayın
    - DELETE İşlemlerine İzin Ver: Verileri silmeye izin vermek istiyorsanız true olarak ayarlayın
  
  Güvenlik nedenleriyle, tüm yazma işlemleri varsayılan olarak devre dışıdır. Claude'un veritabanı verilerinizi değiştirmesine ihtiyaç duyarsanız, bu ayarları etkinleştirin.
  
  ### Gelişmiş Konfigürasyon Seçenekleri
  
  MCP server'ının davranışı üzerinde daha fazla kontrol için bu gelişmiş yapılandırma seçeneklerini kullanabilirsiniz:
  
  ```json
  {
    "mcpServers": {
      "mcp_server_mysql": {
        "command": "/path/to/npx/binary/npx",
        "args": [
          "-y",
          "@benborla29/mcp-server-mysql"
        ],
        "env": {
          // Temel bağlantı ayarları
          "MYSQL_HOST": "127.0.0.1",
          "MYSQL_PORT": "3306",
          "MYSQL_USER": "root",
          "MYSQL_PASS": "",
          "MYSQL_DB": "db_name",
          "PATH": "/path/to/node/bin:/usr/bin:/bin",
  
          // Performance ayarları
          "MYSQL_POOL_SIZE": "10",
          "MYSQL_QUERY_TIMEOUT": "30000",
          "MYSQL_CACHE_TTL": "60000",
  
          // Güvenlik ayarları
          "MYSQL_RATE_LIMIT": "100",
          "MYSQL_MAX_QUERY_COMPLEXITY": "1000",
          "MYSQL_SSL": "true",
  
          // Monitoring ayarları
          "ENABLE_LOGGING": "true",
          "MYSQL_LOG_LEVEL": "info",
          "MYSQL_METRICS_ENABLED": "true",
  
          // Yazma işlemi flag'leri
          "ALLOW_INSERT_OPERATION": "false",
          "ALLOW_UPDATE_OPERATION": "false",
          "ALLOW_DELETE_OPERATION": "false"
        }
      }
    }
  }
  ```
  
  ## Environment Variables
  
  ### Temel Bağlantı
  
  - `MYSQL_SOCKET_PATH`: Yerel bağlantılar için Unix socket path'i (örn. "/tmp/mysql.sock")
  - `MYSQL_HOST`: MySQL server host'u (varsayılan: "127.0.0.1") - MYSQL_SOCKET_PATH ayarlanmışsa yoksayılır
  - `MYSQL_PORT`: MySQL server port'u (varsayılan: "3306") - MYSQL_SOCKET_PATH ayarlanmışsa yoksayılır
  - `MYSQL_USER`: MySQL kullanıcı adı (varsayılan: "root")
  - `MYSQL_PASS`: MySQL şifresi
  - `MYSQL_DB`: Hedef veritabanı adı (multi-DB modu için boş bırakın)
  
  #### Alternatif: Bağlantı String'i
  
  Sık kimlik bilgisi rotasyonu veya geçici bağlantılar gerektiren senaryolar için, bireysel environment variable'lar yerine MySQL bağlantı string'i kullanabilirsiniz:
  
  - `MYSQL_CONNECTION_STRING`: MySQL CLI biçiminde bağlantı string'i (örn. `mysql --default-auth=mysql_native_password -A -hHOST -PPORT -uUSER -pPASS database_name`)
  
  `MYSQL_CONNECTION_STRING` sağlandığında, bireysel bağlantı ayarlarından öncelikli olur. Bu özellikle aşağıdakiler için yararlıdır:
  
  - Sık sık süresi dolan kimlik bilgilerinin rotasyonu
  - Geçici veritabanı bağlantıları
  - Farklı veritabanı yapılandırmalarıyla hızlı test
  
  **Not:** Güvenlik için, bu yalnızca environment variable'lar aracılığıyla ayarlanmalı, version kontrol altındaki yapılandırma dosyalarında saklanmamalıdır. Süresi dolan kimlik bilgileri için Claude Code'un MCP yapılandırmasındaki `prompt` input türünü kullanmayı düşünün.
  
  ### Performance Yapılandırması
  
  - `MYSQL_POOL_SIZE`: Bağlantı pool boyutu (varsayılan: "10")
  - `MYSQL_QUERY_TIMEOUT`: Query timeout'ı milisaniye cinsinden (varsayılan: "30000")
  - `MYSQL_CACHE_TTL`: Cache time-to-live milisaniye cinsinden (varsayılan: "60000")
  - `MYSQL_QUEUE_LIMIT`: Sıralanan maksimum bağlantı isteği sayısı (varsayılan: "100")
  - `MYSQL_CONNECT_TIMEOUT`: Bağlantı timeout'ı milisaniye cinsinden (varsayılan: "10000")
  
  ### Güvenlik Yapılandırması
  
  - `MYSQL_RATE_LIMIT`: Dakikada maksimum query sayısı (varsayılan: "100")
  - `MYSQL_MAX_QUERY_COMPLEXITY`: Maksimum query complexity skoru (varsayılan: "1000")
  - `MYSQL_SSL`: SSL/TLS şifreleme etkinleştir (varsayılan: "false")
  - `MYSQL_SSL_CA`: SSL CA certificate dosyasının yolu (PEM biçimi). Yalnızca `MYSQL_SSL=true` olduğunda kullanılır. Kendi imzalı sertifika'lar veya özel CA'ları olan MySQL örneklerine bağlanmak için gereklidir.
  - `MYSQL_SSL_CERT`: mTLS için client certificate dosyasının yolu (PEM biçimi). Yalnızca `MYSQL_SSL=true` olduğunda kullanılır. Hem server hem de client'ın sertifika sunduğu karşılıklı TLS (mTLS) kimlik doğrulamayı etkinleştirir. Bazı veritabanı yapılandırmaları tarafından gerekli olabilir.
  - `MYSQL_SSL_KEY`: mTLS için client private key dosyasının yolu (PEM biçimi). Yalnızca `MYSQL_SSL=true` olduğunda kullanılır. `MYSQL_SSL_CERT` tarafından belirtilen sertifikaya karşılık gelmelidir.
  - `ALLOW_INSERT_OPERATION`: INSERT işlemlerini etkinleştir (varsayılan: "false")
  - `ALLOW_UPDATE_OPERATION`: UPDATE işlemlerini etkinleştir (varsayılan: "false")
  - `ALLOW_DELETE_OPERATION`: DELETE işlemlerini etkinleştir (varsayılan: "false")
  - `ALLOW_DDL_OPERATION`: DDL işlemlerini etkinleştir (varsayılan: "false")
  - `MYSQL_DISABLE_READ_ONLY_TRANSACTIONS`: **[YENİ]** Salt-okunur transaction uygulanmasını devre dışı bırak (varsayılan: "false") ⚠️ **Güvenlik Uyarısı:** Yalnızca tam yazma yeteneğine ihtiyacınız varsa ve LLM'yi veritabanınıza güveniyorsanız etkinleştirin
  - `SCHEMA_INSERT_PERMISSIONS`: Schema'ya özel INSERT izinleri
  - `SCHEMA_UPDATE_PERMISSIONS`: Schema'ya özel UPDATE izinleri
  - `SCHEMA_DELETE_PERMISSIONS`: Schema'ya özel DELETE izinleri
  - `SCHEMA_DDL_PERMISSIONS`: Schema'ya özel DDL izinleri
  - `MULTI_DB_WRITE_MODE`: Multi-DB modunda yazma işlemlerini etkinleştir (varsayılan: "false")
  
  ### Timezone ve Date Yapılandırması
  
  - `MYSQL_TIMEZONE`: Tarih/saat değerleri için timezone ayarlayın. `+08:00` (UTC+8), `-05:00` (UTC-5), `Z` (UTC) veya `local` (sistem timezone'u) gibi biçimleri kabul eder. Farklı server konumlarında tutarlı tarih/saat işleme için kullanışlıdır.
  - `MYSQL_DATE_STRINGS`: `"true"` olarak ayarlandığında, tarih/datetime değerlerini JavaScript Date nesneleri yerine string olarak döndürür. Bu, timezone dönüşümü
---

# MCP Server for MySQL

[![Trust Score](https://archestra.ai/mcp-catalog/api/badge/quality/benborla/mcp-server-mysql)](https://archestra.ai/mcp-catalog/benborla__mcp-server-mysql)

MCP server that gives Claude and other LLMs access to MySQL — inspect schemas, run queries, and optionally write data, all through the Model Context Protocol.

## Key Features

- **Read-only by default** — write operations opt-in via env flags
- **Claude Code integration** — optimized for Anthropic's Claude Code CLI
- **SSH tunnel support** — built-in support for remote databases
- **Multi-DB mode** — query across multiple databases without reconnecting
- **Schema-specific permissions** — per-database read/write control
- **PII redaction** — automatic masking of sensitive data in results
- **Remote mode** — HTTP transport with bearer token auth
- **SSL/TLS support** — encrypted connections with mTLS option

## Requirements

- Node.js v20+
- MySQL 5.7+ (8.0+ recommended)
- MySQL user with appropriate privileges

## Quick Install

**Claude Code (simplest):**

```bash
claude mcp add mcp_server_mysql \
  -e MYSQL_HOST="127.0.0.1" \
  -e MYSQL_PORT="3306" \
  -e MYSQL_USER="root" \
  -e MYSQL_PASS="your_password" \
  -e MYSQL_DB="your_database" \
  -- npx @benborla29/mcp-server-mysql
```

**Claude Desktop / other clients:**

```json
{
  "mcpServers": {
    "mcp_server_mysql": {
      "command": "npx",
      "args": ["-y", "@benborla29/mcp-server-mysql"],
      "env": {
        "MYSQL_HOST": "127.0.0.1",
        "MYSQL_PORT": "3306",
        "MYSQL_USER": "root",
        "MYSQL_PASS": "your_password",
        "MYSQL_DB": "your_database"
      }
    }
  }
}
```

All write operations are disabled by default. Enable with `ALLOW_INSERT_OPERATION=true`, `ALLOW_UPDATE_OPERATION=true`, `ALLOW_DELETE_OPERATION=true`.

## Documentation

- [Installation Guide](https://github.com/benborla/mcp-server-mysql/blob/HEAD/docs/INSTALLATION.md) — Smithery, Cursor, Codex, Claude Code, local repo, remote mode
- [Configuration & Environment Variables](https://github.com/benborla/mcp-server-mysql/blob/HEAD/docs/CONFIGURATION.md) — all env vars, advanced config
- [Multi-DB Mode](https://github.com/benborla/mcp-server-mysql/blob/HEAD/README-MULTI-DB.md) — querying multiple databases
- [PII Redaction](https://github.com/benborla/mcp-server-mysql/blob/HEAD/docs/PII-REDACTION.md) — automatic data masking
- [Testing](https://github.com/benborla/mcp-server-mysql/blob/HEAD/docs/TESTING.md) — test setup and running
- [Troubleshooting](https://github.com/benborla/mcp-server-mysql/blob/HEAD/docs/TROUBLESHOOTING.md) — common issues and fixes
- [Changelog](https://github.com/benborla/mcp-server-mysql/blob/HEAD/CHANGELOG.md)

## Tools & Resources

**Tool: `mysql_query`**
Execute SQL queries. Read-only by default. Write operations enabled per flag.

**Resources: `mysql://tables`**
Lists all tables and column metadata for the connected database.

## Contributing

PRs welcome at [github.com/benborla/mcp-server-mysql](https://github.com/benborla/mcp-server-mysql).

```bash
git clone https://github.com/benborla/mcp-server-mysql.git
pnpm install
pnpm run build
pnpm test
```

[![Contributors](https://contrib.rocks/image?repo=benborla/mcp-server-mysql)](https://github.com/benborla/mcp-server-mysql/graphs/contributors)

## License

MIT — see [LICENSE](https://github.com/benborla/mcp-server-mysql/tree/HEAD/LICENSE) for details.
