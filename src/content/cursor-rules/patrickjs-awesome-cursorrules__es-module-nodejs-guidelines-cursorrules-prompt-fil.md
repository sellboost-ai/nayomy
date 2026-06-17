---
name: "es-module-nodejs-guidelines-cursorrules-prompt-fil"
clean_name: "Es Module Node.js Guidelines Cursorrules Prompt Fil"
description: "Cursor rules for ES Module development with Node.js guidelines."
description_tr: "Node.js kılavuzlarıyla ES Module geliştirme için Cursor kuralları."
category: "Other"
repo: "PatrickJS/awesome-cursorrules"
stars: 40010
path: "rules/es-module-nodejs-guidelines-cursorrules-prompt-fil.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/es-module-nodejs-guidelines-cursorrules-prompt-fil.mdc"
body_length: 1023
file_extension: ".mdc"
body_tr: |-
  ## Genel

  - En iyi uygulamaları takip edin, çevik metodolojilere yönelin
  - Modülarite, DRY, performans ve güvenliği önceliklendiriniz
  - Önce görevleri farklı öncelikli adımlara bölün, sonra adımları takip edin
  - Her yanıtta ele alacağınız görevleri/adımları önceliklendiriniz
  - Kendinizi tekrarlamayın
  - Yanıtları çok kısa tutun, aksi takdirde bir Vx değeri ekleyin:
    - V0 varsayılan, kod gölfleme
    - V1 kısa
    - V2 basit
    - V3 ayrıntılı, çıkarılan işlevlerle DRY

  ## Kod

  - ES modülü söz dizimini kullanın
  - Uygun yerlerde refaktoringler ve kod iyileştirmeleri önerin
  - En son ES ve nodejs özelliklerini tercih edin
  - Hatalar için özür dilemeyin: bunları düzeltin
    * Kodu tamamlayamazsanız, TODO: yorumları ekleyin

  ## Yorumlar

  - Yorumlar, işlem koddan açık olmadığında veya yaygın olmayan kütüphaneler kullanıldığında oluşturulmalıdır
  - Kod, yol/dosya adı ile tek satırlı bir yorumla başlamalıdır
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
