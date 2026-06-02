---
name: "GitHub Copilot"
slug: "github-copilot"
tagline: "AI pair programmer and coding agent for autocomplete, chat, code review, pull requests, CLI, and cloud development tasks"
tagline_tr: "Autocomplete, chat, code review, pull request, CLI ve cloud geliştirme görevleri için AI pair programmer ve coding agent"
maker: "GitHub"
maker_url: "https://github.com"
website: "https://github.com/features/copilot"
category: "Developer Tools"
category_tr: "Geliştirici Araçları"
type: "code"
launched: "June 2021"
pricing_tier: "free-paid"
price_min: 0
price_max: 100
color: "#24292F"
models:
  - name: "GPT-5.5"
    description: "Frontier OpenAI model available in Copilot for advanced chat, reasoning, editing, and agent workflows"
    description_tr: "Gelişmiş chat, reasoning, editing ve agent workflow'ları için Copilot içinde sunulan frontier OpenAI modeli"
    context: "Varies by mode"
    price_input: 0
    price_output: 0
  - name: "GPT-5.3-Codex"
    description: "OpenAI coding-focused model for agent mode, code generation, debugging, and software engineering tasks"
    description_tr: "Agent mode, kod üretimi, debugging ve yazılım geliştirme görevleri için OpenAI'nin kodlama odaklı modeli"
    context: "Varies by mode"
    price_input: 0
    price_output: 0
  - name: "Claude Sonnet 4.6"
    description: "Anthropic model available in Copilot for balanced coding, refactoring, explanations, and agentic edits"
    description_tr: "Dengeli kodlama, refactor, açıklama ve agentic düzenlemeler için Copilot içinde sunulan Anthropic modeli"
    context: "Varies by mode"
    price_input: 0
    price_output: 0
  - name: "Claude Opus 4.8"
    description: "High-intelligence Anthropic model for complex coding tasks, deep reasoning, and large refactors"
    description_tr: "Karmaşık kodlama görevleri, derin reasoning ve büyük refactor işleri için yüksek zekâlı Anthropic modeli"
    context: "Varies by mode"
    price_input: 0
    price_output: 0
  - name: "Gemini 3.5 Flash"
    description: "Google model available in Copilot for fast coding assistance, chat, and agent workflows"
    description_tr: "Hızlı kodlama yardımı, chat ve agent workflow'ları için Copilot içinde sunulan Google modeli"
    context: "Varies by mode"
    price_input: 0
    price_output: 0
  - name: "MAI-Code-1-Flash"
    description: "Microsoft coding model optimized for fast Copilot coding assistance and agent workflows"
    description_tr: "Hızlı Copilot kodlama yardımı ve agent workflow'ları için optimize edilmiş Microsoft kodlama modeli"
    context: "Varies by mode"
    price_input: 0
    price_output: 0
