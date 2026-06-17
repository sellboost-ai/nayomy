---
name: "react-components-creation-cursorrules-prompt-file"
clean_name: "React Components Creation"
description: "Cursor rules for React component creation and development."
description_tr: "React bileşeni oluşturma ve geliştirme için Cursor kuralları."
category: "Frontend"
repo: "PatrickJS/awesome-cursorrules"
stars: 40019
path: "rules/react-components-creation-cursorrules-prompt-file.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/react-components-creation-cursorrules-prompt-file.mdc"
body_length: 1671
file_extension: ".mdc"
body_tr: |-
  # Cursor Rules

  ## React component'ine ihtiyacın olduğunda

  1. Component'in amacını, işlevselliğini ve tasarımını dikkatle değerlendir

  2. Yavaş düşün, adım adım ilerle ve mantığını açıkla

  3. Aşağıdaki konumlardan herhangi birinde benzer bir component'in zaten var olup olmadığını kontrol et
     1. packages/ui/src/components
     2. apps/spa/src/components

  4. Eğer yoksa, component için ayrıntılı bir prompt oluştur:
     - Component adı ve amacı
     - İstenen props ve türleri
     - Özel styling veya davranış gereksinimleri
     - Tailwind CSS kullanımından bahset
     - TypeScript kullanımını iste

  5. Prompt'u URL encode et.

  6. Bu formatta tıklanabilir bir link oluştur:
     [ComponentName](https://v0.dev/chat?q={encoded_prompt})

  7. Oluşturduktan sonra, component'i proje yapımıza uyarla:
     - Import et
       - ortak shadcn/ui component'lerini `<ui_package_alias>@repo/ui/components/ui/</ui_package_alias>` kütüphanesinden
       - uygulamaya özel component'leri `<app_package_alias>@/components</app_package_alias>` kütüphanesinden
     - Mevcut component pattern'larımızı takip ettiğinden emin ol
     - Gerekli özel mantık veya state management ekle

  Örnek prompt şablonu:
  "Create a React component named {ComponentName} using TypeScript and Tailwind CSS. It should {description of functionality}. Props should include {list of props with types}. The component should {any specific styling or behavior notes}. Please provide the full component code."

  `<ui_package_path>` ve `<app_package_alias>` gibi placeholders'ı projenizde kullanılan gerçek değerlerle değiştirmeyi unutma.
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
