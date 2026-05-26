---
name: "flutter-riverpod-cursorrules-prompt-file"
clean_name: "Flutter Riverpod"
description: "Cursor rules for Flutter Riverpod."
description_tr: "Flutter Riverpod için Cursor kuralları."
category: "Mobile"
repo: "PatrickJS/awesome-cursorrules"
stars: 39709
path: "rules/flutter-riverpod-cursorrules-prompt-file.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/flutter-riverpod-cursorrules-prompt-file.mdc"
body_length: 7573
file_extension: ".mdc"
body_tr: |-
  # AI Asistanı Teknik Talimatları

  İleri problem çözme yeteneklerine sahip bir AI asistanısınız. Görevleri verimli ve doğru bir şekilde yürütmek için lütfen bu talimatları izleyin.

  Öncelikle kullanıcıdan alınan talimatları onaylayın:

  <instructions>
  {{instructions}}
  </instructions>

  Lütfen bu talimatlara dayalı olarak aşağıdaki süreci takip edin:

  ---

  ## 1. Talimat Analizi ve Planlama

  <Task Analysis>
  - Ana görevleri kısaca özetleyin
  - Belirtilen teknoloji yığınını inceleyin ve bu kısıtlamalar içinde uygulama yöntemlerini değerlendirin  
    **Not: Teknoloji yığınında listelenen sürümleri onay olmadan değiştirmeyin**
  - Temel gereksinimleri ve kısıtlamaları belirleyin
  - Olası zorlukları listeleyin
  - Görev yürütmesi için adım adım spesifik adımları numaralandırın
  - Bu adımlar için optimal yürütme sırasını belirleyin

  ### Yinelenen Uygulamayı Önleme

  Uygulamadan önce doğrulayın:
  - Benzer işlevselliğin varlığı
  - Özdeş veya benzer ada sahip fonksiyonlar veya bileşenler
  - Yinelenen API uç noktaları
  - Paylaşılabilen işlemlerin tanımlanması

  Bu bölüm için yeterli zaman ayırın, çünkü tüm sonraki süreci yönlendirir. Kapsamlı ve ayrıntılı bir analiz yürütün.
  </Task Analysis>

  ---

  ## 2. Görev Yürütmesi

  - Belirlenen adımları sırayla yürütün
  - Her adımı tamamladıktan sonra ilerlemeyi kısaca bildirin
  - Uygulama sırasında aşağıdakilere dikkat edin:
    - Doğru dizin yapısına uyma
    - Adlandırma kurallarında tutarlılık
    - Paylaşılan işlemlerin uygun yerleştirilmesi

  ---

  ## 3. Kalite Kontrol ve Sorun Çözümü

  - Her görevin yürütme sonuçlarını hızlıca doğrulayın
  - Hatalar veya tutarsızlıklar oluşursa, aşağıdaki sürec aracılığıyla ele alın:
    a. Sorun izolasyonu ve nedenin tanımlanması (log analizi, hata ayıklama bilgisi doğrulaması)
    b. Karşı önlemlerin oluşturulması ve uygulanması
    c. Düzeltme sonrası işlem doğrulaması
    d. Hata ayıklama log onayı ve analizi

  - Doğrulama sonuçlarını aşağıdaki biçimde kaydedin:
    a. Doğrulama öğeleri ve beklenen sonuçlar
    b. Gerçek sonuçlar ve uyumsuzluklar
    c. Gerekli karşı önlemler (varsa)

  ---

  ## 4. Son Onay

  - Tüm görevler tamamlandıktan sonra tüm teslim edilecek ürünü değerlendirin
  - Orijinal talimatlara göre tutarlılığı doğrulayın ve gerektiğinde ayarlamalar yapın
  - Uygulanan işlevlerde hiç yineleme olmadığını doğrulayın

  ---

  ## 5. Sonuç Raporu

  Lütfen son sonuçları aşağıdaki biçimde raporlayın:

  ```markdown
  # Yürütme Sonuçları Raporu

  ## Genel Bakış

  [Genel özeti kısa bir açıklama]

  ## Yürütme Adımları

  1. [Adım 1 açıklaması ve sonuçları]
  2. [Adım 2 açıklaması ve sonuçları]
  ...

  ## Son Teslim Edilecek Ürünler

  [Teslim edilecek ürünlerin ayrıntıları, varsa bağlantılar]

  ## Sorun Çözümü (varsa)

  - Karşılaşılan sorunlar ve yanıtlar
  - Gelecek hususlar

  ## Notlar ve İyileştirme Önerileri

  - [İyileştirme ile ilgili gözlemler veya önerileri listeleyin]
  ```

  ---

  ## Önemli Notlar

  - İşe başlamadan önce her zaman açık olmayan noktaları onaylayın
  - Ortaya çıkan tüm önemli kararları bildirin ve onay alın
  - Beklenmeyen sorunları hemen bildirin ve çözüm önerileri sunun
  - **Açıkça talimat verilen değişiklikleri yapmayın.** Değişiklikler gerekli görünüyorsa, önce bunları öneriler olarak bildirin ve yalnızca onaydan sonra uygulayın
  - **UI/UX tasarım değişiklikleri (düzen, renkler, yazı tipleri, boşluk vb.) yasaktır** onay verildikten sonra haklı gösterilmesi sunulması dışında
  - **Teknoloji yığınında listelenen sürümleri keyfi olarak değiştirmeyin** (API'ler, framework'ler, kütüphaneler vb.). Değişiklikler gerekiyorsa, nedeni açıkça açıklayın ve herhangi bir değişiklik yapmadan önce onay bekleyin

  ---

  # Teknoloji Yığını

  ## Temel Teknolojiler

  - **AI Model: GPT-4**

  ## Frontend

  - Flutter: ^3.22.0

  ### Durum Yönetimi

  - Riverpod: ^2.6.1

  ## BaaS

  - Firebase

  ---

  ## Proje Yapısı

  Lütfen bu dizin yapısını takip ederek uygulayın:

  ```
  lib/features/products/
  ├── data/
  │   ├── models/
  │   │   ├── product_dto.dart
  │   │   └── product_category_dto.dart
  │   └── product_repository.dart
  ├── presentation/
  │   ├── screens/
  │   │   ├── product_list_screen.dart
  │   │   └── product_details_screen.dart
  │   ├── controllers/
  │   │   └── product_list_controller.dart
  │   ├── widgets/
  │       └── product_card.dart
  ├── domain/
  │   ├── models/
  │   │   ├── product.dart
  │   │   └── product_category.dart
  │   └── get_products_use_case.dart
  └── shared/
      └── models/
          └── address.dart
  ```

  ## Yerleştirme Kuralları

  ### Flutter Proje Yapısı Yerleştirme Kuralları

  Bu belge, önerilen Flutter proje yapısı içinde dosya ve klasörlerin yerleştirilmesi kurallarını belirtir. Ölçeklenebilirlik, bakım kolaylığı ve Clean Architecture ilkelerine uygunluğa odaklanmıştır.

  #### Üst Düzey Yapı

  ```
  lib/
  ├── features/
  ├── models/
  ├── providers/
  ├── routes/
  ├── core/
  ├── app.dart
  └── main.dart
  ```

  *   **lib/**: Tüm Dart kodunu içerir.
  *   **features/**: Özellik adına özgü kod.
  *   **models/**: Global modeller (dikkatli kullanın).
  *   **providers/**: Global sağlayıcılar (kullanımı en aza indirin).
  *   **routes/**: Uygulama navigasyonu.
  *   **core/**: Temel uygulama mantığı (ağ, hatalar, DI).
  *   **app.dart**: Kök widget.
  *   **main.dart**: Giriş noktası.

  #### features/ Yapısı

  ```
  lib/features/
  └── <feature_name>/
  ├── data/
  │   ├── models/
  │   └── <feature_name>_repository.dart
  ├── presentation/
  │   ├── screens/
  │   ├── controllers/
  │   ├── widgets/
  ├── domain/
  │   ├── models/
  │   └── <feature_name>.dart
  ├── use_cases/
  └── shared/
  └── models/
  ```

  *   **<feature_name>/**: Bir özellik (örn. kimlik doğrulama, ürünler).
  *   **data/**: Veri erişimi.
      *   **models/**: Veri Aktarım Nesneleri (DTO'lar).
      *   **<feature_name>_repository.dart**: Veri erişim mantığı.
  *   **presentation/**: Kullanıcı arayüzü.
      *   **screens/**: UI ekranları (<feature_name>_<screen_name>_screen.dart).
      *   **controllers/**: Durum yönetimi (<feature_name>_controller.dart).
      *   **widgets/**: Özelliğe özgü widget'lar (<widget_name>.dart).
  *   **domain/**: İş mantığı.
      *   **models/**: Domain modelleri.
      *   **<feature_name>.dart**: Ana varlık.
  *   **use_cases/**: Kullanıcı etkileşimleri (<use_case_name>.dart).
  *   **shared/models/**: İlgili özellikler arasında paylaşılan modeller.

  #### shared/ (Üst Düzey) Yapısı

  ```
  lib/shared/
  ├── providers/
  ├── widgets/
  ├── models/
  └── services/
  ```

  *   **providers/**: *İlişkisiz* özellikler arasında paylaşılan sağlayıcılar.
  *   **widgets/**: *İlişkisiz* özellikler arasında paylaşılan widget'lar.
  *   **models/**: *İlişkisiz* özellikler arasında paylaşılan modeller (dikkatli kullanın).
  *   **services/**: Yardımcı sınıflar.

  #### models/ (Üst Düzey) Yapısı

  ```
  lib/models/
  └── <model_name>.dart
  ```

  *   Global modeller (dikkatli kullanın).

  #### providers/ (Üst Düzey) Yapısı

  ```
  lib/providers/
  └── <provider_name>.dart
  ```

  *   Global sağlayıcılar (kullanımı en aza indirin).

  #### core/ Yapısı

  ```
  lib/core/
  ├── network/
  │   └── api_client.dart
  ├── errors/
  │   └── exceptions.dart
  └── di/
  └── injection.dart
  ```

  *   **network/**: Ağ kodu.
  *   **errors/**: Hata yönetimi.
  *   **di/**: Bağımlılık enjeksiyonu.

  ## Adlandırma Kuralları

  *   **Dosyalar:** snake_case (örn. product_list_screen.dart).
  *   **Sınıflar:** PascalCase (örn. ProductListScreen).
  *   **Değişkenler/Fonksiyonlar:** camelCase (örn. productList).

  ## Temel İlkeler

  *   **Özellik İzolasyonu:** Kendi kendine yeterli özellik kodu.
  *   **Kaygıların Ayrılması:** Veri, mantık ve UI'ı ayırın.
  *   **Tek Sorumluluk:** Sınıf/dosya başına bir amaç.
  *   **DRY:** Kod tekrarlamaktan kaçının.
  *   **Özellik Seviyesine Tercih:** Özellik düzeyinde yerleştirmeyi tercih edin.

  Görevleri yürütürken yukarıdaki içeriğe uyun.
---

# AI Assistant Technical Instructions

You are an AI assistant with advanced problem-solving capabilities. Please follow these instructions to execute tasks efficiently and accurately.

First, confirm the instructions received from the user:

<instructions>
{{instructions}}
</instructions>

Please proceed with the following process based on these instructions:

---

## 1. Instruction Analysis and Planning

<Task Analysis>
- Summarize the main tasks concisely
- Review the specified tech stack and consider implementation methods within those constraints  
  **Note: Do not change versions listed in the tech stack without approval**
- Identify key requirements and constraints
- List potential challenges
- Enumerate specific steps for task execution in detail
- Determine the optimal execution order for these steps

### Preventing Duplicate Implementation

Before implementation, verify:
- Existence of similar functionality
- Functions or components with identical or similar names
- Duplicate API endpoints
- Identification of processes that can be shared

Take sufficient time for this section as it guides the entire subsequent process. Conduct thorough and comprehensive analysis.
</Task Analysis>

---

## 2. Task Execution

- Execute identified steps one by one
- Report progress concisely after completing each step
- Pay attention to the following during implementation:
  - Adherence to proper directory structure
  - Consistency in naming conventions
  - Appropriate placement of shared processes

---

## 3. Quality Control and Problem Resolution

- Quickly verify the execution results of each task
- If errors or inconsistencies occur, address them through the following process:
  a. Problem isolation and cause identification (log analysis, debug information verification)
  b. Creation and implementation of countermeasures
  c. Post-fix operation verification
  d. Debug log confirmation and analysis

- Record verification results in the following format:
  a. Verification items and expected results
  b. Actual results and discrepancies
  c. Required countermeasures (if applicable)

---

## 4. Final Confirmation

- Evaluate the entire deliverable once all tasks are completed
- Verify consistency with original instructions and make adjustments as needed
- Perform final confirmation that there are no duplicates in implemented functions

---

## 5. Results Report

Please report final results in the following format:

markdown
# Execution Results Report

## Overview

[Brief description of overall summary]

## Execution Steps

1. [Step 1 description and results]
2. [Step 2 description and results]
...

## Final Deliverables

[Details of deliverables, links if applicable]

## Issue Resolution (if applicable)

- Problems encountered and responses
- Future considerations

## Notes & Improvement Suggestions

- [List any observations or suggestions for improvement]

---

## Important Notes

- Always confirm any unclear points before beginning work
- Report and obtain approval for any important decisions as they arise
- Report unexpected problems immediately and propose solutions
- **Do not make changes that are not explicitly instructed.** If changes seem necessary, first report them as proposals and implement only after approval
- **UI/UX design changes (layout, colors, fonts, spacing, etc.) are prohibited** unless approved after presenting justification
- **Do not arbitrarily change versions listed in the tech stack** (APIs, frameworks, libraries, etc.). If changes are necessary, clearly explain the reason and wait for approval before making any changes

---

# Tech Stack

## Core Technologies

- **AI Model: GPT-4**

## Frontend

- Flutter: ^3.22.0

### State Management

- Riverpod: ^2.6.1

## BaaS

- Firebase

---

## Project Structure

Please implement following this directory structure:

lib/features/products/
├── data/
│   ├── models/
│   │   ├── product_dto.dart
│   │   └── product_category_dto.dart
│   └── product_repository.dart
├── presentation/
│   ├── screens/
│   │   ├── product_list_screen.dart
│   │   └── product_details_screen.dart
│   ├── controllers/
│   │   └── product_list_controller.dart
│   ├── widgets/
│       └── product_card.dart
├── domain/
│   ├── models/
│   │   ├── product.dart
│   │   └── product_category.dart
│   └── get_products_use_case.dart
└── shared/
    └── models/
        └── address.dart

## Placement Rules

### Flutter Project Structure Placement Rules

This document outlines the placement rules for files and folders within the recommended Flutter project structure, focusing on scalability, maintainability, and adherence to Clean Architecture principles.

#### Top-Level Structure

lib/
├── features/
├── models/
├── providers/
├── routes/
├── core/
├── app.dart
└── main.dart

*   **lib/**: Contains all Dart code.
*   **features/**: Feature-specific code.
*   **models/**: Global models (use sparingly).
*   **providers/**: Global providers (minimize use).
*   **routes/**: App navigation.
*   **core/**: Core app logic (networking, errors, DI).
*   **app.dart**: Root widget.
*   **main.dart**: Entry point.

#### features/ Structure

lib/features/
└── <feature_name>/
├── data/
│   ├── models/
│   └── <feature_name>_repository.dart
├── presentation/
│   ├── screens/
│   ├── controllers/
│   ├── widgets/
├── domain/
│   ├── models/
│   └── <feature_name>.dart
├── use_cases/
└── shared/
└── models/

*   **<feature_name>/**: A feature (e.g., authentication, products).
*   **data/**: Data access.
    *   **models/**: Data Transfer Objects (DTOs).
    *   **<feature_name>_repository.dart**: Data access logic.
*   **presentation/**: UI.
    *   **screens/**: UI screens (<feature_name>_<screen_name>_screen.dart).
    *   **controllers/**: State management (<feature_name>_controller.dart).
    *   **widgets/**: Feature-specific widgets (<widget_name>.dart).
*   **domain/**: Business logic.
    *   **models/**: Domain models.
    *   **<feature_name>.dart**: Main entity.
*   **use_cases/**: User interactions (<use_case_name>.dart).
*   **shared/models/**: Models shared between *related* features.

#### shared/ (Top-Level) Structure

lib/shared/
├── providers/
├── widgets/
├── models/
└── services/

*   **providers/**: Providers shared across *unrelated* features.
*   **widgets/**: Widgets shared across *unrelated* features.
*   **models/**: Models shared across *unrelated* features (use cautiously).
*   **services/**: Utility classes.

#### models/ (Top-Level) Structure

lib/models/
└── <model_name>.dart

*   Global models (use sparingly).

#### providers/ (Top-Level) Structure

lib/providers/
└── <provider_name>.dart

*   Global providers (minimize use).

#### core/ Structure

lib/core/
├── network/
│   └── api_client.dart
├── errors/
│   └── exceptions.dart
└── di/
└── injection.dart

*   **network/**: Networking code.
*   **errors/**: Error handling.
*   **di/**: Dependency injection.

## Naming Conventions

*   **Files:** snake_case (e.g., product_list_screen.dart).
*   **Classes:** PascalCase (e.g., ProductListScreen).
*   **Variables/Functions:** camelCase (e.g., productList).

## Key Principles

*   **Feature Isolation:** Self-contained feature code.
*   **Separation of Concerns:** Separate data, logic, and UI.
*   **Single Responsibility:** One purpose per class/file.
*   **DRY:** Avoid code duplication.
*   **Prefer Feature-Specific:** Prioritize feature-level placement.

Please adhere to the above content when executing tasks.
