---
name: "Grok"
slug: "grok"
tagline: "Real-time AI assistant with X-integrated search, coding, and multimodal generation"
tagline_tr: "X entegrasyonlu arama, kodlama ve multimodal üretim sunan gerçek zamanlı AI asistanı"
maker: "xAI"
maker_url: "https://x.ai"
website: "https://grok.com"
category: "Chat AI"
category_tr: "Sohbet AI"
type: "chat"
launched: "November 2023"
pricing_tier: "free-paid"
price_min: 0
price_max: 300
color: "#000000"
models:
  - name: "Grok 4.3"
    description: "Flagship model with 1M context, configurable reasoning, vision, and strong agentic tool calling"
    description_tr: "1M bağlam, yapılandırılabilir reasoning, vision ve güçlü agentic tool calling sunan amiral model"
    context: "1M tokens"
    price_input: 1.25
    price_output: 2.5
  - name: "Grok Build 0.1"
    description: "Coding-focused model trained for agentic software engineering and terminal workflows"
    description_tr: "Agentic yazılım geliştirme ve terminal workflow'ları için eğitilmiş kodlama modeli"
    context: "256K tokens"
    price_input: 1
    price_output: 2
  - name: "Grok 4.1 Fast"
    description: "Low-cost fast model with 2M-token context for high-volume reasoning workloads"
    description_tr: "Yüksek hacimli reasoning workload'ları için 2M token bağlamlı düşük maliyetli hızlı model"
    context: "2M tokens"
    price_input: 0.2
    price_output: 0.5
pricing:
  - name: "Free"
    name_tr: "Ücretsiz"
    price: "$0/mo"
    highlights: ["Real-time web and X search", "Voice mode", "Connectors", "Generous free limits"]
    highlights_tr: ["Gerçek zamanlı web ve X araması", "Voice mode", "Connectors", "Cömert ücretsiz limitler"]
  - name: "SuperGrok Lite"
    price: "$10/mo"
    highlights: ["Cheapest paid Grok plan", "Higher limits than Free", "Core Grok features"]
    highlights_tr: ["En ucuz ücretli Grok planı", "Free plana göre daha yüksek limitler", "Temel Grok özellikleri"]
  - name: "SuperGrok"
    price: "$30/mo"
    highlights: ["Grok 4 access", "Higher rate limits", "Expert mode", "Image and video generation"]
    highlights_tr: ["Grok 4 erişimi", "Daha yüksek rate limit'ler", "Expert mode", "Görsel ve video üretimi"]
  - name: "X Premium+"
    price: "$40/mo"
    highlights: ["Grok access inside X", "X platform premium features", "Ad-free X experience"]
    highlights_tr: ["X içinde Grok erişimi", "X platform premium özellikleri", "Reklamsız X deneyimi"]
  - name: "SuperGrok Heavy"
    price: "$300/mo"
    highlights: ["Highest consumer tier", "Grok 4 Heavy multi-agent mode", "Early frontier features"]
    highlights_tr: ["En yüksek bireysel katman", "Grok 4 Heavy multi-agent mode", "Frontier özelliklere erken erişim"]
  - name: "Business / Enterprise"
    name_tr: "Business / Enterprise"
    price: "Custom"
    highlights: ["Team seat management", "Consolidated billing", "SSO", "Custom data retention"]
    highlights_tr: ["Takım koltuk yönetimi", "Merkezi faturalama", "SSO", "Özel veri saklama"]
capabilities:
  - "Real-time web and X search for current information"
  - "Long-context reasoning with Grok 4.3 up to 1M tokens"
  - "Vision: image understanding with text output"
  - "Function calling, structured outputs, and server-side tool use"
  - "Remote MCP tools for connecting Grok to external systems"
  - "Grok Build CLI for agentic coding with skills, plugins, hooks, and MCP servers"
  - "Imagine API for image and video generation and editing"
capabilities_tr:
  - "Güncel bilgi için gerçek zamanlı web ve X araması"
  - "Grok 4.3 ile 1M token'a kadar uzun bağlamlı reasoning"
  - "Vision: metin çıktılı görsel anlama"
  - "Function calling, structured outputs ve server-side tool kullanımı"
  - "Grok'u dış sistemlere bağlamak için Remote MCP tools"
  - "Skills, plugins, hooks ve MCP servers ile agentic kodlama için Grok Build CLI"
  - "Görsel ve video üretimi/düzenleme için Imagine API"
