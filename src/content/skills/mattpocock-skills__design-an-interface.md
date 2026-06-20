---
name: "design-an-interface"
description_en: "Generate multiple radically different interface designs for a module using parallel sub-agents. Use when user wants to design an API, explore interface options, compare module shapes, or mentions \"design it twice\"."
description_tr: "Bir modül için birbirinden çok farklı arayüz tasarımları oluşturmak üzere paralel alt-ajanlar kullanın. Kullanıcı bir API tasarlamak, arayüz seçeneklerini keşfetmek, modül şekillerini karşılaştırmak istediğinde veya \"bunu iki kez tasarla\" dediğinde kullanın."
category: "Design"
repo: "mattpocock/skills"
stars: 137186
url: "https://github.com/mattpocock/skills/blob/HEAD/skills/deprecated/design-an-interface/SKILL.md"
path: "skills/deprecated/design-an-interface/SKILL.md"
is_collection: false
body_length: 3102
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Arayüzü Tasarla
  
  "A Philosophy of Software Design" kitabındaki "Design It Twice" (İki Kez Tasarla) ilkesine dayanarak: ilk fikriniz muhtemelen en iyisi olmayacaktır. Birden fazla radikal şekilde farklı tasarım oluştur, sonra karşılaştır.
  
  ## İş Akışı
  
  ### 1. Gereksinimleri Topla
  
  Tasarlamadan önce anla:
  
  - [ ] Bu modül hangi sorunu çözer?
  - [ ] Çağıranlar kimler? (diğer modüller, harici kullanıcılar, testler)
  - [ ] Ana işlemler nelerdir?
  - [ ] Herhangi bir kısıtlama var mı? (performans, uyumluluk, mevcut desenler)
  - [ ] Ne içeride gizli kalmalı, ne açığa çıkarılmalı?
  
  Sor: "Bu modülün ne yapması gerekir? Kim bunu kullanacak?"
  
  ### 2. Tasarımlar Oluştur (Paralel Alt Ajanlar)
  
  3+ alt ajanı Task aracını kullanarak eş zamanlı olarak başlat. Her biri **radikal şekilde farklı** bir yaklaşım üretmelidir.
  
  ```
  Her alt ajan için istem şablonu:
  
  Design an interface for: [module description]
  
  Requirements: [gathered requirements]
  
  Constraints for this design: [assign a different constraint to each agent]
  - Agent 1: "Minimize method count - aim for 1-3 methods max"
  - Agent 2: "Maximize flexibility - support many use cases"
  - Agent 3: "Optimize for the most common case"
  - Agent 4: "Take inspiration from [specific paradigm/library]"
  
  Output format:
  1. Interface signature (types/methods)
  2. Usage example (how caller uses it)
  3. What this design hides internally
  4. Trade-offs of this approach
  ```
  
  ### 3. Tasarımları Sunumla
  
  Her tasarımı şunlarla sunumla:
  
  1. **Arayüz imzası** - tipler, metodlar, parametreler
  2. **Kullanım örnekleri** - çağıranlar bunu pratikte nasıl kullanır
  3. **Ne gizler** - içeride tutulan karmaşıklık
  
  Tasarımları sırasıyla sunumla ki kullanıcı her yaklaşımı karşılaştırmadan önce özümsesin.
  
  ### 4. Tasarımları Karşılaştır
  
  Tüm tasarımları sununduktan sonra şunlara göre karşılaştır:
  
  - **Arayüz sadeliği**: daha az metod, daha basit parametreler
  - **Genel amaçlı vs uzmanlaştırılmış**: esneklik vs odak
  - **Uygulama verimliliği**: şekil verimli içerikleri sağlıyor mu?
  - **Derinlik**: az arayüz, önemli karmaşıklığı gizler (iyi) vs geniş arayüz, ince uygulama (kötü)
  - **Doğru kullanım kolaylığı** vs **yanlış kullanım kolaylığı**
  
  Ticari tablolarda değil, açıklayıcı metinde trade-off'ları tartış. Tasarımların en çok nerede ayrıldığını vurgula.
  
  ### 5. Sentezle
  
  Genellikle en iyi tasarım, birden fazla seçenekten içgörüleri birleştirir. Sor:
  
  - "Hangi tasarım birincil kullanım durumunuza en iyi uyuyor?"
  - "Diğer tasarımlardan birleştirmeye değer herhangi bir öğe var mı?"
  
  ## Değerlendirme Kriterleri
  
  "A Philosophy of Software Design" kitabından:
  
  **Arayüz sadeliği**: Daha az metod, daha basit parametreler = öğrenmesi ve doğru kullanması daha kolay.
  
  **Genel amaçlı**: Gelecekteki kullanım durumlarını değişiklik olmadan ele alabilir. Ancak aşırı genelleştirmeye dikkat et.
  
  **Uygulama verimliliği**: Arayüz şekli verimli uygulamaya izin veriyor mu? Yoksa garip içerikleri zorluyor mu?
  
  **Derinlik**: Az arayüz, önemli karmaşıklığı gizler = derin modül (iyi). Geniş arayüz, ince uygulama = sığ modül (kaçın).
  
  ## Ters Desenler
  
  - Alt ajanların benzer tasarımlar üretmesine izin verme - radikal farklılığı zorunlu kıl
  - Karşılaştırmayı atlama - değer kontrasta dayanır
  - Uygulama yapma - bu tamamen arayüz şekli hakkındadır
  - Uygulama çabasına göre değerlendirme yapma
