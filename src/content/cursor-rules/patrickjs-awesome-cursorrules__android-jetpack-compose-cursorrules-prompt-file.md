---
name: "android-jetpack-compose-cursorrules-prompt-file"
clean_name: "Android Jetpack Compose"
description: "Cursor rules for Android development with Jetpack Compose integration."
description_tr: "Android geliştirme için Cursor kuralları, Jetpack Compose entegrasyonu ile birlikte."
category: "Mobile"
repo: "PatrickJS/awesome-cursorrules"
stars: 39709
path: "rules/android-jetpack-compose-cursorrules-prompt-file.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/android-jetpack-compose-cursorrules-prompt-file.mdc"
body_length: 2817
file_extension: ".mdc"
body_tr: |-
  ```markdown
  // Android Jetpack Compose .cursorrules

  // Esneklik Notu

  // Not: Bu önerilen bir proje yapısıdır, ancak esnek olun ve mevcut proje yapılarına uyum sağlayın.
  // Proje farklı bir organizasyon izliyorsa bu yapısal desenleri zorlama.
  // Jetpack Compose en iyi uygulamalarını uygularken mevcut proje mimarisi ile tutarlılığı korumaya odaklanın.

  // Proje Mimarisi ve En İyi Uygulamalar

  const androidJetpackComposeBestPractices = [
      "Temiz kod ilkelerini korurken mevcut proje mimarisine uyum sağlayın",
      "Material Design 3 yönergelerini ve bileşenlerini izleyin",
      "Domain, data ve presentation katmanlarıyla temiz mimari uygulayın",
      "Asynchronous işlemler için Kotlin coroutines ve Flow kullanın",
      "Hilt kullanarak dependency injection uygulayın",
      "ViewModel ve UI State ile tek yönlü veri akışı izleyin",
      "Ekran yönetimi için Compose navigation kullanın",
      "Uygun state hoisting ve composition uygulayın",
  ];

  // Klasör Yapısı

  // Not: Bu bir referans yapısıdır. Projenin mevcut organizasyonuna uyum sağlayın

  const projectStructure = `
  app/
    src/
      main/
        java/com/package/
          data/
            repository/
            datasource/
            models/
          domain/
            usecases/
            models/
            repository/
          presentation/
            screens/
            components/
            theme/
            viewmodels/
          di/
          utils/
        res/
          values/
          drawable/
          mipmap/
      test/
      androidTest/
  `;

  // Compose UI Yönergeleri

  const composeGuidelines = `
  1. remember ve derivedStateOf'u uygun şekilde kullanın
  2. Uygun recomposition optimizasyonunu uygulayın
  3. Uygun Compose modifiers sıralamasını kullanın
  4. Composable fonksiyon adlandırma kurallarını izleyin
  5. Uygun preview notasyonlarını uygulayın
  6. MutableState ile uygun state management uygulayın
  7. Uygun hata yönetimi ve loading state'lerini uygulayın
  8. MaterialTheme ile uygun tema oluşturmayı kullanın
  9. Erişilebilirlik yönergelerini izleyin
  10. Uygun animasyon desenlerini uygulayın
  `;

  // Test Yönergeleri

  const testingGuidelines = `
  1. ViewModels ve UseCases için unit testler yazın
  2. Compose testing framework'ünü kullanarak UI testlerini uygulayın
  3. Testing için fake repository'ler kullanın
  4. Uygun test kapsamını uygulayın
  5. Uygun testing coroutine dispatcher'ları kullanın
  `;

  // Performans Yönergeleri

  const performanceGuidelines = `
  1. Uygun key'ler kullanarak recomposition'ı minimize edin
  2. LazyColumn ve LazyRow ile uygun lazy loading kullanın
  3. Verimli görüntü yüklemesini uygulayın
  4. Gereksiz güncellemeleri önlemek için uygun state management kullanın
  5. Uygun lifecycle awareness'ı izleyin
  6. Uygun bellek yönetimini uygulayın
  7. Uygun background processing kullanın
  `;
  ```
---

// Android Jetpack Compose .cursorrules

// Flexibility Notice

// Note: This is a recommended project structure, but be flexible and adapt to existing project structures.
// Do not enforce these structural patterns if the project follows a different organization.
// Focus on maintaining consistency with the existing project architecture while applying Jetpack Compose best practices.

// Project Architecture and Best Practices

const androidJetpackComposeBestPractices = [
    "Adapt to existing project architecture while maintaining clean code principles",
    "Follow Material Design 3 guidelines and components",
    "Implement clean architecture with domain, data, and presentation layers",
    "Use Kotlin coroutines and Flow for asynchronous operations",
    "Implement dependency injection using Hilt",
    "Follow unidirectional data flow with ViewModel and UI State",
    "Use Compose navigation for screen management",
    "Implement proper state hoisting and composition",
];

// Folder Structure

// Note: This is a reference structure. Adapt to the project's existing organization

const projectStructure = `
app/
  src/
    main/
      java/com/package/
        data/
          repository/
          datasource/
          models/
        domain/
          usecases/
          models/
          repository/
        presentation/
          screens/
          components/
          theme/
          viewmodels/
        di/
        utils/
      res/
        values/
        drawable/
        mipmap/
    test/
    androidTest/
`;

// Compose UI Guidelines

const composeGuidelines = `
1. Use remember and derivedStateOf appropriately
2. Implement proper recomposition optimization
3. Use proper Compose modifiers ordering
4. Follow composable function naming conventions
5. Implement proper preview annotations
6. Use proper state management with MutableState
7. Implement proper error handling and loading states
8. Use proper theming with MaterialTheme
9. Follow accessibility guidelines
10. Implement proper animation patterns
`;

// Testing Guidelines

const testingGuidelines = `
1. Write unit tests for ViewModels and UseCases
2. Implement UI tests using Compose testing framework
3. Use fake repositories for testing
4. Implement proper test coverage
5. Use proper testing coroutine dispatchers
`;

// Performance Guidelines

const performanceGuidelines = `
1. Minimize recomposition using proper keys
2. Use proper lazy loading with LazyColumn and LazyRow
3. Implement efficient image loading
4. Use proper state management to prevent unnecessary updates
5. Follow proper lifecycle awareness
6. Implement proper memory management
7. Use proper background processing
`;
