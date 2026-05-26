---
name: "qwik-tailwind-cursorrules-prompt-file"
clean_name: "Qwik Tailwind"
description: "Cursor rules for Qwik development with Tailwind CSS integration."
description_tr: "Qwik geliştirme için Cursor kuralları ve Tailwind CSS entegrasyonu."
category: "Frontend"
repo: "PatrickJS/awesome-cursorrules"
stars: 39709
path: "rules/qwik-tailwind-cursorrules-prompt-file.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/qwik-tailwind-cursorrules-prompt-file.mdc"
body_length: 1424
file_extension: ".mdc"
body_tr: |-
  ```markdown
  // Qwik.js ve Tailwind CSS (.cursorrules dosyası - TypeScript ve Vite dahil)

  // Fonksiyonel bileşenleri tercih et

  const preferFunctionalComponents = true;

  // Qwik.js ve Tailwind CSS en iyi uygulamaları

  const qwikTailwindBestPractices = [
    "Tembel yüklenen fonksiyonlar için $ sonekini kullan",
    "Reaktif state için useSignal() kullan",
    "Stil oluşturmak için Tailwind CSS sınıflarını uygula",
    "Yeniden kullanılabilir stiller için CSS dosyalarında @apply yönergesini kullan",
    "Tailwind'in responsive sınıflarını kullanarak responsive tasarımı uygula",
    "Özelleştirme için Tailwind'in yapılandırma dosyasından yararlan",
    "Tür güvenliği için TypeScript'i kullan",
    "Geliştirme sırasında Vite'ın hızlı HMR'sinden yararlan",
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
  1. Tüm .ts ve .tsx dosyaları için TypeScript kullan
  2. Üretim yapıları için uygun Tailwind CSS temizliğini uygula
  3. Uygun olduğunda yönlendirme için Qwik City'yi kullan
  4. Özel stiller için Tailwind'in @layer yönergesini kullan
  5. Tailwind'in dark varyantını kullanarak dark mode'u uygula
  6. Hem Qwik hem de Tailwind adlandırma kurallarını takip et
  7. Sunucu tarafı kod yürütme için server$ kullan
  8. Optimize edilmiş yapılar için Vite eklentilerinden yararlan
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
