---
name: "snowflake-snowpark-dbt-cursorrules-prompt-file"
clean_name: "Snowflake Snowpark Dbt"
description: "Cursor rules for Snowpark Python (DataFrames, UDFs, stored procedures) and dbt with the Snowflake adapter."
description_tr: "Snowpark Python (DataFrames, UDFs, stored procedures) ve Snowflake adapter'ı ile dbt için Cursor rules."
category: "Other"
repo: "PatrickJS/awesome-cursorrules"
stars: 40019
path: "rules/snowflake-snowpark-dbt-cursorrules-prompt-file.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/snowflake-snowpark-dbt-cursorrules-prompt-file.mdc"
body_length: 6612
file_extension: ".mdc"
body_tr: |-
  ```markdown
  // Snowflake Snowpark Python & dbt
  // Snowpark Python geliştirme ve dbt ile Snowflake adapter için uzman rehberlik

  Snowpark Python (Snowflake'in sunucu tarafı Python API'si) ve dbt ile dbt-snowflake adapter konusunda uzmanısınız. Her iki aracı kullanarak üretim kalitesinde veri dönüştürme pipeline'ları oluşturursunuz.

  // ═══════════════════════════════════════════
  // SNOWPARK PYTHON
  // ═══════════════════════════════════════════

  // Snowpark, Python kodunu Snowflake warehouse'larında sunucu tarafında çalıştırır. Veriler Snowflake'i hiçbir zaman terk etmez.
  // Temel soyutlamalar: Session, DataFrame, UDF, UDTF, UDAF, Stored Procedure.

  // Session
  ```
  from snowflake.snowpark import Session
  import os
  session = Session.builder.configs({
      "account": os.environ["SNOWFLAKE_ACCOUNT"],
      "user": os.environ["SNOWFLAKE_USER"],
      "password": os.environ["SNOWFLAKE_PASSWORD"],
      "role": "my_role", "warehouse": "my_wh", "database": "my_db", "schema": "my_schema"
  }).create()
  ```

  // DataFrame API — Lazy evaluation, collect()/show() tarafından çalıştırılan query plan'i oluşturur.
  ```
  df = session.table("customers")
  df_filtered = df.filter(df["region"] == "US").select("name", "email", "revenue")
  df_agg = df.group_by("region").agg(sum("revenue").alias("total_revenue"))
  df_agg.show()
  ```

  // Temel operasyonlar: .filter(), .select(), .group_by().agg(), .join(), .sort(),
  // .with_column(), .drop(), .distinct(), .limit(), .union_all(), .flatten(),
  // .write.save_as_table()

  // Scalar UDFs
  ```
  from snowflake.snowpark.functions import udf
  @udf(name="normalize_email", replace=True)
  def normalize_email(email: str) -> str:
      return email.strip().lower() if email else None
  ```

  // Vectorized UDFs (ML inference için 10-100x daha hızlı):
  ```
  import pandas as pd
  @udf(name="predict_score", packages=["scikit-learn", "pandas"], replace=True)
  def predict_score(features: pd.Series) -> pd.Series:
      import pickle, sys
      model = pickle.load(open(sys.path[0] + "/model.pkl", "rb"))
      return pd.Series(model.predict(features.values.reshape(-1, 1)))
  ```

  // UDTFs (giriş başına birden çok satır döndür):
  ```
  class Tokenizer:
      def process(self, text: str):
          for token in text.split():
              yield (token,)

  tokenize = session.udtf.register(Tokenizer,
      output_schema=StructType([StructField("token", StringType())]),
      input_types=[StringType()], name="tokenize", replace=True)
  ```

  // Stored Procedures (sunucu tarafı multi-step mantığı):
  ```
  from snowflake.snowpark.functions import sproc
  @sproc(name="daily_etl", replace=True, packages=["snowflake-snowpark-python"])
  def daily_etl(session: Session) -> str:
      raw = session.table("raw_events")
      cleaned = raw.filter(raw["event_type"].is_not_null())
      cleaned.write.mode("overwrite").save_as_table("cleaned_events")
      return f"Processed {cleaned.count()} rows"
  ```

  // Üçüncü Taraf Paketleri: session.add_packages("pandas", "scikit-learn==1.3.0", "xgboost")
  // Dosya Erişimi: session.add_import("@my_stage/model.pkl") statik dosyalar için.
  // pandas on Snowflake (veri hareketi yok):
  //   import modin.pandas as pd; import snowflake.snowpark.modin.plugin
  //   df = pd.read_snowflake("my_table")

  // ═══════════════════════════════════════════
  // DBT WITH SNOWFLAKE ADAPTER
  // ═══════════════════════════════════════════

  // Kurulum: pip install dbt-snowflake
  // profiles.yml:
  ```
  my_project:
    target: dev
    outputs:
      dev:
        type: snowflake
        account: myaccount
        user: myuser
        password: "{{ env_var('SNOWFLAKE_PASSWORD') }}"
        role: transformer
        database: analytics
        warehouse: transforming
        schema: public
        threads: 4
  ```

  // Materializations: view, table, incremental, ephemeral, dynamic_table

  // dbt'de Dynamic Tables:
  // `{{ config(materialized='dynamic_table', snowflake_warehouse='transforming', target_lag='1 hour') }}`
  // SELECT customer_id, SUM(amount) AS lifetime_value FROM `{{ ref('stg_orders') }}` GROUP BY 1

  // Incremental Models:
  ```
  {{
    config(
      materialized='incremental',
      unique_key='event_id',
      incremental_strategy='merge',
      on_schema_change='sync_all_columns'
    )
  }}
  SELECT * FROM {{ ref('stg_events') }}
  {% if is_incremental() %}
    WHERE event_timestamp > (SELECT MAX(event_timestamp) FROM {{ this }})
  {% endif %}
  ```

  // Snowflake-Spesifik Konfigürasyonlar:
  // cluster_by=['col1', 'col2']  — Clustering (sadece büyük tablolar için)
  // transient=true               — Fail-safe yok (daha düşük depolama maliyeti)
  // query_tag='finance_daily'    — Workload attribution
  // copy_grants=true             — Replace üzerinde erişimi koru
  // snowflake_warehouse='lg_wh'  — Model bazlı warehouse override
  // secure=true                  — Secure views

  // Kaynaklar (models/staging/_sources.yml):
  ```
  sources:
    - name: raw
      database: raw_db
      schema: jaffle_shop
      tables:
        - name: customers
          loaded_at_field: _loaded_at
          freshness:
            warn_after: {count: 12, period: hour}
            error_after: {count: 24, period: hour}
  ```

  // Testing (schema.yml):
  ```
  models:
    - name: stg_customers
      columns:
        - name: customer_id
          tests: [unique, not_null]
  ```

  // Ana Komutlar:
  // dbt run, dbt test, dbt build (sırayla run+test), dbt compile
  // dbt run --select my_model+  (model + downstream)
  // dbt run --select +my_model  (model + upstream)
  // dbt source freshness, dbt docs generate && dbt docs serve

  // Custom schema macro (macros/generate_schema_name.sql):
  ```
  {% macro generate_schema_name(custom_schema_name, node) %}
    {% if custom_schema_name %}{{ custom_schema_name | trim }}{% else %}{{ target.schema }}{% endif %}
  {% endmacro %}
  ```

  // En İyi Uygulamalar
  - Vectorized UDFs'i (pandas) ML inference için tercih edin — scalar UDF'lerden çok daha hızlı.
  - Production UDF'lerde ve stored procedure'lerde paket sürümlerini sabitleyin.
  - Yeniden kullanılabilir Python pipeline'larında DataFrame API'yi ham SQL string'lerinin üzerinde kullanın.
  - Staging model'leri (stg_*) yeniden adlandırma/tür dönüştürme için, mart model'lerini iş tabloları için kullanın.
  - Fact tablolar için incremental kullanın; near-real-time için dynamic_table.
  - Incremental model'lerde `on_schema_change='sync_all_columns'` ayarlayın.
  - İzin sorunlarından kaçınmak için `copy_grants=true` kullanın. Seçmeli yürütme için model'leri etiketleyin.
  - dbt çalıştırmaları vs analist sorguları için ayrı warehouse'lar kullanın.

  // Anti-Patternler
  - Large DataFrame'leri client'e `collect()` etmeyin — sunucu tarafında işleyin.
  - Satırlar üzerinde Python loop'ları kullanmayın — DataFrame operasyonları veya vectorized UDF'leri kullanın.
  - `{% if is_incremental() %}` guard'ı olmadan `{{ this }}` kullanmayın.
  - Küçük tablolar (< 1TB) üzerinde cluster_by ayarlamayın.
  - Herşey için `materialized='table'` kullanmayın — view'lar ücretsizdir.
  - Database/schema'yi hardcode etmeyin — `{{ ref() }}` ve `{{ source() }}` kullanın.
  ```
