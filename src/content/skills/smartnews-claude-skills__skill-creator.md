---
name: "skill-creator"
description_en: "Guide for creating effective skills. This skill should be used when users want to create a new skill (or update an existing skill) that extends Claude's capabilities with specialized knowledge, workflows, or tool integrations."
description_tr: "Etkili beceriler oluşturmak için rehber. Bu beceri, kullanıcılar Claude'un yeteneklerini özel bilgi, iş akışları veya tool entegrasyonları ile genişletmek için yeni bir beceri oluşturmak (veya mevcut bir beceriyi güncellemek) istediğinde kullanılmalıdır."
category: "Design"
repo: "smartnews/claude-skills"
stars: 2
url: "https://github.com/smartnews/claude-skills/blob/HEAD/skill-creator/SKILL.md"
path: "skill-creator/SKILL.md"
is_collection: false
body_length: 11168
has_scripts: true
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Skill Creator

  Bu beceri, etkili beceriler oluşturmak için rehberlik sağlar.

  ## Beceriler Hakkında

  Beceriler, Claude'un yeteneklerini uzmanlaştırılmış bilgi, iş akışları ve araçlar sağlayarak genişleten modüler, bağımsız paketlerdir. Onları belirli alanlar veya görevler için "onboarding rehberleri" olarak düşünün—Claude'u genel amaçlı bir ajantan, hiçbir model tamamen sahip olamayacağı prosedürel bilgilerle donatılmış uzmanlaştırılmış bir ajana dönüştürür.

  ### Beceriler Ne Sağlar

  1. Uzmanlaştırılmış iş akışları - Belirli alanlar için çok adımlı prosedürler
  2. Tool entegrasyonları - Belirli dosya formatları veya API'lerle çalışmak için talimatlar
  3. Alan uzmanlığı - Şirkete özgü bilgiler, şemalar, iş mantığı
  4. Paketlenmiş kaynaklar - Karmaşık ve tekrarlanan görevler için betikler, referanslar ve varlıklar

  ### Bir Becerinin Yapısı

  Her beceri, gerekli bir SKILL.md dosyası ve isteğe bağlı paketlenmiş kaynaklardan oluşur:

  ```
  skill-name/
  ├── SKILL.md (required)
  │   ├── YAML frontmatter metadata (required)
  │   │   ├── name: (required)
  │   │   └── description: (required)
  │   └── Markdown instructions (required)
  └── Bundled Resources (optional)
      ├── scripts/          - Executable code (Python/Bash/etc.)
      ├── references/       - Documentation intended to be loaded into context as needed
      └── assets/           - Files used in output (templates, icons, fonts, etc.)
  ```

  #### SKILL.md (gerekli)

  **Metadata Kalitesi:** YAML frontmatter'daki `name` ve `description`, Claude'un beceriyi ne zaman kullanacağını belirler. Becerinin ne yaptığı ve ne zaman kullanılacağı konusunda spesifik olun. Üçüncü şahıs kullanın (örneğin "Bu beceri şu durumlarda kullanılmalıdır..." yerine "Bu beceriyi şu durumlarda kullan...").

  #### Paketlenmiş Kaynaklar (isteğe bağlı)

  ##### Betikler (`scripts/`)

  Belirleyici güvenilirlik gerektiren veya tekrar tekrar yeniden yazılan görevler için executable kod (Python/Bash/vb.).

  - **Ne zaman dahil edilir**: Aynı kod tekrar tekrar yeniden yazılıyor veya belirleyici güvenilirlik gerektiğinde
  - **Örnek**: PDF döndürme görevleri için `scripts/rotate_pdf.py`
  - **Faydalar**: Token verimli, belirleyici, bağlam içine yüklenmeden yürütülebilir
  - **Not**: Betikler, Claude tarafından düzeltme veya ortama özgü ayarlamalar için okunması gerekebilir

  ##### Referanslar (`references/`)

  Claude'un işlemesini bilgilendirmek ve düşünmesini yönlendirmek için gerektiğinde bağlama yüklenecek dokümantasyon ve referans malzeme.

  - **Ne zaman dahil edilir**: Claude'un çalışırken referans alması gereken dokümantasyon için
  - **Örnekler**: Mali şemalar için `references/finance.md`, şirket NDA şablonu için `references/mnda.md`, şirket politikaları için `references/policies.md`, API spesifikasyonları için `references/api_docs.md`
  - **Kullanım senaryoları**: Veritabanı şemaları, API dokümantasyonu, alan bilgisi, şirket politikaları, detaylı iş akışı rehberleri
  - **Faydalar**: SKILL.md'yi yalın tutar, yalnızca Claude ihtiyaç olduğunu belirlediğinde yüklenir
  - **En iyi uygulama**: Dosyalar büyükse (>10k sözcük), SKILL.md'ye grep arama desenleri ekleyin
  - **Tekrarlamaktan kaçının**: Bilgiler SKILL.md veya referans dosyalarında yaşamalı, her ikisinde birden değil. Detaylı bilgiler için referans dosyalarını tercih edin, sürece gerçekten temel olmadığı sürece—bu SKILL.md'yi yalın tutar ve bilgileri bağlam penceresini işgal etmeden keşfedilebilir hale getirir. SKILL.md'de yalnızca temel prosedürel talimatlar ve iş akışı rehberi tutun; detaylı referans malzemeleri, şemaları ve örnekleri referans dosyalarına taşıyın.

  ##### Varlıklar (`assets/`)

  Bağlama yüklenmesi amaçlanmayan, ancak Claude'un ürettiği çıktı içinde kullanılan dosyalar.

  - **Ne zaman dahil edilir**: Becerinin son çıktıda kullanılacak dosyalara ihtiyaç duyduğunda
  - **Örnekler**: Marka varlıkları için `assets/logo.png`, PowerPoint şablonları için `assets/slides.pptx`, HTML/React boilerplate'i için `assets/frontend-template/`, tipografi için `assets/font.ttf`
  - **Kullanım senaryoları**: Şablonlar, resimler, ikonlar, boilerplate kod, yazı tipleri, kopyalanan veya değiştirilen örnek belgeler
  - **Faydalar**: Çıktı kaynaklarını dokümantasyondan ayırır, Claude'un dosyaları bağlama yüklemeden kullanmasını sağlar

  ### Kademeli Açıklama Tasarım Prensibi

  Beceriler, bağlamı verimli bir şekilde yönetmek için üç seviyeli bir yükleme sistemi kullanır:

  1. **Metadata (name + description)** - Daima bağlamda (~100 sözcük)
  2. **SKILL.md gövdesi** - Beceri tetiklendiğinde (<5k sözcük)
  3. **Paketlenmiş kaynaklar** - Claude'un ihtiyaç duyduğu şekilde (Sınırsız*)

  *Sınırsız çünkü betikler bağlam penceresi içine okunmadan yürütülebilir.

  ## Beceri Oluşturma Süreci

  Bir beceri oluşturmak için "Beceri Oluşturma Süreci"ni sırayla izleyin ve yalnızca açık bir neden varsa adımları atlayın.

  ### Adım 1: Beceriyi Somut Örneklerle Anlamak

  Bu adımı yalnızca becerinin kullanım desenleri zaten açıkça anlaşıldığında atlayın. Mevcut bir beceriyle çalışırken bile değerli kalır.

  Etkili bir beceri oluşturmak için, becerinin nasıl kullanılacağının somut örneklerini açıkça anlayın. Bu anlayış doğrudan kullanıcı örneklerinden veya kullanıcı geri bildirimiyle doğrulanan oluşturulmuş örneklerden gelebilir.

  Örneğin, bir resim-düzenleyici becerisi oluştururken, ilgili sorular şunları içerir:

  - "Resim-düzenleyici becerisi hangi işlevleri desteklemelidir? Düzenleme, döndürme, başka bir şey var mı?"
  - "Bu beceri nasıl kullanılacağına dair bazı örnekler verebilir misiniz?"
  - "Kullanıcıların 'Bu resimdeki kırmızı gözü kaldır' veya 'Bu resmi döndür' gibi şeyler isteyeceğini hayal ediyorum. Bu beceriyi tetikleyecek başka yollar hayal ediyor musunuz?"
  - "Bu beceriyi tetiklemesi gereken bir kullanıcı ne söylerdi?"

  Kullanıcıları bunaltmamak için, tek bir mesajda çok fazla sorudan kaçının. En önemli sorularla başlayın ve daha iyi etkinlik için gerektiği kadar takip edin.

  Bu adımı, becerinin desteklemesi gereken işlevselliğin açık bir şekilde anlaşıldığında sonlandırın.

  ### Adım 2: Yeniden Kullanılabilir Beceri İçeriğini Planlama

  Somut örnekleri etkili bir beceriye dönüştürmek için her örneği şu şekilde analiz edin:

  1. Örneği sıfırdan nasıl çalıştıracağını düşünün
  2. Bu iş akışlarını tekrar tekrar yürütürken hangi betiklerin, referansların ve varlıkların yardımcı olacağını belirleyin

  Örnek: "Bu PDF'i döndürmeyi bana yardımcı ol" gibi sorgularla başa çıkmak için bir `pdf-editor` becerisi oluştururken, analiz şunu gösterir:

  1. PDF döndürme her seferinde aynı kodu yeniden yazma gerektirir
  2. Bir `scripts/rotate_pdf.py` betiği beceriye kaydedilmek için yararlı olurdu

  Örnek: "Bana bir yapılacaklar uygulaması yap" veya "Adımlarımı takip etmek için bir pano yap" gibi sorgular için bir `frontend-webapp-builder` becerisi tasarlarken, analiz şunu gösterir:

  1. Bir frontend web uygulaması yazmak her seferinde aynı boilerplate HTML/React'ı gerektirir
  2. Boilerplate HTML/React proje dosyalarını içeren bir `assets/hello-world/` şablonu beceriye kaydedilmek için yararlı olurdu

  Örnek: "Bugün kaç kullanıcı giriş yaptı?" gibi sorgularla başa çıkmak için bir `big-query` becerisi oluştururken, analiz şunu gösterir:

  1. BigQuery'yi sorgulamak her seferinde tablo şemalarını ve ilişkilerini yeniden keşfetme gerektirir
  2. Tablo şemalarını belgelendiren bir `references/schema.md` dosyası beceriye kaydedilmek için yararlı olurdu

  Becerinin içeriğini oluşturmak için, her somut örneği analiz ederek dahil edilecek yeniden kullanılabilir kaynakların bir listesini oluşturun: betikler, referanslar ve varlıklar.

  ### Adım 3: Beceriyi Başlatma

  Bu noktada, beceriyi gerçekten oluşturma zamanı geldi.

  Bu adımı yalnızca geliştirilen beceri zaten mevcutsa ve iterasyon veya paketleme gerekiyorsa atlayın. Bu durumda, sonraki adıma devam edin.

  Sıfırdan yeni bir beceri oluştururken, her zaman `init_skill.py` betiğini çalıştırın. Betik, bir becerinin gerektirdiği her şeyi otomatik olarak içeren yeni bir şablon beceri dizini oluşturarak beceri oluşturma sürecini çok daha verimli ve güvenilir hale getirir.

  Kullanım:

  ```bash
  scripts/init_skill.py <skill-name> --path <output-directory>
  ```

  Betik:

  - Belirtilen yola beceri dizini oluşturur
  - Uygun frontmatter ve TODO yer tutuculuları içeren bir SKILL.md şablonu oluşturur
  - Örnek kaynak dizinleri oluşturur: `scripts/`, `references/` ve `assets/`
  - Her dizinde özelleştirilebilecek veya silinebilecek örnek dosyalar ekler

  Başlatmadan sonra, oluşturulan SKILL.md ve örnek dosyalarını gerektiği gibi özelleştirin veya silin.

  ### Adım 4: Beceriyi Düzenleme

  (Yeni oluşturulan veya mevcut) beceriyi düzenlerken, becerinin Claude'un başka bir örneği tarafından kullanılmak üzere oluşturulduğunu unutmayın. Claude'un için faydalı ve açık olmayan bilgileri dahil etmeye odaklanın. Başka bir Claude örneğinin bu görevleri daha etkili bir şekilde yürütmesine yardımcı olacak hangi prosedürel bilgilerin, alana özgü detayların veya yeniden kullanılabilir varlıkların gerekli olacağını düşünün.

  #### Yeniden Kullanılabilir Beceri İçeriğiyle Başlayın

  Uygulamaya başlamak için, yukarıda tanımlanan yeniden kullanılabilir kaynakları kullanarak başlayın: `scripts/`, `references/` ve `assets/` dosyaları. Bu adımın kullanıcı girişi gerektirebileceğini unutmayın. Örneğin, bir `brand-guidelines` becerisi uygulanırken, kullanıcının `assets/` içinde depolanacak marka varlıkları veya şablonları ya da `references/` içinde depolanacak dokümantasyon sağlaması gerekebilir.

  Ayrıca, beceri için gerekli olmayan örnek dosya ve dizinleri silin. Başlatma betiği, yapıyı göstermek için `scripts/`, `references/` ve `assets/` içinde örnek dosyalar oluşturur, ancak çoğu becerinin hepsine ihtiyacı olmayacaktır.

  #### SKILL.md Güncelle

  **Yazı Stili:** Tüm beceriyi **imperatif/infinitif formda** (fiil-ilk talimatlar) yazın, ikinci şahıs formunda değil. Tarafsız, talimatlı dil kullanın (örneğin, "X başarmak için Y yap" yerine "X yapmalısın" veya "X yapmanız gerekirse"). Bu, AI tüketimi için tutarlılık ve netliği korur.

  SKILL.md'yi tamamlamak için aşağıdaki soruları cevaplayın:

  1. Becerinin amacı nedir, birkaç cümle ile?
  2. Beceri ne zaman kullanılmalıdır?
  3. Uygulamada, Claude beceriyi nasıl kullanmalıdır? Yukarıda geliştirilen tüm yeniden kullanılabilir beceri içeriğine referans yapılmalı, böylece Claude bunları nasıl kullanacağını bilir.

  ### Adım 5: Bir Beceriyi Paketleme

  Beceri hazır olduğunda, kullanıcıyla paylaşılan dağıtılabilir bir zip dosyasına paketlenmelidir. Paketleme süreci, tüm gereksinimleri karşıladığından emin olmak için beceriyi otomatik olarak doğrular:

  ```bash
  scripts/package_skill.py <path/to/skill-folder>
  ```

  İsteğe bağlı çıktı dizini belirtimi:

  ```bash
  scripts/package_skill.py <path/to/skill-folder> ./dist
  ```

  Paketleme betiği şunları yapacaktır:

  1. **Doğrula** beceriyi otomatik olarak, kontrol ederek:
     - YAML frontmatter formatı ve gerekli alanları
     - Beceri adlandırma kuralları ve dizin yapısı
     - Açıklama bütünlüğü ve kalitesi
     - Dosya organizasyonu ve kaynak referansları

  2. **Paketi** doğrulama başarılı olursa, becerinin adına göre adlandırılmış (örneğin, `my-skill.zip`) bir zip dosyası oluşturarak, dağıtım için uygun dizin yapısını koruyarak tüm dosyaları içerir.

  Doğrulama başarısız olursa, betik hataları rapor edecek ve bir paket oluşturmadan çıkacaktır. Doğrulama hatalarını düzeltin ve paketleme komutunu tekrar çalıştırın.

  ### Adım 6: İterasyonu Yapma

  Beceriyi test ettikten sonra, kullanıcılar iyileştirmeler talep edebilir. Çoğu zaman bu, beceriyi kullandıktan hemen sonra, becerinin nasıl performans gösterdiğinin taze bağlamıyla olur.

  **İterasyon iş akışı:**
  1. Beceriyi gerçek görevler üzerinde kullanın
  2. Mücadeleler veya verimsizlikleri fark edin
  3. SKILL.md veya paketlenmiş kaynakların nasıl güncellenebileceğini belirleyin
  4. Değişiklikleri uygulayın ve tekrar test edin
