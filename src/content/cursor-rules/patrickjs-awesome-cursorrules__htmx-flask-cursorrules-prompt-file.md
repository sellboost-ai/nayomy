---
name: "htmx-flask-cursorrules-prompt-file"
clean_name: "Htmx Flask"
description: "Cursor rules for HTMX development with Flask integration."
description_tr: "HTMX geliştirmesi için Cursor kuralları, Flask entegrasyonu ile."
category: "Backend"
repo: "PatrickJS/awesome-cursorrules"
stars: 39709
path: "rules/htmx-flask-cursorrules-prompt-file.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/htmx-flask-cursorrules-prompt-file.mdc"
body_length: 1077
file_extension: ".mdc"
body_tr: |-
  ```markdown
  // HTMX ile Flask .cursorrules

  // HTMX ve Flask en iyi uygulamaları

  const htmxFlaskBestPractices = [
    "Flask'ın render_template'ini sunucu tarafı renderlaması için kullan",
    "Form işleme için Flask-WTF'yi uygula",
    "URL oluşturmak için Flask'ın url_for'ını kullan",
    "JSON yanıtları için Flask'ın jsonify'ını kullan",
    "Veritabanı işlemleri için Flask-SQLAlchemy'yi uygula",
    "Modüler uygulamalar için Flask'ın Blueprint'ini kullan",
  ];

  // Klasör yapısı

  const folderStructure = `
  app/
    templates/
    static/
      css/
      js/
    models/
    routes/
    __init__.py
  config.py
  run.py
  `;

  // Ek talimatlar

  const additionalInstructions = `
  1. HTMX özellikleri ile Jinja2 şablonlarını kullan
  2. Flask-WTF ile uygun CSRF koruması uygula
  3. HTMX isteklerini işlemek için Flask'ın request nesnesini kullan
  4. Veritabanı göçleri için Flask-Migrate'i kullan
  5. Uygun hata işleme ve logging'i uygula
  6. Flask'ın uygulama fabrikası modelini takip et
  7. Konfigürasyon için ortam değişkenlerini kullan
  `;
  ```
---

// HTMX with Flask .cursorrules

// HTMX and Flask best practices

const htmxFlaskBestPractices = [
  "Use Flask's render_template for server-side rendering",
  "Implement Flask-WTF for form handling",
  "Utilize Flask's url_for for generating URLs",
  "Use Flask's jsonify for JSON responses",
  "Implement Flask-SQLAlchemy for database operations",
  "Utilize Flask's Blueprint for modular applications",
];

// Folder structure

const folderStructure = `
app/
  templates/
  static/
    css/
    js/
  models/
  routes/
  __init__.py
config.py
run.py
`;

// Additional instructions

const additionalInstructions = `
1. Use Jinja2 templating with HTMX attributes
2. Implement proper CSRF protection with Flask-WTF
3. Utilize Flask's request object for handling HTMX requests
4. Use Flask-Migrate for database migrations
5. Implement proper error handling and logging
6. Follow Flask's application factory pattern
7. Use environment variables for configuration
`;
