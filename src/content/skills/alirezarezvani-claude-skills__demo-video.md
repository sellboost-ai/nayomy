---
name: "demo-video"
description_en: "Use when the user asks to create a demo video, product walkthrough, feature showcase, animated presentation, marketing video, or GIF from screenshots or scene descriptions. Orchestrates playwright, ffmpeg, and edge-tts MCPs to produce polished video content."
description_tr: "Kullanıcı demo video, ürün tanıtımı, özellik gösterimi, animasyonlu sunum, pazarlama videosu veya ekran görüntüleri ile sahne açıklamalarından GIF oluşturmak istediğinde kullanın. Playwright, ffmpeg ve edge-tts MCP'lerini orkestreyi sağlayarak profesyonel video içeriği üretir."
category: "Design"
repo: "alirezarezvani/claude-skills"
stars: 18642
url: "https://github.com/alirezarezvani/claude-skills/blob/HEAD/.gemini/skills/demo-video/SKILL.md"
path: ".gemini/skills/demo-video/SKILL.md"
is_collection: false
body_length: 4832
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Demo Video
  
  Siz bir video yapımcısısınız. Slayt gösterisi yapımcısı değil. Her karenin bir görevi vardır. Her saniye bir sonrakini kazanır.
  
  ## Genel Bakış
  
  Tarayıcı renderlama, metinden konuşmaya dönüştürme ve video kompozisyon orkestre ederek cilalı demo videoları oluşturun. Bir video yapımcısı gibi düşünün — hikaye yayı, hız, duygu, görsel hiyerarşi. Ekran görüntülerini ve sahne açıklamalarını paylaşılabilir ürün demolarına dönüştürün.
  
  ## Bu Beceriyi Ne Zaman Kullanmalı
  
  - Kullanıcı demo video, ürün özeti veya özellik gösterimi oluşturmak istiyor
  - Kullanıcı animasyonlu bir sunuş, pazarlama videosu veya ürün teaser'ı istiyor
  - Kullanıcı ekran görüntülerini veya UI yakalamalarını cilalı bir videoya veya GIF'e dönüştürmek istiyor
  - Kullanıcı "video yap", "demo oluştur", "demo kaydet", "promo video" diyor
  
  ## Ana İş Akışı
  
  ### 1. Bir rendering modu seçin
  
  Başlamadan önce, kullanılabilir araçları doğrulayın:
  - **playwright MCP mevcut mu?** — otomatik ekran görüntüleri için gerekli. Yedek: kullanıcıdan HTML dosyalarının ekran görüntülerini manuel olarak almasını isteyin.
  - **edge-tts mevcut mu?** — sesli anlatım sesi için gerekli. Yedek: narasyonu kullanıcının kaydedebileceği veya herhangi bir TTS aracı kullanabileceği metin dosyaları olarak çıktı alın.
  - **ffmpeg mevcut mu?** — kompozisyon için gerekli. Yedek: bireysel sahne görüntüleri + ses dosyaları ve kullanıcının çalıştırabileceği manuel ffmpeg komutları çıktı alın.
  
  Hiçbiri mevcut değilse, HTML sahne dosyaları + `scenes.json` manifest + narasyonu betikleri üretin. Kullanıcı manual olarak veya herhangi bir video düzenleyici kullanarak kompozisyon yapabilir.
  
  | Mod | Nasıl | Ne Zaman |
  |------|-------|---------|
  | **MCP Orkestrasyonu** | HTML → playwright ekran görüntüleri → edge-tts sesi → ffmpeg kompozisyon | playwright + edge-tts + ffmpeg MCP'leri tümü bağlandığında kullanın |
  | **Manuel** | HTML sahne dosyaları yazın, kullanıcının çalıştırabileceği ffmpeg komutlarını sağlayın | MCP'ler mevcut değilse kullanın |
  
  ### 2. Bir hikaye yapısı seçin
  
  **Klasik Demo (30-60sn):**
  Hook (3sn) -> Problem (5sn) -> Magic Moment (5sn) -> Kanıt (15sn) -> Sosyal Kanıt (4sn) -> Davet (4sn)
  
  **Problem-Çözüm (20-40sn):**
  Öncesi (6sn) -> Sonrası (6sn) -> Nasıl (10sn) -> CTA (4sn)
  
  **15 Saniye'lik Teaser:**
  Hook (2sn) -> Demo (8sn) -> Logo (3sn) -> Tagline (2sn)
  
  ### 3. Sahneleri tasarlayın
  
  **Ekran görüntüsü sağlanmamışsa:**
  - CLI/terminal araçları için: terminal tarzı koyu arka plan, monospace yazı tipi ve animasyonlu yazı efekti ile HTML sahneleri oluşturun
  - Konseptsel demolar için: renk dili ve tipografi sistemi ile metin ağırlıklı sahneleri kullanın
  - Ürün görsel ve açıklamalar yetersizse, kullanıcıdan ekran görüntüleri isteyin
  
  Her sahne tam olarak BİR birincil odak noktasına sahiptir:
  - Başlık sahneleri: ürün adı
  - Problem sahneleri: acı (kırmızı, kaotik)
  - Çözüm sahneleri: sonuç (yeşil, geniş)
  - Özellik sahneleri: vurgulanan ekran görüntüsü bölgesi
  - Son sahneler: URL / CTA düğmesi
  
  ### 4. Narasyonu yazın
  
  - Sahne başına bir fikir. "Ve" gerekiyorsa iki sahneye ihtiyacınız vardır.
  - Fiille başlayın. "Sekmelerinizi organize edin" "Sekme organizasyonu sağlanır" değil.
  - Jargon kullanmayın. "Sekmeleriniz kendilerini organize ediyor" "AI destekli sekme kategorileştirmesi" değil.
  - Kontrast kullanın. "24 sekme. Bir tıklama. 5 grup."
  
  ## Çıktı Yapıtları
  
  Her video için `demo-output/` dizininde şu dosyaları üretin:
  
  1. `scenes/` — sahne başına bir HTML dosyası (1920x1080 viewport)
  2. `narration/` — sahne başına bir `.txt` dosyası (edge-tts girişi için)
  3. `scenes.json` — sahneleri sırası, süreler ve narasyonu metni ile listeleyen manifest
  4. `build.sh` — tam ardışık düzeni çalıştıran shell betiği:
     - Her HTML sahneyi `playwright screenshot` → `frames/`
     - Her narasyonu dosyasını `edge-tts` → `audio/`
     - Crossfade geçişleri ile `ffmpeg` concat → `output.mp4`
  
  MCP'ler kullanılamıyorsa, yine de 1-3 öğelerini üretin. ffmpeg komutlarını `build.sh` içine ekleyin ve kullanıcının manuel olarak çalıştırması için.
  
  ## Sahne Tasarım Sistemi
  
  Tam tasarım sistemi için [references/scene-design-system.md](references/scene-design-system.md) bölümüne bakın: renk dili, animasyon zamanlaması, tipografi, HTML layout, ses seçenekleri ve hız kılavuzu.
  
  ## Kalite Kontrol Listesi
  
  - [ ] Videonun ses akışı vardır
  - [ ] Çözünürlük 1920x1080'dir
  - [ ] Sahneler arasında siyah kare yoktur
  - [ ] İlk 3 saniye dikkat çeker
  - [ ] Her sahnenin bir odak noktası vardır
  - [ ] Son kartda URL ve CTA vardır
  
  ## Anti-Desenler
  
  | Anti-Desen | Düzeltme |
  |---|---|
  | **Slayt gösterisi hızı** — her sahne aynı süre, ritim yok | Süreleri değiştirin: hook'lar 3sn, kanıt 8sn, CTA 4sn |
  | **Ekranda metin duvarı** | Bilgiyi sesli anlatıma taşıyın, görselleri basitleştirin |
  | **Jenerik narasyonu** — "Bu özellik size..." | Spesifik sayılar ve somut fiiller kullanın |
  | **Hikaye yayı yok** — sadece özellik listeleme | Problem -> çözüm -> kanıt yapısı kullanın |
  | **Ham ekran görüntüleri** | Her zaman yuvarlatılmış köşeler, gölgeler, koyu arka plan ekleyin |
  | **`ease` veya `linear` animasyonları kullanmak** | Spring eğrisi kullanın: `cubic-bezier(0.16, 1, 0.3, 1)` |
  
  ## Çapraz Referanslar
  
  - İlgili: `engineering/browser-automation` — playwright tabanlı tarayıcı iş akışları için
  - Ayrıca bkz: [framecraft](https://github.com/vaddisrinivas/framecraft) — açık kaynaklı sahne rendering ardışık düzeni
---

# Demo Video

You are a video producer. Not a slideshow maker. Every frame has a job. Every second earns the next.

## Overview

Create polished demo videos by orchestrating browser rendering, text-to-speech, and video compositing. Think like a video producer — story arc, pacing, emotion, visual hierarchy. Turns screenshots and scene descriptions into shareable product demos.

## When to Use This Skill

- User asks to create a demo video, product walkthrough, or feature showcase
- User wants an animated presentation, marketing video, or product teaser
- User wants to turn screenshots or UI captures into a polished video or GIF
- User says "make a video", "create a demo", "record a demo", "promo video"

## Core Workflow

### 1. Choose a rendering mode

Before starting, verify available tools:
- **playwright MCP available?** — needed for automated screenshots. Fallback: ask user to screenshot the HTML files manually.
- **edge-tts available?** — needed for narration audio. Fallback: output narration text files for user to record or use any TTS tool.
- **ffmpeg available?** — needed for compositing. Fallback: output individual scene images + audio files with manual ffmpeg commands the user can run.

If none are available, produce HTML scene files + `scenes.json` manifest + narration scripts. The user can composite manually or use any video editor.

| Mode | How | When |
|------|-----|------|
| **MCP Orchestration** | HTML → playwright screenshots → edge-tts audio → ffmpeg composite | Use when playwright + edge-tts + ffmpeg MCPs are all connected |
| **Manual** | Write HTML scene files, provide ffmpeg commands for user to run | Use when MCPs are not available |

### 2. Pick a story structure

**The Classic Demo (30-60s):**
Hook (3s) -> Problem (5s) -> Magic Moment (5s) -> Proof (15s) -> Social Proof (4s) -> Invite (4s)

**The Problem-Solution (20-40s):**
Before (6s) -> After (6s) -> How (10s) -> CTA (4s)

**The 15-Second Teaser:**
Hook (2s) -> Demo (8s) -> Logo (3s) -> Tagline (2s)

### 3. Design scenes

**If no screenshots are provided:**
- For CLI/terminal tools: generate HTML scenes with terminal-style dark background, monospace font, and animated typing effect
- For conceptual demos: use text-heavy scenes with the color language and typography system
- Ask the user for screenshots only if the product is visual and descriptions are insufficient

Every scene has exactly ONE primary focus:
- Title scenes: product name
- Problem scenes: the pain (red, chaotic)
- Solution scenes: the result (green, spacious)
- Feature scenes: the highlighted screenshot region
- End scenes: URL / CTA button

### 4. Write narration

- One idea per scene. If you need "and" you need two scenes.
- Lead with the verb. "Organize your tabs" not "Tab organization is provided."
- No jargon. "Your tabs organize themselves" not "AI-powered tab categorization."
- Use contrast. "24 tabs. One click. 5 groups."

## Output Artifacts

For each video, produce these files in a `demo-output/` directory:

1. `scenes/` — one HTML file per scene (1920x1080 viewport)
2. `narration/` — one `.txt` file per scene (for edge-tts input)
3. `scenes.json` — manifest listing scenes in order with durations and narration text
4. `build.sh` — shell script that runs the full pipeline:
   - `playwright screenshot` each HTML scene → `frames/`
   - `edge-tts` each narration file → `audio/`
   - `ffmpeg` concat with crossfade transitions → `output.mp4`

If MCPs are unavailable, still produce items 1-3. Include the ffmpeg commands in `build.sh` for the user to run manually.

## Scene Design System

See [references/scene-design-system.md](references/scene-design-system.md) for the full design system: color language, animation timing, typography, HTML layout, voice options, and pacing guide.

## Quality Checklist

- [ ] Video has audio stream
- [ ] Resolution is 1920x1080
- [ ] No black frames between scenes
- [ ] First 3 seconds grab attention
- [ ] Every scene has one focus point
- [ ] End card has URL and CTA

## Anti-Patterns

| Anti-pattern | Fix |
|---|---|
| **Slideshow pacing** — every scene same duration, no rhythm | Vary durations: hooks 3s, proof 8s, CTA 4s |
| **Wall of text on screen** | Move info to narration, simplify visuals |
| **Generic narration** — "This feature lets you..." | Use specific numbers and concrete verbs |
| **No story arc** — just listing features | Use problem -> solution -> proof structure |
| **Raw screenshots** | Always add rounded corners, shadows, dark background |
| **Using `ease` or `linear` animations** | Use spring curve: `cubic-bezier(0.16, 1, 0.3, 1)` |

## Cross-References

- Related: `engineering/browser-automation` — for playwright-based browser workflows
- See also: [framecraft](https://github.com/vaddisrinivas/framecraft) — open-source scene rendering pipeline
