---
name: "DeepSeek"
slug: "deepseek"
tagline: "Open-weight Chinese AI models for reasoning, coding, agents, and low-cost API workloads"
tagline_tr: "Reasoning, kodlama, agent'lar ve düşük maliyetli API workload'ları için açık ağırlıklı Çin AI modelleri"
maker: "DeepSeek"
maker_url: "https://www.deepseek.com"
website: "https://chat.deepseek.com"
category: "Chat AI"
category_tr: "Sohbet AI"
type: "chat"
launched: "July 2023"
pricing_tier: "free-paid"
price_min: 0
price_max: 0
color: "#4D6BFE"
models:
  - name: "DeepSeek-V4-Pro"
    description: "Flagship open-weight reasoning and agent model with 1M context and strong coding performance"
    description_tr: "1M bağlam ve güçlü kodlama performansı sunan amiral açık ağırlıklı reasoning ve agent modeli"
    context: "1M tokens"
    price_input: 0.435
    price_output: 0.87
  - name: "DeepSeek-V4-Flash"
    description: "Fast, economical V4 model for high-volume chat, reasoning, and simple agent tasks"
    description_tr: "Yüksek hacimli chat, reasoning ve basit agent görevleri için hızlı, ekonomik V4 modeli"
    context: "1M tokens"
    price_input: 0.14
    price_output: 0.28
  - name: "DeepSeek-V3.2-Speciale"
    description: "High-compute research model focused on advanced math, coding, and long-context reasoning"
    description_tr: "İleri matematik, kodlama ve uzun bağlamlı reasoning odaklı yüksek hesaplamalı araştırma modeli"
    context: "1M tokens"
    price_input: 0
    price_output: 0
pricing:
  - name: "Free Chat"
    name_tr: "Ücretsiz Chat"
    price: "$0"
    highlights: ["Free access via DeepSeek Chat", "Web and mobile apps", "Expert / Instant modes for V4"]
    highlights_tr: ["DeepSeek Chat üzerinden ücretsiz erişim", "Web ve mobil uygulamalar", "V4 için Expert / Instant modları"]
  - name: "API — V4 Flash"
    name_tr: "API — V4 Flash"
    price: "$0.14/M input, $0.28/M output"
    highlights: ["Lowest-cost V4 API model", "1M context", "Thinking and non-thinking modes", "High concurrency"]
    highlights_tr: ["En düşük maliyetli V4 API modeli", "1M bağlam", "Thinking ve non-thinking modları", "Yüksek concurrency"]
  - name: "API — V4 Pro"
    name_tr: "API — V4 Pro"
    price: "$0.435/M input, $0.87/M output"
    highlights: ["Flagship V4 model", "1M context", "384K max output", "Agentic coding and reasoning"]
    highlights_tr: ["Amiral V4 modeli", "1M bağlam", "384K maksimum çıktı", "Agentic coding ve reasoning"]
  - name: "Enterprise / Self-hosted"
    name_tr: "Enterprise / Self-hosted"
    price: "Custom"
    highlights: ["Open weights on Hugging Face", "Private deployment options", "Custom inference stack"]
    highlights_tr: ["Hugging Face üzerinde açık ağırlıklar", "Özel deployment seçenekleri", "Özel inference altyapısı"]
capabilities:
  - "Long-context chat and reasoning with 1M-token context"
  - "Thinking and non-thinking modes in V4 models"
  - "Strong coding, STEM, and agentic reasoning performance"
  - "OpenAI-compatible and Anthropic-compatible API formats"
  - "Tool calls, JSON output, chat prefix completion, and FIM completion"
  - "Context caching with very low cache-hit pricing"
  - "Open weights for V4 models through Hugging Face"
capabilities_tr:
  - "1M token bağlamla uzun bağlamlı chat ve reasoning"
  - "V4 modellerinde thinking ve non-thinking modları"
  - "Güçlü kodlama, STEM ve agentic reasoning performansı"
  - "OpenAI-compatible ve Anthropic-compatible API formatları"
  - "Tool calls, JSON output, chat prefix completion ve FIM completion"
  - "Çok düşük cache-hit fiyatıyla context caching"
  - "Hugging Face üzerinden V4 modelleri için açık ağırlıklar"
