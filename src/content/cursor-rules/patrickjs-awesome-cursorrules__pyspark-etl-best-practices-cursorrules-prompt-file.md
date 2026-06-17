---
name: "pyspark-etl-best-practices-cursorrules-prompt-file"
clean_name: "Pyspark Etl Best Practices"
description: "Cursor rules for PySpark ETL development with code style, joins, window functions, map operations, and Iceberg patterns."
description_tr: "PySpark ETL geliştirme için Cursor kuralları; kod stili, joinler, window functions, map işlemleri ve Iceberg pattern'lerini kapsar."
category: "Other"
repo: "PatrickJS/awesome-cursorrules"
stars: 40019
path: "rules/pyspark-etl-best-practices-cursorrules-prompt-file.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/pyspark-etl-best-practices-cursorrules-prompt-file.mdc"
body_length: 13464
file_extension: ".mdc"
body_tr: |-
  PySpark, Spark SQL, Apache Iceberg ve production veri mühendisliğinde uzmanız. Performanslı, idiomatik ETL kodu yazarsınız; bu kod testlenebilir, okunabilir ve kümülatif/snapshot tablolar için güvenlidir.

  PySpark kodu oluştururken veya incelerken bu kurallara uyun.

  # PySpark ETL En İyi Uygulamaları

  ## 1. Proje Yapısı

  ### ETL sınıfı iskeleti

  SparkSession yaşam döngüsünü yöneten bir temel sınıf oluşturun. Testlerin yerel bir oturum enjekte edebilmesi için isteğe bağlı bir `spark_session` parametresi kabul edin. İş mantığı için soyut bir yöntem kullanın.

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

  ### Konfigürasyon — fabrika fonksiyonu kullanın

  Dataclass'ı saf veri olarak tutun ve CLI ayrıştırmasını bağımsız bir fabrika fonksiyonuna koyun. Bu, `sys.argv`'ye dokunmadan testlerde konfigürasyonları oluşturmayı kolaylaştırır.

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

  ### Bölüm-bilgili okumalar için paylaşılan reader kullanın

  Bölüm mekaniğini işleyen (tarih filtreleri, saat aralıkları, son bölüm aramaları) genel bir reader yardımcısı oluşturun. Tablo başına tek seferlik reader sınıfları oluşturmayın — alan spesifik filtreleri görünür olduğu ETL'de tutun.

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

  Basit outer-join-with-coalesce mergeleri için alias işlemini, join anahtarı coalesce'ini ve sütun başına varsayılanları işleyen yeniden kullanılabilir bir merge fonksiyonu oluşturun. Anahtar başına çakışma çözümüne ihtiyaç duyduğunuzda `map_zip_with` kullanın (zaman damgası-bilgili mergeler).

  ## 2. Kod Stili

  ### `F.col()` kullanın — her zaman `F.` ön ekini kullanın

  Fonksiyonları `import pyspark.sql.functions as F` olarak içe aktarın ve tüm kod boyunca `F.col()`, `F.when()`, `F.lit()` vb. kullanın. Bu, PySpark ifadelerini hemen tanınabilir ve aranabilir kılar.

  `df.colA` öznitelik erişimini kaçının — sütunu belirli bir DataFrame değişkenine bağlar ve joinlerden sonra veya değişken yeniden atandığında bozulur. Belirsizlik gidermek gerekiyorsa DataFrame üzerinde `.alias()` ile `F.col()` kullanın.

  ```python
  # KÖTÜ — sütunu belirli bir DataFrame değişkenine bağlar, joinlerden sonra bozulur
  df.select(F.lower(df1.colA), F.upper(df2.colB))

  # İYİ
  df.select(F.lower(F.col('colA')), F.upper(F.col('colB')))
  ```

  ### Karmaşık koşulları adlandırılmış değişkenlere ayıklayın

  `.filter()` veya `F.when()` içindeki mantığı 3 ifadeyle sınırlandırın. Geri kalanını ayıklayın.

  ```python
  # KÖTÜ — iç içe parantezler içinde gizli gereksiz mantık
  F.when((F.col('status') == 'Delivered') | (((F.datediff('date_a', 'date_b') < 0) & ...)), 'Active')

  # İYİ
  is_delivered = (F.col('status') == 'Delivered')
  date_passed = (F.datediff(F.col('date_a'), F.col('date_b')) < 0)
  has_registration = (F.col('registration').rlike('.+'))
  F.when(is_delivered | (date_passed & has_registration), 'Active')
  ```

  ### `withColumn` zincirlerine göre `select`'i tercih edin

  `select`, çıktı şemasını tek seferde belirtir. `withColumn` zincirleri ara DataFrames oluşturur ve performansı düşürebilir — her çağrı sorgu planında yeni bir projeksiyon tetikler.

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

  ### Zincir sınırları

  Zincir başına maksimum 5 ifade. İşlem türüne göre ayırın (select/filter vs withColumn vs join).

  ```python
  # KÖTÜ — bir zincirde karışık ilgiler
  df = (df.select('a', 'b', 'key')
      .filter(F.col('a') == 'x')
      .withColumn('ratio', F.col('a') / F.col('b'))
      .join(df2, 'key', how='inner')
      .drop('b'))

  # İYİ — ilgiliye göre ayrılmış
  df = df.select('a', 'b', 'key').filter(F.col('a') == 'x')
  df = df.withColumn('ratio', F.col('a') / F.col('b'))
  df = df.join(df2, 'key', how='inner').drop('b')
  ```

  ## 3. Joinler

  ### Her zaman açıkça `how=` belirtin

  ```python
  # KÖTÜ
  df.join(other, 'key')

  # İYİ
  df.join(other, 'key', how='inner')
  ```

  ### Sağ joinlere göre sol joinleri tercih edin

  DataFrame sırasını çevirin ve okunabilirlik için `right` yerine `left` kullanın — birincil DataFrame solda kalır.

  ```python
  flights = flights.join(aircraft, 'aircraft_id', how='left')
  ```

  ### Joinlerden sonra belirsizlik gidermek için `.alias()` kullanın

  ```python
  # KÖTÜ — her sütunu join öncesinde yeniden adlandırma
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

  Büyük bir gerçek DataFrame'i küçük bir arama/boyut tablosuyla birleştirirken, küçük tarafı `F.broadcast()` ile sarmalayarak küçük taraftaki shuffle'ı atlayın.

  Yönetici belleğine sığacak kadar küçük tablolar için broadcast kullanın — genellikle boyut/arama tabloları (kategori aramaları, ülke kodları, yapılandırma eşlemeleri). Spark varsayılan olarak 10MB altındaki tabloları otomatik olarak yayınlar (`spark.sql.autoBroadcastJoinThreshold`), ancak Spark boyutu çıkaramadığında açık bir ipucu faydalıdır (ör. filtrelerden veya dönüştürmelerden sonra).

  Geliştirme sırasında bir tablonun broadcast'e uygun olup olmadığını kontrol etmek için:
  - **Spark UI**: bir çalışmadan sonra SQL sekmesini kontrol edin — tablo başına tarama boyutları gösterilir
  - **Hızlı satır sayısı**: `spark.read.table("catalog.my_dim").count()` (sadece geliştirme, üretim kodunda değil)
  - **Sorgu planı**: `df.explain()` — Spark, otomatik olarak yayınlarsa `BroadcastHashJoin` gösterir, yoksa `SortMergeJoin` gösterir

  ```python
  df.join(F.broadcast(category_dim), 'category_id', how='left')
  ```

  ### Asla `.dropDuplicates()`'i bir çıkış yolu olarak kullanmayın

  Yinelenen satırlar görünürse, kök nedenini bulun. `.dropDuplicates()` sorunu gizler ve shuffle ek yükü ekler.

  ## 4. Pencere Fonksiyonları

  `from pyspark.sql import Window as W` ile birlikte `import pyspark.sql.functions as F` kullanın.

  ### Her zaman açık bir çerçeve belirtin

  Çerçeve olmadan, Spark `orderBy` olup olmadığına bağlı olarak değişen birini seçer.

  ```python
  # KÖTÜ — F.sum orderBy ile çalışan toplam, olmadan toplam verir. Şaşırtıcı.
  w = W.partitionBy('key').orderBy('num')

  # İYİ — istediğiniz konusunda açık
  w = W.partitionBy('key').orderBy('num').rowsBetween(W.unboundedPreceding, W.unboundedFollowing)
  ```

  ### `row_number` + filter vs `first` — farkı bilin

  - `row_number` + filter = **satırları bırak**, en iyisini tut
  - `first` pencere üzerinde = **sütun değerini üzerine yaz**, tüm satırları tut

  ### `ignorenulls=True` kullanın `first` ve `last` ile

  Olmadan, ilk satırdaki bir null tüm bölüm için null verir.

  ```python
  # KÖTÜ — ilk satır null ise None döndürür
  F.first('version').over(window)

  # İYİ
  F.first('version', ignorenulls=True).over(window)
  ```

  ### Boş `partitionBy()` kaçının

  Tüm verileri bir bölüme zorlar. Genel toplamalar için `.agg()` kullanın.

  ```python
  # KÖTÜ — tek bölüm, performansı öldürür
  w = W.partitionBy()
  df.select(F.sum('num').over(w))

  # İYİ
  df.agg(F.sum('num').alias('total'))
  ```

  ## 5. Harita ve Dizi Yüksek Dereceli Fonksiyonları

  ### Karmaşık mantıkla haritaları birleştirirken `map_zip_with` kullanın

  `map_concat` anahtar çakışması olmayan basit mergeler için uygundur. Her anahtar için özel mantığa ihtiyaç duyduğunuzda (ör. daha yeni zaman damgasını tut, daha yüksek değeri seç), `map_zip_with` kullanın — anahtar başına merge fonksiyonu verir, bir tarafın kör bir şekilde kazanmasına izin vermez.

  ```python
  # KÖTÜ — çakışma çözümü üzerinde kontrol yok
  map_concat(existing_map, new_map)

  # İYİ — daha geç zaman damgasına sahip girişi tut
  map_zip_with(new_map, existing_map,
      lambda key, v1, v2: (
          F.when(v1.isNull(), v2)
          .when(v2.isNull(), v1)
          .otherwise(F.when(v1.event_ts >= v2.event_ts, v1).otherwise(v2))
      )
  )
  ```

  ### İç içe struct'lardan ayıklamak için `transform` + `array_max` kullanın

  ```python
  # Struct haritasından max event_ts'yi ayıkla
  array_max(transform(map_values(my_map), lambda x: x.event_ts))
  ```

  ### UDFs kaçının — önce yerel Spark fonksiyonlarını kullanın

  UDFs Catalyst optimizasyonunu kırar ve serileştirme ek yükü ekler. Birini yazılı bir fonksiyon veya yüksek dereceli fonksiyon işi yapıp yapamayacağını kontrol edin.

  ## 6. Kümülatif / Snapshot Tablo Desenleri

  ### Mergeler idempotent olmalı

  Aynı verilerle yeniden çalıştırma, çoğaltmalar oluşturmamalı aynı sonucu üretmelidir.

  ### Mergeler sıradan bağımsız olmalı

  Eski verileri geri doldurma, daha yeni verilerin üzerine yazmamalıdır. Çakışmaları çözmek için açık bir sıralama kriteri kullanın (ör. olay zaman damgası, sürüm numarası, bölüm tarihi) — `coalesce` argümanı sırası gibi konumsal önceliğe güvenmeyin.

  ### Yazılardan sonra birincil anahtar benzersizliğini doğrulayın

  Birincil anahtar benzersizliğini doğrulayan ve anahtar sütunlarında null kontrol eden denetim adımları ekleyin.

  ## 7. Veri Kalitesi ve Performans

  ### Boş sütunlar için `F.lit(None)` kullanın, asla boş dizeler değil

  ```python
  # KÖTÜ
  df = df.withColumn('foo', F.lit(''))
  df = df.withColumn('foo', F.lit('NA'))

  # İYİ
  df = df.withColumn('foo', F.lit(None))
  ```

  ### `.otherwise()` genel bir catch-all olarak kaçının

  Bilinmeyen değerler sessizce otherwise kovasına çöker, veri kalitesi sorunlarını gizler.

  ```python
  # KÖTÜ — öngörmediğiniz yeni bir platform_type sessizce "Other" olur
  F.when(F.col('platform_type') == 'android', 'Mobile')
   .when(F.col('platform_type') == 'ios', 'Mobile')
   .otherwise('Other')

  # İYİ — eşleştirilmemiş değerler null kalır, mantığınızdaki boşlukları yüzeye çıkarır
  F.when(F.col('platform_type') == 'android', 'Mobile')
   .when(F.col('platform_type') == 'ios', 'Mobile')
  ```

  ### Üretimde `.show()`, `.collect()`, `.printSchema()` yok

  Bunlar tam materyalizasyon tetikler veya gereksiz sürücü ek yükü ekler. Sadece yerel hata ayıklama için kullanın, asla dağıtılmış ETL kodunda değil. `.count()` kasıtlı olarak kullanıldığında kabul edilebilir (ör. izleme için satır sayılarını kaydetme, DAG çatalından önce materyalizasyon zorlama).

  ### `persist()`'i kasıtlı olarak kullanın

  Sadece bir DataFrame sonraki birden fazla işlemde referans alındığında persist edin — aksi takdirde yazma işlemi onu sizin için materyalize edecektir. `.persist()` + `.count()` hata ayıklama için tam tarama zorlayıp satır sayılarını kaydetmek için yaygın bir desendir; gerekli olduğunda kullanın ancak tam tarama eklediğinin farkında olun.

  Kullanım durumunuza göre depolama seviyesini seçin:
  - `MEMORY_AND_DISK` — güvenli varsayılan, bellek sıkıysa diske taşar
  - `MEMORY_ONLY` — daha hızlı ancak taşınırsa yeniden hesaplama riski
  - `DISK_ONLY` — bellekte sığmayan çok büyük DataFrames için

  ## 8. Iceberg Yazma Desenleri

  ### Şema evrimini güvenliği için `.byName()` kullanın

  Sütun sırası önemli değildir — Spark konuma göre değil ada göre eşleştirir.

  ```python
  df.write.byName().mode("overwrite").insertInto("catalog.my_table")
  ```

  ### En son bölüm okumalarında `__partitions` meta veri tablosunu kullanın

  Iceberg bir `__partitions` meta veri tablosu sunar. Son snapshot'ı bulmak için tam tabloyu taramak yerine kullanın.

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

  ### `write.distribution-mode` anlayın

  - `"none"` — yazma öncesi yeniden shuffle yok. En hızlı, ancak çıktı dosya boyutları upstream bölümlemeye bağlıdır.
  - `"hash"` — verileri bölüm anahtarına göre yeniden dağıtır. Eşit boyuttaki dosyalar üretir ancak shuffle ekler.
  - `"range"` — yazma öncesi verileri bölüm anahtarına göre sıralar. Sıralı tarama performansı için iyi ancak en pahalıdır.
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
