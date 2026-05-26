---
name: "Rai220/think-mcp"
description: "Enhances any agent's reasoning capabilities by integrating the think-tools, as described in Anthropic's article."
description_tr: "Anthropic'in makalesinde açıklanan think-tools'ları entegre ederek herhangi bir agentnin akıl yürütme yeteneklerini artırır."
category: "Other Tools and Integrations"
repo: "Rai220/think-mcp"
stars: 101
url: "https://github.com/Rai220/think-mcp"
body_length: 2490
license: "MIT"
language: "Python"
body_tr: |-
  # Think MCP Tool

  Think MCP, agentic AI iş akışlarında yapılandırılmış akıl yürütme için bir "think" tool sağlayan MCP (Model Context Protocol) server uygulamasıdır. Bu proje Anthropic mühendislik makalesinden esinlenmiştir: [The "think" tool: Enabling Claude to stop and think in complex tool use situations](https://www.anthropic.com/engineering/claude-think-tool).

  Referans alınan makaleye göre, think tool eklenmesi, native olarak gelişmiş akıl yürütme yeteneklerine sahip olmayan modellerde bile akıl yürütme yeteneklerini sağlayarak değerlendirme metriklerinin iyileştirilmesine yol açabilir.

  ![alt text](https://raw.githubusercontent.com/Rai220/think-mcp/HEAD/tau_bench.png)

  <a href="https://glama.ai/mcp/servers/@Rai220/think-mcp">
    
  </a>

  ## "Think" tool nedir?
  "Think" tool, bir AI acentesinin karmaşık akıl yürütme veya çok adımlı tool kullanımı sırasında duraklamasına ve açık bir düşünce kaydedicisine olanak tanır. Ortamı veya veritabanını değiştirmez, ancak düşünceyi günlüğe ekleyerek acentenin bilgileri işlemesine, geri adım atmasına veya detaylı politikalara uymasına yardımcı olur.

  Bu yaklaşım özellikle şunlar için kullanışlıdır:
  - Tool output analizi (önceki tool çağrılarının sonuçlarını işleme)
  - Politika ağırlıklı ortamlar (yönergelerle uyumluluğu doğrulama)
  - Sıralı karar verme (her adımın önceki adımlara dayandığı durumlar)

  ## Özellikler
  - Anthropic'in araştırmasında açıklanan "think" tool'u uygular
  - [mcp[cli]](https://pypi.org/project/mcp/) kullanan minimal, standartlara dayalı MCP server
  - Claude veya diğer agentic LLM'ler ile entegrasyon için hazır

  ## Kullanım

  ### MCP server konfigürasyonu
  Bu MCP server'ı favoriniz olan agent'a ekleyin.
  ```
  "mcpServers": {
      "think-mcp": {
          "command": "uvx",
          "args": ["think-mcp"],
          "enabled": true
      }
  }
  ```

  ## Tool tanımı
  "Think" tool şu şekilde tanımlanır:
  - **Input:** `thought` (string) — Düşünülecek bir düşünce.
  - **Behavior:** Düşünceyi yapılandırılmış akıl yürütme için günlüğe ekler.

  ## Advanced mode
  Agent'ınız için ek tool'lar ekler:
  - criticize
  - plan
  - search

  ```
  "mcpServers": {
      "think-mcp": {
          "command": "uvx",
          "args": ["think-mcp", "--advanced"],
          "enabled": true,
          "env": {
              "TAVILY_API_KEY": ... BURAYA KENDİ TAVILY API ANAHTARINIZI YAZIN ...
          }
      }
  }
  ```

  ## Referans
  - Temel alınan: [Anthropic Engineering Blog — The "think" tool](https://www.anthropic.com/engineering/claude-think-tool)

  ## Lisans
  MIT License — bkz. [LICENSE](LICENSE)
---

# Think MCP Tool

Think MCP is an implementation of an MCP (Model Context Protocol) server that provides a "think" tool for structured reasoning in agentic AI workflows. This project is inspired by the Anthropic engineering article: [The "think" tool: Enabling Claude to stop and think in complex tool use situations](https://www.anthropic.com/engineering/claude-think-tool).

According to the referenced article, adding the think tool can lead to improved evaluation metrics by enabling reasoning capabilities even in models that do not natively possess advanced reasoning skills.

![alt text](https://raw.githubusercontent.com/Rai220/think-mcp/HEAD/tau_bench.png)

<a href="https://glama.ai/mcp/servers/@Rai220/think-mcp">
  
</a>

## What is the "think" tool?
The "think" tool allows an AI agent to pause and record an explicit thought during complex reasoning or multi-step tool use. It does not change the environment or database, but appends the thought to the log, helping the agent process information, backtrack, or comply with detailed policies.

This approach is especially useful for:
- Tool output analysis (processing results of previous tool calls)
- Policy-heavy environments (verifying compliance with guidelines)
- Sequential decision making (where each step builds on previous ones)

## Features
- Implements the "think" tool as described in Anthropic's research
- Minimal, standards-based MCP server using [mcp[cli]](https://pypi.org/project/mcp/)
- Ready for integration with Claude or other agentic LLMs

## Usage

### MCP server configuration
Add this MCP server to your facorite agent.
```
"mcpServers": {
    "think-mcp": {
        "command": "uvx",
        "args": ["think-mcp"],
        "enabled": true
    }
}
```

## Tool definition
The "think" tool is defined as:
- **Input:** `thought` (string) — A thought to think about.
- **Behavior:** Appends the thought to the log for structured reasoning.

## Advanced mode
Adds aditional tools for your agent:
- criticize
- plan
- search

```
"mcpServers": {
    "think-mcp": {
        "command": "uvx",
        "args": ["think-mcp", "--advanced"],
        "enabled": true,
        "env": {
            "TAVILY_API_KEY": ... YOUR TAVILY API KEY HERE ...
        }
    }
}
```

## Reference
- Based on: [Anthropic Engineering Blog — The "think" tool](https://www.anthropic.com/engineering/claude-think-tool)

## License
MIT License — see [LICENSE](LICENSE)
