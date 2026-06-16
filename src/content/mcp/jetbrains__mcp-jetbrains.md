---
name: "JetBrains/mcp-jetbrains"
description: "Connect to JetBrains IDE"
category: "Developer Tools"
repo: "JetBrains/mcp-jetbrains"
stars: 957
url: "https://github.com/JetBrains/mcp-jetbrains"
body_length: 5464
license: "Apache-2.0"
language: "JavaScript"
homepage: "https://plugins.jetbrains.com/plugin/26071-mcp-server"
body_tr: |-
  [![official JetBrains project](http://jb.gg/badges/incubator-flat-square.svg)](https://github.com/JetBrains#jetbrains-on-github)

  # ⚠️ Kullanımdan Kaldırıldı

  **Bu depo artık bakımı yapılmamaktadır.** Temel işlevsellik, sürüm 2025.2'den itibaren tüm IntelliJ tabanlı IDE'lere entegre edilmiştir.
  Yerleşik işlevsellik SSE ve JVM tabanlı proxy (STDIO için) ile çalışmakta olduğundan bu NPM paketi artık gerekli değildir.

  **Geçiş:** Yerleşik işlevselliği kullanma hakkında ayrıntılar için lütfen [resmi dokumentasyona](https://www.jetbrains.com/help/idea/mcp-server.html) bakınız.

  **Sorunlar & Destek:** Yerleşik MCP işlevselliği ile ilgili hatalar veya özellik istekleri için lütfen [JetBrains YouTrack](https://youtrack.jetbrains.com/issues?q=project:%20IJPL%20Subsystem:%20%7BMCP%20(Model%20Context%20Protocol)%7D%20)'i kullanınız.

  # JetBrains MCP Proxy Server

  Server, istemciden JetBrains IDE'ye istekleri yönlendirir.

  ## MCP Server eklentisini yükleyin

  https://plugins.jetbrains.com/plugin/26071-mcp-server

  ## VS Code Kurulumu

  Tek tıkla kurulum için aşağıdaki kurulum düğmelerinden birine tıklayınız:

  [![Install with NPX in VS Code](https://img.shields.io/badge/VS_Code-NPM-0098FF?style=flat-square&logo=visualstudiocode&logoColor=white)](https://insiders.vscode.dev/redirect/mcp/install?name=jetbrains&config=%7B%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22%40jetbrains%2Fmcp-proxy%22%5D%7D) [![Install with NPX in VS Code Insiders](https://img.shields.io/badge/VS_Code_Insiders-NPM-24bfa5?style=flat-square&logo=visualstudiocode&logoColor=white)](https://insiders.vscode.dev/redirect/mcp/install?name=jetbrains&config=%7B%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22%40jetbrains%2Fmcp-proxy%22%5D%7D&quality=insiders)

  ### Manuel Kurulum

  VS Code'daki Kullanıcı Ayarları (JSON) dosyanıza aşağıdaki JSON bloğunu ekleyiniz. Bunu `Ctrl + Shift + P` tuşlarına basıp `Preferences: Open User Settings (JSON)` yazarak yapabilirsiniz.

  ```json
  {
    "mcp": {
      "servers": {
        "jetbrains": {
          "command": "npx",
          "args": ["-y", "@jetbrains/mcp-proxy"]
        }
      }
    }
  }
  ```

  İsteğe bağlı olarak, çalışma alanınızda `.vscode/mcp.json` adlı bir dosyaya ekleyebilirsiniz:

  ```json
  {
    "servers": {
      "jetbrains": {
        "command": "npx",
        "args": ["-y", "@jetbrains/mcp-proxy"]
      }
    }
  }
  ```

  ## Claude Desktop ile Kullanım

  Bunu Claude Desktop ile kullanmak için aşağıdakileri `claude_desktop_config.json` dosyanıza ekleyiniz.
  macOS'ta tam yol: `~/Library/Application\ Support/Claude/claude_desktop_config.json`, Windows'ta: `%APPDATA%/Claude/claude_desktop_config.json`.

  ```json
  {
    "mcpServers": {
      "jetbrains": {
        "command": "npx",
        "args": ["-y", "@jetbrains/mcp-proxy"]
      }
    }
  }
  ```

  MCP Server Plugin'i yükledikten ve JSON'u config dosyasına ekledikten sonra, Claude Desktop'ı yeniden başlatınız ve Claude Desktop'ı yeniden başlatmadan önce Jetbrains ürününün açık olduğundan emin olunuz.

  ## Yapılandırma

  Birden fazla IDE'yi MCP server ile çalıştırıyorsanız ve belirli bir IDE'ye bağlanmak istiyorsanız, MCP server yapılandırmasına ekleyiniz:
  ```json
  "env": {
    "IDE_PORT": "<IDE'nin yerleşik web sunucusunun portu>"
  }
  ```

  Varsayılan olarak IDE'ye 127.0.0.1 üzerinden bağlanırız ancak farklı bir adres/host belirtebilirsiniz:
  ```json
  "env": {
    "HOST": "<IDE'nin yerleşik web sunucusunun host/adresi>"
  }
  ```

  Logging'i etkinleştirmek için ekleyiniz:
  ```json
  "env": {
    "LOG_ENABLED": "true"
  }
  ```

  ## Sorun Giderme

  ### Node.js Sürüm Gereksinimleri
  **Sorun:** Hata mesajı: `Cannot find module 'node:path'`

  **Çözüm:**
  MCP Proxy, Node 16'da çalışmaz.
  Node.js kurulumunuzu sürüm 18 veya daha yeni bir sürüme yükseltin. Config dosyanızdaki `command` parametresinin doğru Node.js sürümünü işaret ettiğinden emin olun.
  NodeJS'in en son sürümünün tam yolunu kullanmayı deneyin.

  ### 

  ### macOS: Eklenti, nvm Aracılığıyla Yüklenen Node.js'i Algılayamıyor
  **Sorun:** macOS'ta nvm (Node Version Manager) aracılığıyla Node.js yüklediyseniz, MCP Server Plugin Node.js kurulumunuzu algılayamayabilir.

  **Çözüm:** `/usr/local/bin` dizininde nvm npx çalıştırılabilir dosyasını işaret eden bir sembolik bağlantı oluşturunuz:
  ```bash
  which npx &>/dev/null && sudo ln -sf "$(which npx)" /usr/local/bin/npx
  ```
  Bu tek satırlık komut, npx'in yolunuzda var olup olmadığını kontrol eder ve gerekli sembolik bağlantıyı uygun izinlerle oluşturur.

  ### Harici Klientler veya Docker Konteynerler ile MCP Kullanımı (LibreChat, Cline, vb.)

  **Sorun:** JetBrains MCP proxy'sine harici klientlerden, Docker konteynerlerinden veya üçüncü taraf uygulamalardan (LibreChat gibi) bağlanmaya çalışırken, http://host.docker.internal:6365/api/mcp/list_tools gibi endpoint'lere gelen istekler 404 hatası döndürebilir veya bağlantı kuramayabilir.
  **Çözüm:** Ele alınması gereken iki temel sorun vardır:
  1. Harici Bağlantıları Etkinleştirin:

  JetBrains IDE'niz içinde, _Settings | Build, Execution, Deployment | Debugger_ bölümünde "Can accept external connections" seçeneğini etkinleştirin.

  2. LAN IP ve Port ile Yapılandırın:

  `host.docker.internal` yerine makinenizin LAN IP adresini kullanınız
  Yapılandırmada IDE_PORT ve HOST'u açıkça ayarlayınız
  LibreChat veya benzer harici klientler için örnek yapılandırma:
  ```yaml
  mcpServers:
    intellij:
      type: stdio
      command: sh
      args:
        - "-c"
        - "IDE_PORT=YOUR_IDEA_PORT HOST=YOUR_IDEA_LAN_IP npx -y @jetbrains/mcp-proxy"
  ```
  Aşağıdakileri değiştirin:

  `YOUR_IDEA_PORT` ile IDE'niz ait debug portunu (IDE ayarlarında bulunur)
  `YOUR_IDEA_LAN_IP` ile bilgisayarınızın yerel ağ IP'sini (örneğin, 192.168.0.12)


  ## Derleme Yöntemi
  1. macOS'ta test edilmiştir
  2. `brew install node pnpm`
  3. Projeyi derlemek için `pnpm build` komutunu çalıştırınız
---

[![official JetBrains project](http://jb.gg/badges/incubator-flat-square.svg)](https://github.com/JetBrains#jetbrains-on-github)

# ⚠️ Deprecated

**This repository is no longer maintained.** The core functionality has been integrated into all IntelliJ-based IDEs since version 2025.2.
The built-in functionality works with SSE and JVM-based proxy (for STDIO) so this NPM package is no longer required.

**Migration:** Please refer to the [official documentation](https://www.jetbrains.com/help/idea/mcp-server.html) for details on using the built-in functionality.

**Issues & Support:** For bugs or feature requests related to the built-in MCP functionality, please use the [JetBrains YouTrack](https://youtrack.jetbrains.com/issues?q=project:%20IJPL%20Subsystem:%20%7BMCP%20(Model%20Context%20Protocol)%7D%20).

# JetBrains MCP Proxy Server

The server proxies requests from client to JetBrains IDE.

## Install MCP Server plugin

https://plugins.jetbrains.com/plugin/26071-mcp-server

## VS Code Installation

For one-click installation, click one of the install buttons below:

[![Install with NPX in VS Code](https://img.shields.io/badge/VS_Code-NPM-0098FF?style=flat-square&logo=visualstudiocode&logoColor=white)](https://insiders.vscode.dev/redirect/mcp/install?name=jetbrains&config=%7B%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22%40jetbrains%2Fmcp-proxy%22%5D%7D) [![Install with NPX in VS Code Insiders](https://img.shields.io/badge/VS_Code_Insiders-NPM-24bfa5?style=flat-square&logo=visualstudiocode&logoColor=white)](https://insiders.vscode.dev/redirect/mcp/install?name=jetbrains&config=%7B%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22%40jetbrains%2Fmcp-proxy%22%5D%7D&quality=insiders)

### Manual Installation

Add the following JSON block to your User Settings (JSON) file in VS Code. You can do this by pressing `Ctrl + Shift + P` and typing `Preferences: Open User Settings (JSON)`.

```json
{
  "mcp": {
    "servers": {
      "jetbrains": {
        "command": "npx",
        "args": ["-y", "@jetbrains/mcp-proxy"]
      }
    }
  }
}
```

Optionally, you can add it to a file called `.vscode/mcp.json` in your workspace:

```json
{
  "servers": {
    "jetbrains": {
      "command": "npx",
      "args": ["-y", "@jetbrains/mcp-proxy"]
    }
  }
}
```

## Usage with Claude Desktop

To use this with Claude Desktop, add the following to your `claude_desktop_config.json`.
The full path on MacOS: `~/Library/Application\ Support/Claude/claude_desktop_config.json`, on Windows: `%APPDATA%/Claude/claude_desktop_config.json`.

```json
{
  "mcpServers": {
    "jetbrains": {
      "command": "npx",
      "args": ["-y", "@jetbrains/mcp-proxy"]
    }
  }
}
```

After installing the MCP Server Plugin, and adding the JSON to the config file, restart Claude Desktop, and make sure the Jetbrains product is open before restarting Claude Desktop. 

## Configuration

If you're running multiple IDEs with MCP server and want to connect to the specific one, add to the MCP server configuration:
```json
"env": {
  "IDE_PORT": "<port of IDE's built-in webserver>"
}
```

By default, we connect to IDE on  127.0.0.1 but you can specify a different address/host:
```json
"env": {
  "HOST": "<host/address of IDE's built-in webserver>"
}
```

To enable logging add:
```json
"env": {
  "LOG_ENABLED": "true"
}
```

## Troubleshooting

### Node.js Version Requirements
**Problem:** Error message: `Cannot find module 'node:path'`

**Solution:**
MCP Proxy doesn't work on Node 16.
Upgrade your Node.js installation to version 18 or later. Make sure that `command` in config points to the correct Node.js version.
Try to use the full path to the latest version of NodeJS.

### 

### MacOS: Plugin Unable to Detect Node.js Installed via nvm
**Problem:** On MacOS, if you have Node.js installed through nvm (Node Version Manager), the MCP Server Plugin might be unable to detect your Node.js installation.

**Solution:** Create a symbolic link in `/usr/local/bin` pointing to your nvm npx executable:
```bash
which npx &>/dev/null && sudo ln -sf "$(which npx)" /usr/local/bin/npx
```
This one-liner checks if npx exists in your path and creates the necessary symbolic link with proper permissions.

### Using MCP with External Clients or Docker Containers (LibreChat, Cline, etc.)

**Problem:** When attempting to connect to the JetBrains MCP proxy from external clients, Docker containers, or third-party applications (like LibreChat), requests to endpoints such as http://host.docker.internal:6365/api/mcp/list_tools may return 404 errors or fail to connect.
**Solution:** There are two key issues to address:
1. Enable External Connections:

In your JetBrains IDE, enable "Can accept external connections" in the _Settings | Build, Execution, Deployment | Debugger_.

2. Configure with LAN IP and Port:

Use your machine's LAN IP address instead of `host.docker.internal`
Explicitly set the IDE_PORT and HOST in your configuration
Example configuration for LibreChat or similar external clients:
```yaml
mcpServers:
  intellij:
    type: stdio
    command: sh
    args:
      - "-c"
      - "IDE_PORT=YOUR_IDEA_PORT HOST=YOUR_IDEA_LAN_IP npx -y @jetbrains/mcp-proxy"
```
Replace:

`YOUR_IDEA_PORT` with your IDE's debug port (found in IDE settings)
`YOUR_IDEA_LAN_IP` with your computer's local network IP (e.g., 192.168.0.12)


## How to build
1. Tested on macOS
2. `brew install node pnpm`
3. Run `pnpm build` to build the project
