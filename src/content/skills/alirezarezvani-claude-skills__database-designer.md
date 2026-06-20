---
name: "database-designer"
description_en: "Use when the user asks to design database schemas, plan data migrations, optimize queries, choose between SQL and NoSQL, or model data relationships."
description_tr: "Kullanıcı veritabanı şemaları tasarlamak, veri göçlerini planlamak, sorguları optimize etmek, SQL ve NoSQL arasında seçim yapmak veya veri ilişkilerini modellemek istediğinde kullanın."
category: "Design"
repo: "alirezarezvani/claude-skills"
stars: 18572
url: "https://github.com/alirezarezvani/claude-skills/blob/HEAD/.gemini/skills/database-designer/SKILL.md"
path: ".gemini/skills/database-designer/SKILL.md"
is_collection: false
body_length: 12505
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Veritabanı Tasarımcısı - POWERFUL Tier Becerisi
  
  ## Genel Bakış
  
  Modern veritabanı sistemleri için uzman düzeyinde analiz, optimizasyon ve migration yetenekleri sağlayan kapsamlı bir veritabanı tasarım becerisi. Bu beceri, mimarlar ve geliştirici mimarların ölçeklenebilir, yüksek performanslı ve bakımlanabilir veritabanı şemaları oluşturmasına yardımcı olması için teorik ilkeleri pratik araçlarla birleştirir.
  
  ## Temel Yetkinlikler
  
  ### Şema Tasarımı ve Analizi
  - **Normalizasyon Analizi**: Normalizasyon seviyelerinin otomatik tespiti (1NF ile BCNF arası)
  - **Denormalizasyon Stratejisi**: Performans optimizasyonu için akıllı öneriler
  - **Veri Tipi Optimizasyonu**: Uygunsuz tiplerin ve boyut sorunlarının tanımlanması
  - **Constraint Analizi**: Eksik foreign key'ler, unique constraints ve null kontrolleri
  - **Adlandırma Kuralları Doğrulaması**: Tutarlı tablo ve sütun adlandırma desenleri
  - **ERD Oluşturma**: DDL'den otomatik Mermaid diyagram oluşturma
  
  ### İndeks Optimizasyonu
  - **İndeks Boşluğu Analizi**: Foreign key'ler ve sorgu desenleri üzerindeki eksik indexlerin tanımlanması
  - **Composite İndeks Stratejisi**: Çok sütunlu indexler için optimal sütun sıralaması
  - **İndeks Redundansi Tespiti**: Çakışan ve kullanılmayan indexlerin ortadan kaldırılması
  - **Performans Etkisi Modellemesi**: Seçicilik tahmini ve sorgu maliyet analizi
  - **İndeks Tipi Seçimi**: B-tree, hash, partial, covering ve specialized indexler
  
  ### Migration Yönetimi
  - **Sıfır Kapalı Kalma Süresi Migrationları**: Expand-contract pattern uygulaması
  - **Şema Evrimi**: Güvenli sütun ekleme, silme ve tip değiştirme
  - **Veri Migration Betikleri**: Otomatik veri dönüştürme ve doğrulama
  - **Geri Alma Stratejisi**: Doğrulama ile tam tersine çevirme yetenekleri
  - **Execution Planlama**: Bağımlılık çözümleme ile sıralı migration adımları
  
  ## Araç İş Akışı (bunları çalıştırın — şemaları elle analiz etmeyin)
  
  Bu beceri klasörüne göre tüm yollar; örnek girdiler `assets/` içinde.
  
  ### 1. Şemayı analiz edin
  
  ```bash
  python3 schema_analyzer.py --input schema.sql --generate-erd --output-format json -o analysis.json
  ```
  
  SQL DDL veya JSON şemayı kabul eder (`assets/sample_schema.sql` / `sample_schema.json`). Çıktı normalizasyon bulguları, eksik constraints, adlandırma sorunları ve bir Mermaid ERD içerir — ERD'yi kullanıcıya gösterin ve optimize etmeden önce flaglanan sorunları düzeltin.
  
  ### 2. Gerçek sorgu desenleri karşı indexleri optimize edin
  
  ```bash
  python3 index_optimizer.py --schema assets/sample_schema.json --queries assets/sample_query_patterns.json --analyze-existing --format json -o indexes.json
  ```
  
  Kullanıcının hot sorgularını önce bir query-patterns JSON'una yazın (`assets/sample_query_patterns.json`'ı kopyalayın). Çıktı, öncelik sırasına göre CREATE INDEX önerileri artı redundant-index kaldırma işlemleridir.
  
  ### 3. Migration'ı oluşturun
  
  ```bash
  python3 migration_generator.py --current current_schema.json --target target_schema.json --zero-downtime --format sql -o migration.sql
  ```
  
  `--zero-downtime` bir expand-contract planı çıkarır; `--validate-only` SQL oluşturmadan uygulanabilirliği kontrol eder.
  
  ### 4. Doğrulama döngüsü
  
  *target* şemada step 1'i yeniden çalıştırın ve ilk turda bulunan sorunların gitmişliğini doğrulayın; migration'ı teslim etmeden önce `migration_generator.py --validate-only` çalıştırın.
  
  ## Veritabanı Tasarım İlkeleri
  → Detaylar için references/database-design-reference.md'ye bakın
  
  ## En İyi Uygulamalar
  
  ### Şema Tasarımı
  1. **Anlamlı isimler kullanın**: Açık, tutarlı adlandırma kuralları
  2. **Uygun veri tiplerini seçin**: Depolama verimliliği için doğru boyutlandırılmış sütunlar
  3. **Uygun constraints tanımlayın**: Foreign key'ler, check constraints, unique indexler
  4. **Gelecek büyümesini göz önünde bulundurun**: Başından itibaren ölçek için planlayın
  5. **İlişkileri belgelendirin**: Açık foreign key ilişkileri ve iş kuralları
  
  ### Performans Optimizasyonu
  1. **Stratejik olarak index atayın**: Ortak sorgu desenleri için fazla indexlemeden kapsamlı
  2. **Sorgu performansını izleyin**: Yavaş sorgulara yönelik düzenli analiz
  3. **Büyük tabloları bölün**: Sorgu performansını ve bakımını iyileştirin
  4. **Uygun isolation seviyeleri kullanın**: Tutarlılık ve performans arasında denge sağlayın
  5. **Connection pooling uygulayın**: Verimli kaynak kullanımı
  
  ### Güvenlik Değerlendirmeleri
  1. **En Az Ayrıcalık İlkesi**: Minimum gerekli izinleri verin
  2. **Hassas verileri şifreleyin**: Dinlenme durumunda ve iletim sırasında
  3. **Erişim desenleri denetleyin**: Veritabanı erişimini izleyin ve kaydedin
  4. **Girdileri doğrulayın**: SQL injection saldırılarını önleyin
  5. **Düzenli güvenlik güncellemeleri**: Veritabanı yazılımını güncel tutun
  
  ## Sorgu Oluşturma Desenleri
  
  ### SELECT with JOINs
  
  ```sql
  -- INNER JOIN: sadece eşleşen satırlar
  SELECT o.id, c.name, o.total
  FROM orders o
  INNER JOIN customers c ON c.id = o.customer_id;
  
  -- LEFT JOIN: tüm sol satırlar, eşleşmeyenler için NULL
  SELECT c.name, COUNT(o.id) AS order_count
  FROM customers c
  LEFT JOIN orders o ON o.customer_id = c.id
  GROUP BY c.name;
  
  -- Self-join: hiyerarşik veriler (çalışanlar/yöneticiler)
  SELECT e.name AS employee, m.name AS manager
  FROM employees e
  LEFT JOIN employees m ON m.id = e.manager_id;
  ```
  
  ### Common Table Expressions (CTEs)
  
  ```sql
  -- Org chart için recursive CTE
  WITH RECURSIVE org AS (
    SELECT id, name, manager_id, 1 AS depth
    FROM employees WHERE manager_id IS NULL
    UNION ALL
    SELECT e.id, e.name, e.manager_id, o.depth + 1
    FROM employees e INNER JOIN org o ON o.id = e.manager_id
  )
  SELECT * FROM org ORDER BY depth, name;
  ```
  
  ### Window Functions
  
  ```sql
  -- ROW_NUMBER sayfalandırma / dedup için
  SELECT *, ROW_NUMBER() OVER (PARTITION BY customer_id ORDER BY created_at DESC) AS rn
  FROM orders;
  
  -- RANK boşluklarla, DENSE_RANK boşluksuz
  SELECT name, score, RANK() OVER (ORDER BY score DESC) AS rank FROM leaderboard;
  
  -- LAG/LEAD bitişik satırları karşılaştırmak için
  SELECT date, revenue,
    revenue - LAG(revenue) OVER (ORDER BY date) AS daily_change
  FROM daily_sales;
  ```
  
  ### Agregasyon Desenleri
  
  ```sql
  -- FILTER clause (PostgreSQL) koşullu agregasyon için
  SELECT
    COUNT(*) AS total,
    COUNT(*) FILTER (WHERE status = 'active') AS active,
    AVG(amount) FILTER (WHERE amount > 0) AS avg_positive
  FROM accounts;
  
  -- GROUPING SETS çok seviyeli rolluplar için
  SELECT region, product, SUM(revenue)
  FROM sales
  GROUP BY GROUPING SETS ((region, product), (region), ());
  ```
  
  ---
  
  ## Migration Desenleri
  
  ### Up/Down Migration Betikleri
  
  Her migration'ın tersine çevrilebilir bir muadili olmalıdır. Sıralama için dosyaları timestamp öneki ile adlandırın:
  
  ```
  migrations/
  ├── 20260101_000001_create_users.up.sql
  ├── 20260101_000001_create_users.down.sql
  ├── 20260115_000002_add_users_email_index.up.sql
  └── 20260115_000002_add_users_email_index.down.sql
  ```
  
  ### Sıfır Kapalı Kalma Süresi Migrationları (Expand/Contract)
  
  Kilitleme veya çalışan kodu kırmaktan kaçınmak için expand-contract patternini kullanın:
  
  1. **Expand** — yeni sütun/tabel ekleyin (nullable, varsayılan ile)
  2. **Verileri migrate edin** — partiler halinde arka dolgu yapın; uygulama tarafından çift yazma
  3. **Geçiş** — uygulama yeni sütundan okur; eski yazma işlemini durdurun
  4. **Contract** — sonraki migration'da eski sütunu düşürün
  
  ### Veri Backfill Stratejileri
  
  ```sql
  -- Uzun süren kilit olmaktan kaçınmak için batch update
  UPDATE users SET email_normalized = LOWER(email)
  WHERE id IN (SELECT id FROM users WHERE email_normalized IS NULL LIMIT 5000);
  -- 0 satır etkilenene kadar döngüde tekrarlayın
  ```
  
  ### Geri Alma Prosedürleri
  
  - Production'a `up.sql`'i deployment yapmadan önce staging'de `down.sql`'i her zaman test edin
  - Geri alma penceresini kısa tutun — contract step çalıştırılmışsa, geri alma yeni forward migration gerektirir
  - İndirilemez değişiklikler için (veri ile sütunları düşürme), önce mantıksal bir yedek alın
  
  ---
  
  ## Performans Optimizasyonu
  
  ### İndeksing Stratejileri
  
  | İndeks Tipi | Kullanım Durumu | Örnek |
  |------------|----------|---------|
  | **B-tree** (default) | Eşitlik, aralık, ORDER BY | `CREATE INDEX idx_users_email ON users(email);` |
  | **GIN** | Full-text search, JSONB, arrays | `CREATE INDEX idx_docs_body ON docs USING gin(to_tsvector('english', body));` |
  | **GiST** | Geometry, range types, nearest-neighbor | `CREATE INDEX idx_locations ON places USING gist(coords);` |
  | **Partial** | Satır alt kümesi (boyut azalt) | `CREATE INDEX idx_active ON users(email) WHERE active = true;` |
  | **Covering** | Index-only scans | `CREATE INDEX idx_cov ON orders(customer_id) INCLUDE (total, created_at);` |
  
  ### EXPLAIN Plan Okuma
  
  ```sql
  EXPLAIN (ANALYZE, BUFFERS, FORMAT TEXT) SELECT ...;
  ```
  
  İzlenecek önemli sinyaller:
  - **Seq Scan** büyük tablolarda — eksik index
  - **Nested Loop** yüksek satır tahminleri ile — hash/merge join'i düşünün veya index ekleyin
  - **Buffers shared read** **hit**'ten çok daha yüksek — çalışma seti belleği aşıyor
  
  ### N+1 Sorgu Tespiti
  
  Semptomlar: uygulama satır başına bir sorgu çıkarır (örneğin, ilgili kayıtları döngüde getirme).
  
  Düzeltmeler:
  - Bir round-trip'te getirmek için `JOIN` veya subquery kullanın
  - ORM eager loading (`select_related` / `includes` / `with`)
  - GraphQL resolvers için DataLoader pattern
  
  ### Connection Pooling
  
  | Araç | Protocol | En İyisi |
  |------|----------|----------|
  | **PgBouncer** | PostgreSQL | Transaction/statement pooling, düşük overhead |
  | **ProxySQL** | MySQL | Sorgu yönlendirmesi, read/write splitting |
  | **Built-in pool** (HikariCP, SQLAlchemy pool) | Herhangi biri | Application-level pooling |
  
  **Genel kural:** Pool boyutunu `(2 * CPU cores) + disk spindles` olarak ayarlayın. Cloud SSD'ler için `2 * vCPUs`'den başlayın ve ayarlayın.
  
  ### Read Replicas ve Query Yönlendirmesi
  
  - Tüm `SELECT` sorgularını replica'lara yönlendirin; yazmaları primary'e
  - Replication lag'ı hesaplayın (tipik olarak async için <1s, sync için 0)
  - Kritik verileri okumadan önce lag'i tespit etmek için `pg_last_wal_replay_lsn()` kullanın
  
  ---
  
  ## Çok Veritabanı Karar Matrisi
  
  | Kriterler | PostgreSQL | MySQL | SQLite | SQL Server |
  |----------|-----------|-------|--------|------------|
  | **En iyisi** | Kompleks sorgular, JSONB, extensions | Web uygulamaları, okuma yoğun iş yükleri | Embedded, dev/test, edge | Enterprise .NET yığınları |
  | **JSON desteği** | Mükemmel (JSONB + GIN) | İyi (JSON type) | Minimal | İyi (OPENJSON) |
  | **Replication** | Streaming, logical | Group replication, InnoDB cluster | N/A | Always On AG |
  | **Lisanslama** | Açık kaynak (PostgreSQL License) | Açık kaynak (GPL) / ticari | Public domain | Ticari |
  | **Max pratik boyut** | Multi-TB | Multi-TB | ~1 TB (single-writer) | Multi-TB |
  
  **Ne zaman seçilir:**
  - **PostgreSQL** — yeni projeler için varsayılan seçim; en iyi genişletilebilirlik ve standart uygunluk
  - **MySQL** — mevcut MySQL ekosistemi; basit okuma yoğun web uygulamaları
  - **SQLite** — mobil uygulamalar, CLI araçları, unit test veritabanları, IoT/edge
  - **SQL Server** — kurumsal politika tarafından zorunlu; derin .NET/Azure entegrasyonu
  
  ### NoSQL Değerlendirmeleri
  
  | Veritabanı | Model | Ne Zaman Kullanılır |
  |----------|-------|----------|
  | **MongoDB** | Document | Şema esnekliği, hızlı prototip yapma, içerik yönetimi |
  | **Redis** | Key-value / cache | Session store, rate limiting, leaderboards, pub/sub |
  | **DynamoDB** | Wide-column | Serverless AWS uygulamaları, herhangi bir ölçekte tek haneli-ms latency |
  
  > SQL'i varsayılan olarak kullanın. NoSQL'e yalnızca erişim deseni açıkça bundan faydalandığında başvurun.
  
  ---
  
  ## Sharding ve Replication
  
  ### Horizontal vs Vertical Partisyon
  
  - **Vertical partitioning**: Sütunları tablolar arasında bölün (örneğin, ayrı BLOB sütunları). Dar sorgular için I/O'yu azaltır.
  - **Horizontal partitioning (sharding)**: Satırları veritabanları/sunucular arasında bölün. Tek bir node veri setini tutamadığında veya throughput işlemediğinde gereklidir.
  
  ### Sharding Stratejileri
  
  | Strateji | Nasıl Çalışır | Avantajlar | Dezavantajlar |
  |----------|-------------|-------|------|
  | **Hash** | `shard = hash(key) % N` | Eşit dağılım | Resharding pahalı |
  | **Range** | Tarihe veya ID aralığına göre Shard | Basit, zaman serileri için iyi | En yeni shard'da sıcak noktalar |
  | **Geographic** | Kullanıcı bölgesine göre Shard | Veri yerelliği, uyumluluk | Bölgeler arası sorgular zor |
  
  ### Replication Desenleri
  
  | Desen | Tutarlılık | Latency | Kullanım Durumu |
  |---------|------------|---------|----------|
  | **Synchronous** | Güçlü | Daha yüksek yazma latency | Mali işlemler |
  | **Asynchronous** | Eventual | Düşük yazma latency | Okuma yoğun web uygulamaları |
  | **Semi-synchronous** | En az bir replica onaylandı | Ilımlı | Güvenlik ve hız dengesi |
  
  ---
  
  ## Cross-References
  
  - **sql-database-assistant** — günlük SQL çalışması için sorgu yazma, optimizasyon ve debugging
  - **database-schema-designer** — ERD modellemesi, normalizasyon analizi ve şema oluşturma
  - **migration-architect** — veritabanı motorları arasında veya büyük şema revizyonlarında yer alan geniş ölçekli migration planlama
  - **senior-backend** — application-layer desenler (connection pooling, ORM en iyi uygulamalar)
  - **senior-devops** — veritabanı kümeleri ve replica'lar için altyapı sağlama
