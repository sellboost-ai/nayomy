---
name: "Claude Code"
slug: "claude-code"
tagline: "Agentic coding tool for building, editing, testing, reviewing, and automating software projects"
tagline_tr: "Yazılım projeleri geliştirme, düzenleme, test etme, review ve otomasyon için agentic coding aracı"
maker: "Anthropic"
maker_url: "https://anthropic.com"
website: "https://code.claude.com"
category: "Developer Tools"
category_tr: "Geliştirici Araçları"
type: "code"
launched: "February 2025"
pricing_tier: "paid"
price_min: 20
price_max: 200
color: "#CC785C"
models:
  - name: "Claude Opus 4.8"
    description: "Most intelligent Claude model for agents and coding, used for the hardest Claude Code tasks with fewer overlooked code flaws"
    description_tr: "En zor Claude Code görevleri için kullanılan, daha az gözden kaçan kod hatası olan en zeki Claude modeli"
    context: "1M tokens"
    price_input: 5
    price_output: 25
  - name: "Claude Sonnet 4.6"
    description: "Balanced default coding model for everyday software engineering, refactoring, tests, and bug fixes"
    description_tr: "Günlük yazılım geliştirme, refactor, test ve bug fix işleri için dengeli varsayılan kodlama modeli"
    context: "1M tokens"
    price_input: 3
    price_output: 15
  - name: "Claude Haiku 4.5"
    description: "Fast, cost-efficient model for lightweight coding tasks, automation, and high-volume workflows"
    description_tr: "Hafif kodlama görevleri, otomasyon ve yüksek hacimli workflow'lar için hızlı, düşük maliyetli model"
    context: "200K tokens"
    price_input: 1
    price_output: 5
pricing:
  - name: "Pro"
    name_tr: "Pro"
    price: "$20/mo"
    highlights:
      - "Claude Code access for individual developers"
      - "Access to Sonnet 4.6 and Haiku 4.5"
      - "5× free tier usage"
      - "Best for light coding sessions"
    highlights_tr:
      - "Bireysel geliştiriciler için Claude Code erişimi"
      - "Sonnet 4.6 ve Haiku 4.5 erişimi"
      - "Ücretsiz tier'ın 5 katı kullanım"
      - "Hafif kodlama oturumları için uygun"
  - name: "Max 5x"
    name_tr: "Max 5x"
    price: "$100/mo"
    highlights:
      - "5× Pro usage limits"
      - "Full Opus 4.8 access"
      - "Priority queue during peak hours"
      - "Best for daily heavy coding"
    highlights_tr:
      - "5× Pro kullanım limitleri"
      - "Tam Opus 4.8 erişimi"
      - "Yoğun saatlerde öncelikli sıra"
      - "Günlük yoğun kodlama için uygun"
  - name: "Max 20x"
    name_tr: "Max 20x"
    price: "$200/mo"
    highlights:
      - "20× Pro usage limits"
      - "Highest individual tier"
      - "Long agentic coding sessions"
      - "Early access to new features"
    highlights_tr:
      - "20× Pro kullanım limitleri"
      - "En yüksek bireysel katman"
      - "Uzun agentic coding oturumları"
      - "Yeni özelliklere erken erişim"
  - name: "Team"
    name_tr: "Team"
    price: "$25–125/seat/mo"
    highlights:
      - "Team Standard $25/seat, Premium $125/seat (5-seat min)"
      - "Claude Code + Claude Cowork included"
      - "Central billing, SSO, admin controls"
      - "Best for development teams"
    highlights_tr:
      - "Team Standard $25/koltuk, Premium $125/koltuk (5 koltuk min)"
      - "Claude Code + Claude Cowork dahil"
      - "Merkezi faturalama, SSO, admin kontrolleri"
      - "Geliştirme ekipleri için uygun"
  - name: "Enterprise"
    name_tr: "Enterprise"
    price: "Custom + usage"
    highlights:
      - "Seat price plus API-rate usage"
      - "Spend controls, audit logs, SCIM"
      - "Custom data retention"
      - "HIPAA-ready option"
    highlights_tr:
      - "Koltuk ücreti + API oranlarında kullanım"
      - "Harcama kontrolleri, audit logs, SCIM"
      - "Özel veri saklama"
      - "HIPAA-ready seçenek"
  - name: "API / Console"
    name_tr: "API / Console"
    price: "Usage-based"
    highlights:
      - "Token-based model pricing"
      - "Prompt caching (90% input cost reduction)"
      - "Batch API (50% discount)"
      - "No spending cap unless configured"
    highlights_tr:
      - "Token bazlı model fiyatlandırma"
      - "Prompt caching (input maliyetinde %90 azaltma)"
      - "Batch API (%50 indirim)"
      - "Yapılandırılmadıkça harcama limiti yok"
