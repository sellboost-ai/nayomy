---
name: "Claude"
slug: "claude"
tagline: "AI assistant for complex reasoning, coding, and long-context analysis"
tagline_tr: "Karmaşık akıl yürütme, kodlama ve uzun bağlamlı analiz için AI asistanı"
maker: "Anthropic"
maker_url: "https://anthropic.com"
website: "https://claude.ai"
category: "Chat AI"
category_tr: "Sohbet AI"
type: "chat"
launched: "March 2023"
pricing_tier: "free-paid"
price_min: 0
price_max: 200
color: "#CC785C"
models:
  - name: "Claude Opus 4.7"
    description: "Flagship reasoning model; best-in-class coding (64.3% SWE-bench Pro)"
    description_tr: "Amiral reasoning modeli; en iyi kodlama (%64.3 SWE-bench Pro)"
    context: "1M tokens"
    price_input: 5
    price_output: 25
  - name: "Claude Sonnet 4.6"
    description: "Balanced production model for most workloads"
    description_tr: "Çoğu workload için dengeli üretim modeli"
    context: "1M tokens"
    price_input: 3
    price_output: 15
  - name: "Claude Haiku 4.5"
    description: "Fast, low-cost model for high-volume tasks"
    description_tr: "Yüksek hacimli görevler için hızlı, düşük maliyetli model"
    context: "200K tokens"
    price_input: 1
    price_output: 5
pricing:
  - name: "Free"
    name_tr: "Ücretsiz"
    price: "$0"
    highlights: ["Sonnet access with daily limits", "Web + mobile apps"]
    highlights_tr: ["Günlük limitle Sonnet erişimi", "Web + mobil uygulamalar"]
  - name: "Pro"
    price: "$20/mo"
    highlights: ["Opus access", "Higher limits", "Projects", "Custom Skills"]
    highlights_tr: ["Opus erişimi", "Daha yüksek limitler", "Projects", "Özel Skill'ler"]
  - name: "Max"
    price: "$100–200/mo"
    highlights: ["5–20× Pro usage", "Priority access", "Early features"]
    highlights_tr: ["5–20× Pro kullanım", "Öncelikli erişim", "Erken özellikler"]
  - name: "Team / Enterprise"
    name_tr: "Takım / Enterprise"
    price: "Custom"
    highlights: ["Admin console", "SSO", "Centralized billing"]
    highlights_tr: ["Yönetici paneli", "SSO", "Merkezi faturalama"]
capabilities:
  - "Long-form writing with minimal editing required"
  - "Multi-file code editing and codebase analysis"
  - "1M-token context for entire codebases or document sets"
  - "Vision (image understanding) — but no image generation"
  - "Computer Use for autonomous task execution"
  - "MCP (Model Context Protocol) — connect to external systems"
  - "Skills — packaged behaviors and domain knowledge"
capabilities_tr:
  - "Minimum düzenleme gerektiren uzun yazım"
  - "Çok dosyalı kod düzenleme ve codebase analizi"
  - "Komple codebase veya doküman setleri için 1M-token bağlam"
  - "Vision (görsel anlama) — ancak görsel üretme yok"
  - "Otonom görev yürütme için Computer Use"
  - "MCP (Model Context Protocol) — dış sistemlere bağlantı"
  - "Skills — paketlenmiş davranışlar ve domain bilgisi"
strengths:
  - "Best-in-class coding performance (77.2% SWE-bench, 64.3% SWE-bench Pro)"
  - "Natural, high-quality writing — preferred by ~70% of developers in late-2025 surveys"
  - "Massive context windows (200K–1M tokens) without quality degradation"
  - "Strong safety posture and reduced hallucination on factual tasks"
  - "Growing MCP + Skills ecosystem for extensibility"
