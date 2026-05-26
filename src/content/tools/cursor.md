---
name: "Cursor"
slug: "cursor"
tagline: "AI-native code editor — Composer agents, multi-file edits, codebase context"
tagline_tr: "AI-native kod editörü — Composer ajanları, çok dosyalı düzenleme, codebase bağlamı"
maker: "Anysphere"
maker_url: "https://anysphere.inc"
website: "https://cursor.com"
category: "Code AI"
category_tr: "Kod AI"
type: "code"
launched: "March 2023"
pricing_tier: "free-paid"
price_min: 0
price_max: 200
color: "#000000"
models:
  - name: "Composer 2.5"
    context: "1M tokens"
    price_input: 0.50
    price_output: 2.50
    description: "Latest Cursor model, released May 18, 2026, built on Kimi K2.5"
    description_tr: "En yeni Cursor modeli, 18 Mayıs 2026'da çıktı, Kimi K2.5 üzerine kurulu"
  - name: "Composer 2"
    context: "200K tokens"
    price_input: 0.50
    price_output: 2.50
    description: "Released March 19, 2026, fast inference"
    description_tr: "19 Mart 2026'da çıktı, hızlı inference"
  - name: "Claude Opus 4.7"
    description: "Available for complex agent workflows"
    description_tr: "Karmaşık agent iş akışları için mevcut"
  - name: "Claude Sonnet 4.6"
    description: "Coding default"
    description_tr: "Kodlama varsayılanı"
  - name: "GPT-5.5"
    description: "Alternate frontier model"
    description_tr: "Alternatif frontier model"
pricing:
  - name: "Hobby"
    name_tr: "Hobby"
    price: "$0"
    highlights: ["Limited Agent requests", "Limited Tab completions", "1-week Pro trial"]
    highlights_tr: ["Sınırlı Agent isteği", "Sınırlı Tab tamamlama", "1 haftalık Pro denemesi"]
  - name: "Pro"
    price: "$20/mo"
    highlights: ["Unlimited Tab", "$20 credit pool", "All frontier models", "MCPs + Skills + Hooks"]
    highlights_tr: ["Sınırsız Tab", "$20 kredi havuzu", "Tüm frontier modeller", "MCPs + Skills + Hooks"]
  - name: "Pro+"
    price: "$60/mo"
    highlights: ["For devs hitting Pro caps", "Extended credit pool", "Higher agent limits"]
    highlights_tr: ["Pro limitini aşan geliştiriciler için", "Genişletilmiş kredi havuzu", "Yüksek agent limitleri"]
  - name: "Business / Ultra"
    price: "Custom"
    highlights: ["Centralized billing", "Admin controls", "SSO", "Privacy mode"]
    highlights_tr: ["Merkezi faturalama", "Admin kontrolleri", "SSO", "Privacy modu"]
capabilities:
  - "AI-native VS Code fork — all extensions/themes/keybindings carry over"
  - "Tab autocomplete (Supermaven-powered) — fastest in market"
  - "Composer 1.5 — multi-file editing with 20× scaled reinforcement learning"
  - "Agent mode — plans, writes, tests, and fixes code autonomously"
  - "Background Agents — run AI tasks in parallel while you keep coding"
  - "BugBot — automated bug detection across the codebase"
  - "MCP support — connect database, docs, APIs to the editor"
  - "Project-wide indexing for full codebase context"
capabilities_tr:
  - "AI-native VS Code fork — tüm eklentiler/temalar/kısayollar taşınıyor"
  - "Tab autocomplete (Supermaven destekli) — piyasada en hızlı"
  - "Composer 1.5 — 20× ölçeklendirilmiş RL ile çok dosyalı düzenleme"
  - "Agent modu — otonom olarak planlar, kod yazar, test eder, hataları düzeltir"
  - "Background Agents — sen kod yazarken paralel AI görevleri"
  - "BugBot — codebase genelinde otomatik bug tespiti"
  - "MCP desteği — veritabanı, doküman, API'lara bağlantı"
  - "Proje çapında indeksleme ile tam codebase bağlamı"
strengths:
  - "30–40% faster coding for developers — measured productivity gains"
  - "Maintains context better than any competing IDE-based tool"
  - "5-minute migration from VS Code — extensions and settings carry over"
  - "Composer 1.5 makes Cursor feel like a coding partner, not autocomplete"
  - "Strong agentic workflows — Background Agents + BugBot"
