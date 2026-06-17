---
name: "database-schema-designer"
description_en: "Use when the user asks to create ERD diagrams, normalize database schemas, design table relationships, or plan schema migrations."
category: "Design"
repo: "alirezarezvani/claude-skills"
stars: 18313
url: "https://github.com/alirezarezvani/claude-skills/blob/HEAD/.gemini/skills/database-schema-designer/SKILL.md"
path: ".gemini/skills/database-schema-designer/SKILL.md"
is_collection: false
body_length: 7248
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Veritabanı Şeması Tasarımcısı
  
  **Tier:** POWERFUL  
  **Category:** Engineering  
  **Domain:** Data Architecture / Backend  
  
  ---
  
  ## Genel Bakış
  
  Gereksinimlerden ilişkisel veritabanı şemaları tasarlayın ve migrasyonlar, TypeScript/Python türleri, seed verileri, RLS politikaları ve indexler oluşturun. Multi-tenancy, soft delete, audit trail, versioning ve polymorphic ilişkilendirmeleri destekler.
  
  ## Temel Yetenekler
  
  - **Şema tasarımı** — gereksinimlerden tabloları, ilişkileri ve kısıtlamaları normalize etme
  - **Migration oluşturma** — Drizzle, Prisma, TypeORM, Alembic
  - **Tür oluşturma** — TypeScript interface'leri, Python dataclass'ları/Pydantic modelleri
  - **RLS politikaları** — multi-tenant uygulamalar için Row-Level Security
  - **Index stratejisi** — composite index'ler, partial index'ler, covering index'ler
  - **Seed verileri** — gerçekçi test verileri oluşturma
  - **ERD oluşturma** — şemadan Mermaid diyagramı
  
  ---
  
  ## Ne Zaman Kullanılır
  
  - Veritabanı tabloları gerektiren yeni bir özellik tasarlanırken
  - Bir şemanın performans veya normalizasyon sorunları için incelenmesi sırasında
  - Mevcut bir şemaya multi-tenancy eklenmesi gerektiğinde
  - Prisma şemasından TypeScript türleri oluşturulması gerektiğinde
  - Breaking change için şema migrationı planlanırken
  
  ---
  
  ## Şema Tasarım Süreci
  
  ### Adım 1: Gereksinimler → Varlıklar
  
  Verilen gereksinimler:
  > "Kullanıcılar projeler oluşturabilir. Her projenin görevleri vardır. Görevlerin etiketleri olabilir. Görevler kullanıcılara atanabilir. Tam bir audit trail'e ihtiyacımız var."
  
  Varlıkları çıkarın:
  ```
  User, Project, Task, Label, TaskLabel (junction), TaskAssignment, AuditLog
  ```
  
  ### Adım 2: İlişkileri Belirleyin
  
  ```
  User 1──* Project         (owner)
  Project 1──* Task
  Task *──* Label            (via TaskLabel)
  Task *──* User            (via TaskAssignment)
  User 1──* AuditLog
  ```
  
  ### Adım 3: Kesişen Kaygıları Ekleyin
  
  - Multi-tenancy: tüm tenant-scoped tablolara `organization_id` ekleyin
  - Soft delete: hard delete yerine `deleted_at TIMESTAMPTZ` ekleyin
  - Audit trail: `created_by`, `updated_by`, `created_at`, `updated_at` ekleyin
  - Versioning: optimistic locking için `version INTEGER` ekleyin
  
  ---
  
  ## Tam Şema Örneği (Task Management SaaS)
  → Detaylar için references/full-schema-examples.md bölümüne bakın
  
  ## Row-Level Security (RLS) Politikaları
  
  ```sql
  -- RLS'i etkinleştir
  ALTER TABLE tasks ENABLE ROW LEVEL SECURITY;
  ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
  
  -- App role oluştur
  CREATE ROLE app_user;
  
  -- Kullanıcılar sadece kendi organizasyonlarının projelerindeki görevleri görebilirler
  CREATE POLICY tasks_org_isolation ON tasks
    FOR ALL TO app_user
    USING (
      project_id IN (
        SELECT p.id FROM projects p
        JOIN organization_members om ON om.organization_id = p.organization_id
        WHERE om.user_id = current_setting('app.current_user_id')::text
      )
    );
  
  -- Soft delete: silinen kayıtları asla gösterme
  CREATE POLICY tasks_no_deleted ON tasks
    FOR SELECT TO app_user
    USING (deleted_at IS NULL);
  
  -- Sadece görev yaratıcısı veya admin silebilir
  CREATE POLICY tasks_delete_policy ON tasks
    FOR DELETE TO app_user
    USING (
      created_by_id = current_setting('app.current_user_id')::text
      OR EXISTS (
        SELECT 1 FROM organization_members om
        JOIN projects p ON p.organization_id = om.organization_id
        WHERE p.id = tasks.project_id
          AND om.user_id = current_setting('app.current_user_id')::text
          AND om.role IN ('owner', 'admin')
      )
    );
  
  -- Kullanıcı bağlamını ayarla (her request'in başında çağır)
  SELECT set_config('app.current_user_id', $1, true);
  ```
  
  ---
  
  ## Seed Verileri Oluşturma
  
  ```typescript
  // db/seed.ts
  import { faker } from '@faker-js/faker'
  import { db } from './client'
  import { organizations, users, projects, tasks } from './schema'
  import { createId } from '@paralleldrive/cuid2'
  import { hashPassword } from '../src/lib/auth'
  
  async function seed() {
    console.log('Seeding database...')
  
    // Org oluştur
    const [org] = await db.insert(organizations).values({
      id: createId(),
      name: "acme-corp",
      slug: 'acme',
      plan: 'growth',
    }).returning()
  
    // Kullanıcılar oluştur
    const adminUser = await db.insert(users).values({
      id: createId(),
      email: 'admin@acme.com',
      name: "alice-admin",
      passwordHash: await hashPassword('password123'),
    }).returning().then(r => r[0])
  
    // Projeler oluştur
    const projectsData = Array.from({ length: 3 }, () => ({
      id: createId(),
      organizationId: org.id,
      ownerId: adminUser.id,
      name: "fakercompanycatchphrase"
      description: faker.lorem.paragraph(),
      status: 'active' as const,
    }))
  
    const createdProjects = await db.insert(projects).values(projectsData).returning()
  
    // Her proje için görevler oluştur
    for (const project of createdProjects) {
      const tasksData = Array.from({ length: faker.number.int({ min: 5, max: 20 }) }, (_, i) => ({
        id: createId(),
        projectId: project.id,
        title: faker.hacker.phrase(),
        description: faker.lorem.sentences(2),
        status: faker.helpers.arrayElement(['todo', 'in_progress', 'done'] as const),
        priority: faker.helpers.arrayElement(['low', 'medium', 'high'] as const),
        position: i * 1000,
        createdById: adminUser.id,
        updatedById: adminUser.id,
      }))
  
      await db.insert(tasks).values(tasksData)
    }
  
    console.log(`✅ Seeded: 1 org, ${projectsData.length} projects, tasks`)
  }
  
  seed().catch(console.error).finally(() => process.exit(0))
  ```
  
  ---
  
  ## ERD Oluşturma (Mermaid)
  
  ```
  erDiagram
      Organization ||--o{ OrganizationMember : has
      Organization ||--o{ Project : owns
      User ||--o{ OrganizationMember : joins
      User ||--o{ Task : "created by"
      Project ||--o{ Task : contains
      Task ||--o{ TaskAssignment : has
      Task ||--o{ TaskLabel : has
      Task ||--o{ Comment : has
      Task ||--o{ Attachment : has
      Label ||--o{ TaskLabel : "applied to"
      User ||--o{ TaskAssignment : assigned
  
      Organization {
          string id PK
          string name
          string slug
          string plan
      }
  
      Task {
          string id PK
          string project_id FK
          string title
          string status
          string priority
          timestamp due_date
          timestamp deleted_at
          int version
      }
  ```
  
  Prisma'dan oluştur:
  ```bash
  npx prisma-erd-generator
  # veya: npx @dbml/cli prisma2dbml -i schema.prisma | npx dbml-to-mermaid
  ```
  
  ---
  
  ## Sık Karşılaşılan Hatalar
  
  - **Index'siz soft delete** — `WHERE deleted_at IS NULL` index olmadan = tam tarama
  - **Missing composite index'ler** — `WHERE org_id = ? AND status = ?` için composite index gerekir
  - **Değiştirilebilir surrogate key'ler** — PK olarak asla email veya slug kullanmayın; UUID/CUID kullanın
  - **Varsayılansız NOT NULL** — mevcut tabloya NOT NULL sütun ekleme varsayılan veya migration planı gerektirir
  - **Optimistic locking yok** — eş zamanlı güncellemeler birbirini üzerine yazar; `version` sütunu ekleyin
  - **RLS test edilmemiş** — her zaman RLS'i superuser olmayan role ile test edin
  
  ---
  
  ## En İyi Uygulamalar
  
  1. **Her yerde Timestamp'ler** — her tabloda `created_at`, `updated_at`
  2. **Denetlenebilir veriler için soft delete** — DELETE yerine `deleted_at`
  3. **Uyum için audit log** — düzenlenmiş alanlarda before/after JSON'u günlüğe kaydedin
  4. **PK olarak UUID'ler veya CUID'ler** — sıralı integer sızıntısından kaçının
  5. **Foreign key'leri index'leyin** — her FK sütununun bir index'i olmalıdır
  6. **Partial index'ler** — active-only sorgular için `WHERE deleted_at IS NULL` kullanın
  7. **RLS uygulama düzeyinde filtrelemeyi üstün tut** — veritabanı tenancy'yi zorlar, sadece app kodu değil
