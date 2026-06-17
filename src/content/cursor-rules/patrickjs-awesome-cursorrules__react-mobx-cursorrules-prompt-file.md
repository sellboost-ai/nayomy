---
name: "react-mobx-cursorrules-prompt-file"
clean_name: "React Mobx"
description: "Cursor rules for React development with MobX integration."
description_tr: "React geliştirimi için MobX entegrasyonlu Cursor kuralları."
category: "Frontend"
repo: "PatrickJS/awesome-cursorrules"
stars: 40019
path: "rules/react-mobx-cursorrules-prompt-file.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/react-mobx-cursorrules-prompt-file.mdc"
body_length: 1115
file_extension: ".mdc"
body_tr: |-
  ```
  // React + MobX .cursorrules

  // Fonksiyonel bileşenleri tercih et

  const preferFunctionalComponents = true;

  // MobX en iyi uygulamaları

  const mobxBestPractices = [
    "Fonksiyonel bileşenlerle optimal performans için MobX-react-lite kullan",
    "Uygulama durumunu yönetmek için store'lar uygula",
    "Türetilmiş state için computed değerleri kullan",
    "Observable state'i değiştirmek için action'ları kullan",
    "Asenkron action'larda uygun hata işleme uygula",
  ];

  // Klasör yapısı

  const folderStructure = `
  src/
    components/
    stores/
    hooks/
    pages/
    utils/
  `;

  // Ek talimatlar

  const additionalInstructions = `
  1. MobX ile type safety için TypeScript kullan
  2. Daha iyi debugging için MobX strict mode'unu uygula
  3. Reaktif bileşenler için observer HOC veya useObserver hook kullan
  4. Store'lar için uygun dependency injection uygula
  5. Observable değişikliklere dayalı yan etkiler için reaction kullan
  6. Debugging için MobX DevTools'u kullan
  7. Ölçeklenebilir state management için MobX en iyi uygulamalarını takip et
  `;
  ```
---

// React + MobX .cursorrules

// Prefer functional components with hooks

const preferFunctionalComponents = true;

// MobX best practices

const mobxBestPractices = [
  "Use MobX-react-lite for optimal performance with functional components",
  "Implement stores for managing application state",
  "Utilize computed values for derived state",
  "Use actions for modifying observable state",
  "Implement proper error handling in asynchronous actions",
];

// Folder structure

const folderStructure = `
src/
  components/
  stores/
  hooks/
  pages/
  utils/
`;

// Additional instructions

const additionalInstructions = `
1. Use TypeScript for type safety with MobX
2. Implement strict mode for MobX for better debugging
3. Use observer HOC or useObserver hook for reactive components
4. Implement proper dependency injection for stores
5. Use reaction for side-effects based on observable changes
6. Utilize MobX DevTools for debugging
7. Follow MobX best practices for scalable state management
`;
