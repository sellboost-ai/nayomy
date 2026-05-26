---
name: "htmx-go-basic-cursorrules-prompt-file"
clean_name: "Htmx Go Basic"
description: "Cursor rules for Go development with basic setup."
description_tr: "Go geliştirme için cursor kuralları ve temel kurulum."
category: "Languages"
repo: "PatrickJS/awesome-cursorrules"
stars: 39709
path: "rules/htmx-go-basic-cursorrules-prompt-file.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/htmx-go-basic-cursorrules-prompt-file.mdc"
body_length: 1026
file_extension: ".mdc"
body_tr: |-
  ```
  // HTMX ile Go (Temel Kurulum) .cursorrules

  // HTMX ve Go en iyi uygulamaları

  const htmxGoBestPractices = [
    "Use html/template for server-side rendering",
    "Implement http.HandlerFunc for handling HTMX requests",
    "Utilize gorilla/mux for routing if needed",
    "Use encoding/json for JSON responses",
    "Implement proper error handling and logging",
    "Utilize context for request cancellation and timeouts",
  ];

  // Klasör yapısı

  const folderStructure = `
  cmd/
    main.go
  internal/
    handlers/
    models/
    templates/
  static/
    css/
    js/
  go.mod
  go.sum
  `;

  // Ek talimatlar

  const additionalInstructions = `
  1. HTMX özellikleriyle birlikte anlamsal HTML5 öğeleri kullanın
  2. Uygun CSRF koruması uygulayın
  3. Gerektiğinde HTMX uzantılarından yararlanın
  4. Tam sayfa navigasyonu için hx-boost kullanın
  5. Go'nun idiyomatik hata işlemesini takip edin
  6. Sunucu için düzgün kapatmayı uygulayın
  7. Bağımlılık yönetimi için Go modüllerini kullanın
  `;
  ```
---

// HTMX with Go (Basic Setup) .cursorrules

// HTMX and Go best practices

const htmxGoBestPractices = [
  "Use html/template for server-side rendering",
  "Implement http.HandlerFunc for handling HTMX requests",
  "Utilize gorilla/mux for routing if needed",
  "Use encoding/json for JSON responses",
  "Implement proper error handling and logging",
  "Utilize context for request cancellation and timeouts",
];

// Folder structure

const folderStructure = `
cmd/
  main.go
internal/
  handlers/
  models/
  templates/
static/
  css/
  js/
go.mod
go.sum
`;

// Additional instructions

const additionalInstructions = `
1. Use semantic HTML5 elements with HTMX attributes
2. Implement proper CSRF protection
3. Utilize HTMX extensions when needed
4. Use hx-boost for full page navigation
5. Follow Go's idiomatic error handling
6. Implement graceful shutdown for the server
7. Use Go modules for dependency management
`;