---

# Database Designer - POWERFUL Tier Skill

## Overview

A comprehensive database design skill that provides expert-level analysis, optimization, and migration capabilities for modern database systems. This skill combines theoretical principles with practical tools to help architects and developers create scalable, performant, and maintainable database schemas.

## Core Competencies

### Schema Design & Analysis
- **Normalization Analysis**: Automated detection of normalization levels (1NF through BCNF)
- **Denormalization Strategy**: Smart recommendations for performance optimization
- **Data Type Optimization**: Identification of inappropriate types and size issues
- **Constraint Analysis**: Missing foreign keys, unique constraints, and null checks
- **Naming Convention Validation**: Consistent table and column naming patterns
- **ERD Generation**: Automatic Mermaid diagram creation from DDL

### Index Optimization
- **Index Gap Analysis**: Identification of missing indexes on foreign keys and query patterns
- **Composite Index Strategy**: Optimal column ordering for multi-column indexes
- **Index Redundancy Detection**: Elimination of overlapping and unused indexes
- **Performance Impact Modeling**: Selectivity estimation and query cost analysis
- **Index Type Selection**: B-tree, hash, partial, covering, and specialized indexes

### Migration Management
- **Zero-Downtime Migrations**: Expand-contract pattern implementation
- **Schema Evolution**: Safe column additions, deletions, and type changes
- **Data Migration Scripts**: Automated data transformation and validation
- **Rollback Strategy**: Complete reversal capabilities with validation
- **Execution Planning**: Ordered migration steps with dependency resolution