capabilities:
  - "Read, understand, edit, and refactor entire codebases from terminal, IDE, desktop, or browser"
  - "Run shell commands, tests, linters, package managers, and project scripts with permission controls"
  - "Build features, fix bugs, write tests, resolve merge conflicts, and update dependencies"
  - "Connect to external systems through MCP servers (GitHub, Jira, Slack, Google Drive, databases, custom tools)"
  - "Use CLAUDE.md, memory, commands, hooks, plugins, skills, subagents, and worktree isolation for repeatable workflows"
  - "Automate code review, issue triage, CI/CD tasks, and release-note generation"
  - "Use Claude Code SDK and GitHub Actions for programmable agentic coding workflows"
capabilities_tr:
  - "Terminal, IDE, masaüstü veya tarayıcı üzerinden tüm kod tabanını okuma, anlama, düzenleme ve refactor etme"
  - "Shell komutları, testler, linter'lar, package manager'lar ve proje script'lerini izin kontrolleriyle çalıştırma"
  - "Özellik geliştirme, bug fix, test yazma, merge conflict çözme ve dependency güncelleme"
  - "MCP sunucuları üzerinden dış sistemlere bağlanma (GitHub, Jira, Slack, Google Drive, veritabanları, özel araçlar)"
  - "Tekrarlanabilir workflow'lar için CLAUDE.md, memory, commands, hooks, plugins, skills, subagents ve worktree isolation kullanma"
  - "Code review, issue triage, CI/CD görevleri ve release note üretimini otomatikleştirme"
  - "Programlanabilir agentic coding workflow'ları için Claude Code SDK ve GitHub Actions kullanma"
strengths:
  - "One of the strongest agentic coding tools for multi-file edits, debugging, tests, and autonomous development"
  - "Deep integration: terminal, VS Code, JetBrains, desktop, browser, GitHub Actions, Slack, CI/CD"
  - "MCP support makes it extensible across internal tools, docs, tickets, repos, databases, and APIs"
  - "Claude models excel at coding, refactoring, long-context reasoning, and natural explanations"
  - "Rich workflow surface: CLAUDE.md, custom commands, hooks, plugins, skills, subagents, memory"
  - "Enterprise controls: SSO, audit logs, spend controls, connector administration, custom data retention"
strengths_tr:
  - "Çok dosyalı düzenleme, debug, test ve otonom geliştirmede en güçlü agentic coding araçlarından biri"
  - "Derin entegrasyon: terminal, VS Code, JetBrains, masaüstü, tarayıcı, GitHub Actions, Slack, CI/CD"
  - "MCP desteği şirket içi araçlar, dokümanlar, ticket'lar, repo'lar, veritabanları ve API'ler genelinde genişletilebilir"
  - "Claude modelleri kodlama, refactor, uzun bağlamlı reasoning ve doğal açıklamalarda üstün"
  - "Zengin workflow yüzeyi: CLAUDE.md, özel komutlar, hooks, plugins, skills, subagents, memory"
  - "Kurumsal kontroller: SSO, audit logs, harcama kontrolleri, connector yönetimi, özel veri saklama"
weaknesses:
  - "Not a standalone IDE; works best alongside existing editors, terminals, and repositories"
  - "Long autonomous sessions can consume usage quickly, especially on Opus or large codebases"
  - "Requires strong developer review because it can make broad multi-file changes or run risky commands"
  - "Pricing can be harder to predict than simple per-seat IDE tools — typical cost $100-200/dev/month"
  - "No native image, audio, or video generation; focused on software development workflows"
  - "Security-sensitive teams must carefully configure permissions, MCP servers, hooks, plugins, and data access"
