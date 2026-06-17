---
name: "react-styled-components-cursorrules-prompt-file"
clean_name: "React Styled Components"
description: "Cursor rules for React development with Styled Components integration."
description_tr: "React geliştirme için Cursor kuralları, Styled Components entegrasyonu ile birlikte sunulur."
category: "Frontend"
repo: "PatrickJS/awesome-cursorrules"
stars: 40010
path: "rules/react-styled-components-cursorrules-prompt-file.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/react-styled-components-cursorrules-prompt-file.mdc"
body_length: 1193
file_extension: ".mdc"
body_tr: |-
  ```
  // React + Styled Components .cursorrules

  // Fonksiyonel componentleri hooks ile kullan

  const preferFunctionalComponents = true;

  // Styled Components en iyi uygulamaları

  const styledComponentsBestPractices = [
    "Daha iyi debugging için styled-components/macro kullan",
    "ThemeProvider kullanarak global theme uygula",
    "Yeniden kullanılabilir styled componentler oluştur",
    "Dinamik styling için props kullan",
    "Gerektiğinde css`` gibi CSS helper fonksiyonlarını kullan",
  ];

  // Klasör yapısı

  const folderStructure = `
  src/
    components/
      styled/
    styles/
      theme.js
      globalStyles.js
    pages/
    utils/
  `;

  // Ek talimatlar

  const additionalInstructions = `
  1. Styled componentler için uygun adlandırma kurallarını kullan (örn. StyledButton)
  2. Tutarlı bir theme sistemi uygula
  3. Tüm styling ihtiyaçları için CSS-in-JS kullan
  4. Sık kullanılan props için styled-components' attrs metodunu kullan
  5. Styled-components için uygun TypeScript desteği uygula
  6. Şartlı styling için uygun olduğunda css prop'unu kullan
  7. En iyi uygulamalar için styled-components dokümantasyonunu takip et
  `;
  ```
---

// React + Styled Components .cursorrules

// Prefer functional components with hooks

const preferFunctionalComponents = true;

// Styled Components best practices

const styledComponentsBestPractices = [
  "Use the styled-components/macro for better debugging",
  "Implement a global theme using ThemeProvider",
  "Create reusable styled components",
  "Use props for dynamic styling",
  "Utilize CSS helper functions like css`` when needed",
];

// Folder structure

const folderStructure = `
src/
  components/
    styled/
  styles/
    theme.js
    globalStyles.js
  pages/
  utils/
`;

// Additional instructions

const additionalInstructions = `
1. Use proper naming conventions for styled components (e.g., StyledButton)
2. Implement a consistent theming system
3. Use CSS-in-JS for all styling needs
4. Utilize styled-components' attrs method for frequently used props
5. Implement proper TypeScript support for styled-components
6. Use the css prop for conditional styling when appropriate
7. Follow the styled-components documentation for best practices
`;