pricing:
  - name: "Free"
    name_tr: "Ücretsiz"
    price: "$0/mo"
    highlights:
      - "2,000 code completions per month"
      - "Limited chat and agent usage"
      - "AI Credits allowance for limited use"
      - "IDE, CLI, GitHub Mobile access"
    highlights_tr:
      - "Ayda 2,000 kod tamamlama"
      - "Sınırlı chat ve agent kullanımı"
      - "Sınırlı kullanım için AI Credit kotası"
      - "IDE, CLI, GitHub Mobile erişimi"
  - name: "Pro"
    name_tr: "Pro"
    price: "$10/mo"
    highlights:
      - "Unlimited code completions"
      - "$10 base + $5 flex = $15 monthly AI Credits"
      - "IDE chat, agent mode, code review, CLI"
      - "Individual developer use"
    highlights_tr:
      - "Sınırsız kod tamamlama"
      - "$10 base + $5 flex = aylık $15 AI Credits"
      - "IDE chat, agent mode, code review, CLI"
      - "Bireysel geliştirici kullanımı"
  - name: "Pro+"
    name_tr: "Pro+"
    price: "$39/mo"
    highlights:
      - "Premium model access (Opus, GPT-5.5)"
      - "$39 base + $31 flex = $70 monthly AI Credits"
      - "More agent and chat usage"
      - "Priority developer workflows"
    highlights_tr:
      - "Premium model erişimi (Opus, GPT-5.5)"
      - "$39 base + $31 flex = aylık $70 AI Credits"
      - "Daha fazla agent ve chat kullanımı"
      - "Öncelikli developer workflow'ları"
  - name: "Max"
    name_tr: "Max"
    price: "$100/mo"
    highlights:
      - "Highest individual tier"
      - "$100 base + $100 flex = $200 monthly AI Credits"
      - "Priority access to new models and features"
      - "For sustained, high-volume usage"
    highlights_tr:
      - "En yüksek bireysel katman"
      - "$100 base + $100 flex = aylık $200 AI Credits"
      - "Yeni model ve özelliklere öncelikli erişim"
      - "Sürekli, yüksek hacimli kullanım için"
  - name: "Business"
    name_tr: "Business"
    price: "$19/seat/mo"
    highlights:
      - "$19 monthly AI Credits per seat (pooled)"
      - "Organization policies, content exclusion"
      - "MCP policy controls"
      - "Admin management"
    highlights_tr:
      - "Koltuk başına aylık $19 AI Credits (havuzlanmış)"
      - "Organizasyon politikaları, content exclusion"
      - "MCP policy kontrolleri"
      - "Admin yönetimi"
  - name: "Enterprise"
    name_tr: "Enterprise"
    price: "$39/seat/mo"
    highlights:
      - "$39 monthly AI Credits per seat (pooled)"
      - "Everything in Business"
      - "Priority access to new models and features"
      - "Knowledge bases and advanced customization"
    highlights_tr:
      - "Koltuk başına aylık $39 AI Credits (havuzlanmış)"
      - "Business'taki her şey"
      - "Yeni model ve özelliklere öncelikli erişim"
      - "Knowledge base ve gelişmiş özelleştirme"
capabilities:
  - "Inline code completions and next edit suggestions across supported editors"
  - "Copilot Chat in IDEs, GitHub, GitHub Mobile, Windows Terminal, and CLI"
  - "Agent mode for multi-step local coding tasks inside IDE workflows"
  - "Copilot cloud agent for researching repositories, planning, changing code on branches, and creating pull requests"
  - "Copilot code review for reviewing selections, pull requests, and code changes"
  - "Model Context Protocol (MCP) support for connecting external tools and resources to agent mode"
  - "Multiple model choices from OpenAI, Anthropic, Google, Microsoft, and fine-tuned Copilot models"
  - "GitHub-native workflows for issues, pull requests, Actions, security alerts, and repository context"
capabilities_tr:
  - "Desteklenen editörlerde inline code completion ve next edit suggestions"
  - "IDE, GitHub, GitHub Mobile, Windows Terminal ve CLI içinde Copilot Chat"
  - "IDE workflow'ları içinde çok adımlı lokal kodlama görevleri için Agent mode"
  - "Repo araştırma, plan oluşturma, branch üzerinde kod değiştirme ve pull request açma için Copilot cloud agent"
  - "Selection, pull request ve kod değişikliklerini incelemek için Copilot code review"
  - "Dış araç ve kaynakları agent mode'a bağlamak için Model Context Protocol (MCP) desteği"
  - "OpenAI, Anthropic, Google, Microsoft ve fine-tuned Copilot modellerinden çoklu model seçimi"
  - "Issue, pull request, Actions, security alert ve repository context için GitHub-native workflow'lar"
strengths:
  - "Deepest native integration with GitHub repositories, issues, pull requests, Actions, security alerts, and code review"
  - "Works across many developer environments: VS Code, Visual Studio, JetBrains, Xcode, Neovim, Eclipse, Zed, CLI, GitHub, and mobile"
  - "Broad model selection: OpenAI, Anthropic, Google, Microsoft, and Copilot-tuned models"
  - "Strong for everyday developer productivity: autocomplete, edits, explanations, tests, refactors, and pull request help"
  - "Copilot cloud agent turns GitHub issues and repository tasks into branch-based implementation workflows"
  - "Business and Enterprise plans provide policy controls, content exclusion, audit/admin features, and pooled usage"
strengths_tr:
  - "GitHub repo, issue, pull request, Actions, security alert ve code review ile en derin yerel entegrasyon"
  - "Birçok geliştirici ortamında çalışır: VS Code, Visual Studio, JetBrains, Xcode, Neovim, Eclipse, Zed, CLI, GitHub ve mobil"
  - "Geniş model seçimi: OpenAI, Anthropic, Google, Microsoft ve Copilot-tuned modeller"
  - "Günlük geliştirici verimliliğinde güçlü: autocomplete, düzenleme, açıklama, test, refactor ve PR yardımı"
  - "Copilot cloud agent, GitHub issue ve repo görevlerini branch tabanlı implementation workflow'larına dönüştürür"
  - "Business ve Enterprise planları policy control, content exclusion, audit/admin ve pooled usage sunar"
