---
name: "OctagonAI/octagon-mcp-server"
description: "Octagon AI Agents to integrate private and public market data"
category: "Finance & Fintech"
repo: "OctagonAI/octagon-mcp-server"
stars: 128
url: "https://github.com/OctagonAI/octagon-mcp-server"
body_length: 12690
license: "MIT"
language: "TypeScript"
homepage: "https://octagonai.co"
body_tr: |-
  # Octagon: Pazar Verileri için MCP

  [![smithery badge](https://smithery.ai/badge/@OctagonAI/octagon-mcp-server)](https://smithery.ai/server/@OctagonAI/octagon-mcp-server)

  ![Favicon](https://docs.octagonagents.com/logo.svg) Octagon MCP sunucusu, Octagon Market Intelligence API'si ile entegre edilerek yapay zeka destekli finansal araştırma ve analiz sağlar. Kullanıcıların halka açık dosyaları, earnings çağrılarını, finansal metrikleri, özel pazar işlemlerini ve tahmin pazar olaylarını Claude Desktop ve diğer popüler MCP istemcileri içinde analiz etmesine ve içgörü çıkarmasına olanak tanır.

  [![Demo](https://docs.octagonagents.com/financial_model_demo_fast.gif)](https://docs.octagonagents.com/financial_model_demo.mp4)

  ## Araçlar

  ✅ `octagon-agent` geniş pazar zekası analizini yönetir

  - Halka açık pazar içgörüleri (SEC dosyaları, transkriptler, finansal veriler, hisse senedi verileri)
  - Özel pazar içgörüleri (şirketler, finansman turları, anlaşmalar, borç, yatırımcılar)

  ✅ `octagon-deep-research-agent` kapsamlı derinlemesine araştırma için

  - Yatırım araştırması soruları için çoklu kaynak sentezi
  - Güncel, kaynaklar arası tematik analiz için en uygun

  ✅ Tahmin pazar araştırması araçları

  - `octagon-prediction-markets-agent` Kalshi event araştırma raporları için
  - `prediction_markets_history` yapılandırılmış tarihsel pazar verileri alma için

  ## Octagon API Anahtarınızı Alın

  Octagon MCP'yi kullanmak için:

  1. [Octagon](https://app.octagonai.co/signup/?redirectToAfterSignup=https://app.octagonai.co/api-keys) adresinde ücretsiz bir hesap oluşturun
  2. Oturum açtıktan sonra, sol menüden **API Keys** bölümüne gidin
  3. Yeni bir API anahtarı oluşturun
  4. Bu API anahtarını yapılandırmanızda `OCTAGON_API_KEY` değeri olarak kullanın

  ## Ön Koşullar

  Octagon MCP'yi kurmadan veya çalıştırmadan önce, sisteminizde `npx` (Node.js ve npm ile birlikte gelir) kurulu olması gerekir.

  ### Mac (macOS)

  1. **Homebrew'i kurun** (henüz yoksa):
     ```bash
     /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
     ```
  2. **Node.js'yi kurun (npm ve npx dahil):**

     ```bash
     brew install node
     ```

     Bu, Node.js, npm ve npx'in en son sürümünü kuracaktır.

  3. **Kurulumu doğrulayın:**
     ```bash
     node -v
     npm -v
     npx -v
     ```

  ### Windows

  1. **Node.js yükleyicisini indirin:**
     - [https://nodejs.org/](https://nodejs.org/) adresine gidin ve Windows için LTS sürümünü indirin.
  2. **Yükleyiciyi çalıştırın** ve istemleri izleyin. Bu, Node.js, npm ve npx'i kuracaktır.
  3. **Kurulumu doğrulayın:**
     Command Prompt'u açın ve şunu çalıştırın:
     ```cmd
     node -v
     npm -v
     npx -v
     ```

  Üçünün de sürüm numaralarını görürseniz, aşağıdaki kurulum adımlarına devam etmeye hazırsınız.

  ## Kurulum

  ### Claude Desktop'ta Çalıştırma

  Octagon MCP'yi Claude Desktop için yapılandırmak üzere:

  1. Claude Desktop'ı açın
  2. Settings > Developer > Edit Config bölümüne gidin
  3. Aşağıdakini `claude_desktop_config.json` dosyasına ekleyin (`your-octagon-api-key` yerine Octagon API anahtarınızı koyun):

  ```json
  {
    "mcpServers": {
      "octagon-mcp-server": {
        "command": "npx",
        "args": ["-y", "octagon-mcp@latest"],
        "env": {
          "OCTAGON_API_KEY": "YOUR_API_KEY_HERE"
        }
      }
    }
  }
  ```

  4. Değişikliklerin etkili olması için Claude'u yeniden başlatın

  ### Cursor'da Çalıştırma

  Cursor Desktop'ı yapılandırma 🖥️
  Not: Cursor sürümü 0.45.6+ gerekir

  Octagon MCP'yi Cursor'da yapılandırmak için:

  1. Cursor Ayarlarını açın
  2. Features > MCP Servers bölümüne gidin
  3. "+ Add New MCP Server" butonuna tıklayın
  4. Aşağıdakileri girin:
     - Name: "octagon-mcp" (veya tercih ettiğiniz ad)
     - Type: "command"
     - Command: `env OCTAGON_API_KEY=your-octagon-api-key npx -y octagon-mcp`

  > Windows kullanıyorsanız ve sorunla karşılaşırsanız, `cmd /c "set OCTAGON_API_KEY=your-octagon-api-key && npx -y octagon-mcp"` komutunu deneyin

  `your-octagon-api-key` yerine Octagon API anahtarınızı koyun.

  Ekledikten sonra, MCP sunucu listesini yenileyin ve yeni araçları görmek için. Composer Agent, uygun olduğunda Octagon MCP'yi otomatik olarak kullanacak, ancak yatırım araştırması ihtiyaçlarınızı açıklayarak açıkça isteyebilirsiniz. Composer'a Command+L (Mac) ile erişin, gönder düğmesinin yanındaki "Agent"i seçin ve sorgunuzu girin.

  ### npx ile Çalıştırma

  ```bash
  env OCTAGON_API_KEY=your_octagon_api_key npx -y octagon-mcp
  ```

  ### Manuel Kurulum

  ```bash
  npm install -g octagon-mcp
  ```

  ## Dokümantasyon

  Octagon ajanlarını kullanma hakkında kapsamlı dokümantasyon için lütfen resmi dokümantasyonumuzu ziyaret edin:
  [https://docs.octagonagents.com](https://docs.octagonagents.com)

  Dokümantasyon şunları içerir:

  - Detaylı API referansları
  - Agent'a özgü sorgu yönergeleri
  - Örnekler ve kullanım durumları
  - Yatırım araştırması için en iyi uygulamalar

  En son barındırılan MCP istemci kurulum kılavuzu için bkz:

  - [Octagon MCP Server Guide](https://docs.octagonagents.com/guide/mcp-server.html)

  ## Mevcut Araçlar

  MCP sunucusu şu anda aşağıdaki araçları gösterir:

  ### `octagon-agent`

  Halka açık ve özel pazar zekası analizini yönetir.

  **Parametreler**

  - `prompt` (string, required): doğal dil araştırma isteği.
  - `conversation` (string, optional): önceki `octagon-agent` thread'ini devam ettirmek için mevcut Octagon conversation ID'si. İlk turda bunu atlayın.
  - `newConversation` (boolean, optional): `true` ise, etkin session/thread anchor için yeni bir Octagon thread'i başlatır. Claude Desktop gibi üst katman hostlar'ında yeni bir sohbetin ilk turunda önerilir.

  **Thread'li kullanım**

  `octagon-agent`, Octagon conversation thread'ini ileten tek MCP aracıdır. Bu, durum bilgili bir araçtır ve oturum sürekliliğini bekler. MCP, oturum/thread durumunu bu sırayla çözer:

  1. MCP taşıması gerçekten sağladığında, MCP taşıma oturumu kimliği için depolanan conversation
  2. sunucu tarafından yönetilen varsayılan `stdio` oturumu için depolanan conversation
  3. açık `conversation` o çağrı için etkin oturum conversation'ını geçersiz kılabilir

  Bu paket şu anda `stdio` MCP sunucusu olarak çalışır. `stdio` modunda, sunucu çağrılar arasında sürekliliği sağlamak için otomatik olarak bir işlem-yerel oturum oluşturur. Claude Desktop veya Cursor gibi çoğu yerel host, bu nedenle `octagon-agent`'ı temel follow-up davranışı için herhangi bir ekstra thread alanı sağlamadan kullanabilir.

  Üst katman host bir çağrının yeni bir görünür sohbetin ilk turunu olduğunu bildiğinde, `newConversation: true` geçmelidir. Bu, çağrıdan önce etkin MCP oturum ankorunun depolanan Octagon thread'ini açıkça temizler, bu da bir `stdio` hostunun birden fazla görünür sohbet arasında aynı uzun ömürlü MCP işlemini yeniden kullanması durumunda eski sürekliliği önler.

  Bu, aşağıdaki kalıplardan herhangi birini kullanabileceğiniz anlamına gelir:

  1. İlk çağrı: yalnızca `prompt` gönderin
  2. MCP hostunun taşıma oturumu sürekliliğini koruyun veya varsayılan stdio oturumuna güvenin
  3. İkinci çağrı: şunlardan biri:
     - aynı MCP oturumunda yeni `prompt` gönderin veya
     - aynı stdio MCP işlemini kullanmaya devam edin veya
     - açıkça önceki `conversation`'ı geçin

  Taşıma oturumu kimliği, standartlara uygun durum bilgili MCP taşımaları için kurallı sürekliliğin temel öğesidir. Yerel `stdio` kullanımı için, sunucu tarafından yönetilen işlem oturumu varsayılan sürekliliği sağlar.

  Oturum kimliği ve Octagon conversation kimliği farklı kavramlardır:

  - MCP oturum kimliği, araç çağrıları arasında sunucu tarafındaki sürekliliği kontrol eder
  - Octagon `conversation` o oturumdaki etkin Octagon thread'ini kontrol eder

  MCP sonucu yanıtı `content`'te tutarak, orchestrator'lar için yapılandırılmış metadata'yı `structuredContent`'te döndürür:

  ```json
  {
    "model": "octagon-agent",
    "text": "Which stock would you like the latest price for?",
    "conversation": "conv_123",
    "responseId": "resp_123",
    "followUp": {
      "required": true,
      "inputTemplate": "<ticker or company name>",
      "instructions": "Reply with just the missing detail and reuse the conversation value from this response."
    }
  }
  ```

  Açık taşıma örneği:

  ```json
  {
    "prompt": "AAPL",
    "conversation": "conv_123"
  }
  ```

  Yeni görünür sohbet örneği:

  ```json
  {
    "prompt": "Analyze Apple",
    "newConversation": true
  }
  ```

  Açık yenileme örneği:

  ```json
  {
    "prompt": "Start a fresh Octagon thread for this chat",
    "newConversation": true
  }
  ```

  **Durum bilgili araç politikası**

  - `octagon-agent`: durum bilgili, kullanılabilir bir sürekliliğin ankorunu kullanır. `stdio` hostlarında, açık `conversation` sağlamadıkça varsayılan olarak sunucu tarafından yönetilen işlem oturumudur
  - diğer MCP araçları: stateless (durumsuz) ve oturum sürekliliği olmadan çalışabilir

  Örnek:

  ```text
  Compare NVIDIA and AMD on latest quarterly revenue growth, margins, and management commentary.
  ```

  Daha fazla örnek:

  - "Amazon'un Q4 2023'teki gelir ve net gelir rakamları nelerdi?"
  - "Tesla'nın son 3 yıldaki Ar-Ge harcama trendlerini analiz edin."
  - "NVIDIA'nın CEO'su son earnings çağrısında yapay zeka çip talebine ilişkin ne tür rehberlik sağladı?"
  - "Top 5 yarı iletken şirketi için fiyat-kazanç, fiyat-satış ve EV/EBITDA oranlarını karşılaştırın."
  - "Anthropic'in en son finansman tur boyutu, değerlemesi ve kilit yatırımcıları nelerdi?"
  - "Andreessen Horowitz son 12 ayda yapay zeka startuplarına kaç yatırım yaptı?"

  ### `octagon-deep-research-agent`

  Kapsamlı çoklu kaynak derinlemesine araştırma ve sentezi gerçekleştirir.

  **Parametreler**

  - `prompt` (string, required): doğal dil araştırma isteği.

  Örnek:

  ```text
  Research the impact of lower interest rates on late-stage private software valuations over the next 12 months.
  ```

  Daha fazla örnek:

  - "Extract all data fields from zillow.com/san-francisco-ca/"
  - "Research the financial impact of Apple's privacy changes on digital advertising companies' revenue and margins"
  - "Retrieve historical Bitcoin price data from 2023 and analyze the price volatility trends"
  - "Analyze the competitive dynamics in the EV charging infrastructure market"

  ### `octagon-prediction-markets-agent`

  Kalshi tahmin pazar olayları için araştırma raporları üretir.

  **Parametreler**

  - `prompt` (string, required): doğal dil araştırma isteği.
  - `cache` (boolean, optional): agent variant yönlendirmesini kontrol eder.
    - atlanmış: `prediction-markets-agent`
    - `false`: `prediction-markets-agent:refresh`
    - `true`: `prediction-markets-agent:cache`

  Örnek:

  ```text
  Generate a report for the Kalshi market https://kalshi.com/markets/kxbtcy/btc-price-range-eoy/kxbtcy-27jan0100
  ```

  ### `prediction_markets_history`

  İsteğe bağlı pagination ve zaman filtreleriyle bir tahmin pazar olayı sembolü için tarihsel verileri alır.

  **Parametreler**

  - `event_ticker` (string, required)
  - `limit` (number, optional)
  - `cursor` (string, optional)
  - `captured_from` (string, optional)
  - `captured_to` (string, optional)
  - `include_analysis` (boolean, optional; true olduğunda, analiz sütunları talep eder)

  Örnek:

  ```text
  Fetch historical data for the Kalshi event https://kalshi.com/markets/kxbtcy/btc-price-range-eoy/kxbtcy-27jan0100
  ```

  ## Sorun Giderme

  1. **API Anahtarı Sorunları**: Octagon API anahtarınızın ortam veya yapılandırma dosyasında doğru şekilde ayarlandığından emin olun.
  2. **Bağlantı Sorunları**: Octagon API'si ile bağlantının düzgün çalıştığından emin olun.
  3. **Hız Sınırlaması**: Rate limiting hataları yaşarsanız, isteklerinizin sıklığını azaltın.

  ## Lisans

  MIT

  ## Bireysel Uzmanlaştırılmış MCP Sunucuları

  Bu sunucu tüm uzmanlaştırılmış ajanlarımızı birleştiren kapsamlı pazar zekası sağlarken, belirli kullanım durumları için bireysel MCP sunucularımızı da kullanabilirsiniz:

  ### Halka Açık Pazar Verileri Sunucuları

  - **[Octagon SEC Filings MCP](https://github.com/OctagonAI/octagon-sec-filings-mcp)** - SEC dosyaları analizi için özel sunucu
  - **[Octagon Earnings Transcripts MCP](https://github.com/OctagonAI/octagon-earnings-transcripts-mcp)** - Earnings call transkripti analizi için uzmanlaştırılmış
  - **[Octagon Stock Market Data MCP](https://github.com/OctagonAI/octagon-stock-market-data-mcp)** - Hisse senedi pazar verileri erişimine odaklanmış
  - **[Octagon Financial Statements MCP](https://github.com/OctagonAI/octagon-financial-statements-mcp)** - Finansal metrikleri ve oranları analizi
  - **[Octagon 13F Holdings MCP](https://github.com/OctagonAI/octagon-13f-holdings-mcp)** - Kurumsal sahiplik ve Form 13F dosyaları

  ### Özel Pazar Verileri Sunucuları

  - **[Octagon Private Companies MCP](https://github.com/OctagonAI/octagon-private-companies-mcp)** - Özel şirket araştırması ve zekası
  - **[Octagon Investors MCP](https://github.com/OctagonAI/octagon-investors-mcp)** - Yatırımcı profilleri ve yatırım stratejileri
  - **[Octagon Funding Data MCP](https://github.com/OctagonAI/octagon-funding-data-mcp)** - Startup finansman turları ve risk sermayesi verileri

  ### Araştırma Araçları

  - **[Octagon Deep Research MCP](https://github.com/OctagonAI/octagon-deep-research-mcp)** - Kapsamlı araştırma ve web scraping yetenekleri

  ---

  ⭐ Faydalı bulursanız bu repo'ya yıldız verin!
---

# Octagon: MCP for Market Data

[![smithery badge](https://smithery.ai/badge/@OctagonAI/octagon-mcp-server)](https://smithery.ai/server/@OctagonAI/octagon-mcp-server)

![Favicon](https://docs.octagonagents.com/logo.svg) The Octagon MCP server provides specialized AI-powered financial research and analysis by integrating with the Octagon Market Intelligence API, enabling users to analyze and extract insights from public filings, earnings calls, financial metrics, private market transactions, and prediction market events within Claude Desktop and other popular MCP clients.

[![Demo](https://docs.octagonagents.com/financial_model_demo_fast.gif)](https://docs.octagonagents.com/financial_model_demo.mp4)

## Tools

✅ `octagon-agent` orchestrates broad market intelligence analysis

- Public market insights (SEC filings, transcripts, financials, stock data)
- Private market insights (companies, funding rounds, deals, debt, investors)

✅ `octagon-deep-research-agent` for comprehensive deep research

- Multi-source synthesis for investment research questions
- Best for up-to-date, cross-source thematic analysis

✅ Prediction market research tooling

- `octagon-prediction-markets-agent` for Kalshi event research reports
- `prediction_markets_history` for structured historical market data retrieval

## Get Your Octagon API Key

To use Octagon MCP, you need to:

1. Sign up for a free account at [Octagon](https://app.octagonai.co/signup/?redirectToAfterSignup=https://app.octagonai.co/api-keys)
2. After logging in, from left menu, navigate to **API Keys**
3. Generate a new API key
4. Use this API key in your configuration as the `OCTAGON_API_KEY` value

## Prerequisites

Before installing or running Octagon MCP, you need to have `npx` (which comes with Node.js and npm) installed on your system.

### Mac (macOS)

1. **Install Homebrew** (if you don't have it):
   ```bash
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```
2. **Install Node.js (includes npm and npx):**

   ```bash
   brew install node
   ```

   This will install the latest version of Node.js, npm, and npx.

3. **Verify installation:**
   ```bash
   node -v
   npm -v
   npx -v
   ```

### Windows

1. **Download the Node.js installer:**
   - Go to [https://nodejs.org/](https://nodejs.org/) and download the LTS version for Windows.
2. **Run the installer** and follow the prompts. This will install Node.js, npm, and npx.
3. **Verify installation:**
   Open Command Prompt and run:
   ```cmd
   node -v
   npm -v
   npx -v
   ```

If you see version numbers for all three, you are ready to proceed with the installation steps below.

## Installation

### Running on Claude Desktop

To configure Octagon MCP for Claude Desktop:

1. Open Claude Desktop
2. Go to Settings > Developer > Edit Config
3. Add the following to your `claude_desktop_config.json` (Replace `your-octagon-api-key` with your Octagon API key):

```json
{
  "mcpServers": {
    "octagon-mcp-server": {
      "command": "npx",
      "args": ["-y", "octagon-mcp@latest"],
      "env": {
        "OCTAGON_API_KEY": "YOUR_API_KEY_HERE"
      }
    }
  }
}
```

4. Restart Claude for the changes to take effect

### Running on Cursor

Configuring Cursor Desktop 🖥️
Note: Requires Cursor version 0.45.6+

To configure Octagon MCP in Cursor:

1. Open Cursor Settings
2. Go to Features > MCP Servers
3. Click "+ Add New MCP Server"
4. Enter the following:
   - Name: "octagon-mcp" (or your preferred name)
   - Type: "command"
   - Command: `env OCTAGON_API_KEY=your-octagon-api-key npx -y octagon-mcp`

> If you are using Windows and are running into issues, try `cmd /c "set OCTAGON_API_KEY=your-octagon-api-key && npx -y octagon-mcp"`

Replace `your-octagon-api-key` with your Octagon API key.

After adding, refresh the MCP server list to see the new tools. The Composer Agent will automatically use Octagon MCP when appropriate, but you can explicitly request it by describing your investment research needs. Access the Composer via Command+L (Mac), select "Agent" next to the submit button, and enter your query.

### Running with npx

```bash
env OCTAGON_API_KEY=your_octagon_api_key npx -y octagon-mcp
```

### Manual Installation

```bash
npm install -g octagon-mcp
```

## Documentation

For comprehensive documentation on using Octagon agents, please visit our official documentation at:
[https://docs.octagonagents.com](https://docs.octagonagents.com)

The documentation includes:

- Detailed API references
- Agent-specific query guidelines
- Examples and use cases
- Best practices for investment research

For the latest hosted MCP client setup guide, see:

- [Octagon MCP Server Guide](https://docs.octagonagents.com/guide/mcp-server.html)

## Available Tools

The MCP server currently exposes the following tools:

### `octagon-agent`

Orchestrates public and private market intelligence analysis.

**Parameters**

- `prompt` (string, required): natural language research request.
- `conversation` (string, optional): existing Octagon conversation ID to continue a prior `octagon-agent` thread. Omit this on the first turn.
- `newConversation` (boolean, optional): if `true`, starts a fresh Octagon thread for the active session/thread anchor. Recommended for the first turn of a brand new visible chat in top-layer hosts such as Claude Desktop.

**Threaded usage**

`octagon-agent` is the only MCP tool that forwards Octagon conversation threading. It is a stateful tool and expects session continuity. The MCP resolves session/thread state in this order:

1. stored conversation for MCP transport session identity, when the transport actually provides it
2. stored conversation for the server-managed default `stdio` session
3. explicit `conversation` can still override the active session conversation for that call

This package currently runs as a `stdio` MCP server. In `stdio` mode, the server automatically establishes a process-local session for continuity across calls. Most local hosts such as Claude Desktop or Cursor can therefore use `octagon-agent` without supplying any extra threading fields for basic follow-up behavior.

When a top-layer host knows a call is the first turn of a new visible chat, it should pass `newConversation: true`. That explicitly clears any stored Octagon thread for the active MCP session anchor before the call, which prevents stale continuity when a `stdio` host reuses the same long-lived MCP process across multiple visible chats.

This means you can use any of these patterns:

1. First call: send only `prompt`
2. Let the MCP host preserve transport session continuity or rely on the default stdio session
3. Second call: either
   - send the new `prompt` in the same MCP session, or
   - keep using the same stdio MCP process, or
   - explicitly pass the previous `conversation`

Transport session identity is the canonical continuity primitive for standards-compliant stateful MCP transports. For local `stdio` usage, the server-managed process session provides default continuity.

Session identity and Octagon conversation identity are different concepts:

- MCP session identity controls server-side continuity across tool calls
- Octagon `conversation` controls the active Octagon thread inside that session

The MCP result keeps the answer in `content`, and also returns structured metadata for orchestrators in `structuredContent`:

```json
{
  "model": "octagon-agent",
  "text": "Which stock would you like the latest price for?",
  "conversation": "conv_123",
  "responseId": "resp_123",
  "followUp": {
    "required": true,
    "inputTemplate": "<ticker or company name>",
    "instructions": "Reply with just the missing detail and reuse the conversation value from this response."
  }
}
```

Explicit carry-forward example:

```json
{
  "prompt": "AAPL",
  "conversation": "conv_123"
}
```

New visible chat example:

```json
{
  "prompt": "Analyze Apple",
  "newConversation": true
}
```

Explicit refresh example:

```json
{
  "prompt": "Start a fresh Octagon thread for this chat",
  "newConversation": true
}
```

**Stateful tool policy**

- `octagon-agent`: stateful, uses a usable continuity anchor. In `stdio` hosts, that defaults to the server-managed process session unless you provide explicit `conversation`
- other MCP tools: stateless and may run without session continuity

Example:

```text
Compare NVIDIA and AMD on latest quarterly revenue growth, margins, and management commentary.
```

More examples:

- "What were Amazon's revenue and net income figures in Q4 2023?"
- "Analyze Tesla's R&D spending trends over the last 3 years."
- "What guidance did NVIDIA's CEO provide regarding AI chip demand in their latest earnings call?"
- "Compare the price-to-earnings, price-to-sales, and EV/EBITDA ratios for the top 5 semiconductor companies."
- "What was Anthropic's latest funding round size, valuation, and key investors?"
- "How many investments did Andreessen Horowitz make in AI startups in the last 12 months?"

### `octagon-deep-research-agent`

Performs comprehensive multi-source deep research and synthesis.

**Parameters**

- `prompt` (string, required): natural language research request.

Example:

```text
Research the impact of lower interest rates on late-stage private software valuations over the next 12 months.
```

More examples:

- "Extract all data fields from zillow.com/san-francisco-ca/"
- "Research the financial impact of Apple's privacy changes on digital advertising companies' revenue and margins"
- "Retrieve historical Bitcoin price data from 2023 and analyze the price volatility trends"
- "Analyze the competitive dynamics in the EV charging infrastructure market"

### `octagon-prediction-markets-agent`

Generates research reports for Kalshi prediction market events.

**Parameters**

- `prompt` (string, required): natural language research request.
- `cache` (boolean, optional): controls agent variant routing.
  - omitted: `prediction-markets-agent`
  - `false`: `prediction-markets-agent:refresh`
  - `true`: `prediction-markets-agent:cache`

Example:

```text
Generate a report for the Kalshi market https://kalshi.com/markets/kxbtcy/btc-price-range-eoy/kxbtcy-27jan0100
```

### `prediction_markets_history`

Fetches historical data for a prediction market event ticker with optional pagination and time filters.

**Parameters**

- `event_ticker` (string, required)
- `limit` (number, optional)
- `cursor` (string, optional)
- `captured_from` (string, optional)
- `captured_to` (string, optional)
- `include_analysis` (boolean, optional; when true, requests analysis columns)

Example:

```text
Fetch historical data for the Kalshi event https://kalshi.com/markets/kxbtcy/btc-price-range-eoy/kxbtcy-27jan0100
```

## Troubleshooting

1. **API Key Issues**: Ensure your Octagon API key is correctly set in the environment or config file.
2. **Connection Issues**: Make sure the connectivity to the Octagon API is working properly.
3. **Rate Limiting**: If you encounter rate limiting errors, reduce the frequency of your requests.

## License

MIT

## Individual Specialized MCP Servers

While this server provides comprehensive market intelligence combining all our specialized agents, you can also use our individual MCP servers for specific use cases:

### Public Market Data Servers

- **[Octagon SEC Filings MCP](https://github.com/OctagonAI/octagon-sec-filings-mcp)** - Dedicated server for SEC filings analysis
- **[Octagon Earnings Transcripts MCP](https://github.com/OctagonAI/octagon-earnings-transcripts-mcp)** - Specialized for earnings call transcript analysis
- **[Octagon Stock Market Data MCP](https://github.com/OctagonAI/octagon-stock-market-data-mcp)** - Focused on stock market data access
- **[Octagon Financial Statements MCP](https://github.com/OctagonAI/octagon-financial-statements-mcp)** - Financial metrics and ratios analysis
- **[Octagon 13F Holdings MCP](https://github.com/OctagonAI/octagon-13f-holdings-mcp)** - Institutional ownership and Form 13F filings

### Private Market Data Servers

- **[Octagon Private Companies MCP](https://github.com/OctagonAI/octagon-private-companies-mcp)** - Private company research and intelligence
- **[Octagon Investors MCP](https://github.com/OctagonAI/octagon-investors-mcp)** - Investor profiles and investment strategies
- **[Octagon Funding Data MCP](https://github.com/OctagonAI/octagon-funding-data-mcp)** - Startup funding rounds and venture capital data

### Research Tools

- **[Octagon Deep Research MCP](https://github.com/OctagonAI/octagon-deep-research-mcp)** - Comprehensive research and web scraping capabilities

---

⭐ Star this repo if you find it helpful!
