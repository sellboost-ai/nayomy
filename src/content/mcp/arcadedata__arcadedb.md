---
name: "ArcadeData/arcadedb"
description: "Built-in MCP server for ArcadeDB, a multi-model database (graph, document, key-value, time-series, vector) with SQL, Cypher, Gremlin, and MongoDB QL support."
description_tr: "ArcadeDB için yerleşik MCP sunucusu; grafik, döküman, anahtar-değer, zaman serisi ve vektör veri modellerini destekleyen çok modelli bir veritabanı olup SQL, Cypher, Gremlin ve MongoDB QL uyumluluğuna sahiptir."
category: "Databases"
repo: "ArcadeData/arcadedb"
stars: 899
url: "https://github.com/ArcadeData/arcadedb"
body_length: 14833
license: "Apache-2.0"
language: "Java"
homepage: "https://arcadedb.com"
body_tr: |-
  # ![ArcadeDB](https://arcadedb.com/assets/images/arcadedb-logo.png)

  <h2 align="center">Çok Model DBMS - Aşırı Performans İçin Tasarlanmış</h2>

  <p align="center">
    <a href="https://github.com/ArcadeData/arcadedb/releases"></a>
    &nbsp;
    <a href="https://opensource.org/licenses/Apache-2.0"></a>
    &nbsp;
    <a href="https://docs.oracle.org/en/java/21/"></a>
    &nbsp;
    <a href="https://docs.oracle.org/en/java/17/"></a>
    &nbsp;
    <a href="https://api.reuse.software/info/github.com/ArcadeData/arcadedb"></a>
    &nbsp;
    <a href="https://hub.docker.com/repository/docker/arcadedata/arcadedb/general"></a>
    &nbsp;
    <a href="https://deepwiki.com/ArcadeData/arcadedb"></a>
    &nbsp;
    <a href="https://github.com/ArcadeData/arcadedb/actions/workflows/mvn-deploy.yml">
      
    </a>

   <a href="https://github.com/ArcadeData/arcadedb/actions/workflows/ha-resilience-tests.yml">
        
      </a>
   <a href="https://github.com/ArcadeData/arcadedb/actions/workflows/load-tests.yml">
        
      </a>

    <a href="https://codecov.io/github/ArcadeData/arcadedb">
     
    </a>
    &nbsp;
    <a href="https://www.codacy.com/gh/ArcadeData/arcadedb/dashboard?utm_source=github.com&utm_medium=referral&utm_content=ArcadeData/arcadedb&utm_campaign=Badge_Coverage">
      
    </a>
    &nbsp;
    <a href="https://app.codacy.com/gh/ArcadeData/arcadedb?utm_source=github.com&utm_medium=referral&utm_content=ArcadeData/arcadedb&utm_campaign=Badge_Grade_Settings">
      
    </a>
    &nbsp;
    <a href="https://www.meterian.io/report/gh/ArcadeData/arcadedb">
      
    </a>
    &nbsp;
    <a href="https://www.meterian.io/report/gh/ArcadeData/arcadedb">
      
    </a>
  </p>

  <p align="center">
    <a href="https://discord.gg/w2Npx2B7hZ"></a>
  </p>

  <p align="center">
  	<a href="https://github.com/arcadedata/arcadedb"></a>
  	&nbsp;
    <a href="https://www.linkedin.com/company/arcadedb/"></a>
    &nbsp;
    <a href="https://bsky.app/profile/arcadedb.bsky.social"></a>
    &nbsp;
    <a href="https://twitter.com/arcade_db"></a>
    &nbsp;
    <a href="https://www.youtube.com/@ArcadeDB"></a>
    &nbsp;
    <a href="https://discord.gg/w2Npx2B7hZ"></a>
    &nbsp;
    <a href="https://stackoverflow.com/questions/tagged/arcadedb"></a>
  	&nbsp;
  	<a href="https://arcadedb.com/blog/"></a>
  </p>



  ArcadeDB, SAP'nin satın almasından sonra [OrientDB](https://github.com/orientechnologies/orientdb)'nin kurucusu olan Luca Garulli tarafından oluşturulan bir Multi-Model DBMS'dir. Tamamen sıfırdan yazılan ve Alien Technology'den oluşan yepyeni bir motora sahip olan ArcadeDB, minimal kaynak kullanımı ile sıradan donanımda saniyede milyonlarca kaydı işleyebilir. ArcadeDB, OrientDB'nin SQL engine'ini (ağır şekilde modifiye edilmiş) ve bazı yardımcı sınıfları yeniden kullanır. LLJ: Low Level Java ile yazılmıştır - yine de Java 21+ olsa da, sadece low level API'ler kullanarak ileri mekanik sempati tekniklerinden yararlanır ve Garbage Collector baskısını azaltır. Aşırı performans için optimize edilmiş halde, Raspberry Pi'dan buluttaki birden fazla sunucuya kadar çalışır.

  ArcadeDB, ACID işlemleri, yapılandırılmış ve yapılandırılmamış veriyi, yerel graph engine'i (birleştirmeler değil kayıtlar arasında bağlantılar), tam metin indexleme, coğrafi sorgulama ve gelişmiş güvenliği destekleyen tam transaksiyonel bir DBMS'dir.

  ArcadeDB aşağıdaki modelleri destekler:

  - [Graph Database](https://docs.arcadedb.com#graph-model) (Neo4j Cypher, Apache Tinkerpop Gremlin ve OrientDB SQL ile uyumlu)
  - [Document Database](https://docs.arcadedb.com#document-model) (MongoDB driver + MongoDB sorguları ve OrientDB SQL ile uyumlu)
  - [Key/Value](https://docs.arcadedb.com#keyvalue-model) (Redis driver ile uyumlu)
  - [Search Engine](https://docs.arcadedb.com/#searchengine-model)
  - [Time Series](https://docs.arcadedb.com/#timeseries-model) (InfluxDB Line Protocol, Prometheus remote_write/read ve PromQL desteği ile)
  - [Vector Embedding](https://docs.arcadedb.com/#vector-model)
  - [Geospatial](https://docs.arcadedb.com/#geospatial-model)

  ArcadeDB birden fazla dili anlar:

  - [SQL](https://docs.arcadedb.com#sql) (OrientDB SQL'den)
  - Neo4j [Cypher (Open Cypher)](https://docs.arcadedb.com#cypher)
  - [Apache Gremlin (Apache Tinkerpop v3.7.x)](https://docs.arcadedb.com#gremlin-api)
  - [GraphQL Language](https://docs.arcadedb.com#graphql)
  - [MongoDB Query Language](https://docs.arcadedb.com#mongodb-query-language)

  ArcadeDB'nin temel yetenekleri:

  - **70+ Yerleşik Graph Algoritması** — Pathfinding, merkeziyetlilik, community detection, link prediction, graph embeddings ve daha fazlası — hepsi kullanıma hazır
  - **Paralel Query Yürütümü** — SQL sorguları, büyük veri setlerinde daha hızlı yürütme için birden fazla CPU çekirdeğinden yararlanır
  - **Materialized Views** — Önceden hesaplanmış query sonuçları depolanır ve otomatik olarak güncellenir
  - **MCP Server** — Entegre [Model Context Protocol](https://docs.arcadedb.com/#mcp-server) sunucusu, AI asistanı ve LLM entegrasyonu için
  - **AI Assistant** — Studio'da entegre AI asistanı (Beta) sorgu yardımı ve veritabanı yönetimi için
  - **Geospatial Indexing** — `geo.*` SQL fonksiyonları ile yerel mekansal sorgular ve yakınlık aramaları
  - **TimeSeries** — Gorilla/Delta-of-Delta sıkıştırması ile columnar depolama, InfluxDB/Prometheus ingestion, PromQL sorguları, Grafana entegrasyonu
  - **Hash Indexes** — LSM-Tree indexleri yanında daha hızlı tam eşleşme aramaları için genişletilebilir hashing

  ArcadeDB şu şekilde kullanılabilir:

  - Java Virtual Machine'in üzerinden herhangi bir dilden gömülü
  - Python bağlamaları aracılığıyla gömülü: [arcadedb-embedded-python](https://github.com/humemai/arcadedb-embedded-python)
  - [HTTP/JSON](https://docs.arcadedb.com#http-json-api) kullanarak uzaktan
  - [Postgres driver](https://docs.arcadedb.com#postgres-driver) kullanarak uzaktan (ArcadeDB, Postgres Wire protokolünü uygular)
  - [Redis driver](https://docs.arcadedb.com#redis-query-language) kullanarak uzaktan (sadece işlemlerin bir alt kümesi uygulanmıştır)
  - [MongoDB driver](https://docs.arcadedb.com#mongodb-query-language) kullanarak uzaktan (sadece işlemlerin bir alt kümesi uygulanmıştır)
  - Entegre [MCP Server](https://docs.arcadedb.com/#mcp-server) (Model Context Protocol) aracılığıyla AI asistanları tarafından

  Daha fazla bilgi için [dokumentasyona](https://docs.arcadedb.com) bakın.

  ### Kullanım Senaryoları

  [arcadedb-usecases](https://github.com/ArcadeData/arcadedb-usecases) deposunda gerçek dünya örneklerini keşfedin — Docker Compose, SQL şemaları ve çalıştırılabilir demolar içeren bağımsız projeler:

  - **Recommendation Engine** — graph traversal + vector similarity + time-series
  - **Knowledge Graphs** — tam metin arama ile co-authorship ve citation networks
  - **Graph RAG** — LangChain4j ve Neo4j Bolt ile retrieval-augmented generation
  - **Fraud Detection** — Cypher ile graph, vector ve time-series sinyalleri
  - **Real-time Analytics** — time-series ile IoT ve service monitoring
  - **Social Network Analytics** — polyglot sorgular ile materialized view panolar
  - **Supply Chain** — PostgreSQL protokolü ve JavaScript ile çok katmanlı görünürlük

  ### 5 Dakikada Başlayın

  Docker ile ArcadeDB Server'ı başlatın:

  ```
  docker run --rm -p 2480:2480 -p 2424:2424 \
             -e JAVA_OPTS="-Darcadedb.server.rootPassword=playwithdata -Darcadedb.server.defaultDatabases=Imported[root]{import:https://github.com/ArcadeData/arcadedb-datasets/raw/main/orientdb/OpenBeer.gz}" \
             arcadedata/arcadedb:latest
  ```

  Şimdi tarayıcınızı http://localhost:2480 adresinde açın ve [ArcadeDB Studio](https://docs.arcadedb.com/#studio) ile imported `OpenBeer` veritabanında en sevdiğiniz biraları bulmak için oynayın.

  ![ArcadeDB Studio](https://arcadedb.com/assets/images/openbeer-demo-graph.png)

  ArcadeDB, [Docker](https://docs.arcadedb.com/#docker) ve [Kubernetes](https://docs.arcadedb.com/#kubernetes) desteği ile buluta hazırdır.

  Ayrıca [en son sürümü indirebilir](https://github.com/ArcadeData/arcadedb/releases), yerel sabit sürücünüze çıkartabilir ve sunucuyu `bin/server.sh` veya Windows için `bin/server.bat` ile başlatabilirsiniz.

  ### Sürümler

  Yaklaşık aylık dört çeşit sürüm vardır:

  - `full` - tüm modülleri içeren tam paket
  - `minimal` - `gremlin`, `redisw`, `mongodbw`, `graphql` modüllerini hariç tutan paket
  - `headless` - `gremlin`, `redisw`, `mongodbw`, `graphql`, `studio` modüllerini hariç tutan paket
  - `base` - core engine, server ve network sadece — tüm isteğe bağlı modülleri hariç tutar (`console`, `gremlin`, `studio`, `redisw`, `mongodbw`, `postgresw`, `grpcw`, `graphql`, `metrics`)

  Deponun başından itibaren nightly build'ler [burada](https://central.sonatype.com/service/rest/repository/browse/maven-snapshots/com/arcadedb/arcadedb-package/) bulunabilir.

  Ayrıca [Custom Package Builder](https://docs.arcadedb.com/#custom-package-builder) kullanarak yalnızca ihtiyacınız olan modüllerle bir **özel dağıtım** oluşturabilirsiniz:

  ```bash
  curl -fsSL https://github.com/ArcadeData/arcadedb/releases/download/26.3.1/arcadedb-builder.sh | \
    bash -s -- --version=26.3.1 --modules=gremlin,studio
  ```

  Kullanılabilir isteğe bağlı modüller: `console`, `gremlin`, `studio`, `redisw`, `mongodbw`, `postgresw`, `grpcw`, `graphql`, `metrics`. Builder, etkileşimli mode, Docker image generation ve lokal Maven repositories'den offline build'leri destekler.

  ### Java Sürümleri

  ArcadeDB 24.4.1 sürümünden itibaren kod Java 21 ile uyumludur.

  Java 21 paketleri [Maven central](https://repo.maven.apache.org/maven2/com/arcadedb/) ve Docker image'ları [Docker Hub](https://hub.docker.com/r/arcadedata/arcadedb) üzerinde bulunmaktadır.

  Ayrıca Java 17 desteğini, henüz Java 21'e yükselemeyenler için GitHub packages aracılığıyla `java17` adlı ayrı bir branch'te sunuyoruz.

  Java 17'yi projenizde kullanmak için `pom.xml` dosyanıza repository ekleyin ve bağımlılıkları aşağıdaki gibi referans edin:

  ```xml

  <repositories>
      <repository>
          <name>github</name>
          <id>github</id>
          <url>https://maven.pkg.github.com/ArcadeData/arcadedb</url>
      </repository>
  </repositories>
  <dependencies>
  <dependency>
      <groupId>com.arcadedb</groupId>
      <artifactId>arcadedb-engine</artifactId>
      <version>26.3.1-java17</version>
  </dependency>
  </dependencies>
  ```

  Docker image'ları ghcr.io'da da kullanılabilir:

  ```shell
  docker pull ghcr.io/arcadedata/arcadedb:26.3.1-java17
  ```

  ### Derleme ve Test

  Tüm projeyi derle (testleri atla):

  ```bash
  mvn clean install -DskipTests
  ```

  Tam test setini çalıştır:

  ```bash
  mvn test
  ```

  Bazı testler maliyetlerini belirtmek için etiketlenir:

  - `slow` - belirgin bir şekilde uzun süren fonksiyonel testler (büyük batch'ler, çok saniyelik geçen zaman, büyük payload'lar)
  - `benchmark` - düzenli CI çalıştırmaları için tasarlanmamış microbenchmark'lar

  Bunları atlamak ve sadece hızlı testleri çalıştırmak için:

  ```bash
  mvn test -DexcludedGroups="slow,benchmark"
  ```

  Sadece belirli bir etiketi çalıştırmak için (ör. benchmark testleri izole):

  ```bash
  mvn test -Dgroups="benchmark"
  ```

  ### Topluluk

  ArcadeDB hakkında fikirler, tartışmalar ve yardım için dünyanın dört bir yanındaki büyüyen topluluğumuza katılın.

  - [Discord](https://discord.gg/w2Npx2B7hZ) üzerinde canlı sohbet yapın
  - [Twitter](https://twitter.com/arcade_db) üzerinde bizi takip edin
  - ya da [Bluesky](https://bsky.app/profile/arcadedb.bsky.social) üzerinde
  - [LinkedIn](https://www.linkedin.com/products/arcadedb) üzerinde bağlantı kurun
  - ya da [Facebook](https://www.facebook.com/arcadedb) üzerinde
  - [Stack Overflow](https://stackoverflow.com/questions/tagged/arcadedb) üzerinde `#arcadedb` ile etiketlenen sorular
  - Resmi [Blog](https://arcadedb.com/blog/) sayfamızı ziyaret edin

  ### Güvenlik

  Güvenlik sorunları için lütfen GitHub'da herkese açık sorun göndermek yerine support@arcadedb.com adresine e-posta gönderin.

  ### Lisans ve Atıf

  ArcadeDB herhangi bir kullanım için özgür olup liberal [Open Source Apache 2 lisansı](LICENSE) altında lisanslanmıştır. Biz **Sonsuza Kadar Açık Kaynak** kalma konusunda kararlıyız — bunu sadece bir söz'den daha fazla yapan yapısal garantiler için [Governance](GOVERNANCE.md) sayfamıza bakın. Ticari destek veya sorunu ASAP olarak düzeltmek istiyorsanız, [pricing page](https://arcadedb.com/pricing.html) sayfamızı kontrol edin.

  Üçüncü parti atıfları ve telif hakkı bildirimleri için bkz:

  - [NOTICE](NOTICE) - Gerekli yasal atıflar
  - [ATTRIBUTIONS.md](ATTRIBUTIONS.md) - Detaylı üçüncü parti kabuller
  - [LICENSE](LICENSE) - Tam lisans metni
  - [GOVERNANCE.md](GOVERNANCE.md) - Lisans garantisi ve proje yönetişimi

  ### Teşekkürler

  <a href="https://www.yourkit.com"></a> YourKit Profiler'ı katkıda bulunanlarımıza sunduğu için.

  ### Katkıda Bulunma

  ArcadeDB projesiyle ilişkiye girmek isterdik.
  Yardımcı olmak istiyorsanız, bu projeye nasıl katkıda bulunabileceğiniz hakkında daha fazla bilgi edinmek için [katkı rehberine](CONTRIBUTING.md) bakabilirsiniz.

  Verilerle eğlenin!

  ArcadeDB Takımı

  ## Zaman İçinde Stargazers

  [![Stargazers over time](https://starchart.cc/ArcadeData/arcadedb.svg?variant=adaptive)](https://starchart.cc/ArcadeData/arcadedb)
---

# ![ArcadeDB](https://arcadedb.com/assets/images/arcadedb-logo.png)

<h2 align="center">Multi Model DBMS Built for Extreme Performance</h2>

<p align="center">
  <a href="https://github.com/ArcadeData/arcadedb/releases"></a>
  &nbsp;
  <a href="https://opensource.org/licenses/Apache-2.0"></a>
  &nbsp;
  <a href="https://docs.oracle.org/en/java/21/"></a>
  &nbsp;
  <a href="https://docs.oracle.org/en/java/17/"></a>
  &nbsp;
  <a href="https://api.reuse.software/info/github.com/ArcadeData/arcadedb"></a>
  &nbsp;
  <a href="https://hub.docker.com/repository/docker/arcadedata/arcadedb/general"></a>
  &nbsp;
  <a href="https://deepwiki.com/ArcadeData/arcadedb"></a>
  &nbsp;
  <a href="https://github.com/ArcadeData/arcadedb/actions/workflows/mvn-deploy.yml">
    
  </a>

 <a href="https://github.com/ArcadeData/arcadedb/actions/workflows/ha-resilience-tests.yml">
      
    </a>
 <a href="https://github.com/ArcadeData/arcadedb/actions/workflows/load-tests.yml">
      
    </a>

  <a href="https://codecov.io/github/ArcadeData/arcadedb">
   
  </a>
  &nbsp;
  <a href="https://www.codacy.com/gh/ArcadeData/arcadedb/dashboard?utm_source=github.com&utm_medium=referral&utm_content=ArcadeData/arcadedb&utm_campaign=Badge_Coverage">
    
  </a>
  &nbsp;
  <a href="https://app.codacy.com/gh/ArcadeData/arcadedb?utm_source=github.com&utm_medium=referral&utm_content=ArcadeData/arcadedb&utm_campaign=Badge_Grade_Settings">
    
  </a>
  &nbsp;
  <a href="https://www.meterian.io/report/gh/ArcadeData/arcadedb">
    
  </a>
  &nbsp;
  <a href="https://www.meterian.io/report/gh/ArcadeData/arcadedb">
    
  </a>
</p>

<p align="center">
  <a href="https://discord.gg/w2Npx2B7hZ"></a>
</p>

<p align="center">
	<a href="https://github.com/arcadedata/arcadedb"></a>
	&nbsp;
  <a href="https://www.linkedin.com/company/arcadedb/"></a>
  &nbsp;
  <a href="https://bsky.app/profile/arcadedb.bsky.social"></a>
  &nbsp;
  <a href="https://twitter.com/arcade_db"></a>
  &nbsp;
  <a href="https://www.youtube.com/@ArcadeDB"></a>
  &nbsp;
  <a href="https://discord.gg/w2Npx2B7hZ"></a>
  &nbsp;
  <a href="https://stackoverflow.com/questions/tagged/arcadedb"></a>
	&nbsp;
	<a href="https://arcadedb.com/blog/"></a>
</p>



ArcadeDB is a Multi-Model DBMS created by Luca Garulli, the same founder
of [OrientDB](https://github.com/orientechnologies/orientdb),
after SAP's acquisition. Written from scratch with a brand-new engine made of Alien Technology, ArcadeDB is able to crunch millions
of records per second on common hardware with minimal resource usage. ArcadeDB reuses OrientDB's SQL engine (heavily modified) and
some utility classes. It's written in LLJ: Low Level Java - still Java21+ but only using low level APIs to leverage advanced
mechanical sympathy techniques and reduce Garbage Collector pressure. Highly optimized for extreme performance, it runs
from a Raspberry Pi to multiple servers on the cloud.

ArcadeDB is fully transactional DBMS with support for ACID transactions, structured and unstructured data, native graph engine (no
joins but links between records), full-text indexing, geospatial querying, and advanced security.

ArcadeDB supports the following models:

- [Graph Database](https://docs.arcadedb.com#graph-model) (compatible with Neo4j Cypher, Apache Tinkerpop Gremlin and OrientDB SQL)
- [Document Database](https://docs.arcadedb.com#document-model) (compatible with the MongoDB driver + MongoDB queries and OrientDB
  SQL)
- [Key/Value](https://docs.arcadedb.com#keyvalue-model) (compatible with the Redis driver)
- [Search Engine](https://docs.arcadedb.com/#searchengine-model)
- [Time Series](https://docs.arcadedb.com/#timeseries-model) (with InfluxDB Line Protocol, Prometheus remote_write/read, and PromQL
  support)
- [Vector Embedding](https://docs.arcadedb.com/#vector-model)
- [Geospatial](https://docs.arcadedb.com/#geospatial-model)

ArcadeDB understands multiple languages:

- [SQL](https://docs.arcadedb.com#sql) (from OrientDB SQL)
- Neo4j [Cypher (Open Cypher)](https://docs.arcadedb.com#cypher)
- [Apache Gremlin (Apache Tinkerpop v3.7.x)](https://docs.arcadedb.com#gremlin-api)
- [GraphQL Language](https://docs.arcadedb.com#graphql)
- [MongoDB Query Language](https://docs.arcadedb.com#mongodb-query-language)

ArcadeDB key capabilities:

- **70+ Built-in Graph Algorithms** — Pathfinding, centrality, community detection, link prediction, graph embeddings, and more —
  all available out of the box
- **Parallel Query Execution** — SQL queries leverage multiple CPU cores for faster execution on large datasets
- **Materialized Views** — Pre-computed query results stored and automatically maintained
- **MCP Server** — Built-in [Model Context Protocol](https://docs.arcadedb.com/#mcp-server) server for AI assistant and LLM
  integration
- **AI Assistant** — Integrated AI assistant in Studio (Beta) for query help and database management
- **Geospatial Indexing** — Native spatial queries and proximity searches with `geo.*` SQL functions
- **TimeSeries** — Columnar storage with Gorilla/Delta-of-Delta compression, InfluxDB/Prometheus ingestion, PromQL queries, Grafana
  integration
- **Hash Indexes** — Extendible hashing for faster exact-match lookups alongside LSM-Tree indexes

ArcadeDB can be used as:

- Embedded from any language on top of the Java Virtual Machine
- Embedded from Python via bindings: [arcadedb-embedded-python](https://github.com/humemai/arcadedb-embedded-python)
- Remotely by using [HTTP/JSON](https://docs.arcadedb.com#http-json-api)
- Remotely by using a [Postgres driver](https://docs.arcadedb.com#postgres-driver) (ArcadeDB implements Postgres Wire protocol)
- Remotely by using a [Redis driver](https://docs.arcadedb.com#redis-query-language) (only a subset of the operations are
  implemented)
- Remotely by using a [MongoDB driver](https://docs.arcadedb.com#mongodb-query-language) (only a subset of the operations are
  implemented)
- By AI assistants via the built-in [MCP Server](https://docs.arcadedb.com/#mcp-server) (Model Context Protocol)

For more information, see the [documentation](https://docs.arcadedb.com).

### Use Cases

Explore real-world examples in the [arcadedb-usecases](https://github.com/ArcadeData/arcadedb-usecases) repository — self-contained
projects with Docker Compose, SQL schemas, and runnable demos covering:

- **Recommendation Engine** — graph traversal + vector similarity + time-series
- **Knowledge Graphs** — co-authorship and citation networks with full-text search
- **Graph RAG** — retrieval-augmented generation with LangChain4j and Neo4j Bolt
- **Fraud Detection** — graph, vector, and time-series signals with Cypher
- **Real-time Analytics** — IoT and service monitoring with time-series
- **Social Network Analytics** — materialized view dashboards with polyglot queries
- **Supply Chain** — multi-tier visibility with PostgreSQL protocol and JavaScript

### Getting started in 5 minutes

Start ArcadeDB Server with Docker:

```
docker run --rm -p 2480:2480 -p 2424:2424 \
           -e JAVA_OPTS="-Darcadedb.server.rootPassword=playwithdata -Darcadedb.server.defaultDatabases=Imported[root]{import:https://github.com/ArcadeData/arcadedb-datasets/raw/main/orientdb/OpenBeer.gz}" \
           arcadedata/arcadedb:latest
```

Now open your browser on http://localhost:2480 and play with [ArcadeDB Studio](https://docs.arcadedb.com/#studio) and the
imported `OpenBeer` database to find your favorite beer.

![ArcadeDB Studio](https://arcadedb.com/assets/images/openbeer-demo-graph.png)

ArcadeDB is cloud-ready with [Docker](https://docs.arcadedb.com/#docker) and [Kubernetes](https://docs.arcadedb.com/#kubernetes)
support.

You can also [download the latest release](https://github.com/ArcadeData/arcadedb/releases), unpack it on your local hard drive and
start the server with `bin/server.sh` or `bin/server.bat` for Windows.

### Releases

There are four variants of (about monthly) releases:

- `full` - this is the complete package including all modules
- `minimal` - this package excludes the `gremlin`, `redisw`, `mongodbw`, `graphql` modules
- `headless` - this package excludes the `gremlin`, `redisw`, `mongodbw`, `graphql`, `studio` modules
- `base` - core engine, server, and network only — excludes all optional modules (`console`, `gremlin`, `studio`, `redisw`,
  `mongodbw`, `postgresw`, `grpcw`, `graphql`, `metrics`)

The nightly builds of the repository head can be
found [here](https://central.sonatype.com/service/rest/repository/browse/maven-snapshots/com/arcadedb/arcadedb-package/).

You can also build a **custom distribution** with only the modules you need using
the [Custom Package Builder](https://docs.arcadedb.com/#custom-package-builder):

```bash
curl -fsSL https://github.com/ArcadeData/arcadedb/releases/download/26.3.1/arcadedb-builder.sh | \
  bash -s -- --version=26.3.1 --modules=gremlin,studio
```

Available optional modules: `console`, `gremlin`, `studio`, `redisw`, `mongodbw`, `postgresw`, `grpcw`, `graphql`, `metrics`. The
builder supports interactive mode, Docker image generation, and offline builds from local Maven repositories.

### Java Versions

Starting from ArcadeDB 24.4.1 code is compatible with Java 21.

Java 21 packages are available on [Maven central](https://repo.maven.apache.org/maven2/com/arcadedb/) and docker images
on [Docker Hub](https://hub.docker.com/r/arcadedata/arcadedb).

We also support Java 17 on a separate branch `java17` for those who cannot upgrade to Java 21 yet through GitHub packages.

To use Java 17 inside your project, add the repository to your `pom.xml` and reference dependencies as follows:

```xml

<repositories>
    <repository>
        <name>github</name>
        <id>github</id>
        <url>https://maven.pkg.github.com/ArcadeData/arcadedb</url>
    </repository>
</repositories>
<dependencies>
<dependency>
    <groupId>com.arcadedb</groupId>
    <artifactId>arcadedb-engine</artifactId>
    <version>26.3.1-java17</version>
</dependency>
</dependencies>
```

Docker images are available on ghcr.io too:

```shell
docker pull ghcr.io/arcadedata/arcadedb:26.3.1-java17
```

### Building and Testing

Build the entire project (skipping tests):

```bash
mvn clean install -DskipTests
```

Run the full test suite:

```bash
mvn test
```

Some tests are tagged to indicate their cost:

- `slow` - functional tests that take noticeably long (large batches, multi-second elapsed time, big payloads)
- `benchmark` - microbenchmarks not intended for regular CI runs

To skip these and run only the fast tests:

```bash
mvn test -DexcludedGroups="slow,benchmark"
```

To run only a specific tag (e.g. benchmark tests in isolation):

```bash
mvn test -Dgroups="benchmark"
```

### Community

Join our growing community around the world, for ideas, discussions and help regarding ArcadeDB.

- Chat live with us on [Discord](https://discord.gg/w2Npx2B7hZ)
- Follow us on [Twitter](https://twitter.com/arcade_db)
- or on [Bluesky](https://bsky.app/profile/arcadedb.bsky.social)
- Connect with us on [LinkedIn](https://www.linkedin.com/products/arcadedb)
- or on [Facebook](https://www.facebook.com/arcadedb)
- Questions tagged `#arcadedb` on [Stack Overflow](https://stackoverflow.com/questions/tagged/arcadedb)
- View our official [Blog](https://arcadedb.com/blog/)

### Security

For security issues kindly email us at support@arcadedb.com instead of posting a public issue on GitHub.

### License and Attribution

ArcadeDB is Free for any usage and licensed under the liberal [Open Source Apache 2 license](LICENSE). We are committed to remaining
**Open Source Forever** — see our [Governance](GOVERNANCE.md) for the structural guarantees that make this more than a promise. If
you need commercial support, or you need to have an issue fixed ASAP, check our [pricing page](https://arcadedb.com/pricing.html).

For third-party attributions and copyright notices, see:

- [NOTICE](NOTICE) - Required legal attributions
- [ATTRIBUTIONS.md](ATTRIBUTIONS.md) - Detailed third-party acknowledgments
- [LICENSE](LICENSE) - Full license text
- [GOVERNANCE.md](GOVERNANCE.md) - License guarantee and project governance

### Thanks To

<a href="https://www.yourkit.com"></a> for providing YourKit Profiler to our
committers.

### Contributing

We would love for you to get involved with ArcadeDB project.
If you wish to help, you can learn more about how you can contribute to this project in the [contribution guide](CONTRIBUTING.md).

Have fun with data!

The ArcadeDB Team

## Stargazers over time

[![Stargazers over time](https://starchart.cc/ArcadeData/arcadedb.svg?variant=adaptive)](https://starchart.cc/ArcadeData/arcadedb)
