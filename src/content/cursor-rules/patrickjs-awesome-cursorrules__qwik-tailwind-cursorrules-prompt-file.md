---
name: "qwik-tailwind-cursorrules-prompt-file"
clean_name: "Qwik Tailwind"
description: "Cursor rules for Qwik development with Tailwind CSS integration."
category: "Frontend"
repo: "PatrickJS/awesome-cursorrules"
stars: 40010
path: "rules/qwik-tailwind-cursorrules-prompt-file.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/qwik-tailwind-cursorrules-prompt-file.mdc"
body_length: 1424
file_extension: ".mdc"
body_tr: |-
  ```markdown
  // Qwik.js with Tailwind CSS (TypeScript ve Vite dahil) .cursorrules

  // İşlevsel bileşenleri tercih edin

  const preferFunctionalComponents = true;

  // Qwik.js ve Tailwind CSS en iyi uygulamaları

  const qwikTailwindBestPractices = [
    "Tembel yüklenen fonksiyonlar için $ sonekini kullanın",
    "Reaktif state için useSignal() kullanın",
    "Stil için Tailwind CSS sınıflarını uygulayın",
    "Yeniden kullanılabilir stiller için CSS dosyalarında @apply yönergesini kullanın",
    "Tailwind'in responsive sınıflarını kullanarak responsive tasarım uygulayın",
    "Özelleştirme için Tailwind'in yapılandırma dosyasını kullanın",
    "Tip güvenliği için TypeScript'ten yararlanın",
    "Geliştirme için Vite'nin hızlı HMR'ını kullanın",
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
  tailwind.config.js
  postcss.config.js
  vite.config.ts
  tsconfig.json
  `;

  // Ek talimatlar

  const additionalInstructions = `
  1. Tüm .ts ve .tsx dosyaları için TypeScript kullanın
  2. Üretim derlemeleri için uygun Tailwind CSS temizlemesi uygulayın
  3. Uygun olduğunda yönlendirme için Qwik City kullanın
  4. Özel stiller için Tailwind'in @layer yönergesini kullanın
  5. Tailwind'in dark değişkenini kullanarak dark mode uygulayın
  6. Hem Qwik hem de Tailwind adlandırma kurallarını izleyin
  7. Sunucu tarafı kod yürütmesi için server$ kullanın
  8. Optimize edilmiş derlemeler için Vite eklentilerinden yararlanın
  `;
  ```
---

// Qwik.js with Tailwind CSS (TypeScript and Vite included) .cursorrules

// Prefer functional components

const preferFunctionalComponents = true;

// Qwik.js and Tailwind CSS best practices

const qwikTailwindBestPractices = [
  "Use $ suffix for lazy-loaded functions",
  "Utilize useSignal() for reactive state",
  "Implement Tailwind CSS classes for styling",
  "Use @apply directive in CSS files for reusable styles",
  "Implement responsive design using Tailwind's responsive classes",
  "Utilize Tailwind's configuration file for customization",
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
tailwind.config.js
postcss.config.js
vite.config.ts
tsconfig.json
`;

// Additional instructions

const additionalInstructions = `
1. Use TypeScript for all .ts and .tsx files
2. Implement proper Tailwind CSS purging for production builds
3. Utilize Qwik City for routing when applicable
4. Use Tailwind's @layer directive for custom styles
5. Implement dark mode using Tailwind's dark variant
6. Follow both Qwik and Tailwind naming conventions
7. Use server$ for server-side code execution
8. Leverage Vite plugins for optimized builds
`;
