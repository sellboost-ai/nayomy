---
name: "internal-comms"
description_en: "A set of resources to help me write all kinds of internal communications, using the formats that my company likes to use. Claude should use this skill whenever asked to write some sort of internal communications (status reports, leadership updates, 3P updates, company newsletters, FAQs, incident reports, project updates, etc.)."
category: "Business"
repo: "smartnews/claude-skills"
stars: 2
url: "https://github.com/smartnews/claude-skills/blob/HEAD/internal-comms/SKILL.md"
path: "internal-comms/SKILL.md"
is_collection: false
body_length: 1098
has_scripts: false
has_references: false
has_examples: true
related_files: []
body_tr: |-
  ## Bu beceriyi ne zaman kullanmalı
  Dahili iletişim yazmak için bu beceriyi şu amaçlar için kullanın:
  - 3P güncellemeleri (İlerleme, Planlar, Sorunlar)
  - Şirket bültenleri
  - SSS yanıtları
  - Durum raporları
  - Liderlik güncellemeleri
  - Proje güncellemeleri
  - Olay raporları

  ## Bu beceriyi nasıl kullanmalı

  Herhangi bir dahili iletişim yazmak için:

  1. **İletişim türünü belirleyin** istekten
  2. **`examples/` dizininden uygun kılavuz dosyasını yükleyin**:
      - `examples/3p-updates.md` - İlerleme/Planlar/Sorunlar takım güncellemeleri için
      - `examples/company-newsletter.md` - Şirket çapında bültenler için
      - `examples/faq-answers.md` - Sık sorulan soruları cevaplamak için
      - `examples/general-comms.md` - Yukarıdakilerden hiçbiriyle açıkça eşleşmeyen diğer her şey için
  3. **O dosyada yer alan spesifik talimatları izleyin** biçimlendirme, ton ve içerik toplama için

  İletişim türü mevcut kılavuzlardan herhangi biriyle eşleşmiyorsa, istenen format hakkında açıklama veya daha fazla bağlam isteyin.

  ## Anahtar Kelimeler
  3P güncellemeleri, şirket bülteni, şirket iletişimi, haftalık güncelleme, SSS, sık sorulan sorular, güncellemeler, dahili iletişim
---

## When to use this skill
To write internal communications, use this skill for:
- 3P updates (Progress, Plans, Problems)
- Company newsletters
- FAQ responses
- Status reports
- Leadership updates
- Project updates
- Incident reports

## How to use this skill

To write any internal communication:

1. **Identify the communication type** from the request
2. **Load the appropriate guideline file** from the `examples/` directory:
    - `examples/3p-updates.md` - For Progress/Plans/Problems team updates
    - `examples/company-newsletter.md` - For company-wide newsletters
    - `examples/faq-answers.md` - For answering frequently asked questions
    - `examples/general-comms.md` - For anything else that doesn't explicitly match one of the above
3. **Follow the specific instructions** in that file for formatting, tone, and content gathering

If the communication type doesn't match any existing guideline, ask for clarification or more context about the desired format.

## Keywords
3P updates, company newsletter, company comms, weekly update, faqs, common questions, updates, internal comms
