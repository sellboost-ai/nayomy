---
name: "qwik-basic-cursorrules-prompt-file"
clean_name: "Qwik Basic"
description: "Cursor rules for Qwik development with TypeScript and Vite integration."
description_tr: "Qwik geliştirmesi için Cursor kuralları, TypeScript ve Vite entegrasyonu ile birlikte."
category: "Frontend"
repo: "PatrickJS/awesome-cursorrules"
stars: 40010
path: "rules/qwik-basic-cursorrules-prompt-file.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/qwik-basic-cursorrules-prompt-file.mdc"
body_length: 1279
file_extension: ".mdc"
body_tr: |-
  ```typescript
  // Qwik.js Temel Kurulumu (TypeScript ve Vite ile) .cursorrules

  // İşlevsel bileşenleri tercih et

  const preferFunctionalComponents = true;

  // Qwik.js en iyi uygulamaları

  const qwikBestPractices = [
    "Tembel yüklenen işlevler için $ sonekini kullan",
    "Reaktif durum için useSignal() kullan",
    "Karmaşık durum nesneleri için useStore() uygula",
    "Veri getirme için useResource$() kullan",
    "Yan etkiler için useTask$() uygula",
    "Yalnızca tarayıcı kodu için useVisibleTask$() kullan",
    "Tür güvenliği için TypeScript'ten yararlan",
    "Geliştirme için Vite'ın hızlı HMR'sini kullan",
  ];

  // Klasör yapısı

  const folderStructure = `
  src/
    components/
    routes/
    global.css
    root.tsx
    entry.ssr.tsx
  public/
  vite.config.ts
  tsconfig.json
  `;

  // Ek talimatlar

  const additionalInstructions = `
  1. Tüm .ts ve .tsx dosyaları için TypeScript kullan
  2. Uygun hata sınırları uygula
  3. Uygun olduğunda yönlendirme için Qwik City'den yararlan
  4. Qwik'in yerleşik optimizasyon özelliklerini kullan
  5. Geliştirilmiş performans için tembel yükleme uygula
  6. Qwik'in adlandırma kurallarını ve en iyi uygulamalarını takip et
  7. Sunucu taraflı kod yürütme için server$ kullan
  8. Optimize edilmiş derlemeler için Vite eklentilerinden yararlan
  `;
  ```
---

// Qwik.js Basic Setup (with TypeScript and Vite) .cursorrules

// Prefer functional components

const preferFunctionalComponents = true;

// Qwik.js best practices

const qwikBestPractices = [
  "Use $ suffix for lazy-loaded functions",
  "Utilize useSignal() for reactive state",
  "Implement useStore() for complex state objects",
  "Use useResource$() for data fetching",
  "Implement useTask$() for side effects",
  "Utilize useVisibleTask$() for browser-only code",
  "Leverage TypeScript for type safety",
  "Use Vite's fast HMR for development",
];

// Folder structure

const folderStructure = `
src/
  components/
  routes/
  global.css
  root.tsx
  entry.ssr.tsx
public/
vite.config.ts
tsconfig.json
`;

// Additional instructions

const additionalInstructions = `
1. Use TypeScript for all .ts and .tsx files
2. Implement proper error boundaries
3. Utilize Qwik City for routing when applicable
4. Use Qwik's built-in optimization features
5. Implement lazy-loading for improved performance
6. Follow Qwik's naming conventions and best practices
7. Use server$ for server-side code execution
8. Leverage Vite plugins for optimized builds
`;