weaknesses:
  - "June 2026 AI Credits transition made cost modeling more complex than the old subscription model"
  - "Code completions remain free; everything else (chat, agent, review, cloud agent) consumes credits"
  - "Not every model is available in every mode, plan, region, or organization policy"
  - "Cloud agent and agent mode still require careful human review before merging code"
  - "New sign-ups for Pro/Pro+/Max have been paused since April 20, 2026 (existing users can upgrade)"
  - "Free plan is useful for testing but limited for serious professional usage"
  - "Behavior can differ across IDE chat, agent mode, cloud agent, CLI, and GitHub.com surfaces"
weaknesses_tr:
  - "Haziran 2026 AI Credits geçişi maliyet modelini eski abonelik mantığından daha karmaşık hale getirdi"
  - "Kod tamamlamalar ücretsiz kalıyor; geri kalan (chat, agent, review, cloud agent) kredi yiyor"
  - "Her model her modda, planda, bölgede veya organizasyon politikasında sunulmayabilir"
  - "Cloud agent ve agent mode tarafından üretilen kod merge edilmeden önce dikkatli insan review'ü gerektirir"
  - "Pro/Pro+/Max yeni kayıt 20 Nisan 2026'dan beri durdurulmuş (mevcut kullanıcılar upgrade yapabilir)"
  - "Free plan deneme için faydalı ama ciddi profesyonel kullanımda sınırlı"
  - "IDE chat, agent mode, cloud agent, CLI ve GitHub.com yüzeyleri arasında davranış farklılaşabilir"
ecosystem:
  - type: "ide"
    label: "IDE Integrations"
    label_tr: "IDE Entegrasyonları"
    url: "https://docs.github.com/en/copilot"
    count: 9
    note: "Copilot works in VS Code, Visual Studio, JetBrains IDEs, Xcode, Neovim, Eclipse, Zed, SQL Server Management Studio, and more"
    note_tr: "Copilot; VS Code, Visual Studio, JetBrains IDE'leri, Xcode, Neovim, Eclipse, Zed, SQL Server Management Studio ve daha fazlasında çalışır"
  - type: "cloud-agent"
    label: "Copilot Cloud Agent"
    label_tr: "Copilot Cloud Agent"
    url: "https://docs.github.com/en/copilot/concepts/agents/cloud-agent/about-cloud-agent"
    count: 1
    note: "Autonomous GitHub-hosted coding agent that researches repos, plans changes, edits branches, runs checks, and opens pull requests"
    note_tr: "Repo araştıran, değişiklik planlayan, branch düzenleyen, kontroller çalıştıran ve pull request açan GitHub-hosted otonom coding agent"
  - type: "agent-mode"
    label: "Agent Mode"
    label_tr: "Agent Mode"
    url: "https://docs.github.com/en/copilot/tutorials/enhance-agent-mode-with-mcp"
    count: 1
    note: "IDE-based agentic mode for multi-step coding tasks with MCP-powered external context"
    note_tr: "MCP destekli dış bağlamla çok adımlı kodlama görevleri için IDE tabanlı agentic mod"
  - type: "mcp"
    label: "MCP Support"
    label_tr: "MCP Desteği"
    url: "https://docs.github.com/en/copilot/tutorials/enhance-agent-mode-with-mcp"
    count: 1
    note: "Model Context Protocol lets Copilot agent mode connect to external tools and resources"
    note_tr: "Model Context Protocol, Copilot agent mode'un dış araç ve kaynaklara bağlanmasını sağlar"
  - type: "cli"
    label: "Copilot CLI"
    label_tr: "Copilot CLI"
    url: "https://github.com/github/copilot-cli"
    count: 1
    note: "Command-line Copilot experience for building, debugging, and understanding code through natural language"
    note_tr: "Doğal dil ile kod geliştirme, debugging ve kod anlama için command-line Copilot deneyimi"
  - type: "code-review"
    label: "Copilot Code Review"
    label_tr: "Copilot Code Review"
    url: "https://docs.github.com/en/copilot/concepts/agents/code-review"
    count: 1
    note: "AI-assisted review for code selections and pull requests (runs on GitHub Actions as of June 2026)"
    note_tr: "Kod selection'ları ve pull request'ler için AI destekli review (Haziran 2026'dan itibaren GitHub Actions üzerinde çalışıyor)"
  - type: "platform"
    label: "GitHub Platform"
    label_tr: "GitHub Platformu"
    url: "https://github.com"
    count: 1
    note: "Repository, issue, pull request, Actions, security, and organization context that makes Copilot GitHub-native"
    note_tr: "Copilot'u GitHub-native yapan repository, issue, pull request, Actions, security ve organization context"
