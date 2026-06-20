---
name: "migrate-to-shoehorn"
description_en: "Migrate test files from `as` type assertions to @total-typescript/shoehorn. Use when user mentions shoehorn, wants to replace `as` in tests, or needs partial test data."
description_tr: "Shoehorn kullanarak test dosyalarınızdaki `as` tip iddialarını geçirin. Test verilerinizi kısmi olarak tanımlamak veya testlerde `as` kullanımını değiştirmek istediğinizde kullanın."
category: "Design"
repo: "mattpocock/skills"
stars: 137186
url: "https://github.com/mattpocock/skills/blob/HEAD/skills/misc/migrate-to-shoehorn/SKILL.md"
path: "skills/misc/migrate-to-shoehorn/SKILL.md"
is_collection: false
body_length: 2573
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Shoehorn'a Geçiş
  
  ## Neden shoehorn?
  
  `shoehorn` testlerde kısmi veri geçirmenizi sağlarken TypeScript'i mutlu tutar. `as` assertions'ını type-safe alternatiflerle değiştirir.
  
  **Sadece test kodu için.** Shoehorn'u asla production kodunda kullanmayın.
  
  Testlerde `as` kullanmanın sorunları:
  
  - Kullanmamak için eğitildiniz
  - Hedef tipi manuel olarak belirtmeniz gerekir
  - İsteyerek yanlış veriler için double-as (`as unknown as Type`)
  
  ## Kurulum
  
  ```bash
  npm i @total-typescript/shoehorn
  ```
  
  ## Geçiş desenleri
  
  ### Az sayıda gerekli özelliği olan büyük nesneler
  
  Öncesi:
  
  ```ts
  type Request = {
    body: { id: string };
    headers: Record<string, string>;
    cookies: Record<string, string>;
    // ...20 daha fazla özellik
  };
  
  it("gets user by id", () => {
    // Sadece body.id'ye ihtiyaç duyar ama tüm Request'i fake etmeli
    getUser({
      body: { id: "123" },
      headers: {},
      cookies: {},
      // ...tüm 20 özelliği fake et
    });
  });
  ```
  
  Sonrası:
  
  ```ts
  import { fromPartial } from "@total-typescript/shoehorn";
  
  it("gets user by id", () => {
    getUser(
      fromPartial({
        body: { id: "123" },
      }),
    );
  });
  ```
  
  ### `as Type` → `fromPartial()`
  
  Öncesi:
  
  ```ts
  getUser({ body: { id: "123" } } as Request);
  ```
  
  Sonrası:
  
  ```ts
  import { fromPartial } from "@total-typescript/shoehorn";
  
  getUser(fromPartial({ body: { id: "123" } }));
  ```
  
  ### `as unknown as Type` → `fromAny()`
  
  Öncesi:
  
  ```ts
  getUser({ body: { id: 123 } } as unknown as Request); // isteyerek yanlış tip
  ```
  
  Sonrası:
  
  ```ts
  import { fromAny } from "@total-typescript/shoehorn";
  
  getUser(fromAny({ body: { id: 123 } }));
  ```
  
  ## Her biri ne zaman kullanılmalı
  
  | Function        | Kullanım durumu                                      |
  | --------------- | ---------------------------------------------------- |
  | `fromPartial()` | Yine de type-check olan kısmi veri geçir            |
  | `fromAny()`     | İsteyerek yanlış veri geçir (autocomplete'i koru)  |
  | `fromExact()`   | Tam nesneyi zorla (daha sonra fromPartial ile değiş)|
  
  ## İş akışı
  
  1. **Gereksinimleri toplayın** - kullanıcıya sorun:
     - Hangi test dosyalarında `as` assertions sorun oluşturuyor?
     - Sadece bazı özelliklerin önemli olduğu büyük nesnelerle mi çalışıyorlar?
     - Hata testleri için isteyerek yanlış veri geçirmeleri mi gerekiyor?
  
  2. **Kurun ve geçişi yapın**:
     - [ ] Kurun: `npm i @total-typescript/shoehorn`
     - [ ] `as` assertions'ı içeren test dosyalarını bulun: `grep -r " as [A-Z]" --include="*.test.ts" --include="*.spec.ts"`
     - [ ] `as Type` yerine `fromPartial()` yazın
     - [ ] `as unknown as Type` yerine `fromAny()` yazın
     - [ ] `@total-typescript/shoehorn`'dan import'ları ekleyin
     - [ ] Type check'i çalıştırarak doğrulayın
---

# Migrate to Shoehorn

## Why shoehorn?

`shoehorn` lets you pass partial data in tests while keeping TypeScript happy. It replaces `as` assertions with type-safe alternatives.

**Test code only.** Never use shoehorn in production code.

Problems with `as` in tests:

- Trained not to use it
- Must manually specify target type
- Double-as (`as unknown as Type`) for intentionally wrong data

## Install

```bash
npm i @total-typescript/shoehorn
```

## Migration patterns

### Large objects with few needed properties

Before:

```ts
type Request = {
  body: { id: string };
  headers: Record<string, string>;
  cookies: Record<string, string>;
  // ...20 more properties
};

it("gets user by id", () => {
  // Only care about body.id but must fake entire Request
  getUser({
    body: { id: "123" },
    headers: {},
    cookies: {},
    // ...fake all 20 properties
  });
});
```

After:

```ts
import { fromPartial } from "@total-typescript/shoehorn";

it("gets user by id", () => {
  getUser(
    fromPartial({
      body: { id: "123" },
    }),
  );
});
```

### `as Type` → `fromPartial()`

Before:

```ts
getUser({ body: { id: "123" } } as Request);
```

After:

```ts
import { fromPartial } from "@total-typescript/shoehorn";

getUser(fromPartial({ body: { id: "123" } }));
```

### `as unknown as Type` → `fromAny()`

Before:

```ts
getUser({ body: { id: 123 } } as unknown as Request); // wrong type on purpose
```

After:

```ts
import { fromAny } from "@total-typescript/shoehorn";

getUser(fromAny({ body: { id: 123 } }));
```

## When to use each

| Function        | Use case                                           |
| --------------- | -------------------------------------------------- |
| `fromPartial()` | Pass partial data that still type-checks           |
| `fromAny()`     | Pass intentionally wrong data (keeps autocomplete) |
| `fromExact()`   | Force full object (swap with fromPartial later)    |

## Workflow

1. **Gather requirements** - ask user:
   - What test files have `as` assertions causing problems?
   - Are they dealing with large objects where only some properties matter?
   - Do they need to pass intentionally wrong data for error testing?

2. **Install and migrate**:
   - [ ] Install: `npm i @total-typescript/shoehorn`
   - [ ] Find test files with `as` assertions: `grep -r " as [A-Z]" --include="*.test.ts" --include="*.spec.ts"`
   - [ ] Replace `as Type` with `fromPartial()`
   - [ ] Replace `as unknown as Type` with `fromAny()`
   - [ ] Add imports from `@total-typescript/shoehorn`
   - [ ] Run type check to verify