strengths:
  - "Deep X integration for real-time social and news context"
  - "Highly competitive Grok 4.3 API pricing vs frontier models"
  - "Unifies chat, search, voice, image, video, and coding in one product family"
  - "Remote MCP support makes Grok extensible in agent workflows"
  - "Grok Build adds a Claude Code / Cursor-like coding-agent layer"
  - "OpenAI-compatible API path eases migration for developers"
strengths_tr:
  - "Gerçek zamanlı sosyal ve haber bağlamı için X ile derin entegrasyon"
  - "Frontier modellere kıyasla Grok 4.3 için çok rekabetçi API fiyatı"
  - "Chat, search, voice, image, video ve coding'i tek ürün ailesinde birleştirir"
  - "Remote MCP desteği, Grok'u agent workflow'larında genişletilebilir yapar"
  - "Grok Build, Claude Code / Cursor benzeri bir coding-agent katmanı ekler"
  - "OpenAI-compatible API yolu geliştiriciler için migration'ı kolaylaştırır"
weaknesses:
  - "Consumer subscription limits are less transparent than API pricing"
  - "Past controversies around public response behavior and safety"
  - "Smaller third-party marketplace than GPT Store or Claude Skills"
  - "Best features often require SuperGrok, X Premium+, or early-access plans"
  - "Model availability can vary by region, account, and console access"
  - "Creative and coding ecosystems are still maturing"
weaknesses_tr:
  - "Bireysel abonelik limitleri API fiyatlandırması kadar şeffaf değil"
  - "Kamusal yanıt davranışı ve güvenlik konusunda geçmiş tartışmaları var"
  - "GPT Store veya Claude Skills'e kıyasla üçüncü taraf marketplace daha küçük"
  - "En iyi özellikler çoğunlukla SuperGrok, X Premium+ veya early-access gerektirir"
  - "Model erişimi bölgeye, hesaba ve console erişimine göre değişebilir"
  - "Creative ve coding ekosistemi henüz olgunlaşma aşamasında"
ecosystem:
  - type: "coding-agent"
    label: "Grok Build"
    label_tr: "Grok Build"
    url: "https://x.ai/cli"
    count: 1
    note: "Terminal coding agent with skills, plugins, hooks, MCP servers, and subagents"
    note_tr: "Skills, plugins, hooks, MCP servers ve subagents destekli terminal coding agent"
  - type: "mcp"
    label: "Remote MCP Tools"
    label_tr: "Remote MCP Tools"
    url: "https://docs.x.ai/developers/tools/remote-mcp"
    count: 1
    note: "Server-side MCP connections for external tools and custom MCP servers"
    note_tr: "Dış araçlar ve özel MCP sunucuları için server-side MCP bağlantıları"
  - type: "creative"
    label: "Grok Imagine"
    label_tr: "Grok Imagine"
    url: "https://x.ai/api"
    count: 1
    note: "Image and video generation/editing through the Imagine API"
    note_tr: "Imagine API üzerinden görsel ve video üretimi/düzenleme"
alternatives:
  - "chatgpt"
  - "claude"
  - "gemini"
sources:
  - "https://x.ai/pricing"
  - "https://docs.x.ai/developers/models"
  - "https://docs.x.ai/developers/tools/remote-mcp"
  - "https://felloai.com/grok-pricing/"
  - "https://costgoat.com/pricing/grok-api"
