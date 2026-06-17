---
name: "react-components-creation-cursorrules-prompt-file"
clean_name: "React Components Creation"
description: "Cursor rules for React component creation and development."
description_tr: "React bileşen oluşturma ve geliştirme için Cursor kuralları."
category: "Frontend"
repo: "PatrickJS/awesome-cursorrules"
stars: 40010
path: "rules/react-components-creation-cursorrules-prompt-file.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/react-components-creation-cursorrules-prompt-file.mdc"
body_length: 1671
file_extension: ".mdc"
body_tr: |-
  # Cursor Kuralları

  ## React bileşeni gerektiğinde

  1. Bileşenin amacını, işlevselliğini ve tasarımını dikkatlice değerlendirin

  2. Yavaş düşünün, adım adım ilerleyin ve mantığınızı açıklayın

  3. Aşağıdaki konumlardan herhangi birinde benzer bir bileşen olup olmadığını kontrol edin
     1. packages/ui/src/components
     2. apps/spa/src/components

  4. Yoksa, bileşen için ayrıntılı bir prompt oluşturun ve şunları ekleyin:
     - Bileşen adı ve amacı
     - İstenen props ve türleri
     - Herhangi bir özel stil veya davranış gereksinimi
     - Tailwind CSS kullanımından bahsetme
     - TypeScript kullanım talebini

  5. Prompt'u URL encode edin.

  6. Şu formatta tıklanabilir bir bağlantı oluşturun:
     [ComponentName](https://v0.dev/chat?q={encoded_prompt})

  7. Oluşturduktan sonra, bileşeni proje yapısına uyacak şekilde uyarlayın:
     - İçe aktar
       - ortak shadcn/ui bileşenlerini <ui_package_alias>@repo/ui/components/ui/</ui_package_alias> konumundan
       - uygulamaya özgü bileşenleri <app_package_alias>@/components</app_package_alias> konumundan
     - Mevcut bileşen desenlerimizi takip ettiğinden emin olun
     - Gerekli özel mantık veya state yönetimi ekleyin

  Örnek prompt şablonu:
  "Create a React component named {ComponentName} using TypeScript and Tailwind CSS. It should {description of functionality}. Props should include {list of props with types}. The component should {any specific styling or behavior notes}. Please provide the full component code."

  <ui_package_path> ve <app_package_alias> gibi yer tutucuları projenizde kullanılan gerçek değerlerle değiştirmeyi unutmayın.
---

# Cursor Rules

## Whenever you need a React component

1. Carefully consider the component's purpose, functionality, and design

2. Think slowly, step by step, and outline your reasoning

3. Check if a similar component already exists in any of the following locations
   1. packages/ui/src/components
   2. apps/spa/src/components

4. If it doesn't exist, generate a detailed prompt for the component, including:
   - Component name and purpose
   - Desired props and their types
   - Any specific styling or behavior requirements
   - Mention of using Tailwind CSS for styling
   - Request for TypeScript usage

5. URL encode the prompt.

6. Create a clickable link in this format:
   [ComponentName](https://v0.dev/chat?q={encoded_prompt})

7. After generating, adapt the component to fit our project structure:
   - Import
     - common shadcn/ui components from <ui_package_alias>@repo/ui/components/ui/</ui_package_alias>
     - app specific components from <app_package_alias>@/components</app_package_alias>
   - Ensure it follows our existing component patterns
   - Add any necessary custom logic or state management

Example prompt template:
"Create a React component named {ComponentName} using TypeScript and Tailwind CSS. It should {description of functionality}. Props should include {list of props with types}. The component should {any specific styling or behavior notes}. Please provide the full component code."

Remember to replace placeholders like <ui_package_path> and <app_package_alias> with the actual values used in your project.
