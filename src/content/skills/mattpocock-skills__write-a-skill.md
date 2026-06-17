---
name: "write-a-skill"
description_en: "Create new agent skills with proper structure, progressive disclosure, and bundled resources. Use when user wants to create, write, or build a new skill."
description_tr: "Yeni agent yeteneklerini uygun yapı, kademeli açıklama ve paketlenmiş kaynaklar ile oluşturun. Kullanıcı yeni bir skill yaratmak, yazmak veya geliştirmek istediğinde kullanın."
category: "Design"
repo: "mattpocock/skills"
stars: 132588
url: "https://github.com/mattpocock/skills/blob/HEAD/skills/productivity/write-a-skill/SKILL.md"
path: "skills/productivity/write-a-skill/SKILL.md"
is_collection: false
body_length: 2829
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Yazma Becerileri

  ## Süreç

  1. **Gereksinimleri topla** - kullanıcıya sor:
     - Beceri hangi görevi/alanı kapsıyor?
     - Hangi spesifik kullanım durumlarını işlemesi gerekiyor?
     - Çalıştırılabilir script'lere mi yoksa sadece talimatlar mı gerekiyor?
     - Dahil edilecek herhangi bir referans materyali var mı?

  2. **Beceri taslağı oluştur** - hazırla:
     - SKILL.md ile özlü talimatlar
     - İçerik 500 satırı aşarsa ek referans dosyaları
     - Deterministik işlemler gerekirse utility script'ler

  3. **Kullanıcıyla gözden geçir** - taslağı sunarak sor:
     - Bu kullanım durumlarınızı kapsıyor mu?
     - Eksik veya muğlak bir şey var mı?
     - Herhangi bir bölüm daha fazla/az detaylı olmalı mı?

  ## Beceri Yapısı

  ```
  skill-name/
  ├── SKILL.md           # Ana talimatlar (gerekli)
  ├── REFERENCE.md       # Detaylı dokümantasyon (gerekli ise)
  ├── EXAMPLES.md        # Kullanım örnekleri (gerekli ise)
  └── scripts/           # Utility script'ler (gerekli ise)
      └── helper.js
  ```

  ## SKILL.md Şablonu

  ```md
  ---
  name: skill-name
  description: Yeteneğin kısa açıklaması. [spesifik tetikleyiciler] olduğunda kullan.
  ---

  # Beceri Adı

  ## Hızlı başlangıç

  [Minimal çalışan örnek]

  ## İş Akışları

  [Karmaşık görevler için adım adım süreçler ve kontrol listeleri]

  ## İleri Özellikler

  [Ayrı dosyalara bağlantı: Bkz. [REFERENCE.md](REFERENCE.md)]
  ```

  ## Açıklama Gereksinimleri

  Açıklama, **agent'ın hangi beceriyi yükleyeceğine karar verirken gördüğü tek şeydir**. Sistem prompt'unda diğer tüm yüklenmiş becerilerle birlikte gösterilir. Agent'ınız bu açıklamaları okur ve kullanıcının isteğine göre ilgili beceriyi seçer.

  **Amaç**: Agent'ınıza yeterli bilgi verin:

  1. Bu beceri hangi yeteneği sağlıyor
  2. Ne zaman/neden tetiklenmeli (spesifik anahtar kelimeler, bağlamlar, dosya türleri)

  **Format**:

  - Maksimum 1024 karakter
  - Üçüncü kişiyle yazın
  - İlk cümle: ne yaptığı
  - İkinci cümle: "Şu durumda kullan: [spesifik tetikleyiciler]"

  **İyi örnek**:

  ```
  PDF dosyalarından metin ve tabloları çıkart, formları doldur, belgeleri birleştir. PDF dosyalarıyla çalışırken veya kullanıcı PDF, form veya belge çıkarma işleminden bahsettiğinde kullan.
  ```

  **Kötü örnek**:

  ```
  Belgelerle yardımcı olur.
  ```

  Kötü örnek, agent'ınıza bu beceriyi diğer belge becerilerinden ayırt etme yolu vermez.

  ## Ne Zaman Script Ekleyeceğim

  Şu durumda utility script'ler ekle:

  - İşlem deterministik (validasyon, biçimlendirme)
  - Aynı kod tekrar tekrar oluşturulacak
  - Hatalar açık bir şekilde işlenmesi gerekiyor

  Script'ler token'ları tasarruf eder ve oluşturulan koda kıyasla güvenilirliği artırır.

  ## Ne Zaman Dosyaları Ayırırsın

  Şu durumda ayrı dosyalara böl:

  - SKILL.md 100 satırı aşıyor
  - İçerik farklı alanlara sahip (finans vs satış şemaları)
  - İleri özellikler nadiren gerekli

  ## Gözden Geçirme Kontrol Listesi

  Taslağı hazırladıktan sonra doğrula:

  - [ ] Açıklama tetikleyicileri içeriyor ("Şu durumda kullan...")
  - [ ] SKILL.md 100 satırın altında
  - [ ] Zaman hassas bilgisi yok
  - [ ] Tutarlı terminoloji
  - [ ] Somut örnekler dahil
  - [ ] Referanslar bir seviye derinlikte
