---
name: "content-creator"
description_en: "Deprecated redirect skill that routes legacy 'content creator' requests to the correct specialist. Use when a user invokes 'content creator', asks to write a blog post, article, guide, or brand voice analysis (routes to content-production), or asks to plan content, build a topic cluster, or create a content calendar (routes to content-strategy). Does not handle requests directly — identifies user "
description_tr: "Kullanıcı 'content creator' çağrısını yaptığında veya blog yazısı, makale, rehber, marka sesi analizi (content-production'a yönlendir) ya da içerik planlama, konu kümesi oluşturma, içerik takvimi oluşturma (content-strategy'ye yönlendir) istediğinde eski istekleri doğru uzmanmana yönlendiren deprecated redirect skill. İstekleri doğrudan işlemez — kullanıcı niyetini tanımlar."
category: "Design"
repo: "alirezarezvani/claude-skills"
stars: 18759
url: "https://github.com/alirezarezvani/claude-skills/blob/HEAD/.gemini/skills/content-creator/SKILL.md"
path: ".gemini/skills/content-creator/SKILL.md"
is_collection: false
body_length: 2152
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # İçerik Yaratıcısı → Yönlendirildi
  
  > **Bu beceri iki uzman beceriye bölünmüştür.** Amacınıza uygun olanı kullanın:
  
  | Yapmak istediğiniz... | Bunun yerine kullanın |
  |----------------|-----------------|
  | **Yazın** bir blog yazısı, makale veya rehber | [content-production](../content-production/) |
  | **Planlayın** ne tür içerik oluşturacağınızı, konu kümeleri, takvim | [content-strategy](../content-strategy/) |
  | **Analiz edin** marka sesini | [content-production](../content-production/) (içerir `brand_voice_analyzer.py`) |
  | **Optimize edin** mevcut içeriğin SEO'sunu | [content-production](../content-production/) (içerir `seo_optimizer.py`) |
  | **Oluşturun** sosyal medya içeriği | [social-content](../social-content/) |
  
  ## Değişikliğin Nedeni
  
  Orijinal `content-creator` her şeyi yapmaya çalışıyordu: planlama, yazı yazma, SEO, sosyal medya, marka sesi. Bu da onu her işte biraz yetenekli, hiçbirinde uzman olmayan bir araç haline getiriyordu. Uzman beceriler her işi daha iyi yapıyor:
  
  - **content-production** — Tam pipeline: araştırma → brief → taslak → optimize → yayınla. Orijinal content-creator'dan tüm Python araçlarını içerir.
  - **content-strategy** — Stratejik planlama: konu kümeleri, anahtar kelime araştırması, içerik takvimi, önceliklendirme çerçeveleri.
  
  ## Proaktif Tetikleyiciler
  
  - **Kullanıcı "content creator" sorduğunda** → content-production'a yönlendir (en muhtemel amaç yazı yazmaktır).
  - **Kullanıcı "content plan" veya "ne yazmalıyım" sorduğunda** → content-strategy'ye yönlendir.
  
  ## Çıktı Yapıtları
  
  | Şunu istediğinizde... | Yönlendirilen... |
  |---------------------|-------------|
  | "Blog yazısı yaz" | content-production |
  | "İçerik takvimi" | content-strategy |
  | "Marka sesi analizi" | content-production (`brand_voice_analyzer.py`) |
  | "SEO optimizasyonu" | content-production (`seo_optimizer.py`) |
  
  ## İletişim
  
  Bu bir yönlendirme becerisidir. Kullanıcıyı doğru uzmanmana yönlendir — isteği burada işlemeye çalışma.
  
  ## İlgili Beceriler
  
  - **content-production**: Tam içerik yürütme pipeline'ı (halef).
  - **content-strategy**: İçerik planlama ve konu seçimi (halef).
  - **content-humanizer**: AI içeriğini gerçekçi ses çıkarması için son işleme.
  - **marketing-context**: Her iki halifin okuduğu temel bağlam.
---

# Content Creator → Redirected

> **This skill has been split into two specialist skills.** Use the one that matches your intent:

| You want to... | Use this instead |
|----------------|-----------------|
| **Write** a blog post, article, or guide | [content-production](../content-production/) |
| **Plan** what content to create, topic clusters, calendar | [content-strategy](../content-strategy/) |
| **Analyze brand voice** | [content-production](../content-production/) (includes `brand_voice_analyzer.py`) |
| **Optimize SEO** for existing content | [content-production](../content-production/) (includes `seo_optimizer.py`) |
| **Create social media content** | [social-content](../social-content/) |

## Why the Change

The original `content-creator` tried to do everything: planning, writing, SEO, social, brand voice. That made it a jack of all trades. The specialist skills do each job better:

- **content-production** — Full pipeline: research → brief → draft → optimize → publish. Includes all Python tools from the original content-creator.
- **content-strategy** — Strategic planning: topic clusters, keyword research, content calendars, prioritization frameworks.

## Proactive Triggers

- **User asks "content creator"** → Route to content-production (most likely intent is writing).
- **User asks "content plan" or "what should I write"** → Route to content-strategy.

## Output Artifacts

| When you ask for... | Routed to... |
|---------------------|-------------|
| "Write a blog post" | content-production |
| "Content calendar" | content-strategy |
| "Brand voice analysis" | content-production (`brand_voice_analyzer.py`) |
| "SEO optimization" | content-production (`seo_optimizer.py`) |

## Communication

This is a redirect skill. Route the user to the correct specialist — don't attempt to handle the request here.

## Related Skills

- **content-production**: Full content execution pipeline (successor).
- **content-strategy**: Content planning and topic selection (successor).
- **content-humanizer**: Post-processing AI content to sound authentic.
- **marketing-context**: Foundation context that both successors read.