strengths_tr:
  - "Geliştiriciler için %30–40 daha hızlı kodlama — ölçülmüş üretkenlik kazancı"
  - "Bağlamı IDE rakiplerinden daha iyi koruyor"
  - "VS Code'dan 5 dakikalık geçiş — eklentiler ve ayarlar taşınıyor"
  - "Composer 1.5 Cursor'u autocomplete değil, kodlama partneri yapıyor"
  - "Güçlü agentic workflow'lar — Background Agents + BugBot"
weaknesses:
  - "Credit-based pricing controversy — Pro effectively ~225 requests/mo"
  - "Performance issues — lag and freezes in large codebases"
  - "Agent mode can make sweeping changes that are hard to review"
  - "Only GitHub for version control — no native GitLab support"
  - "Output token costs add up fast on Opus-heavy workflows"
weaknesses_tr:
  - "Kredi bazlı fiyatlandırma tartışması — Pro etkin ~225 istek/ay"
  - "Performans sorunları — büyük codebase'lerde lag ve donma"
  - "Agent modu hızlı incelemesi zor değişiklikler yapabiliyor"
  - "Sürüm kontrolünde sadece GitHub — yerli GitLab desteği yok"
  - "Opus-yoğun workflow'larda output token maliyetleri hızla artıyor"
ecosystem:
  - type: "cursor-rules"
    label: "Cursor Rules"
    label_tr: "Cursor Kuralları"
    url: "/cursor-rules"
    count: 200
    note: ".cursorrules and .mdc files for project-specific AI behavior"
    note_tr: "Proje-spesifik AI davranışı için .cursorrules ve .mdc dosyaları"
alternatives:
  - "claude"
  - "chatgpt"
sources:
  - "https://cursor.com/pricing"
  - "https://www.nxcode.io/resources/news/cursor-ai-review-2026-features-pricing-worth-it"
  - "https://www.cloudzero.com/blog/cursor-ai-pricing/"
  - "https://www.zbuild.io/resources/news/cursor-review-2026"
body_tr: |-
  ## Ne yapar?

  Cursor, **Anysphere** tarafından geliştirilen AI-native bir kod editörüdür. Eski OpenAI araştırmacılarından oluşan ekip 2022'de kurmuş, 2026'da Cursor tarih boyunca **en değerli AI developer tool şirketi** haline geldi: 2 milyar dolar yıllık gelir, 2 milyon kullanıcı, 1 milyon ücretli müşteri.

  Cursor temelde **VS Code'un fork'u** — tüm eklentiler, temalar ve kısayollar taşınıyor. Ama AI yetenekleri editörün her köşesine işlenmiş: Tab autocomplete, multi-file chat, autonomous agents.

  Mayıs 2026'da **Cursor 3.0** (2 Nisan 2026) aktif platform — Agents Window ayrı bir workspace olarak ve döşemeli multi-agent layout'ları ile geliyor. **Composer 2.5** (18 Mayıs 2026) en yeni özel model — Moonshot'un Kimi K2.5'i üzerine hedefli reinforcement learning ile kurulu, SWE-Bench Multilingual'da %79.8 skor, $0.50/$2.50 per MTok fiyatla. **Background Agents** arka planda otonom çalışıyor, **BugBot** codebase'i sürekli tarıyor, **Design Mode** tarayıcıdaki UI elementlerini seçip ajanlara bağlam olarak vermeni sağlıyor. **MCP** ve **hooks** desteği ile Cursor veritabanı, dokümantasyon ve API'lara doğrudan bağlanabiliyor.

  ## Modeller

  | Model | Kullanım |
  |---|---|
  | Composer 2.5 | En yeni Cursor modeli (Kimi K2.5 tabanlı) |
  | Composer 2 | Hızlı inference, Mart 2026 |
  | Claude Opus 4.7 | Karmaşık agent workflow'ları |
  | Claude Sonnet 4.6 | Varsayılan kodlama |
  | GPT-5.5 | Alternatif frontier |

  ## Fiyatlandırma

  - **Free (Hobby)** — Sınırlı Agent ve Tab, günde ~50 yavaş istek
  - **Pro ($20/ay)** — Sınırsız Tab, Composer erişimi, tüm frontier modeller (Claude, GPT, Gemini), MCPs + Skills + Hooks
  - **Max ($200/ay)** — Arka plan bulut ajanları, öncelikli GPU erişimi, daha yüksek kullanım limitleri
  - **Business / Ultra** — Merkezi faturalama, admin, SSO, privacy modu

  ## Yetenekler

  - AI-native VS Code fork — eklentiler/temalar/kısayollar taşınıyor
  - Tab autocomplete (Supermaven destekli) — piyasada en hızlı
  - Composer 2.5 — çok dosyalı düzenleme (Kimi K2.5 tabanlı, Mayıs 2026)
  - Agent modu — planlar, yazar, test eder, düzeltir
  - Background Agents — paralel AI görevleri
  - BugBot — otomatik bug tespiti
  - MCP desteği
  - Proje çapında indeksleme

  ## Güçlü yanları

  - %30–40 daha hızlı kodlama
  - Bağlamı IDE rakiplerinden iyi koruyor
  - VS Code'dan 5 dakikalık geçiş
  - Composer 2.5 ile kodlama partneri hissi
  - Güçlü agentic workflow'lar

  ## Zayıf yanları

  - Fiyatlandırma tier'ları 2026'da değişti — Pro limiti yoğun kullanıcıları Max'a ($200/ay) zorluyor
  - Büyük codebase'lerde lag ve donma
  - Agent modu hızlı incelemesi zor değişiklikler yapabiliyor
  - Sadece GitHub — yerli GitLab desteği yok
  - Opus-yoğun workflow'larda token maliyeti hızla artıyor

  ## Ekosistem

  Cursor'un ekosistemi büyük ölçüde [Cursor Rules](/cursor-rules) etrafında: `.cursorrules` ve `.mdc` dosyaları ile her proje için AI davranışını şekillendirebilirsin. Nayomy'de **200 Cursor Kuralı** indexli — bir teknoloji için kural bul, projeye kopyala, Cursor'un nasıl davranacağını anında değiştir.
