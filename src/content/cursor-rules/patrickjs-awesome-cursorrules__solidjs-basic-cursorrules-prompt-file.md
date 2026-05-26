---
name: "solidjs-basic-cursorrules-prompt-file"
clean_name: "Solidjs Basic"
description: "Cursor rules for Solid.js development with basic setup."
description_tr: "Solid.js geliştirme için cursor rules ve temel kurulum."
category: "Frontend"
repo: "PatrickJS/awesome-cursorrules"
stars: 39709
path: "rules/solidjs-basic-cursorrules-prompt-file.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/solidjs-basic-cursorrules-prompt-file.mdc"
body_length: 1115
file_extension: ".mdc"
body_tr: |-
  // Solid.js Temel Kurulum .cursorrules

  // Fonksiyonel bileşenleri tercih et

  const preferFunctionalComponents = true;

  // Solid.js en iyi uygulamalar

  const solidjsBestPractices = [
    "Reaktif state için createSignal() kullan",
    "Yan etkiler için createEffect() kullan",
    "Türetilmiş değerler için createMemo() uygula",
    "Veri fetching için createResource() kullan",
    "Koşullu ve liste rendering için Show ve For bileşenlerini uygula",
    "Karmaşık state yönetimi için createStore() kullan",
  ];

  // Klasör yapısı

  const folderStructure = `
  src/
    components/
    pages/
    utils/
    App.jsx
    index.jsx
  public/
    index.html
  `;

  // Ek talimatlar

  const additionalInstructions = `
  1. Bileşen şablonları için JSX kullan
  2. Uygun error boundaries uygula
  3. Uygun olduğunda routing için Solid Router kullan
  4. Solid'in yerleşik optimizasyon özelliklerini kullan
  5. İyileştirilmiş performans için lazy-loading uygula
  6. Solid.js adlandırma kurallarını ve en iyi uygulamaları takip et
  7. Gerektiğinde server-side rendering (SSR) kullan
  `;
---

// Solid.js Basic Setup .cursorrules

// Prefer functional components

const preferFunctionalComponents = true;

// Solid.js best practices

const solidjsBestPractices = [
  "Use createSignal() for reactive state",
  "Utilize createEffect() for side effects",
  "Implement createMemo() for derived values",
  "Use createResource() for data fetching",
  "Implement Show and For components for conditional and list rendering",
  "Utilize createStore() for complex state management",
];

// Folder structure

const folderStructure = `
src/
  components/
  pages/
  utils/
  App.jsx
  index.jsx
public/
  index.html
`;

// Additional instructions

const additionalInstructions = `
1. Use JSX for component templates
2. Implement proper error boundaries
3. Utilize Solid Router for routing when applicable
4. Use Solid's built-in optimization features
5. Implement lazy-loading for improved performance
6. Follow Solid.js naming conventions and best practices
7. Use server-side rendering (SSR) when needed
`;