---

# Skill Creator

This skill provides guidance for creating effective skills.

## About Skills

Skills are modular, self-contained packages that extend Claude's capabilities by providing
specialized knowledge, workflows, and tools. Think of them as "onboarding guides" for specific
domains or tasks—they transform Claude from a general-purpose agent into a specialized agent
equipped with procedural knowledge that no model can fully possess.

### What Skills Provide

1. Specialized workflows - Multi-step procedures for specific domains
2. Tool integrations - Instructions for working with specific file formats or APIs
3. Domain expertise - Company-specific knowledge, schemas, business logic
4. Bundled resources - Scripts, references, and assets for complex and repetitive tasks

### Anatomy of a Skill

Every skill consists of a required SKILL.md file and optional bundled resources:

```
skill-name/
├── SKILL.md (required)
│   ├── YAML frontmatter metadata (required)
│   │   ├── name: (required)
│   │   └── description: (required)
│   └── Markdown instructions (required)
└── Bundled Resources (optional)
    ├── scripts/          - Executable code (Python/Bash/etc.)
    ├── references/       - Documentation intended to be loaded into context as needed
    └── assets/           - Files used in output (templates, icons, fonts, etc.)
```

#### SKILL.md (required)

**Metadata Quality:** The `name` and `description` in YAML frontmatter determine when Claude will use the skill. Be specific about what the skill does and when to use it. Use the third-person (e.g. "This skill should be used when..." instead of "Use this skill when...").

