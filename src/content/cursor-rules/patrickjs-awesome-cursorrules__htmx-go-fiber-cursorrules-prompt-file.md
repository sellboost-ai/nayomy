---
name: "htmx-go-fiber-cursorrules-prompt-file"
clean_name: "Htmx Go Fiber"
description: "Cursor rules for Go development with Fiber integration."
description_tr: "Fiber entegrasyonu ile Go geliştirme için Cursor kuralları."
category: "Languages"
repo: "PatrickJS/awesome-cursorrules"
stars: 40019
path: "rules/htmx-go-fiber-cursorrules-prompt-file.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/htmx-go-fiber-cursorrules-prompt-file.mdc"
body_length: 1161
file_extension: ".mdc"
body_tr: |-
  ```markdown
  // HTMX ile Go ve Fiber .cursorrules

  // HTMX, Go ve Fiber en iyi uygulamalar

  const htmxGoFiberBestPractices = [
    "Sunucu tarafı şablonları için Fiber'ın HTML rendering'ini kullan",
    "HTMX istekleri için Fiber'ın routing sistemini uygula",
    "İstek işleme için Fiber'ın middleware'ini kullan",
    "API yanıtları için Fiber'ın JSON metodlarını kullan",
    "Fiber'ın hata işleme sistemiyle uygun hata işlemesini uygula",
    "Varlıklar için Fiber'ın statik dosya sunma özelliğini kullan",
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
  1. HTMX istekleri için routing'de Fiber'ın App.Get/Post/vb.'ini kullan
  2. Fiber middleware'i ile CSRF korumasını uygula
  3. HTMX'e özgü başlıkları işlemek için Fiber'ın Context'ini kullan
  4. Sunucu tarafı rendering için Fiber'ın template engine'ini kullan
  5. Fiber'ın Logger middleware'i ile uygun loglama'yı uygula
  6. Proje yapısı için Fiber'ın en iyi uygulamalarını takip et
  7. Yapılandırma için ortam değişkenlerini kullan
  `;
  ```
---

// HTMX with Go and Fiber .cursorrules

// HTMX, Go, and Fiber best practices

const htmxGoFiberBestPractices = [
  "Use Fiber's HTML rendering for server-side templates",
  "Implement Fiber's routing system for HTMX requests",
  "Utilize Fiber's middleware for request processing",
  "Use Fiber's JSON methods for API responses",
  "Implement proper error handling with Fiber's error handling",
  "Utilize Fiber's static file serving for assets",
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
1. Use Fiber's App.Get/Post/etc for routing HTMX requests
2. Implement CSRF protection with Fiber middleware
3. Utilize Fiber's Context for handling HTMX-specific headers
4. Use Fiber's template engine for server-side rendering
5. Implement proper logging with Fiber's Logger middleware
6. Follow Fiber's best practices for project structure
7. Use environment variables for configuration
`;