---

# Design an Interface

Based on "Design It Twice" from "A Philosophy of Software Design": your first idea is unlikely to be the best. Generate multiple radically different designs, then compare.

## Workflow

### 1. Gather Requirements

Before designing, understand:

- [ ] What problem does this module solve?
- [ ] Who are the callers? (other modules, external users, tests)
- [ ] What are the key operations?
- [ ] Any constraints? (performance, compatibility, existing patterns)
- [ ] What should be hidden inside vs exposed?

Ask: "What does this module need to do? Who will use it?"

### 2. Generate Designs (Parallel Sub-Agents)

Spawn 3+ sub-agents simultaneously using Task tool. Each must produce a **radically different** approach.

```
Prompt template for each sub-agent:

Design an interface for: [module description]

Requirements: [gathered requirements]

Constraints for this design: [assign a different constraint to each agent]
- Agent 1: "Minimize method count - aim for 1-3 methods max"
- Agent 2: "Maximize flexibility - support many use cases"
- Agent 3: "Optimize for the most common case"
- Agent 4: "Take inspiration from [specific paradigm/library]"

Output format:
1. Interface signature (types/methods)
2. Usage example (how caller uses it)
3. What this design hides internally
4. Trade-offs of this approach
```

### 3. Present Designs

Show each design with:

1. **Interface signature** - types, methods, params
2. **Usage examples** - how callers actually use it in practice
3. **What it hides** - complexity kept internal

Present designs sequentially so user can absorb each approach before comparison.

### 4. Compare Designs

After showing all designs, compare them on:

- **Interface simplicity**: fewer methods, simpler params
- **General-purpose vs specialized**: flexibility vs focus
- **Implementation efficiency**: does shape allow efficient internals?
- **Depth**: small interface hiding significant complexity (good) vs large interface with thin implementation (bad)
- **Ease of correct use** vs **ease of misuse**

Discuss trade-offs in prose, not tables. Highlight where designs diverge most.

### 5. Synthesize

Often the best design combines insights from multiple options. Ask:

- "Which design best fits your primary use case?"
- "Any elements from other designs worth incorporating?"

## Evaluation Criteria

From "A Philosophy of Software Design":

**Interface simplicity**: Fewer methods, simpler params = easier to learn and use correctly.

**General-purpose**: Can handle future use cases without changes. But beware over-generalization.

**Implementation efficiency**: Does interface shape allow efficient implementation? Or force awkward internals?

**Depth**: Small interface hiding significant complexity = deep module (good). Large interface with thin implementation = shallow module (avoid).

## Anti-Patterns

- Don't let sub-agents produce similar designs - enforce radical difference
- Don't skip comparison - the value is in contrast
- Don't implement - this is purely about interface shape
- Don't evaluate based on implementation effort