## Tool Workflow (run these — do not analyze schemas by hand)

All paths relative to this skill folder; sample inputs in `assets/`.

### 1. Analyze the schema

```bash
python3 schema_analyzer.py --input schema.sql --generate-erd --output-format json -o analysis.json
```

Accepts SQL DDL or JSON schema (`assets/sample_schema.sql` / `sample_schema.json`). Output includes normalization findings, missing constraints, naming issues, and a Mermaid ERD — show the ERD to the user and fix flagged issues before optimizing.

### 2. Optimize indexes against real query patterns

```bash
python3 index_optimizer.py --schema assets/sample_schema.json --queries assets/sample_query_patterns.json --analyze-existing --format json -o indexes.json
```

Write the user's hot queries into a query-patterns JSON first (copy `assets/sample_query_patterns.json`). Output is a priority-ordered list of CREATE INDEX recommendations plus redundant-index removals.

### 3. Generate the migration

```bash
python3 migration_generator.py --current current_schema.json --target target_schema.json --zero-downtime --format sql -o migration.sql
```

`--zero-downtime` emits an expand-contract plan; `--validate-only` checks feasibility without generating SQL.

### 4. Verification loop

Re-run step 1 on the *target* schema and assert the issues found in the first pass are gone; run `migration_generator.py --validate-only` before handing over the migration.