weaknesses_tr:
  - "Tek başına bir IDE değildir; mevcut editör, terminal ve repo ile birlikte en iyi çalışır"
  - "Uzun otonom oturumlar özellikle Opus veya büyük kod tabanlarında kullanımı hızlı tüketebilir"
  - "Geniş çok dosyalı değişiklikler veya riskli komut çalıştırabildiği için güçlü developer review gerekir"
  - "Fiyat tahmini basit koltuk bazlı IDE araçlarından zor — tipik maliyet $100-200/dev/ay"
  - "Yerel görsel, ses veya video üretimi yok; yazılım geliştirme workflow'larına odaklı"
  - "Güvenlik hassasiyeti olan ekipler permission, MCP server, hook, plugin ve veri erişimini dikkatle yapılandırmalıdır"
ecosystem:
  - type: "cli"
    label: "Claude Code CLI"
    label_tr: "Claude Code CLI"
    url: "https://code.claude.com/docs/en/overview"
    count: 1
    note: "Terminal-native agentic coding interface for reading files, editing code, running commands, and managing projects"
    note_tr: "Dosya okuma, kod düzenleme, komut çalıştırma ve proje yönetimi için terminal tabanlı agentic coding arayüzü"
  - type: "ide"
    label: "IDE Integrations"
    label_tr: "IDE Entegrasyonları"
    url: "https://code.claude.com/docs/en/overview"
    count: 2
    note: "Official Claude Code integrations for Visual Studio Code and JetBrains IDEs"
    note_tr: "Visual Studio Code ve JetBrains IDE'leri için resmi Claude Code entegrasyonları"
  - type: "mcp"
    label: "MCP Servers"
    label_tr: "MCP Sunucuları"
    url: "/mcp"
    count: 403
    note: "External tools and data sources that Claude Code can connect to through Model Context Protocol"
    note_tr: "Claude Code'un Model Context Protocol üzerinden bağlanabileceği dış araçlar ve veri kaynakları"
  - type: "skills"
    label: "Claude Code Skills"
    label_tr: "Claude Code Skill'leri"
    url: "/skills"
    count: 176
    note: "Reusable instructions, scripts, and resources that teach Claude Code repeatable development workflows"
    note_tr: "Claude Code'a tekrarlanabilir geliştirme workflow'ları öğreten yeniden kullanılabilir talimatlar, script'ler ve kaynaklar"
  - type: "automation"
    label: "GitHub Actions & CI/CD"
    label_tr: "GitHub Actions ve CI/CD"
    url: "https://code.claude.com/docs/en/overview"
    count: 1
    note: "Automation layer for code review, issue triage, tests, release notes, and CI/CD tasks"
    note_tr: "Code review, issue triage, test, release note ve CI/CD görevleri için otomasyon katmanı"
  - type: "sdk"
    label: "Claude Code SDK"
    label_tr: "Claude Code SDK"
    url: "https://docs.anthropic.com"
    count: 1
    note: "Programmable interface for building custom Claude Code-powered developer agents and workflows"
    note_tr: "Claude Code destekli özel geliştirici agent'ları ve workflow'ları oluşturmak için programlanabilir arayüz"
alternatives:
  - "cursor"
  - "github-copilot"
  - "windsurf"
  - "v0"
  - "lovable"
sources:
  - "https://code.claude.com/docs/en/overview"
  - "https://code.claude.com/docs/en/best-practices"
  - "https://claude.com/pricing"
  - "https://docs.anthropic.com"
  - "https://docs.anthropic.com/en/docs/agents-and-tools/claude-code/overview"
  - "https://github.com/anthropics/skills"
