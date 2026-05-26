---
name: "confluentinc/mcp-confluent"
description: "Confluent integration to interact with Confluent Kafka and Confluent Cloud REST APIs."
description_tr: "Confluent Kafka ve Confluent Cloud REST API'leriyle etkileşim kurmanıza olanak tanıyan Confluent entegrasyonu."
category: "Databases"
repo: "confluentinc/mcp-confluent"
stars: 156
url: "https://github.com/confluentinc/mcp-confluent"
body_length: 27150
license: "MIT"
language: "TypeScript"
body_tr: |-
  # Confluent MCP Server

  [![npm version](https://img.shields.io/npm/v/@confluentinc/mcp-confluent.svg)](https://www.npmjs.com/package/@confluentinc/mcp-confluent)
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

  Yapay zeka asistanlarının Confluent Cloud, Confluent Platform ve bağımsız Apache Kafka dağıtımlarıyla doğal dil aracılığıyla etkileşime girmesini sağlayan açık kaynaklı bir [MCP sunucusu](https://modelcontextprotocol.io/).
  Kafka, Flink SQL, Schema Registry, Connectors, Tableflow ve daha fazlası arasında 50+ araç sağlar -- Claude Desktop, Claude Code, Cursor, VS Code, Goose ve Gemini CLI dahil olmak üzere herhangi bir MCP uyumlu istemcisinden kullanılabilir.

  ## Hızlı Başlangıç

  > **Ön Koşullar:** [Node.js 22+](https://nodejs.org/).
  > [Confluent Cloud](https://confluent.cloud/) ile etkileşim kurmak istiyorsanız, önce bir hesap oluşturmanız gerekir.

  1. Proje kökünüzde hızlı bir `config.yaml` dosyası oluşturun:

  ```bash
  npx @confluentinc/mcp-confluent --init-config
  ```

  2. `config.yaml` dosyasını bağlantı detaylarınızla düzenleyin, ardından:

  ```bash
  npx @confluentinc/mcp-confluent --config ./config.yaml
  ```

  Tam kurulum talimatları için [Getting Started](#getting-started) bölümüne ve tercih ettiğiniz AI aracıyla entegrasyon için [Configuring MCP Clients](#configuring-mcp-clients) bölümüne bakın.

  ## İçindekiler

  - [Hızlı Başlangıç](#hızlı-başlangıç)
  - [Mevcut Araçlar](#mevcut-araçlar)
    - [Her Zaman Mevcut](#her-zaman-mevcut-araçlar)
    - [Confluent Cloud](#confluent-cloud-için-mevcut-araçlar)
    - [Yerel dağıtımlar](#yerel-dağıtımlar-için-mevcut-araçlar)
  - [Getting Started](#getting-started)
  - [Konfigürasyon](#konfigürasyon)
  - [Confluent Cloud için OAuth Kimlik Doğrulaması](#confluent-cloud-için-oauth-kimlik-doğrulaması)
  - [CLI Kullanımı](#cli-kullanımı)
  - [MCP İstemcilerini Yapılandırma](#mcp-istemcilerini-yapılandırma)
  - [Telemetri](#telemetri)
  - [Sorun Giderme](#sorun-giderme)
  - [Katkıda Bulunma](#katkıda-bulunma)

  ## Mevcut Araçlar

  Araçlar, çözümlenen konfigürasyonunuzda hangi hizmet bloklarının mevcut olduğuna göre otomatik olarak etkinleştirilir; tam blok-araç eşlemesi için [CONFIGURATION.md](CONFIGURATION.md#tool-enablement-which-block-lights-up-what) bölümüne bakın.

  Tüm mevcut araçları CLI aracılığıyla listeleyebilirsiniz:

  ```bash
  npx -y @confluentinc/mcp-confluent --list-tools
  ```

  ### Her Zaman Mevcut Araçlar

  Bu araçlar hizmet bloklarına veya kimlik doğrulamaya ihtiyaç yoktur -- yapılandırmanızın geri kalanı hangi dağıtımı hedefse hedeflesin, boş bir konfigürasyon üzerinde bile etkinleştirilirler.

  | Kategori          | Araçlar                                       | Açıklama                                               |
  | ----------------- | --------------------------------------------- | ------------------------------------------------------ |
  | **Dokumentasyon** | `search-product-docs`, `get-product-doc-page` | Confluent ürün dokları arayın ve tam sayfa içeriği alın |
  | **Tanılama**      | `explain-disabled-tools`                      | Belirli araçların neden `tools/list`'te olmadığını açıklayın |

  ### Confluent Cloud için Mevcut Araçlar

  Bu araçlar, belirli Confluent Cloud bileşenlerine karşı endpoint ve kimlik doğrulamayı gerektirir.
  Tam konfigürasyon değişkenleri seti için [`config.example.yaml`](config.example.yaml) dosyasına bakın.
  ¹ ile işaretlenen kategoriler ayrıca [OAuth kimlik doğrulaması](#confluent-cloud-için-oauth-kimlik-doğrulaması) ile de çalışır -- API anahtarlarını sağlamak yerine tarayıcınız aracılığıyla oturum açın.

  | Kategori                                     | Araçlar                                                                                                                                                                                                         | Açıklama                                                                                |
  | -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
  | **Kafka** ¹                                  | `list-topics`, `create-topics`, `delete-topics`, `produce-message`, `consume-messages`, `list-consumer-groups`, `describe-consumer-group`, `get-consumer-group-lag`, `alter-topic-config`, `get-topic-config` | Konuları yönetin, mesaj üretin/tüketin, consumer gruplarını inceleyin, konu ayarlarını yapılandırın |
  | **Flink SQL**                                | `create-flink-statement`, `list-flink-statements`, `read-flink-statement`, `delete-flink-statements`, `get-flink-statement-exceptions`                                                                        | Flink SQL ifadeleri oluşturun ve yönetin                                                |
  | **Flink Catalog**                            | `list-flink-catalogs`, `list-flink-databases`, `list-flink-tables`, `describe-flink-table`, `get-flink-table-info`                                                                                            | Flink katalogları, veritabanları ve tablo şemalarını keşfedin                           |
  | **Flink Tanılama**                           | `check-flink-statement-health`, `detect-flink-statement-issues`, `get-flink-statement-profile`                                                                                                                | Sağlık kontrolleri, sorun algılama ve sorgu profili oluşturma                           |
  | **Connectors**                               | `list-connectors`, `read-connector`, `create-connector`, `delete-connector`                                                                                                                                   | Kafka Connect connectorlarını yönetin                                                   |
  | **Schema Registry** ¹                        | `list-schemas`, `delete-schema`                                                                                                                                                                               | Veri şemalarını listeleyin, inceleyin ve silin                                          |
  | **Catalog & Etiketler**                      | `search-topics-by-tag`, `search-topics-by-name`, `create-topic-tags`, `delete-tag`, `remove-tag-from-entity`, `add-tags-to-topic`, `list-tags`                                                                | Etiketleri kullanarak konuları düzenleyin ve arayın                                    |
  | **Organizasyonlar, Ortamlar & Kümeler** ¹   | `list-organizations`, `list-environments`, `read-environment`, `list-clusters`                                                                                                                                | Confluent Cloud kaynaklarını keşfedin                                                   |
  | **Tableflow**                                | `create-tableflow-topic`, `list-tableflow-topics`, `read-tableflow-topic`, `update-tableflow-topic`, `delete-tableflow-topic`, `list-tableflow-regions`                                                       | Tableflow özellikli konuları yönetin                                                    |
  | **Tableflow Catalog**                        | `create-tableflow-catalog-integration`, `list-tableflow-catalog-integrations`, `read-tableflow-catalog-integration`, `update-tableflow-catalog-integration`, `delete-tableflow-catalog-integration`           | Tableflow catalog entegrasyonlarını yönetin (ör. AWS Glue)                              |
  | **Metrikler**                                | `list-available-metrics`, `query-metrics`                                                                                                                                                                     | Confluent Cloud operasyonel metriklerini keşfedin ve sorgulayın                        |
  | **Faturalandırma** ¹                         | `list-billing-costs`                                                                                                                                                                                          | Faturalandırma ve maliyet verilerini sorgulayın                                         |

  ¹ OAuth altında da mevcuttur -- kurulum ve uyarılar için [Confluent Cloud için OAuth Kimlik Doğrulaması](#confluent-cloud-için-oauth-kimlik-doğrulaması) bölümüne bakın.
  İşaretlenmemiş kategoriler şu anda statik API anahtarları ile `direct` bağlantı gerektirir; OAuth geçişi devam etmektedir.

  ### Yerel Dağıtımlar için Mevcut Araçlar

  Bu araçlar yalnızca Kafka veya Schema Registry endpoint'lerine ihtiyaç duyar - Confluent Cloud API anahtarı/gizli anahtarı gerekli değildir.
  Confluent Platform dahil olmak üzere kendi kendini yöneten kümeler ile yerel geliştirme için idealdir.

  ```yaml
  # yerel geliştirme için minimal config.yaml
  connections:
    local:
      type: direct
      kafka:
        bootstrap_servers: "localhost:9092"
      schema_registry:
        endpoint: "http://localhost:8081"
  ```

  Kullanıma hazır varyantlar [`sample_configs/`](sample_configs/) dizininde bulunur.

  | Kategori            | Araçlar                                                                                                                                                               | Açıklama                                                      |
  | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
  | **Kafka**           | `list-topics`, `create-topics`, `delete-topics`, `produce-message`, `consume-messages`, `list-consumer-groups`, `describe-consumer-group`, `get-consumer-group-lag` | Konuları yönetin, mesaj üretin/tüketin, consumer gruplarını inceleyin |
  | **Schema Registry** | `list-schemas`, `delete-schema`                                                                                                                                     | Veri şemalarını listeleyin, inceleyin ve silin               |

  ## Getting Started

  ### Ön Koşullar

  - **Node.js 22 veya üzeri** -- sürümleri yönetmek için [NVM](https://github.com/nvm-sh/nvm) kullanmanızı öneririz:
    ```bash
    nvm install 22
    nvm use 22
    ```
  - Kafka veya Schema Registry çalışan bir yerel ortam veya [OAuth kullanarak kimlik doğrulaması yaparken](#confluent-cloud-için-oauth-kimlik-doğrulaması) uygun API anahtarları veya giriş kimlik bilgileri ile bir **Confluent Cloud** hesabı.

  ### Genel Kurulum Adımları

  Bu MCP sunucusu, Claude Desktop, Copilot veya Goose CLI/Desktop gibi çeşitli MCP istemcileri ile kullanılmak üzere tasarlanmıştır.
  Belirli konfigürasyon ve etkileşim, kullandığınız istemciye bağlıdır.

  MCP sunucusu, yapılandırma dosyasında tanımlanan statik API anahtarlarına ek olarak **OAuth (PKCE)** aracılığıyla Confluent Cloud'a kimlik doğrulaması yapabilir.
  Daha fazla bilgi için [Confluent Cloud için OAuth Kimlik Doğrulaması](#confluent-cloud-için-oauth-kimlik-doğrulaması) bölümüne bakın.

  Genel kurulum adımları (OAuth kullanmıyorsanız) ve bu MCP'yi çalıştırma:

  1. **Konfigürasyon dosyası oluşturun:** Sağlanan [`config.yaml` örneğini](https://github.com/confluentinc/mcp-confluent/blob/main/config.example.yaml) projenizin köküne kopyalayın.
     CLI'yı kullanarak geçerli dizininizde bir tane oluşturabilirsiniz -- git checkout gerekli değildir:

  ```bash
  npx @confluentinc/mcp-confluent --init-config
  ```

  2. **Dosyayı doldurun:** Confluent Cloud ortamınız için gerekli değerleri girin.
     Tam referans için [CONFIGURATION.md](CONFIGURATION.md) bölümüne bakın; yalnızca ihtiyaç duyduğunuz hizmet bloklarını doldurun (her biri araç grubu etkinleştirir).

  3. **Sunucuyu Başlatın:** MCP sunucusunu iki şekilde çalıştırabilirsiniz:
     - **Kaynaktan:** Sunucuyu kaynaktan oluşturmak ve çalıştırmak için [Katkıda Bulunma Rehberi](CONTRIBUTING.md) talimatlarını izleyin.
       Bu genellikle şunları içerir:
       - Bağımlılıkları yükleme (`npm install`)
       - Projeyi oluşturma (`npm run build` veya `npm run dev`)
     - **npx ile:** npx kullanarak sunucuyu doğrudan başlatabilirsiniz, derleme gerekli değildir:

       ```bash
       npx @confluentinc/mcp-confluent --config /path/to/myconfig.yaml
       ```

  4. **MCP İstemcinizi Yapılandırın:** Her istemcinin (örneğin Claude, Goose) MCP sunucusunun adresini ve gerekli kimlik bilgilerini belirtmenin kendi yöntemi olacaktır.
     İstemcinizi, bu sunucunun çalıştığı adrese bağlanacak şekilde [yapılandırmanız](#mcp-istemcilerini-yapılandırma) gerekecektir (muhtemelen belirli bir port ile `localhost`).
     Sunucunun çalıştığı port `config.yaml` dosyasında `server.http.port` aracılığıyla ayarlanır.

  5. **MCP İstemcinizi Başlatın:** İstemciniz MCP sunucusuna bağlanacak şekilde yapılandırıldıktan sonra, MCP istemcinizi başlatabilir ve başlangıçta bu MCP sunucusunun yerel bir örneğini kurabilir.
     Bu örnek, veri şemalarını yönetmek ve kaynaklar ile etkileşime girmek için sorumlu olacaktır.

  6. **Kaynakları İstemci Aracılığıyla Yönetin:** İstemci bağlandıktan ve yapılandırıldıktan sonra, Confluent Cloud veya yerel kaynakları yönetmek için istemcinin arayüzünü kullanabilirsiniz.
     İstemci bu MCP sunucusuna istek gönderecek, sunucu da sizin adınıza mevcut bağlantılar ile etkileşime girecektir.

  ## Konfigürasyon

  Tam konfigürasyon referansı -- YAML şeması, her hizmet bloğu, env-var interpolasyonu, OAuth ve HTTP/SSE auth kurulumu, (kullanımdan kaldırılan) eski env-var tablosu ve araç-blok eşlemesi -- [CONFIGURATION.md](CONFIGURATION.md) dosyasında bulunur.

  > **Uyumluluk notu.** Bu sürüm, tek bir bağlantı için YAML (`-c config.yaml`) ve eski env-var yolu (`-e config.env`) arasında tam pariteyi içerir.
  > Env-var yolu, yakın gelecekte bir sürümde başlangıç uyarısı yayınlayacak ve bir-iki sürüm sonra kaldırılacaktır.
  > Multi-bağlantı desteği (sonraki sürüm) yalnızca YAML olacaktır.
  > [CONFIGURATION.md → Two paths, one configuration](CONFIGURATION.md#two-paths-one-configuration) bölümüne bakın.

  ### Tableflow Komutları için Ön Koşullar ve Kurulum

  Tableflow araçları, Confluent Cloud'daki Flink runtime aracılığıyla sizin adınıza bulut depolama (ör. AWS S3) ve metadata catalog (ör. AWS Glue) ile etkileşime girer.
  Flink runtime'ı bulut hesabınızda IAM izinlerine ihtiyaç duyar ve bu izinler, herhangi bir Tableflow aracının başarılı olmasından önce Confluent Cloud'a verilmeli ve bağlanmalıdır.

  Rolleri, politikaları ve sağlayıcı entegrasyonlarını kurmak için **[Tableflow quick start with custom storage & Glue](https://docs.confluent.io/cloud/current/topics/tableflow/get-started/quick-start-custom-storage-glue.html)** bölümünü izleyin.
  Bu adımı atlamak, mcp-confluent Tableflow özellikli tabloları sağlamaya veya yönetmeye çalıştığında yetki hatalarına neden olur.

  ## Confluent Cloud için OAuth Kimlik Doğrulaması

  MCP sunucusu, statik API anahtarları yerine **OAuth (PKCE)** aracılığıyla Confluent Cloud'a kimlik doğrulaması yapabilir.
  Confluent Cloud erişimi gerektiren ilk araç çağrısında, sunucu tarayıcınızı Confluent Cloud oturum açma sayfasına açar; sonraki araç çağrıları ortaya çıkan oturumu yeniden kullanır.
  Sağlanması gereken API anahtarları yok.

  ### Kurulum

  ```bash
  npx @confluentinc/mcp-confluent --init-oauth-config
  # gerekirse ./config.yaml dosyasını düzenleyin, ardından:
  npx @confluentinc/mcp-confluent --config ./config.yaml
  ```

  `--init-oauth-config`, başlangıç [`config.oauth.example.yaml`](config.oauth.example.yaml) dosyasını `./config.yaml` dosyasına düşürür.
  Dosyanın tamamı temelde şundan oluşur:

  ```yaml
  connections:
    ccloud-oauth:
      type: oauth
  ```

  Tam şema ve ergonomik özellikler için [CONFIGURATION.md → Authentication modes](CONFIGURATION.md#authentication-modes) bölümüne bakın.

  [Confluent Cloud için Mevcut Araçlar](#confluent-cloud-için-mevcut-araçlar) bölümünde ¹ ile işaretlenen kategoriler bugün OAuth altında çalışır; diğer her şey hala statik API anahtarları ile `direct` bağlantı gerektirir.

  ## CLI Kullanımı

  MCP sunucusu, gelişmiş kontrol için esnek bir komut satırı arayüzü (CLI) sağlar.
  CLI, konfigürasyon dosyasını, aktarımları seçmenize ve hangi araçların etkinleştirildiğini veya engelleneceğini ince ayarlamanızı sağlar.

  ### Temel Kullanım

  Tüm CLI seçeneklerini ve yardımı şu şekilde görüntüleyebilirsiniz:

  ```bash
  npx @confluentinc/mcp-confluent --help
  ```

  <details>
  <summary>Çıkışı göster</summary>

  ```bash
  Usage: mcp-confluent [options]

  Confluent MCP Server - Model Context Protocol implementation for Confluent Cloud

  Options:
    -V, --version                    output the version number
    -e, --env-file <path>            Load environment variables from file
    -k, --kafka-config-file <file>   Path to a properties file for configuring kafka clients
    -t, --transport <types>          Transport types (comma-separated list) (choices: "http", "sse", "stdio", default: "stdio")
    --allow-tools <tools>            Comma-separated list of tool names to allow. If provided, takes precedence over --allow-tools-file. Allow-list is applied before block-list.
    --block-tools <tools>            Comma-separated list of tool names to block. If provided, takes precedence over --block-tools-file. Block-list is applied after allow-list.
    --allow-tools-file <file>        File with tool names to allow (one per line). Used only if --allow-tools is not provided. Allow-list is applied before block-list.
    --block-tools-file <file>        File with tool names to block (one per line). Used only if --block-tools is not provided. Block-list is applied after allow-list.
    --list-tools                     Print the final set of enabled tool names (with descriptions) after allow/block filtering and exit. Does not start the server.
    --disable-auth                   Disable authentication for HTTP/SSE transports. WARNING: Only use in development environments.
    --allowed-hosts <hosts>          Comma-separated list of allowed Host header values for DNS rebinding protection.
    --generate-key                   Generate a secure API key for MCP_API_KEY and print it to stdout, then exit.
    -h, --help                       display help for command
  ```

  </details>

  ### Örnek: Tüm Aktarımları Kullanarak Dağıtma

  ```bash
  npx @confluentinc/mcp-confluent -c config.yaml --transport http,sse,stdio
  ```

  <details>
  <summary>Çıkışı göster</summary>

  ```json
  ...
  {"level":"info","time":"2025-05-14T17:03:02.883Z","pid":47959,"hostname":"G9PW1FJH64","name":"mcp-confluent","msg":"Starting transports: http, sse, stdio"}
  {"level":"info","time":"2025-05-14T17:03:02.971Z","pid":47959,"hostname":"G9PW1FJH64","name":"mcp-confluent","msg":"HTTP transport routes registered"}
  {"level":"info","time":"2025-05-14T17:03:02.972Z","pid":47959,"hostname":"G9PW1FJH64","name":"mcp-confluent","msg":"SSE transport routes registered"}
  {"level":"info","time":"2025-05-14T17:03:02.972Z","pid":47959,"hostname":"G9PW1FJH64","name":"mcp-confluent","msg":"STDIO transport connected"}
  {"level":"info","time":"2025-05-14T17:03:03.012Z","pid":47959,"hostname":"G9PW1FJH64","msg":"Server listening at http://[::1]:3000"}
  {"level":"info","time":"2025-05-14T17:03:03.013Z","pid":47959,"hostname":"G9PW1FJH64","msg":"Server listening at http://127.0.0.1:3000"}
  {"level":"info","time":"2025-05-14T17:03:03.013Z","pid":47959,"hostname":"G9PW1FJH64","msg":"All transports started successfully"}
  ```

  </details>

  ### Örnek: Yalnızca Belirli Araçlara İzin Ver

  ```bash
  npx @confluentinc/mcp-confluent -c config.yaml --allow-tools produce-message,consume-messages
  ```

  Yalnızca belirtilen araçlar etkinleştirilecek; diğer tümü devre dışı bırakılacaktır.

  ### Örnek: Belirli Araçları Engelle

  ```bash
  npx @confluentinc/mcp-confluent -c config.yaml --block-tools produce-message,consume-messages
  ```

  Belirtilen araçlar hariç tüm araçlar etkinleştirilecektir.

  ### Örnek: Dosyalardan Araç Listelerini Kullan

  Ayrıca izin verir/engeller listeleri dosyalarda saklayabilirsiniz (her satırda bir araç adı):

  ```bash
  npx -y @confluentinc/mcp-confluent -c config.yaml --allow-tools-file allow.txt --block-tools-file block.txt
  ```

  ### Örnek: Tüm Mevcut Araçları Listele

  ```bash
  npx -y @confluentinc/mcp-confluent --list-tools
  ```

  <details>
  <summary>Çıkışı göster</summary>

  ```text
  add-tags-to-topic: Assign existing tags to Kafka topics in Confluent Cloud.
  alter-topic-config: Alter topic configuration in Confluent Cloud.
  consume-messages: Consumes messages from one or more Kafka topics. Supports automatic deserialization of Schema Registry encoded messag...
  create-connector: Create a new connector. Returns the new connector information if successful.
  create-flink-statement: Make a request to create a statement.
  create-topic-tags: Create new tag definitions in Confluent Cloud.
  create-topics: Create one or more Kafka topics.
  delete-connector: Delete an existing connector. Returns success message if deletion was successful.
  delete-flink-statements: Make a request to delete a statement.
  delete-tag: Delete a tag definition from Confluent Cloud.
  delete-topics: Delete the topic with the given names.
  check-flink-statement-health: Perform an aggregate health check for a Flink SQL statement.
  describe-consumer-group: Describe a single consumer group on a Kafka cluster — wraps the broker's describeGroups admin call for one group ID. Returns state, type, protocol, coordinator, and per-member assignment.
  get-consumer-group-lag: Compute live offset lag for a single Kafka consumer group. Returns per-(topic, partition) {committedOffset, highWatermark, lag} rows and a total lag count across the group.
  describe-flink-table: Get full schema details for a Flink table via INFORMATION_SCHEMA.COLUMNS.
  detect-flink-statement-issues: Detect issues for a Flink SQL statement by analyzing status, exceptions, and metrics.
  get-flink-statement-profile: Get Query Profiler data with task graph, metrics, and automated issue detection.
  get-flink-table-info: Get table metadata via INFORMATION_SCHEMA.TABLES.
  list-flink-catalogs: List all catalogs in the Flink environment.
  list-flink-databases: List all databases (schemas) in a Flink catalog via INFORMATION_SCHEMA.SCHEMATA.
  list-flink-tables: List all tables in a Flink database.
  get-flink-statement-exceptions: Retrieve the 10 most recent exceptions for a Flink SQL statement.
  get-topic-config: Retrieve configuration details for a specific Kafka topic.
  list-clusters: Get all clusters in the Confluent Cloud environment
  list-connectors: Retrieve a list of "names" of the active connectors. You can then make a read request for a specific connector by name.
  list-consumer-groups: List consumer groups on a Kafka cluster — wraps the broker's listGroups admin call. Optional filters narrow the resul...
  list-environments: Get all environments in Confluent Cloud with pagination support
  list-flink-statements: Retrieve a sorted, filtered, paginated list of all statements.
  list-schemas: List all schemas in the Schema Registry.
  list-tags: Retrieve all tags with definitions from Confluent Cloud Schema Registry.
  list-topics: List all topics in the Kafka cluster.
  produce-message: Produce records to a Kafka topic. Supports Confluent Schema Registry serialization (AVRO, JSON, PROTOBUF) for both ke...
  read-connector: Get information about the connector.
  read-environment: Get details of a specific environment by ID
  read-flink-statement: Make a request to read a statement and its results
  remove-tag-from-entity: Remove tag from an entity in Confluent Cloud.
  search-topics-by-name: List all topics in the Kafka cluster matching the specified name.
  search-topics-by-tag: List all topics in the Kafka cluster with the specified tag.
  create-tableflow-topic: Make a request to create a tableflow topic.
  list-tableflow-regions: Retrieve a sorted, filtered, paginated list of all tableflow regions.
  list-tableflow-topics: Retrieve a sorted, filtered, paginated list of all tableflow topics.
  read-tableflow-topic: Make a request to read a tableflow topic.
  update-tableflow-topic: Make a request to update a tableflow topic.
  delete-tableflow-topic: Make a request to delete a tableflow topic.
  create-tableflow-catalog-integration: Make a request to create a catalog integration.
  list-tableflow-catalog-integrations: Retrieve a sorted, filtered, paginated list of all catalog integrations.
  read-tableflow-catalog-integration: Make a request to read a catalog integration.
  update-tableflow-catalog-integration: Make a request to update a catalog integration.
  delete-tableflow-catalog-integration: Make a request to delete a tableflow catalog integration.
  list-organizations: List Confluent Cloud organizations the current credentials can see. Paginated; if the response includes a nextPageToken, pass it back as pageToken to fetch additional pages.
  explain-disabled-tools: Call when the user asks why a tool is missing or unavailable (e.g., "why can't I list Kafka topics?", "where are the Flink tools?"). Returns disabled tools grouped by the config gap each one is waiting on, so you can tell the user the exact YAML block or field to add. Prefer this over guessing about credentials, network, or auth.
  ```

  </details>

  > **İpucu:** İzin listesi, engel listesinden önce uygulanır.
  > İkisi de sağlanmazsa, tüm araçlar varsayılan olarak etkinleştirilir.

  ## MCP İstemcilerini Yapılandırma

  Tercih ettiğiniz istemci ile bu MCP sunucusunu ayarlamak ve kullanmak için adım adım talimatlar için lütfen aşağıdaki rehberlere başvurun:

  - [Claude Code](docs/config
---

# Confluent MCP Server

[![npm version](https://img.shields.io/npm/v/@confluentinc/mcp-confluent.svg)](https://www.npmjs.com/package/@confluentinc/mcp-confluent)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

An open-source [MCP server](https://modelcontextprotocol.io/) that enables AI assistants to interact with Confluent Cloud, Confluent Platform, and standalone Apache Kafka deployments through natural language.
It provides 50+ tools across Kafka, Flink SQL, Schema Registry, Connectors, Tableflow, and more -- usable from any MCP-compatible client including Claude Desktop, Claude Code, Cursor, VS Code, Goose, and Gemini CLI.

## Quick Start

> **Prerequisites:** [Node.js 22+](https://nodejs.org/).
> If you want to interact with [Confluent Cloud](https://confluent.cloud/), you need to create an account first.

1. Generate a quick `config.yaml` file in your project root:

```bash
npx @confluentinc/mcp-confluent --init-config
```

2. Edit the `config.yaml` file with your connection details, then:

```bash
npx @confluentinc/mcp-confluent --config ./config.yaml
```

See [Getting Started](#getting-started) for full setup instructions and [Configuring MCP Clients](#configuring-mcp-clients) for integration with your preferred AI tool.

## Table of Contents

- [Quick Start](#quick-start)
- [Available Tools](#available-tools)
  - [Always Available](#always-available-tools)
  - [Confluent Cloud](#available-tools-for-confluent-cloud)
  - [Local deployments](#available-tools-for-local-deployments)
- [Getting Started](#getting-started)
- [Configuration](#configuration)
- [OAuth Authentication for Confluent Cloud](#oauth-authentication-for-confluent-cloud)
- [CLI Usage](#cli-usage)
- [Configuring MCP Clients](#configuring-mcp-clients)
- [Telemetry](#telemetry)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)

## Available Tools

Tools are auto-enabled based on which service blocks are present in your resolved configuration; see [CONFIGURATION.md](CONFIGURATION.md#tool-enablement-which-block-lights-up-what) for the full block-to-tool mapping.

You can list all available tools via the CLI:

```bash
npx -y @confluentinc/mcp-confluent --list-tools
```

### Always-Available Tools

These tools need no service blocks or authentication — they're enabled even on a bare config, regardless of which deployment the rest of your config targets.

| Category          | Tools                                         | Description                                               |
| ----------------- | --------------------------------------------- | --------------------------------------------------------- |
| **Documentation** | `search-product-docs`, `get-product-doc-page` | Search Confluent product docs and fetch full page content |
| **Diagnostics**   | `explain-disabled-tools`                      | Explain why specific tools are absent from `tools/list`   |

### Available Tools for Confluent Cloud

These tools require endpoints and authentication against specific Confluent Cloud components.
Refer to [`config.example.yaml`](config.example.yaml) for the full set of configuration variables.
Categories marked with ¹ also work with [OAuth authentication](#oauth-authentication-for-confluent-cloud) — sign in via your browser instead of provisioning API keys.

| Category                                     | Tools                                                                                                                                                                                                         | Description                                                                                |
| -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| **Kafka** ¹                                  | `list-topics`, `create-topics`, `delete-topics`, `produce-message`, `consume-messages`, `list-consumer-groups`, `describe-consumer-group`, `get-consumer-group-lag`, `alter-topic-config`, `get-topic-config` | Manage topics, produce/consume messages, inspect consumer groups, configure topic settings |
| **Flink SQL**                                | `create-flink-statement`, `list-flink-statements`, `read-flink-statement`, `delete-flink-statements`, `get-flink-statement-exceptions`                                                                        | Create and manage Flink SQL statements                                                     |
| **Flink Catalog**                            | `list-flink-catalogs`, `list-flink-databases`, `list-flink-tables`, `describe-flink-table`, `get-flink-table-info`                                                                                            | Explore Flink catalogs, databases, and table schemas                                       |
| **Flink Diagnostics**                        | `check-flink-statement-health`, `detect-flink-statement-issues`, `get-flink-statement-profile`                                                                                                                | Health checks, issue detection, and query profiling                                        |
| **Connectors**                               | `list-connectors`, `read-connector`, `create-connector`, `delete-connector`                                                                                                                                   | Manage Kafka Connect connectors                                                            |
| **Schema Registry** ¹                        | `list-schemas`, `delete-schema`                                                                                                                                                                               | List, inspect, and delete data schemas                                                     |
| **Catalog & Tags**                           | `search-topics-by-tag`, `search-topics-by-name`, `create-topic-tags`, `delete-tag`, `remove-tag-from-entity`, `add-tags-to-topic`, `list-tags`                                                                | Organize and search topics using tags                                                      |
| **Organizations, Environments & Clusters** ¹ | `list-organizations`, `list-environments`, `read-environment`, `list-clusters`                                                                                                                                | Discover Confluent Cloud resources                                                         |
| **Tableflow**                                | `create-tableflow-topic`, `list-tableflow-topics`, `read-tableflow-topic`, `update-tableflow-topic`, `delete-tableflow-topic`, `list-tableflow-regions`                                                       | Manage Tableflow-enabled topics                                                            |
| **Tableflow Catalog**                        | `create-tableflow-catalog-integration`, `list-tableflow-catalog-integrations`, `read-tableflow-catalog-integration`, `update-tableflow-catalog-integration`, `delete-tableflow-catalog-integration`           | Manage Tableflow catalog integrations (e.g., AWS Glue)                                     |
| **Metrics**                                  | `list-available-metrics`, `query-metrics`                                                                                                                                                                     | Discover and query Confluent Cloud operational metrics                                     |
| **Billing** ¹                                | `list-billing-costs`                                                                                                                                                                                          | Query billing and cost data                                                                |

¹ Also available under OAuth — see [OAuth Authentication for Confluent Cloud](#oauth-authentication-for-confluent-cloud) for setup and caveats.
Categories not marked currently require a `direct` connection with static API keys; OAuth migration is in progress.

### Available Tools for local deployments

These tools only require Kafka or Schema Registry endpoints - no Confluent Cloud API key/secret is needed.
Ideal for local development with self-managed clusters, including Confluent Platform.

```yaml
# minimal config.yaml for local development
connections:
  local:
    type: direct
    kafka:
      bootstrap_servers: "localhost:9092"
    schema_registry:
      endpoint: "http://localhost:8081"
```

Ready-to-use variants live in [`sample_configs/`](sample_configs/).

| Category            | Tools                                                                                                                                                               | Description                                                      |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| **Kafka**           | `list-topics`, `create-topics`, `delete-topics`, `produce-message`, `consume-messages`, `list-consumer-groups`, `describe-consumer-group`, `get-consumer-group-lag` | Manage topics, produce/consume messages, inspect consumer groups |
| **Schema Registry** | `list-schemas`, `delete-schema`                                                                                                                                     | List, inspect, and delete data schemas                           |

## Getting Started

### Prerequisites

- **Node.js 22 or later** -- we recommend using [NVM](https://github.com/nvm-sh/nvm) to manage versions:
  ```bash
  nvm install 22
  nvm use 22
  ```
- A local environment with Kafka or Schema Registry running, or a **Confluent Cloud** account with appropriate API keys or login credentials if [using OAuth to authenticate](#oauth-authentication-for-confluent-cloud).

### General Setup Steps

This MCP server is designed to be used with various MCP clients, such as Claude Desktop, Copilot, or Goose CLI/Desktop.
The specific configuration and interaction will depend on the client you are using.

The MCP server can authenticate to Confluent Cloud via **OAuth (PKCE)** in addition to static API keys defined in the YAML config.
See [OAuth Authentication For Confluent Cloud](#oauth-authentication-for-confluent-cloud) for more details.

The general steps to configure (if not using OAuth) and run this MCP are:

1. **Create a configuration file:** Copy the provided [`config.yaml` example](https://github.com/confluentinc/mcp-confluent/blob/main/config.example.yaml) file to the root of your project.
   You can use the CLI to bootstrap one in your current directory — no git checkout required:

```bash
npx @confluentinc/mcp-confluent --init-config
```

2. **Populate the file:** Fill in the necessary values for your Confluent Cloud environment.
   See [CONFIGURATION.md](CONFIGURATION.md) for the full reference; only fill in the service blocks you need (each one enables a group of tools).

3. **Start the Server:** You can run the MCP server in one of two ways:
   - **From source:** Follow the instructions in the [Contributing Guide](CONTRIBUTING.md) to build and run the server from source.
     This typically involves:
     - Installing dependencies (`npm install`)
     - Building the project (`npm run build` or `npm run dev`)
   - **With npx:** You can start the server directly using npx, no build required:

     ```bash
     npx @confluentinc/mcp-confluent --config /path/to/myconfig.yaml
     ```

4. **Configure your MCP Client:** Each client (e.g., Claude, Goose) will have its own way of specifying the MCP server's address and any required credentials.
   You'll need to [configure your client](#configuring-mcp-clients) to connect to the address where this server is running (likely `localhost` with a specific port).
   The port the server runs on is set via `server.http.port` in `config.yaml`.

5. **Start your MCP Client:** Once your client is configured to connect to the MCP server, you can start your MCP client and on startup it will stand up an instance of this MCP server locally.
   This instance will be responsible for managing data schemas and interacting with resources on your behalf.

6. **Interact with your resources through the Client:** Once the client is connected and configured, you can use the client's interface to interact with Confluent Cloud or local resources.
   The client will send requests to this MCP server, which will then interact with the available connections on your behalf.

## Configuration

The full configuration reference — YAML schema, every service block, env-var interpolation, OAuth and HTTP/SSE auth setup, the (deprecated) legacy env-var table, and tool-to-block mapping — lives in [CONFIGURATION.md](CONFIGURATION.md).

> **Compatibility note.** This release ships full parity between YAML (`-c config.yaml`) and the legacy env-var path (`-e config.env`) for a single connection.
> The env-var-only path will emit a startup warning in a near-future release and be removed a release or two later.
> Multi-connection support (next release) will be YAML-only.
> See [CONFIGURATION.md → Two paths, one configuration](CONFIGURATION.md#two-paths-one-configuration).

### Prerequisites & setup for Tableflow commands

Tableflow tools interact with cloud storage (e.g. AWS S3) and a metadata catalog (e.g. AWS Glue) on your behalf via the Flink runtime in Confluent Cloud.
The Flink runtime needs IAM permissions on your cloud account, and those have to be granted and linked into Confluent Cloud before any Tableflow tool will succeed.

Follow the **[Tableflow quick start with custom storage & Glue](https://docs.confluent.io/cloud/current/topics/tableflow/get-started/quick-start-custom-storage-glue.html)** to set up the roles, policies, and provider integrations.
Skipping this step leads to authorization errors when mcp-confluent tries to provision or manage Tableflow-enabled tables.

## OAuth Authentication for Confluent Cloud

The MCP server can authenticate to Confluent Cloud via **OAuth (PKCE)** instead of static API keys.
On the first tool call that needs Confluent access, the server opens your browser to the Confluent Cloud sign-in page; subsequent tool calls reuse the resulting session.
No API keys to provision.

### Setup

```bash
npx @confluentinc/mcp-confluent --init-oauth-config
# edit ./config.yaml if needed, then:
npx @confluentinc/mcp-confluent --config ./config.yaml
```

`--init-oauth-config` drops a starter [`config.oauth.example.yaml`](config.oauth.example.yaml) into `./config.yaml`.
The whole file is essentially:

```yaml
connections:
  ccloud-oauth:
    type: oauth
```

See [CONFIGURATION.md → Authentication modes](CONFIGURATION.md#authentication-modes) for the full schema and ergonomics.

The ¹-marked categories in [Available Tools for Confluent Cloud](#available-tools-for-confluent-cloud) work under OAuth today; everything else still needs a `direct` connection with static API keys.

## CLI Usage

The MCP server provides a flexible command line interface (CLI) for advanced control.
The CLI lets you pick the config file, transports, and fine-tune which tools are enabled or blocked.

### Basic Usage

You can view all CLI options and help with:

```bash
npx @confluentinc/mcp-confluent --help
```

<details>
<summary>Show output</summary>

```bash
Usage: mcp-confluent [options]

Confluent MCP Server - Model Context Protocol implementation for Confluent Cloud

Options:
  -V, --version                    output the version number
  -e, --env-file <path>            Load environment variables from file
  -k, --kafka-config-file <file>   Path to a properties file for configuring kafka clients
  -t, --transport <types>          Transport types (comma-separated list) (choices: "http", "sse", "stdio", default: "stdio")
  --allow-tools <tools>            Comma-separated list of tool names to allow. If provided, takes precedence over --allow-tools-file. Allow-list is applied before block-list.
  --block-tools <tools>            Comma-separated list of tool names to block. If provided, takes precedence over --block-tools-file. Block-list is applied after allow-list.
  --allow-tools-file <file>        File with tool names to allow (one per line). Used only if --allow-tools is not provided. Allow-list is applied before block-list.
  --block-tools-file <file>        File with tool names to block (one per line). Used only if --block-tools is not provided. Block-list is applied after allow-list.
  --list-tools                     Print the final set of enabled tool names (with descriptions) after allow/block filtering and exit. Does not start the server.
  --disable-auth                   Disable authentication for HTTP/SSE transports. WARNING: Only use in development environments.
  --allowed-hosts <hosts>          Comma-separated list of allowed Host header values for DNS rebinding protection.
  --generate-key                   Generate a secure API key for MCP_API_KEY and print it to stdout, then exit.
  -h, --help                       display help for command
```

</details>

### Example: Deploy using all transports

```bash
npx @confluentinc/mcp-confluent -c config.yaml --transport http,sse,stdio
```

<details>
<summary>Show output</summary>

```json
...
{"level":"info","time":"2025-05-14T17:03:02.883Z","pid":47959,"hostname":"G9PW1FJH64","name":"mcp-confluent","msg":"Starting transports: http, sse, stdio"}
{"level":"info","time":"2025-05-14T17:03:02.971Z","pid":47959,"hostname":"G9PW1FJH64","name":"mcp-confluent","msg":"HTTP transport routes registered"}
{"level":"info","time":"2025-05-14T17:03:02.972Z","pid":47959,"hostname":"G9PW1FJH64","name":"mcp-confluent","msg":"SSE transport routes registered"}
{"level":"info","time":"2025-05-14T17:03:02.972Z","pid":47959,"hostname":"G9PW1FJH64","name":"mcp-confluent","msg":"STDIO transport connected"}
{"level":"info","time":"2025-05-14T17:03:03.012Z","pid":47959,"hostname":"G9PW1FJH64","name":"mcp-confluent","msg":"Server listening at http://[::1]:3000"}
{"level":"info","time":"2025-05-14T17:03:03.013Z","pid":47959,"hostname":"G9PW1FJH64","name":"mcp-confluent","msg":"Server listening at http://127.0.0.1:3000"}
{"level":"info","time":"2025-05-14T17:03:03.013Z","pid":47959,"hostname":"G9PW1FJH64","name":"mcp-confluent","msg":"All transports started successfully"}
```

</details>

### Example: Allow Only Specific Tools

```bash
npx @confluentinc/mcp-confluent -c config.yaml --allow-tools produce-message,consume-messages
```

Only the specified tools will be enabled; all others will be disabled.

### Example: Block Certain Tools

```bash
npx @confluentinc/mcp-confluent -c config.yaml --block-tools produce-message,consume-messages
```

All tools except the specified ones will be enabled.

### Example: Use Tool Lists from Files

You can also maintain allow/block lists in files (one tool name per line):

```bash
npx -y @confluentinc/mcp-confluent -c config.yaml --allow-tools-file allow.txt --block-tools-file block.txt
```

### Example: List All Available Tools

```bash
npx -y @confluentinc/mcp-confluent --list-tools
```

<details>
<summary>Show output</summary>

```text
add-tags-to-topic: Assign existing tags to Kafka topics in Confluent Cloud.
alter-topic-config: Alter topic configuration in Confluent Cloud.
consume-messages: Consumes messages from one or more Kafka topics. Supports automatic deserialization of Schema Registry encoded messag...
create-connector: Create a new connector. Returns the new connector information if successful.
create-flink-statement: Make a request to create a statement.
create-topic-tags: Create new tag definitions in Confluent Cloud.
create-topics: Create one or more Kafka topics.
delete-connector: Delete an existing connector. Returns success message if deletion was successful.
delete-flink-statements: Make a request to delete a statement.
delete-tag: Delete a tag definition from Confluent Cloud.
delete-topics: Delete the topic with the given names.
check-flink-statement-health: Perform an aggregate health check for a Flink SQL statement.
describe-consumer-group: Describe a single consumer group on a Kafka cluster — wraps the broker's describeGroups admin call for one group ID. Returns state, type, protocol, coordinator, and per-member assignment.
get-consumer-group-lag: Compute live offset lag for a single Kafka consumer group. Returns per-(topic, partition) {committedOffset, highWatermark, lag} rows and a total lag count across the group.
describe-flink-table: Get full schema details for a Flink table via INFORMATION_SCHEMA.COLUMNS.
detect-flink-statement-issues: Detect issues for a Flink SQL statement by analyzing status, exceptions, and metrics.
get-flink-statement-profile: Get Query Profiler data with task graph, metrics, and automated issue detection.
get-flink-table-info: Get table metadata via INFORMATION_SCHEMA.TABLES.
list-flink-catalogs: List all catalogs in the Flink environment.
list-flink-databases: List all databases (schemas) in a Flink catalog via INFORMATION_SCHEMA.SCHEMATA.
list-flink-tables: List all tables in a Flink database.
get-flink-statement-exceptions: Retrieve the 10 most recent exceptions for a Flink SQL statement.
get-topic-config: Retrieve configuration details for a specific Kafka topic.
list-clusters: Get all clusters in the Confluent Cloud environment
list-connectors: Retrieve a list of "names" of the active connectors. You can then make a read request for a specific connector by name.
list-consumer-groups: List consumer groups on a Kafka cluster — wraps the broker's listGroups admin call. Optional filters narrow the resul...
list-environments: Get all environments in Confluent Cloud with pagination support
list-flink-statements: Retrieve a sorted, filtered, paginated list of all statements.
list-schemas: List all schemas in the Schema Registry.
list-tags: Retrieve all tags with definitions from Confluent Cloud Schema Registry.
list-topics: List all topics in the Kafka cluster.
produce-message: Produce records to a Kafka topic. Supports Confluent Schema Registry serialization (AVRO, JSON, PROTOBUF) for both ke...
read-connector: Get information about the connector.
read-environment: Get details of a specific environment by ID
read-flink-statement: Make a request to read a statement and its results
remove-tag-from-entity: Remove tag from an entity in Confluent Cloud.
search-topics-by-name: List all topics in the Kafka cluster matching the specified name.
search-topics-by-tag: List all topics in the Kafka cluster with the specified tag.
create-tableflow-topic: Make a request to create a tableflow topic.
list-tableflow-regions: Retrieve a sorted, filtered, paginated list of all tableflow regions.
list-tableflow-topics: Retrieve a sorted, filtered, paginated list of all tableflow topics.
read-tableflow-topic: Make a request to read a tableflow topic.
update-tableflow-topic: Make a request to update a tableflow topic.
delete-tableflow-topic: Make a request to delete a tableflow topic.
create-tableflow-catalog-integration: Make a request to create a catalog integration.
list-tableflow-catalog-integrations: Retrieve a sorted, filtered, paginated list of all catalog integrations.
read-tableflow-catalog-integration: Make a request to read a catalog integration.
update-tableflow-catalog-integration: Make a request to update a catalog integration.
delete-tableflow-catalog-integration: Make a request to delete a tableflow catalog integration.
list-organizations: List Confluent Cloud organizations the current credentials can see. Paginated; if the response includes a nextPageToken, pass it back as pageToken to fetch additional pages.
explain-disabled-tools: Call when the user asks why a tool is missing or unavailable (e.g., "why can't I list Kafka topics?", "where are the Flink tools?"). Returns disabled tools grouped by the config gap each one is waiting on, so you can tell the user the exact YAML block or field to add. Prefer this over guessing about credentials, network, or auth.
```

</details>

> **Tip:** The allow-list is applied before the block-list.
> If neither is provided, all tools are enabled by default.

## Configuring MCP Clients

Please refer to the following guides for step-by-step instructions on setting up and using this MCP server with your preferred client:

- [Claude Code](docs/configuring-claude-code.md)
- [Claude Desktop](docs/configuring-claude-desktop.md)
- [Cursor](docs/configuring-cursor.md)
- [Gemini CLI](docs/configuring-gemini-cli.md)
- [Goose CLI](docs/configuring-goose-cli.md)
- [IBM Bob](docs/configuring-ibm-bob.md)
- [VS Code](docs/configuring-vs-code.md)
- [Windsurf](docs/configuring-windsurf.md)

## Telemetry

This MCP server collects usage data to help make improvements.
You can opt out by setting `DO_NOT_TRACK=true` in your environment.
See [telemetry.md](telemetry.md) for full details on what is collected.

## Troubleshooting

**"Node.js version not supported"** -- This project requires Node.js 22 or later.
Check your version with `node -v` and upgrade if needed.

**Tools not appearing** -- Each tool requires specific service blocks in your `config.yaml`.
Run `--list-tools` to see which tools are active, or invoke the `explain-disabled-tools` MCP tool from your client for a per-tool reason.
The block-to-tool mapping lives in [CONFIGURATION.md](CONFIGURATION.md#tool-enablement-which-block-lights-up-what).

**Authentication errors on HTTP/SSE** -- Generate an API key with `npx @confluentinc/mcp-confluent --generate-key` and add it to your `config.yaml` under `server.auth.api_key`.
See [CONFIGURATION.md → HTTP/SSE transport security](CONFIGURATION.md#httpsse-transport-security).

**Connection refused / port conflicts** -- The default HTTP port is 8080.
Set `server.http.port` in your `config.yaml` to change it.

**Tableflow authorization errors** -- Tableflow tools require specific IAM permissions in your cloud environment.
See [Prerequisites & setup for Tableflow commands](#prerequisites--setup-for-tableflow-commands).

## Contributing

Bug reports and feedback is appreciated in the form of Github Issues.
For guidelines on contributing please see [CONTRIBUTING.md](CONTRIBUTING.md)

### Pre-release testing

To run the MCP server against a pre-release version for beta testing or early feedback, download the release tarball file to a local directory.
Then, when running any of the `npx` commands above, replace `@confluentinc/mcp-confluent` with the path to that tarball, e.g. `npx @~path/to/my/tarball --list-tools`