## Database Design Principles
→ See references/database-design-reference.md for details

## Best Practices

### Schema Design
1. **Use meaningful names**: Clear, consistent naming conventions
2. **Choose appropriate data types**: Right-sized columns for storage efficiency
3. **Define proper constraints**: Foreign keys, check constraints, unique indexes
4. **Consider future growth**: Plan for scale from the beginning
5. **Document relationships**: Clear foreign key relationships and business rules

### Performance Optimization
1. **Index strategically**: Cover common query patterns without over-indexing
2. **Monitor query performance**: Regular analysis of slow queries
3. **Partition large tables**: Improve query performance and maintenance
4. **Use appropriate isolation levels**: Balance consistency with performance
5. **Implement connection pooling**: Efficient resource utilization

### Security Considerations
1. **Principle of least privilege**: Grant minimal necessary permissions
2. **Encrypt sensitive data**: At rest and in transit
3. **Audit access patterns**: Monitor and log database access
4. **Validate inputs**: Prevent SQL injection attacks
5. **Regular security updates**: Keep database software current

## Query Generation Patterns

### SELECT with JOINs

```sql
-- INNER JOIN: only matching rows
SELECT o.id, c.name, o.total
FROM orders o
INNER JOIN customers c ON c.id = o.customer_id;

-- LEFT JOIN: all left rows, NULLs for non-matches
SELECT c.name, COUNT(o.id) AS order_count
FROM customers c
LEFT JOIN orders o ON o.customer_id = c.id
GROUP BY c.name;

-- Self-join: hierarchical data (employees/managers)
SELECT e.name AS employee, m.name AS manager
FROM employees e
LEFT JOIN employees m ON m.id = e.manager_id;
```