strengths_tr:
  - "En iyi sınıf kodlama performansı (%77.2 SWE-bench, %64.3 SWE-bench Pro)"
  - "Doğal, yüksek kaliteli yazım — geliştiricilerin ~%70'i tercih ediyor (2025 sonu anketleri)"
  - "Büyük bağlam pencereleri (200K–1M token), kalite kaybı olmadan"
  - "Güçlü güvenlik duruşu, faktüel görevlerde daha az halüsinasyon"
  - "Genişleyen MCP + Skills ekosistemi"
weaknesses:
  - "No native image, audio, or video generation"
  - "Higher API costs than GPT-5.5 and Gemini 2.5 Pro"
  - "Tighter rate limits on Pro tier vs ChatGPT Plus"
  - "Conservative on creative tasks due to safety filters"
  - "Smaller third-party marketplace vs GPT Store"
weaknesses_tr:
  - "Yerel görsel, ses veya video üretimi yok"
  - "GPT-5.5 ve Gemini 2.5 Pro'dan daha yüksek API maliyeti"
  - "ChatGPT Plus'a göre Pro tier'da daha sıkı rate limit'ler"
  - "Güvenlik filtreleri yüzünden yaratıcı görevlerde temkinli"
  - "GPT Store'a göre daha küçük üçüncü taraf marketplace"
ecosystem:
  - type: "skills"
    label: "Claude Skills"
    label_tr: "Claude Skill'leri"
    url: "/"
    count: 176
    note: "Markdown-defined behaviors and domain knowledge"
    note_tr: "Markdown tanımlı davranışlar ve domain bilgisi"
  - type: "mcp"
    label: "MCP Servers"
    label_tr: "MCP Sunucuları"
    url: "/mcp"
    count: 403
    note: "Protocol servers connecting Claude to external systems"
    note_tr: "Claude'u dış sistemlere bağlayan protokol sunucuları"
alternatives:
  - "chatgpt"
  - "gemini"
sources:
  - "https://platform.claude.com/docs/en/about-claude/pricing"
  - "https://www.cloudzero.com/blog/claude-api-pricing/"
  - "https://digitaldefynd.com/IQ/pros-cons-of-claude/"
  - "https://intuitionlabs.ai/articles/claude-vs-chatgpt-vs-copilot-vs-gemini-enterprise-comparison"