---

# Database Schema Designer

**Tier:** POWERFUL  
**Category:** Engineering  
**Domain:** Data Architecture / Backend  

---

## Overview

Design relational database schemas from requirements and generate migrations, TypeScript/Python types, seed data, RLS policies, and indexes. Handles multi-tenancy, soft deletes, audit trails, versioning, and polymorphic associations.

## Core Capabilities

- **Schema design** — normalize requirements into tables, relationships, constraints
- **Migration generation** — Drizzle, Prisma, TypeORM, Alembic
- **Type generation** — TypeScript interfaces, Python dataclasses/Pydantic models
- **RLS policies** — Row-Level Security for multi-tenant apps
- **Index strategy** — composite indexes, partial indexes, covering indexes
- **Seed data** — realistic test data generation
- **ERD generation** — Mermaid diagram from schema

---

## When to Use

- Designing a new feature that needs database tables
- Reviewing a schema for performance or normalization issues
- Adding multi-tenancy to an existing schema
- Generating TypeScript types from a Prisma schema
- Planning a schema migration for a breaking change

---

## Schema Design Process

### Step 1: Requirements → Entities

Given requirements:
> "Users can create projects. Each project has tasks. Tasks can have labels. Tasks can be assigned to users. We need a full audit trail."

Extract entities:
```
User, Project, Task, Label, TaskLabel (junction), TaskAssignment, AuditLog
```

