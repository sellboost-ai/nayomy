---
name: "design-system"
description_en: "Captures the user's brand identity once via a 10-question onboarding wizard (primary/accent HEX + heading + body Google Fonts + design style editorial/technical/minimal/playful + default output directory + syntax theme + TOC behavior + optional logo/company), validates body-text and link contrast against WCAG 2.2 AA, derives 12 CSS custom properties in HSL space, and stores the result for every ma"
description_tr: "Kullanıcının marka kimliğini 10 soruluk onboarding sihirbazıyla bir kez yakalar (primary/accent HEX + heading + body Google Fonts + tasarım stili editorial/technical/minimal/playful + varsayılan output dizini + syntax theme + TOC davranışı + opsiyonel logo/şirket), body-text ve link kontrastını WCAG 2.2 AA'ya karşı doğrular, HSL alanında 12 CSS custom property türetir ve sonucu her projede saklar."
category: "Design"
repo: "alirezarezvani/claude-skills"
stars: 18759
url: "https://github.com/alirezarezvani/claude-skills/blob/HEAD/.gemini/skills/design-system/SKILL.md"
path: ".gemini/skills/design-system/SKILL.md"
is_collection: false
body_length: 10009
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Design System — Onboarding + Shared Brand Tokens
  
  design-system skill'i, markdown-html plugin için **shared brand owner** görevidir. Onboarding'i bir kez çalıştırın. Her converter (`md-document`, `md-review`, `md-slides`) sonuç konfigürasyonunu `config_loader.py` üzerinden okur ve aynı 12 CSS custom property'sini çıktısına uygular. Bunu yapmadan, dönüştürmeler placeholder varsayılanlarla render edilir — teknik olarak işlevsel ama markalı değildir.
  
  Bu skill tam olarak üç Python aracından oluşur:
  
  1. **`onboard.py`** — interaktif (veya `--defaults` / `--set` / `--show` / `--reset`) sihirbazı.
  2. **`config_loader.py`** — project > global > defaults önceliği ve `MARKDOWN_HTML_NO_CONFIG=1` bypass'ı olan içe aktarılabilir özelleştirme yükleyicisi.
  3. **`brand_palette_validator.py`** — WCAG-AA contrast checker + HSL palette türetici.
  
  Üçü de stdlib-only'dir ve LLM çağrısı içermez (Path-B disiplinine göre belirleyici).
  
  ## Ne zaman çalıştırılacak
  
  | Belirti | İşlem |
  |---|---|
  | Kullanıcı ilk kez bu workspace'te "bu markdown'ı HTML'ye çevir" diyor | `python3 markdown-html/skills/design-system/scripts/onboard.py` çalıştırın |
  | `~/.config/markdown-html/design-system.json` mevcut değil VEYA `setup_completed_at` null | Dönüştürmeyi reddedin, onboarding'i gösterin |
  | Kullanıcı repo başına brand override isteyebiliyor | `python3 .../onboard.py --scope project` |
  | Kullanıcı tek bir alanı etkileşimsiz değiştirmek istiyor | `python3 .../onboard.py --set brand.primary=#FF6B35` |
  | Kullanıcı sıfırlamak ve yeniden onboard yapmak istiyor | `python3 .../onboard.py --reset` sonra yeniden çalıştırın |
  | Kullanıcı sıfır-dokunuş varsayılanlarını istiyor (CI, geçici oturum) | `python3 .../onboard.py --defaults` |
  | Başsız / konteynerize çalışma kaydedilen config'i yoksaymalıdır | `MARKDOWN_HTML_NO_CONFIG=1 ...` |
  
  ## Onboarding soru seti (10 soru)
  
  | # | Anahtar | Seçimler / Validator | Varsayılan |
  |---|---|---|---|
  | 1 | `default_output_dir` | yol; `os.access(parent, os.W_OK)` | `./markdown-html-out/` |
  | 2 | `brand.primary` | HEX `^#?[0-9a-fA-F]{6}$` | `#0A1628` |
  | 3 | `brand.accent` | HEX veya boş (otomatik-türet) | primary'den türet |
  | 4 | `typography.heading_font` | Google Font adı (12 güvenli varsayılan) | `Inter` |
  | 5 | `typography.body_font` | Google Font adı | `Inter` |
  | 6 | `design_style` | `editorial / technical / minimal / playful` | `technical` |
  | 7 | `code_theme` | `light / dark / auto` | `auto` |
  | 8 | `toc.behavior` | `sticky-sidebar / collapsible-top / inline / none` | `sticky-sidebar` |
  | 9 | `company_name` | string (boş olabilir) | `""` |
  | 10 | `logo_url` | URL veya boş (render'da base64-embedded) | `""` |
  
  ## Katı kurallar
  
  1. **WCAG AA body-text contrast zorunlu geçmeli.** `brand_palette_validator.validate()` her değişiklikten sonra çalışır. Body text'in arka plandan 4.5:1 contrast'ı sağlaması; link'in arka plandan 4.5:1 contrast'ı sağlaması gerekir. İkisi de başarısız olursa, `onboard.py` kaydetmeyi reddeder (exit code 4) ve kullanıcıya daha koyu bir primary seçmesini, `brand.bg`/`brand.text`'i boş bırakarak derivation'ın güvenli bir çift seçmesine izin vermesini veya `brand.text`'i doğrudan override etmesini söyler. Canon: WCAG 2.2 §1.4.3.
  2. **Çıktı dizini yazılabilir olmalıdır.** `onboard.py` yolun yukarısını yürüyerek mevcut bir atasını bulur ve `os.W_OK` kontrol eder. Boş veya yazılamaz yol → exit code 3. Orkestratörün `output_path_resolver.py` aynı kuralı dönüştürme başına onurlandırır.
  3. **Özelleştirme davranışı değiştirmeli, dekorasyon olarak oturmamalıdır.** Her tüketici (md-document, md-review, md-slides) config'i okumalı ve kullanıcı `design_style`, `brand.primary`, `code_theme` veya `toc.behavior`'u değiştirdiğinde farklı render etmelidir. Dekoratif-sadece alanlar design disiplinini başarısız kılar.
  4. **Öncelik sabittir.** Project > global > defaults. Deep-merge iç içe anahtarları korur (örn. project config'te `brand.primary`'yi override edebilirsiniz ve global'den `typography.heading_font`'u kaybetmezsiniz).
  5. **Bypass env'i bir nedeni vardır.** `MARKDOWN_HTML_NO_CONFIG=1`, headless CI, geçici test konteynerleri ve autoresearch-tarzı değerlendirici döngüleri içindir. Hiçbir zaman interaktif bir kullanıcı için sessizce ayarlamayın.
  
  ## Türetilen 12-token palet
  
  Kullanıcının brand'ı yakalandıktan sonra, `brand_palette_validator.derive_palette()` aynı config dosyasında `derived_palette` altında depolanan 12 CSS custom property'si üretir. Her converter bunları `<style>` bloğuna dahil eder.
  
  | Token | Amaç | Türetim |
  |---|---|---|
  | `--md-bg` | Doküman arka planı | Primary koyu ise, vibrant ise nötr-yakın |
  | `--md-surface` | Kart / callout / blockquote arka planı | Bg ± 4-6% luminance |
  | `--md-border` | İnce hatlar, tablo sınırları | Bg ± 8-12% luminance |
  | `--md-text` | Body text | Koyu bg'de off-white, açık bg'de near-black |
  | `--md-text-muted` | Başlıklar, metadata, footer'lar | `rgba(text, 0.68)` |
  | `--md-accent` | Primary CTA, callout header'ları, link emphasis | Primary vibrant ise, koyu ise hue-shifted lighter |
  | `--md-accent-soft` | Accent arka planları, hover state'leri | `rgba(accent, 0.14)` |
  | `--md-code-bg` | Inline code, fenced block bg | Bg ± 4-5% luminance |
  | `--md-link` | Hyperlink'ler | bg'de 4.5:1 contrast'a ulaşmak için iteratif yürüyüş |
  | `--md-link-hover` | Hover state | Link ± 6-8% luminance |
  | `--md-success` | Tamam / onaylı / geçti | Yeşil sabitlenmiş, luminance-matched |
  | `--md-warn` | Uyarı / nit / TODO | Amber sabitlenmiş, luminance-matched |
  
  ## Zorlama-soru kütüphanesi (Matt Pocock grill-with-docs pattern)
  
  Tur başına bir soru, önerilen cevap, canon citation.
  
  1. **Brand primary rengini nedir?** Önerilen: Ürün veya dokümantasyonunuzda zaten kullandığınız bir HEX — stock mavi değil. Canon: Aarron Walter, *Designing for Emotion* (renk brand affect taşır).
  2. **Accent türetilsin mi ayarlanmış mı?** Önerilen: ilk çalıştırmada türet (hue-shift + lighten uyumlu companion üretir); sadece brand kit'iniz bir tane belirtiyorsa açıkça ayarlayın. Canon: Adobe Spectrum, *Color Foundations*.
  3. **Editorial, technical, minimal mi yoksa playful mı?** Önerilen: mühendislik spec'leri/raporları için `technical`, uzun-okuma anlatıları için `editorial`, seyrek referans dokümanlar için `minimal`, marketing/landing içeriği için `playful`. Canon: Ellen Lupton, *Thinking with Type* (stil retorik amacı hizmet eder).
  4. **Sticky-sidebar TOC mu yoksa inline mi?** Önerilen: 800 kelimeden fazla dokümanlar için `sticky-sidebar`, kısa okumalar için `inline`. Canon: Nielsen-Norman, *Table of Contents Best Practices* (2023).
  5. **Global'e mi yoksa project başına mı kaydet?** Önerilen: varsayılan olarak global (çalışmanız genelinde tutarlı); `--scope project`'i sadece bu repo'nun farklı bir brand'ı varsa kullanın. Canon: research-ops onboarding pattern, `research-ops/CLAUDE.md` §8.
  
  ## Özelleştirme kullanımda (işlenmiş örnek)
  
  ```bash
  # Ilk-çalıştırma onboarding (interaktif, tüm 10 soruyu yürütür)
  python3 markdown-html/skills/design-system/scripts/onboard.py
  
  # CI için sıfır-dokunuş varsayılanları / ilk-test
  python3 .../onboard.py --defaults
  
  # Sadece primary rengi ve design style'ı değiştir
  python3 .../onboard.py --set brand.primary=#FF6B35 --set design_style=editorial
  
  # Per-repo override
  python3 .../onboard.py --scope project --set design_style=minimal
  
  # Sıfırla ve yeniden onboard et
  python3 .../onboard.py --reset
  python3 .../onboard.py
  
  # Etkili config'i incele (project > global > defaults)
  python3 .../config_loader.py --show
  python3 .../config_loader.py --status
  
  # Kaydedilen config'i bypass et (sadece DEFAULTS döner)
  MARKDOWN_HTML_NO_CONFIG=1 python3 .../config_loader.py --show
  
  # Brand'e bağlanmadan önce WCAG contrast'ı spot-kontrol et
  python3 .../brand_palette_validator.py --primary "#FF6B35" --accent "#00D4AA"
  ```
  
  ## Varsayımlar
  
  1. Kullanıcının HTML dönüştürmeleri arasında tutarlı olmasını istediği en az bir brand HEX'i vardır.
  2. Kullanıcı 1-2 dakikalık bir kez setup'ı kabul eder.
  3. Kullanıcı Google Fonts'u typography kaynağı olarak kabul eder (CDN, local font hosting yok).
  4. WCAG 2.2 AA erişilebilirlik tabanıdır (4.5:1 body, 3:1 large/UI). AAA (7:1) kapsam dışıdır.
  
  ## Hedef değil
  
  - Tam design-token sistemi değil (Style Dictionary, Theo). On iki token, yüz değil.
  - Custom-font hosting çözümü değil. Sadece Google Fonts.
  - Dönüştürücülerde dark/light mode switcher değil. `code_theme: auto` syntax highlighting için prefers-color-scheme durumunu işler; layout palet onboarding başına single-mode'dir.
  - Erişilebilirlik audit suite'i değil (bunun için axe-core / pa11y kullanın). Sadece contrast'ı zorunlu kılarız.
  - Mevcut CSS'yi dönüştürmeyin — türetilen palet taze oluşturulan HTML'ye enjekte edilir.
  
  ## Farklı
  
  - **`marketing/landing/skills/landing/scripts/brand_palette_validator.py`** — o script'in `derive_palette()` hero-page rendering için şekillendirilmiş 8 token üretir (`--navy`, `--teal`, `--card-bg`, `--card-border`). Bu script doküman rendering için şekillendirilmiş 12 token üretir (sticky surface, hairline border, code bg, link, link-hover, success, warn). Aynı WCAG + HSL math, farklı token taxonomy.
  - **`research-ops/skills/clinical-research/scripts/onboard.py`** — aynı pattern (interactive + `--defaults`/`--set`/`--show`/`--reset`/`--scope`), farklı soru seti (clinical alpha/power/dropout vs. brand palette/typography/layout).
  
  ## Çıktı artifact'ı
  
  `~/.config/markdown-html/design-system.json` (global) veya `./.markdown-html/design-system.json` (project). JSON schema `assets/design_system_schema.json` konumunda yaşar.
  
  ## Anti-pattern'ler (yapma)
  
  - ❌ Onboarding'i atla ve placeholder varsayılanlarıyla bir converter çalıştır — çıktı markalı görünmez.
  - ❌ Vibrant bir brand primary'yi doğrudan `brand.bg` olarak seç (düşük text contrast). Bunun yerine accent olarak kullan.
  - ❌ Interaktif bir kullanıcı için `MARKDOWN_HTML_NO_CONFIG=1`'i sessizce ayarla — token'larınızın neden kaybolduğunu merak edecekler.
  - ❌ Brand semantiği 12-token taxonomy'sinin dışında `derived_palette`'te encode et. Sadece kasıtlı bir ad + amaç + derivation kuralıyla yeni bir token ekle.
  
  ## Kaynaklar
  
  - WCAG 2.2 — §1.4.3 (contrast), §1.4.4 (resize), §1.4.11 (non-text contrast)
  - Aarron Walter — *Designing for Emotion* (A Book Apart)
  - Ellen Lupton — *Thinking with Type*
  - Adobe Spectrum — *Color Foundations*
  - Nielsen-Norman — *Table of Contents Best Practices* (2023)
  - research-ops onboarding pattern: `research-ops/CLAUDE.md` §8
  - Brand palette math source: `marketing/landing/skills/landing/scripts/brand_palette_validator.py`
---

# Design System — Onboarding + Shared Brand Tokens

The design-system skill is the **shared brand owner** for the markdown-html plugin. Run its onboarding once. Every converter (`md-document`, `md-review`, `md-slides`) reads the resulting config via `config_loader.py` and applies the same 12 CSS custom properties to its output. Without this, conversions render with placeholder defaults — technically functional but unbranded.

This skill ships exactly three Python tools:

1. **`onboard.py`** — interactive (or `--defaults` / `--set` / `--show` / `--reset`) wizard.
2. **`config_loader.py`** — importable customization loader with project > global > defaults precedence and `MARKDOWN_HTML_NO_CONFIG=1` bypass.
3. **`brand_palette_validator.py`** — WCAG-AA contrast checker + HSL palette deriver.

All three are stdlib-only and contain no LLM calls (deterministic per Path-B discipline).

## When to invoke

| Symptom | Action |
|---|---|
| User says "convert this markdown to HTML" for the first time in this workspace | Run `python3 markdown-html/skills/design-system/scripts/onboard.py` |
| `~/.config/markdown-html/design-system.json` doesn't exist OR `setup_completed_at` is null | Refuse conversion, surface onboarding |
| User wants per-repo brand override | `python3 .../onboard.py --scope project` |
| User wants to change a single field non-interactively | `python3 .../onboard.py --set brand.primary=#FF6B35` |
| User wants to reset and re-onboard | `python3 .../onboard.py --reset` then re-run |
| User wants zero-touch defaults (CI, ephemeral session) | `python3 .../onboard.py --defaults` |
| Headless / containerized run that should ignore saved config | `MARKDOWN_HTML_NO_CONFIG=1 ...` |

## Onboarding question set (10 questions)

| # | Key | Choices / Validator | Default |
|---|---|---|---|
| 1 | `default_output_dir` | path; `os.access(parent, os.W_OK)` | `./markdown-html-out/` |
| 2 | `brand.primary` | HEX `^#?[0-9a-fA-F]{6}$` | `#0A1628` |
| 3 | `brand.accent` | HEX or blank (auto-derive) | derive from primary |
| 4 | `typography.heading_font` | Google Font name (12 safe defaults) | `Inter` |
| 5 | `typography.body_font` | Google Font name | `Inter` |
| 6 | `design_style` | `editorial / technical / minimal / playful` | `technical` |
| 7 | `code_theme` | `light / dark / auto` | `auto` |
| 8 | `toc.behavior` | `sticky-sidebar / collapsible-top / inline / none` | `sticky-sidebar` |
| 9 | `company_name` | string (may be empty) | `""` |
| 10 | `logo_url` | URL or empty (base64-embedded at render) | `""` |

## Hard rules

1. **WCAG AA body-text contrast must pass.** `brand_palette_validator.validate()` runs after every change. Body text on bg must reach 4.5:1; link on bg must reach 4.5:1. If either fails, `onboard.py` refuses to save (exit code 4) and tells the user to pick a darker primary, blank `brand.bg`/`brand.text` to let derivation pick a safe pair, or override `brand.text` directly. Canon: WCAG 2.2 §1.4.3.
2. **Output directory must be writable.** `onboard.py` walks up the path to find an existing ancestor and checks `os.W_OK`. Empty or unwritable path → exit code 3. The orchestrator's `output_path_resolver.py` honors the same rule per-conversion.
3. **Customization must change behavior, not sit as decoration.** Every consumer (md-document, md-review, md-slides) must read the config and render differently when the user changes `design_style`, `brand.primary`, `code_theme`, or `toc.behavior`. Decorative-only fields fail the design discipline.
4. **Precedence is fixed.** Project > global > defaults. The deep-merge preserves nested keys (e.g. you can override `brand.primary` in a project config without losing `typography.heading_font` from global).
5. **Bypass env exists for a reason.** `MARKDOWN_HTML_NO_CONFIG=1` is for headless CI, ephemeral test containers, and the autoresearch-style evaluator loops. Never set it silently for an interactive user.

## Derived 12-token palette

Once the user's brand is captured, `brand_palette_validator.derive_palette()` produces 12 CSS custom properties stored under `derived_palette` in the same config file. Every converter inlines these into its `<style>` block.

| Token | Purpose | Derivation |
|---|---|---|
| `--md-bg` | Document background | Primary if dark, near-neutral if vibrant |
| `--md-surface` | Card / callout / blockquote background | Bg ± 4-6% luminance |
| `--md-border` | Hairline dividers, table borders | Bg ± 8-12% luminance |
| `--md-text` | Body text | Off-white on dark bg, near-black on light bg |
| `--md-text-muted` | Captions, metadata, footers | `rgba(text, 0.68)` |
| `--md-accent` | Primary CTA, callout headers, link emphasis | Primary if vibrant, hue-shifted lighter if dark |
| `--md-accent-soft` | Accent backgrounds, hover states | `rgba(accent, 0.14)` |
| `--md-code-bg` | Inline code, fenced block bg | Bg ± 4-5% luminance |
| `--md-link` | Hyperlinks | Iteratively walked to reach 4.5:1 contrast on bg |
| `--md-link-hover` | Hover state | Link ± 6-8% luminance |
| `--md-success` | OK / approved / passed | Green anchored, luminance-matched |
| `--md-warn` | Caution / nit / TODO | Amber anchored, luminance-matched |

## Forcing-question library (Matt Pocock grill-with-docs pattern)

One question per turn, recommended answer, canon citation.

1. **What's your brand primary color?** Recommended: a HEX you already use in your product or docs — not a stock blue. Canon: Aarron Walter, *Designing for Emotion* (color carries brand affect).
2. **Should accent be derived or set?** Recommended: derive on first run (hue-shift + lighten produces a coherent companion); set explicitly only if your brand kit specifies one. Canon: Adobe Spectrum, *Color Foundations*.
3. **Editorial, technical, minimal, or playful?** Recommended: `technical` for engineering specs/reports, `editorial` for long-read narratives, `minimal` for sparse reference docs, `playful` for marketing/landing content. Canon: Ellen Lupton, *Thinking with Type* (style serves the rhetorical purpose).
4. **Sticky-sidebar TOC, or inline?** Recommended: `sticky-sidebar` for documents over 800 words, `inline` for short reads. Canon: Nielsen-Norman, *Table of Contents Best Practices* (2023).
5. **Save to global or per-project?** Recommended: global by default (consistent across your work); use `--scope project` only when this repo has a different brand. Canon: research-ops onboarding pattern, `research-ops/CLAUDE.md` §8.

## Customization in use (worked example)

```bash
# First-run onboarding (interactive, walks all 10 questions)
python3 markdown-html/skills/design-system/scripts/onboard.py

# Zero-touch defaults for CI / first-test
python3 .../onboard.py --defaults

# Change just the primary color and design style
python3 .../onboard.py --set brand.primary=#FF6B35 --set design_style=editorial

# Per-repo override
python3 .../onboard.py --scope project --set design_style=minimal

# Reset and re-onboard
python3 .../onboard.py --reset
python3 .../onboard.py

# Inspect the effective config (project > global > defaults)
python3 .../config_loader.py --show
python3 .../config_loader.py --status

# Bypass saved config (returns DEFAULTS only)
MARKDOWN_HTML_NO_CONFIG=1 python3 .../config_loader.py --show

# Spot-check WCAG contrast before committing to a brand
python3 .../brand_palette_validator.py --primary "#FF6B35" --accent "#00D4AA"
```

## Assumptions

1. User has at least one brand HEX they want consistent across their HTML conversions.
2. User accepts a 1-2 minute one-time setup.
3. User is OK with Google Fonts as the typography source (CDN, no local font hosting).
4. WCAG 2.2 AA is the accessibility floor (4.5:1 body, 3:1 large/UI). AAA (7:1) is out of scope.

## Non-goals

- Not a full design-token system (Style Dictionary, Theo). Twelve tokens, not a hundred.
- Not a custom-font hosting solution. Google Fonts only.
- Not a dark/light mode switcher in the converters. `code_theme: auto` handles the prefers-color-scheme case for syntax highlighting; layout palette is single-mode per onboarding.
- Not an accessibility audit suite (use axe-core / pa11y for that). We enforce contrast only.
- Does not transform existing CSS — the derived palette is injected into freshly generated HTML.

## Distinct from

- **`marketing/landing/skills/landing/scripts/brand_palette_validator.py`** — that script's `derive_palette()` produces 8 tokens shaped for hero-page rendering (`--navy`, `--teal`, `--card-bg`, `--card-border`). This script produces 12 tokens shaped for document rendering (sticky surface, hairline border, code bg, link, link-hover, success, warn). Same WCAG + HSL math, different token taxonomy.
- **`research-ops/skills/clinical-research/scripts/onboard.py`** — same pattern (interactive + `--defaults`/`--set`/`--show`/`--reset`/`--scope`), different question set (clinical alpha/power/dropout vs. brand palette/typography/layout).

## Output artifact

`~/.config/markdown-html/design-system.json` (global) or `./.markdown-html/design-system.json` (project). JSON schema lives at `assets/design_system_schema.json`.

## Anti-patterns (do not)

- ❌ Skip onboarding and run a converter with placeholder defaults — output looks unbranded.
- ❌ Pick a vibrant brand primary as `brand.bg` directly (low text contrast). Use it as accent instead.
- ❌ Set `MARKDOWN_HTML_NO_CONFIG=1` silently for an interactive user — they'll wonder why their tokens disappeared.
- ❌ Encode brand semantics in `derived_palette` outside the 12-token taxonomy. Add a new token only with a deliberate name + purpose + derivation rule.

## References

- WCAG 2.2 — §1.4.3 (contrast), §1.4.4 (resize), §1.4.11 (non-text contrast)
- Aarron Walter — *Designing for Emotion* (A Book Apart)
- Ellen Lupton — *Thinking with Type*
- Adobe Spectrum — *Color Foundations*
- Nielsen-Norman — *Table of Contents Best Practices* (2023)
- research-ops onboarding pattern: `research-ops/CLAUDE.md` §8
- Brand palette math source: `marketing/landing/skills/landing/scripts/brand_palette_validator.py`