body_tr: |-
  ## Ne yapar?

  Claude Code, Anthropic'in geliştirici odaklı agentic yazılım geliştirme aracıdır. Claude sohbet asistanından farklı olarak ana amacı genel sohbet değil; kod tabanı okumak, dosya düzenlemek, terminal komutları çalıştırmak, testleri koşturmak, bug düzeltmek, özellik geliştirmek, refactor yapmak, code review ve CI/CD otomasyonu sağlamaktır.

  Mayıs 2026 itibarıyla Claude Code; terminal CLI, Visual Studio Code, JetBrains IDE'leri, masaüstü uygulaması, web/tarayıcı yüzeyi, Slack, GitHub Actions ve CI/CD entegrasyonlarıyla kullanılabilir. Proje içinde dosyaları okuyabilir, çok dosyalı değişiklik yapabilir, shell komutları çalıştırabilir, test/lint/build sonuçlarına göre tekrar deneyebilir ve geliştirici onayıyla değişiklikleri uygulayabilir.

  Claude Code'un gücü, Claude modellerinin kodlama performansını geliştirici workflow'larına bağlayan agent katmanıdır. Claude sohbetten farklı olarak MCP, CLAUDE.md, skills, hooks, plugins, custom slash commands, subagents, memory, worktree isolation ve GitHub Actions gibi geliştiriciye özel uzatma yüzeyleri sunar.

  ## Modeller

  **Claude Opus 4.8** — En zor agentic coding, büyük refactor, mimari karar, karmaşık bug ve uzun süreli geliştirme görevleri için en güçlü seçenek. 4.7'ye göre ~4× daha az gözden kaçan kod hatası içerir.

  **Claude Sonnet 4.6** — Günlük Claude Code kullanımının en dengeli modelidir. Özellik geliştirme, test yazma, refactor, bug fix, doküman düzenleme ve üretim kod tabanlarında genel yazılım mühendisliği işleri için uygundur.

  **Claude Haiku 4.5** — Daha hızlı ve düşük maliyetli görevlerde kullanılır. Basit kod düzenleme, açıklama, script üretimi, küçük otomasyonlar ve yüksek hacimli işlerde maliyet avantajı sağlar.

  API tarafında fiyatlar model token kullanımına göre hesaplanır. Prompt caching (input maliyetinde %90 azaltma) ve batch processing (%50 indirim) toplam maliyeti önemli ölçüde düşürebilir.

  ## Fiyatlandırma

  - **Pro ($20/ay)** — Bireysel geliştiriciler için, Sonnet 4.6 ve Haiku 4.5 erişimi, hafif kullanım
  - **Max 5x ($100/ay)** — Pro'nun 5 katı kullanım, tam Opus 4.8 erişimi, öncelikli sıra
  - **Max 20x ($200/ay)** — Pro'nun 20 katı kullanım, en yüksek bireysel tier, uzun oturumlar
  - **Team ($25-125/koltuk/ay)** — Standard $25, Premium $125 (5 koltuk min), SSO, merkezi yönetim
  - **Enterprise (Custom + usage)** — Koltuk + API kullanımı, spend controls, audit, SCIM, HIPAA
  - **API / Console (kullanım bazlı)** — Token bazlı, prompt caching, batch API

  Claude Code ücretsiz bir genel chatbot değildir. En yaygın kullanım Claude Pro/Max abonelikleri veya Team/Enterprise planlarıyla olur. Tipik aktif geliştirici için aylık maliyet $100-200 arasındadır.

  ## Yetenekler

  - Kod tabanı okuma ve anlama
  - Çok dosyalı kod düzenleme
  - Özellik geliştirme ve bug fix
  - Test, lint, build ve package manager komutlarını çalıştırma
  - Shell komutlarıyla proje otomasyonu
  - Merge conflict çözme
  - Dependency güncelleme
  - Release note üretme
  - Code review ve issue triage
  - GitHub Actions ve CI/CD otomasyonu
  - VS Code ve JetBrains IDE entegrasyonu
  - MCP ile dış sistemlere bağlanma
  - CLAUDE.md ile proje kuralları ve bağlam tanımlama
  - Skills, hooks, plugins, commands, memory ve subagents ile workflow genişletme

  ## Güçlü yanları

  - Claude Code, agentic coding tarafında en güçlü ürünlerden biridir
  - Büyük kod tabanlarında çok dosyalı değişiklikleri ve test döngülerini yönetebilir
  - MCP ile Jira, Slack, GitHub, Google Drive, veritabanı ve özel iç araçlara bağlanabilir
  - CLAUDE.md, hooks, plugins, skills ve subagents gibi gelişmiş developer yüzeyleri sunar
  - Terminal, IDE, masaüstü, tarayıcı, Slack ve CI/CD ortamlarında kullanılabilir
  - Claude modellerinin doğal açıklama, refactor ve uzun bağlamlı reasoning gücünü doğrudan yazılım geliştirmeye taşır
  - Team ve Enterprise planlarında SSO, audit, spend control ve veri saklama gibi kurumsal kontroller bulunur

  ## Zayıf yanları

  - Tek başına IDE değildir; mevcut editör, terminal, repo ve geliştirici disiplinine ihtiyaç duyar
  - Uzun otonom oturumlar kullanım limitlerini hızlı tüketebilir
  - Yanlış komut veya geniş kod değişikliği riski nedeniyle developer review şarttır
  - Fiyat/kullanım tahmini basit aylık IDE araçlarına göre daha karmaşık olabilir (tipik $100-200/dev/ay)
  - Güvenlik hassas projelerde MCP server, hook, plugin ve shell izinleri dikkatle sınırlandırılmalıdır
  - Görsel, ses veya video üretimi için tasarlanmamıştır; coding/developer odaklıdır

  ## Ekosistem

  Claude Code ekosistemi, Claude sohbet ürününden daha fazla geliştirici odaklıdır.

  **Claude Code CLI**, terminal içinde çalışan ana agentic coding yüzeyidir. Proje dosyalarını okur, düzenleme yapar, komut çalıştırır ve test sonuçlarına göre iterasyon yapabilir.

  **IDE entegrasyonları**, Visual Studio Code ve JetBrains içinde Claude Code'u doğrudan geliştirme ortamına taşır. Böylece kod değişiklikleri, diff review ve proje bağlamı daha doğal yönetilir.

  **MCP Sunucuları**, Claude Code'u dış sistemlere bağlar. GitHub, Jira, Slack, Google Drive, veritabanı, iç dokümantasyon, API ve özel araçlar Claude Code workflow'una dahil edilebilir.

  **Claude Code Skill'leri**, tekrar eden geliştirme görevleri için talimat, script ve kaynak paketleri sağlar. Bir şirketin test standardı, release süreci, framework mimarisi veya kod yazım kuralları skill olarak paketlenebilir.

  **Hooks, plugins, commands ve subagents**, Claude Code'u basit bir kod asistanından özelleştirilebilir agent platformuna taşır. Hooks belirli olaylarda komut çalıştırabilir; custom slash commands tekrar eden işleri hızlandırır; subagents görevleri izole şekilde bölebilir; plugins ve skills ekip standardını taşınabilir hale getirir.

  **GitHub Actions ve CI/CD**, Claude Code'un code review, issue triage, test, lint, release note ve otomatik bakım işlerinde kullanılmasını sağlar. Bu yönüyle Claude Code sadece bireysel coding yardımcısı değil, takım workflow'larına gömülebilen developer automation katmanıdır.
