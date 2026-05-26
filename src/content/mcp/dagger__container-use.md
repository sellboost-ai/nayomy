---
name: "dagger/container-use"
description: "Containerized environments for coding agents. Multiple agents can work independently, isolated in fresh containers and git branches. No conflicts, many experiments. Full execution history, terminal access to agent environments, git workflow. Any agent/model/infra stack."
category: "Code Execution"
repo: "dagger/container-use"
stars: 3801
url: "https://github.com/dagger/container-use"
body_length: 3484
license: "Apache-2.0"
language: "Go"
homepage: "https://container-use.com"
body_tr: |-
  <div align="center">
    
    <h1 align="center">container-use</h1>
    <p align="center">Kodlama ajanları için konteynerleştirilmiş ortamlar. (📦🤖) (📦🤖) (📦🤖)</p>
    <p align="center">
      
      <a href="https://opensource.org/licenses/Apache-2.0">
        
      </a>
      <a href="https://container-use.com/discord">
        
      </a>
      <a href="https://github.com/clinebot/awesome-claude-code">
        
      </a>
    </p>
  </div>

  **Container Use**, kodlama ajanlarının size engel olmadan paralel ortamlarda çalışmalarını sağlar. Bir seferde bir ajanı yönetmekten, birden fazla ajanın sizin tercih ettiğiniz stack ile güvenli ve bağımsız şekilde çalışmasını sağlamaya geçin. [Tam dokümantasyona](https://container-use.com) bakın.

  <p align='center'>
      
  </p>

  Bu, Claude Code, Cursor ve diğer MCP uyumlu ajanlarla çalışan açık kaynaklı bir MCP sunucusu ve CLI aracıdır. [Dagger](https://dagger.io) tarafından desteklenmektedir.

  * 📦 **İzole Edilmiş Ortamlar**: Her ajan kendi git dalında taze bir konteyner alır - birden fazla ajanı çatışma olmadan çalıştırın, güvenli şekilde deney yapın, başarısızlıkları anında atın.
  * 👀 **Gerçek Zamanlı Görünürlük**: Ajanların tam komut geçmişini ve günlüklerini görün, sadece ne söylediklerini değil aslında ne yaptıklarını görün.
  * 🚁 **Doğrudan Müdahale**: Herhangi bir ajanın terminaline düşün, durumlarını göreyin ve takılıp kaldıklarında kontrol ele alın.
  * 🎮 **Ortam Kontrolü**: Standart git iş akışı - herhangi bir ajanın çalışmasını gözden geçirmek için sadece `git checkout <branch_name>` yapın.
  * 🌎 **Evrensel Uyumluluk**: Herhangi bir ajan, model veya altyapı ile çalışır - satıcı bağımlılığı yok.

  ---

  🦺 Bu proje erken aşamada ve aktif olarak gelişmektedir. Sorunları bildirin ve/veya [Discord](https://container-use.com/discord) üzerinde #container-use kanalında bize ulaşın.

  ---

  ## Hızlı Başlangıç

  ### Kurulum

  ```sh
  # macOS (önerilen)
  brew install dagger/tap/container-use

  # Tüm platformlar
  curl -fsSL https://raw.githubusercontent.com/dagger/container-use/main/install.sh | bash
  ```

  ### Ajanınız ile Kurulum

  Container Use herhangi bir MCP uyumlu ajan ile çalışır. Kurulum her zaman aynıdır: **`container-use stdio` öğesini MCP sunucusu olarak ekleyin**.

  **👉 [Tüm ajanlar için tam kurulum rehberi (Cursor, Goose, VSCode, vb.)](https://container-use.com/quickstart)**

  **Claude Code ile örnek:**

  ```sh
  # Container Use MCP sunucusu ekle
  cd /path/to/repository
  claude mcp add container-use -- container-use stdio

  # Ajan kurallarını ekle (isteğe bağlı)
  curl https://raw.githubusercontent.com/dagger/container-use/main/rules/agent.md >> CLAUDE.md
  ```

  <details>
  <summary>💡 Komut Kısayolu</summary>

  `container-use` komutu kolaylık sağlamak için `cu` olarak da mevcuttur. Her iki komut da aynı şekilde çalışır:
  - `container-use stdio` (dokümantasyonda kullanılır)
  - `cu stdio` (kısayol)

  </details>

  ### Deneyin

  Ajanınızdan bir şey oluşturmasını isteyin:
  > Flask kullanarak Python'da bir hello world uygulaması oluştur

  Ajanınız izole edilmiş bir ortamda çalışacak ve size uygulamayı görüntülemek ve kodu keşfetmek için URL'ler verecek!
---

<div align="center">
  
  <h1 align="center">container-use</h2>
  <p align="center">Containerized environments for coding agents. (📦🤖) (📦🤖) (📦🤖)</p>
  <p align="center">
    
    <a href="https://opensource.org/licenses/Apache-2.0">
      
    </a>
    <a href="https://container-use.com/discord">
      
    </a>
    <a href="https://github.com/clinebot/awesome-claude-code">
      
    </a>
  </p>
</div>

**Container Use** lets coding agents do their work in parallel environments without getting in your way. Go from babysitting one agent at a time to enabling multiple agents to work safely and independently with your preferred stack. See the [full documentation](https://container-use.com).

<p align='center'>
    
</p>

It's an open-source MCP server that works as a CLI tool with Claude Code, Cursor, and other MCP-compatible agents. Powered by [Dagger](https://dagger.io).

* 📦 **Isolated Environments**: Each agent gets a fresh container in its own git branch - run multiple agents without conflicts, experiment safely, discard failures instantly.
* 👀 **Real-time Visibility**: See complete command history and logs of what agents actually did, not just what they claim.
* 🚁 **Direct Intervention**: Drop into any agent's terminal to see their state and take control when they get stuck.
* 🎮 **Environment Control**: Standard git workflow - just `git checkout <branch_name>` to review any agent's work.
* 🌎 **Universal Compatibility**: Works with any agent, model, or infrastructure - no vendor lock-in.

---

🦺 This project is in early development and actively evolving. Submit issues and/or reach out to us on [Discord](https://container-use.com/discord) in the #container-use channel.

---

## Quick Start

### Install

```sh
# macOS (recommended)
brew install dagger/tap/container-use

# All platforms
curl -fsSL https://raw.githubusercontent.com/dagger/container-use/main/install.sh | bash
```

### Setup with Your Agent

Container Use works with any MCP-compatible agent. The setup is always the same: **add `container-use stdio` as an MCP server**.

**👉 [Complete setup guide for all agents (Cursor, Goose, VSCode, etc.)](https://container-use.com/quickstart)**

**Example with Claude Code:**

```sh
# Add Container Use MCP server
cd /path/to/repository
claude mcp add container-use -- container-use stdio

# Add agent rules (optional)
curl https://raw.githubusercontent.com/dagger/container-use/main/rules/agent.md >> CLAUDE.md
```

<details>
<summary>💡 Command Shortcut</summary>

The `container-use` command is also available as `cu` for convenience. Both commands work identically:
- `container-use stdio` (used in documentation)
- `cu stdio` (shortcut)

</details>

### Try It

Ask your agent to create something:
> Create a hello world app in python using flask

Your agent will work in an isolated environment and give you URLs to view the app and explore the code!
