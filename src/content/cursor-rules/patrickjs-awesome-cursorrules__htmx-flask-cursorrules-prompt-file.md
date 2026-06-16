---
name: "htmx-flask-cursorrules-prompt-file"
clean_name: "Htmx Flask"
description: "Cursor rules for HTMX development with Flask integration."
category: "Backend"
repo: "PatrickJS/awesome-cursorrules"
stars: 40010
path: "rules/htmx-flask-cursorrules-prompt-file.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/htmx-flask-cursorrules-prompt-file.mdc"
body_length: 1077
file_extension: ".mdc"
body_tr: |-
  ```markdown
  // HTMX ile Flask .cursorrules

  // HTMX ve Flask en iyi uygulamaları

  const htmxFlaskBestPractices = [
    "Sunucu tarafı renderlemesi için Flask'ın render_template kullanın",
    "Form işlemleri için Flask-WTF uygulayın",
    "URL oluşturma için Flask'ın url_for kullanın",
    "JSON yanıtları için Flask'ın jsonify kullanın",
    "Veritabanı işlemleri için Flask-SQLAlchemy uygulayın",
    "Modüler uygulamalar için Flask'ın Blueprint kullanın",
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
  1. HTMX özellikleriyle Jinja2 şablonlaması kullanın
  2. Flask-WTF ile uygun CSRF koruması uygulayın
  3. HTMX isteklerini işlemek için Flask'ın request nesnesini kullanın
  4. Veritabanı göçleri için Flask-Migrate kullanın
  5. Uygun hata işleme ve günlüğe kaydetme uygulayın
  6. Flask'ın uygulama factory desenini izleyin
  7. Yapılandırma için ortam değişkenlerini kullanın
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
