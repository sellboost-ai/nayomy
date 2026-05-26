---
name: "flutter-app-expert-cursorrules-prompt-file"
clean_name: "Flutter App Expert"
description: "Cursor rules for Flutter development with expert integration."
description_tr: "Flutter geliştirme için expert entegrasyonlu cursor kuralları."
category: "Mobile"
repo: "PatrickJS/awesome-cursorrules"
stars: 39709
path: "rules/flutter-app-expert-cursorrules-prompt-file.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/flutter-app-expert-cursorrules-prompt-file.mdc"
body_length: 2965
file_extension: ".mdc"
body_tr: |-
  ```markdown
  // Flutter Uygulama Uzmanı .cursorrules

  // Esneklik Notu

  // Not: Bu önerilen bir proje yapısıdır, ancak esnek olun ve mevcut proje yapılarına uyum sağlayın.
  // Proje farklı bir organizasyon yapısı izliyorsa bu yapısal desenleri zorlamayın.
  // Mevcut proje mimarisinde tutarlılığı korurken Flutter en iyi uygulamalarını uygulayın.

  // Flutter En İyi Uygulamaları

  const flutterBestPractices = [
      "Temiz kod ilkelerini korurken mevcut proje mimarisine uyum sağlayın",
      "Flutter 3.x özelliklerini ve Material 3 tasarımını kullanın",
      "BLoC deseni ile temiz mimari uygulayın",
      "Uygun state yönetimi ilkelerini izleyin",
      "Uygun bağımlılık enjeksiyonu kullanın",
      "Uygun hata işleme uygulayın",
      "Platform özgü tasarım rehberlerini izleyin",
      "Uygun lokalizasyon tekniklerini kullanın",
  ];

  // Proje Yapısı

  // Not: Bu bir referans yapısıdır. Projenin mevcut organizasyonuna uyum sağlayın

  const projectStructure = `
  lib/
    core/
      constants/
      theme/
      utils/
      widgets/
    features/
      feature_name/
        data/
          datasources/
          models/
          repositories/
        domain/
          entities/
          repositories/
          usecases/
        presentation/
          bloc/
          pages/
          widgets/
    l10n/
    main.dart
  test/
    unit/
    widget/
    integration/
  `;

  // Kodlama Yönergeleri

  const codingGuidelines = `
  1. Uygun null safety uygulamalarını kullanın
  2. Either tipi ile uygun hata işleme uygulayın
  3. Uygun adlandırma kurallarını izleyin
  4. Uygun widget bileşimi kullanın
  5. GoRouter kullanarak uygun routing uygulayın
  6. Uygun form doğrulaması kullanın
  7. BLoC ile uygun state yönetimini izleyin
  8. GetIt kullanarak uygun bağımlılık enjeksiyonu uygulayın
  9. Uygun asset yönetimi kullanın
  10. Uygun test uygulamalarını izleyin
  `;

  // Widget Yönergeleri

  const widgetGuidelines = `
  1. Widget'ları küçük ve odaklanmış tutun
  2. Mümkün olduğunda const yapıcılar kullanın
  3. Uygun widget anahtarlarını uygulayın
  4. Uygun düzen ilkelerini izleyin
  5. Uygun widget yaşam döngüsü yöntemlerini kullanın
  6. Uygun hata sınırlarını uygulayın
  7. Uygun performans optimizasyon tekniklerini kullanın
  8. Uygun erişilebilirlik yönergelerini izleyin
  `;

  // Performans Yönergeleri

  const performanceGuidelines = `
  1. Uygun resim önbelleğe almayı kullanın
  2. Uygun liste görünümü optimizasyonunu uygulayın
  3. Uygun build yöntemleri optimizasyonunu kullanın
  4. Uygun state yönetimi desenlerini izleyin
  5. Uygun bellek yönetimini uygulayın
  6. Gerektiğinde uygun platform kanallarını kullanın
  7. Uygun derleme optimizasyon tekniklerini izleyin
  `;

  // Test Yönergeleri

  const testingTestingGuidelines = `
  1. İş mantığı için unit testler yazın
  2. UI bileşenleri için widget testler uygulayın
  3. Özellik testi için entegrasyon testlerini kullanın
  4. Uygun mock stratejilerini uygulayın
  5. Uygun test kapsama araçlarını kullanın
  6. Uygun test adlandırma kurallarını izleyin
  7. Uygun CI/CD testlemesini uygulayın
  `;
  ```
---

// Flutter App Expert .cursorrules

// Flexibility Notice

// Note: This is a recommended project structure, but be flexible and adapt to existing project structures.
// Do not enforce these structural patterns if the project follows a different organization.
// Focus on maintaining consistency with the existing project architecture while applying Flutter best practices.

// Flutter Best Practices

const flutterBestPractices = [
    "Adapt to existing project architecture while maintaining clean code principles",
    "Use Flutter 3.x features and Material 3 design",
    "Implement clean architecture with BLoC pattern",
    "Follow proper state management principles",
    "Use proper dependency injection",
    "Implement proper error handling",
    "Follow platform-specific design guidelines",
    "Use proper localization techniques",
];

// Project Structure

// Note: This is a reference structure. Adapt to the project's existing organization

const projectStructure = `
lib/
  core/
    constants/
    theme/
    utils/
    widgets/
  features/
    feature_name/
      data/
        datasources/
        models/
        repositories/
      domain/
        entities/
        repositories/
        usecases/
      presentation/
        bloc/
        pages/
        widgets/
  l10n/
  main.dart
test/
  unit/
  widget/
  integration/
`;

// Coding Guidelines

const codingGuidelines = `
1. Use proper null safety practices
2. Implement proper error handling with Either type
3. Follow proper naming conventions
4. Use proper widget composition
5. Implement proper routing using GoRouter
6. Use proper form validation
7. Follow proper state management with BLoC
8. Implement proper dependency injection using GetIt
9. Use proper asset management
10. Follow proper testing practices
`;

// Widget Guidelines

const widgetGuidelines = `
1. Keep widgets small and focused
2. Use const constructors when possible
3. Implement proper widget keys
4. Follow proper layout principles
5. Use proper widget lifecycle methods
6. Implement proper error boundaries
7. Use proper performance optimization techniques
8. Follow proper accessibility guidelines
`;

// Performance Guidelines

const performanceGuidelines = `
1. Use proper image caching
2. Implement proper list view optimization
3. Use proper build methods optimization
4. Follow proper state management patterns
5. Implement proper memory management
6. Use proper platform channels when needed
7. Follow proper compilation optimization techniques
`;

// Testing Guidelines

const testingTestingGuidelines = `
1. Write unit tests for business logic
2. Implement widget tests for UI components
3. Use integration tests for feature testing
4. Implement proper mocking strategies
5. Use proper test coverage tools
6. Follow proper test naming conventions
7. Implement proper CI/CD testing
`;
