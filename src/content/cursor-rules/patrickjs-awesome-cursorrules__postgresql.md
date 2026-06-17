---
name: "postgresql"
clean_name: "PostgreSQL"
description: "PostgreSQL production rules. Safe migrations, parameterized queries, TIMESTAMPTZ, proper indexing strategy."
description_tr: "PostgreSQL üretim ortamı kuralları. Güvenli migrasyonlar, parametreli sorgular, TIMESTAMPTZ ve doğru indexing stratejisi."
category: "Data"
repo: "PatrickJS/awesome-cursorrules"
stars: 40019
path: "rules/postgresql.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/postgresql.mdc"
body_length: 1408
file_extension: ".mdc"
body_tr: |-
  # PostgreSQL Kuralları

  Uzman PostgreSQL geliştirici. Güvenli migrasyonlar, parametreli sorgular, uygun indexleme.

  ## Schema
  - Tüm timestamp'lar için TIMESTAMPTZ kullanın (timezone'sız TIMESTAMP değil)
  - Genel ID'ler için UUID, dahili anahtarlar için BIGSERIAL
  - Varsayılan olarak NOT NULL — nullable sadece kasıtlıysa
  - Açık ON DELETE davranışıyla FK
  - Alan değişmezleri için kontrol kısıtlamaları

  ## Sorgular
  - Parametreli her zaman — asla string interpolasyonu
  - Açık sütunlar SEÇ, asla SELECT *
  - Potansiyel olarak büyük sonuç setleri için LIMIT
  - Karmaşık sorgulardan önce EXPLAIN ANALYZE

  ## İndeksler
  - Her FK sütununu index'leyin
  - Canlı tablolar için CREATE INDEX CONCURRENTLY (engellemeyen)
  - Sık filtrelenen alt kümeler için kısmi indexler
  - Kullanılmayan indexleri kaldırın

  ## Migrasyonlar
  - Sürümlü dosyalar: V001__create_table.sql
  - Büyük sütun eklemeleri: geri doldurmayla çok adımlı
  - Deploy'dan önce geri alma testini yapın

  ## İşlemler
  - Çok ifadeli değişiklikler için açık BEGIN/COMMIT
  - Kaçak sorguları önlemek için statement_timeout
  - Satır kilitlemesi için SELECT ... FOR UPDATE

  ## Yasak
  - SELECT * yok
  - String interpolasyonlu SQL yok
  - Yoğun trafikte schema değişiklikleri yok
  - DB'de düz metin şifreler yok
  - Uygulama kodunda TRUNCATE yok
---

# PostgreSQL Rules

Expert PostgreSQL developer. Safe migrations, parameterized queries, proper indexing.

## Schema
- TIMESTAMPTZ for all timestamps (not TIMESTAMP without timezone)
- UUID for public IDs, BIGSERIAL for internal keys
- NOT NULL by default — nullable only when intentional
- FK with explicit ON DELETE behavior
- Check constraints for domain invariants

## Queries
- Parameterized always — never string interpolation
- SELECT explicit columns, never SELECT *
- LIMIT on all potentially large result sets
- EXPLAIN ANALYZE before shipping complex queries

## Indexes
- Index every FK column
- CREATE INDEX CONCURRENTLY for live tables (non-blocking)
- Partial indexes for frequently filtered subsets
- Remove unused indexes

## Migrations
- Versioned files: V001__create_table.sql
- Large column additions: multi-step with backfill
- Test rollback before deploying

## Transactions
- Explicit BEGIN/COMMIT for multi-statement changes
- statement_timeout to prevent runaway queries
- SELECT ... FOR UPDATE for row locking

## Forbidden
- No SELECT *
- No string-interpolated SQL
- No schema changes during peak traffic
- No plaintext passwords in DB
- No TRUNCATE in app code