alternatives:
  - "claude-code"
  - "cursor"
  - "windsurf"
  - "v0"
  - "lovable"
sources:
  - "https://github.com/features/copilot"
  - "https://github.com/features/copilot/plans"
  - "https://docs.github.com/en/copilot/get-started/plans"
  - "https://docs.github.com/en/copilot/concepts/billing/individual-plans"
  - "https://docs.github.com/en/copilot/reference/ai-models/supported-models"
  - "https://docs.github.com/en/copilot/reference/copilot-billing/models-and-pricing"
  - "https://github.blog/news-insights/company-news/github-copilot-is-moving-to-usage-based-billing/"
  - "https://docs.github.com/en/copilot/concepts/agents/cloud-agent/about-cloud-agent"
body_tr: |-
  ## Ne yapar?

  GitHub Copilot, GitHub tarafından geliştirilen AI pair programmer ve coding agent ürünüdür. İlk çıkışında daha çok autocomplete ve kod önerisi aracı olarak bilinirken, Haziran 2026 itibarıyla Copilot çok daha geniş bir geliştirici platformuna dönüşmüştür: inline completion, next edit suggestions, IDE chat, agent mode, cloud agent, code review, CLI, GitHub Mobile, pull request açıklamaları, issue workflow'ları ve MCP bağlantıları sunar.

  Copilot'un en büyük farkı, doğrudan GitHub ekosisteminin içine gömülü olmasıdır. Repo, issue, pull request, Actions, security alert, branch, commit ve organizasyon politikaları Copilot workflow'unun doğal parçasıdır. Bu yüzden Copilot sadece "kod yazan chatbot" değil; GitHub üzerinde çalışan geliştirici verimlilik ve agentic yazılım workflow katmanıdır.

  Haziran 2026 itibarıyla Copilot birçok model sağlayıcısını destekler. OpenAI modelleri, Anthropic Claude modelleri, Google Gemini modelleri, Microsoft modelleri ve Copilot'a özel fine-tuned modeller aynı ürün içinde kullanılabilir. Model erişimi plan, mod, organizasyon politikası ve bölgeye göre değişebilir.

  ## Modeller

  **GPT-5.5** — Gelişmiş chat, reasoning, editing ve agent workflow'ları için frontier OpenAI modeli.

  **GPT-5.3-Codex** — Agent mode, kod üretimi, debugging ve yazılım geliştirme görevleri için OpenAI'nin kodlama odaklı modeli.

  **Claude Sonnet 4.6** — Dengeli kodlama, refactor, açıklama ve agentic düzenlemeler için Copilot içinde sunulan Anthropic modeli.

  **Claude Opus 4.8** — Karmaşık kodlama görevleri, derin reasoning ve büyük refactor işleri için yüksek zekâlı Anthropic modeli.

  **Gemini 3.5 Flash** — Hızlı kodlama yardımı, chat ve agent workflow'ları için Google modeli.

  **MAI-Code-1-Flash** — Hızlı Copilot kodlama yardımı ve agent workflow'ları için optimize edilmiş Microsoft kodlama modeli.

  Copilot, tek bir model ürünü değildir. Kullanıcı, desteklenen plan ve modlarda farklı modeller arasında seçim yapabilir veya auto model selection kullanabilir.

  Copilot'ta model fiyatları klasik API tablosu gibi input/output token başına doğrudan kullanıcıya sunulmaz. Haziran 2026 itibarıyla chat, agent mode, code review, cloud agent, CLI ve Copilot Apps gibi özellikler GitHub AI Credits tüketir. 1 AI Credit = $0.01 USD. Code completions ve next edit suggestions aboneliğe dahildir, kredi yemez.

  ## Fiyatlandırma

  - **Free ($0/ay)** — sınırlı chat/agent, ayda 2,000 completion, IDE, CLI, GitHub Mobile erişimi
  - **Pro ($10/ay)** — sınırsız completion, **$10 base + $5 flex = $15** aylık AI Credits, IDE chat, agent mode, code review, CLI
  - **Pro+ ($39/ay)** — premium model erişimi, **$39 base + $31 flex = $70** aylık AI Credits, daha fazla agent/chat
  - **Max ($100/ay)** — en yüksek bireysel katman, **$100 base + $100 flex = $200** aylık AI Credits, yeni özelliklere öncelikli erişim
  - **Business ($19/koltuk/ay)** — koltuk başına $19 havuzlanmış AI Credits, organizasyon yönetimi, policy controls
  - **Enterprise ($39/koltuk/ay)** — koltuk başına $39 havuzlanmış AI Credits, Business + enterprise kontroller, knowledge base

  Haziran 2026 itibarıyla Copilot, premium request mantığından GitHub AI Credits sistemine geçmiştir. Pro/Pro+/Max planlarında "base" + "flex" allotment yapısı vardır: base krediler aylık başlangıçta tükenir, flex krediler ek kullanım için kullanılır. Annual planlar emekli ediliyor; mevcut annual aboneler süreleri bitene kadar PRU (premium request unit) sistemiyle devam eder.

  Önemli not: **20 Nisan 2026'dan itibaren Pro/Pro+/Max planlarına yeni kayıt geçici olarak durdurulmuş.** Mevcut kullanıcılar plan değiştirebilir.

  ## Yetenekler

  - Inline code completion
  - Next edit suggestions
  - IDE içinde Copilot Chat
  - GitHub.com ve GitHub Mobile içinde chat
  - Windows Terminal ve Copilot CLI
  - Agent mode ile lokal çok adımlı kodlama görevleri
  - Copilot cloud agent ile GitHub üzerinde branch bazlı otonom görev yürütme
  - Pull request açıklaması ve code review
  - Issue, PR, security alert ve Actions workflow entegrasyonu
  - MCP ile dış araç ve kaynaklara bağlantı
  - Çoklu model seçimi (OpenAI, Anthropic, Google, Microsoft)
  - Organization policy, content exclusion ve admin kontrolleri

  ## Güçlü yanları

  - GitHub repo, issue, PR, branch, commit ve Actions bağlamına doğal erişim çok güçlü
  - En geniş geliştirici ortamlarından birinde çalışır: VS Code, Visual Studio, JetBrains, Xcode, Neovim, Eclipse, Zed, CLI, GitHub ve mobil
  - Tek modelle sınırlı değil; OpenAI, Anthropic, Google, Microsoft ve Copilot-tuned modelleri destekler
  - Günlük geliştirici verimliliğinde çok güçlü: autocomplete, açıklama, refactor, test, edit ve PR yardımı
  - Copilot cloud agent, basit issue ve repo görevlerini branch/pull request workflow'una dönüştürebilir
  - Business ve Enterprise tarafında politika, content exclusion, pooled usage ve admin kontrolleri olgunlaşmış
  - GitHub üzerinde çalışan ekipler için context switching'i azaltır

  ## Zayıf yanları

  - Haziran 2026 AI Credits geçişiyle maliyet modeli eski basit abonelik mantığından daha karmaşık hale geldi
  - Kod tamamlama ücretsiz kalıyor; geri kalan her şey (chat, agent, review, cloud agent) kredi tüketiyor
  - Model erişimi plan, mod, bölge ve organizasyon politikasına göre değişebilir
  - Cloud agent ve agent mode tarafından üretilen kod mutlaka insan review'ünden geçmelidir
  - 20 Nisan 2026'dan itibaren Pro/Pro+/Max planlarına yeni kayıt durdurulmuş
  - Free plan profesyonel yoğun kullanım için sınırlı
  - Farklı yüzeylerde davranış değişebilir: IDE chat, agent mode, cloud agent, CLI ve GitHub.com aynı deneyimi birebir sunmaz
  - GitHub dışındaki ekipler için avantajı GitHub kullanan ekiplere göre daha zayıf

  ## Ekosistem

  GitHub Copilot ekosistemi, klasik bir chatbot ekosisteminden çok GitHub-native geliştirici workflow ekosistemidir.

  **IDE Integrations**, Copilot'u VS Code, Visual Studio, JetBrains IDE'leri, Xcode, Neovim, Eclipse, Zed, SQL Server Management Studio ve diğer desteklenen ortamlara taşır. Bu katman, autocomplete, chat, edit ve agent mode kullanımının ana merkezidir.

  **Copilot Cloud Agent**, GitHub üzerinde çalışan otonom coding agent katmanıdır. Repo araştırabilir, implementation plan hazırlayabilir, branch üzerinde kod değişiklikleri yapabilir, test/lint çalıştırabilir, commit üretebilir ve gerektiğinde pull request açabilir. IDE agent mode'dan farklı olarak GitHub Actions destekli geçici cloud geliştirme ortamında çalışır.

  **Agent Mode**, IDE içinde çalışan daha lokal agentic moddur. Kullanıcının mevcut geliştirme ortamında çok adımlı kodlama görevleri yapabilir. MCP ile birlikte kullanıldığında dış kaynaklara ve araçlara erişerek daha güçlü agentic loop'lar kurabilir.

  **MCP Support**, Copilot agent mode'un dış araç ve kaynaklara bağlanmasını sağlar. Bu sayede internal docs, API'ler, veritabanları, issue tracker'lar veya özel servisler Copilot workflow'una dahil edilebilir.

  **Copilot CLI**, terminal içinde doğal dille kod geliştirme, debugging ve komut satırı yardımını mümkün kılar. GitHub workflow'larıyla entegre bir command-line coding assistant olarak konumlanır.

  **Copilot Code Review**, kod selection'ları ve pull request'ler için AI destekli review sunar. Haziran 2026'dan itibaren GitHub Actions üzerinde çalışan agentic mimariye geçti, yani PR review'ları Actions dakikalarını da tüketir.

  **GitHub Platform**, Copilot'un en büyük ekosistem avantajıdır. Repository, issue, pull request, Actions, security alert, organization policy, audit ve admin kontrolleri Copilot'u bağımsız bir AI coding aracından ziyade GitHub'ın içine gömülü bir geliştirici otomasyon katmanına dönüştürür.
