---
name: "stippi/code-assistant"
description: "Coding agent with basic list, read, replace_in_file, write, execute_command and web search tools. Supports multiple projects concurrently."
description_tr: "Temel list, read, replace_in_file, write, execute_command ve web search araçlarına sahip coding agent. Birden fazla projeyi aynı anda destekler."
category: "Coding Agents"
repo: "stippi/code-assistant"
stars: 164
url: "https://github.com/stippi/code-assistant"
body_length: 13639
license: "MIT"
language: "Rust"
body_tr: |-
  # Code Assistant

  [![CI](https://github.com/stippi/code-assistant/actions/workflows/build.yml/badge.svg)](https://github.com/stippi/code-assistant/actions/workflows/build.yml)
  [![Trust Score](https://archestra.ai/mcp-catalog/api/badge/quality/stippi/code-assistant)](https://archestra.ai/mcp-catalog/stippi__code-assistant)

  Rust'ta inşa edilmiş, otonom kod analizi ve modifikasyonu için komut satırı ve grafik arayüzler sağlayan bir AI coding assistant.

  ## Ana Özellikler

  **Multi-Modal Tool Execution**: Farklı LLM yeteneklerine uyum sağlar ve yerel function calling, XML-tarzı etiketler ve triple-caret blokları içeren takılabilir tool invocation modları sayesinde çeşitli AI sağlayıcıları arasında uyumluluğu garanti eder.

  **Real-Time Streaming Interface**: Gelişmiş streaming işlemcileri, LLM'den akan tool invocation'ları ayrıştırır ve görüntüler. Güvenli olmayan tool kombinasyonlarını engellemek için akıllı filtreleme sağlar.

  **Session-Based Project Management**: Her chat session belirli bir projeye bağlıdır ve kalıcı state, working memory ve ek destek ile draft mesajları korur.

  **Multiple Interface Options**: Zed'in GPUI framework'ü üzerine inşa edilmiş modern GUI, geleneksel terminal arayüzü veya Claude Desktop gibi MCP istemcileriyle entegrasyonun headless MCP server modu arasından seçim yapın.

  **Agent Client Protocol (ACP) Support**: [Agent Client Protocol](https://agentclientprotocol.com/) standardıyla tam uyumlu, [Zed](https://zed.dev) gibi ACP-uyumlu editörlerle sorunsuz entegrasyonı sağlar. Kurulum talimatları için Zed'in [özel agent ekleme](https://zed.dev/docs/ai/external-agents#add-custom-agents) belgelerine bakın.

  **Session Compaction**: Context alanı bitmeden önce, agent bir session özeti oluşturur ve çalışmaya devam eder.

  **Auto-Loaded Repository Guidance**: Proje kökünden `AGENTS.md` (veya `CLAUDE.md` yedekleme) dosyasını otomatik olarak assistant'ın sistem bağlamına dahil eder ve davranışı repo'ya özel talimatlarla hizalar.

  ## Kurulum

  ```bash
  # macOS veya Linux üzerinde, rustup aracılığıyla Rust tool chain'i kurun:
  curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh

  # Linux üzerinde, libxkbcommon‑dev ve libxkbcommon‑x11‑dev paketlerini kurun

  # macOS üzerinde, metal tool chain'e ihtiyacınız vardır:
  xcodebuild -downloadComponent MetalToolchain

  # Ardından repo'yu clone edin ve derleyin:
  git clone https://github.com/stippi/code-assistant
  cd code-assistant
  cargo build --release
  ```

  Binary `target/release/code-assistant` adresinde kullanılabilir olacaktır.

  ### İlk Kurulum

  Derlemeden sonra konfigürasyon dosyalarınızı oluşturun:

  ```bash
  # Config dizini oluştur
  mkdir -p ~/.config/code-assistant

  # Örnek konfigürasyonları kopyala
  cp providers.example.json ~/.config/code-assistant/providers.json
  cp models.example.json ~/.config/code-assistant/models.json

  # API key'lerinizi eklemek için dosyaları düzenleyin
  # Environment variable'ları ayarlayın veya JSON dosyalarını doğrudan güncelleyin
  export ANTHROPIC_API_KEY="sk-ant-..."
  export OPENAI_API_KEY="sk-..."
  ```

  Ayrıntılı kurulum talimatları için [Configuration](#configuration) bölümüne bakın.

  ## Proje Konfigürasyonu

  Mevcut projeleri tanımlamak için `~/.config/code-assistant/projects.json` oluşturun:

  ```jsonc
  {
    "code-assistant": {
      "path": "/Users/<username>/workspace/code-assistant",
      "format_on_save": {
        "**/*.rs": "cargo fmt" // Projede tüm dosyaları biçimlendirir, bu nedenle dosyaların zaten biçimlendirilmiş olduğundan emin olun
      }
    },
    "my-project": {
      "path": "/Users/<username>/workspace/my-project",
      "format_on_save": {
        "**/*.ts": "prettier --write {path}" // Formatlayıcı bir path kabul ederse "{path}" sağlayın
      }
    }
  }
  ```

  ### Format-on-Save Özelliği

  _İsteğe bağlı_ `format_on_save` alanı, modifikasyonlardan sonra dosyaların otomatik biçimlendirilmesine izin verir. Dosya desenlerini (glob sözdizimi kullanarak) shell komutlarıyla eşleştirir:
  - Glob desenlerine uyan dosyalar, assistant tarafından değiştirildikten sonra otomatik olarak biçimlendirilir
  - Tool parametreleri, biçimlendirilmiş içeriği yansıtmak üzere güncellenir ve LLM'nin mental modelini senkronize tutar
  - Bu, auto-formatting nedeniyle oluşan edit çakışmalarını önler

  Ayrıntılı dokumentasyon için [docs/format-on-save-feature.md](docs/format-on-save-feature.md) dosyasına bakın.

  **Önemli Notlar:**
  - Bu konfigürasyonda olmayan bir klasörden başlatırken, geçici bir proje otomatik olarak oluşturulur
  - Assistant'ın mevcut projeye (geçici olanlar da dahil) ve yapılandırılmış tüm projelere erişimi vardır
  - Her chat session kalıcı olarak ilk projesine ve klasörüne bağlıdır - bu daha sonra değiştirilemez
  - Tool sözdizimi (native/xml/caret) da session oluşturma sırasında sabitlenir

  ## Kullanım

  ### GUI Modu (Önerilir)

  ```bash
  # Grafik arayüzü ile başlat
  code-assistant --ui

  # Başlangıç görevi ile GUI'yi başlat
  code-assistant --ui --task "Kimlik doğrulama sistemini analiz et"
  ```

  ### Terminal Modu

  ```bash
  # Temel kullanım
  code-assistant --task "Bu kod tabanının amacını açıkla"

  # Belirli model ile
  code-assistant --task "Hata işleme ekle" --model "GPT-5"
  ```

  ### Çalışma Dizini Önemli

  `code-assistant`'ı başlattığınız dizin, session'ınızın proje bağlamını belirler. Assistant, çalışma dizininizi (PWD) hangi kod tabanı üzerinde çalıştığınızı anlamak için kullanır - dosya işlemleri, aramaları ve tool yürütmesini bu dizine kapsamlandırır.

  **En iyi pratik:** `code-assistant`'ı başlatmadan önce her zaman projenizin kök dizinine `cd` yapın.

  ```bash
  cd ~/workspace/my-project
  code-assistant --ui
  ```

  Sohbetler **dizin tarafından gruplandırılır**, bu nedenle doğru proje dizininden yeni bir sohbet başlatmak şunları sağlar:
  - Assistant'ın doğru dosya bağlamı vardır ve kod tabanınızda gezinebilir
  - Konuşma geçmişiniz proje başına organize kalır
  - O projeden `AGENTS.md` veya `CLAUDE.md` rehber dosyaları otomatik olarak yüklenir

  Farklı bir proje üzerinde çalışmanız gerekirse, mevcut bir session'ı başka bir yerden yeniden kullanmak yerine o projenin dizininden yeni bir sohbet açın.

  ### MCP Server Modu

  ```bash
  code-assistant server
  ```

  ### ACP Agent Modu

  ```bash
  # ACP-uyumlu agent olarak çalıştır
  code-assistant acp

  # Belirli model ile
  code-assistant acp --model "Claude Sonnet 4.5"
  ```

  ACP modu, [Agent Client Protocol](https://agentclientprotocol.com/) destekleyen editörlerle entegrasyonu sağlar; örneğin [Zed](https://zed.dev). ACP modunda çalışırken, code-assistant stdin/stdout üzerinden JSON-RPC aracılığıyla iletişim kurar ve bekleyen mesajlar, real-time streaming ve uygun izin işleme ile tool yürütmesi gibi özellikleri destekler.

  ## Konfigürasyon

  ### Model Konfigürasyonu

  Code-assistant, LLM sağlayıcılarını ve modellerini yönetmek için iki JSON konfigürasyon dosyası kullanır:

  **`~/.config/code-assistant/providers.json`** - Sağlayıcı kimlik bilgileri ve uç noktalarını yapılandırın:
  ```json
  {
    "anthropic": {
      "label": "Anthropic Claude",
      "provider": "anthropic",
      "config": {
        "api_key": "${ANTHROPIC_API_KEY}",
        "base_url": "https://api.anthropic.com/v1"
      }
    },
    "openai": {
      "label": "OpenAI",
      "provider": "openai-responses",
      "config": {
        "api_key": "${OPENAI_API_KEY}"
      }
    }
  }
  ```

  **`~/.config/code-assistant/models.json`** - Mevcut modelleri tanımlayın:
  ```json
  {
    "Claude Sonnet 4.5 (Thinking)": {
      "provider": "anthropic",
      "id": "claude-sonnet-4-5",
      "config": {
        "max_tokens": 32768,
        "thinking": {
          "type": "enabled",
          "budget_tokens": 8192
        }
      }
    },
    "Claude Sonnet 4.5": {
      "provider": "anthropic",
      "id": "claude-sonnet-4-5",
      "config": {
        "max_tokens": 32768
      }
    },
    "GPT-5": {
      "provider": "openai",
      "id": "gpt-5-codex",
      "config": {
        "temperature": 0.7
      }
    }
  }
  ```

  **Environment Variable Substitution**: API key'lerine başvurmak için sağlayıcı konfigürasyonlarında `${VAR_NAME}` kullanın.

  **Tam Örnekler**: Tüm desteklenen sağlayıcılarla (Anthropic, OpenAI, Ollama, SAP AI Core, Vertex AI, Groq, Cerebras, MistralAI, OpenRouter) tam konfigürasyon örnekleri için [`providers.example.json`](providers.example.json) ve [`models.example.json`](models.example.json) dosyalarına bakın.

  ### Tool Konfigürasyonu

  Bazı tools, işlevsellik görmek için harici API key'lerine ihtiyaç duyar. Bunları `~/.config/code-assistant/tools.json` dosyasında yapılandırın:

  ```json
  {
    "perplexity_api_key": "${PERPLEXITY_API_KEY}"
  }
  ```

  **Kullanılabilir Tool Ayarları**:
  - `perplexity_api_key` - AI destekli web araması için `perplexity_ask` toolunu etkinleştirir

  Gerekli konfigürasyonu olmayan tools, assistant tarafından kullanılabilir olmayacaktır.

  **Mevcut Modelleri Listele**:
  ```bash
  # Yapılandırılmış tüm modelleri gör
  code-assistant --list-models

  # Yapılandırılmış tüm sağlayıcıları gör
  code-assistant --list-providers
  ```

  <details>
  <summary>Claude Desktop Entegrasyonu (MCP)</summary>

  Claude Desktop ayarlarında yapılandırın (**Developer** sekmesi → **Edit Config**):

  ```jsonc
  {
    "mcpServers": {
      "code-assistant": {
        "command": "/path/to/code-assistant/target/release/code-assistant",
        "args": ["server"],
        "env": {
          "SHELL": "/bin/zsh"                 // Giriş shell'iniz
        }
      }
    }
  }
  ```

  </details>

  <details>
  <summary>Zed Editor Entegrasyonu (ACP)</summary>

  Zed ayarlarında yapılandırın:

  ```json
  {
    "agent_servers": {
      "Code-Assistant": {
        "command": "/path/to/code-assistant/target/release/code-assistant",
        "args": ["acp", "--model", "Claude Sonnet 4.5"],
        "env": {
          "ANTHROPIC_API_KEY": "sk-ant-..."
        }
      }
    }
  }
  ```

  `providers.json` ve `models.json` dosyalarınızın belirttiğiniz model ile yapılandırıldığından emin olun. Agent, tam ACP desteği ile Zed'in assistant panelinde görünecektir.

  Ayrıntılı kurulum talimatları için [Zed'in özel agent ekleme belgelerine](https://zed.dev/docs/ai/external-agents#add-custom-agents) bakın.
  </details>

  <details>
  <summary>Gelişmiş Seçenekler</summary>

  **Tool Syntax Modları**:
  - `--tool-syntax native`: Sağlayıcının yerleşik tool calling'ini kullan (en güvenilir, ancak parametrelerin streaming'i sağlayıcıya bağlıdır)
  - `--tool-syntax xml`: Parametrelerin streaming'i için XML-tarzı etiketler
  - `--tool-syntax caret`: Token verimliliği ve parametrelerin streaming'i için triple-caret blokları

  **Session Kaydı**:
  ```bash
  # Session'ı kaydet (yalnızca Anthropic)
  code-assistant --record session.json --model "Claude Sonnet 4.5" --task "Veritabanı sorgularını optimize et"

  # Session'ı oynat
  code-assistant --playback session.json --fast-playback
  ```

  **Diğer Seçenekler**:
  - `--model <name>`: models.json dosyasından model belirtin (mevcut seçenekleri görmek için `--list-models` kullanın)
  - `--continue-task`: Önceki session state'inden devam et
  - `--use-diff-format`: Dosya düzenleme için alternatif diff formatını etkinleştir
  - `--sandbox-mode <danger-full-access|read-only|workspace-write>`: Command yürütmesi için sandbox politikasını seçin (varsayılan `danger-full-access`)
  - `--sandbox-network`: `--sandbox-mode workspace-write` ile birleştirildiğinde, sandbox içinde giden ağ erişimine izin ver
  - `--verbose` / `-v`: Ayrıntılı günlüğü etkinleştir (daha fazla verbosity için birden çok kez kullanın)
  </details>

  ## Mimari Vurgular

  Code-assistant birkaç yenilikçi mimari kararı içerir:

  **Adaptive Tool Syntax**: Hedef LLM'nin yeteneklerine bağlı olarak farklı sistem istekleri ve streaming işlemcilerini otomatik olarak oluşturur. Aynı çekirdek mantığın farklı function calling desteğine sahip sağlayıcılar arasında çalışmasını sağlar.

  **Smart Tool Filtering**: Dosyaları okumadan önce düzenlemeyi denemeyi engeller gibi mantıksal hataları önleyen gerçek zamanlı tool invocation analizi. Güvenli olmayan kombinasyonlar algılandığında yanıtları mid-stream'de kesebilir.

  **Multi-Threaded Streaming**: Tool invocation'ların gerçek zamanlı ayrıştırılmasını işleyen, UI güncellemelerini duyarlı tutan ve birden fazla chat session'ında uygun state yönetimini sağlayan sofistike async mimarisi.

  ## Katkı Sağlama

  Katkılar hoşlanır! Kod tabanı, async Rust, AI agent mimarisi ve cross-platform UI geliştirmeyle ilgili gelişmiş modelleri gösterir.

  ## Yol Haritası

  Bu bölüm gerçekten bir yol haritası değildir, çünkü öğeler belirli bir düzende değildir.
  Aşağıda, muhtemelen sonraki odak olacak bazı konular vardır.

  - **Block Replacing in Changed Files**: Bir tool use bloğunu stream ederken, LLM'nin `replace_in_file` kullanmaya çalıştığını ve oldukça erken hangi dosyada olduğunu zaten biliyoruz.
    Ayrıca bu dosyanın LLM'nin onu son okumasından beri değiştirildiğini bilirsek, uygun bir hata mesajı ile girişimi engelleyebiliriz.
  - **Compact Tool Use Failures**: LLM geçersiz bir tool call ürettiğinde veya uyumsuz bir search block ürettiğinde, başarısız girişimi mesaj geçmişinden çıkararak token'lar tasarruf edebilmeliyiz.
  - **Improve UI**: UI'ın geliştirilmesinin çeşitli yolları vardır.
  - **Add Memory Tools**: Belirli bir projede çalışırken kullanışlı bir bilgi tabanı oluşturmayı kolaylaştıran tools ekleyin.
  - **Security**: İdeal olarak, tüm tools'lar için yürütme, git tarafından izlenen projede dosyalara erişimi sınırlandıran bir tür sandbox'ta çalışacaktır.
    Şu anda, tools absolute path'leri reddeder, ancak relative path'lerin projenin dışına işaret edip etmediğini veya git-ignored dosyalara erişmeye çalışıp çalışmadığını kontrol etmez.
    `execute_command` tool'u, sağlanan komut satırı ile bir shell çalıştırır ve bu anda tamamen kontrol edilmemiştir.
  - **Fuzzy matching search blocks**: Fuzzy matching search blocks'ların faydalarını araştırın.
    Şu anda, dosyalar normalize edilir (her zaman `\n` satır sonları, sondaki boşluk yok).
    Bu, search block'ları eşleştirme başarı oranını oldukça artırır, ancak belirli fuzzy matching yolları başarıyı daha da artırabilir.
    Başarısız eşleşmeler, neredeyse her zaman LLM'yi bir dosyayı yeniden okumasını tetikledikleri için oldukça fazla verimsizliğe neden olur.
    `replace_in_file` tool'unun hata çıktısı tam dosyayı içerip LLM'ye dosyayı yeniden *okumaması* söylese bile.
---

# Code Assistant

[![CI](https://github.com/stippi/code-assistant/actions/workflows/build.yml/badge.svg)](https://github.com/stippi/code-assistant/actions/workflows/build.yml)
[![Trust Score](https://archestra.ai/mcp-catalog/api/badge/quality/stippi/code-assistant)](https://archestra.ai/mcp-catalog/stippi__code-assistant)

An AI coding assistant built in Rust that provides both command-line and graphical interfaces for autonomous code analysis and modification.

## Key Features

**Multi-Modal Tool Execution**: Adapts to different LLM capabilities with pluggable tool invocation modes - native function calling, XML-style tags, and triple-caret blocks - ensuring compatibility across various AI providers.

**Real-Time Streaming Interface**: Advanced streaming processors parse and display tool invocations as they stream from the LLM, with smart filtering to prevent unsafe tool combinations.

**Session-Based Project Management**: Each chat session is tied to a specific project and maintains persistent state, working memory, and draft messages with attachment support.

**Multiple Interface Options**: Choose between a modern GUI built on Zed's GPUI framework, traditional terminal interface, or headless MCP server mode for integration with MCP clients such as Claude Desktop.

**Agent Client Protocol (ACP) Support**: Full compatibility with the [Agent Client Protocol](https://agentclientprotocol.com/) standard, enabling seamless integration with ACP-compatible editors like [Zed](https://zed.dev). See Zed's documentation on [adding custom agents](https://zed.dev/docs/ai/external-agents#add-custom-agents) for setup instructions.

**Session Compaction**: Before running out of context space, the agent generates a session summary and continues work.

**Auto-Loaded Repository Guidance**: Automatically includes `AGENTS.md` (or `CLAUDE.md` fallback) from the project root in the assistant's system context to align behavior with repo-specific instructions.

## Installation

```bash
# On macOS or Linux, install Rust tool chain via rustup:
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh

# On Linux, install libxkbcommon‑dev and libxkbcommon‑x11‑dev

# On macOS, you need the metal tool chain:
xcodebuild -downloadComponent MetalToolchain

# Then clone the repo and build it:
git clone https://github.com/stippi/code-assistant
cd code-assistant
cargo build --release
```

The binary will be available at `target/release/code-assistant`.

### Initial Setup

After building, create your configuration files:

```bash
# Create config directory
mkdir -p ~/.config/code-assistant

# Copy example configurations
cp providers.example.json ~/.config/code-assistant/providers.json
cp models.example.json ~/.config/code-assistant/models.json

# Edit the files to add your API keys
# Set environment variables or update the JSON files directly
export ANTHROPIC_API_KEY="sk-ant-..."
export OPENAI_API_KEY="sk-..."
```

See the [Configuration](#configuration) section for detailed setup instructions.

## Project Configuration

Create `~/.config/code-assistant/projects.json` to define available projects:

```jsonc
{
  "code-assistant": {
    "path": "/Users/<username>/workspace/code-assistant",
    "format_on_save": {
      "**/*.rs": "cargo fmt" // Formats all files in project, so make sure files are already formatted
    }
  },
  "my-project": {
    "path": "/Users/<username>/workspace/my-project",
    "format_on_save": {
      "**/*.ts": "prettier --write {path}" // If the formatter accepts a path, provide "{path}"
    }
  }
}
```

### Format-on-Save Feature

The _optional_ `format_on_save` field allows automatic formatting of files after modifications. It maps file patterns (using glob syntax) to shell commands:
- Files matching the glob patterns will be automatically formatted after being modified by the assistant
- The tool parameters are updated to reflect the formatted content, keeping the LLM's mental model in sync
- This prevents edit conflicts caused by auto-formatting

See [docs/format-on-save-feature.md](docs/format-on-save-feature.md) for detailed documentation.

**Important Notes:**
- When launching from a folder not in this configuration, a temporary project is created automatically
- The assistant has access to the current project (including temporary ones) plus all configured projects
- Each chat session is permanently associated with its initial project and folder - this cannot be changed later
- Tool syntax (native/xml/caret) is also fixed per session at creation time

## Usage

### GUI Mode (Recommended)

```bash
# Start with graphical interface
code-assistant --ui

# Start GUI with initial task
code-assistant --ui --task "Analyze the authentication system"
```

### Terminal Mode

```bash
# Basic usage
code-assistant --task "Explain the purpose of this codebase"

# With specific model
code-assistant --task "Add error handling" --model "GPT-5"
```

### Working Directory Matters

The directory from which you launch `code-assistant` determines the project context for your session. The assistant uses your current working directory (PWD) to understand which codebase you're working on — it scopes file operations, searches, and tool execution to that directory.

**Best practice:** Always `cd` into your project's root directory before starting `code-assistant`.

```bash
cd ~/workspace/my-project
code-assistant --ui
```

Chats are **grouped by directory**, so starting a new chat from the correct project directory ensures:
- The assistant has the right file context and can navigate your codebase
- Your conversation history stays organized per project
- `AGENTS.md` or `CLAUDE.md` guidance files from that project are automatically loaded

If you need to work on a different project, open a new chat from that project's directory rather than reusing an existing session from another location.

### MCP Server Mode

```bash
code-assistant server
```

### ACP Agent Mode

```bash
# Run as ACP-compatible agent
code-assistant acp

# With specific model
code-assistant acp --model "Claude Sonnet 4.5"
```

The ACP mode enables integration with editors that support the [Agent Client Protocol](https://agentclientprotocol.com/), such as [Zed](https://zed.dev). When running in ACP mode, the code-assistant communicates via JSON-RPC over stdin/stdout, supporting features like pending messages, real-time streaming, and tool execution with proper permission handling.

## Configuration

### Model Configuration

The code-assistant uses two JSON configuration files to manage LLM providers and models:

**`~/.config/code-assistant/providers.json`** - Configure provider credentials and endpoints:
```json
{
  "anthropic": {
    "label": "Anthropic Claude",
    "provider": "anthropic",
    "config": {
      "api_key": "${ANTHROPIC_API_KEY}",
      "base_url": "https://api.anthropic.com/v1"
    }
  },
  "openai": {
    "label": "OpenAI",
    "provider": "openai-responses",
    "config": {
      "api_key": "${OPENAI_API_KEY}"
    }
  }
}
```

**`~/.config/code-assistant/models.json`** - Define available models:
```json
{
  "Claude Sonnet 4.5 (Thinking)": {
    "provider": "anthropic",
    "id": "claude-sonnet-4-5",
    "config": {
      "max_tokens": 32768,
      "thinking": {
        "type": "enabled",
        "budget_tokens": 8192
      }
    }
  },
  "Claude Sonnet 4.5": {
    "provider": "anthropic",
    "id": "claude-sonnet-4-5",
    "config": {
      "max_tokens": 32768
    }
  },
  "GPT-5": {
    "provider": "openai",
    "id": "gpt-5-codex",
    "config": {
      "temperature": 0.7
    }
  }
}
```

**Environment Variable Substitution**: Use `${VAR_NAME}` in provider configs to reference environment variables for API keys.

**Full Examples**: See [`providers.example.json`](providers.example.json) and [`models.example.json`](models.example.json) for complete configuration examples with all supported providers (Anthropic, OpenAI, Ollama, SAP AI Core, Vertex AI, Groq, Cerebras, MistralAI, OpenRouter).

### Tool Configuration

Some tools require external API keys to function. Configure these in `~/.config/code-assistant/tools.json`:

```json
{
  "perplexity_api_key": "${PERPLEXITY_API_KEY}"
}
```

**Available Tool Settings**:
- `perplexity_api_key` - Enables the `perplexity_ask` tool for AI-powered web search

Tools without their required configuration will not be available to the assistant.

**List Available Models**:
```bash
# See all configured models
code-assistant --list-models

# See all configured providers
code-assistant --list-providers
```

<details>
<summary>Claude Desktop Integration (MCP)</summary>

Configure in Claude Desktop settings (**Developer** tab → **Edit Config**):

```jsonc
{
  "mcpServers": {
    "code-assistant": {
      "command": "/path/to/code-assistant/target/release/code-assistant",
      "args": ["server"],
      "env": {
        "SHELL": "/bin/zsh"                 // Your login shell
      }
    }
  }
}
```

</details>

<details>
<summary>Zed Editor Integration (ACP)</summary>

Configure in Zed settings:

```json
{
  "agent_servers": {
    "Code-Assistant": {
      "command": "/path/to/code-assistant/target/release/code-assistant",
      "args": ["acp", "--model", "Claude Sonnet 4.5"],
      "env": {
        "ANTHROPIC_API_KEY": "sk-ant-..."
      }
    }
  }
}
```

Make sure your `providers.json` and `models.json` are configured with the model you specify. The agent will appear in Zed's assistant panel with full ACP support.

For detailed setup instructions, see [Zed's documentation on adding custom agents](https://zed.dev/docs/ai/external-agents#add-custom-agents).
</details>

<details>
<summary>Advanced Options</summary>

**Tool Syntax Modes**:
- `--tool-syntax native`: Use the provider's built-in tool calling (most reliable, but streaming of parameters depends on provider)
- `--tool-syntax xml`: XML-style tags for streaming of parameters
- `--tool-syntax caret`: Triple-caret blocks for token-efficiency and streaming of parameters

**Session Recording**:
```bash
# Record session (Anthropic only)
code-assistant --record session.json --model "Claude Sonnet 4.5" --task "Optimize database queries"

# Playback session
code-assistant --playback session.json --fast-playback
```

**Other Options**:
- `--model <name>`: Specify model from models.json (use `--list-models` to see available options)
- `--continue-task`: Resume from previous session state
- `--use-diff-format`: Enable alternative diff format for file editing
- `--sandbox-mode <danger-full-access|read-only|workspace-write>`: Choose the sandbox policy for command execution (default `danger-full-access`)
- `--sandbox-network`: When combined with `--sandbox-mode workspace-write`, allow outbound network access - inside the sandbox
- `--verbose` / `-v`: Enable detailed logging (use multiple times for more verbosity)
</details>

## Architecture Highlights

The code-assistant features several innovative architectural decisions:

**Adaptive Tool Syntax**: Automatically generates different system prompts and streaming processors based on the target LLM's capabilities, allowing the same core logic to work across providers with varying function calling support.

**Smart Tool Filtering**: Real-time analysis of tool invocation patterns prevents logical errors like attempting to edit files before reading them, with the ability to truncate responses mid-stream when unsafe combinations are detected.

**Multi-Threaded Streaming**: Sophisticated async architecture that handles real-time parsing of tool invocations while maintaining responsive UI updates and proper state management across multiple chat sessions.

## Contributing

Contributions are welcome! The codebase demonstrates advanced patterns in async Rust, AI agent architecture, and cross-platform UI development.

## Roadmap

This section is not really a roadmap, as the items are in no particular order.
Below are some topics that are likely the next focus.

- **Block Replacing in Changed Files**: When streaming a tool use block, we already know the LLM attempts to use `replace_in_file` and we know in which file quite early.
  If we also know this file has changed since the LLM last read it, we can block the attempt with an appropriate error message.
- **Compact Tool Use Failures**: When the LLM produces an invalid tool call, or a mismatching search block, we should be able to strip the failed attempt from the message history, saving tokens.
- **Improve UI**: There are various ways in which the UI can be improved.
- **Add Memory Tools**: Add tools that facilitate building up a knowledge base useful work working in a given project.
- **Security**: Ideally, the execution for all tools would run in some sort of sandbox that restricts access to the files in the project tracked by git.
  Currently, the tools reject absolute paths, but do not check whether the relative paths point outside the project or try to access git-ignored files.
  The `execute_command` tool runs a shell with the provided command line, which at the moment is completely unchecked.
- **Fuzzy matching search blocks**: Investigate the benefit of fuzzy matching search blocks.
  Currently, files are normalized (always `\n` line endings, no trailing white space).
  This increases the success rate of matching search blocks quite a bit, but certain ways of fuzzy matching might increase the success even more.
  Failed matches introduce quite a bit of inefficiency, since they almost always trigger the LLM to re-read a file.
  Even when the error output of the `replace_in_file` tool includes the complete file and tells the LLM *not* to re-read the file.