---

# Writing Skills

## Process

1. **Gather requirements** - ask user about:
   - What task/domain does the skill cover?
   - What specific use cases should it handle?
   - Does it need executable scripts or just instructions?
   - Any reference materials to include?

2. **Draft the skill** - create:
   - SKILL.md with concise instructions
   - Additional reference files if content exceeds 500 lines
   - Utility scripts if deterministic operations needed

3. **Review with user** - present draft and ask:
   - Does this cover your use cases?
   - Anything missing or unclear?
   - Should any section be more/less detailed?

## Skill Structure

```
skill-name/
├── SKILL.md           # Main instructions (required)
├── REFERENCE.md       # Detailed docs (if needed)
├── EXAMPLES.md        # Usage examples (if needed)
└── scripts/           # Utility scripts (if needed)
    └── helper.js
```

## SKILL.md Template

```md
---
name: skill-name
description: Brief description of capability. Use when [specific triggers].
---

# Skill Name

## Quick start

[Minimal working example]

## Workflows

[Step-by-step processes with checklists for complex tasks]

## Advanced features

[Link to separate files: See [REFERENCE.md](REFERENCE.md)]
```

## Description Requirements

The description is **the only thing your agent sees** when deciding which skill to load. It's surfaced in the system prompt alongside all other installed skills. Your agent reads these descriptions and picks the relevant skill based on the user's request.

**Goal**: Give your agent just enough info to know:

1. What capability this skill provides
2. When/why to trigger it (specific keywords, contexts, file types)

**Format**:

- Max 1024 chars
- Write in third person
- First sentence: what it does
- Second sentence: "Use when [specific triggers]"

**Good example**:

```
Extract text and tables from PDF files, fill forms, merge documents. Use when working with PDF files or when user mentions PDFs, forms, or document extraction.
```

**Bad example**:

```
Helps with documents.
```

The bad example gives your agent no way to distinguish this from other document skills.

## When to Add Scripts

Add utility scripts when:

- Operation is deterministic (validation, formatting)
- Same code would be generated repeatedly
- Errors need explicit handling

Scripts save tokens and improve reliability vs generated code.

## When to Split Files

Split into separate files when:

- SKILL.md exceeds 100 lines
- Content has distinct domains (finance vs sales schemas)
- Advanced features are rarely needed

## Review Checklist

After drafting, verify:

- [ ] Description includes triggers ("Use when...")
- [ ] SKILL.md under 100 lines
- [ ] No time-sensitive info
- [ ] Consistent terminology
- [ ] Concrete examples included
- [ ] References one level deep
