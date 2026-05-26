---
name: "SecretiveShell/MCP-wolfram-alpha"
description: "An MCP server for querying wolfram alpha API."
category: "Other Tools and Integrations"
repo: "SecretiveShell/MCP-wolfram-alpha"
stars: 75
url: "https://github.com/SecretiveShell/MCP-wolfram-alpha"
body_length: 1881
license: "MIT"
language: "Python"
body_tr: |-
  # MCP-wolfram-alpha

  Wolfram Alpha API'sine bağlanmak için bir MCP sunucusu.

  <a href="https://glama.ai/mcp/servers/q5fud9cttp">
    
  </a>

  ## Bileşenler

  ### Promptlar

  Bu, duckduckgo aramasındaki `!wa` bang komutuna benzerdir.

  ```python
  def wa(query: str) -> f"Use wolfram alpha to answer the following question: {query}"
  ```

  ### Araçlar

  Wolfram Alpha API'sini sorgulayın.

  ```python
  def query_wolfram_alpha(query: str) -> str
  ```

  ## Konfigürasyon

  **Mutlaka** `WOLFRAM_API_KEY` ortam değişkenini ayarlamalısınız. API anahtarını [Wolfram Alpha](https://products.wolframalpha.com/api) adresinden alabilirsiniz.

  Bu, tam sonuçlar API'si ile test edilmiştir, ancak gerekli olmayabilir.

  ```json
  {
      "mcpServers": {
          "MCP-wolfram-alpha": {
              "command": "uv",
              "args": [
                  "--directory",
                  "C:\\Users\\root\\Documents\\MCP-wolfram-alpha",
                  "run",
                  "MCP-wolfram-alpha"
              ],
              "env": {
                  "WOLFRAM_API_KEY": "your-app-id"
              }
          }
      }
  }
  ```

  ## Geliştirme

  ### Hata Ayıklama

  Resmi MCP inspector iyi ortam desteğine sahip olmadığından, wong2'nin [mcp-cli-inspector](https://github.com/wong2/mcp-cli) aracını kullanmanızı öneririm.

  Claude Desktop ile aynı stil de bir config.json dosyası oluşturun.

  ```json
  {
      "mcpServers": {
          "MCP-wolfram-alpha": {
              "command": "uv",
              "args": [
                  "--directory",
                  "/full/path/to/MCP-wolfram-alpha",
                  "run",
                  "MCP-wolfram-alpha"
              ],
              "env": {
                  "WOLFRAM_API_KEY": "your-app-id"
              }
          }
      }
  }
  ```

  Ardından şunu çalıştırın:

  ```bash
  npx @wong2/mcp-cli -c .\config.json
  ```
---

# MCP-wolfram-alpha

A MCP server to connect to wolfram alpha API.

<a href="https://glama.ai/mcp/servers/q5fud9cttp">
  
</a>

## Components

### Prompts

This is analogous to the `!wa` bang in duckduckgo search.

```python
def wa(query: str) -> f"Use wolfram alpha to answer the following question: {query}"
```

### Tools

Query Wolfram Alpha api.

```python
def query_wolfram_alpha(query: str) -> str
```

## Configuration

You **must** set the `WOLFRAM_API_KEY` environment variable. Get an api ket from [Wolfram Alpha](https://products.wolframalpha.com/api).

This was tested with the full results API, but it might not be required.

```json
{
    "mcpServers": {
        "MCP-wolfram-alpha": {
            "command": "uv",
            "args": [
                "--directory",
                "C:\\Users\\root\\Documents\\MCP-wolfram-alpha",
                "run",
                "MCP-wolfram-alpha"
            ],
            "env": {
                "WOLFRAM_API_KEY": "your-app-id"
            }
        }
    }
}
```

## Development

### Debugging

Since the official MCP inspector does not have good environment support, I reccommend using wong2's [mcp-cli-inspector](https://github.com/wong2/mcp-cli).

Create a config.json file in the same style as claude desktop.

```json
{
    "mcpServers": {
        "MCP-wolfram-alpha": {
            "command": "uv",
            "args": [
                "--directory",
                "/full/path/to/MCP-wolfram-alpha",
                "run",
                "MCP-wolfram-alpha"
            ],
            "env": {
                "WOLFRAM_API_KEY": "your-app-id"
            }
        }
    }
}
```

Then run:

```bash
npx @wong2/mcp-cli -c .\config.json
```