---

## What it does

Claude Code is Anthropic's developer-focused agentic software development tool. Unlike the general Claude chat assistant, its main purpose is not open-ended conversation; it is designed to read codebases, edit files, run terminal commands, execute tests, fix bugs, build features, refactor code, review code, and automate CI/CD work.

As of May 2026, Claude Code is available through the terminal CLI, Visual Studio Code, JetBrains IDEs, desktop app, web/browser surfaces, Slack, GitHub Actions, and CI/CD integrations. Inside a project, it can read files, make multi-file edits, run shell commands, inspect test/lint/build results, retry based on failures, and apply changes with developer approval.

Claude Code's strength is the agent layer that connects Claude's coding performance to real developer workflows. Unlike Claude chat, it offers developer-specific extension surfaces such as MCP, CLAUDE.md, skills, hooks, plugins, custom slash commands, subagents, memory, worktree isolation, and GitHub Actions.

## Models

**Claude Opus 4.8** — The strongest choice for the hardest agentic coding, large refactors, architecture decisions, complex bugs, and long-running development tasks. ~4× fewer overlooked code flaws compared to Opus 4.7.

**Claude Sonnet 4.6** — The balanced model for everyday Claude Code usage. It fits feature work, writing tests, refactoring, bug fixing, documentation edits, and general software engineering work in production codebases.

