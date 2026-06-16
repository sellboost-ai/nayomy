---
name: "apify/mcp-server-rag-web-browser"
description: "An MCP server for Apify's open-source RAG Web Browser Actor to perform web searches, scrape URLs, and return content in Markdown."
category: "Search & Data Extraction"
repo: "apify/mcp-server-rag-web-browser"
stars: 203
url: "https://github.com/apify/mcp-server-rag-web-browser"
body_length: 5716
license: "Apache-2.0"
language: "JavaScript"
homepage: "https://apify.com/apify/rag-web-browser"
body_tr: |-
  # RAG Web Browser Actor için MCP Sunucusu 🌐

  [RAG Web Browser Actor](https://apify.com/apify/rag-web-browser) için bir MCP sunucusunun uygulanması.
  Bu Actor, büyük dil modelleri (LLM'ler) ve RAG pipeline'ları için bir web tarayıcısı görevi görerek, ChatGPT'deki web araması benzeri işlevsellik sağlar.

  > **Bu MCP sunucusu [mcp.apify.com](https://mcp.apify.com) lehine kullanımdan kaldırılmıştır**
  >
  > Aynı işlevsellik ve çok daha fazlası için lütfen şu alternatiflerden birini kullanın:

  ## 🚀 Önerilen: mcp.apify.com kullanın

  Aynı web tarama yeteneklerini almanın en kolay yolu, varsayılan ayarlarla **[mcp.apify.com](https://mcp.apify.com)** kullanmaktır.

  **Avantajlar:**
  - ✅ Yerel kurulum gerekli değil
  - ✅ Her zaman güncel
  - ✅ 6.000+ Apify Actor'a erişim (RAG Web Browser dahil)
  - ✅ Kolay bağlantı için OAuth desteği
  - ✅ Dinamik araç keşfi

  **Hızlı Kurulum:**
  1. https://mcp.apify.com adresine gidin
  2. İstemciyi (Claude, VS Code, vb.) yetkilendirin
  3. Oluşturulan MCP sunucusu yapılandırmasını kopyalayın (veya destekleniyorsa OAuth akışını kullanın)
  4. Hemen tarama ve diğer araçları kullanmaya başlayın

  ## 🌐 Alternatif: doğrudan RAG Web Browser entegrasyonu

  [RAG Web Browser Actor](https://apify.com/apify/rag-web-browser) öğesini doğrudan HTTP/SSE arayüzü üzerinden çağırabilirsiniz.

  **Avantajlar:**
  - ✅ mcp.apify.com olmadan doğrudan entegrasyon
  - ✅ Server-Sent Events aracılığıyla gerçek zamanlı akış
  - ✅ Entegrasyon üzerinde tam kontrol
  - ✅ Ek bağımlılık yok

  **Dokümanlar:** [Actor Dokumentasyonu](https://apify.com/apify/rag-web-browser#anthropic-model-context-protocol-mcp-server)

  ---

  ## 🎯 Bu MCP sunucusu ne yapar?

  Bu sunucu, AI ajanları ve LLM'leri için hızlı yanıtlar sağlamak üzere özel olarak tasarlanmıştır ve web ile etkileşim kurmalarını ile web sayfalarından bilgi çıkarmalarını sağlar.
  Yerel olarak çalışır ve [RAG Web Browser Actor](https://apify.com/apify/rag-web-browser) ile [**Standby modunda**](https://docs.apify.com/platform/actors/running/standby) iletişim kurar,
  arama sorguları gönderir ve yanıtta çıkarılan web içeriğini alır.

  - **Web Araması**: Google Arama'yı sorgulayın, en iyi N URL'yi kazıyın ve temizlenmiş içeriği Markdown olarak döndürün
  - **Tek URL Getirme**: Belirli bir URL'yi getirin ve içeriğini Markdown olarak döndürün
  - **Yerel MCP Entegrasyonu**: AI istemcileriyle standart giriş/çıkış (stdio) iletişimi

  ## 🧱 Bileşenler

  ### Araçlar

  - name: `search`
    description: Google Arama'yı sorgulayın VEYA doğrudan bir URL'yi getirin ve temizlenmiş sayfa içeriğini döndürün.
    arguments:
    - `query` (string, gerekli): Arama anahtar kelimeleri veya tam bir URL. Gelişmiş Google operatörleri desteklenir.
    - `maxResults` (number, isteğe bağlı, varsayılan: 1): Getirilecek maksimum organik sonuç sayısı (`query` bir URL olduğunda yoksayılır).
    - `scrapingTool` (string, isteğe bağlı, varsayılan: `raw-http`): `browser-playwright` | `raw-http` seçeneklerinden biri.
      - `raw-http`: Hızlı (JS yürütmesiz) – statik sayfalar için uygundur.
      - `browser-playwright`: JS ağır siteleri işler – daha yavaş, daha sağlamdır.
    - `outputFormats` (dizi, isteğe bağlı, varsayılan: [`markdown`]): `text`, `markdown`, `html` seçeneklerinden bir veya daha fazlası.
    - `requestTimeoutSecs` (number, isteğe bağlı, varsayılan: 40, min 1 max 300): Toplam sunucu tarafı VE istemci bekleme bütçesi. Yerel bir iptal uygulanır.


  ## 🔄 Geçiş Rehberi

  ### Yerel MCP Sunucusundan mcp.apify.com'a

  **Önce (Kullanımdan kaldırılan yerel sunucu):**
  ```json
  {
    "mcpServers": {
      "rag-web-browser": {
        "command": "npx",
        "args": ["@apify/mcp-server-rag-web-browser"],
        "env": {
          "APIFY_TOKEN": "your-apify-api-token"
        }
      }
    }
  }
  ```

  **Sonra (Önerilen Apify sunucusu):**
  ```json
  {
    "mcpServers": {
      "apify": {
        "command": "npx",
        "args": ["@apify/actors-mcp-server"],
        "env": {
          "APIFY_TOKEN": "your-apify-api-token"
        }
      }
    }
  }
  ```
  Veya barındırılan endpoint'i kullanın: `https://mcp.apify.com` (istemciniz HTTP transport / remote MCP desteklediğinde).

  ### MCP istemcileri
  - Claude Desktop: https://claude.ai/download
  - Visual Studio Code
  - Apify Tester MCP Client: https://apify.com/jiri.spilka/tester-mcp-client

  ## 🛠️ Geliştirme

  ### Ön Koşullar
  - Node.js (v18 veya daha yüksek)
  - Apify API Token (`APIFY_TOKEN`)

  Klonlayın ve kurun:
  ```bash
  git clone https://github.com/apify/mcp-server-rag-web-browser.git
  cd mcp-server-rag-web-browser
  npm install
  ```

  ### Derleme
  ```bash
  npm install
  npm run build
  ```

  ### Hata Ayıklama

  MCP sunucuları standart giriş/çıkış (stdio) üzerinden çalıştığından, hata ayıklama zor olabilir.
  En iyi hata ayıklama deneyimi için [MCP Inspector](https://github.com/modelcontextprotocol/inspector) kullanın.

  MCP Inspector'ü [`npm`](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) ile şu komutla başlatabilirsiniz:

  ```bash
  export APIFY_TOKEN=your-apify-api-token
  npx @modelcontextprotocol/inspector node dist/index.js
  ```
  Başlatıldığında, Inspector hata ayıklamaya başlamak için tarayıcınızda erişebileceğiniz bir URL gösterecektir.

  # 📖 Daha fazla bilgi edinin

  - [Model Context Protocol](https://modelcontextprotocol.org/)
  - [RAG Web Browser Actor](https://apify.com/apify/rag-web-browser)
  - [AI Ajanları Nedir?](https://blog.apify.com/what-are-ai-agents/)
  - [MCP Nedir ve Neden Önemlidir?](https://blog.apify.com/what-is-model-context-protocol/)
  - [MCP'yi Apify Actors ile Nasıl Kullanılır](https://blog.apify.com/how-to-use-mcp/)
  - [Tester MCP Client](https://apify.com/jiri.spilka/tester-mcp-client)
  - [Webinar: Apify'de MCP Sunucuları Oluşturma ve Para Kazanma](https://www.youtube.com/watch?v=w3AH3jIrXXo)
  - [Apify'de AI Ajanı Oluşturma ve Para Kazanma](https://blog.apify.com/how-to-build-an-ai-agent/)
  - [TypeScript Şablonuyla Dakikalar İçinde MCP Sunucuları Oluşturun ve Dağıtın](https://blog.apify.com/build-and-deploy-mcp-servers-typescript/)

  *Bu depo sadece arşivleme amaçları için tutulmaktadır. Etkin geliştirme için lütfen yukarıdaki önerilen alternatifleri kullanın.*
---

# MCP Server for the RAG Web Browser Actor 🌐

Implementation of an MCP server for the [RAG Web Browser Actor](https://apify.com/apify/rag-web-browser).
This Actor serves as a web browser for large language models (LLMs) and RAG pipelines, similar to a web search in ChatGPT.

> **This MCP server is deprecated in favor of [mcp.apify.com](https://mcp.apify.com)**
>
> For the same functionality and much more, please use one of these alternatives:

## 🚀 Recommended: use mcp.apify.com

The easiest way to get the same web browsing capabilities is to use **[mcp.apify.com](https://mcp.apify.com)** with default settings.

**Benefits:**
- ✅ No local setup required
- ✅ Always up-to-date
- ✅ Access to 6,000+ Apify Actors (including RAG Web Browser)
- ✅ OAuth support for easy connection
- ✅ Dynamic tool discovery

**Quick Setup:**
1. Go to https://mcp.apify.com
2. Authorize the client (Claude, VS Code, etc.)
3. Copy the generated MCP server configuration (or use OAuth flow if supported)
4. Start using browsing & other tools immediately

## 🌐 Alternative: direct RAG Web Browser integration

You can also call the [RAG Web Browser Actor](https://apify.com/apify/rag-web-browser) directly via its HTTP/SSE interface.

**Benefits:**
- ✅ Direct integration without mcp.apify.com
- ✅ Real-time streaming via Server-Sent Events
- ✅ Full control over the integration
- ✅ No additional dependencies

**Docs:** [Actor Documentation](https://apify.com/apify/rag-web-browser#anthropic-model-context-protocol-mcp-server)

---

## 🎯 What does this MCP server do?

This server is specifically designed to provide fast responses to AI agents and LLMs, allowing them to interact with the web and extract information from web pages.
It runs locally and communicates with the [RAG Web Browser Actor](https://apify.com/apify/rag-web-browser) in [**Standby mode**](https://docs.apify.com/platform/actors/running/standby),
sending search queries and receiving extracted web content in response.

- **Web Search**: Query Google Search, scrape top N URLs, and return cleaned content as Markdown
- **Single URL Fetching**: Fetch a specific URL and return its content as Markdown
- **Local MCP Integration**: Standard input/output (stdio) communication with AI clients

## 🧱 Components

### Tools

- name: `search`
  description: Query Google Search OR fetch a direct URL and return cleaned page contents.
  arguments:
  - `query` (string, required): Search keywords or a full URL. Advanced Google operators supported.
  - `maxResults` (number, optional, default: 1): Max organic results to fetch (ignored when `query` is a URL).
  - `scrapingTool` (string, optional, default: `raw-http`): One of `browser-playwright` | `raw-http`.
    - `raw-http`: Fast (no JS execution) – good for static pages.
    - `browser-playwright`: Handles JS-heavy sites – slower, more robust.
  - `outputFormats` (array of strings, optional, default: [`markdown`]): One or more of `text`, `markdown`, `html`.
  - `requestTimeoutSecs` (number, optional, default: 40, min 1 max 300): Total server-side AND client wait budget. A local abort is enforced.


## 🔄 Migration Guide

### From Local MCP Server to mcp.apify.com

**Before (Deprecated local server):**
```json
{
  "mcpServers": {
    "rag-web-browser": {
      "command": "npx",
      "args": ["@apify/mcp-server-rag-web-browser"],
      "env": {
        "APIFY_TOKEN": "your-apify-api-token"
      }
    }
  }
}
```

**After (Recommended Apify server):**
```json
{
  "mcpServers": {
    "apify": {
      "command": "npx",
      "args": ["@apify/actors-mcp-server"],
      "env": {
        "APIFY_TOKEN": "your-apify-api-token"
      }
    }
  }
}
```
Or use the hosted endpoint: `https://mcp.apify.com` (when your client supports HTTP transport / remote MCP).

### MCP clients
- Claude Desktop: https://claude.ai/download
- Visual Studio Code
- Apify Tester MCP Client: https://apify.com/jiri.spilka/tester-mcp-client

## 🛠️ Development

### Prerequisites
- Node.js (v18 or higher)
- Apify API Token (`APIFY_TOKEN`)

Clone & install:
```bash
git clone https://github.com/apify/mcp-server-rag-web-browser.git
cd mcp-server-rag-web-browser
npm install
```

### Build
```bash
npm install
npm run build
```

### Debugging

Since MCP servers operate over standard input/output (stdio), debugging can be challenging.
For the best debugging experience, use the [MCP Inspector](https://github.com/modelcontextprotocol/inspector).

You can launch the MCP Inspector via [`npm`](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) with this command:

```bash
export APIFY_TOKEN=your-apify-api-token
npx @modelcontextprotocol/inspector node dist/index.js
```
Upon launching, the Inspector will display a URL that you can access in your browser to begin debugging.

# 📖 Learn more

- [Model Context Protocol](https://modelcontextprotocol.org/)
- [RAG Web Browser Actor](https://apify.com/apify/rag-web-browser)
- [What are AI Agents?](https://blog.apify.com/what-are-ai-agents/)
- [What is MCP and why does it matter?](https://blog.apify.com/what-is-model-context-protocol/)
- [How to use MCP with Apify Actors](https://blog.apify.com/how-to-use-mcp/)
- [Tester MCP Client](https://apify.com/jiri.spilka/tester-mcp-client)
- [Webinar: Building and Monetizing MCP Servers on Apify](https://www.youtube.com/watch?v=w3AH3jIrXXo)
- [How to build and monetize an AI agent on Apify](https://blog.apify.com/how-to-build-an-ai-agent/)
- [Build and deploy MCP servers in minutes with a TypeScript template](https://blog.apify.com/build-and-deploy-mcp-servers-typescript/)

*This repository is maintained for archival purposes only. Please use the recommended alternatives above for active development.*