body_tr: |-
  ## Ne yapar?

  Claude, Anthropic tarafından geliştirilen bir AI asistanıdır. Karmaşık akıl yürütme, uzun yazım ve kod üretimi konularında öne çıkar. Web (claude.ai), mobil uygulama, API ve geliştirici araçları (Claude Code, IDE eklentileri) üzerinden erişilebilir.

  2026'da Anthropic, **Opus 4.7**, **Sonnet 4.6** ve **Haiku 4.5** olmak üzere üç ana modeli aktif tutuyor. Hepsi 200K–1M token bağlam destekliyor. Opus 4.7, kamuya açık modeller arasında SWE-bench Pro'da %64.3 ile en yüksek skoru elde ederek 2026'nın en iyi kodlama modeli konumuna geldi.

  Claude'un odaklandığı kullanım alanları: profesyonel yazım, kodlama, doküman analizi, araştırma sentezi ve uzun bağlamlı görevler. ChatGPT'den farklı olarak yerel görsel/ses/video üretimi sunmuyor — sadece metin ve görsel **anlama** yapıyor.

  ## Modeller

  | Model | Bağlam | Input | Output |
  |---|---|---|---|
  | Opus 4.7 | 1M token | $5/M | $25/M |
  | Sonnet 4.6 | 1M token | $3/M | $15/M |
  | Haiku 4.5 | 200K token | $1/M | $5/M |

  Tüm modellerde output/input fiyat oranı 5x. **Prompt caching** %90 indirim, **Batch API** %50 indirim sağlıyor.

  ## Fiyatlandırma

  - **Free** — Sonnet erişimi, günlük mesaj limiti
  - **Pro ($20/ay)** — Opus erişimi, projects, custom skills
  - **Max ($100–200/ay)** — 5–20× Pro kullanım, öncelikli erişim
  - **Team / Enterprise** — admin paneli, SSO, merkezi faturalama

  ## Yetenekler

  - Minimum düzenleme gerektiren uzun yazım
  - Çok dosyalı kod düzenleme ve codebase analizi
  - 1M token bağlamla bütün codebase veya doküman setleri
  - Vision: görsel anlama (üretme yok)
  - **Computer Use** — otonom görev yürütme
  - **MCP** ile dış sistemlere bağlantı
  - **Skills** ile paketlenmiş davranışlar

  ## Güçlü yanları

  - Kodlamada lider performans (%77.2 SWE-bench, %64.3 SWE-bench Pro)
  - Doğal yazım kalitesi — geliştiricilerin ~%70'i tercih ediyor
  - 1M token bağlam, kalite kaybı olmadan
  - Faktüel görevlerde düşük halüsinasyon oranı
  - Genişleyen MCP + Skills ekosistemi

  ## Zayıf yanları

  - Görsel/ses/video üretimi yok
  - GPT-5.5 ve Gemini 2.5 Pro'dan daha yüksek API maliyeti
  - Pro tier'da rate limit daha sıkı
  - Yaratıcı görevlerde temkinli yanıtlar
  - Üçüncü taraf marketplace küçük (GPT Store'a göre)

  ## Ekosistem

  Claude'un en güçlü yönlerinden biri, [Skills](/) ve [MCP](/mcp) ekosistemi. Nayomy'de **176 Skill** ve **403 MCP sunucusu** indexli — Claude'u domain bilgisi, workflow ve dış sistem entegrasyonlarıyla genişletebilirsin.
---

## What it does

Claude is an AI assistant developed by Anthropic. It stands out for complex reasoning, long-form writing, and code generation. Available via web (claude.ai), mobile app, API, and developer tools (Claude Code, IDE extensions).

In 2026, Anthropic keeps three primary models active: **Opus 4.7**, **Sonnet 4.6**, and **Haiku 4.5**. All support 200K–1M token context. Opus 4.7 scored 64.3% on SWE-bench Pro — the highest among publicly available models — making it the leading coding model of 2026.

Claude's focus areas: professional writing, coding, document analysis, research synthesis, and long-context tasks. Unlike ChatGPT, it does not generate images, audio, or video natively — it only **understands** text and images.

## Models

| Model | Context | Input | Output |
|---|---|---|---|
| Opus 4.7 | 1M tokens | $5/M | $25/M |
| Sonnet 4.6 | 1M tokens | $3/M | $15/M |
| Haiku 4.5 | 200K tokens | $1/M | $5/M |

All models have a 5x output/input price ratio. **Prompt caching** offers 90% off, **Batch API** 50% off.

## Pricing

- **Free** — Sonnet access, daily message cap
- **Pro ($20/mo)** — Opus access, Projects, custom Skills
- **Max ($100–200/mo)** — 5–20× Pro usage, priority access
- **Team / Enterprise** — admin console, SSO, centralized billing

## Capabilities

- Long-form writing with minimal editing
- Multi-file code editing and codebase analysis
- 1M-token context for whole codebases or document sets
- Vision: image understanding (no generation)
- **Computer Use** — autonomous task execution
- **MCP** for external system connections
- **Skills** for packaged behaviors

## Strengths

- Leading coding performance (77.2% SWE-bench, 64.3% SWE-bench Pro)
- Natural writing quality — preferred by ~70% of developers
- 1M-token context without quality drop
- Lower hallucination rate on factual tasks
- Growing MCP + Skills ecosystem

## Weaknesses

- No native image, audio, or video generation
- Higher API costs than GPT-5.5 and Gemini 2.5 Pro
- Tighter Pro-tier rate limits
- Conservative responses on creative tasks
- Smaller third-party marketplace (vs GPT Store)

## Ecosystem

One of Claude's strongest aspects is its [Skills](/) and [MCP](/mcp) ecosystem. Nayomy indexes **176 Skills** and **403 MCP servers** — extending Claude with domain knowledge, workflows, and external integrations.