**Claude Haiku 4.5** — Used for faster and lower-cost tasks. It is useful for simple code edits, explanations, script generation, small automations, and high-volume workflows.

On the API side, pricing is based on model token usage. Prompt caching (90% input cost reduction) and Batch API (50% discount) can significantly reduce total cost.

## Pricing

- **Pro ($20/mo)** — Individual developers, Sonnet 4.6 and Haiku 4.5 access, light coding sessions
- **Max 5x ($100/mo)** — 5× Pro usage, full Opus 4.8 access, priority queue
- **Max 20x ($200/mo)** — 20× Pro usage, highest individual tier, long autonomous sessions
- **Team ($25-125/seat/mo)** — Standard $25, Premium $125 (5-seat min), SSO, central management
- **Enterprise (Custom + usage)** — Seat + API usage, spend controls, audit, SCIM, HIPAA
- **API / Console (usage-based)** — Token-based, prompt caching, Batch API

Claude Code is not a free general chatbot. The most common access path is through Claude Pro/Max subscriptions or Team/Enterprise plans. Typical active developer cost is $100-200 per month.

## Capabilities

- Codebase reading and understanding
- Multi-file code editing
- Feature development and bug fixing
- Running tests, linters, builds, and package manager commands
- Shell-based project automation
- Merge conflict resolution
- Dependency updates
- Release note generation
- Code review and issue triage
- GitHub Actions and CI/CD automation
- VS Code and JetBrains IDE integration
- External system connections through MCP
- Project rules and context through CLAUDE.md
- Workflow extension through skills, hooks, plugins, commands, memory, and subagents

## Strengths

- Claude Code is one of the strongest products in agentic coding
- Can manage multi-file changes and test loops across large codebases
- Connects to Jira, Slack, GitHub, Google Drive, databases, and custom internal tools through MCP
- Offers advanced developer surfaces such as CLAUDE.md, hooks, plugins, skills, and subagents
- Works across terminal, IDE, desktop, browser, Slack, and CI/CD environments
- Brings Claude's natural explanation, refactoring, and long-context reasoning strengths directly into software development
- Team and Enterprise plans include organizational controls such as SSO, audit, spend control, and data retention

## Weaknesses

- Not a standalone IDE; it still needs an editor, terminal, repository, and good developer discipline
- Long autonomous sessions can burn through usage limits quickly
- Developer review is essential because it can run risky commands or make broad code changes
- Cost and usage forecasting can be more complex than simple monthly IDE tools (typical $100-200/dev/mo)
- Security-sensitive projects must carefully limit MCP servers, hooks, plugins, and shell permissions
- Not designed for image, audio, or video generation; it is coding/developer-focused

## Ecosystem

Claude Code's ecosystem is more developer-focused than the general Claude chat product.

**Claude Code CLI** is the main terminal-native agentic coding surface. It reads project files, edits code, runs commands, and iterates based on test results.

**IDE integrations** bring Claude Code directly into Visual Studio Code and JetBrains. This makes code edits, diff review, and project context easier to manage inside the normal development environment.

**MCP Servers** connect Claude Code to external systems. GitHub, Jira, Slack, Google Drive, databases, internal docs, APIs, and custom tools can be brought into the Claude Code workflow.

**Claude Code Skills** provide instruction, script, and resource packages for repeatable development tasks. A company's testing standard, release process, framework architecture, or coding rules can be packaged as a skill.

**Hooks, plugins, commands, and subagents** move Claude Code from a simple coding assistant into a customizable agent platform. Hooks can run commands on specific events; custom slash commands speed up repeatable work; subagents can split tasks in isolation; plugins and skills make team standards portable.

**GitHub Actions and CI/CD** let Claude Code support code review, issue triage, tests, linting, release notes, and automated maintenance work. This makes Claude Code not just a personal coding helper, but a developer automation layer that can be embedded into team workflows.
