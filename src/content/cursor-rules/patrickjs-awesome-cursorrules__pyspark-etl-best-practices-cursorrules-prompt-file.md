---
name: "pyspark-etl-best-practices-cursorrules-prompt-file"
clean_name: "Pyspark Etl Best Practices"
description: "Cursor rules for PySpark ETL development with code style, joins, window functions, map operations, and Iceberg patterns."
description_tr: "PySpark ETL geliştirmesi için cursor kuralları; kod stili, joins, window functions, map operations ve Iceberg patterns konularını içerir."
category: "Other"
repo: "PatrickJS/awesome-cursorrules"
stars: 40010
path: "rules/pyspark-etl-best-practices-cursorrules-prompt-file.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/pyspark-etl-best-practices-cursorrules-prompt-file.mdc"
body_length: 13464
file_extension: ".mdc"
body_tr: |-
  PySpark, Spark SQL, Apache Iceberg ve üretim veri mühendisliğinde uzmanız. Performans açısından uygun, idiyomatik ETL kodu yazarsınız; testlenebilir, okunabilir ve kümülatif/snapshot tablolar için güvenlidir.

  PySpark kodu oluştururken veya gözden geçirirken bu kuralları izleyin.

  # PySpark ETL En İyi Uygulamaları

  ## 1. Proje Yapısı

  ### ETL sınıfı iskelet yapısı

  SparkSession yaşam döngüsünü yöneten bir temel sınıf oluşturun. Testlerin yerel bir oturum enjekte edebilmesi için opsiyonel bir `spark_session` parametresini kabul edin. İş mantığı için soyut bir yöntem kullanın.

  ```python
  from abc import ABC, abstractmethod
  from pyspark.sql import SparkSession

  class BaseETL(ABC):
      def __init__(self, config, app_name="ETL Job", spark_session=None):
          self.spark = spark_session or SparkSession.builder.appName(app_name).getOrCreate()
          self.config = config
          self.logger = logging.getLogger(self.__class__.__name__)

      @abstractmethod
      def run_job(self): ...

      def stop(self):
          self.spark.stop()
  ```

  ### Yapılandırma — bir factory fonksiyonu kullanın

  Dataclass'ı saf veri olarak tutun ve CLI ayrıştırmasını bağımsız bir factory fonksiyonuna koyun. Bu, yapılandırmaların `sys.argv`'ye dokunmadan testlerde kolayca oluşturulmasını sağlar.

  ```python
  @dataclass
  class MyConfig:
      read_date: int = 20200101

  def create_config() -> MyConfig:
      parser = argparse.ArgumentParser()
      parser.add_argument("--read_date", type=int, default=20200101)
      args = parser.parse_args()
      return MyConfig(read_date=args.read_date)
  ```

  ### `.transform()` ile pipeline bileşimi

  `run_job`'u orkestrasyonda tutun. Her adım adlandırılmış bir yöntemdir.

  ```python
  events = self.read_source().transform(self.enrich).transform(self.merge_with_existing)
  ```

  ### Bölüm bilincine sahip okumalar için paylaşılan bir reader kullanın

  Bölüm mekaniklerini (tarih filtreleri, saat aralıkları, en son bölüm aramaları) işleyen genel bir reader yardımcısı oluşturun. Tablo başına bir kez kaç reader sınıfı oluşturmayın — alana özgü filtreleri görünür olduğu ETL'de tutun.

  ```python
  class PartitionedReader:
      @staticmethod
      def read_latest(spark, table_name, partition_col):
          row = spark.read.table(table_name).agg(F.max(partition_col)).first()
          if row is None or row[0] is None:
              return spark.createDataFrame([], spark.read.table(table_name).schema)
          return spark.read.table(table_name).filter(F.col(partition_col) == row[0])

      @staticmethod
      def read_by_date(spark, table_name, partition_col, date_value):
          return spark.read.table(table_name).filter(F.col(partition_col) == date_value)

  # Reader bölümlemeyi işler
  events = PartitionedReader.read_by_date(spark, "catalog.my_table", "event_date", 20260319)

  # İş filtreleri ETL'de kalır
  events = events.filter(F.col("event_type").isin("login", "purchase"))
  ```

  ### Paylaşılan merge yardımcıları

  Basit outer-join-with-coalesce mergeleri için, aliasing, join anahtar coalesce'i ve sütun başına varsayılanları işleyen yeniden kullanılabilir bir merge fonksiyonu oluşturun. Per-key conflict çözümüne ihtiyacınız olduğunda (timestamp-aware mergeleri) `map_zip_with` kullanın.

  ## 2. Kod Stili

  ### `F.col()` kullanın — her zaman `F.` ön ekini kullanın

  Fonksiyonları `import pyspark.sql.functions as F` olarak içe aktarın ve tüm kod içinde `F.col()`, `F.when()`, `F.lit()` vb. kullanın. Bu, PySpark ifadelerini hemen tanınır ve aranabilir hale getirir.

  `df.colA` öznitelik erişimini kullanmaktan kaçının — bu, sütunu belirli bir DataFrame değişkenine bağlar; bu da join'lerden sonra veya değişken yeniden atandığında kırılır. Başlangıç belirsiz ise `F.col()` ile `.alias()` kullanın.

  ```python
  # KÖTÜ — sütunu belirli bir DataFrame değişkenine bağlar, join'lerden sonra kırılır
  df.select(F.lower(df1.colA), F.upper(df2.colB))

  # İYİ
  df.select(F.lower(F.col('colA')), F.upper(F.col('colB')))
  ```

  ### Karmaşık koşulları adlandırılmış değişkenlere çıkarın

  `.filter()` veya `F.when()` içindeki mantığı 3 ifadeyle sınırlayın. Geri kalanını çıkarın.

  ```python
  # KÖTÜ — redundant mantık iç içe parantezlerde gizli
  F.when((F.col('status') == 'Delivered') | (((F.datediff('date_a', 'date_b') < 0) & ...)), 'Active')

  # İYİ
  is_delivered = (F.col('status') == 'Delivered')
  date_passed = (F.datediff(F.col('date_a'), F.col('date_b')) < 0)
  has_registration = (F.col('registration').rlike('.+'))
  F.when(is_delivered | (date_passed & has_registration), 'Active')
  ```

  ### `withColumn` zincirlerine `select`'i tercih edin

  `select` çıkış şemasını bir geçişte belirtir. `withColumn` zincirleri ara DataFrameler oluşturur ve performansı azaltabilir — her çağrı sorgu planında yeni bir projeksiyon tetikler.

  ```python
  # KÖTÜ — 3 ara DataFrame
  df = df.withColumn("a", F.col("a").cast("double"))
  df = df.withColumn("b", F.upper(F.col("b")))
  df = df.withColumn("c", F.lit(1))

  # İYİ — 1 DataFrame, açık şema sözleşmesi
  df = df.select(
      F.col("a").cast("double"),
      F.upper(F.col("b")).alias("b"),
      F.lit(1).alias("c"),
  )
  ```

  ### `withColumnRenamed` yerine `alias` kullanın

  ```python
  # KÖTÜ
  df.select('key', 'comments').withColumnRenamed('comments', 'num_comments')

  # İYİ
  df.select('key', F.col('comments').alias('num_comments'))
  ```

  ### Zincir sınırlamaları

  Zincir başına maksimum 5 ifade. İşlem türüne göre ayrılmış (select/filter vs withColumn vs join).

  ```python
  # KÖTÜ — karışık endişeler bir zincirde
  df = (df.select('a', 'b', 'key')
      .filter(F.col('a') == 'x')
      .withColumn('ratio', F.col('a') / F.col('b'))
      .join(df2, 'key', how='inner')
      .drop('b'))

  # İYİ — endişeye göre ayrılmış
  df = df.select('a', 'b', 'key').filter(F.col('a') == 'x')
  df = df.withColumn('ratio', F.col('a') / F.col('b'))
  df = df.join(df2, 'key', how='inner').drop('b')
  ```

  ## 3. Join'ler

  ### Her zaman `how=` parametresini açıkça belirtin

  ```python
  # KÖTÜ
  df.join(other, 'key')

  # İYİ
  df.join(other, 'key', how='inner')
  ```

  ### Sağ join'leri tercih etmek yerine sol join'leri tercih edin

  DataFrame sırasını çevirin ve okunabilirlik için `right` yerine `left` kullanın — birincil DataFrame solda kalır.

  ```python
  flights = flights.join(aircraft, 'aircraft_id', how='left')
  ```

  ### Join'ler sonrasında başlangıç belirsizliği için `.alias()` kullanın

  ```python
  # KÖTÜ — join'den önce her sütunu yeniden adlandırma
  for c in columns:
      flights = flights.withColumnRenamed(c, 'flights_' + c)

  # İYİ — tüm DataFrame'i takma ad ile
  flights = flights.alias('f')
  parking = parking.alias('p')
  result = flights.join(parking, 'code', how='left').select(
      F.col('f.start_time').alias('flight_start'),
      F.col('p.total_time').alias('parking_total'),
  )
  ```

  ### Küçük boyut tablolarını yayınlayın

  Büyük bir fact DataFrame'i küçük bir lookup/dimension tablosu ile birleştirirken, küçük tarafı `F.broadcast()` içine kaplayın ve küçük tarafta shuffle'ı atlayın.

  Broadcast'ı executor belleğine sığabilen küçük tablolar için kullanın — tipik olarak dimension/lookup tabloları (kategori aramaları, ülke kodları, yapılandırma eşlemeleri). Spark varsayılan olarak 10MB altındaki tabloları auto-broadcast'ler (`spark.sql.autoBroadcastJoinThreshold`), ancak Spark boyutu çıkaramadığında açık bir ipucu faydalıdır (ör. filtrelerden veya dönüşümlerden sonra).

  Geliştirme sırasında bir tablonun broadcast-worthy olup olmadığını kontrol etmek için:
  - **Spark UI**: bir çalıştırmanın ardından, SQL sekmesini kontrol edin — tarama boyutları tablo başına gösterilir
  - **Hızlı satır sayısı**: `spark.read.table("catalog.my_dim").count()` (yalnızca geliştirme, üretim kodunda değil)
  - **Sorgu planı**: `df.explain()` — Spark auto-broadcast'ler için `BroadcastHashJoin` gösterir, broadcast'lemezse `SortMergeJoin`

  ```python
  df.join(F.broadcast(category_dim), 'category_id', how='left')
  ```

  ### Hiçbir zaman `.dropDuplicates()`'i bir çivi olarak kullanmayın

  Yinelenen satırlar görünürse, temel nedeni bulun. `.dropDuplicates()` sorunu maskelemek ve shuffle yükü eklemek için açar.

  ## 4. Pencere Fonksiyonları

  `from pyspark.sql import Window as W` ile birlikte `import pyspark.sql.functions as F` kullanın.

  ### Her zaman açık bir çerçeve belirtin

  Çerçeve olmadan, Spark `orderBy` olup olmadığına bağlı olarak değişen birini seçer.

  ```python
  # KÖTÜ — F.sum orderBy ile çalışan toplam, olmadan toplam veriri. Şaşırtıcı.
  w = W.partitionBy('key').orderBy('num')

  # İYİ — ne istediğiniz konusunda açık
  w = W.partitionBy('key').orderBy('num').rowsBetween(W.unboundedPreceding, W.unboundedFollowing)
  ```

  ### `row_number` + filtre vs `first` — farkı bilin

  - `row_number` + filtre = **satırları bırakın**, en iyisini tutun
  - `first` pencere üzerinde = **sütun değerini üzerine yazın**, tüm satırları tutun

  ### `ignorenulls=True` ile `first` ve `last` kullanın

  Olmadan, ilk satırda null tüm bölüm için null verir.

  ```python
  # KÖTÜ — ilk satır null ise None döner
  F.first('version').over(window)

  # İYİ
  F.first('version', ignorenulls=True).over(window)
  ```

  ### Boş `partitionBy()`'den kaçının

  Tüm verileri bir bölüme zorlar. Genel toplamalar için `.agg()` kullanın.

  ```python
  # KÖTÜ — tek bölüm, performansı öldürür
  w = W.partitionBy()
  df.select(F.sum('num').over(w))

  # İYİ
  df.agg(F.sum('num').alias('total'))
  ```

  ## 5. Harita ve Dizi Yüksek Sıra Fonksiyonları

  ### Karmaşık mantık ile haritaları merge ettiğinde `map_zip_with` kullanın

  `map_concat`, hiçbir anahtar çakışması olmayan basit mergeleri için uygundu. Per-key özel mantığa ihtiyacınız olduğunda (ör. daha yeni timestamp tutun, daha yüksek değeri seçin), `map_zip_with` kullanın — bir tarafı kör bir şekilde kazanmak yerine per-key merge fonksiyonu verir.

  ```python
  # KÖTÜ — conflict çözümü üzerinde kontrol yok
  map_concat(existing_map, new_map)

  # İYİ — daha sonraki timestamp ile giriş tutun
  map_zip_with(new_map, existing_map,
      lambda key, v1, v2: (
          F.when(v1.isNull(), v2)
          .when(v2.isNull(), v1)
          .otherwise(F.when(v1.event_ts >= v2.event_ts, v1).otherwise(v2))
      )
  )
  ```

  ### İç içe struct'lardan çıkarmak için `transform` + `array_max` kullanın

  ```python
  # Struct haritasından max event_ts çıkarın
  array_max(transform(map_values(my_map), lambda x: x.event_ts))
  ```

  ### UDF'lerden kaçının — önce yerel Spark fonksiyonlarını kullanın

  UDF'ler Catalyst optimizasyonunu kırar ve serialization yükü ekler. Birini yazmadan önce, yerleşik bir Spark fonksiyonu veya yüksek sıra fonksiyonu işi yapıp yapamayacağını kontrol edin.

  ## 6. Kümülatif / Snapshot Tablo Desenleri

  ### Merge'ler idempotent olmalıdır

  Aynı verilerle yeniden çalıştırmak aynı sonucu üretmeli, yineleme oluşturmamalıdır.

  ### Merge'ler sipariş bağımsız olmalıdır

  Eski verileri geri doldurma daha yeni verileri üzerine yazmamalıdır. Çatışmaları çözmek için açık bir sıralama kriteri (ör. olay zaman damgası, sürüm numarası, bölüm tarihi) kullanın — `coalesce` bağımsız değişken sırası gibi konumsal önceliğe güvenmeyin.

  ### Yazma sonrasında birincil anahtar benzersizliğini doğrulayın

  Birincil anahtar benzersizliğini doğrulayan ve anahtar sütunlarında null'ları kontrol eden denetim adımları ekleyin.

  ## 7. Veri Kalitesi ve Performans

  ### Boş sütunlar için `F.lit(None)` kullanın, hiçbir zaman boş dizeler

  ```python
  # KÖTÜ
  df = df.withColumn('foo', F.lit(''))
  df = df.withColumn('foo', F.lit('NA'))

  # İYİ
  df = df.withColumn('foo', F.lit(None))
  ```

  ### `.otherwise()` genel catch-all olarak kullanmaktan kaçının

  Bilinmeyen değerler sessizce otherwise kovası içine çöker ve veri kalitesi sorunlarını gizler.

  ```python
  # KÖTÜ — beklemediniz yeni bir platform_type sessizce "Diğer" olur
  F.when(F.col('platform_type') == 'android', 'Mobile')
   .when(F.col('platform_type') == 'ios', 'Mobile')
   .otherwise('Other')

  # İYİ — eşlenmemiş değerler null kalır ve mantığınızdaki boşlukları yüzeye çıkarır
  F.when(F.col('platform_type') == 'android', 'Mobile')
   .when(F.col('platform_type') == 'ios', 'Mobile')
  ```

  ### Üretimde `.show()`, `.collect()`, `.printSchema()` yok

  Bunlar tam materyalizasyonu tetikler veya gereksiz sürücü yükü ekler. Bunları yalnızca yerel hata ayıklama için kullanın, hiçbir zaman dağıtılan ETL kodunda kullanmayın. `.count()` kasıtlı olarak kullanıldığında (ör. izleme için satır sayısını günlükleme, DAG fork'ünden önce materyalizasyonu zorlama) kabul edilebilir.

  ### `persist()`'i kasıtlı olarak kullanın

  Bir DataFrame'i birden çok sonraki aksiyonda referans alındığında yalnızca persist edin — aksi takdirde yazma aksiyonu onu sizin için materyalize eder. `.persist()` + `.count()` materyalizasyonu zorlama ve hata ayıklama için satır sayısını günlükleme için yaygın bir desendir; gerekli olduğunda kullanın ancak tam bir tarama eklediğini bilin.

  Depolama seviyesini kılıf kullanımına göre seçin:
  - `MEMORY_AND_DISK` — güvenli varsayılan, bellek dar ise diske çıkar
  - `MEMORY_ONLY` — daha hızlı ancak çıkarıldığında yeniden hesaplama riski vardır
  - `DISK_ONLY` — belleğe sığmayan çok büyük DataFrame'ler için

  ## 8. Iceberg Yazma Desenleri

  ### Şema evrim güvenliği için `.byName()` kullanın

  Sütun sırası önemli değil — Spark konum yerine ada göre eşleşir.

  ```python
  df.write.byName().mode("overwrite").insertInto("catalog.my_table")
  ```

  ### En son bölüm okumalar için `__partitions` metadata tablosunu kullanın

  Iceberg bir `__partitions` metadata tablosunu ortaya koymaktadır. Tam tabloyu taramak yerine en son snapshot'ı bulmak için kullanın.

  ```python
  partition_df = spark.read.table("catalog.my_table__partitions").select(
      "partition.partition_date", "partition.partition_hour"
  )
  max_partition = partition_df.orderBy(
      F.col("partition_date").desc(), F.col("partition_hour").desc()
  ).first()
  if max_partition is None:
      raise ValueError("No partitions found in catalog.my_table")
  latest_date = max_partition["partition_date"]
  ```

  ### `write.distribution-mode`'u anlayın

  - `"none"` — yazma öncesi re-shuffle yok. En hızlı, ancak çıkış dosya boyutları upstream bölümlemeye bağlıdır.
  - `"hash"` — verileri bölüm anahtarına göre yeniden dağıtır. Eşit boyutlu dosyalar üretir ancak shuffle ekler.
  - `"range"` — yazma öncesi verileri bölüm anahtarına göre sıralar. Sıralı tarama performansı için iyidir ama en pahalı.
---

You are an expert in PySpark, Spark SQL, Apache Iceberg, and production data engineering. You write performant, idiomatic ETL code that is testable, readable, and safe for cumulative/snapshot tables.

Follow these rules when generating or reviewing PySpark code.

# PySpark ETL Best Practices

## 1. Project Structure

### ETL class scaffold

Create a base class that manages the SparkSession lifecycle. Accept an optional `spark_session` parameter so tests can inject a local session. Use an abstract method for the job logic.

```python
from abc import ABC, abstractmethod
from pyspark.sql import SparkSession

class BaseETL(ABC):
    def __init__(self, config, app_name="ETL Job", spark_session=None):
        self.spark = spark_session or SparkSession.builder.appName(app_name).getOrCreate()
        self.config = config
        self.logger = logging.getLogger(self.__class__.__name__)

    @abstractmethod
    def run_job(self): ...

    def stop(self):
        self.spark.stop()
```

### Config — use a factory function

Keep the dataclass as pure data and put CLI parsing in a standalone factory function. This makes configs easy to construct in tests without touching `sys.argv`.

```python
@dataclass
class MyConfig:
    read_date: int = 20200101

def create_config() -> MyConfig:
    parser = argparse.ArgumentParser()
    parser.add_argument("--read_date", type=int, default=20200101)
    args = parser.parse_args()
    return MyConfig(read_date=args.read_date)
```

### Pipeline composition with `.transform()`

Keep `run_job` as orchestration. Each step is a named method.

```python
events = self.read_source().transform(self.enrich).transform(self.merge_with_existing)
```

### Use a shared reader for partition-aware reads

Build a generic reader utility that handles partition mechanics (date filters, hour ranges, latest-partition lookups). Don't create one-off reader classes per table — keep domain-specific filters in the ETL where they're visible.

```python
class PartitionedReader:
    @staticmethod
    def read_latest(spark, table_name, partition_col):
        row = spark.read.table(table_name).agg(F.max(partition_col)).first()
        if row is None or row[0] is None:
            return spark.createDataFrame([], spark.read.table(table_name).schema)
        return spark.read.table(table_name).filter(F.col(partition_col) == row[0])

    @staticmethod
    def read_by_date(spark, table_name, partition_col, date_value):
        return spark.read.table(table_name).filter(F.col(partition_col) == date_value)

# Reader handles partitioning
events = PartitionedReader.read_by_date(spark, "catalog.my_table", "event_date", 20260319)

# Business filters stay in the ETL
events = events.filter(F.col("event_type").isin("login", "purchase"))
```

### Shared merge utilities

For simple outer-join-with-coalesce merges, build a reusable merge function that handles aliasing, join key coalescing, and per-column defaults. Use `map_zip_with` when you need per-key conflict resolution (timestamp-aware merges).

## 2. Code Style

### Use `F.col()` — always use the `F.` prefix

Import functions as `import pyspark.sql.functions as F` and use `F.col()`, `F.when()`, `F.lit()`, etc. throughout. This makes PySpark expressions immediately recognizable and greppable.

Avoid `df.colA` attribute access — it binds the column to a specific DataFrame variable, which breaks after joins or when the variable is reassigned. Use `F.col()` with `.alias()` on the DataFrame if disambiguation is needed.

```python
# BAD — binds column to a specific DataFrame variable, breaks after joins
df.select(F.lower(df1.colA), F.upper(df2.colB))

# GOOD
df.select(F.lower(F.col('colA')), F.upper(F.col('colB')))
```

### Extract complex conditions into named variables

Limit logic inside `.filter()` or `F.when()` to 3 expressions. Extract the rest.

```python
# BAD — redundant logic hidden in nested parentheses
F.when((F.col('status') == 'Delivered') | (((F.datediff('date_a', 'date_b') < 0) & ...)), 'Active')

# GOOD
is_delivered = (F.col('status') == 'Delivered')
date_passed = (F.datediff(F.col('date_a'), F.col('date_b')) < 0)
has_registration = (F.col('registration').rlike('.+'))
F.when(is_delivered | (date_passed & has_registration), 'Active')
```

### Prefer `select` over `withColumn` chains

`select` specifies the output schema in one pass. `withColumn` chains create intermediate DataFrames and can degrade performance — each call triggers a new projection in the query plan.

```python
# BAD — 3 intermediate DataFrames
df = df.withColumn("a", F.col("a").cast("double"))
df = df.withColumn("b", F.upper(F.col("b")))
df = df.withColumn("c", F.lit(1))

# GOOD — 1 DataFrame, explicit schema contract
df = df.select(
    F.col("a").cast("double"),
    F.upper(F.col("b")).alias("b"),
    F.lit(1).alias("c"),
)
```

### Use `alias` over `withColumnRenamed`

```python
# BAD
df.select('key', 'comments').withColumnRenamed('comments', 'num_comments')

# GOOD
df.select('key', F.col('comments').alias('num_comments'))
```

### Chaining limits

Max 5 statements per chain. Separate by operation type (select/filter vs withColumn vs join).

```python
# BAD — mixed concerns in one chain
df = (df.select('a', 'b', 'key')
    .filter(F.col('a') == 'x')
    .withColumn('ratio', F.col('a') / F.col('b'))
    .join(df2, 'key', how='inner')
    .drop('b'))

# GOOD — separated by concern
df = df.select('a', 'b', 'key').filter(F.col('a') == 'x')
df = df.withColumn('ratio', F.col('a') / F.col('b'))
df = df.join(df2, 'key', how='inner').drop('b')
```

## 3. Joins

### Always specify `how=` explicitly

```python
# BAD
df.join(other, 'key')

# GOOD
df.join(other, 'key', how='inner')
```

### Prefer left joins over right joins

Flip the DataFrame order and use `left` instead of `right` for readability — the primary DataFrame stays on the left.

```python
flights = flights.join(aircraft, 'aircraft_id', how='left')
```

### Use `.alias()` for disambiguation after joins

```python
# BAD — renaming every column before join
for c in columns:
    flights = flights.withColumnRenamed(c, 'flights_' + c)

# GOOD — alias the whole DataFrame
flights = flights.alias('f')
parking = parking.alias('p')
result = flights.join(parking, 'code', how='left').select(
    F.col('f.start_time').alias('flight_start'),
    F.col('p.total_time').alias('parking_total'),
)
```

### Broadcast small dimension tables

When joining a large fact DataFrame with a small lookup/dimension table, wrap the small side in `F.broadcast()` to skip the shuffle on the small side.

Use broadcast for tables that are small enough to fit in executor memory — typically dimension/lookup tables (category lookups, country codes, config mappings). Spark auto-broadcasts tables under 10MB by default (`spark.sql.autoBroadcastJoinThreshold`), but an explicit hint is useful when Spark can't infer the size (e.g., after filters or transformations).

To check if a table is broadcast-worthy during development:
- **Spark UI**: after a run, check the SQL tab — scan sizes are shown per table
- **Quick row count**: `spark.read.table("catalog.my_dim").count()` (dev only, not in production code)
- **Query plan**: `df.explain()` — Spark shows `BroadcastHashJoin` if it auto-broadcasts, `SortMergeJoin` if it doesn't

```python
df.join(F.broadcast(category_dim), 'category_id', how='left')
```

### Never use `.dropDuplicates()` as a crutch

If duplicate rows appear, find the root cause. `.dropDuplicates()` masks the problem and adds shuffle overhead.

## 4. Window Functions

Use `from pyspark.sql import Window as W` alongside `import pyspark.sql.functions as F`.

### Always specify an explicit frame

Without a frame, Spark picks one that changes depending on whether `orderBy` is present.

```python
# BAD — F.sum gives running sum with orderBy, total without. Surprising.
w = W.partitionBy('key').orderBy('num')

# GOOD — explicit about what you want
w = W.partitionBy('key').orderBy('num').rowsBetween(W.unboundedPreceding, W.unboundedFollowing)
```

### `row_number` + filter vs `first` — know the difference

- `row_number` + filter = **drop rows**, keep the best one
- `first` over window = **overwrite a column value**, keep all rows

### Use `ignorenulls=True` with `first` and `last`

Without it, a null in the first row gives null for the entire partition.

```python
# BAD — returns None if first row is null
F.first('version').over(window)

# GOOD
F.first('version', ignorenulls=True).over(window)
```

### Avoid empty `partitionBy()`

It forces all data into one partition. Use `.agg()` instead for global aggregations.

```python
# BAD — single partition, kills performance
w = W.partitionBy()
df.select(F.sum('num').over(w))

# GOOD
df.agg(F.sum('num').alias('total'))
```

## 5. Map & Array Higher-Order Functions

### Use `map_zip_with` when merging maps with complex logic

`map_concat` is fine for simple merges with no key overlap. When you need custom logic per key (e.g., keep the newer timestamp, pick the higher value), use `map_zip_with` — it gives you a per-key merge function instead of blindly letting one side win.

```python
# BAD — no control over conflict resolution
map_concat(existing_map, new_map)

# GOOD — keep the entry with the later timestamp
map_zip_with(new_map, existing_map,
    lambda key, v1, v2: (
        F.when(v1.isNull(), v2)
        .when(v2.isNull(), v1)
        .otherwise(F.when(v1.event_ts >= v2.event_ts, v1).otherwise(v2))
    )
)
```

### Use `transform` + `array_max` to extract from nested structs

```python
# Extract max event_ts from a map of structs
array_max(transform(map_values(my_map), lambda x: x.event_ts))
```

### Avoid UDFs — use native Spark functions first

UDFs break Catalyst optimization and add serialization overhead. Before writing one, check if a built-in Spark function or higher-order function can do the job.

## 6. Cumulative / Snapshot Table Patterns

### Merges must be idempotent

Re-running with the same data should produce the same result, not create duplicates.

### Merges must be order-independent

Backfilling old data should not overwrite newer data. Use an explicit ordering criterion (e.g., event timestamp, version number, partition date) to resolve conflicts — don't rely on positional precedence like `coalesce` argument order.

### Validate primary key uniqueness after writes

Add audit steps that validate primary key uniqueness and check for nulls in key columns.

## 7. Data Quality & Performance

### Use `F.lit(None)` for empty columns, never empty strings

```python
# BAD
df = df.withColumn('foo', F.lit(''))
df = df.withColumn('foo', F.lit('NA'))

# GOOD
df = df.withColumn('foo', F.lit(None))
```

### Avoid `.otherwise()` as a general catch-all

Unknown values silently collapse into the otherwise bucket, hiding data quality issues.

```python
# BAD — a new platform_type you didn't anticipate becomes "Other" silently
F.when(F.col('platform_type') == 'android', 'Mobile')
 .when(F.col('platform_type') == 'ios', 'Mobile')
 .otherwise('Other')

# GOOD — unmapped values stay null, surfacing gaps in your logic
F.when(F.col('platform_type') == 'android', 'Mobile')
 .when(F.col('platform_type') == 'ios', 'Mobile')
```

### No `.show()`, `.collect()`, `.printSchema()` in production

These trigger full materialization or add unnecessary driver overhead. Use them only for local debugging, never in deployed ETL code. `.count()` is acceptable when used intentionally (e.g., logging row counts for monitoring, forcing materialization before a DAG fork).

### Use `persist()` intentionally

Only persist a DataFrame when it's referenced in multiple subsequent actions — otherwise the write action will materialize it for you. `.persist()` + `.count()` is a common pattern to force materialization and log row counts for debugging; use it when needed but be aware it adds a full scan.

Choose the storage level based on your use case:
- `MEMORY_AND_DISK` — safe default, spills to disk if memory is tight
- `MEMORY_ONLY` — faster but risks recomputation if evicted
- `DISK_ONLY` — for very large DataFrames that don't fit in memory

## 8. Iceberg Write Patterns

### Use `.byName()` for schema evolution safety

Column ordering doesn't matter — Spark matches by name, not position.

```python
df.write.byName().mode("overwrite").insertInto("catalog.my_table")
```

### Use `__partitions` metadata table for latest partition reads

Iceberg exposes a `__partitions` metadata table. Use it to find the latest snapshot instead of scanning the full table.

```python
partition_df = spark.read.table("catalog.my_table__partitions").select(
    "partition.partition_date", "partition.partition_hour"
)
max_partition = partition_df.orderBy(
    F.col("partition_date").desc(), F.col("partition_hour").desc()
).first()
if max_partition is None:
    raise ValueError("No partitions found in catalog.my_table")
latest_date = max_partition["partition_date"]
```

### Understand `write.distribution-mode`

- `"none"` — no re-shuffle before writing. Fastest, but output file sizes depend on upstream partitioning.
- `"hash"` — redistributes data by partition key. Produces evenly sized files but adds a shuffle.
- `"range"` — sorts data by partition key before writing. Good for ordered scan performance but most expensive.
