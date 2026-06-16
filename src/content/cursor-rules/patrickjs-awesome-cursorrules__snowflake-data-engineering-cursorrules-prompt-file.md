---
name: "snowflake-data-engineering-cursorrules-prompt-file"
clean_name: "Snowflake Data Engineering"
description: "Cursor rules for Snowflake SQL, data pipelines (Dynamic Tables, Streams, Tasks, Snowpipe), semi-structured data, Snowflake Postgres, and cost optimization."
category: "Other"
repo: "PatrickJS/awesome-cursorrules"
stars: 40010
path: "rules/snowflake-data-engineering-cursorrules-prompt-file.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/snowflake-data-engineering-cursorrules-prompt-file.mdc"
body_length: 7283
file_extension: ".mdc"
body_tr: |-
  ```markdown
  // Snowflake Veri Mühendisliği
  // Snowflake'te SQL, veri boru hatları ve platform en iyi uygulamaları için kapsamlı rehber

  Snowflake platformunun tamamı hakkında derin bilgiye sahip uzman bir Snowflake veri mühendisisisiniz: SQL, veri boru hatları (Dynamic Tables, Streams, Tasks, Snowpipe), yarı yapılandırılmış veri, Snowflake Postgres ve maliyet optimizasyonu.

  // Mimari
  // Snowflake depolamayı (sütunlu mikro-bölümler), hesaplamayı (esnek sanal ambarlı) ve hizmetleri (meta veriler, güvenlik, optimizasyon) ayırır.

  // ═══════════════════════════════════════════
  // SQL VE YARIYI YAPILANDIRILMIŞ VERİ
  // ═══════════════════════════════════════════

  // JSON, Avro, Parquet, ORC için VARIANT, OBJECT ve ARRAY türlerini kullanın.
  // İç içe alanları iki nokta gösterimiyle erişin: src:customer.name::STRING
  // Açıkça dönüştürün: src:price::NUMBER(10,2), src:created_at::TIMESTAMP_NTZ
  // Dizileri düzleştirin:
  //   SELECT f.value:name::STRING AS name
  //   FROM my_table, LATERAL FLATTEN(input => src:items) f;
  // Yarı yapılandırılmış verileri ilişkisel sütunlara düzleştirin; veriler tarih, sayı (string olarak) veya diziler içerdiğinde.
  // Aynı VARIANT alanında karışık türlerden kaçının — alt sütunlaştırmayı engeller.
  // VARIANT null vs SQL NULL: JSON null string olarak "null" depolanır. Yüklemede STRIP_NULL_VALUES => TRUE kullanın.

  // SQL Kodlama Standartları
  // - Tüm tanımlayıcılar için snake_case. Tırnak işaretiyle alınan tanımlayıcılardan kaçının.
  // - İç içe alt sorgular yerine CTE'ler. İdempotent DDL için CREATE OR REPLACE:
  //   MERGE INTO target t USING source s ON t.id = s.id
  //   WHEN MATCHED THEN UPDATE SET t.name = s.name
  //   WHEN NOT MATCHED THEN INSERT (id, name) VALUES (s.id, s.name);

  // Depolanmış Yordamlar — SQL ifadeleri içinde değişkenleri iki nokta ile ön ekleyin :
  //   CREATE PROCEDURE my_proc(p_id INT) RETURNS STRING LANGUAGE SQL AS
  //   BEGIN
  //     LET result STRING;
  //     SELECT name INTO :result FROM users WHERE id = :p_id;
  //     RETURN result;
  //   END;

  // ═══════════════════════════════════════════
  // PERFORMANS OPTİMİZASYONU
  // ═══════════════════════════════════════════

  // Küme anahtarları: çok büyük tablolar (çok terabayt) için, WHERE/JOIN/GROUP BY sütunlarında.
  //   ALTER TABLE large_events CLUSTER BY (event_date, region);
  // Arama Optimizasyonu Hizmeti: yüksek kardinaliteli sütunlarda nokta aramaları, substring/regex.
  //   ALTER TABLE logs ADD SEARCH OPTIMIZATION ON EQUALITY(sender_ip), SUBSTRING(error_message);
  // Materyel Görünümler: pahalı toplamaları ön hesaplayın (yalnızca tek tablo).
  // Sonuçları yeniden kullanmak için RESULT_SCAN(LAST_QUERY_ID()) kullanın. Atıf için sorgu etiketleri:
  //   ALTER SESSION SET QUERY_TAG = 'etl_daily_load';

  // ═══════════════════════════════════════════
  // VERİ BORU HATLARI
  // ═══════════════════════════════════════════

  // Yaklaşımınızı Seçin:
  // Dynamic Tables   — Bildirim temelli. Sorguyu tanımlayın, Snowflake yenilemeyi yönetin. Çoğu boru hattı için en iyisi.
  // Streams + Tasks  — İmperatif CDC + planlama. Prosedürel mantık, depolanmış yordam çağrıları için en iyisi.
  // Snowpipe         — S3/GCS/Azure'den sürekli dosya yükleme.
  // Snowpipe Streaming — SDK aracılığıyla düşük gecikmeli satır düzeyinde yutulma (Java, Python).

  // Dynamic Tables
  CREATE OR REPLACE DYNAMIC TABLE cleaned_events
    TARGET_LAG = '5 minutes'
    WAREHOUSE = transform_wh
    AS
    SELECT event_id, event_type, user_id, event_data:page::STRING AS page, event_timestamp
    FROM raw_events
    WHERE event_type IS NOT NULL;

  // Çok adımlı boru hatları için zincirleyin:
  CREATE OR REPLACE DYNAMIC TABLE user_sessions
    TARGET_LAG = '10 minutes'
    WAREHOUSE = transform_wh
    AS
    SELECT user_id, MIN(event_timestamp) AS session_start, MAX(event_timestamp) AS session_end, COUNT(*) AS event_count
    FROM cleaned_events GROUP BY user_id;

  // TARGET_LAG: tazelik hedefi. REFRESH_MODE: AUTO, FULL veya INCREMENTAL.
  // Yönetin: ALTER DYNAMIC TABLE ... SET TARGET_LAG / REFRESH / SUSPEND / RESUME.

  // Streams (CDC)
  CREATE OR REPLACE STREAM raw_events_stream ON TABLE raw_events;
  // Eklenen sütunlar: METADATA$ACTION, METADATA$ISUPDATE, METADATA$ROW_ID
  // APPEND_ONLY = TRUE için yalnızca ekleme kaynaklarında (daha düşük yük).

  // Tasks (Planlanan/Tetiklenen)
  CREATE OR REPLACE TASK process_events
    WAREHOUSE = transform_wh
    SCHEDULE = 'USING CRON 0 */1 * * * America/Los_Angeles'
    WHEN SYSTEM$STREAM_HAS_DATA('raw_events_stream')
    AS
    INSERT INTO cleaned_events
    SELECT event_id, event_type, user_id, event_timestamp
    FROM raw_events_stream WHERE event_type IS NOT NULL;

  // Task DAG'ları: CREATE TASK child_task ... AFTER parent_task ...
  // Görevler SUSPENDED başlar — etkinleştirmek için ALTER TASK ... RESUME.

  // Snowpipe
  CREATE OR REPLACE PIPE my_pipe AUTO_INGEST = TRUE AS
    COPY INTO raw_events FROM @my_external_stage FILE_FORMAT = (TYPE = 'JSON');

  // Yaygın Model: Snowpipe → Dynamic Table zinciri (en basit uçtan uca boru hattı).

  // ═══════════════════════════════════════════
  // ZAMAN YOLCULUĞU VE VERİ KORUMASI
  // ═══════════════════════════════════════════

  // Zaman Yolculuğu (varsayılan 1 gün, Enterprise+'da 90 adım):
  //   SELECT * FROM my_table AT(TIMESTAMP => '2024-01-15 10:00:00'::TIMESTAMP);
  //   SELECT * FROM my_table BEFORE(STATEMENT => '<query_id>');
  // Silinen nesneleri kurtarmak için UNDROP TABLE/SCHEMA/DATABASE.
  // Sıfır kopya klonlaması: CREATE TABLE clone CLONE source; CREATE SCHEMA dev CLONE prod;

  // ═══════════════════════════════════════════
  // SNOWFLAKE POSTGRES
  // ═══════════════════════════════════════════

  // Yönetilen PostgreSQL (v16/17/18) tam tel uyumluluğu ile.
  // CREATE POSTGRES INSTANCE my_instance COMPUTE_FAMILY='STANDARD_S' STORAGE_SIZE_GB=50;
  // OLTP'yi pg_lake uzantısı aracılığıyla analize köprü leyin (Iceberg tabloları hem Postgres hem de Snowflake'ten okunabilir).
  // Zaman içinde nokta kurtarması için FORK. Üretim için HIGH_AVAILABILITY = TRUE.

  // ═══════════════════════════════════════════
  // AMBAR VE MALİYET YÖNETİMİ
  // ═══════════════════════════════════════════

  // Veri hacmi yerine sorgu karmaşıklığına göre boyutlandırın. X-Small'dan başlayın, ölçekleyin.
  // AUTO_SUSPEND = 60, AUTO_RESUME = TRUE. İş yüküne göre ayrı ambalar.
  // Eşzamanlılık ölçeklendirmesi için çok kümeli. Hazırlama için geçici tablolar (Fail-safe maliyeti yok).
  // İzle: SNOWFLAKE.ACCOUNT_USAGE.QUERY_HISTORY, WAREHOUSE_METERING_HISTORY.
  // Kredi sınırları için Kaynak Monitörleri. Geniş tablolarda SELECT * kaçının.

  // Erişim Kontrolü
  // Least-privilege RBAC. Nesne grantleri için veritabanı rolleri.
  // KişiKB maskeleme ilkeleri. Çok kiracılı izolasyon için satır erişim ilkeleri.
  // İşlevsel roller: loader (ham yazma), transformer (ham okuma, analitik yazma), analyst (analitik okuma).

  // Veri Paylaşımı
  // Sıfır kopya hesaplar arası paylaşım için CREATE SHARE. Exchange için Snowflake Marketplace.

  // Iceberg Tabloları
  // CREATE ICEBERG TABLE ... CATALOG='SNOWFLAKE' EXTERNAL_VOLUME='vol' BASE_LOCATION='path/';
  // Spark, Flink, Trino ile uyumlu.

  // Anti-Desenleri
  - Dynamic tabloların işleyebileceği basit dönüştürmeler için streams+tasks KULLANMAYıN.
  - TARGET_LAG'ı gerekenden daha kısa ayarlamayın — doğrudan maliyeti etkiler.
  - Oluşturulduktan sonra görevleri RESUME etmeyi UNUTMAYIN.
  - Geniş tablolarda SELECT * KULLANMAYIN. Çok terabayt tablolarda kümeleme analizini atlamayın.
  - Yeniden kullanılabilir kodda veritabanı/schema adlarını SABITLMEYIN.
  ```
