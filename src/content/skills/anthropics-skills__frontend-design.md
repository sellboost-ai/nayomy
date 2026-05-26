---
name: "frontend-design"
description_en: "Create distinctive, production-grade frontend interfaces with high design quality. Use this skill when the user asks to build web components, pages, artifacts, posters, or applications (examples include websites, landing pages, dashboards, React components, HTML/CSS layouts, or when styling/beautifying any web UI). Generates creative, polished code and UI design that avoids generic AI aesthetics."
category: "Design"
repo: "anthropics/skills"
stars: 140618
url: "https://github.com/anthropics/skills/blob/HEAD/skills/frontend-design/SKILL.md"
path: "skills/frontend-design/SKILL.md"
is_collection: false
body_length: 3956
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Bu Beceri

  Bu beceri, genel "AI çöpü" estetiğinden kaçınan, ayırt edici, production-grade frontend arayüzleri oluşturmaya rehberlik eder. Estetik detaylara ve yaratıcı seçimlere olağanüstü dikkat ile gerçek çalışan kod uygulayın.

  Kullanıcı frontend gereksinimlerini sağlar: yapılacak bir component, sayfa, uygulama veya arayüz. Amaç, hedef kitle veya teknik kısıtlamalar hakkında bağlam içerebilirler.

  ## Tasarım Düşüncesi

  Kodlamadan önce bağlamı anlayın ve CESUR bir estetik yöne bağlı kalın:
  - **Amaç**: Bu arayüz hangi problemi çözer? Kim kullanır?
  - **Ton**: Uçlardan birini seçin: acımasız minimalizmden, maksimalist kaosa, retro-futurizmaye, organik/doğal, lüks/rafine, oyuncu/oyuncak benzeri, editoryal/dergi, brutalist/ham, art deco/geometrik, yumuşak/pastel, endüstriyel/kullanışlı, vs. Tercih edebileceğiniz çok sayıda stil var. Bunları ilham için kullanın ama estetik yöne uygun bir tasarım yapın.
  - **Kısıtlamalar**: Teknik gereksinimler (framework, performans, erişilebilirlik).
  - **Farklılaşma**: Bunu UNUTULMAZ kılan nedir? Birinin hatırlayacağı tek şey ne?

  **KRİTİK**: Net bir konseptüel yön seçin ve bunu hassasiyetle uygulayın. Cesur maksimalizm ve rafine minimalizm ikisi de işe yarar - önemli olan niyet, yoğunluk değil.

  Daha sonra şu özelliklere sahip çalışan kod (HTML/CSS/JS, React, Vue, vb.) uygulayın:
  - Production-grade ve fonksiyonel
  - Görsel olarak çarpıcı ve unutulmaz
  - Net bir estetik bakış açısı ile uyumlu
  - Her detayda titizlikle rafine edilmiş

  ## Frontend Estetikleri Yönergeleri

  Şunlara odaklanın:
  - **Tipografi**: Güzel, benzersiz ve ilginç fontlar seçin. Arial ve Inter gibi genel fontlardan kaçının; bunun yerine frontend estetiğini yükselten, beklenmedik ve karakterli font seçimleri tercih edin. Ayırt edici bir display fontunu rafine bir body fontla eşleştirin.
  - **Renk & Tema**: Uyumlu bir estetik anlayışına bağlı kalın. Tutarlılık için CSS değişkenlerini kullanın. Timid, eşit şekilde dağıtılmış paletlerden baskın renkler keskin aksentleri tercih eder.
  - **Hareket**: Efektler ve mikro-etkileşimler için animasyonları kullanın. HTML için CSS-only çözümlerine öncelik verin. React için mevcut olduğunda Motion library'sini kullanın. Yüksek etki anlarına odaklanın: biri iyi orchestrated sayfa yüklemesi, staglenmiş reveals (animation-delay) ile dağınık mikro-etkileşimlerden daha fazla sevinç yaratır. Scroll-triggering ve hover state'lerini kullanın ki şaşırtabilsin.
  - **Mekânsal Kompozisyon**: Beklenmedik düzenler. Asimetri. Üst üste gelme. Diagonal akış. Grid-kırıcı elementler. Cömert negatif alan VEYA kontrollü yoğunluk.
  - **Arka Planlar & Görsel Detaylar**: Sağlam renklere gitmek yerine atmosfer ve derinlik yaratın. Genel estetik ile eşleşen bağlamsal efektler ve dokular ekleyin. Gradient mesh'ler, gürültü dokular, geometrik desenler, katmanlı transparanslar, dramatik gölgeler, dekoratif sınırlar, özel cursor'lar ve grain overlay'ler gibi yaratıcı formlar uygulayın.

  ASLA genel AI-generated estetikler kullanmayın: aşırı kullanılan font aileleri (Inter, Roboto, Arial, sistem fontları), klişe renk şemaları (özellikle beyaz arka planlarda mor gradient'ler), öngörülebilir düzenler ve component desenleri, bağlama özgü karakterden yoksun tüm aynı tasarımlar.

  Yaratıcı şekilde yorumlayın ve bağlam için gerçekten tasarlanmış gibi hissettiren beklenmedik seçimler yapın. Hiçbir tasarım aynı olmamalıdır. Açık ve koyu temalar, farklı fontlar, farklı estetikler arasında değişiklik yapın. ASLA ortak seçimlere yakınsamayın (örneğin Space Grotesk) kuşaklar arası.

  **ÖNEMLİ**: Uygulama karmaşıklığını estetik vizyona eşleştirin. Maksimalist tasarımlar geniş animasyonlar ve efektler ile kapsamlı kod gerektirir. Minimalist veya rafine tasarımlar kısıtlama, hassasiyet ve boşluk, tipografi ve ince detaylara dikkatli dikkat gerektirir. Zarafet vizyonu iyi bir şekilde yürütmekten gelir.

  Unutmayın: Claude olağanüstü yaratıcı çalışmalar yapabilir. Geri tutmayın, kutu dışında düşünüp tam olarak ayırt edici bir vizyona bağlı kaldığında gerçekte ne yaratılabileceğini gösterin.
---

This skill guides creation of distinctive, production-grade frontend interfaces that avoid generic "AI slop" aesthetics. Implement real working code with exceptional attention to aesthetic details and creative choices.

The user provides frontend requirements: a component, page, application, or interface to build. They may include context about the purpose, audience, or technical constraints.

## Design Thinking

Before coding, understand the context and commit to a BOLD aesthetic direction:
- **Purpose**: What problem does this interface solve? Who uses it?
- **Tone**: Pick an extreme: brutally minimal, maximalist chaos, retro-futuristic, organic/natural, luxury/refined, playful/toy-like, editorial/magazine, brutalist/raw, art deco/geometric, soft/pastel, industrial/utilitarian, etc. There are so many flavors to choose from. Use these for inspiration but design one that is true to the aesthetic direction.
- **Constraints**: Technical requirements (framework, performance, accessibility).
- **Differentiation**: What makes this UNFORGETTABLE? What's the one thing someone will remember?

**CRITICAL**: Choose a clear conceptual direction and execute it with precision. Bold maximalism and refined minimalism both work - the key is intentionality, not intensity.

Then implement working code (HTML/CSS/JS, React, Vue, etc.) that is:
- Production-grade and functional
- Visually striking and memorable
- Cohesive with a clear aesthetic point-of-view
- Meticulously refined in every detail

## Frontend Aesthetics Guidelines

Focus on:
- **Typography**: Choose fonts that are beautiful, unique, and interesting. Avoid generic fonts like Arial and Inter; opt instead for distinctive choices that elevate the frontend's aesthetics; unexpected, characterful font choices. Pair a distinctive display font with a refined body font.
- **Color & Theme**: Commit to a cohesive aesthetic. Use CSS variables for consistency. Dominant colors with sharp accents outperform timid, evenly-distributed palettes.
- **Motion**: Use animations for effects and micro-interactions. Prioritize CSS-only solutions for HTML. Use Motion library for React when available. Focus on high-impact moments: one well-orchestrated page load with staggered reveals (animation-delay) creates more delight than scattered micro-interactions. Use scroll-triggering and hover states that surprise.
- **Spatial Composition**: Unexpected layouts. Asymmetry. Overlap. Diagonal flow. Grid-breaking elements. Generous negative space OR controlled density.
- **Backgrounds & Visual Details**: Create atmosphere and depth rather than defaulting to solid colors. Add contextual effects and textures that match the overall aesthetic. Apply creative forms like gradient meshes, noise textures, geometric patterns, layered transparencies, dramatic shadows, decorative borders, custom cursors, and grain overlays.

NEVER use generic AI-generated aesthetics like overused font families (Inter, Roboto, Arial, system fonts), cliched color schemes (particularly purple gradients on white backgrounds), predictable layouts and component patterns, and cookie-cutter design that lacks context-specific character.

Interpret creatively and make unexpected choices that feel genuinely designed for the context. No design should be the same. Vary between light and dark themes, different fonts, different aesthetics. NEVER converge on common choices (Space Grotesk, for example) across generations.

**IMPORTANT**: Match implementation complexity to the aesthetic vision. Maximalist designs need elaborate code with extensive animations and effects. Minimalist or refined designs need restraint, precision, and careful attention to spacing, typography, and subtle details. Elegance comes from executing the vision well.

Remember: Claude is capable of extraordinary creative work. Don't hold back, show what can truly be created when thinking outside the box and committing fully to a distinctive vision.