### Common Table Expressions (CTEs)

```sql
-- Recursive CTE for org chart
WITH RECURSIVE org AS (
  SELECT id, name, manager_id, 1 AS depth
  FROM employees WHERE manager_id IS NULL
  UNION ALL
  SELECT e.id, e.name, e.manager_id, o.depth + 1
  FROM employees e INNER JOIN org o ON o.id = e.manager_id
)
SELECT * FROM org ORDER BY depth, name;
```

### Window Functions

```sql
-- ROW_NUMBER for pagination / dedup
SELECT *, ROW_NUMBER() OVER (PARTITION BY customer_id ORDER BY created_at DESC) AS rn
FROM orders;

-- RANK with gaps, DENSE_RANK without gaps
SELECT name, score, RANK() OVER (ORDER BY score DESC) AS rank FROM leaderboard;

-- LAG/LEAD for comparing adjacent rows
SELECT date, revenue,
  revenue - LAG(revenue) OVER (ORDER BY date) AS daily_change
FROM daily_sales;
```

### Aggregation Patterns

```sql
-- FILTER clause (PostgreSQL) for conditional aggregation
SELECT
  COUNT(*) AS total,
  COUNT(*) FILTER (WHERE status = 'active') AS active,
  AVG(amount) FILTER (WHERE amount > 0) AS avg_positive
FROM accounts;

-- GROUPING SETS for multi-level rollups
SELECT region, product, SUM(revenue)
FROM sales
GROUP BY GROUPING SETS ((region, product), (region), ());
```

