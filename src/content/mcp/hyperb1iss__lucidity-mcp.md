---
name: "hyperb1iss/lucidity-mcp"
description: "Enhance AI-generated code quality through intelligent, prompt-based analysis across 10 critical dimensions from complexity to security vulnerabilities"
category: "Monitoring"
repo: "hyperb1iss/lucidity-mcp"
stars: 85
url: "https://github.com/hyperb1iss/lucidity-mcp"
body_length: 7526
license: "Apache-2.0"
language: "Python"
homepage: "https://hyperbliss.tech"
body_tr: |-
  # ✨ Lucidity MCP 🔍

  <div align="center">

  [![Python 3.13+](https://img.shields.io/badge/python-3.13+-9D00FF.svg?style=for-the-badge&logo=python&logoColor=white)](https://www.python.org/downloads/)
  [![License](https://img.shields.io/badge/license-Apache_2.0-FF00FF.svg?style=for-the-badge)](LICENSE)
  [![Status](https://img.shields.io/badge/status-active_development-39FF14.svg?style=for-the-badge)](docs/plan.md)
  [![Code Style](https://img.shields.io/badge/code_style-ruff-00FFFF.svg?style=for-the-badge)](https://github.com/astral-sh/ruff)
  [![Type Check](https://img.shields.io/badge/type_check-mypy-FFBF00.svg?style=for-the-badge)](https://mypy.readthedocs.io/en/stable/)

  **Kodda Netlik, Yaratımda Güven**

  </div>

  Lucidity, Model Context Protocol (MCP) sunucusu olarak, yapay zeka tarafından oluşturulan kodun kalitesini akıllı, prompt tabanlı analiz yoluyla geliştirmek için tasarlanmıştır. AI kodlama asistanlarına yapılandırılmış rehberlik sağlayarak, Lucidity yaygın kalite sorunlarını belirlemek ve çözmek, böylece daha temiz, bakımı kolay ve daha sağlam kod elde etmek yardımcı olur.

  Commit etmeden önce, Lucidity'ye değişiklikleri analiz etmesini söyleyin, kendinizi bir kâbus cehennemine "vibe coding" yaparak sürüklemeyin! 😱 💥 🚫

  ## 💫 Özellikler

  - 🔮 **Kapsamlı Sorun Algılaması** - Karmaşıklıktan güvenlik açıklarına kadar 10 kritik kalite boyutunu kapsar
  - 🔄 **Bağlamsal Analiz** - Değişiklikleri orijinal kodla karşılaştırarak istenmeyen değişiklikleri tanımlar
  - 🌐 **Dil Agnostik** - AI asistanının anladığı herhangi bir programlama diliyle çalışır
  - 🎯 **Odaklanmış Analiz** - Proje ihtiyaçlarına göre belirli sorun türlerini hedefleme seçeneği
  - 📝 **Yapılandırılmış Çıktılar** - AI'ı net önerilerle eyleme geçirilebilir geri bildirim sağlamaya kılavuzlar
  - 🤖 **MCP Entegrasyonu** - Claude ve diğer MCP uyumlu AI asistanlarıyla sorunsuz entegrasyon
  - 🪶 **Hafif İmplementasyon** - Minimal bağımlılığa sahip basit sunucu tasarımı
  - 🧩 **Genişletilebilir Framework** - Yeni sorun türleri ekleme veya analiz kriterlerini ayarlama kolaylığı
  - 🔀 **Esnek Transport** - Terminal tabanlı etkileşim için stdio ve ağ tabanlı iletişim için SSE destekler
  - 🔄 **Git Bilgisi** - Git diff'ten doğrudan değişiklikleri analiz eder, ön commit incelemeler için ideal

  ## 🚀 Kurulum

  ```bash
  # Repository'yi clone edin
  git clone https://github.com/hyperbliss/lucidity-mcp.git
  cd lucidity-mcp

  # UV ile sanal ortam kurun
  uv venv .venv
  source .venv/bin/activate  # Windows'ta: .venv\Scripts\activate

  # UV ile bağımlılıkları yükleyin
  uv sync
  ```

  ## 📋 Ön Koşullar

  - Python 3.13 veya daha yüksek
  - Git (kod değişikliklerini analiz etmek için)
  - UV paket yöneticisi (bağımlılık yönetimi için önerilir)

  ## 🔮 Hızlı Başlangıç

  ### Lucidity sunucusunu çalıştırın

  ```bash
  # Stdio transport ile başlatın (terminal kullanımı için)
  lucidity-mcp

  # SSE transport ile başlatın (ağ kullanımı için)
  lucidity-mcp --transport sse --host 127.0.0.1 --port 6969

  # Debug logging ile çalıştırın
  lucidity-mcp --debug

  # Dosya logging ile çalıştırın
  lucidity-mcp --log-file lucidity.log
  ```

  ### AI Asistanlarla Kullanım

  1. Lucidity'yi SSE modunda başlatın:

     ```bash
     lucidity-mcp --transport sse
     ```

  2. AI asistanınızı MCP protokol URI'sı kullanarak bağlayın:

     ```
     sse://localhost:6969/sse
     ```

  3. AI şimdi kod kalitesi geri bildirimi almak için `analyze_changes` tool'unu çağırabilir!

  ## 🧠 Analiz Boyutları

  Lucidity, kodu 10 kritik kalite boyutuna göre analiz eder:

  1. **Gereksiz Karmaşıklık** - Aşırı karmaşık algoritmaları, aşırı soyutlamaları ve kafa karıştırıcı mantığı tanımlar
  2. **Kötü Soyutlamalar** - Sızıntılı veya uygunsuz soyutlamaları ve belirsiz endişe ayrımlarını tespit eder
  3. **İstenmeyen Kod Silme** - Kritik işlevselliğin veya doğrulamanın yanlışlıkla kaldırılmasını yakalar
  4. **Halüsinasyon Bileşenleri** - Var olmayan fonksiyonlara, sınıflara veya API'lara yapılan referansları bulur
  5. **Stil Tutarsızlıkları** - Proje kodlama standartlarından ve kurallarından sapmaları fark eder
  6. **Güvenlik Açıkları** - Kod değişikliklerinde potansiyel güvenlik sorunlarını tanımlar
  7. **Performans Sorunları** - Performansı etkileyebilecek verimsiz algoritmaları veya işlemleri tespit eder
  8. **Kod Tekrarı** - Yeniden düzenlenmesi gereken tekrarlanan mantık veya işlevselliği bulur
  9. **Eksik Hata İşleme** - Eksik veya yetersiz exception handling'i fark eder
  10. **Test Kapsamı Boşlukları** - Kritik işlevsellik için eksik testleri tanımlar

  ## 📊 Örnek AI Asistanı Sorguları

  Lucidity'ye bağlı bir AI asistanı ile bu sorguları deneyin:

  - "Son git değişikliklerimin kod kalitesini analiz et"
  - "JavaScript değişikliklerinde güvenlik açıklarını kontrol et"
  - "Python kodum en iyi uygulamaları takip ettiğinden emin ol"
  - "Son kod değişikliklerimde performans sorunlarını belirle"
  - "Son refaktoringemde istenmeyen yan etkiler var mı?"
  - "Kodumda soyutlamaları geliştirmeme yardımcı ol"
  - "Yanlışlıkla önemli doğrulamayı kaldırıp kaldırmadığımı kontrol et"
  - "Son commit'imde halüsinasyon API çağrılarını bul"
  - "Hata işlemem tam ve sağlam mı?"
  - "Yeni özelliğimde test kapsamı boşlukları var mı?"

  ## 🛠️ Mevcut MCP Tool'ları

  ### Tools

  - `analyze_changes` - MCP aracılığıyla analiz için git değişikliklerini hazırlar
    - Parametreler:
      - `workspace_root`: Workspace/git repository'nin kök dizini
      - `path`: Analiz edilecek isteğe bağlı belirli dosya yolu

  ## 💻 Geliştirme

  Lucidity, bağımlılık yönetimi ve geliştirme iş akışları için UV kullanır. UV, hızlı ve güvenilir bir Python paket yöneticisi ve resolver'ıdır.

  ```bash
  # Bağımlılıkları güncelleyin
  uv sync

  # Testleri çalıştırın
  pytest

  # Linting çalıştırın
  ruff check .

  # Tür kontrolü çalıştırın
  mypy .
  ```

  ## 🔧 Logging Davranışı

  Lucidity, transport'a bağlı olarak logging'i farklı şekilde işler:

  - **SSE transport**: Tam konsol logging etkinleştirilir
  - **Stdio transport with --log-file**: Tüm loglar dosyaya gider, konsol devre dışı bırakılır
  - **Stdio transport without --log-file**: Sadece uyarılar ve hatalar stderr'e gider, bilgi logları devre dışı bırakılır

  Bu, stdio iletişiminin stdout'ta log görünmesi nedeniyle bozulmamasını sağlar.

  ## 🎛️ Komut Satırı Seçenekleri

  ```
  usage: lucidity-mcp [-h] [--debug] [--host HOST] [--port PORT] [--transport {stdio,sse}]
                  [--log-level {DEBUG,INFO,WARNING,ERROR,CRITICAL}] [--verbose]
                  [--log-file LOG_FILE]

  options:
    -h, --help            show this help message and exit
    --debug               Debug logging'i etkinleştir
    --host HOST           Sunucunun bağlanacağı host (tüm arayüzler için 0.0.0.0 kullanın)
    --port PORT           Ağ bağlantıları için dinlenecek port
    --transport {stdio,sse}
                          Kullanılacak transport türü (terminal için stdio, ağ için sse)
    --log-level {DEBUG,INFO,WARNING,ERROR,CRITICAL}
                          Logging seviyesini ayarla
    --verbose             HTTP istekleri için verbose logging'i etkinleştir
    --log-file LOG_FILE   Log dosyasının yolu (stdio transport için gerekli)
  ```

  ## 🤝 Katkıda Bulunma

  Katkılar hoşlanır! Lütfen bir Pull Request göndermekten çekinmeyin.

  1. Repository'yi fork edin
  2. Özellik dalınızı oluşturun (`git checkout -b feature/amazing-feature`)
  3. Geliştirme ortamınızı UV ile kurun
  4. Değişiklikleri yapın
  5. Testleri ve linting'i çalıştırın
  6. Değişiklikleri commit edin (`git commit -m 'Add some amazing feature'`)
  7. Dala push edin (`git push origin feature/amazing-feature`)
  8. Bir Pull Request açın

  ## 📝 Lisans

  Bu proje Apache License 2.0 altında lisanslanmıştır - detaylar için LICENSE dosyasına bakın.

  ---

  <div align="center">

  [Stefanie Jane 🌠](https://github.com/hyperb1iss) tarafından oluşturuldu

  Lucidity'i yararlı bulursanız, [bana bir Monster Ultra Violet ⚡️ alın](https://ko-fi.com/hyperb1iss)

  </div>
---

# ✨ Lucidity MCP 🔍

<div align="center">

[![Python 3.13+](https://img.shields.io/badge/python-3.13+-9D00FF.svg?style=for-the-badge&logo=python&logoColor=white)](https://www.python.org/downloads/)
[![License](https://img.shields.io/badge/license-Apache_2.0-FF00FF.svg?style=for-the-badge)](LICENSE)
[![Status](https://img.shields.io/badge/status-active_development-39FF14.svg?style=for-the-badge)](docs/plan.md)
[![Code Style](https://img.shields.io/badge/code_style-ruff-00FFFF.svg?style=for-the-badge)](https://github.com/astral-sh/ruff)
[![Type Check](https://img.shields.io/badge/type_check-mypy-FFBF00.svg?style=for-the-badge)](https://mypy.readthedocs.io/en/stable/)

**Clarity in Code, Confidence in Creation**

</div>

Lucidity is a Model Context Protocol (MCP) server designed to enhance the quality of AI-generated code through intelligent, prompt-based analysis. By providing structured guidance to AI coding assistants, Lucidity helps identify and address common quality issues, resulting in cleaner, more maintainable, and more robust code.

Before you commit, just ask Lucidity to analyze the changes instead of vibe-coding yourself into a nightmare hellscape! 😱 💥 🚫

## 💫 Features

- 🔮 **Comprehensive Issue Detection** - Covers 10 critical quality dimensions from complexity to security vulnerabilities
- 🔄 **Contextual Analysis** - Compares changes against original code to identify unintended modifications
- 🌐 **Language Agnostic** - Works with any programming language the AI assistant understands
- 🎯 **Focused Analysis** - Option to target specific issue types based on project needs
- 📝 **Structured Outputs** - Guides AI to provide actionable feedback with clear recommendations
- 🤖 **MCP Integration** - Seamless integration with Claude and other MCP-compatible AI assistants
- 🪶 **Lightweight Implementation** - Simple server design with minimal dependencies
- 🧩 **Extensible Framework** - Easy to add new issue types or refine analysis criteria
- 🔀 **Flexible Transport** - Supports both stdio for terminal-based interaction and SSE for network-based communication
- 🔄 **Git-Aware Analysis** - Analyzes changes directly from git diff, making it ideal for pre-commit reviews

## 🚀 Installation

```bash
# Clone the repository
git clone https://github.com/hyperbliss/lucidity-mcp.git
cd lucidity-mcp

# Set up a virtual environment with UV
uv venv .venv
source .venv/bin/activate  # On Windows: .venv\Scripts\activate

# Install dependencies with UV
uv sync
```

## 📋 Prerequisites

- Python 3.13 or higher
- Git (for analyzing code changes)
- UV package manager (recommended for dependency management)

## 🔮 Quick Start

### Run the Lucidity server

```bash
# Start with stdio transport (for terminal use)
lucidity-mcp

# Start with SSE transport (for network use)
lucidity-mcp --transport sse --host 127.0.0.1 --port 6969

# Run with debug logging
lucidity-mcp --debug

# Run with file logging
lucidity-mcp --log-file lucidity.log
```

### Using with AI Assistants

1. Start Lucidity in SSE mode:

   ```bash
   lucidity-mcp --transport sse
   ```

2. Connect your AI assistant using the MCP protocol URI:

   ```
   sse://localhost:6969/sse
   ```

3. The AI can now invoke the `analyze_changes` tool to get code quality feedback!

## 🧠 Analysis Dimensions

Lucidity analyzes code across 10 critical quality dimensions:

1. **Unnecessary Complexity** - Identifies overly complex algorithms, excessive abstractions, and convoluted logic
2. **Poor Abstractions** - Detects leaky or inappropriate abstractions and unclear separation of concerns
3. **Unintended Code Deletion** - Catches accidental removal of critical functionality or validation
4. **Hallucinated Components** - Finds references to non-existent functions, classes, or APIs
5. **Style Inconsistencies** - Spots deviations from project coding standards and conventions
6. **Security Vulnerabilities** - Identifies potential security issues in code changes
7. **Performance Issues** - Detects inefficient algorithms or operations that could impact performance
8. **Code Duplication** - Finds repeated logic or functionality that should be refactored
9. **Incomplete Error Handling** - Spots missing or inadequate exception handling
10. **Test Coverage Gaps** - Identifies missing tests for critical functionality

## 📊 Example AI Assistant Queries

With an AI assistant connected to Lucidity, try these queries:

- "Analyze the code quality in my latest git changes"
- "Check for security vulnerabilities in my JavaScript changes"
- "Make sure my Python code follows best practices"
- "Identify any performance issues in my recent code changes"
- "Are there any unintended side effects in my recent refactoring?"
- "Help me improve the abstractions in my code"
- "Check if I've accidentally removed any important validation"
- "Find any hallucinated API calls in my latest commit"
- "Is my error handling complete and robust?"
- "Are there any test coverage gaps in my new feature?"

## 🛠️ Available MCP Tools

### Tools

- `analyze_changes` - Prepares git changes for analysis through MCP
  - Parameters:
    - `workspace_root`: The root directory of the workspace/git repository
    - `path`: Optional specific file path to analyze

## 💻 Development

Lucidity uses UV for dependency management and development workflows. UV is a fast, reliable Python package manager and resolver.

```bash
# Update dependencies
uv sync

# Run tests
pytest

# Run linting
ruff check .

# Run type checking
mypy .
```

## 🔧 Logging Behavior

Lucidity handles logging differently depending on the transport:

- **SSE transport**: Full console logging is enabled
- **Stdio transport with --log-file**: All logs go to the file, console is disabled
- **Stdio transport without --log-file**: Only warnings and errors go to stderr, info logs are disabled

This ensures that stdio communication isn't broken by logs appearing on stdout.

## 🎛️ Command-line Options

```
usage: lucidity-mcp [-h] [--debug] [--host HOST] [--port PORT] [--transport {stdio,sse}]
                [--log-level {DEBUG,INFO,WARNING,ERROR,CRITICAL}] [--verbose]
                [--log-file LOG_FILE]

options:
  -h, --help            show this help message and exit
  --debug               Enable debug logging
  --host HOST           Host to bind the server to (use 0.0.0.0 for all interfaces)
  --port PORT           Port to listen on for network connections
  --transport {stdio,sse}
                        Transport type to use (stdio for terminal, sse for network)
  --log-level {DEBUG,INFO,WARNING,ERROR,CRITICAL}
                        Set the logging level
  --verbose             Enable verbose logging for HTTP requests
  --log-file LOG_FILE   Path to log file (required for stdio transport if logs enabled)
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Set up your development environment with UV
4. Make your changes
5. Run tests and linting
6. Commit your changes (`git commit -m 'Add some amazing feature'`)
7. Push to the branch (`git push origin feature/amazing-feature`)
8. Open a Pull Request

## 📝 License

This project is licensed under the Apache License 2.0 - see the LICENSE file for details.

---

<div align="center">

Created by [Stefanie Jane 🌠](https://github.com/hyperb1iss)

If you find Lucidity useful, [buy me a Monster Ultra Violet ⚡️](https://ko-fi.com/hyperb1iss)

</div>
