---
name: "react-graphql-apollo-client-cursorrules-prompt-file"
clean_name: "React GraphQL Apollo Client"
description: "Cursor rules for GraphQL development with Apollo Client integration."
description_tr: "Apollo Client entegrasyonu ile GraphQL geliştirme için Cursor kuralları."
category: "Frontend"
repo: "PatrickJS/awesome-cursorrules"
stars: 39709
path: "rules/react-graphql-apollo-client-cursorrules-prompt-file.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/react-graphql-apollo-client-cursorrules-prompt-file.mdc"
body_length: 1179
file_extension: ".mdc"
body_tr: |-
  ```markdown
  // React + GraphQL (Apollo Client) .cursorrules

  // Fonksiyonel bileşenleri tercih et

  const preferFunctionalComponents = true;

  // GraphQL ve Apollo Client en iyi uygulamaları

  const graphqlBestPractices = [
    "Durum yönetimi ve veri getirme için Apollo Client kullan",
    "Veri getirme için sorgu bileşenleri uygula",
    "Veri değişiklikleri için mutasyonları kullan",
    "Yeniden kullanılabilir sorgu parçaları için fragmentleri kullan",
    "Uygun hata işleme ve yükleme durumlarını uygula",
  ];

  // Klasör yapısı

  const folderStructure = `
  src/
    components/
    graphql/
      queries/
      mutations/
      fragments/
    hooks/
    pages/
    utils/
  `;

  // Ek talimatlar

  const additionalInstructions = `
  1. Apollo Provider'ı uygulamanızın kökünde kullanın
  2. Apollo işlemleri için özel hooklar uygulayın
  3. GraphQL işlemleriyle tip güvenliği için TypeScript kullanın
  4. Apollo Client'ın önbelleğe alma yeteneklerini kullanın
  5. GraphQL hataları için uygun hata sınırları uygulayın
  6. Hata ayıklama için Apollo Client DevTools kullanın
  7. Sorgular, mutasyonlar ve fragmentler için adlandırma kurallarını izleyin
  `;
  ```
---

// React + GraphQL (Apollo Client) .cursorrules

// Prefer functional components with hooks

const preferFunctionalComponents = true;

// GraphQL and Apollo Client best practices

const graphqlBestPractices = [
  "Use Apollo Client for state management and data fetching",
  "Implement query components for data fetching",
  "Utilize mutations for data modifications",
  "Use fragments for reusable query parts",
  "Implement proper error handling and loading states",
];

// Folder structure

const folderStructure = `
src/
  components/
  graphql/
    queries/
    mutations/
    fragments/
  hooks/
  pages/
  utils/
`;

// Additional instructions

const additionalInstructions = `
1. Use Apollo Provider at the root of your app
2. Implement custom hooks for Apollo operations
3. Use TypeScript for type safety with GraphQL operations
4. Utilize Apollo Client's caching capabilities
5. Implement proper error boundaries for GraphQL errors
6. Use Apollo Client DevTools for debugging
7. Follow naming conventions for queries, mutations, and fragments
`;