#### Bundled Resources (optional)

##### Scripts (`scripts/`)

Executable code (Python/Bash/etc.) for tasks that require deterministic reliability or are repeatedly rewritten.

- **When to include**: When the same code is being rewritten repeatedly or deterministic reliability is needed
- **Example**: `scripts/rotate_pdf.py` for PDF rotation tasks
- **Benefits**: Token efficient, deterministic, may be executed without loading into context
- **Note**: Scripts may still need to be read by Claude for patching or environment-specific adjustments

##### References (`references/`)

Documentation and reference material intended to be loaded as needed into context to inform Claude's process and thinking.

- **When to include**: For documentation that Claude should reference while working
- **Examples**: `references/finance.md` for financial schemas, `references/mnda.md` for company NDA template, `references/policies.md` for company policies, `references/api_docs.md` for API specifications
- **Use cases**: Database schemas, API documentation, domain knowledge, company policies, detailed workflow guides
- **Benefits**: Keeps SKILL.md lean, loaded only when Claude determines it's needed
- **Best practice**: If files are large (>10k words), include grep search patterns in SKILL.md
- **Avoid duplication**: Information should live in either SKILL.md or references files, not both. Prefer references files for detailed information unless it's truly core to the skill—this keeps SKILL.md lean while making information discoverable without hogging the context window. Keep only essential procedural instructions and workflow guidance in SKILL.md; move detailed reference material, schemas, and examples to references files.

