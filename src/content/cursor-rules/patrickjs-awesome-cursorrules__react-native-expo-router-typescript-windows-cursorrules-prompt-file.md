---
name: "react-native-expo-router-typescript-windows-cursorrules-prompt-file"
clean_name: "React Native Expo Router TypeScript Windows"
description: "Cursor rules for React Native Expo Router Typescript Windows."
description_tr: "React Native Expo Router Typescript Windows için Cursor kuralları."
category: "Mobile"
repo: "PatrickJS/awesome-cursorrules"
stars: 39709
path: "rules/react-native-expo-router-typescript-windows-cursorrules-prompt-file.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/react-native-expo-router-typescript-windows-cursorrules-prompt-file.mdc"
body_length: 2717
file_extension: ".mdc"
body_tr: |-
  ```markdown
  // React Native Expo .cursorrules

  // React Native Expo En İyi Uygulamaları

  const reactNativeExpoBestPractices = [
    "Fonksiyonel bileşenleri hooks ile kullanın.",
    "Expo SDK özelliklerinden ve API'lerinden yararlanın.",
    "Expo Router kullanarak navigasyon uygulayın.",
    "Görüntüler ve fontlar için Expo'nun asset sistemiyle varlıkları yönetin.",
    "Sağlam hata işleme ve crash raporlaması uygulayın.",
    "Expo'nun push notification sisteminden yararlanın.",
    "Tür güvenliği için TypeScript benimseyin.",
    "StyleSheet kullanarak tutarlı stil uygulayın.",
    "Expo'nun vector iconlarını dahil edin.",
    "Expo'nun SecureStore ile hassas verileri güvenli hale getirin.",
    "Uygun çevrimdışı desteği uygulayın.",
    "React Native en iyi uygulamalarını takip ederek performansı optimize edin.",
    "Expo'nun OTA mekanizmasını kullanarak güncellemeleri dağıtın.",
    "NativeWind kullanarak bileşenleri stillendiirin.",
  ];

  // Klasör Yapısı

  const folderStructure = `
  assets/
  src/
    components/
    screens/
    navigation/
    hooks/
    utils/
  app/
    _layout.tsx
    index.tsx
  App.js
  app.json
  `;

  // Paket Sürümü Uyumluluğu Notları

  const packageCompatibilityNotes = [
    "NativeWind ve Tailwind CSS uyumluluğu:",
    "- nativewind@2.0.11 ile tailwindcss@3.3.2 kullanın.",
    "- Daha yüksek sürümler 'process(css).then(cb)' hatalarına neden olabilir.",
    "- Hatalar oluşursa, her iki paketi kaldırın ve belirli sürümleri yeniden kurun:",
    "  npm remove nativewind tailwindcss",
    "  npm install nativewind@2.0.11 tailwindcss@3.3.2",

    "NativeWind için Babel yapılandırması:",
    "- 'nativewind/babel' öğesini plugins dizisine dahil edin.",
    "- Preset'lerde jsxImportSource kullanmaktan kaçının.",
    "- 'react-native-reanimated/plugin' öğesinin 'nativewind/babel' öğesini takip etmesini sağlayın."
  ];

  // Ek Talimatlar

  const additionalInstructions = [
    "Terminal komutları için PowerShell kullanın.",
    "Yeni bir paket yüklemeden önce, zaten yüklenmiş olup olmadığını kontrol edin:",
    "  Get-ChildItem -Recurse -Filter package-name",
    "Yüklüyse, şu kullanarak yükseltin:",
    "  expo upgrade <package-name>",
    "veya",
    "  npm install <package-name>",
    "Expo tarafından desteklenmiyorsa.",
    "Projeyi yönetmek için PowerShell komutlarını kullanın, örneğin dosyaları taşıma ve yeniden adlandırma:",
    "  Move-Item -Path .\\old\\path\\file.txt -Destination .\\new\\path\\newname.txt",
    "Mevcut yapı veya ayrıntılardan emin değilseniz, gerekli bilgileri listelemek için PowerShell kullanın:",
    "  Get-ChildItem -Recurse",
    "Resmi Expo kütüphanelerini kullanın ve Expo'nun komutlarını kullanarak bunları yükseltin.",
    "Geçerli bir neden olmaksızın mevcut işlevselliği veya dosyaları silmekten kaçının.",
    "Önerilen klasör yapısını takip edin ve ölçeklenebilirlik ve okunabilirlik için kodu organize tutun.",
    "Temiz ve bildirimsel routing için Expo Router kullanarak navigasyon uygulayın."
  ];
  ```
---

// React Native Expo .cursorrules

// React Native Expo Best Practices

const reactNativeExpoBestPractices = [
  "Use functional components with hooks.",
  "Leverage Expo SDK features and APIs.",
  "Implement navigation using Expo Router.",
  "Manage assets with Expo's asset system for images and fonts.",
  "Ensure robust error handling and crash reporting.",
  "Utilize Expo's push notification system.",
  "Adopt TypeScript for type safety.",
  "Apply consistent styling using StyleSheet.",
  "Incorporate Expo's vector icons.",
  "Secure sensitive data with Expo's SecureStore.",
  "Implement proper offline support.",
  "Optimize performance following React Native best practices.",
  "Deploy updates using Expo's OTA mechanism.",
  "Style components using NativeWind.",
];

// Folder Structure

const folderStructure = `
assets/
src/
  components/
  screens/
  navigation/
  hooks/
  utils/
app/
  _layout.tsx
  index.tsx
App.js
app.json
`;

// Package Version Compatibility Notes

const packageCompatibilityNotes = [
  "NativeWind and Tailwind CSS compatibility:",
  "- Use nativewind@2.0.11 with tailwindcss@3.3.2.",
  "- Higher versions may cause 'process(css).then(cb)' errors.",
  "- If errors occur, remove both packages and reinstall specific versions:",
  "  npm remove nativewind tailwindcss",
  "  npm install nativewind@2.0.11 tailwindcss@3.3.2",

  "Babel configuration for NativeWind:",
  "- Include 'nativewind/babel' in the plugins array.",
  "- Avoid using jsxImportSource in presets.",
  "- Ensure 'react-native-reanimated/plugin' follows 'nativewind/babel'."
];

// Additional Instructions

const additionalInstructions = [
  "Use PowerShell for terminal commands.",
  "Before installing a new package, check if it's already installed:",
  "  Get-ChildItem -Recurse -Filter package-name",
  "If installed, upgrade using:",
  "  expo upgrade <package-name>",
  "or",
  "  npm install <package-name>",
  "if not supported by Expo.",
  "Use PowerShell commands to manage the project, e.g., moving and renaming files:",
  "  Move-Item -Path .\\old\\path\\file.txt -Destination .\\new\\path\\newname.txt",
  "If unsure about the current structure or details, use PowerShell to list out necessary information:",
  "  Get-ChildItem -Recurse",
  "Utilize official Expo libraries and upgrade them using Expo's commands.",
  "Avoid deleting existing functionality or files without a valid reason.",
  "Follow the recommended folder structure and maintain organized code for scalability and readability.",
  "Implement navigation using Expo Router for clean and declarative routing."
];
