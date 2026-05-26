---
name: "nkapila6/mcp-local-rag"
description: "primitive\" RAG-like web search model context protocol (MCP) server that runs locally. No APIs needed."
description_tr: "Yerel olarak çalışan, API gerektirmeyen ilkel bir RAG benzeri web arama modeli context protocol (MCP) sunucusu."
category: "Search & Data Extraction"
repo: "nkapila6/mcp-local-rag"
stars: 126
url: "https://github.com/nkapila6/mcp-local-rag"
body_length: 7828
license: "MIT"
language: "Python"
body_tr: |-
  <a href='https://github.com/nkapila6/mcp-local-rag/'></a>

  [![GitHub Codespaces'ta Aç](https://github.com/codespaces/badge.svg)](https://codespaces.new/nkapila6/mcp-local-rag)
  [![DeepWiki'ye Sor](https://deepwiki.com/badge.svg)](https://deepwiki.com/nkapila6/mcp-local-rag)

  <!-- omit from toc -->
  # mcp-local-rag
  Yerel olarak çalışan "primitive" RAG benzeri web arama model context protocol (MCP) sunucusu. ✨ API yok ✨

  RAG tabanlı web arama ve derin araştırma model context protocol (MCP) sunucusu, tamamen yerel ortamda çalışır. 9+ arama motoru arasında çok motorlu araştırma yapabilir, semantik benzerlik sıralaması sunar ve API anahtarı gerektirmez.

  - [Özellikler](#özellikler)
    - [Çok Motorlu Derin Araştırma](#çok-motorlu-derin-araştırma)
  - [Kurulum](#kurulum)
      - [`uvx` Üzerinden Doğrudan Çalıştırma](#uvx-üzerinden-doğrudan-çalıştırma)
      - [Docker Kullanımı (önerilen)](#docker-kullanımı-önerilen)
  - [Agent Yetenekleri](#agent-yetenekleri)
  - [Güvenlik Denetimleri](#güvenlik-denetimleri)
  - [MCP İstemcileri](#mcp-istemcileri)
  - [Claude Desktop Örnekleri](#claude-desktop-örnekleri)
    - [Sonuç](#sonuç)
  - [Katkıda Bulunma](#katkıda-bulunma)
  - [Lisans](#lisans)


  ```mermaid
  %%{init: {'theme': 'base'}}%%
  flowchart TD
      A[User] -->|1.Submits LLM Query| B[Language Model]
      B -->|2.Sends Query| C[mcp-local-rag Tool]
      
      subgraph mcp-local-rag Processing
      C -->|Search DuckDuckGo| D[Fetch 10 search results]
      D -->|Fetch Embeddings| E[Embeddings from Google's MediaPipe Text Embedder]
      E -->|Compute Similarity| F[Rank Entries Against Query]
      F -->|Select top k results| G[Context Extraction from URL]
      end
      
      G -->|Returns Markdown from HTML content| B
      B -->|3.Generated response with context| H[Final LLM Output]
      H -->|5.Present result to user| A

      classDef default stroke:#333,stroke-width:2px;
      classDef process stroke:#333,stroke-width:2px;
      classDef input stroke:#333,stroke-width:2px;
      classDef output stroke:#333,stroke-width:2px;

      class A input;
      class B,C process;
      class G output;
  ```

  # Özellikler

  ## Çok Motorlu Derin Araştırma
  Sunucu, basit tek sorgulu aramalardan daha ötede kapsamlı çok motorlu araştırma yetenekleri sunar:

  - **9+ Arama Motoru**: DuckDuckGo, Google, Bing, Brave, Wikipedia, Yahoo, Yandex, Mojeek, Grokipedia
  - **Çok Konulu Araştırma**: Birden fazla ilişkili sorguyu eş zamanlı olarak arayın
  - **Semantik Sıralama**: RAG benzeri benzerlik puanlaması en alakalı sonuçları sıralar
  - **Gizlilik Seçenekleri**: Gizlilik odaklı motorları (DuckDuckGo, Brave) veya kapsamlı olanları (Google) seçin
  - **API Anahtarı Gerekli Değil**: Tüm işlemler yerel olarak gömülü modellerle çalışır

  ### Derin Araştırma Araçları

  1. **`deep_research`** - Kapsamlı çok motorlu araştırma
     - Birden fazla motor arasında eş zamanlı arama yapın
     - Çeşitli bakış açıları gerektiren karmaşık konular için idealdir
     - Özelleştirilebilir motorlar ve sonuç sınırları

  2. **`deep_research_google`** - Google odaklı derin inceleme
     - Google'ın kapsamlı dizininden yararlanın
     - Teknik/bilimsel sorgular için en iyisi

  3. **`deep_research_ddgs`** - Gizlilik öncelikli derin araştırma
     - Özel, geniş araştırma için DuckDuckGo kullanın
     - İzleme olmadan genel konular için harika

  4. **`rag_search_ddgs`** & **`rag_search_google`** - Hızlı tekil aramalar
     - Hızlı cevaplar gerektiğinde hızlı, odaklanmış aramalar

  # Kurulum
  MCP config yolunuzu [buradan](https://modelcontextprotocol.io/quickstart/user) bulun veya MCP istemci ayarlarınızı kontrol edin.

  ### `uvx` Üzerinden Doğrudan Çalıştırma
  Bu en kolay ve hızlı yöntemdir. Bunun için [uv](https://docs.astral.sh/uv/) kurmanız gerekir. <br>
  Bunu MCP sunucu yapılandırmanıza ekleyin:
  ```json
  {
    "mcpServers": {
      "mcp-local-rag":{
        "command": "uvx",
          "args": [
            "--python=3.10",
            "--from",
            "git+https://github.com/nkapila6/mcp-local-rag",
            "mcp-local-rag"
          ]
        }
    }
  }
  ```

  ### Docker Kullanımı (önerilen)
  [Docker](https://www.docker.com) kurulu olduğundan emin olun.<br>
  Bunu MCP sunucu yapılandırmanıza ekleyin:
  ```json
  {
    "mcpServers": {
      "mcp-local-rag": {
        "command": "docker",
        "args": [
          "run",
          "--rm",
          "-i",
          "--init",
          "-e",
          "DOCKER_CONTAINER=true",
          "ghcr.io/nkapila6/mcp-local-rag:v1.0.2"
        ]
      }
    }
  }
  ```

  # Agent Yetenekleri

  Bu depo, Claude'a mcp-local-rag araçlarını akıllı web aramaları ve derin araştırma için etkili bir şekilde kullanmayı öğreten **Agent Yetenekleri** içerir. Yetenekler, Claude'un özel görevlerde performansı artırmak için dinamik olarak yüklediği talimat klasörleridir.

  ### Mevcut Yetenekler

  **`local-rag-search`** - Claude'a en iyi uygulamaları öğretir:
  - **Akıllı araç seçimi**: Hızlı aramalar veya kapsamlı derin araştırma arasında seçim yapma
  - **Çok motorlu araştırma**: Çeşitli bakış açıları için birden fazla arama motoru kullanma
  - **Etkili sorgu formülasyonu**: Daha iyi sonuçlar veren doğal dil sorguları yazma
  - **Parametre ayarlama**: Farklı kullanım durumları için `num_results`, `top_k` ve motor seçimini düzenleme
  - **Gizlilik bilinci arama**: Gerektiğinde kapsamlı aramaları desteklerken gizlilik odaklı motorlara öncelik verme

  ### Derin Araştırma Kullanım Durumları

  Yetenek, birden fazla arama terimi ve motoru kullanarak kapsamlı konu araştırmasını sağlar. Özellikle Google'ın dokümantasyon kapsamından yararlanan teknik derin incelemeler, farklı arama motorları arasında bilgileri karşılaştıran çok perspektifli analiz, DuckDuckGo veya Brave kullanan gizlilik odaklı araştırma ve Wikipedia ile diğer yetkili kaynakları çapraz referans alarak gerçek doğrulamada faydalıdır.

  ### Yetenekleri Kullanma

  **Claude Desktop'ta:**
  1. **Ayarlar** → **Yetenekler**'e gidin
  2. **Yetenek Ekle** → **Klasörden Ekle**'ye tıklayın
  3. `skills/local-rag-search/` seçin

  **Sohbetlerde:**
  Yüklendikten sonra, Claude'dan bilgi aramasını istemek yeterlidir ve otomatik olarak yeteneğin en iyi uygulamalarını uygulayacaktır. Şu gibi sorgular deneyin:
  - "Yakın zamandaki kuantum bilişim gelişmeleri hakkında derin araştırma yap"
  - "Sürdürülebilir enerji çözümleri için birden fazla kaynakta arama yap"
  - "Kubernetes optimizasyonu hakkında kapsamlı teknik dokümantasyon bul"

  [Anthropic Skills Repository](https://github.com/anthropics/skills) adresinde Agent Yetenekleri hakkında daha fazla bilgi edinin.

  Ayrıntılı kullanım talimatları ve yetenek geliştirme yönergeleri için [skills/README.md](skills/README.md) dosyasına bakın.

  # Güvenlik Denetimleri
  MseeP tüm MCP sunucularında güvenlik denetimi yapar; bu MCP sunucusunun güvenlik denetimini [buraya tıklayarak](https://mseep.ai/app/nkapila6-mcp-local-rag) görebilirsiniz.

  <a href='https://mseep.ai/app/nkapila6-mcp-local-rag'></a>

  # MCP İstemcileri
  MCP sunucusu, araç çağrısını destekleyen herhangi bir MCP istemcisiyle çalışmalıdır. Aşağıdaki istemcilerde test edilmiştir.

  - Claude Desktop
  - Cursor
  - Goose
  - Başkaları? Siz deneyin!

  # Claude Desktop Örnekleri
  Bir LLM (Claude gibi) en son web bilgisi gerektiren bir soruya cevap verildiğinde, `mcp-local-rag` tetiklenir.

  Web'den alma/arama/lookup yapması istendiğinde, model sohbette MCP sunucusunu kullanmanızı önerir.

  Örnekte, dün yayınlanan Google'ın en yeni Gemma modelleri hakkında sordum. Bu Claude'un bilmediği yeni bilgilerdir.


  ## Sonuç
  `mcp-local-rag` canlı web araması yapar, bağlam çıkarır ve modele geri gönderir—ona taze bilgi verir:



  ## Bana Bir Kahve Ismarla
  Oluşturduğum yazılım size yardımcı olduysa lütfen bana bir kahve ısmarla, gerçekten takdir ederim! 😄

  [![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/X8X51MK4A1)

  # Katkıda Bulunma
  Fikirleriniz var mı veya bu projeyi iyileştirmek istiyor musunuz? İssue ve pull request'ler hoş karşılanır!

  # Lisans
  Bu proje MIT Lisansı altında lisanslanmıştır.
---

<a href='https://github.com/nkapila6/mcp-local-rag/'></a>

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/nkapila6/mcp-local-rag)
[![Ask DeepWiki](https://deepwiki.com/badge.svg)](https://deepwiki.com/nkapila6/mcp-local-rag)

<!-- omit from toc -->
# mcp-local-rag
"primitive" RAG-like web search model context protocol (MCP) server that runs locally. ✨ no APIs ✨

A RAG-based web search and deep research model context protocol (MCP) server that runs entirely locally. Features multi-engine research across 9+ search backends with semantic similarity ranking, and requires no API keys.

- [Features](#features)
  - [Multi-Engine Deep Research](#multi-engine-deep-research)
- [Installation](#installation)
    - [Run Directly via `uvx`](#run-directly-via-uvx)
    - [Using Docker (recommended)](#using-docker-recommended)
- [Agent Skills](#agent-skills)
- [Security audits](#security-audits)
- [MCP Clients](#mcp-clients)
- [Examples on Claude Desktop](#examples-on-claude-desktop)
  - [Result](#result)
- [Contributing](#contributing)
- [License](#license)


```mermaid
%%{init: {'theme': 'base'}}%%
flowchart TD
    A[User] -->|1.Submits LLM Query| B[Language Model]
    B -->|2.Sends Query| C[mcp-local-rag Tool]
    
    subgraph mcp-local-rag Processing
    C -->|Search DuckDuckGo| D[Fetch 10 search results]
    D -->|Fetch Embeddings| E[Embeddings from Google's MediaPipe Text Embedder]
    E -->|Compute Similarity| F[Rank Entries Against Query]
    F -->|Select top k results| G[Context Extraction from URL]
    end
    
    G -->|Returns Markdown from HTML content| B
    B -->|3.Generated response with context| H[Final LLM Output]
    H -->|5.Present result to user| A

    classDef default stroke:#333,stroke-width:2px;
    classDef process stroke:#333,stroke-width:2px;
    classDef input stroke:#333,stroke-width:2px;
    classDef output stroke:#333,stroke-width:2px;

    class A input;
    class B,C process;
    class G output;
```

# Features

## Multi-Engine Deep Research
The server supports comprehensive multi-engine research capabilities that go beyond simple single-query searches:

- **9+ Search Backends**: DuckDuckGo, Google, Bing, Brave, Wikipedia, Yahoo, Yandex, Mojeek, Grokipedia
- **Multi-Topic Research**: Search multiple related queries simultaneously
- **Semantic Ranking**: RAG-like similarity scoring ranks the most relevant results
- **Privacy Options**: Choose privacy-focused engines (DuckDuckGo, Brave) or comprehensive ones (Google)
- **No API Keys Required**: All processing runs locally with embedded models

### Deep Research Tools

1. **`deep_research`** - Comprehensive multi-engine research
   - Search across multiple engines simultaneously
   - Ideal for complex topics requiring diverse perspectives
   - Customizable backends and result limits

2. **`deep_research_google`** - Google-focused deep dive
   - Leverage Google's comprehensive index
   - Best for technical/scientific queries

3. **`deep_research_ddgs`** - Privacy-first deep research
   - Use DuckDuckGo for private, extensive research
   - Great for general topics without tracking

4. **`rag_search_ddgs`** & **`rag_search_google`** - Quick single searches
   - Fast, focused searches when you need quick answers

# Installation
Locate your MCP config path [here](https://modelcontextprotocol.io/quickstart/user) or check your MCP client settings. 

### Run Directly via `uvx`
This is the easiest and quickest method. You need to install [uv](https://docs.astral.sh/uv/) for this to work. <br>
Add this to your MCP server configuration:
```json
{
  "mcpServers": {
    "mcp-local-rag":{
      "command": "uvx",
        "args": [
          "--python=3.10",
          "--from",
          "git+https://github.com/nkapila6/mcp-local-rag",
          "mcp-local-rag"
        ]
      }
  }
}
```

### Using Docker (recommended)
Ensure you have [Docker](https://www.docker.com) installed.<br>
Add this to your MCP server configuration:
```json
{
  "mcpServers": {
    "mcp-local-rag": {
      "command": "docker",
      "args": [
        "run",
        "--rm",
        "-i",
        "--init",
        "-e",
        "DOCKER_CONTAINER=true",
        "ghcr.io/nkapila6/mcp-local-rag:v1.0.2"
      ]
    }
  }
}
```

# Agent Skills

This repository includes **Agent Skills** that teach Claude how to effectively use the mcp-local-rag tools for intelligent web searches and deep research. Skills are folders of instructions that Claude loads dynamically to improve performance on specialized tasks.

### Available Skills

**`local-rag-search`** - Teaches Claude best practices for:
- **Smart tool selection**: Choosing between quick searches or comprehensive deep research
- **Multi-engine research**: Using multiple search backends for diverse perspectives
- **Effective query formulation**: Writing natural language queries that yield better results
- **Parameter tuning**: Adjusting `num_results`, `top_k`, and backend selection for different use cases
- **Privacy-aware searching**: Defaulting to privacy-focused engines while allowing comprehensive searches when needed

### Deep Research Use Cases

The skill enables comprehensive topic research using multiple search terms and engines. It's particularly useful for technical deep dives that leverage Google's documentation coverage, multi-perspective analysis that compares information across different search engines, privacy-focused research using DuckDuckGo or Brave, and factual verification by cross-referencing Wikipedia and other authoritative sources.

### Using the Skills

**In Claude Desktop:**
1. Go to **Settings** → **Skills**
2. Click **Add Skill** → **Add from folder**
3. Select `skills/local-rag-search/`

**In conversations:**
Once loaded, simply ask Claude to search for information and it will automatically apply the skill's best practices. Try queries like:
- "Do deep research on recent quantum computing developments"
- "Search multiple sources for sustainable energy solutions"
- "Find comprehensive technical documentation about Kubernetes optimization"

Learn more about Agent Skills at the [Anthropic Skills Repository](https://github.com/anthropics/skills).

See the [skills/README.md](skills/README.md) for detailed usage instructions and skill development guidelines.

# Security audits
MseeP does security audits on every MCP server, you can see the security audit of this MCP server by clicking [here](https://mseep.ai/app/nkapila6-mcp-local-rag).

<a href='https://mseep.ai/app/nkapila6-mcp-local-rag'></a>

# MCP Clients
The MCP server should work with any MCP client that supports tool calling. Has been tested on the below clients.

- Claude Desktop
- Cursor
- Goose
- Others? You try!

# Examples on Claude Desktop
When an LLM (like Claude) is asked a question requiring recent web information, it will trigger `mcp-local-rag`.

When asked to fetch/lookup/search the web, the model prompts you to use MCP server for the chat.

In the example, have asked it about Google's latest Gemma models released yesterday. This is new info that Claude is not aware about.


## Result
`mcp-local-rag` performs a live web search, extracts context, and sends it back to the model—giving it fresh knowledge:



## Buy Me A Coffee
If the software I've built has been helpful to you. Please do buy me a coffee, would really appreciate it! 😄

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/X8X51MK4A1)

# Contributing
Have ideas or want to improve this project? Issues and pull requests are welcome!

# License
This project is licensed under the MIT License.