---

## Migration Patterns

### Up/Down Migration Scripts

Every migration must have a reversible counterpart. Name files with a timestamp prefix for ordering:

```
migrations/
├── 20260101_000001_create_users.up.sql
├── 20260101_000001_create_users.down.sql
├── 20260115_000002_add_users_email_index.up.sql
└── 20260115_000002_add_users_email_index.down.sql
```

### Zero-Downtime Migrations (Expand/Contract)

Use the expand-contract pattern to avoid locking or breaking running code:

1. **Expand** — add the new column/table (nullable, with default)
2. **Migrate data** — backfill in batches; dual-write from application
3. **Transition** — application reads from new column; stop writing to old
4. **Contract** — drop old column in a follow-up migration

### Data Backfill Strategies

```sql
-- Batch update to avoid long-running locks
UPDATE users SET email_normalized = LOWER(email)
WHERE id IN (SELECT id FROM users WHERE email_normalized IS NULL LIMIT 5000);
-- Repeat in a loop until 0 rows affected
```

### Rollback Procedures

- Always test the `down.sql` in staging before deploying `up.sql` to production
- Keep rollback window short — if the contract step has run, rollback requires a new forward migration
- For irreversible changes (dropping columns with data), take a logical backup first

---

## Performance Optimization

### Indexing Strategies