##### Assets (`assets/`)

Files not intended to be loaded into context, but rather used within the output Claude produces.

- **When to include**: When the skill needs files that will be used in the final output
- **Examples**: `assets/logo.png` for brand assets, `assets/slides.pptx` for PowerPoint templates, `assets/frontend-template/` for HTML/React boilerplate, `assets/font.ttf` for typography
- **Use cases**: Templates, images, icons, boilerplate code, fonts, sample documents that get copied or modified
- **Benefits**: Separates output resources from documentation, enables Claude to use files without loading them into context

### Progressive Disclosure Design Principle

Skills use a three-level loading system to manage context efficiently:

1. **Metadata (name + description)** - Always in context (~100 words)
2. **SKILL.md body** - When skill triggers (<5k words)
3. **Bundled resources** - As needed by Claude (Unlimited*)

*Unlimited because scripts can be executed without reading into context window.

## Skill Creation Process

To create a skill, follow the "Skill Creation Process" in order, skipping steps only if there is a clear reason why they are not applicable.

### Step 1: Understanding the Skill with Concrete Examples

Skip this step only when the skill's usage patterns are already clearly understood. It remains valuable even when working with an existing skill.

To create an effective skill, clearly understand concrete examples of how the skill will be used. This understanding can come from either direct user examples or generated examples that are validated with user feedback.

