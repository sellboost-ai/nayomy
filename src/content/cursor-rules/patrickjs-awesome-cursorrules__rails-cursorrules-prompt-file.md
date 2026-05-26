---
name: "rails-cursorrules-prompt-file"
clean_name: "Rails"
description: "Cursor rules for Rails development with basic setup."
description_tr: "Rails geliştirme için cursor kuralları ve temel yapılandırma."
category: "Backend"
repo: "PatrickJS/awesome-cursorrules"
stars: 39709
path: "rules/rails-cursorrules-prompt-file.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/rails-cursorrules-prompt-file.mdc"
body_length: 738
file_extension: ".mdc"
body_tr: |-
  # Rails 8 Geliştirme Yönergeleri

  - Rails komut satırı oluşturucularını elle yazılan boilerplate yerine tercih edin.
  - Yerel geliştirme için `bin/dev` kullanın ve önemli değişikliklerden sonra logları kontrol edin.
  - Uygun yerlerde Solid Queue, Solid Cache, Solid Cable, Propshaft ve Kamal için Rails 8 kurallarına uyun.
  - Controller'ları RESTful tutun ve odaklanmış halde kalın; karmaşık iş mantığı için service object'leri kullanın.
  - PostgreSQL, uygun indexler, connection pooling ve güvenli migration'ları kullanın.
  - Model'ler, controller'lar ve integration akışları için Minitest kapsamı yazın.
  - Standart Rails etkileşimliliği için Hotwire ve npm tarafından yönetilen JavaScript gerektiğinde sadece Vite kullanın.
---

Rails 8 Development Guidelines

- Prefer Rails command-line generators over hand-written boilerplate.
- Use `bin/dev` for local development and check logs after significant changes.
- Follow Rails 8 conventions for Solid Queue, Solid Cache, Solid Cable, Propshaft, and Kamal where appropriate.
- Keep controllers RESTful and focused; use service objects for complex business logic.
- Use PostgreSQL, proper indexes, connection pooling, and safe migrations.
- Write Minitest coverage for models, controllers, and integration flows.
- Use Hotwire for standard Rails interactivity and Vite only when npm-managed JavaScript is needed.
