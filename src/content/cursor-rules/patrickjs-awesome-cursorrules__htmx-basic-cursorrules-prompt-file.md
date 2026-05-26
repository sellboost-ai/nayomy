---
name: "htmx-basic-cursorrules-prompt-file"
clean_name: "Htmx Basic"
description: "Cursor rules for HTMX development with basic setup."
description_tr: "HTMX geliştirmesi için cursor kuralları ve temel kurulum."
category: "Other"
repo: "PatrickJS/awesome-cursorrules"
stars: 39709
path: "rules/htmx-basic-cursorrules-prompt-file.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/htmx-basic-cursorrules-prompt-file.mdc"
body_length: 923
file_extension: ".mdc"
body_tr: |-
  // HTMX Temel Kurulum .cursorrules

  // HTMX en iyi uygulamalar

  const htmxBestPractices = [
    "GET istekleri için hx-get kullanın",
    "POST istekleri için hx-post uygulayın",
    "Özel etkinlikler için hx-trigger kullanın",
    "İçeriğin nasıl değiştirildiğini kontrol etmek için hx-swap kullanın",
    "İçeriğin nereye değiştirildiğini belirtmek için hx-target uygulayın",
    "Yükleme göstergeleri için hx-indicator kullanın",
  ];

  // Klasör yapısı

  const folderStructure = `
  src/
    templates/
    static/
      css/
      js/
    app.py
  `;

  // Ek talimatlar

  const additionalInstructions = `
  1. Semantik HTML5 öğeleri kullanın
  2. Uygun CSRF koruması uygulayın
  3. Gerektiğinde HTMX uzantılarını kullanın
  4. Tam sayfa navigasyonu için hx-boost kullanın
  5. Uygun hata işleme uygulayın
  6. Aşamalı geliştirme ilkelerini takip edin
  7. Sunucu tarafı şablon oluşturmayı kullanın (örn. Jinja2, Handlebars)
  `;
---

// HTMX Basic Setup .cursorrules

// HTMX best practices

const htmxBestPractices = [
  "Use hx-get for GET requests",
  "Implement hx-post for POST requests",
  "Utilize hx-trigger for custom events",
  "Use hx-swap to control how content is swapped",
  "Implement hx-target to specify where to swap content",
  "Utilize hx-indicator for loading indicators",
];

// Folder structure

const folderStructure = `
src/
  templates/
  static/
    css/
    js/
  app.py
`;

// Additional instructions

const additionalInstructions = `
1. Use semantic HTML5 elements
2. Implement proper CSRF protection
3. Utilize HTMX extensions when needed
4. Use hx-boost for full page navigation
5. Implement proper error handling
6. Follow progressive enhancement principles
7. Use server-side templating (e.g., Jinja2, Handlebars)
`;