strengths:
  - "Extremely aggressive API pricing compared with most frontier models"
  - "Open-weight V4 models with 1M context by default"
  - "Strong fit for coding agents, math, STEM, and long-context workloads"
  - "Easy migration through OpenAI and Anthropic API compatibility"
  - "Cache-hit pricing is unusually low for high-volume applications"
  - "Rapid model iteration from V3/R1 to V4 with strong open-model positioning"
strengths_tr:
  - "Çoğu frontier modele kıyasla aşırı agresif API fiyatlandırması"
  - "Varsayılan 1M bağlamlı açık ağırlıklı V4 modelleri"
  - "Coding agent'lar, matematik, STEM ve uzun bağlamlı workload'lar için güçlü uyum"
  - "OpenAI ve Anthropic API uyumluluğu sayesinde kolay migration"
  - "Yüksek hacimli uygulamalar için alışılmadık derecede düşük cache-hit fiyatı"
  - "V3/R1'den V4'e hızlı model iterasyonu ve güçlü open-model konumlandırması"
weaknesses:
  - "No native image, audio, or video generation in the core DeepSeek chat/API product"
  - "Consumer app monetization and usage limits are less transparent than API pricing"
  - "Fewer official productized workflows than ChatGPT, Claude, Gemini, or Cursor"
  - "No mature official marketplace comparable to GPT Store or Claude Skills"
  - "Geopolitical, compliance, and data-governance concerns may matter for enterprise buyers"
  - "Some legacy model names are scheduled for deprecation, requiring migration to V4 model IDs"
weaknesses_tr:
  - "Core DeepSeek chat/API ürününde yerel görsel, ses veya video üretimi yok"
  - "Tüketici uygulaması monetizasyonu ve kullanım limitleri API fiyatları kadar şeffaf değil"
  - "ChatGPT, Claude, Gemini veya Cursor'a göre daha az resmileşmiş workflow ürünü var"
  - "GPT Store veya Claude Skills benzeri olgun bir resmi marketplace yok"
  - "Kurumsal müşteriler için jeopolitik, uyumluluk ve veri yönetişimi endişeleri önemli olabilir"
  - "Bazı eski model adları kullanımdan kalkacağı için V4 model ID'lerine migration gerekir"
ecosystem:
  - type: "models"
    label: "DeepSeek V4 Open Weights"
    label_tr: "DeepSeek V4 Açık Ağırlıklar"
    url: "https://huggingface.co/collections/deepseek-ai/deepseek-v4"
    count: 2
    note: "Open-weight V4-Pro and V4-Flash models for custom deployment and research"
    note_tr: "Özel deployment ve araştırma için açık ağırlıklı V4-Pro ve V4-Flash modelleri"
  - type: "api"
    label: "DeepSeek API"
    label_tr: "DeepSeek API"
    url: "https://api-docs.deepseek.com"
    count: 2
    note: "OpenAI-compatible and Anthropic-compatible API with V4-Pro and V4-Flash"
    note_tr: "V4-Pro ve V4-Flash sunan OpenAI-compatible ve Anthropic-compatible API"
  - type: "research"
    label: "DeepSeek Research"
    label_tr: "DeepSeek Araştırma"
    url: "https://github.com/deepseek-ai"
    count: 8
    note: "Research releases including V4, R1, V3, Coder, VL, Math, and earlier LLMs"
    note_tr: "V4, R1, V3, Coder, VL, Math ve önceki LLM'leri içeren araştırma sürümleri"
alternatives:
  - "chatgpt"
  - "claude"
  - "gemini"
  - "grok"
sources:
  - "https://www.deepseek.com/en/"
  - "https://chat.deepseek.com"
  - "https://api-docs.deepseek.com"
  - "https://api-docs.deepseek.com/quick_start/pricing"
  - "https://huggingface.co/collections/deepseek-ai/deepseek-v4"
  - "https://github.com/deepseek-ai"