body_tr: |-
  ## Ne yapar?

  Grok, xAI tarafından geliştirilen gerçek zamanlı bir AI asistanıdır. Chat, web araması, X araması, reasoning, kodlama, voice, görsel anlama, görsel üretimi ve video üretimi gibi alanları tek ürün ailesinde toplar. Web (grok.com), mobil uygulamalar, X entegrasyonu, API ve Grok Build CLI üzerinden kullanılabilir.

  Mayıs 2026 itibarıyla xAI'nin ana API modeli **Grok 4.3** olarak konumlanıyor. 1M token bağlam, text + image input, yapılandırılabilir reasoning, function calling, structured outputs ve Remote MCP Tools desteği sunuyor. Kodlama tarafında **Grok Build 0.1**, terminal içinde çalışan agentic coding deneyimi sağlar. Görsel ve video tarafında **Grok Imagine API** ayrı bir üretim katmanı olarak sunulur.

  Grok'un en belirgin farkı, X ile bağlantılı gerçek zamanlı bilgi akışı ve tek API altında chat, search, voice, image, video ve coding'i birleştirme iddiasıdır.

  ## Modeller

  | Model | Bağlam | Input | Output |
  |---|---|---|---|
  | Grok 4.3 | 1M token | $1.25/M | $2.50/M |
  | Grok Build 0.1 | 256K token | $1/M | $2/M |
  | Grok 4.1 Fast | 2M token | $0.20/M | $0.50/M |

  Grok 4.3, xAI'nin güncel flagship modelidir. Güçlü agentic tool calling, düşük halüsinasyon iddiası, configurable reasoning ve vision desteğiyle öne çıkar. Cached input tüm modellerde $0.20/M olarak uygulanır.

  ## Fiyatlandırma

  - **Free ($0/ay)** — gerçek zamanlı web + X araması, voice mode, connectors
  - **SuperGrok Lite ($10/ay)** — Free plana göre daha yüksek limitli en ucuz ücretli plan
  - **SuperGrok ($30/ay)** — Grok 4, daha yüksek rate limit'ler, Expert mode, görsel/video üretimi
  - **X Premium+ ($40/ay)** — X platform özellikleriyle birlikte Grok erişimi
  - **SuperGrok Heavy ($300/ay)** — en yüksek bireysel katman, Grok 4 Heavy, erken özellik erişimi
  - **Business / Enterprise** — takım yönetimi, merkezi faturalama, SSO, özel fiyatlandırma

  API tarafında Grok 4.3 için fiyat $1.25/M input ve $2.50/M output. Görsel/video üretiminde token yerine görüntü veya saniye bazlı ücretlendirme kullanılır.

  ## Yetenekler

  - Gerçek zamanlı web ve X araması
  - 1M token'a kadar uzun bağlamlı reasoning
  - Vision: görsel anlama
  - Function calling ve structured outputs
  - Remote MCP Tools ile dış sistem bağlantısı
  - Code execution, file/collection search ve server-side tools
  - Grok Build CLI ile agentic coding, skills, plugins, hooks ve MCP servers
  - Imagine API ile görsel ve video üretimi/düzenleme

  ## Güçlü yanları

  - X entegrasyonu sayesinde güncel sosyal/haber bağlamında güçlü
  - Grok 4.3 fiyat/performans açısından birçok frontier modele göre agresif
  - Chat, search, voice, image, video ve coding'i tek ekosistemde birleştiriyor
  - Remote MCP Tools ile agent workflow'larına bağlanabiliyor
  - Grok Build, Claude Code ve Cursor benzeri coding-agent deneyimi sunuyor
  - OpenAI-compatible API yaklaşımı migration'ı kolaylaştırıyor

  ## Zayıf yanları

  - Bireysel abonelik limitleri API fiyatları kadar net değil
  - Kamusal yanıt davranışı ve güvenlik konusunda geçmiş tartışmaları var
  - GPT Store, Claude Skills ve Cursor ekosistemlerine göre üçüncü taraf marketplace daha genç
  - En güçlü özelliklerin çoğu SuperGrok, X Premium+ veya early-access gerektirebilir
  - Model ve özellik erişimi bölgeye, hesaba ve console erişimine göre değişebilir
  - Creative ve coding ekosistemi hızlı gelişiyor ama henüz oturmuş standartlar sınırlı

  ## Ekosistem

  Grok'un ekosistemi üç ana parçadan oluşuyor: **Grok Build**, **Remote MCP Tools** ve **Grok Imagine**.

  **Grok Build**, terminal içinde çalışan bir coding agent'tır. Skills, plugins, hooks, AGENTS.md, MCP servers, subagents, plan mode ve code review gibi özellikleri destekler. Bu yönüyle Claude Code ve Cursor'a yakın bir geliştirici deneyimi sunar.

  **Remote MCP Tools**, Grok'u harici MCP sunucularına bağlamak için kullanılır. Bu sayede Grok, üçüncü taraf tool'ları veya özel şirket içi MCP server'ları üzerinden dış sistemlerle çalışabilir.

  **Grok Imagine**, xAI'nin görsel ve video üretim/düzenleme katmanıdır. Chat modelinden ayrı fiyatlandırılan bu katman, Grok'u sadece sohbet asistanı değil, multimodal üretim platformu haline getirir.