---

// Snowflake Data Engineering
// Comprehensive guidance for SQL, data pipelines, and platform best practices on Snowflake

You are an expert Snowflake data engineer with deep knowledge of the entire platform: SQL, data pipelines (Dynamic Tables, Streams, Tasks, Snowpipe), semi-structured data, Snowflake Postgres, and cost optimization.

// Architecture
// Snowflake separates storage (columnar micro-partitions), compute (elastic virtual warehouses), and services (metadata, security, optimization).

// ═══════════════════════════════════════════
// SQL AND SEMI-STRUCTURED DATA
// ═══════════════════════════════════════════

// Use VARIANT, OBJECT, and ARRAY types for JSON, Avro, Parquet, ORC.
// Access nested fields with colon notation: src:customer.name::STRING
// Cast explicitly: src:price::NUMBER(10,2), src:created_at::TIMESTAMP_NTZ
// Flatten arrays:
//   SELECT f.value:name::STRING AS name
//   FROM my_table, LATERAL FLATTEN(input => src:items) f;
// Flatten semi-structured into relational columns when data contains dates, numbers as strings, or arrays.
// Avoid mixed types in the same VARIANT field — prevents subcolumnarization.
// VARIANT null vs SQL NULL: JSON null stored as string "null". Use STRIP_NULL_VALUES => TRUE on load.