body_tr: |-
  ## Ne yapar?

  DeepSeek, Çin merkezli DeepSeek tarafından geliştirilen AI model ailesi ve sohbet asistanıdır. Web uygulaması, mobil uygulama, API ve açık ağırlıklı model sürümleriyle kullanılabilir. En güçlü konumlandığı alanlar: düşük maliyetli API kullanımı, uzun bağlamlı reasoning, kodlama, matematik/STEM, agentic görevler ve open-weight model deployment.

  Mayıs 2026 itibarıyla DeepSeek'in güncel API hattı **DeepSeek-V4-Pro** ve **DeepSeek-V4-Flash** modellerine odaklanıyor. Her iki model de 1M token bağlam, thinking / non-thinking modları, JSON output, tool calls, chat prefix completion ve FIM completion desteği sunuyor. Eski `deepseek-chat` ve `deepseek-reasoner` model adları V4-Flash'a yönlendiriliyor.

  DeepSeek'in farkı, çok agresif fiyatlandırma ile güçlü açık model performansını birleştirmesi. Claude Skills veya GPT Store gibi olgun bir resmi marketplace'i yok; bunun yerine güçlü yanı API uyumluluğu, açık ağırlıklar, agent araçlarına backend model olarak bağlanabilmesi ve düşük maliyetli inference.

  ## Modeller

  | Model | Bağlam | Input | Output |
  |---|---|---|---|
  | DeepSeek-V4-Pro | 1M token | $0.435/M | $0.87/M |
  | DeepSeek-V4-Flash | 1M token | $0.14/M | $0.28/M |
  | DeepSeek-V3.2-Speciale | 1M token | Research | Research |

  DeepSeek-V4-Pro, 1.6T toplam / 49B aktif parametreyle amiral model olarak konumlanır. Agentic coding, dünya bilgisi, matematik, STEM ve reasoning tarafında en güçlü DeepSeek modelidir. DeepSeek-V4-Flash ise 284B toplam / 13B aktif parametreyle daha hızlı ve ekonomik seçenektir.

  Cache-hit input fiyatları çok düşüktür: V4-Flash için $0.0028/M, V4-Pro için $0.003625/M.

  ## Fiyatlandırma

  - **Free Chat ($0)** — DeepSeek Chat üzerinden ücretsiz web ve mobil kullanım
  - **API — V4 Flash** — $0.14/M input, $0.28/M output
  - **API — V4 Pro** — $0.435/M input, $0.87/M output
  - **Enterprise / Self-hosted** — açık ağırlıklar, özel deployment, özel inference altyapısı

  DeepSeek'te ChatGPT Plus veya Claude Pro gibi net bir bireysel aylık plan ana ürün olarak öne çıkmıyor. Asıl ticari model API kullanımına ve açık ağırlıklı modellere dayanıyor.

  ## Yetenekler

  - 1M token uzun bağlam
  - Thinking ve non-thinking modları
  - Kodlama, matematik, STEM ve reasoning
  - Agentic coding ve tool-use senaryoları
  - OpenAI-compatible ve Anthropic-compatible API
  - JSON output ve tool calls
  - FIM completion ve chat prefix completion
  - Context caching
  - Açık ağırlıklarla self-hosted deployment

  ## Güçlü yanları

  - Frontier modellere kıyasla çok düşük API maliyeti
  - 1M context'i resmi V4 modellerinde varsayılan hale getirmesi
  - Açık ağırlıklar sayesinde self-hosting ve özel deployment imkânı
  - Kodlama, matematik, STEM ve agentic görevlerde güçlü performans
  - OpenAI/Anthropic API uyumluluğu ile kolay geçiş
  - Cache-hit fiyatlarının yüksek hacimli ürünler için çok ucuz olması

  ## Zayıf yanları

  - Yerel görsel, ses veya video üretimi ana DeepSeek ürününün parçası değil
  - Claude Skills, GPT Store veya Cursor marketplace gibi olgun bir resmi ekosistemi yok
  - Tüketici uygulaması limitleri API fiyatlandırması kadar net değil
  - Kurumsal kullanımda veri, regülasyon ve jeopolitik hassasiyetler gündeme gelebilir
  - Eski model adlarından V4 model ID'lerine migration gerektiriyor
  - Geliştirici deneyimi güçlü ama ürünleştirilmiş workflow sayısı Batılı rakiplere göre daha sınırlı

  ## Ekosistem

  DeepSeek'in ekosistemi, Claude'daki Skills veya Cursor'daki rules gibi paketlenmiş son kullanıcı eklentilerinden çok **model/API/open-weight** ekseninde gelişiyor.

  **DeepSeek API**, OpenAI ve Anthropic formatlarıyla uyumlu çalışır. Bu sayede mevcut OpenAI SDK, Anthropic uyumlu araçlar, coding agent'lar ve üçüncü taraf agent sistemlerinde DeepSeek'i backend model olarak kullanmak mümkündür.

  **DeepSeek V4 Open Weights**, Hugging Face üzerinden yayınlanan V4-Pro ve V4-Flash modelleriyle özel deployment, araştırma ve self-hosted kullanım senaryoları sunar.

  Agent entegrasyonları tarafında DeepSeek, Claude Code, GitHub Copilot, OpenCode ve benzeri uyumlu agent/coding araçlarında backend model olarak kullanılabilir. Bu, DeepSeek'i doğrudan bir marketplace ürünü değil, birçok agent aracının altında çalışan güçlü ve düşük maliyetli **model katmanı** haline getirir.