---

## What it does

GitHub Copilot is GitHub's AI pair programmer and coding agent product. It started as an autocomplete and code suggestion tool, but as of June 2026 Copilot has expanded into a much broader developer platform: inline completions, next edit suggestions, IDE chat, agent mode, cloud agent, code review, CLI, GitHub Mobile, pull request summaries, issue workflows, and MCP connections.

Copilot's biggest differentiator is that it is embedded directly into the GitHub ecosystem. Repositories, issues, pull requests, Actions, security alerts, branches, commits, and organization policies are native parts of the Copilot workflow. This makes Copilot more than a "coding chatbot"; it is a developer productivity and agentic software workflow layer running on GitHub.

As of June 2026, Copilot supports multiple model providers. OpenAI models, Anthropic Claude models, Google Gemini models, Microsoft models, and Copilot-specific fine-tuned models can be used inside the same product. Model access can vary by plan, mode, organization policy, and region.

## Models

**GPT-5.5** — Frontier OpenAI model for advanced chat, reasoning, editing, and agent workflows.

**GPT-5.3-Codex** — OpenAI's coding-focused model for agent mode, code generation, debugging, and software engineering tasks.

**Claude Sonnet 4.6** — Anthropic model for balanced coding, refactoring, explanations, and agentic edits.

**Claude Opus 4.8** — High-intelligence Anthropic model for complex coding tasks, deep reasoning, and large refactors.