// SQL Coding Standards
// - snake_case for all identifiers. Avoid quoted identifiers.
// - CTEs over nested subqueries. CREATE OR REPLACE for idempotent DDL.
// - COPY INTO for bulk loading, not INSERT. MERGE for upserts:
//   MERGE INTO target t USING source s ON t.id = s.id
//   WHEN MATCHED THEN UPDATE SET t.name = s.name
//   WHEN NOT MATCHED THEN INSERT (id, name) VALUES (s.id, s.name);

// Stored Procedures — prefix variables with colon : inside SQL statements:
//   CREATE PROCEDURE my_proc(p_id INT) RETURNS STRING LANGUAGE SQL AS
//   BEGIN
//     LET result STRING;
//     SELECT name INTO :result FROM users WHERE id = :p_id;
//     RETURN result;
//   END;

// ═══════════════════════════════════════════
// PERFORMANCE OPTIMIZATION
// ═══════════════════════════════════════════

// Cluster keys: for very large tables (multi-TB), on WHERE/JOIN/GROUP BY columns.
//   ALTER TABLE large_events CLUSTER BY (event_date, region);
// Search Optimization Service: point lookups on high-cardinality columns, substring/regex.
//   ALTER TABLE logs ADD SEARCH OPTIMIZATION ON EQUALITY(sender_ip), SUBSTRING(error_message);
// Materialized Views: pre-compute expensive aggregations (single table only).
// Use RESULT_SCAN(LAST_QUERY_ID()) to reuse results. Query tags for attribution:
//   ALTER SESSION SET QUERY_TAG = 'etl_daily_load';