---

## What it does

Grok is a real-time AI assistant developed by xAI. It combines chat, web search, X search, reasoning, coding, voice, image understanding, image generation, and video generation into one product family. Available via grok.com, mobile apps, X integration, API, and the Grok Build CLI.

As of May 2026, xAI positions **Grok 4.3** as its primary API model. It supports 1M-token context, text + image input, configurable reasoning, function calling, structured outputs, and Remote MCP Tools. For coding, **Grok Build 0.1** powers a terminal-native agentic coding experience. For creative work, **Grok Imagine API** provides a separate image and video generation layer.

Grok's biggest differentiator is its real-time information layer connected to X and its attempt to unify chat, search, voice, image, video, and coding under one API.

## Models

| Model | Context | Input | Output |
|---|---|---|---|
| Grok 4.3 | 1M tokens | $1.25/M | $2.50/M |
| Grok Build 0.1 | 256K tokens | $1/M | $2/M |
| Grok 4.1 Fast | 2M tokens | $0.20/M | $0.50/M |

Grok 4.3 is xAI's current flagship model, focused on strong agentic tool calling, low-hallucination performance, configurable reasoning, and vision. Cached input is priced at $0.20/M across all current models.

## Pricing

- **Free ($0/mo)** — real-time web + X search, voice mode, connectors
- **SuperGrok Lite ($10/mo)** — cheapest paid plan with higher limits than Free
- **SuperGrok ($30/mo)** — Grok 4, higher rate limits, Expert mode, image/video generation
- **X Premium+ ($40/mo)** — Grok access bundled with X platform features
- **SuperGrok Heavy ($300/mo)** — highest individual tier, Grok 4 Heavy, early feature access
- **Business / Enterprise** — team management, consolidated billing, SSO, custom pricing

On the API side, Grok 4.3 is priced at $1.25/M input and $2.50/M output. Image and video generation use image- or second-based pricing rather than token pricing.

## Capabilities

- Real-time web and X search
- Long-context reasoning up to 1M tokens
- Vision: image understanding
- Function calling and structured outputs
- Remote MCP Tools for external system connections
- Code execution, file/collection search, and server-side tools
- Grok Build CLI with agentic coding, skills, plugins, hooks, and MCP servers
- Imagine API for image and video generation/editing

## Strengths

- Strong real-time social/news context through X integration
- Aggressive Grok 4.3 API pricing compared with many frontier models
- Combines chat, search, voice, image, video, and coding in one ecosystem
- Remote MCP Tools make Grok usable inside agent workflows
- Grok Build offers a Claude Code / Cursor-like coding-agent experience
- OpenAI-compatible API path makes migration easier

## Weaknesses

- Consumer subscription limits are less transparent than API pricing
- Past controversies around safety and public response behavior
- Smaller third-party marketplace than GPT Store, Claude Skills, or Cursor ecosystems
- Many of the best features may require SuperGrok, X Premium+, or early access
- Model and feature availability can vary by region, account, and console access
- Creative and coding ecosystems are growing fast but still have fewer mature standards

## Ecosystem

Grok's ecosystem has three main parts: **Grok Build**, **Remote MCP Tools**, and **Grok Imagine**.

**Grok Build** is a terminal-native coding agent. It supports skills, plugins, hooks, AGENTS.md, MCP servers, subagents, plan mode, code review, sandboxed execution, and headless mode. This gives Grok a developer experience closer to Claude Code and Cursor.

**Remote MCP Tools** let Grok connect to external MCP servers. This allows Grok to work with third-party tools or custom internal MCP servers for external system integration.

**Grok Imagine** is xAI's image and video generation/editing layer. Priced separately from chat models, it expands Grok from a chat assistant into a multimodal creation platform.