| Index Type | Use Case | Example |
|------------|----------|---------|
| **B-tree** (default) | Equality, range, ORDER BY | `CREATE INDEX idx_users_email ON users(email);` |
| **GIN** | Full-text search, JSONB, arrays | `CREATE INDEX idx_docs_body ON docs USING gin(to_tsvector('english', body));` |
| **GiST** | Geometry, range types, nearest-neighbor | `CREATE INDEX idx_locations ON places USING gist(coords);` |
| **Partial** | Subset of rows (reduce size) | `CREATE INDEX idx_active ON users(email) WHERE active = true;` |
| **Covering** | Index-only scans | `CREATE INDEX idx_cov ON orders(customer_id) INCLUDE (total, created_at);` |

### EXPLAIN Plan Reading

```sql
EXPLAIN (ANALYZE, BUFFERS, FORMAT TEXT) SELECT ...;
```

Key signals to watch:
- **Seq Scan** on large tables — missing index
- **Nested Loop** with high row estimates — consider hash/merge join or add index
- **Buffers shared read** much higher than **hit** — working set exceeds memory

### N+1 Query Detection

Symptoms: application issues one query per row (e.g., fetching related records in a loop).

Fixes:
- Use `JOIN` or subquery to fetch in one round-trip
- ORM eager loading (`select_related` / `includes` / `with`)
- DataLoader pattern for GraphQL resolvers