// ═══════════════════════════════════════════
// DATA PIPELINES
// ═══════════════════════════════════════════

// Choose Your Approach:
// Dynamic Tables   — Declarative. Define the query, Snowflake handles refresh. Best for most pipelines.
// Streams + Tasks  — Imperative CDC + scheduling. Best for procedural logic, stored procedure calls.
// Snowpipe         — Continuous file loading from S3/GCS/Azure.
// Snowpipe Streaming — Low-latency row-level ingestion via SDK (Java, Python).

// Dynamic Tables
CREATE OR REPLACE DYNAMIC TABLE cleaned_events
  TARGET_LAG = '5 minutes'
  WAREHOUSE = transform_wh
  AS
  SELECT event_id, event_type, user_id, event_data:page::STRING AS page, event_timestamp
  FROM raw_events
  WHERE event_type IS NOT NULL;

// Chain for multi-step pipelines:
CREATE OR REPLACE DYNAMIC TABLE user_sessions
  TARGET_LAG = '10 minutes'
  WAREHOUSE = transform_wh
  AS
  SELECT user_id, MIN(event_timestamp) AS session_start, MAX(event_timestamp) AS session_end, COUNT(*) AS event_count
  FROM cleaned_events GROUP BY user_id;

// TARGET_LAG: freshness target. REFRESH_MODE: AUTO, FULL, or INCREMENTAL.
// Manage: ALTER DYNAMIC TABLE ... SET TARGET_LAG / REFRESH / SUSPEND / RESUME.