### Step 2: Identify Relationships

```
User 1──* Project         (owner)
Project 1──* Task
Task *──* Label            (via TaskLabel)
Task *──* User            (via TaskAssignment)
User 1──* AuditLog
```

### Step 3: Add Cross-cutting Concerns

- Multi-tenancy: add `organization_id` to all tenant-scoped tables
- Soft deletes: add `deleted_at TIMESTAMPTZ` instead of hard deletes
- Audit trail: add `created_by`, `updated_by`, `created_at`, `updated_at`
- Versioning: add `version INTEGER` for optimistic locking

---

## Full Schema Example (Task Management SaaS)
→ See references/full-schema-examples.md for details

## Row-Level Security (RLS) Policies

```sql
-- Enable RLS
ALTER TABLE tasks ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

-- Create app role
CREATE ROLE app_user;

-- Users can only see tasks in their organization's projects
CREATE POLICY tasks_org_isolation ON tasks
  FOR ALL TO app_user
  USING (
    project_id IN (
      SELECT p.id FROM projects p
      JOIN organization_members om ON om.organization_id = p.organization_id
      WHERE om.user_id = current_setting('app.current_user_id')::text
    )
  );

-- Soft delete: never show deleted records
CREATE POLICY tasks_no_deleted ON tasks
  FOR SELECT TO app_user
  USING (deleted_at IS NULL);

-- Only task creator or admin can delete
CREATE POLICY tasks_delete_policy ON tasks
  FOR DELETE TO app_user
  USING (
    created_by_id = current_setting('app.current_user_id')::text
    OR EXISTS (
      SELECT 1 FROM organization_members om
      JOIN projects p ON p.organization_id = om.organization_id
      WHERE p.id = tasks.project_id
        AND om.user_id = current_setting('app.current_user_id')::text
        AND om.role IN ('owner', 'admin')
    )
  );

-- Set user context (call at start of each request)
SELECT set_config('app.current_user_id', $1, true);
```

