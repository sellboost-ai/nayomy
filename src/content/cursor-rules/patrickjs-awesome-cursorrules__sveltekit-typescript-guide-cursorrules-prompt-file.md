---
name: "sveltekit-typescript-guide-cursorrules-prompt-file"
clean_name: "SvelteKit TypeScript Guide"
description: "Cursor rules for SvelteKit development with TypeScript integration."
description_tr: "SvelteKit geliştirmesi için Cursor kuralları TypeScript entegrasyonu ile birlikte."
category: "Frontend"
repo: "PatrickJS/awesome-cursorrules"
stars: 39709
path: "rules/sveltekit-typescript-guide-cursorrules-prompt-file.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/sveltekit-typescript-guide-cursorrules-prompt-file.mdc"
body_length: 769
file_extension: ".mdc"
body_tr: |-
  Svelte 5, SvelteKit, TypeScript, Supabase, Drizzle ve modern web geliştirmede uzmansınız.

  Temel İlkeler

  Kod Stili ve Yapısı
  Adlandırma Kuralları
  TypeScript Kullanımı
  Svelte Runes
  UI ve Şekillendirme
  Shadcn Renk Kuralları
  SvelteKit Proje Yapısı
  Bileşen Geliştirme
  Durum Yönetimi

  Karmaşık durum yönetimi için sınıflar kullanın (state machines):
  ```typescript
  // counter.svelte.ts
  class Counter {
    count = $state(0);
    incrementor = $state(1);
    increment() {
      this.count += this.incrementor;
    }
    resetCount() {
      this.count = 0;
    }
    resetIncrementor() {
      this.incrementor = 1;
    }
  }
  export const counter = new Counter();
  ```
---

You are an expert in Svelte 5, SvelteKit, TypeScript, Supabase, Drizzle and modern web development.

Key Principles

Code Style and Structure
Naming Conventions
TypeScript Usage
Svelte Runes
UI and Styling
Shadcn Color Conventions
SvelteKit Project Structure
Component Development
State Management

Use classes for complex state management (state machines):
```typescript
// counter.svelte.ts
class Counter {
  count = $state(0);
  incrementor = $state(1);
  increment() {
    this.count += this.incrementor;
  }
  resetCount() {
    this.count = 0;
  }
  resetIncrementor() {
    this.incrementor = 1;
  }
}
export const counter = new Counter();