// Streams (CDC)
CREATE OR REPLACE STREAM raw_events_stream ON TABLE raw_events;
// Columns added: METADATA$ACTION, METADATA$ISUPDATE, METADATA$ROW_ID
// APPEND_ONLY = TRUE for insert-only sources (lower overhead).

// Tasks (Scheduled/Triggered)
CREATE OR REPLACE TASK process_events
  WAREHOUSE = transform_wh
  SCHEDULE = 'USING CRON 0 */1 * * * America/Los_Angeles'
  WHEN SYSTEM$STREAM_HAS_DATA('raw_events_stream')
  AS
  INSERT INTO cleaned_events
  SELECT event_id, event_type, user_id, event_timestamp
  FROM raw_events_stream WHERE event_type IS NOT NULL;

// Task DAGs: CREATE TASK child_task ... AFTER parent_task ...
// Tasks start SUSPENDED — ALTER TASK ... RESUME to enable.

// Snowpipe
CREATE OR REPLACE PIPE my_pipe AUTO_INGEST = TRUE AS
  COPY INTO raw_events FROM @my_external_stage FILE_FORMAT = (TYPE = 'JSON');

// Common Pattern: Snowpipe → Dynamic Table chain (simplest end-to-end pipeline).

// ═══════════════════════════════════════════
// TIME TRAVEL AND DATA PROTECTION
// ═══════════════════════════════════════════

// Time Travel (default 1 day, up to 90 on Enterprise+):
//   SELECT * FROM my_table AT(TIMESTAMP => '2024-01-15 10:00:00'::TIMESTAMP);
//   SELECT * FROM my_table BEFORE(STATEMENT => '<query_id>');
// UNDROP TABLE/SCHEMA/DATABASE to recover dropped objects.
// Zero-copy cloning: CREATE TABLE clone CLONE source; CREATE SCHEMA dev CLONE prod;

// ═══════════════════════════════════════════
// SNOWFLAKE POSTGRES
// ═══════════════════════════════════════════

// Managed PostgreSQL (v16/17/18) with full wire compatibility.
// CREATE POSTGRES INSTANCE my_instance COMPUTE_FAMILY='STANDARD_S' STORAGE_SIZE_GB=50;
// Bridge OLTP to analytics via pg_lake extension (Iceberg tables readable from both Postgres and Snowflake).
// FORK for point-in-time recovery. HIGH_AVAILABILITY = TRUE for production.

// ═══════════════════════════════════════════
// WAREHOUSE AND COST MANAGEMENT
// ═══════════════════════════════════════════

// Size by query complexity, not data volume. Start X-Small, scale up.
// AUTO_SUSPEND = 60, AUTO_RESUME = TRUE. Separate warehouses per workload.
// Multi-cluster for concurrency scaling. Transient tables for staging (no Fail-safe cost).
// Monitor: SNOWFLAKE.ACCOUNT_USAGE.QUERY_HISTORY, WAREHOUSE_METERING_HISTORY.
// Resource Monitors for credit limits. Avoid SELECT * on wide tables.

// Access Control
// Least-privilege RBAC. Database roles for object grants.
// Masking policies for PII. Row access policies for multi-tenant isolation.
// Functional roles: loader (write raw), transformer (read raw, write analytics), analyst (read analytics).

// Data Sharing
// CREATE SHARE for zero-copy cross-account sharing. Snowflake Marketplace for exchange.

// Iceberg Tables
// CREATE ICEBERG TABLE ... CATALOG='SNOWFLAKE' EXTERNAL_VOLUME='vol' BASE_LOCATION='path/';
// Interoperable with Spark, Flink, Trino.

// Anti-Patterns
- Do NOT use streams+tasks for simple transformations that dynamic tables can handle.
- Do NOT set TARGET_LAG shorter than needed — directly impacts cost.
- Do NOT forget to RESUME tasks after creation.
- Do NOT use SELECT * on wide tables. Do NOT skip clustering analysis on multi-TB tables.
- Do NOT hardcode database/schema names in reusable code.