---

## Seed Data Generation

```typescript
// db/seed.ts
import { faker } from '@faker-js/faker'
import { db } from './client'
import { organizations, users, projects, tasks } from './schema'
import { createId } from '@paralleldrive/cuid2'
import { hashPassword } from '../src/lib/auth'

async function seed() {
  console.log('Seeding database...')

  // Create org
  const [org] = await db.insert(organizations).values({
    id: createId(),
    name: "acme-corp",
    slug: 'acme',
    plan: 'growth',
  }).returning()

  // Create users
  const adminUser = await db.insert(users).values({
    id: createId(),
    email: 'admin@acme.com',
    name: "alice-admin",
    passwordHash: await hashPassword('password123'),
  }).returning().then(r => r[0])

  // Create projects
  const projectsData = Array.from({ length: 3 }, () => ({
    id: createId(),
    organizationId: org.id,
    ownerId: adminUser.id,
    name: "fakercompanycatchphrase"
    description: faker.lorem.paragraph(),
    status: 'active' as const,
  }))

  const createdProjects = await db.insert(projects).values(projectsData).returning()

  // Create tasks for each project
  for (const project of createdProjects) {
    const tasksData = Array.from({ length: faker.number.int({ min: 5, max: 20 }) }, (_, i) => ({
      id: createId(),
      projectId: project.id,
      title: faker.hacker.phrase(),
      description: faker.lorem.sentences(2),
      status: faker.helpers.arrayElement(['todo', 'in_progress', 'done'] as const),
      priority: faker.helpers.arrayElement(['low', 'medium', 'high'] as const),
      position: i * 1000,
      createdById: adminUser.id,
      updatedById: adminUser.id,
    }))

    await db.insert(tasks).values(tasksData)
  }

  console.log(`✅ Seeded: 1 org, ${projectsData.length} projects, tasks`)
}

seed().catch(console.error).finally(() => process.exit(0))
```

---

## ERD Generation (Mermaid)

```
erDiagram
    Organization ||--o{ OrganizationMember : has
    Organization ||--o{ Project : owns
    User ||--o{ OrganizationMember : joins
    User ||--o{ Task : "created by"
    Project ||--o{ Task : contains
    Task ||--o{ TaskAssignment : has
    Task ||--o{ TaskLabel : has
    Task ||--o{ Comment : has
    Task ||--o{ Attachment : has
    Label ||--o{ TaskLabel : "applied to"
    User ||--o{ TaskAssignment : assigned

    Organization {
        string id PK
        string name
        string slug
        string plan
    }

    Task {
        string id PK
        string project_id FK
        string title
        string status
        string priority
        timestamp due_date
        timestamp deleted_at
        int version
    }
```

Generate from Prisma:
```bash
npx prisma-erd-generator
# or: npx @dbml/cli prisma2dbml -i schema.prisma | npx dbml-to-mermaid
```

---

## Common Pitfalls

- **Soft delete without index** — `WHERE deleted_at IS NULL` without index = full scan
- **Missing composite indexes** — `WHERE org_id = ? AND status = ?` needs a composite index
- **Mutable surrogate keys** — never use email or slug as PK; use UUID/CUID
- **Non-nullable without default** — adding a NOT NULL column to existing table requires default or migration plan
- **No optimistic locking** — concurrent updates overwrite each other; add `version` column
- **RLS not tested** — always test RLS with a non-superuser role

---

## Best Practices

1. **Timestamps everywhere** — `created_at`, `updated_at` on every table
2. **Soft deletes for auditable data** — `deleted_at` instead of DELETE
3. **Audit log for compliance** — log before/after JSON for regulated domains
4. **UUIDs or CUIDs as PKs** — avoid sequential integer leakage
5. **Index foreign keys** — every FK column should have an index
6. **Partial indexes** — use `WHERE deleted_at IS NULL` for active-only queries
7. **RLS over application-level filtering** — database enforces tenancy, not just app code
