---
name: "react-redux-typescript-cursorrules-prompt-file"
clean_name: "React Redux TypeScript"
description: "Cursor rules for React development with Redux and TypeScript integration."
description_tr: "React geliştirme için Cursor rules'ları Redux ve TypeScript entegrasyonu ile birlikte kullanabilirsiniz."
category: "Frontend"
repo: "PatrickJS/awesome-cursorrules"
stars: 40019
path: "rules/react-redux-typescript-cursorrules-prompt-file.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/react-redux-typescript-cursorrules-prompt-file.mdc"
body_length: 1156
file_extension: ".mdc"
body_tr: |-
  ```
  // React + Redux + TypeScript .cursorrules

  // Fonksiyonel bileşenleri tercih et

  const preferFunctionalComponents = true;

  // Type güvenliği için TypeScript kullan

  const useTypeScript = true;

  // Redux en iyi uygulamaları

  const reduxBestPractices = [
    "Verimli Redux geliştirmesi için Redux Toolkit kullan",
    "Redux kodunu organize etmek için slice pattern'ı uygula",
    "Async işlemleri yönetmek için createAsyncThunk kullan",
    "Bileşenlerde state'e erişmek için selectors kullan",
  ];

  // Klasör yapısı

  const folderStructure = `
  src/
    components/
    features/
    store/
      slices/
      hooks.ts
      store.ts
    types/
    utils/
  `;

  // Ek talimatlar

  const additionalInstructions = `
  1. Props içeren fonksiyonel bileşenler için React.FC kullan
  2. Katı TypeScript kontrollerini uygula
  3. Bileşenlerde Redux hooks'larını (useSelector, useDispatch) kullan
  4. Redux işlemleri için yeniden kullanılabilir typed hook'lar oluştur
  5. Async işlemlerde uygun hata yönetimini uygula
  6. Hata ayıklama için Redux DevTools kullan
  7. Adlandırma kuralları için Redux stil rehberini takip et
  `;
  ```
---

// React + Redux + TypeScript .cursorrules

// Prefer functional components with hooks

const preferFunctionalComponents = true;

// Use TypeScript for type safety

const useTypeScript = true;

// Redux best practices

const reduxBestPractices = [
  "Use Redux Toolkit for efficient Redux development",
  "Implement slice pattern for organizing Redux code",
  "Utilize createAsyncThunk for handling async actions",
  "Use selectors for accessing state in components",
];

// Folder structure

const folderStructure = `
src/
  components/
  features/
  store/
    slices/
    hooks.ts
    store.ts
  types/
  utils/
`;

// Additional instructions

const additionalInstructions = `
1. Use React.FC for functional components with props
2. Implement strict TypeScript checks
3. Use Redux hooks (useSelector, useDispatch) in components
4. Create reusable typed hooks for Redux operations
5. Implement proper error handling in async operations
6. Use Redux DevTools for debugging
7. Follow Redux style guide for naming conventions
`;
