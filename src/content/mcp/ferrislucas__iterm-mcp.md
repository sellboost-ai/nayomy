---
name: "ferrislucas/iterm-mcp"
description: "A Model Context Protocol server that provides access to iTerm. You can run commands and ask questions about what you see in the iTerm terminal."
category: "Command Line"
repo: "ferrislucas/iterm-mcp"
stars: 556
url: "https://github.com/ferrislucas/iterm-mcp"
body_length: 2942
license: "MIT"
language: "TypeScript"
homepage: "https://www.npmjs.com/package/iterm-mcp"
body_tr: |-
  # iterm-mcp 
  iTerm oturumunuza erişim sağlayan bir Model Context Protocol sunucusu.

  ![Main Image](https://raw.githubusercontent.com/ferrislucas/iterm-mcp/HEAD/.github/images/demo.gif)

  ### Özellikler

  **Verimli Token Kullanımı:** iterm-mcp, modele yalnızca ilgilendiği çıktıyı inceleme yeteneği verir. Model, uzun süredir çalışan komutlar için bile genellikle yalnızca çıktının son birkaç satırını görmek ister. 

  **Doğal Entegrasyon:** iTerm'i model ile paylaşırsınız. Ekranda neler olduğu hakkında sorular sorabilir veya modele bir görevi devredebilir ve her adımı gerçekleştirirken izleyebilirsiniz.

  **Tam Terminal Kontrolü ve REPL Desteği:** Model, REPL'lerle başlatabilir ve etkileşim kurabileceği gibi ctrl-c, ctrl-z gibi kontrol karakterlerini gönderebilir.

  **Bağımlılıklara Dikkat Eder:** iterm-mcp minimal bağımlılıklarla oluşturulmuştur ve npx üzerinden çalıştırılabilir. Claude Desktop ve diğer MCP istemcilerine eklenmesi kolay olacak şekilde tasarlanmıştır. Hiçbir sorun olmadan çalışmalıdır.


  ## Güvenlik Hususları

  * Aracı güvenli şekilde kullanmak kullanıcının sorumluluğundadır.
  * Yerleşik kısıtlama yoktur: iterm-mcp, yürütülen komutların güvenliğini değerlendirmeye çalışmaz.
  * Modeller beklenmedik şekillerde davranabilir. Kullanıcının aktiviteyi izlemesi ve uygun olduğunda iptal etmesi beklenir.
  * Çok adımlı görevler için, model hatalı bir yola giderse onu durdurmanız gerekebilir. Modelin davranışını tanıyana kadar daha küçük, odaklanmış görevlerle başlayın. 

  ### Araçlar
  - `write_to_terminal` - Aktif iTerm terminaline yazar, genellikle bir komutu çalıştırmak için kullanılır. Komut tarafından üretilen çıktı satırlarının sayısını döndürür.
  - `read_terminal_output` - Aktif iTerm terminalinden istenen sayıda satırı okur.
  - `send_control_character` - Aktif iTerm terminaline bir kontrol karakteri gönderir.

  ### Gereksinimler

  * iTerm2 çalışıyor olmalı
  * Node sürümü 18 veya daha büyük


  ## Kurulum

  Claude Desktop ile kullanmak için sunucu konfigürasyonunu ekleyin:

  macOS'ta: `~/Library/Application Support/Claude/claude_desktop_config.json`
  Windows'ta: `%APPDATA%/Claude/claude_desktop_config.json`

  ```json
  {
    "mcpServers": {
      "iterm-mcp": {
        "command": "npx",
        "args": [
          "-y",
          "iterm-mcp"
        ]
      }
    }
  }
  ```

  ### Smithery Aracılığıyla Kurulum

  iTerm'i Claude Desktop için otomatik olarak [Smithery](https://smithery.ai/server/iterm-mcp) aracılığıyla kurmak için:

  ```bash
  npx -y @smithery/cli install iterm-mcp --client claude
  ```
  [![smithery badge](https://smithery.ai/badge/iterm-mcp)](https://smithery.ai/server/iterm-mcp)

  ## Geliştirme

  Bağımlılıkları yükleyin:
  ```bash
  yarn install
  ```

  Sunucuyu derleyin:
  ```bash
  yarn run build
  ```

  Otomatik yeniden derleme ile geliştirme için:
  ```bash
  yarn run watch
  ```

  ### Hata Ayıklama

  MCP sunucuları stdio üzerinden iletişim kurduğundan, hata ayıklama zorlayıcı olabilir. Paket betiği olarak mevcut olan [MCP Inspector](https://github.com/modelcontextprotocol/inspector) kullanmanızı öneriyoruz:

  ```bash
  yarn run inspector
  yarn debug <command>
  ```

  Inspector, tarayıcınızda hata ayıklama araçlarına erişmek için bir URL sağlayacaktır.
---

# iterm-mcp 
A Model Context Protocol server that provides access to your iTerm session.

![Main Image](https://raw.githubusercontent.com/ferrislucas/iterm-mcp/HEAD/.github/images/demo.gif)

### Features

**Efficient Token Use:** iterm-mcp gives the model the ability to inspect only the output that the model is interested in. The model typically only wants to see the last few lines of output even for long running commands. 

**Natural Integration:** You share iTerm with the model. You can ask questions about what's on the screen, or delegate a task to the model and watch as it performs each step.

**Full Terminal Control and REPL support:** The model can start and interact with REPL's as well as send control characters like ctrl-c, ctrl-z, etc.

**Easy on the Dependencies:** iterm-mcp is built with minimal dependencies and is runnable via npx. It's designed to be easy to add to Claude Desktop and other MCP clients. It should just work.


## Safety Considerations

* The user is responsible for using the tool safely.
* No built-in restrictions: iterm-mcp makes no attempt to evaluate the safety of commands that are executed.
* Models can behave in unexpected ways. The user is expected to monitor activity and abort when appropriate.
* For multi-step tasks, you may need to interrupt the model if it goes off track. Start with smaller, focused tasks until you're familiar with how the model behaves. 

### Tools
- `write_to_terminal` - Writes to the active iTerm terminal, often used to run a command. Returns the number of lines of output produced by the command.
- `read_terminal_output` - Reads the requested number of lines from the active iTerm terminal.
- `send_control_character` - Sends a control character to the active iTerm terminal.

### Requirements

* iTerm2 must be running
* Node version 18 or greater


## Installation

To use with Claude Desktop, add the server config:

On macOS: `~/Library/Application Support/Claude/claude_desktop_config.json`
On Windows: `%APPDATA%/Claude/claude_desktop_config.json`

```json
{
  "mcpServers": {
    "iterm-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "iterm-mcp"
      ]
    }
  }
}
```

### Installing via Smithery

To install iTerm for Claude Desktop automatically via [Smithery](https://smithery.ai/server/iterm-mcp):

```bash
npx -y @smithery/cli install iterm-mcp --client claude
```
[![smithery badge](https://smithery.ai/badge/iterm-mcp)](https://smithery.ai/server/iterm-mcp)

## Development

Install dependencies:
```bash
yarn install
```

Build the server:
```bash
yarn run build
```

For development with auto-rebuild:
```bash
yarn run watch
```

### Debugging

Since MCP servers communicate over stdio, debugging can be challenging. We recommend using the [MCP Inspector](https://github.com/modelcontextprotocol/inspector), which is available as a package script:

```bash
yarn run inspector
yarn debug <command>
```

The Inspector will provide a URL to access debugging tools in your browser.
