---
name: "react-query-cursorrules-prompt-file"
clean_name: "React Query"
description: "Cursor rules for React development with React Query integration."
description_tr: "React Query entegrasyonlu React geliştirme için cursor kuralları."
category: "Frontend"
repo: "PatrickJS/awesome-cursorrules"
stars: 40019
path: "rules/react-query-cursorrules-prompt-file.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/react-query-cursorrules-prompt-file.mdc"
body_length: 1133
file_extension: ".mdc"
body_tr: |-
  ```
  // React + React Query .cursorrules

  // İşlevsel bileşenleri hooks ile tercih edin

  const preferFunctionalComponents = true;

  // React Query en iyi uygulamaları

  const reactQueryBestPractices = [
    "Uygulamanızın kökünde QueryClient ve QueryClientProvider kullanın",
    "Sorgular ve mutasyonlar için özel hooks uygulayın",
    "Etkili önbellekleme için sorgu anahtarlarından yararlanın",
    "Geliştirilmiş performans için önceden yüklemeyi kullanın",
    "Uygun hata ve yükleme durumlarını uygulayın",
  ];

  // Klasör yapısı

  const folderStructure = `
  src/
    components/
    hooks/
      useQueries/
      useMutations/
    pages/
    utils/
    api/
  `;

  // Ek talimatlar

  const additionalInstructions = `
  1. React Query ile tip güvenliği için TypeScript kullanın
  2. Sorgu hataları için uygun hata sınırları uygulayın
  3. Hata ayıklama için React Query DevTools'u kullanın
  4. Veri tazeliği için stale-while-revalidate stratejisini kullanın
  5. Mutasyonlar için iyimser güncellemeleri uygulayın
  6. Veri yeniden alınması için sorgu geçersiz kılmayı kullanın
  7. Tutarlılık için React Query adlandırma kurallarını izleyin
  `;
  ```
---

// React + React Query .cursorrules

// Prefer functional components with hooks

const preferFunctionalComponents = true;

// React Query best practices

const reactQueryBestPractices = [
  "Use QueryClient and QueryClientProvider at the root of your app",
  "Implement custom hooks for queries and mutations",
  "Utilize query keys for effective caching",
  "Use prefetching for improved performance",
  "Implement proper error and loading states",
];

// Folder structure

const folderStructure = `
src/
  components/
  hooks/
    useQueries/
    useMutations/
  pages/
  utils/
  api/
`;

// Additional instructions

const additionalInstructions = `
1. Use TypeScript for type safety with React Query
2. Implement proper error boundaries for query errors
3. Utilize React Query DevTools for debugging
4. Use stale-while-revalidate strategy for data freshness
5. Implement optimistic updates for mutations
6. Use query invalidation for data refetching
7. Follow React Query naming conventions for consistency
`;
