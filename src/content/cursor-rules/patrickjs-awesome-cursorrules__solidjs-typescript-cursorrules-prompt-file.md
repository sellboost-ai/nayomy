---
name: "solidjs-typescript-cursorrules-prompt-file"
clean_name: "Solidjs TypeScript"
description: "Cursor rules for Solid.js development with TypeScript integration."
description_tr: "Solid.js geliştirmesi için Cursor kuralları TypeScript entegrasyonu ile birlikte."
category: "Frontend"
repo: "PatrickJS/awesome-cursorrules"
stars: 40010
path: "rules/solidjs-typescript-cursorrules-prompt-file.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/solidjs-typescript-cursorrules-prompt-file.mdc"
body_length: 1152
file_extension: ".mdc"
body_tr: |-
  ```typescript
  // TypeScript ile Solid.js .cursorrules

  // Fonksiyonel bileşenleri tercih et

  const preferFunctionalComponents = true;

  // Solid.js ve TypeScript en iyi uygulamaları

  const solidjsTypeScriptBestPractices = [
    "Yazılı reaktif state için createSignal<T>() kullan",
    "Bileşenler için uygun tip tanımları uygula",
    "TypeScript'in strict modunu kullan",
    "Mümkün olduğunda tip çıkarımını kullan",
    "Karmaşık prop türleri için arayüzler uygula",
    "Solid.js tarafından sağlanan utility türlerini kullan",
  ];

  // Klasör yapısı

  const folderStructure = `
  src/
    components/
    pages/
    utils/
    types/
    App.tsx
    index.tsx
  public/
    index.html
  tsconfig.json
  `;

  // Ek talimatlar

  const additionalInstructions = `
  1. JSX içeren dosyalar için .tsx uzantısını kullan
  2. Katı TypeScript kontrollerini uygula
  3. Solid Router'ı uygun yazımla kullan
  4. createContext ile type-safe context kullan
  5. Event handler'lar için uygun yazım uygula
  6. TypeScript en iyi uygulamaları ve adlandırma kurallarını izle
  7. Tip iddialamalarını az kullan ve sadece gerekli olduğunda kullan
  `;
  ```
---

// Solid.js with TypeScript .cursorrules

// Prefer functional components

const preferFunctionalComponents = true;

// Solid.js and TypeScript best practices

const solidjsTypeScriptBestPractices = [
  "Use createSignal<T>() for typed reactive state",
  "Implement proper type definitions for components",
  "Utilize TypeScript's strict mode",
  "Use type inference where possible",
  "Implement interfaces for complex prop types",
  "Utilize utility types provided by Solid.js",
];

// Folder structure

const folderStructure = `
src/
  components/
  pages/
  utils/
  types/
  App.tsx
  index.tsx
public/
  index.html
tsconfig.json
`;

// Additional instructions

const additionalInstructions = `
1. Use .tsx extension for files with JSX
2. Implement strict TypeScript checks
3. Utilize Solid Router with proper typing
4. Use type-safe context with createContext
5. Implement proper typing for event handlers
6. Follow TypeScript best practices and naming conventions
7. Use type assertions sparingly and only when necessary
`;
