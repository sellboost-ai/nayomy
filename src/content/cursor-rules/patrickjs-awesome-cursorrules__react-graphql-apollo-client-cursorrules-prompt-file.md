---
name: "react-graphql-apollo-client-cursorrules-prompt-file"
clean_name: "React GraphQL Apollo Client"
description: "Cursor rules for GraphQL development with Apollo Client integration."
category: "Frontend"
repo: "PatrickJS/awesome-cursorrules"
stars: 40010
path: "rules/react-graphql-apollo-client-cursorrules-prompt-file.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/react-graphql-apollo-client-cursorrules-prompt-file.mdc"
body_length: 1179
file_extension: ".mdc"
body_tr: |-
  ```
  // React + GraphQL (Apollo Client) .cursorrules

  // Fonksiyonel bileşenleri tercih et

  const preferFunctionalComponents = true;

  // GraphQL ve Apollo Client en iyi uygulamaları

  const graphqlBestPractices = [
    "State yönetimi ve veri getirme için Apollo Client kullan",
    "Veri getirme için query bileşenleri implement et",
    "Veri değişiklikleri için mutation'ları kullan",
    "Yeniden kullanılabilir query parçaları için fragment'ları kullan",
    "Uygun error handling ve loading state'leri implement et",
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
  1. Uygulamanızın root'unda Apollo Provider kullanın
  2. Apollo işlemleri için custom hook'lar implement edin
  3. GraphQL işlemleriyle type güvenliği için TypeScript kullanın
  4. Apollo Client'ın caching yeteneklerinden yararlanın
  5. GraphQL hataları için uygun error boundary'ler implement edin
  6. Debugging için Apollo Client DevTools kullanın
  7. Query'ler, mutation'lar ve fragment'lar için naming convention'ları takip edin
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
