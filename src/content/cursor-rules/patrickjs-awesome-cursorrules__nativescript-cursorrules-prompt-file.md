---
name: "nativescript-cursorrules-prompt-file"
clean_name: "Nativescript"
description: "Cursor rules for NativeScript development."
description_tr: "NativeScript geliştirmesi için Cursor kuralları."
category: "Other"
repo: "PatrickJS/awesome-cursorrules"
stars: 40019
path: "rules/nativescript-cursorrules-prompt-file.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/nativescript-cursorrules-prompt-file.mdc"
body_length: 961
file_extension: ".mdc"
body_tr: |-
  ```
  // NativeScript .cursorrules

  // NativeScript en iyi uygulamaları

  const nativeScriptBestPractices = [
    "Geçerli olduğunda @nativescript/core özellikleri ve API'larını kullanın",
    "Geçerli olduğunda yaygın web API'larını kullanın",
    "NativeScript Navigation kullanarak uygun navigasyonu uygulayın",
    "Görseller, sesler veya videolar için NativeScript'in assets klasörünü ve özel fontlar için fonts klasörünü kullanın",
    "Mümkün olduğunda uygun hata işlemeyi uygulayın"
  ];

  // Klasör yapısı

  const folderStructure = `
  src/
    assets/
    components/
    services/
    utils/
  `;

  // Ek talimatlar

  const additionalInstructions = `
  1. Tür güvenliği için TypeScript kullanın
  2. Hassas veriler için @nativescript/secure-storage kullanın
  3. Biyometri ile ilgili her şey için @nativescript/biometrics kullanın
  4. Font ikonları için her zaman nativescript-fonticon kullanın
  5. Performans için NativeScript en iyi uygulamalarını takip edin
  `;
  ```
---

// NativeScript .cursorrules

// NativeScript best practices

const nativeScriptBestPractices = [
  "Utilize @nativescript/core features and APIs where applicable",
  "Utilize common web APIs where applicable",
  "Implement proper navigation using NativeScript Navigation",
  "Use NativeScript's assets folder for images, sounds or videos and use the fonts folder for custom fonts",
  "Implement proper error handling where possible"
];

// Folder structure

const folderStructure = `
src/
  assets/
  components/
  services/
  utils/
`;

// Additional instructions

const additionalInstructions = `
1. Use TypeScript for type safety
2. Use @nativescript/secure-storage for sensitive data
3. Use @nativescript/biometrics for anything related to biometrics
4. Always use nativescript-fonticon for font icons
5. Follow NativeScript best practices for performance
`;
