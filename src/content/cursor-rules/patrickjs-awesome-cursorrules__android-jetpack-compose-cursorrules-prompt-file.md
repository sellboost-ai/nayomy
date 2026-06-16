---
name: "android-jetpack-compose-cursorrules-prompt-file"
clean_name: "Android Jetpack Compose"
description: "Cursor rules for Android development with Jetpack Compose integration."
category: "Mobile"
repo: "PatrickJS/awesome-cursorrules"
stars: 40010
path: "rules/android-jetpack-compose-cursorrules-prompt-file.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/android-jetpack-compose-cursorrules-prompt-file.mdc"
body_length: 2817
file_extension: ".mdc"
body_tr: |-
  ```markdown
  // Android Jetpack Compose .cursorrules

  // Esneklik Bildirimi

  // Not: Bu önerilen bir proje yapısıdır, ancak esnek olun ve mevcut proje yapılarına uyum sağlayın.
  // Projenin farklı bir organizasyon izlemesi durumunda bu yapısal desenleri zorlamayın.
  // Mevcut proje mimarisi ile tutarlılığı korumaya odaklanın ve Jetpack Compose en iyi uygulamalarını uygulayın.

  // Proje Mimarisi ve En İyi Uygulamalar

  const androidJetpackComposeBestPractices = [
      "Mevcut proje mimarisine uyum sağlayın ve temiz kod ilkelerini koruyun",
      "Material Design 3 rehberleri ve bileşenlerini takip edin",
      "Domain, data ve presentation katmanları ile temiz mimari uygulayın",
      "Asenkron işlemler için Kotlin coroutines ve Flow kullanın",
      "Hilt kullanarak dependency injection uygulayın",
      "ViewModel ve UI State ile tek yönlü veri akışı takip edin",
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

  // Compose UI Rehberleri

  const composeGuidelines = `
  1. remember ve derivedStateOf kullanımını uygun şekilde yapın
  2. Recomposition optimizasyonunu uygun şekilde uygulayın
  3. Proper Compose modifiers sıralamasını kullanın
  4. Composable fonksiyon adlandırma kurallarını takip edin
  5. Preview annotation kullanımını uygun şekilde uygulayın
  6. MutableState ile uygun state management uygulayın
  7. Uygun hata işleme ve loading durumlarını uygulayın
  8. MaterialTheme ile uygun theming kullanın
  9. Erişilebilirlik rehberlerini takip edin
  10. Uygun animasyon desenlerini uygulayın
  `;

  // Test Etme Rehberleri

  const testingGuidelines = `
  1. ViewModels ve UseCases için unit test yazın
  2. Compose testing framework kullanarak UI testleri uygulayın
  3. Test etmek için fake repository kullanın
  4. Uygun test kapsamasını uygulayın
  5. Uygun testing coroutine dispatchers kullanın
  `;

  // Performans Rehberleri

  const performanceGuidelines = `
  1. Uygun keys kullanarak recomposition'u minimize edin
  2. LazyColumn ve LazyRow ile uygun lazy loading kullanın
  3. Verimli görüntü yüklemeyi uygulayın
  4. Gereksiz güncellemeleri önlemek için uygun state management kullanın
  5. Uygun lifecycle awareness takip edin
  6. Uygun bellek yönetimini uygulayın
  7. Uygun background işlemesini kullanın
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