---

## What it does

DeepSeek is a Chinese AI model family and chat assistant developed by DeepSeek. Available through a web app, mobile app, API, and open-weight model releases. Its strongest positioning is low-cost API usage, long-context reasoning, coding, math/STEM, agentic tasks, and open-weight model deployment.

As of May 2026, DeepSeek's current API lineup focuses on **DeepSeek-V4-Pro** and **DeepSeek-V4-Flash**. Both support 1M-token context, thinking / non-thinking modes, JSON output, tool calls, chat prefix completion, and FIM completion. The older `deepseek-chat` and `deepseek-reasoner` names are routed to V4-Flash and are scheduled for deprecation.

DeepSeek's main differentiator is combining very aggressive pricing with strong open-model performance. It does not have a mature official marketplace like Claude Skills or GPT Store; instead, its strength is API compatibility, open weights, backend-model integration with agent tools, and low-cost inference.

## Models

| Model | Context | Input | Output |
|---|---|---|---|
| DeepSeek-V4-Pro | 1M tokens | $0.435/M | $0.87/M |
| DeepSeek-V4-Flash | 1M tokens | $0.14/M | $0.28/M |
| DeepSeek-V3.2-Speciale | 1M tokens | Research | Research |

DeepSeek-V4-Pro is positioned as the flagship model with 1.6T total / 49B active parameters. It is DeepSeek's strongest model for agentic coding, world knowledge, math, STEM, and reasoning. DeepSeek-V4-Flash uses 284B total / 13B active parameters and is the faster, more economical option.

Cache-hit input pricing is extremely low: $0.0028/M for V4-Flash and $0.003625/M for V4-Pro.

## Pricing

- **Free Chat ($0)** — free web and mobile usage via DeepSeek Chat
- **API — V4 Flash** — $0.14/M input, $0.28/M output
- **API — V4 Pro** — $0.435/M input, $0.87/M output
- **Enterprise / Self-hosted** — open weights, private deployment, custom inference infrastructure

DeepSeek does not primarily promote a universal consumer monthly plan like ChatGPT Plus or Claude Pro. Its commercial model is centered on API usage and open-weight models.

## Capabilities

- 1M-token long context
- Thinking and non-thinking modes
- Coding, math, STEM, and reasoning
- Agentic coding and tool-use scenarios
- OpenAI-compatible and Anthropic-compatible API
- JSON output and tool calls
- FIM completion and chat prefix completion
- Context caching
- Self-hosted deployment through open weights

## Strengths

- Very low API cost compared with frontier models
- Makes 1M context standard across official V4 models
- Open weights enable self-hosting and private deployment
- Strong performance for coding, math, STEM, and agentic tasks
- Easy migration through OpenAI/Anthropic API compatibility
- Cache-hit pricing is extremely cheap for high-volume products

## Weaknesses

- Native image, audio, or video generation is not part of the core DeepSeek product
- No mature official ecosystem like Claude Skills, GPT Store, or Cursor marketplace
- Consumer app limits are less transparent than API pricing
- Enterprise use may raise data, regulatory, and geopolitical concerns
- Migration is required from legacy model names to V4 model IDs
- Developer experience is strong, but productized workflows are fewer than Western competitors

## Ecosystem

DeepSeek's ecosystem is built more around models, APIs, and open weights than packaged end-user extensions like Claude Skills or Cursor rules.

**DeepSeek API** works with OpenAI and Anthropic formats. This makes it possible to use DeepSeek as a backend model inside existing OpenAI SDKs, Anthropic-compatible tools, coding agents, and third-party agent systems.

**DeepSeek V4 Open Weights** provide V4-Pro and V4-Flash releases on Hugging Face for private deployment, research, and self-hosted usage.

Agent integrations let DeepSeek act as the backend model for compatible agent and coding tools such as Claude Code, GitHub Copilot, OpenCode, and similar systems. This makes DeepSeek less of a direct marketplace product and more of a powerful, low-cost **model layer** underneath many agent workflows.
