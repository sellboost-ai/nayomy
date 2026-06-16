---
name: "stape-io/google-tag-manager-mcp-server"
description: "This server supports remote MCP connections, includes built-in Google OAuth, and provide an interface to the Google Tag Manager API."
category: "Marketing"
repo: "stape-io/google-tag-manager-mcp-server"
stars: 158
url: "https://github.com/stape-io/google-tag-manager-mcp-server"
body_length: 1843
license: "Apache-2.0"
language: "TypeScript"
homepage: "https://stape.io"
body_tr: |-
  # Google Tag Manager için MCP Server
  [![Trust Score](https://archestra.ai/mcp-catalog/api/badge/quality/stape-io/google-tag-manager-mcp-server)](https://archestra.ai/mcp-catalog/stape-io__google-tag-manager-mcp-server)

  Bu, uzak MCP bağlantılarını destekleyen, Google OAuth'u yerleşik olarak içeren ve Google Tag Manager API'sine bir interface sağlayan bir sunucudur.


  ## Claude Desktop'tan uzak MCP sunucusuna erişim

  Claude Desktop'ı açın ve Settings -> Developer -> Edit Config adımlarını izleyin. Bu, Claude'un hangi MCP sunucularına erişebileceğini kontrol eden yapılandırma dosyasını açar.

  İçeriği aşağıdaki yapılandırma ile değiştirin. Claude Desktop'ı yeniden başlattığınızda, OAuth giriş sayfanızı gösteren bir tarayıcı penceresi açılacaktır. Claude'a MCP sunucunuza erişim izni vermek için kimlik doğrulama akışını tamamlayın. Erişim izni verdikten sonra, araçlar kullanmanız için kullanılabilir hale gelecektir.

  ```json
  {
    "mcpServers": {
      "gtm-mcp-server": {
        "command": "npx",
        "args": [
          "-y",
          "mcp-remote",
          "https://gtm-mcp.stape.ai/mcp"
        ]
      }
    }
  }
  ```

  ### Sorun Giderme

  **MCP Server Adı Uzunluk Sınırı**

  Bazı MCP istemcileri (Cursor AI gibi) birleştirilmiş MCP sunucu adı + araç adı uzunluğu için 60 karakterlik bir sınıra sahiptir. Yapılandırmanızda daha uzun bir sunucu adı kullanırsanız (örneğin, `gtm-mcp-server-your-additional-long-name`), bazı araçlar filtrelenmeyebilir.

  Bu sorunu önlemek için:
  - MCP yapılandırmanızda daha kısa sunucu adları kullanın (örneğin, `gtm-mcp-server`)

  **MCP Cache'i Temizleme**

  [mcp-remote](https://github.com/geelen/mcp-remote#readme) tüm kimlik bilgisi bilgilerini ~/.mcp-auth içinde saklar (veya MCP_REMOTE_CONFIG_DIR'in işaret ettiği yerdeki). Kalıcı sorunlarla karşılaşıyorsanız, aşağıdakini çalıştırmayı deneyin:

  ```
  rm -rf ~/.mcp-auth
  ```

  Daha sonra MCP istemcinizi yeniden başlatın.
---

# MCP Server for Google Tag Manager
[![Trust Score](https://archestra.ai/mcp-catalog/api/badge/quality/stape-io/google-tag-manager-mcp-server)](https://archestra.ai/mcp-catalog/stape-io__google-tag-manager-mcp-server)

This is a server that supports remote MCP connections, with Google OAuth built-in and provides an interface to the Google Tag Manager API.


## Access the remote MCP server from Claude Desktop

Open Claude Desktop and navigate to Settings -> Developer -> Edit Config. This opens the configuration file that controls which MCP servers Claude can access.

Replace the content with the following configuration. Once you restart Claude Desktop, a browser window will open showing your OAuth login page. Complete the authentication flow to grant Claude access to your MCP server. After you grant access, the tools will become available for you to use.

```json
{
  "mcpServers": {
    "gtm-mcp-server": {
      "command": "npx",
      "args": [
        "-y",
        "mcp-remote",
        "https://gtm-mcp.stape.ai/mcp"
      ]
    }
  }
}
```

### Troubleshooting

**MCP Server Name Length Limit**

Some MCP clients (like Cursor AI) have a 60-character limit for the combined MCP server name + tool name length. If you use a longer server name in your configuration (e.g., `gtm-mcp-server-your-additional-long-name`), some tools may be filtered out.

To avoid this issue:
- Use shorter server names in your MCP configuration (e.g., `gtm-mcp-server`)

**Clearing MCP Cache**

[mcp-remote](https://github.com/geelen/mcp-remote#readme) stores all the credential information inside ~/.mcp-auth (or wherever your MCP_REMOTE_CONFIG_DIR points to). If you're having persistent issues, try running:
You can run rm -rf ~/.mcp-auth to clear any locally stored state and tokens.
```
rm -rf ~/.mcp-auth
```
Then restarting your MCP client.