For example, when building an image-editor skill, relevant questions include:

- "What functionality should the image-editor skill support? Editing, rotating, anything else?"
- "Can you give some examples of how this skill would be used?"
- "I can imagine users asking for things like 'Remove the red-eye from this image' or 'Rotate this image'. Are there other ways you imagine this skill being used?"
- "What would a user say that should trigger this skill?"

To avoid overwhelming users, avoid asking too many questions in a single message. Start with the most important questions and follow up as needed for better effectiveness.

Conclude this step when there is a clear sense of the functionality the skill should support.

### Step 2: Planning the Reusable Skill Contents

To turn concrete examples into an effective skill, analyze each example by:

1. Considering how to execute on the example from scratch
2. Identifying what scripts, references, and assets would be helpful when executing these workflows repeatedly

Example: When building a `pdf-editor` skill to handle queries like "Help me rotate this PDF," the analysis shows:

1. Rotating a PDF requires re-writing the same code each time
2. A `scripts/rotate_pdf.py` script would be helpful to store in the skill

Example: When designing a `frontend-webapp-builder` skill for queries like "Build me a todo app" or "Build me a dashboard to track my steps," the analysis shows:

1. Writing a frontend webapp requires the same boilerplate HTML/React each time
2. An `assets/hello-world/` template containing the boilerplate HTML/React project files would be helpful to store in the skill

