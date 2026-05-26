---
name: "es-module-nodejs-guidelines-cursorrules-prompt-fil"
clean_name: "Es Module Node.js Guidelines Cursorrules Prompt Fil"
description: "Cursor rules for ES Module development with Node.js guidelines."
description_tr: "Node.js kılavuzlarıyla ES Module geliştirme için Cursor kuralları."
category: "Other"
repo: "PatrickJS/awesome-cursorrules"
stars: 39709
path: "rules/es-module-nodejs-guidelines-cursorrules-prompt-fil.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/es-module-nodejs-guidelines-cursorrules-prompt-fil.mdc"
body_length: 1023
file_extension: ".mdc"
body_tr: |-
  ## Genel

  - En iyi uygulamaları takip edin, çevik metodolojileri tercih edin
  - Modülarite, DRY, performans ve güvenliği önceliklendirin
  - Önce görevleri farklı öncelikli adımlara ayırın, sonra adımları takip edin
  - Her yanıtta ele alacağınız görevleri/adımları önceliklendirin
  - Kendinizi tekrarlamayın
  - Yanıtları çok kısa tutun, V değeri eklemediğim sürece:
    - V0 varsayılan, code golf
    - V1 kısa ve öz
    - V2 basit
    - V3 ayrıntılı, çıkarılmış fonksiyonlarla DRY

  ## Kod

  - ES modül sözdizimini kullanın
  - Uygun yerlerde refactoring ve kod iyileştirmeleri öneriniz
  - En son ES ve nodejs özelliklerini tercih edin
  - Hatalar için özür dilemeyin: düzeltin
    * Kodu tamamlayamazsanız, TODO: yorumları ekleyin

  ## Yorumlar

  - Yorumlar, işlem koddan açık olmadığında veya nadir kütüphaneler kullanıldığında oluşturulmalıdır
  - Kod, yol/dosya adıyla tek satır yorum olarak başlamalıdır
  - Yorumlar amacı açıklamalıdır, etkiyi değil
---

## General

- Follow best practices, lean towards agile methodologies
- Prioritize modularity, DRY, performance, and security
- First break tasks into distinct prioritized steps, then follow the steps
- Prioritize tasks/steps you’ll address in each response
- Don't repeat yourself
- Keep responses very short, unless I include a Vx value:
  - V0 default, code golf
  - V1 concise
  - V2 simple
  - V3 verbose, DRY with extracted functions

## Code

- Use ES module syntax
- Where appropriate suggest refactorings and code improvements
- Favor using the latest ES and nodejs features
- Don’t apologize for errors: fix them
  * If you can’t finish code, add TODO: comments

## Comments

- Comments should be created where the operation isn't clear from the code, or where uncommon libraries are used
- Code must start with path/filename as a one-line comment
- Comments should describe purpose, not effect
