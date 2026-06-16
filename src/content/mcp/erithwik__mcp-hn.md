---
name: "erithwik/mcp-hn"
description: "An MCP server to search Hacker News, get top stories, and more."
category: "Search & Data Extraction"
repo: "erithwik/mcp-hn"
stars: 74
url: "https://github.com/erithwik/mcp-hn"
body_length: 2247
license: "MIT"
language: "Python"
body_tr: |-
  # Hacker News MCP Server

  [![smithery badge](https://smithery.ai/badge/mcp-hn)](https://smithery.ai/server/mcp-hn)

  Hacker News'tan bilgi almak için araçlar sağlayan bir Model Context Protocol (MCP) sunucusu.

  <a href="https://glama.ai/mcp/servers/e0rco8dfgt"></a>

  ## Araçlar

  - `get_stories` (top, new, ask_hn, show_hn) hikayelerini alma
  - `get_story_info` Bir hikayeyle ilişkili yorumları alma
  - `search_stories` Sorguya göre hikaye arama
  - `get_user_info` Kullanıcı bilgisini alma

  ## Örnek Kullanım

  Aşağıdakine benzer istemler kullanın:

  ```
  Kullanıcı: Bugünün en önemli hikayelerini getir
    Çıktı: `get_stories` aracını kullanır ve yapay zeka hakkında bir hikaye döndürür
  Kullanıcı: Bugünün yapay zekanın geleceğinden bahseden hikayesinin detayları neler?
    Çıktı: Önceki aracın sonuçlarına dayanarak `get_story_info` aracını kullanır
  Kullanıcı: `pg` kullanıcısı ne yapıyor?
    Çıktı: `get_user_info` aracını kullanır ve kullanıcının etkinliğinin bir özetini döndürür
  Kullanıcı: Hacker News yapay zeka kariyerleri hakkında neler söylüyor?
    Çıktı: `search_stories` aracını kullanır ve yorumların bir özetini döndürür
  ```

  Puppeteer MCP sunucusu ile daha detaylı bir örnek:

  ```
  Kullanıcı: Bugünün en önemli hikayeleri neler?
    Çıktı: `get_stories` aracını kullanır ve yapay zeka hakkında bir hikaye döndürür
  Kullanıcı: <AI> hakkındaki makaleyi okumak için puppeteer aracını kullanabilir misin ve ayrıca hackernews aracını kullanarak yorumları görüntüle ve makale hakkındaki ana yorumların ne olduğu hakkında bana bir özet verir misin?
    Çıktı: Yapay zeka hakkındaki makaleyi okumak için puppeteer aracını kullanır ve ardından yorumları almak için `get_story_info` hn aracını kullanır ve yorumların bir özetini döndürür
  ```

  ## Hızlı Başlangıç

  ### Smithery aracılığıyla kurulum

  Hacker News MCP Server'ı Claude Desktop'a [Smithery](https://smithery.ai/server/mcp-hn) aracılığıyla otomatik olarak kurmak için:

  ```bash
  npx -y @smithery/cli install mcp-hn --client claude
  ```

  ### Claude Desktop:

  Aşağıdakileri güncelleyin:

  MacOS'ta: `~/Library/Application\ Support/Claude/claude_desktop_config.json`

  Windows'ta: `%APPDATA%/Claude/claude_desktop_config.json`

  Üretim için aşağıdaki içerikle:

  ```json
  {
    "mcpServers": {
      "mcp-hn": {
        "command": "uvx",
        "args": ["mcp-hn"]
      }
    }
  }
  ```
---

# Hacker News MCP Server

[![smithery badge](https://smithery.ai/badge/mcp-hn)](https://smithery.ai/server/mcp-hn)

A Model Context Protocol (MCP) server that provides tools for fetching information from Hacker News.

<a href="https://glama.ai/mcp/servers/e0rco8dfgt"></a>

## Tools

- `get_stories` Fetching (top, new, ask_hn, show_hn) stories
- `get_story_info` Fetching comments associated with a story
- `search_stories` Searching for stories by query
- `get_user_info` Fetching user info

## Example Usage

Use prompts like the following:

```
User: Get the top stories of today
  Output: Uses `get_stories` tool and returns a story about AI
User: What does the details of the story today that talks about the future of AI
  Output: Uses `get_story_info` tool based on the results of the previous tool
User: What has the user `pg` been up to?
  Output: Uses `get_user_info` tool and returns a summary of the user's activity
User: What does hackernews say about careers in AI?
  Output: Uses `search_stories` tool and returns a summary of the comments
```

A more detailed example with the puppeteer MCP server:

```
User: What are the top stories of today?
  Output: Uses `get_stories` tool and returns a story about AI
User: Can you use the puppeteer tool to read the article about <AI> and also use the hackernews tool to view the comments and give me a summary of what the main comments are about the article?
  Output: Uses puppeteer tool to read the article about AI and then uses the `get_story_info` hn tool to get the comments and returns a summary of the comments
```

## Quickstart

### Installing via Smithery

To install Hacker News MCP Server for Claude Desktop automatically via [Smithery](https://smithery.ai/server/mcp-hn):

```bash
npx -y @smithery/cli install mcp-hn --client claude
```

### Claude Desktop:

Update the following:

On MacOS: `~/Library/Application\ Support/Claude/claude_desktop_config.json`

On Windows: `%APPDATA%/Claude/claude_desktop_config.json`

With the following for production:

```json
{
  "mcpServers": {
    "mcp-hn": {
      "command": "uvx",
      "args": ["mcp-hn"]
    }
  }
}
```