Example: When building a `big-query` skill to handle queries like "How many users have logged in today?" the analysis shows:

1. Querying BigQuery requires re-discovering the table schemas and relationships each time
2. A `references/schema.md` file documenting the table schemas would be helpful to store in the skill

To establish the skill's contents, analyze each concrete example to create a list of the reusable resources to include: scripts, references, and assets.

### Step 3: Initializing the Skill

At this point, it is time to actually create the skill.

Skip this step only if the skill being developed already exists, and iteration or packaging is needed. In this case, continue to the next step.

When creating a new skill from scratch, always run the `init_skill.py` script. The script conveniently generates a new template skill directory that automatically includes everything a skill requires, making the skill creation process much more efficient and reliable.

Usage:

```bash
scripts/init_skill.py <skill-name> --path <output-directory>
```

The script:

- Creates the skill directory at the specified path
- Generates a SKILL.md template with proper frontmatter and TODO placeholders
- Creates example resource directories: `scripts/`, `references/`, and `assets/`
- Adds example files in each directory that can be customized or deleted

After initialization, customize or remove the generated SKILL.md and example files as needed.

### Step 4: Edit the Skill

When editing the (newly-generated or existing) skill, remember that the skill is being created for another instance of Claude to use. Focus on including information that would be beneficial and non-obvious to Claude. Consider what procedural knowledge, domain-specific details, or reusable assets would help another Claude instance execute these tasks more effectively.

#### Start with Reusable Skill Contents

To begin implementation, start with the reusable resources identified above: `scripts/`, `references/`, and `assets/` files. Note that this step may require user input. For example, when implementing a `brand-guidelines` skill, the user may need to provide brand assets or templates to store in `assets/`, or documentation to store in `references/`.

Also, delete any example files and directories not needed for the skill. The initialization script creates example files in `scripts/`, `references/`, and `assets/` to demonstrate structure, but most skills won't need all of them.

#### Update SKILL.md

**Writing Style:** Write the entire skill using **imperative/infinitive form** (verb-first instructions), not second person. Use objective, instructional language (e.g., "To accomplish X, do Y" rather than "You should do X" or "If you need to do X"). This maintains consistency and clarity for AI consumption.

To complete SKILL.md, answer the following questions:

1. What is the purpose of the skill, in a few sentences?
2. When should the skill be used?
3. In practice, how should Claude use the skill? All reusable skill contents developed above should be referenced so that Claude knows how to use them.

### Step 5: Packaging a Skill

Once the skill is ready, it should be packaged into a distributable zip file that gets shared with the user. The packaging process automatically validates the skill first to ensure it meets all requirements:

```bash
scripts/package_skill.py <path/to/skill-folder>
```

Optional output directory specification:

```bash
scripts/package_skill.py <path/to/skill-folder> ./dist
```

The packaging script will:

1. **Validate** the skill automatically, checking:
   - YAML frontmatter format and required fields
   - Skill naming conventions and directory structure
   - Description completeness and quality
   - File organization and resource references

2. **Package** the skill if validation passes, creating a zip file named after the skill (e.g., `my-skill.zip`) that includes all files and maintains the proper directory structure for distribution.

If validation fails, the script will report the errors and exit without creating a package. Fix any validation errors and run the packaging command again.

### Step 6: Iterate

After testing the skill, users may request improvements. Often this happens right after using the skill, with fresh context of how the skill performed.

**Iteration workflow:**
1. Use the skill on real tasks
2. Notice struggles or inefficiencies
3. Identify how SKILL.md or bundled resources should be updated
4. Implement changes and test again
