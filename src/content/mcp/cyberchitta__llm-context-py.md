---
name: "cyberchitta/llm-context.py"
description: "Share code context with LLMs via MCP or clipboard"
description_tr: "LLM'lerle kod bağlamını MCP veya panoya kopyalayarak paylaşın"
category: "File Systems"
repo: "cyberchitta/llm-context.py"
stars: 301
url: "https://github.com/cyberchitta/llm-context.py"
body_length: 11800
license: "Apache-2.0"
language: "Python"
homepage: "https://www.cyberchitta.cc/articles/llm-ctx-why.html"
body_tr: |-
  # LLM Context

  [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
  [![PyPI version](https://img.shields.io/pypi/v/llm-context.svg)](https://pypi.org/project/llm-context/)
  [![Downloads](https://static.pepy.tech/badge/llm-context/week)](https://pepy.tech/project/llm-context)

  **LLM geliştirme iş akışları için akıllı bağlam yönetimi.** İlgili proje dosyalarını akıllı seçim ve kurallı filtreleme aracılığıyla anında paylaşın.

  ## Sorun

  LLM sohbetlerine doğru bağlamı aktarmak sürtünmeye neden olur:

  - İlgili dosyaları el ile bulmak ve kopyalamak zaman kaybettiriyor
  - Çok fazla bağlam token limitine çarparken, çok az bağlam önemli detayları kaçırıyor
  - AI'nin ek dosya talepleri el ile alınmasını gerektiriyor
  - Geliştirme seansları sırasında nelerin değiştiğini takip etmek zor

  ## Çözüm

  llm-context, birleştirilebilir kurallar aracılığıyla odaklanmış, göreve özel proje bağlamı sağlar.

  **Chat arayüzleri kullanan insanlar için:**
  ```bash
  lc-select   # Akıllı dosya seçimi
  lc-context  # Biçimlendirilmiş bağlamı panoya kopyala
  # Yapıştır ve çalış - AI, MCP aracılığıyla ek dosyalara erişebilir
  ```

  **CLI erişimine sahip AI ajanları için:**
  ```bash
  lc-preview tmp-prm-auth    # Kuralın doğru dosyaları seçtiğini doğrula
  lc-context tmp-prm-auth    # Alt ajan için odaklanmış bağlam al
  ```

  **Sohbetteki AI ajanları için (MCP araçları):**
  - `lc_outlines` - Geçerli kuraldan özet bağlam oluştur
  - `lc_preview` - Kuralı kullanmadan önce etkinliğini doğrula
  - `lc_missing` - İstek üzerine belirli dosyaları/uygulamaları getir

  > **Not**: Bu proje, birkaç Claude Sonnet (3.5, 3.6, 3.7, 4.0) ve Grok (3, 4) ile işbirliğinde geliştirilmiştir ve geliştirme sırasında kod paylaşmak için LLM Context'in kendisi kullanılmıştır. Tüm kod @restlessronin tarafından yoğun şekilde elle düzenlenmiştir.

  ## Kurulum

  ```bash
  uv tool install "llm-context>=0.6.0"
  ```

  ### Ajanlar İçin (Claude Code becerisi)

  Bir ajan olarak llm-context'i görev bağlamlarını düzenlemede yardımcı olması için ayarlıyorsanız, bunu proje başına bir kez çalıştırın:

  ```bash
  uv tool install "llm-context>=0.6.0"   # lc-* komutlarını global olarak kurar
  cd <project-root>
  lc-init                                # .llm-context/ oluşturur, lc-curate-context becerisini .claude/skills/ dosyasına kopyalar
  ```

  `lc-init` sonrasında, `lc-curate-context` becerisi bu projenin Claude Code seansında yüklenir. Minimal bir görev kuralı oluşturmayı ve bağlam oluşturmadan önce `lc-preview` ile doğrulamayı öğretir.

  Daha yeni bir beceri sürümü almak için `uv tool upgrade llm-context` komutunu çalıştırın ve `lc-init` komutunu yeniden çalıştırın — beceri dosyalarını yerinde günceller.

  ## Hızlı Başlangıç

  ### İnsan İş Akışı (Pano)

  ```bash
  # Tek seferlik kurulum
  cd your-project
  lc-init

  # Günlük kullanım
  lc-select
  lc-context
  # LLM sohbetinize yapıştırın
  ```

  ### MCP Entegrasyonu (Önerilen)

  Claude Desktop config dosyasına ekleyin (`~/Library/Application Support/Claude/claude_desktop_config.json`):

  ```jsonc
  {
    "mcpServers": {
      "llm-context": {
        "command": "uvx",
        "args": ["--from", "llm-context", "lc-mcp"]
      }
    }
  }
  ```

  Claude Desktop'ı yeniden başlatın. Artık AI, manuel kopyalama olmadan sohbetler sırasında ek dosyalara erişebilir.

  ### Ajan İş Akışı (CLI)

  Shell erişimine sahip AI ajanları, odaklanmış bağlamlar oluşturmak için llm-context kullanırlar:

  ```bash
  # Ajan kod tabanını araştırır
  lc-outlines

  # Ajan belirli görev için odaklanmış kural oluşturur
  # (Beceri veya lc-rule-instructions aracılığıyla)

  # Ajan kuralı doğrular
  lc-preview tmp-prm-oauth-task

  # Ajan alt görev için bağlamı kullanır
  lc-context tmp-prm-oauth-task
  ```

  ### Ajan İş Akışı (MCP)

  Sohbet ortamlarındaki AI ajanları MCP araçlarını kullanırlar:

  ```bash
  # Kod tabanı yapısını keşfet
  lc_outlines(root_path, rule_name)

  # Kural etkinliğini doğrula  
  lc_preview(root_path, rule_name)

  # Belirli dosyaları/uygulamaları getir
  lc_missing(root_path, param_type, data, timestamp)
  ```

  ## Temel Kavramlar

  ### Kurallar: Görev Özgü Bağlam Tanımlayıcıları

  Kurallar, bir görev için hangi bağlamın sağlanacağını açıklayan YAML+Markdown dosyalarıdır:

  ```yaml
  ---
  description: "API kimlik doğrulamasında hata ayıkla"
  compose:
    filters: [lc/flt-no-files]
    excerpters: [lc/exc-base]
  also-include:
    full-files: ["/src/auth/**", "/tests/auth/**"]
  ---
  Kimlik doğrulama sistemi ve ilgili testlere odaklanın.
  ```

  ### Beş Kural Kategorisi

  - **Prompt Kuralları (`prm-`)**: Proje bağlamları oluştur (örn. `lc/prm-developer`)
  - **Filter Kuralları (`flt-`)**: Dosya içermesini kontrol et (örn. `lc/flt-base`, `lc/flt-no-files`)
  - **Talimat Kuralları (`ins-`)**: Yönergeler sağla (örn. `lc/ins-developer`)
  - **Stil Kuralları (`sty-`)**: Kodlama standartlarını uygula (örn. `lc/sty-python`)
  - **Özet Kuralları (`exc-`)**: İçerik çıkarmayı yapılandır (örn. `lc/exc-base`)

  ### Kural Oluşturma

  Daha basit kurallardan karmaşık kurallar oluşturun:

  ```yaml
  ---
  instructions: [lc/ins-developer, lc/sty-python]
  compose:
    filters: [lc/flt-base, project-filters]
    excerpters: [lc/exc-base]
  ---
  ```

  ## Temel Komutlar

  | Komut                | Amaç                                     |
  | -------------------- | ---------------------------------------- |
  | `lc-init`            | Proje yapılandırmasını başlat            |
  | `lc-select`          | Geçerli kurala göre dosyaları seç       |
  | `lc-context`         | Bağlam oluştur ve kopyala                |
  | `lc-context -p`      | Prompt talimatlarını dahil et            |
  | `lc-context -m`      | Ayrı ileti olarak biçimlendir            |
  | `lc-context -nt`     | Araçsız (manuel iş akışı)                |
  | `lc-set-rule <name>` | Aktif kuralı değiştir                    |
  | `lc-preview <rule>`  | Kural seçimini ve boyutunu doğrula       |
  | `lc-outlines`        | Kod yapısı özetlerini al                 |
  | `lc-missing`         | Dosyaları/uygulamaları getir (manuel MCP) |

  ## AI Destekli Kural Oluşturma

  AI'nin odaklanmış, göreve özel kurallar oluşturmasına yardımcı olun. Ortamınıza bağlı olarak iki yaklaşım:

  ### Claude Becerisi (İnteraktif, Claude Desktop/Code)

  **Nasıl çalışır**: Global beceri sizi etkileşimli olarak kurallar oluşturmada rehberlik eder. Gerektiğinde MCP araçlarını kullanarak kod tabanınızı inceler.

  **Kurulum**:
  ```bash
  lc-init  # Beceriyi ~/.claude/skills/ dosyasına kurar
  # Claude Desktop veya Claude Code'u yeniden başlat
  ```

  **Kullanım**:
  ```bash
  # 1. Proje bağlamını paylaş
  lc-context  # Herhangi bir kural - genel bakış dahil

  # 2. Claude'a yapıştır, sonra sor:
  # "Kimlik doğrulamayı JWT'ye yeniden yapılandırmak için bir kural oluştur"
  # "Ödeme işleminde hata ayıklamak için bir kurala ihtiyacım var"
  ```

  Claude şunları yapacak:
  1. Zaten bağlamda bulunan proje genel görünümünü kullan
  2. Gerektiğinde `lc-missing` aracılığıyla belirli dosyaları incele
  3. Kapsam hakkında açıklayıcı sorular sor
  4. Optimize edilmiş kural oluştur (`tmp-prm-<task>.md`)
  5. Doğrulama talimatlarını sağla

  **Beceri belgelendirmesi** (kademeli olarak açıklanır):
  - `Skill.md` - Hızlı iş akışı, karar desenleri
  - `PATTERNS.md` - Yaygın kural desenleri
  - `SYNTAX.md` - Ayrıntılı referans
  - `EXAMPLES.md` - Tam açıklamalar
  - `TROUBLESHOOTING.md` - Sorun çözme

  ### Talimat Kuralları (Her Yerde Çalışır)

  **Nasıl çalışır**: Kapsamlı kural oluşturma belgelendirmesini bağlama yükle, herhangi bir LLM ile çalış.

  **Kullanım**:
  ```bash
  # 1. Framework'ü yükle
  lc-set-rule lc/prm-rule-create
  lc-select
  lc-context -nt

  # 2. Herhangi bir LLM'ye yapıştır
  # "OAuth entegrasyonu eklemek için bir kurala ihtiyacım var"

  # 3. LLM framework kullanarak odaklanmış kural oluşturur

  # 4. Yeni kuralı kullan
  lc-set-rule tmp-prm-oauth
  lc-select
  lc-context
  ```

  **Dahil edilen belgelendirme**:
  - `lc/ins-rule-intro` - Giriş ve genel bakış
  - `lc/ins-rule-framework` - Tam karar framework'ü

  ### Karşılaştırma

  | Yön                       | Beceri                          | Talimat Kuralları        |
  | ------------------------- | ------------------------------- | ------------------------ |
  | **Kurulum**               | `lc-init` ile otomatik          | Zaten mevcut             |
  | **Etkileşim**             | İnteraktif, `lc-missing` kullanır | Statik belgelendirme     |
  | **Dosya incelemesi**      | MCP aracılığıyla otomatik       | Manuel veya AI aracılığıyla |
  | **En uygun**              | Claude Desktop/Code             | Herhangi bir LLM, herhangi bir ortam |
  | **Güncellemeler**         | Sürüm yükseltmeleriyle otomatik | Kurallara yerleştirilmiş |

  Her ikisi de ilk olarak proje bağlamını paylaşmayı gerektirir. Her ikisi de eşdeğer sonuçlar üretir.

  ## Proje Özelleştirmesi

  ### Temel Filterler Oluştur

  ```bash
  cat > .llm-context/rules/flt-repo-base.md << 'EOF'
  ---
  description: "Depoya özgü hariç tutmalar"
  compose:
    filters: [lc/flt-base]
  gitignores:
    full-files: ["*.md", "/tests", "/node_modules"]
    excerpted-files: ["*.md", "/tests"]
  ---
  EOF
  ```

  ### Geliştirme Kuralı Oluştur

  ```bash
  cat > .llm-context/rules/prm-code.md << 'EOF'
  ---
  description: "Ana geliştirme kuralı"
  instructions: [lc/ins-developer, lc/sty-python]
  compose:
    filters: [flt-repo-base]
    excerpters: [lc/exc-base]
  ---
  Ek projeye özel yönergeler ve bağlam.
  EOF

  lc-set-rule prm-code
  ```

  ## Dağıtım Desenleri

  Biçimi LLM ortamınıza göre seçin:

  | Desen                 | Komut            | Kullanım Durumu            |
  | --------------------- | ---------------- | -------------------------- |
  | Sistem İletisi        | `lc-context -p`  | AI Studio, vb.             |
  | Tek Kullanıcı İletisi | `lc-context -p -m` | Grok, vb.                |
  | Ayrı İletiler         | `lc-prompt` + `lc-context -m` | Esnek yerleştirme |
  | Proje Dosyaları (dahil) | `lc-context`   | Claude Projects, vb.       |
  | Proje Dosyaları (aranabilir) | `lc-context -m` | Bağlama zorla |

  Ayrıntılar için [Dağıtım Desenleri](docs/user-guide.md#deployment-patterns) bölümüne bakın.

  ## Temel Özellikler

  - **Akıllı Seçim**: Kurallar otomatik olarak uygun dosyaları içerir/hariç tutar
  - **Bağlam Doğrulaması**: Oluşturmadan önce boyutu ve seçimi önizle
  - **Kod Özetleme**: Token'ları azaltırken yapı çıkart (15+ dil)
  - **MCP Entegrasyonu**: AI manuel müdahale olmadan ek dosyalara erişir
  - **Birleştirilebilir Kurallar**: Yeniden kullanılabilir desenlerdeki karmaşık bağlamlar oluştur
  - **AI Destekli Oluşturma**: İnteraktif beceri veya belgelendirme tabanlı yaklaşımlar
  - **Ajan Dostu**: Otonom çalışma için CLI ve MCP arayüzleri

  ## Yaygın İş Akışları

  ### Günlük Geliştirme (İnsan)

  ```bash
  lc-set-rule prm-code
  lc-select
  lc-context
  # Sohbete yapıştır - AI gerekirse MCP aracılığıyla daha fazla dosyaya erişir
  ```

  ### Odaklanmış Görev (İnsan veya Ajan)

  ```bash
  # İlk olarak proje bağlamını paylaş
  lc-context

  # Sonra odaklanmış kural oluştur:
  # Beceri aracılığıyla: "Şu için bir kural oluştur: [görev]"
  # Talimatlar aracılığıyla: lc-set-rule lc/prm-rule-create && lc-context -nt

  # Doğrula ve kullan
  lc-preview tmp-prm-task
  lc-context tmp-prm-task
  ```

  ### Ajan Bağlam Sağlaması (CLI)

  ```bash
  # Ajan kural etkinliğini doğrular
  lc-preview tmp-prm-refactor-auth

  # Ajan alt ajan için bağlam oluşturur
  lc-context tmp-prm-refactor-auth > /tmp/context.md
  # Alt ajan bağlamı okur ve görevi yürütür
  ```

  ### Ajan Bağlam Sağlaması (MCP)

  ```python
  # Ajan kuralı doğrular
  preview = lc_preview(root_path="/path/to/project", rule_name="tmp-prm-task")

  # Ajan bağlam oluşturur
  context = lc_outlines(root_path="/path/to/project")

  # Ajan gerektiğinde ek dosyaları getirir
  files = lc_missing(root_path, "f", "['/proj/src/auth.py']", timestamp)
  ```

  ## Yol Biçimi

  Tüm yollar proje adı ön eki ile proje göreceli biçimini kullanır:

  ```
  /{project-name}/src/module/file.py
  /{project-name}/tests/test_module.py
  ```

  Bu, yol çakışmaları olmadan çok projeli bağlam oluşturmayı sağlar.

  **Kurallarda**, desenleri ön ek olmadan proje göreceli dosyalardır:
  ```yaml
  also-include:
    full-files:
      - "/src/auth/**"      # ✓ Doğru
      - "/myproject/src/**" # ✗ Yanlış - proje adını ekleme
  ```

  ## Daha Fazla Bilgi

  - **[Kullanıcı Kılavuzu](docs/user-guide.md)** - Örneklerle tam belgelendirme
  - **[Tasarım Felsefesi](https://www.cyberchitta.cc/articles/llm-ctx-why.html)** - llm-context'in neden var olduğu
  - **[Gerçek Dünya Örnekleri](https://www.cyberchitta.cc/articles/full-context-magic.html)** - Tam bağlamı etkili şekilde kullanma

  ## Lisans

  Apache Lisansı, Sürüm 2.0. Ayrıntılar için [LICENSE](LICENSE) dosyasına bakın.
---

# LLM Context

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![PyPI version](https://img.shields.io/pypi/v/llm-context.svg)](https://pypi.org/project/llm-context/)
[![Downloads](https://static.pepy.tech/badge/llm-context/week)](https://pepy.tech/project/llm-context)

**Smart context management for LLM development workflows.** Share relevant project files instantly through intelligent selection and rule-based filtering.

## The Problem

Getting the right context into LLM conversations is friction-heavy:

- Manually finding and copying relevant files wastes time
- Too much context hits token limits, too little misses important details
- AI requests for additional files require manual fetching
- Hard to track what changed during development sessions

## The Solution

llm-context provides focused, task-specific project context through composable rules.

**For humans using chat interfaces:**
```bash
lc-select   # Smart file selection
lc-context  # Copy formatted context to clipboard
# Paste and work - AI can access additional files via MCP
```

**For AI agents with CLI access:**
```bash
lc-preview tmp-prm-auth    # Validate rule selects right files
lc-context tmp-prm-auth    # Get focused context for sub-agent
```

**For AI agents in chat (MCP tools):**
- `lc_outlines` - Generate excerpted context from current rule
- `lc_preview` - Validate rule effectiveness before use
- `lc_missing` - Fetch specific files/implementations on demand

> **Note**: This project was developed in collaboration with several Claude Sonnets (3.5, 3.6, 3.7, 4.0) and Groks (3, 4), using LLM Context itself to share code during development. All code is heavily human-curated by @restlessronin.

## Installation

```bash
uv tool install "llm-context>=0.6.0"
```

### For Agents (Claude Code skill)

If you're an agent setting llm-context up to help curate task contexts, run this once per project:

```bash
uv tool install "llm-context>=0.6.0"   # installs the lc-* commands globally
cd <project-root>
lc-init                                # creates .llm-context/, copies the lc-curate-context skill to .claude/skills/
```

After `lc-init`, the `lc-curate-context` skill loads in this project's Claude Code session. It teaches how to compose a minimal task rule and verify it with `lc-preview` before generating context.

To pick up a newer skill version, run `uv tool upgrade llm-context` and re-run `lc-init` — it refreshes the skill files in place.

## Quick Start

### Human Workflow (Clipboard)

```bash
# One-time setup
cd your-project
lc-init

# Daily usage
lc-select
lc-context
# Paste into your LLM chat
```

### MCP Integration (Recommended)

Add to Claude Desktop config (`~/Library/Application Support/Claude/claude_desktop_config.json`):

```jsonc
{
  "mcpServers": {
    "llm-context": {
      "command": "uvx",
      "args": ["--from", "llm-context", "lc-mcp"]
    }
  }
}
```

Restart Claude Desktop. Now AI can access additional files during conversations without manual copying.

### Agent Workflow (CLI)

AI agents with shell access use llm-context to create focused contexts:

```bash
# Agent explores codebase
lc-outlines

# Agent creates focused rule for specific task
# (via Skill or lc-rule-instructions)

# Agent validates rule
lc-preview tmp-prm-oauth-task

# Agent uses context for sub-task
lc-context tmp-prm-oauth-task
```

### Agent Workflow (MCP)

AI agents in chat environments use MCP tools:

```bash
# Explore codebase structure
lc_outlines(root_path, rule_name)

# Validate rule effectiveness  
lc_preview(root_path, rule_name)

# Fetch specific files/implementations
lc_missing(root_path, param_type, data, timestamp)
```

## Core Concepts

### Rules: Task-Specific Context Descriptors

Rules are YAML+Markdown files that describe what context to provide for a task:

```yaml
---
description: "Debug API authentication"
compose:
  filters: [lc/flt-no-files]
  excerpters: [lc/exc-base]
also-include:
  full-files: ["/src/auth/**", "/tests/auth/**"]
---
Focus on authentication system and related tests.
```

### Five Rule Categories

- **Prompt Rules (`prm-`)**: Generate project contexts (e.g., `lc/prm-developer`)
- **Filter Rules (`flt-`)**: Control file inclusion (e.g., `lc/flt-base`, `lc/flt-no-files`)
- **Instruction Rules (`ins-`)**: Provide guidelines (e.g., `lc/ins-developer`)
- **Style Rules (`sty-`)**: Enforce coding standards (e.g., `lc/sty-python`)
- **Excerpt Rules (`exc-`)**: Configure content extraction (e.g., `lc/exc-base`)

### Rule Composition

Build complex rules from simpler ones:

```yaml
---
instructions: [lc/ins-developer, lc/sty-python]
compose:
  filters: [lc/flt-base, project-filters]
  excerpters: [lc/exc-base]
---
```

## Essential Commands

| Command              | Purpose                                  |
| -------------------- | ---------------------------------------- |
| `lc-init`            | Initialize project configuration         |
| `lc-select`          | Select files based on current rule       |
| `lc-context`         | Generate and copy context                |
| `lc-context -p`      | Include prompt instructions              |
| `lc-context -m`      | Format as separate message               |
| `lc-context -nt`     | No tools (manual workflow)               |
| `lc-set-rule <name>` | Switch active rule                       |
| `lc-preview <rule>`  | Validate rule selection and size         |
| `lc-outlines`        | Get code structure excerpts              |
| `lc-missing`         | Fetch files/implementations (manual MCP) |

## AI-Assisted Rule Creation

Let AI help create focused, task-specific rules. Two approaches depending on your environment:

### Claude Skill (Interactive, Claude Desktop/Code)

**How it works**: Global skill guides you through creating rules interactively. Examines your codebase as needed using MCP tools.

**Setup**:
```bash
lc-init  # Installs skill to ~/.claude/skills/
# Restart Claude Desktop or Claude Code
```

**Usage**:
```bash
# 1. Share project context
lc-context  # Any rule - overview included

# 2. Paste into Claude, then ask:
# "Create a rule for refactoring authentication to JWT"
# "I need a rule to debug the payment processing"
```

Claude will:
1. Use project overview already in context
2. Examine specific files via `lc-missing` as needed
3. Ask clarifying questions about scope
4. Generate optimized rule (`tmp-prm-<task>.md`)
5. Provide validation instructions

**Skill documentation** (progressively disclosed):
- `Skill.md` - Quick workflow, decision patterns
- `PATTERNS.md` - Common rule patterns
- `SYNTAX.md` - Detailed reference
- `EXAMPLES.md` - Complete walkthroughs
- `TROUBLESHOOTING.md` - Problem solving

### Instruction Rules (Works Anywhere)

**How it works**: Load comprehensive rule-creation documentation into context, work with any LLM.

**Usage**:
```bash
# 1. Load framework
lc-set-rule lc/prm-rule-create
lc-select
lc-context -nt

# 2. Paste into any LLM
# "I need a rule for adding OAuth integration"

# 3. LLM generates focused rule using framework

# 4. Use the new rule
lc-set-rule tmp-prm-oauth
lc-select
lc-context
```

**Included documentation**:
- `lc/ins-rule-intro` - Introduction and overview
- `lc/ins-rule-framework` - Complete decision framework

### Comparison

| Aspect                    | Skill                           | Instruction Rules        |
| ------------------------- | ------------------------------- | ------------------------ |
| **Setup**                 | Automatic with `lc-init`        | Already available        |
| **Interaction**           | Interactive, uses `lc-missing`  | Static documentation     |
| **File examination**      | Automatic via MCP               | Manual or via AI         |
| **Best for**              | Claude Desktop/Code             | Any LLM, any environment |
| **Updates**               | Automatic with version upgrades | Built-in to rules        |

Both require sharing project context first. Both produce equivalent results.

## Project Customization

### Create Base Filters

```bash
cat > .llm-context/rules/flt-repo-base.md << 'EOF'
---
description: "Repository-specific exclusions"
compose:
  filters: [lc/flt-base]
gitignores:
  full-files: ["*.md", "/tests", "/node_modules"]
  excerpted-files: ["*.md", "/tests"]
---
EOF
```

### Create Development Rule

```bash
cat > .llm-context/rules/prm-code.md << 'EOF'
---
description: "Main development rule"
instructions: [lc/ins-developer, lc/sty-python]
compose:
  filters: [flt-repo-base]
  excerpters: [lc/exc-base]
---
Additional project-specific guidelines and context.
EOF

lc-set-rule prm-code
```

## Deployment Patterns

Choose format based on your LLM environment:

| Pattern               | Command          | Use Case                  |
| --------------------- | ---------------- | ------------------------- |
| System Message        | `lc-context -p`  | AI Studio, etc.           |
| Single User Message   | `lc-context -p -m` | Grok, etc.              |
| Separate Messages     | `lc-prompt` + `lc-context -m` | Flexible placement |
| Project Files (included) | `lc-context`  | Claude Projects, etc.     |
| Project Files (searchable) | `lc-context -m` | Force into context     |

See [Deployment Patterns](docs/user-guide.md#deployment-patterns) for details.

## Key Features

- **Intelligent Selection**: Rules automatically include/exclude appropriate files
- **Context Validation**: Preview size and selection before generation
- **Code Excerpting**: Extract structure while reducing tokens (15+ languages)
- **MCP Integration**: AI accesses additional files without manual intervention
- **Composable Rules**: Build complex contexts from reusable patterns
- **AI-Assisted Creation**: Interactive skill or documentation-based approaches
- **Agent-Friendly**: CLI and MCP interfaces for autonomous operation

## Common Workflows

### Daily Development (Human)

```bash
lc-set-rule prm-code
lc-select
lc-context
# Paste into chat - AI accesses more files via MCP if needed
```

### Focused Task (Human or Agent)

```bash
# Share project context first
lc-context

# Then create focused rule:
# Via Skill: "Create a rule for [task]"
# Via Instructions: lc-set-rule lc/prm-rule-create && lc-context -nt

# Validate and use
lc-preview tmp-prm-task
lc-context tmp-prm-task
```

### Agent Context Provisioning (CLI)

```bash
# Agent validates rule effectiveness
lc-preview tmp-prm-refactor-auth

# Agent generates context for sub-agent
lc-context tmp-prm-refactor-auth > /tmp/context.md
# Sub-agent reads context and executes task
```

### Agent Context Provisioning (MCP)

```python
# Agent validates rule
preview = lc_preview(root_path="/path/to/project", rule_name="tmp-prm-task")

# Agent generates context
context = lc_outlines(root_path="/path/to/project")

# Agent fetches additional files as needed
files = lc_missing(root_path, "f", "['/proj/src/auth.py']", timestamp)
```

## Path Format

All paths use project-relative format with project name prefix:

```
/{project-name}/src/module/file.py
/{project-name}/tests/test_module.py
```

This enables multi-project context composition without path conflicts.

**In rules**, patterns are project-relative without the prefix:
```yaml
also-include:
  full-files:
    - "/src/auth/**"      # ✓ Correct
    - "/myproject/src/**" # ✗ Wrong - don't include project name
```

## Learn More

- **[User Guide](docs/user-guide.md)** - Complete documentation with examples
- **[Design Philosophy](https://www.cyberchitta.cc/articles/llm-ctx-why.html)** - Why llm-context exists
- **[Real-world Examples](https://www.cyberchitta.cc/articles/full-context-magic.html)** - Using full context effectively

## License

Apache License, Version 2.0. See [LICENSE](LICENSE) for details.