### Connection Pooling

| Tool | Protocol | Best For |
|------|----------|----------|
| **PgBouncer** | PostgreSQL | Transaction/statement pooling, low overhead |
| **ProxySQL** | MySQL | Query routing, read/write splitting |
| **Built-in pool** (HikariCP, SQLAlchemy pool) | Any | Application-level pooling |

**Rule of thumb:** Set pool size to `(2 * CPU cores) + disk spindles`. For cloud SSDs, start with `2 * vCPUs` and tune.

### Read Replicas and Query Routing

- Route all `SELECT` queries to replicas; writes to primary
- Account for replication lag (typically <1s for async, 0 for sync)
- Use `pg_last_wal_replay_lsn()` to detect lag before reading critical data

---

## Multi-Database Decision Matrix

| Criteria | PostgreSQL | MySQL | SQLite | SQL Server |
|----------|-----------|-------|--------|------------|
| **Best for** | Complex queries, JSONB, extensions | Web apps, read-heavy workloads | Embedded, dev/test, edge | Enterprise .NET stacks |
| **JSON support** | Excellent (JSONB + GIN) | Good (JSON type) | Minimal | Good (OPENJSON) |
| **Replication** | Streaming, logical | Group replication, InnoDB cluster | N/A | Always On AG |
| **Licensing** | Open source (PostgreSQL License) | Open source (GPL) / commercial | Public domain | Commercial |
| **Max practical size** | Multi-TB | Multi-TB | ~1 TB (single-writer) | Multi-TB |

**When to choose:**
- **PostgreSQL** — default choice for new projects; best extensibility and standards compliance
- **MySQL** — existing MySQL ecosystem; simple read-heavy web applications
- **SQLite** — mobile apps, CLI tools, unit test databases, IoT/edge
- **SQL Server** — mandated by enterprise policy; deep .NET/Azure integration

### NoSQL Considerations

| Database | Model | Use When |
|----------|-------|----------|
| **MongoDB** | Document | Schema flexibility, rapid prototyping, content management |
| **Redis** | Key-value / cache | Session store, rate limiting, leaderboards, pub/sub |
| **DynamoDB** | Wide-column | Serverless AWS apps, single-digit-ms latency at any scale |

> Use SQL as default. Reach for NoSQL only when the access pattern clearly benefits from it.

---

## Sharding & Replication

### Horizontal vs Vertical Partitioning

- **Vertical partitioning**: Split columns across tables (e.g., separate BLOB columns). Reduces I/O for narrow queries.
- **Horizontal partitioning (sharding)**: Split rows across databases/servers. Required when a single node cannot hold the dataset or handle the throughput.

### Sharding Strategies

| Strategy | How It Works | Pros | Cons |
|----------|-------------|------|------|
| **Hash** | `shard = hash(key) % N` | Even distribution | Resharding is expensive |
| **Range** | Shard by date or ID range | Simple, good for time-series | Hot spots on latest shard |
| **Geographic** | Shard by user region | Data locality, compliance | Cross-region queries are hard |

### Replication Patterns

| Pattern | Consistency | Latency | Use Case |
|---------|------------|---------|----------|
| **Synchronous** | Strong | Higher write latency | Financial transactions |
| **Asynchronous** | Eventual | Low write latency | Read-heavy web apps |
| **Semi-synchronous** | At-least-one replica confirmed | Moderate | Balance of safety and speed |

---

## Cross-References

- **sql-database-assistant** — query writing, optimization, and debugging for day-to-day SQL work
- **database-schema-designer** — ERD modeling, normalization analysis, and schema generation
- **migration-architect** — large-scale migration planning across database engines or major schema overhauls
- **senior-backend** — application-layer patterns (connection pooling, ORM best practices)
- **senior-devops** — infrastructure provisioning for database clusters and replicas