**Gemini 3.5 Flash** — Google model for fast coding assistance, chat, and agent workflows.

**MAI-Code-1-Flash** — Microsoft coding model optimized for fast Copilot coding assistance and agent workflows.

Copilot is not a single-model product. Users can choose between different models in supported plans and modes, or use auto model selection.

Copilot model costs are not exposed to users as a classic input/output token API table. As of June 2026, features such as chat, agent mode, code review, cloud agent, CLI, and Copilot Apps consume GitHub AI Credits. 1 AI Credit = $0.01 USD. Code completions and next edit suggestions remain included in subscriptions and do not consume credits.

## Pricing

- **Free ($0/mo)** — limited chat/agent, 2,000 completions per month, IDE, CLI, GitHub Mobile access
- **Pro ($10/mo)** — unlimited completions, **$10 base + $5 flex = $15** monthly AI Credits, IDE chat, agent mode, code review, CLI
- **Pro+ ($39/mo)** — premium model access, **$39 base + $31 flex = $70** monthly AI Credits, more agent/chat
- **Max ($100/mo)** — highest individual tier, **$100 base + $100 flex = $200** monthly AI Credits, priority access
- **Business ($19/seat/mo)** — $19 pooled AI Credits per seat, org management, policy controls
- **Enterprise ($39/seat/mo)** — $39 pooled AI Credits per seat, Business + enterprise controls, knowledge bases