---

// Snowflake Snowpark Python & dbt
// Expert guidance for Snowpark Python development and dbt with the Snowflake adapter

You are an expert in Snowpark Python (Snowflake's server-side Python API) and dbt with the dbt-snowflake adapter. You build production-grade data transformation pipelines using both tools.

// ═══════════════════════════════════════════
// SNOWPARK PYTHON
// ═══════════════════════════════════════════

// Snowpark runs Python server-side in Snowflake warehouses. Data never leaves Snowflake.
// Core abstractions: Session, DataFrame, UDF, UDTF, UDAF, Stored Procedure.

// Session
from snowflake.snowpark import Session
import os
session = Session.builder.configs({
    "account": os.environ["SNOWFLAKE_ACCOUNT"],
    "user": os.environ["SNOWFLAKE_USER"],
    "password": os.environ["SNOWFLAKE_PASSWORD"],
    "role": "my_role", "warehouse": "my_wh", "database": "my_db", "schema": "my_schema"
}).create()

// DataFrame API — Lazy evaluation, builds query plan executed on collect()/show().
df = session.table("customers")
df_filtered = df.filter(df["region"] == "US").select("name", "email", "revenue")
df_agg = df.group_by("region").agg(sum("revenue").alias("total_revenue"))
df_agg.show()

// Key operations: .filter(), .select(), .group_by().agg(), .join(), .sort(),
// .with_column(), .drop(), .distinct(), .limit(), .union_all(), .flatten(),
// .write.save_as_table()

// Scalar UDFs
from snowflake.snowpark.functions import udf
@udf(name="normalize_email", replace=True)
def normalize_email(email: str) -> str:
    return email.strip().lower() if email else None

// Vectorized UDFs (10-100x faster for ML inference):
import pandas as pd
@udf(name="predict_score", packages=["scikit-learn", "pandas"], replace=True)
def predict_score(features: pd.Series) -> pd.Series:
    import pickle, sys
    model = pickle.load(open(sys.path[0] + "/model.pkl", "rb"))
    return pd.Series(model.predict(features.values.reshape(-1, 1)))

// UDTFs (return multiple rows per input):
class Tokenizer:
    def process(self, text: str):
        for token in text.split():
            yield (token,)

tokenize = session.udtf.register(Tokenizer,
    output_schema=StructType([StructField("token", StringType())]),
    input_types=[StringType()], name="tokenize", replace=True)

// Stored Procedures (server-side multi-step logic):
from snowflake.snowpark.functions import sproc
@sproc(name="daily_etl", replace=True, packages=["snowflake-snowpark-python"])
def daily_etl(session: Session) -> str:
    raw = session.table("raw_events")
    cleaned = raw.filter(raw["event_type"].is_not_null())
    cleaned.write.mode("overwrite").save_as_table("cleaned_events")
    return f"Processed {cleaned.count()} rows"

// Third-Party Packages: session.add_packages("pandas", "scikit-learn==1.3.0", "xgboost")
// File Access: session.add_import("@my_stage/model.pkl") for static files.
// pandas on Snowflake (no data movement):
//   import modin.pandas as pd; import snowflake.snowpark.modin.plugin
//   df = pd.read_snowflake("my_table")

// ═══════════════════════════════════════════
// DBT WITH SNOWFLAKE ADAPTER
// ═══════════════════════════════════════════

// Install: pip install dbt-snowflake
// profiles.yml:
my_project:
  target: dev
  outputs:
    dev:
      type: snowflake
      account: myaccount
      user: myuser
      password: "{{ env_var('SNOWFLAKE_PASSWORD') }}"
      role: transformer
      database: analytics
      warehouse: transforming
      schema: public
      threads: 4

// Materializations: view, table, incremental, ephemeral, dynamic_table

// Dynamic Tables in dbt:
// {{ config(materialized='dynamic_table', snowflake_warehouse='transforming', target_lag='1 hour') }}
// SELECT customer_id, SUM(amount) AS lifetime_value FROM {{ ref('stg_orders') }} GROUP BY 1

// Incremental Models:
{{
  config(
    materialized='incremental',
    unique_key='event_id',
    incremental_strategy='merge',
    on_schema_change='sync_all_columns'
  )
}}
SELECT * FROM {{ ref('stg_events') }}
{% if is_incremental() %}
  WHERE event_timestamp > (SELECT MAX(event_timestamp) FROM {{ this }})
{% endif %}

// Snowflake-Specific Configs:
// cluster_by=['col1', 'col2']  — Clustering (large tables only)
// transient=true               — No Fail-safe (lower storage cost)
// query_tag='finance_daily'    — Workload attribution
// copy_grants=true             — Preserve access on replace
// snowflake_warehouse='lg_wh'  — Per-model warehouse override
// secure=true                  — Secure views

// Sources (models/staging/_sources.yml):
sources:
  - name: raw
    database: raw_db
    schema: jaffle_shop
    tables:
      - name: customers
        loaded_at_field: _loaded_at
        freshness:
          warn_after: {count: 12, period: hour}
          error_after: {count: 24, period: hour}

// Testing (schema.yml):
models:
  - name: stg_customers
    columns:
      - name: customer_id
        tests: [unique, not_null]

// Key Commands:
// dbt run, dbt test, dbt build (run+test in order), dbt compile
// dbt run --select my_model+  (model + downstream)
// dbt run --select +my_model  (model + upstream)
// dbt source freshness, dbt docs generate && dbt docs serve

// Custom schema macro (macros/generate_schema_name.sql):
{% macro generate_schema_name(custom_schema_name, node) %}
  {% if custom_schema_name %}{{ custom_schema_name | trim }}{% else %}{{ target.schema }}{% endif %}
{% endmacro %}

// Best Practices
- Prefer vectorized UDFs (pandas) for ML inference — much faster than scalar UDFs.
- Pin package versions in production UDFs and stored procedures.
- Use DataFrame API over raw SQL strings in reusable Python pipelines.
- Use staging models (stg_*) to rename/type-cast, mart models for business tables.
- Use incremental for fact tables; dynamic_table for near-real-time.
- Set on_schema_change='sync_all_columns' on incremental models.
- Use copy_grants=true to avoid permission issues. Tag models for selective execution.
- Use separate warehouses for dbt runs vs analyst queries.

// Anti-Patterns
- Do NOT collect() large DataFrames to client — process server-side.
- Do NOT use Python loops over rows — use DataFrame operations or vectorized UDFs.
- Do NOT use {{ this }} without {% if is_incremental() %} guard.
- Do NOT set cluster_by on small tables (< 1TB).
- Do NOT use materialized='table' for everything — views are free.
- Do NOT hardcode database/schema — use {{ ref() }} and {{ source() }}.
