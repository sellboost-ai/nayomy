---
name: "qwik-tailwind-cursorrules-prompt-file"
clean_name: "Qwik Tailwind"
description: "Cursor rules for Qwik development with Tailwind CSS integration."
description_tr: "Qwik geliştirme için Cursor kuralları ve Tailwind CSS entegrasyonu."
category: "Frontend"
repo: "PatrickJS/awesome-cursorrules"
stars: 40019
path: "rules/qwik-tailwind-cursorrules-prompt-file.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/qwik-tailwind-cursorrules-prompt-file.mdc"
body_length: 1424
file_extension: ".mdc"
body_tr: |-
  ```
  // Qwik.js with Tailwind CSS (TypeScript and Vite included) .cursorrules

  // Fonksiyonel bileşenleri tercih et

  const preferFunctionalComponents = true;

  // Qwik.js ve Tailwind CSS en iyi uygulamalar

  const qwikTailwindBestPractices = [
    "Tembel yüklenen fonksiyonlar için $ soneki kullan",
    "Reaktif state için useSignal() kullan",
    "Stil oluşturmak için Tailwind CSS sınıflarını uygula",
    "Yeniden kullanılabilir stiller için CSS dosyalarında @apply direktifini kullan",
    "Tailwind'in responsive sınıflarını kullanarak responsive tasarım uygula",
    "Özelleştirme için Tailwind'in konfigürasyon dosyasını kullan",
    "Tür güvenliği için TypeScript'ten faydalanın",
    "Geliştirme için Vite'ın hızlı HMR'ından faydalanın",
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
  2. Üretim derlemeleri için uygun Tailwind CSS temizliği uygula
  3. Uygun olduğunda yönlendirme için Qwik City kullan
  4. Özel stiller için Tailwind'in @layer direktifini kullan
  5. Tailwind'in dark varyantını kullanarak dark mode uygula
  6. Hem Qwik hem de Tailwind adlandırma kurallarını takip et
  7. Sunucu tarafı kod yürütmesi için server$ kullan
  8. Optimize edilmiş derlemeler için Vite eklentilerinden faydalanın
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