---

## What it does

Cursor is an AI-native code editor built by **Anysphere**. Founded in 2022 by a team of ex-OpenAI researchers, by 2026 it became the **most valuable AI developer tool company in history**: $2 billion annualized revenue, 2 million users, 1 million paying customers.

Cursor is fundamentally a **VS Code fork** — all extensions, themes, and keybindings carry over. But AI capabilities are woven into every part of the editor: Tab autocomplete, multi-file chat, autonomous agents.

In May 2026, **Cursor 3.0** (April 2, 2026) is the active platform with the Agents Window as a separate workspace and tiled multi-agent layouts. **Composer 2.5** (May 18, 2026) is the latest proprietary model — built on Moonshot's Kimi K2.5 with targeted reinforcement learning, scoring 79.8% on SWE-Bench Multilingual at $0.50/$2.50 per MTok. **Background Agents** run autonomously, **BugBot** continuously scans the codebase, and **Design Mode** lets you select UI elements in the browser to feed agents as context. **MCP** and **hooks** let Cursor connect directly to your database, docs, and APIs.

## Models

| Model | Usage |
|---|---|
| Composer 2.5 | Latest Cursor model (Kimi K2.5 base) |
| Composer 2 | Fast inference, March 2026 |
| Claude Opus 4.7 | Complex agent workflows |
| Claude Sonnet 4.6 | Default coding |
| GPT-5.5 | Alternate frontier |

## Pricing

- **Free (Hobby)** — Limited Agent and Tab, ~50 slow requests/day
- **Pro ($20/mo)** — Unlimited Tab, Composer access, all frontier models (Claude, GPT, Gemini), MCPs + Skills + Hooks
- **Max ($200/mo)** — Background cloud agents, priority GPU access, heavier usage limits
- **Business / Ultra** — Centralized billing, admin, SSO, privacy mode

## Capabilities

- AI-native VS Code fork — extensions/themes/keybindings carry over
- Tab autocomplete (Supermaven-powered) — fastest in market
- Composer 2.5 — multi-file editing (Kimi K2.5 base, May 2026)
- Agent mode — plans, writes, tests, fixes
- Background Agents — parallel AI tasks
- BugBot — automated bug detection
- MCP support
- Project-wide indexing

## Strengths

- 30–40% faster coding — measured productivity gains
- Maintains context better than any IDE rival
- 5-minute migration from VS Code
- Composer 2.5 feels like a coding partner, not autocomplete
- Strong agentic workflows

## Weaknesses

- Pricing tiers shifted in 2026 — Pro caps frustrate heavy users without Max ($200/mo)
- Performance issues in large codebases
- Agent mode can make sweeping changes hard to review
- GitHub only — no native GitLab support
- Token costs add up fast on Opus-heavy workflows

## Ecosystem

Cursor's ecosystem revolves around [Cursor Rules](/cursor-rules) — `.cursorrules` and `.mdc` files that shape AI behavior per project. Nayomy indexes **200 Cursor Rules** — find a rule for your stack, drop it into your project, and instantly change how Cursor behaves.