As of June 2026, Copilot has moved from the premium request model to GitHub AI Credits. Pro/Pro+/Max plans have a "base + flex" allotment structure: base credits drain first, flex credits are used for overflow. Annual plans are being retired; existing annual subscribers continue with PRU (premium request unit) until expiration.

**Important note: New sign-ups for Pro/Pro+/Max plans have been paused since April 20, 2026.** Existing users can still upgrade.

## Capabilities

- Inline code completion
- Next edit suggestions
- Copilot Chat inside IDEs
- Chat on GitHub.com and GitHub Mobile
- Windows Terminal and Copilot CLI
- Agent mode for local multi-step coding tasks
- Copilot cloud agent for branch-based autonomous work on GitHub
- Pull request summaries and code review
- Integration with issues, PRs, security alerts, and Actions workflows
- MCP connections to external tools and resources
- Multi-model selection (OpenAI, Anthropic, Google, Microsoft)
- Organization policy, content exclusion, and admin controls

## Strengths

- Native access to GitHub repository, issue, PR, branch, commit, and Actions context is extremely strong
- Works across a wide range of developer environments: VS Code, Visual Studio, JetBrains, Xcode, Neovim, Eclipse, Zed, CLI, GitHub, and mobile
- Not limited to one model; supports OpenAI, Anthropic, Google, Microsoft, and Copilot-tuned models
- Very strong for everyday developer productivity: autocomplete, explanations, refactors, tests, edits, and PR help
- Copilot cloud agent can turn simple issues and repository tasks into branch/pull request workflows
- Business and Enterprise plans provide mature policy, content exclusion, pooled usage, and admin controls
- Reduces context switching for teams already working on GitHub

## Weaknesses

- The June 2026 AI Credits transition makes cost modeling more complex than the older simple subscription model
- Code completions remain free; everything else (chat, agent, review, cloud agent) consumes credits
- Model access can vary by plan, mode, region, and organization policy
- Code produced by cloud agent and agent mode must still be carefully reviewed by humans
- New sign-ups for Pro/Pro+/Max plans have been paused since April 20, 2026
- Free plan is limited for heavy professional use
- Behavior can differ across surfaces: IDE chat, agent mode, cloud agent, CLI, and GitHub.com do not provide identical experiences
- Its advantage is weaker for teams that do not use GitHub as their main development platform

## Ecosystem

The GitHub Copilot ecosystem is not a classic chatbot ecosystem; it is a GitHub-native developer workflow ecosystem.

**IDE Integrations** bring Copilot into VS Code, Visual Studio, JetBrains IDEs, Xcode, Neovim, Eclipse, Zed, SQL Server Management Studio, and other supported environments. This is the main layer for autocomplete, chat, edits, and agent mode.

**Copilot Cloud Agent** is the autonomous coding agent layer running on GitHub. It can research repositories, create implementation plans, make code changes on branches, run tests/lints, produce commits, and create pull requests when needed. Unlike IDE agent mode, it works in a GitHub Actions-powered ephemeral cloud development environment.

**Agent Mode** is the more local agentic mode inside IDEs. It can perform multi-step coding tasks in the user's development environment. When combined with MCP, it can connect to external resources and tools to complete stronger agentic loops.

**MCP Support** allows Copilot agent mode to connect to external tools and resources. Internal docs, APIs, databases, issue trackers, or custom services can be brought into Copilot workflows.

**Copilot CLI** enables natural-language coding, debugging, and command-line help in the terminal. It is positioned as a command-line coding assistant integrated with GitHub workflows.

**Copilot Code Review** provides AI-assisted review for code selections and pull requests. As of June 2026 it moved to an agentic architecture running on GitHub Actions, meaning PR reviews also consume Actions minutes.

**GitHub Platform** is Copilot's biggest ecosystem advantage. Repository, issue, pull request, Actions, security alert, organization policy, audit, and admin controls turn Copilot from a standalone AI coding tool into a developer automation layer embedded inside GitHub.
