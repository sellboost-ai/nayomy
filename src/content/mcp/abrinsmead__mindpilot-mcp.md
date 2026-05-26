---
name: "abrinsmead/mindpilot-mcp"
description: "Visualizes code, architecture and other concepts as mermaid diagrams in a locally hosted web app. Just ask your agent to \"show me this in a diagram\"."
description_tr: "Kodunuzu, mimarinizi ve diğer konseptleri yerel olarak barındırılan bir web uygulamasında mermaid diyagramları olarak görselleştirir. Agenteye sadece \"bunu diyagramda göster\" diye söyleyin."
category: "Developer Tools"
repo: "abrinsmead/mindpilot-mcp"
stars: 88
url: "https://github.com/abrinsmead/mindpilot-mcp"
body_length: 5858
license: "MIT"
language: "TypeScript"
body_tr: |-
  # Mindpilot MCP
  [![GitHub Repo stars](https://img.shields.io/github/stars/abrinsmead/mindpilot-mcp)](https://github.com/abrinsmead/mindpilot-mcp)
  [![NPM Version](https://img.shields.io/npm/v/@mindpilot/mcp)](https://www.npmjs.com/package/@mindpilot/mcp)
  [![GitHub License](https://img.shields.io/github/license/abrinsmead/mindpilot-mcp)](https://github.com/abrinsmead/mindpilot-mcp/blob/main/LICENSE)

  Agentnizin gözünden bakın. Legacy kodu görselleştirin, karmaşık akışları inceleyin, her şeyi anlayın.

  ![Screenshot](https://raw.githubusercontent.com/abrinsmead/mindpilot-mcp/main/mindpilot-mcp-latest.png)

  ## Neden Mindpilot?
  - **Her Şeyi Görselleştirin**: Kodlama agentinizi kullanarak talep üzerine mimari, kod ve process diyagramları oluşturun ve kodunuzu farklı perspektiflerden görüntüleyin.
  - **Vibe Kontrolleri**: AI tarafından üretilen kod, kullanılmayan ve gereksiz yapılar biriktirebilir. Temizleme gerektiren alanları spot etmek için görselleştirmeleri kullanın.
  - **Yerel İşleme**: Diyagramlar asla buluta gönderilmez. Her şey sizin, agentiniz ve agentinizin LLM sağlayıcı(ları)nız arasında kalır.
  - **Dışa Aktar ve Paylaş**: Herhangi bir diyagramı vektör görüntü olarak dışa aktarın.

  ## Ön Koşullar

  Node.js v20.0.0 veya daha yüksek.

  ## Hızlı Başlangıç

  ### Claude Code
  `claude mcp add mindpilot -- npx @mindpilot/mcp@latest`

  ### Cursor

  `Settings` > `Cursor Settings` > `MCP` altında, `Add new global MCP server` öğesine tıklayın ve mindpilot öğesini `mcpServers` nesnesinde yapılandırın.

  ```
  {
    "mcpServers": {
      "mindpilot": {
        "command": "npx",
        "args": ["@mindpilot/mcp@latest"]
      }
    }
  }
  ```

  ### VS Code
  VS Code'da MCPları etkinleştirmek için buradaki talimatları izleyin: https://code.visualstudio.com/docs/copilot/chat/mcp-servers

  `Settings` > `Features` > `MCP` öğesine gidin, ardından `Edit in settings json` öğesine tıklayın

  Daha sonra mindpilot öğesini MCP konfigürasyonunuza ekleyin:

  ```
  {
    "mcp": {
      "servers": {
        "mindpilot": {
          "type": "stdio",
          "command": "npx",
          "args": ["@mindpilot/mcp@latest"]
        }
      }
    }
  }
  ```

  ### Windsurf

  `Settings` > `Windsurf Settings` > `Manage Plugins` altında, `view raw config` öğesine tıklayın ve mindpilot öğesini `mcpServers` nesnesinde yapılandırın:

  ```
  {
    "mcpServers": {
      "mindpilot": {
        "command": "npx",
        "args": ["@mindpilot/mcp@latest"]
      }
    }
  }
  ```

  ### Zed
  AI Thread panelinde üç nokta `...` öğesine tıklayın, ardından `Add Custom Server...` öğesine tıklayın

  `Command to run MCPserver` alanına `npx @mindpilot/mcp@latest` girin ve `Add Server` öğesine tıklayın.

  ## Konfigürasyon Seçenekleri
  - **Port**: Server varsayılan olarak 4000 portunda çalışır ancak `--port` komut satırı anahtarı kullanılarak yapılandırılabilir.
  - **Data Path**: Varsayılan olarak, diyagramlar `~/.mindpilot/data/` öğesine kaydedilir. `--data-path` komut satırı anahtarını kullanarak özel bir konum belirtebilirsiniz.

  ## Multi-Client Desteği

  Mindpilot, eşzamanlı olarak çalışan birden fazla AI yardımcısını akıllıca yönetir. Birden fazla Claude Desktop penceresi veya IDE örneği açık olduğunda:

  - Mindpilot'u kullanan ilk MCP client'ı paylaşılan bir web sunucusu başlatır
  - Ek yardımcılar otomatik olarak mevcut sunucuya bağlanır
  - Tüm yardımcılar aynı diyagram geçmişini ve web arayüzünü paylaşır
  - Server, son MCP client'ı bağlantısını kestikten bir dakika sonra otomatik olarak kapatılır

  Bu, birden fazla MCP host'u aynı anda port çatışmaları olmadan kullanabileceğiniz ve hepsinin aynı diyagram koleksiyonuna katkıda bulunabileceği anlamına gelir.

  ## Anonim Kullanım İzlemesi

  Mindpilot MCP, ürünün nasıl kullanıldığını anlamamıza ve kullanıcı deneyimini geliştirmemize yardımcı olmak için anonim kullanım verileri toplar.

  ### Analitiği Devre Dışı Bırakma
  Anonim kullanım verilerini paylaşmamayı tercih ederseniz, MCP konfigürasyonunuza `--disable-analytics` bayrağını ekleyerek analitiği devre dışı bırakabilirsiniz:

  **Claude Code:**
  ```bash
  claude mcp add mindpilot -- npx @mindpilot/mcp@latest --disable-analytics
  ```

  **Diğer IDE'ler:**
  Konfigürasyonunuzda args dizisine `"--disable-analytics"` ekleyin:
  ```json
  {
    "command": "npx",
    "args": ["@mindpilot/mcp@latest", "--disable-analytics"]
  }
  ```

  ## MCP sunucusunu kullanma
  Kodlama agentinizde MCP'yi yapılandırdıktan sonra, "x hakkında bir diyagram oluştur" gibi isteklerde bulunabilirsiniz ve MCP sunucusuna bağlı bir tarayıcıda Mermaid diyagramlarını işlemek için MCP sunucusunu kullanmalıdır.

  Mindpilot-mcp'yi ne zaman kullanacağınız hakkında belirli talimatlar vermek için agentinizin kural dosyasını isteğe bağlı olarak güncelleyebilirsiniz.

  ### Örnek istekler
  - "WebSocket bağlantısı mantığı için durum makinesini göster"
  - "Bu projenin mimarisi için bir C4 context diyagramı oluştur."
  - "OAuth akışını bir sequence diyagram olarak göster"

  ## Nasıl Çalışır
  Frontier LLM'leri, geçerli Mermaid söz dizimi oluşturmak için iyi eğitilir. MCP, Mermaid söz dizimini kabul etmek ve http://localhost:4000 (varsayılan port) üzerinde çalışan bir web uygulamasında diyagramları işlemek için tasarlanmıştır.

  ## Sorun Giderme

  ### Port Çatışmaları
  4000 portunu başka bir hizmet için kullanıyorsanız, MCP'yi farklı bir port kullanacak şekilde yapılandırabilirsiniz.

  Claude Code örneği:
  `claude mcp add mindpilot -- npx @mindpilot/mcp@latest --port 5555`

  ### Özel Data Path
  Diyagramları özel bir konuma kaydetmek için (örneğin, bulut depolama ile senkronizasyon için):

  Claude Code örneği:
  `claude mcp add mindpilot -- npx @mindpilot/mcp@latest --data-path /path/to/custom/location`

  Diğer IDE'ler:
  ```json
  {
    "command": "npx",
    "args": ["@mindpilot/mcp@latest", "--data-path", "/path/to/custom/location"]
  }
  ```

  ### asdf Sorunları
  Eğer `asdf`'yi bir sürüm yöneticisi olarak kullanıyorsanız ve MCPları çalıştırmakta sorun yaşıyorsanız (sadece mindpilot değil), ev dizininizden "global" bir nodejs sürümü ayarlamanız gerekebilir.

  ```
  cd
  asdf set nodejs x.x.x
  ```

  ## Geliştirme Konfigürasyonu
  MCP'yi kodlama agentinizde yapılandırın (bu örnekte `claude` kullanarak)

  `claude mcp add mindpilot -- npx tsx <path to...>/src/server/server.ts`

  MCP hatalarını görmek için gerekliyse `claude` öğesini `--debug` bayrağı ile çalıştırın

  Geliştirme sırasında hot module reloading almak için development client'ını (Vite) başlatın.

  `npm run dev`

  Development client'ını açın
  `localhost:5173`
---

# Mindpilot MCP
[![GitHub Repo stars](https://img.shields.io/github/stars/abrinsmead/mindpilot-mcp)](https://github.com/abrinsmead/mindpilot-mcp)
[![NPM Version](https://img.shields.io/npm/v/@mindpilot/mcp)](https://www.npmjs.com/package/@mindpilot/mcp)
[![GitHub License](https://img.shields.io/github/license/abrinsmead/mindpilot-mcp)](https://github.com/abrinsmead/mindpilot-mcp/blob/main/LICENSE)

See through your agent's eyes. Visualize legacy code, inspect complex flows, understand everything.

![Screenshot](https://raw.githubusercontent.com/abrinsmead/mindpilot-mcp/main/mindpilot-mcp-latest.png)

## Why Mindpilot?
- **Visualize Anything**: Use your coding agent to generate on-demand architecture, code, and process diagrams to view your code from different perspectives.
- **Vibe Checks**: AI-generated code can accumulate unused and redundant constructs. Use visualizations to spot areas that need cleanup.
- **Local Processing**: Diagrams are never sent to the cloud. Everything stays between you, your agent, and your agent's LLM provider(s).
- **Export & Share**: Export any diagram as a vector image.

## Prerequisites

Node.js v20.0.0 or higher.

## Quickstart

### Claude Code
`claude mcp add mindpilot -- npx @mindpilot/mcp@latest`

### Cursor

Under `Settings` > `Cursor Settings` > `MCP` > Click `Add new global MCP server` and configure mindpilot in the `mcpServers` object.

```
{
  "mcpServers": {
    "mindpilot": {
      "command": "npx",
      "args": ["@mindpilot/mcp@latest"]
    }
  }
}
```

### VS Code
Follow the instructions here for enabling MCPs in VS Code:  https://code.visualstudio.com/docs/copilot/chat/mcp-servers

Go to `Settings` > `Features` > `MCP`, then click `Edit in settings json`

Then add mindpilot to your MCP configuration:

```
{
  "mcp": {
    "servers": {
      "mindpilot": {
        "type": "stdio",
        "command": "npx",
        "args": ["@mindpilot/mcp@latest"]
      }
    }
  }
}
```

### Windsurf

Under `Settings` > `Windsurf Settings` > `Manage Plugins`, click `view raw config` and configure mindpilot in the `mcpServers` object:

```
{
  "mcpServers": {
    "mindpilot": {
      "command": "npx",
      "args": ["@mindpilot/mcp@latest"]
    }
  }
}
```

### Zed
In the AI Thread panel click on the three dots `...`, then click `Add Custom Server...`

In the `Command to run MCPserver` field enter `npx @mindpilot/mcp@latest` and click `Add Server`.

## Configuration Options
- **Port**: The server defaults to port 4000 but can be configured using the `--port` command line switch.
- **Data Path**: By default, diagrams are saved to `~/.mindpilot/data/`. You can specify a custom location using the `--data-path` command line switch.

## Multi-Client Support

Mindpilot intelligently handles multiple AI assistants running simultaneously. When you have multiple Claude Desktop windows or IDE instances open:

- The first mcp client to use Mindpilot starts a shared web server
- Additional assistants automatically connect to the existing server
- All assistants share the same diagram history and web interface
- The server will automatically shuts down a minute after the last MCP clinet disconnects

This means you can work with multiple MCP hosts at once without port conflicts, and they'll all contribute to the same collection of diagrams.

## Anonymous Usage Tracking

Mindpilot MCP collects anonymous usage data to help us understand how the product is being used and improve the user experience.

### Disabling Analytics
If you prefer not to share anonymous usage data, you can disable analytics by adding the `--disable-analytics` flag to your MCP configuration:

**Claude Code:**
```bash
claude mcp add mindpilot -- npx @mindpilot/mcp@latest --disable-analytics
```

**Other IDEs:**
Add `"--disable-analytics"` to the args array in your configuration:
```json
{
  "command": "npx",
  "args": ["@mindpilot/mcp@latest", "--disable-analytics"]
}
```

## Using the MCP server
After configuring the MCP in your coding agent you can make requests like "create a diagram about x" and it should use the MCP server to render Mermaid diagrams for you in a browser connected to the MCP server.

You can optionally update your agent's rules file to give specific instructions about when to use mindpilot-mcp.

### Example requests
- "Show me the state machine for WebSocket connection logic"
- "Create a C4 context diagram of this project's architecture."
- "Show me the OAuth flow as a sequence diagram"

## How it works
Frontier LLMs are well trained to generate valid Mermaid syntax. The MCP is designed to accept Mermaid syntax and render diagrams in a web app running on http://localhost:4000 (default port).

## Troubleshooting

### Port Conflicts
If you use port 4000 for another service you can configure the MCP to use a different port.

Claude Code example:
`claude mcp add mindpilot -- npx @mindpilot/mcp@latest --port 5555`

### Custom Data Path
To save diagrams to a custom location (e.g., for syncing with cloud storage):

Claude Code example:
`claude mcp add mindpilot -- npx @mindpilot/mcp@latest --data-path /path/to/custom/location`

Other IDEs:
```json
{
  "command": "npx",
  "args": ["@mindpilot/mcp@latest", "--data-path", "/path/to/custom/location"]
}
```

### asdf Issues
If you use `asdf` as a version manager and have trouble getting MCPs to work (not just mindpilot), you may need to set a "global" nodejs version from your home directory.

```
cd
asdf set nodejs x.x.x
```

## Development Configuration
Configure the MCP in your coding agent (using `claude` in this example)

`claude mcp add mindpilot -- npx tsx <path to...>/src/server/server.ts`

Run `claude` with the `--debug` flag if you need to see MCP errors

Start the development client (Vite) to get hot module reloading while developing.

`npm run dev`

Open the development client
`localhost:5173`
