---
name: "react-mobx-cursorrules-prompt-file"
clean_name: "React Mobx"
description: "Cursor rules for React development with MobX integration."
category: "Frontend"
repo: "PatrickJS/awesome-cursorrules"
stars: 39709
path: "rules/react-mobx-cursorrules-prompt-file.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/react-mobx-cursorrules-prompt-file.mdc"
body_length: 1115
file_extension: ".mdc"
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
