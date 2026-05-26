---
name: "YuChenSSR/multi-ai-advisor-mcp"
description: "A Model Context Protocol (MCP) server that queries multiple Ollama models and combines their responses, providing diverse AI perspectives on a single question."
description_tr: "Birden fazla Ollama modelini sorgulayan ve yanıtlarını birleştiren, tek bir soruya çeşitli yapay zeka perspektifleri sunayan bir Model Context Protocol (MCP) sunucusu."
category: "Developer Tools"
repo: "YuChenSSR/multi-ai-advisor-mcp"
stars: 79
url: "https://github.com/YuChenSSR/multi-ai-advisor-mcp"
body_length: 6031
license: "MIT"
language: "TypeScript"
body_tr: |-
  # Multi-Model Advisor
  ## (锵锵四人行)

  [![smithery badge](https://smithery.ai/badge/@YuChenSSR/multi-ai-advisor-mcp)](https://smithery.ai/server/@YuChenSSR/multi-ai-advisor-mcp)

  Birden fazla Ollama modelini sorgulayan ve yanıtlarını birleştiren bir Model Context Protocol (MCP) sunucusu. Tek bir soruya yönelik çeşitli AI perspektifleri sunar. Bu, Claude'un birden fazla görüşü kendi bakış açısıyla birleştirerek daha kapsamlı cevaplar sağlamasına olanak tanıyan bir "danışman kurulu" yaklaşımı oluşturur.

  <a href="https://glama.ai/mcp/servers/@YuChenSSR/multi-ai-advisor-mcp">
    
  </a>

  ```mermaid
  graph TD
      A[Start] --> B[Worker Local AI 1 Opinion]
      A --> C[Worker Local AI 2 Opinion]
      A --> D[Worker Local AI 3 Opinion]
      B --> E[Manager AI]
      C --> E
      D --> E
      E --> F[Decision Made]
  ```

  ## Özellikler

  - Birden fazla Ollama modelini tek bir soruyla sorgulama
  - Her modele farklı roller/kişilikler atama
  - Sisteminizde mevcut olan tüm Ollama modellerini görüntüleme
  - Her model için sistem talimatlarını özelleştirme
  - Ortam değişkenleri aracılığıyla yapılandırma
  - Claude for Desktop ile sorunsuz entegrasyon

  ## Ön Koşullar

  - Node.js 16.x veya daha yüksek
  - Ollama yüklü ve çalışır durumda (bkz. [Ollama kurulumu](https://github.com/ollama/ollama#installation))
  - Claude for Desktop (tam danışman deneyimi için)

  ## Kurulum

  ### Smithery Aracılığıyla Kurulum

  Multi-ai-advisor-mcp'yi Claude Desktop'a [Smithery](https://smithery.ai/server/@YuChenSSR/multi-ai-advisor-mcp) aracılığıyla otomatik olarak kurmak için:

  ```bash
  npx -y @smithery/cli install @YuChenSSR/multi-ai-advisor-mcp --client claude
  ```

  ### Manuel Kurulum
  1. Bu depoyu klonlayın:
     ```bash
     git clone https://github.com/YuChenSSR/multi-ai-advisor-mcp.git 
     cd multi-ai-advisor-mcp
     ```

  2. Bağımlılıkları yükleyin:
     ```bash
     npm install
     ```

  3. Projeyi derleyin:
     ```bash
     npm run build
     ```

  4. Gerekli Ollama modellerini yükleyin:
     ```bash
     ollama pull gemma3:1b
     ollama pull llama3.2:1b
     ollama pull deepseek-r1:1.5b
     ```

  ## Yapılandırma

  Proje kökünde istediğiniz yapılandırmayla bir `.env` dosyası oluşturun:

  ```
  # Server configuration
  SERVER_NAME=multi-model-advisor
  SERVER_VERSION=1.0.0
  DEBUG=true

  # Ollama configuration
  OLLAMA_API_URL=http://localhost:11434
  DEFAULT_MODELS=gemma3:1b,llama3.2:1b,deepseek-r1:1.5b

  # System prompts for each model
  GEMMA_SYSTEM_PROMPT=You are a creative and innovative AI assistant. Think outside the box and offer novel perspectives.
  LLAMA_SYSTEM_PROMPT=You are a supportive and empathetic AI assistant focused on human well-being. Provide considerate and balanced advice.
  DEEPSEEK_SYSTEM_PROMPT=You are a logical and analytical AI assistant. Think step-by-step and explain your reasoning clearly.
  ```

  ## Claude for Desktop'a Bağlanma

  1. Claude for Desktop yapılandırma dosyanızın konumunu bulun:
     - MacOS: `~/Library/Application Support/Claude/claude_desktop_config.json`
     - Windows: `%APPDATA%\Claude\claude_desktop_config.json`

  2. Multi-Model Advisor MCP sunucusunu eklemek için dosyayı düzenleyin:

  ```json
  {
    "mcpServers": {
      "multi-model-advisor": {
        "command": "node",
        "args": ["/absolute/path/to/multi-ai-advisor-mcp/build/index.js"]
      }
    }
  }
  ```

  3. `/absolute/path/to/` yerine proje dizininizin gerçek yolunu yazın

  4. Claude for Desktop'ı yeniden başlatın

  ## Kullanım

  Claude for Desktop'a bağlandığınızda, Multi-Model Advisor'ı çeşitli şekillerde kullanabilirsiniz:

  ### Mevcut Modelleri Listele

  Sisteminizde mevcut olan tüm modelleri görebilirsiniz:

  ```
  Show me which Ollama models are available on my system
  ```

  Bu, yüklü tüm Ollama modellerini görüntüleyecek ve hangilerinin varsayılan olarak yapılandırıldığını gösterecektir.

  ### Temel Kullanım

  Claude'a multi-model advisor'ı kullanmasını söyleyin:

  ```
  what are the most important skills for success in today's job market, 
  you can use gemma3:1b, llama3.2:1b, deepseek-r1:1.5b to help you 
  ```

  Claude tüm varsayılan modelleri sorgulayacak ve farklı perspektiflerine dayalı birleştirilmiş bir yanıt sağlayacaktır.

  ![example](https://raw.githubusercontent.com/YuChenSSR/pics/master/imgs/2025-03-24/Q53YEwdTaeTuL6a7.png)



  ## Nasıl Çalışır

  1. MCP sunucusu iki araç ortaya koymaktadır:
     - `list-available-models`: Sisteminizde bulunan tüm Ollama modellerini gösterir
     - `query-models`: Birden fazla modeli bir soruyla sorgular

  2. Claude'a multi-model advisor'ı referans alan bir soru sorduğunuzda:
     - Claude `query-models` aracını kullanmaya karar verir
     - Sunucu sorunuzu birden fazla Ollama modeline gönderir
     - Her model kendi perspektifini yanıtlar
     - Claude tüm yanıtları alır ve kapsamlı bir cevap oluşturur

  3. Her modele farklı bir "kişilik" veya rol atanabilir, çeşitli perspektifleri teşvik eder.

  ## Sorun Giderme

  ### Ollama Bağlantı Sorunları

  Sunucu Ollama'ya bağlanamıyorsa:
  - Ollama'nın çalıştığından emin olun (`ollama serve`)
  - .env dosyanızdaki OLLAMA_API_URL'nin doğru olduğunu kontrol edin
  - Ollama'nın yanıt verip vermediğini doğrulamak için tarayıcıda http://localhost:11434 adresine erişmeyi deneyin

  ### Model Bulunamadı

  Bir model kullanılamaz olarak bildiriliyorsa:
  - `ollama pull <model-name>` kullanarak modeli çektiğinizden emin olun
  - `ollama list` kullanarak tam model adını doğrulayın
  - Mevcut tüm modelleri görmek için `list-available-models` aracını kullanın

  ### Claude MCP Araçlarını Göstermiyor

  Araçlar Claude'da görünmüyorsa:
  - Yapılandırmayı güncelledikten sonra Claude'u yeniden başlattığınızdan emin olun
  - claude_desktop_config.json içindeki mutlak yolun doğru olduğunu kontrol edin
  - Hata mesajları için Claude'un günlüklerine bakın

  ### RAM yeterli değil

  Bazı manager AI modelleri daha büyük modelleri seçmiş olabilir, ancak bunları çalıştıracak yeterli bellek yoktur. Daha küçük bir model belirlemeyi (bkz. [Temel Kullanım](#temel-kullanım)) veya belleği yükseltmeyi deneyebilirsiniz.

  ## Lisans

  MIT Lisansı

  Daha fazla ayrıntı için lütfen [bu proje deposundaki](https://github.com/YuChenSSR/multi-ai-advisor-mcp) LICENSE dosyasına bakın.

  ## Katkıda Bulunma

  Katkılar hoş karşılanır! Lütfen bir Pull Request göndermekten çekinmeyin.
---

# Multi-Model Advisor
## (锵锵四人行)

[![smithery badge](https://smithery.ai/badge/@YuChenSSR/multi-ai-advisor-mcp)](https://smithery.ai/server/@YuChenSSR/multi-ai-advisor-mcp)

A Model Context Protocol (MCP) server that queries multiple Ollama models and combines their responses, providing diverse AI perspectives on a single question. This creates a "council of advisors" approach where Claude can synthesize multiple viewpoints alongside its own to provide more comprehensive answers.

<a href="https://glama.ai/mcp/servers/@YuChenSSR/multi-ai-advisor-mcp">
  
</a>

```mermaid
graph TD
    A[Start] --> B[Worker Local AI 1 Opinion]
    A --> C[Worker Local AI 2 Opinion]
    A --> D[Worker Local AI 3 Opinion]
    B --> E[Manager AI]
    C --> E
    D --> E
    E --> F[Decision Made]
```

## Features

- Query multiple Ollama models with a single question
- Assign different roles/personas to each model
- View all available Ollama models on your system
- Customize system prompts for each model
- Configure via environment variables
- Integrate seamlessly with Claude for Desktop

## Prerequisites

- Node.js 16.x or higher
- Ollama installed and running (see [Ollama installation](https://github.com/ollama/ollama#installation))
- Claude for Desktop (for the complete advisory experience)

## Installation

### Installing via Smithery

To install multi-ai-advisor-mcp for Claude Desktop automatically via [Smithery](https://smithery.ai/server/@YuChenSSR/multi-ai-advisor-mcp):

```bash
npx -y @smithery/cli install @YuChenSSR/multi-ai-advisor-mcp --client claude
```

### Manual Installation
1. Clone this repository:
   ```bash
   git clone https://github.com/YuChenSSR/multi-ai-advisor-mcp.git 
   cd multi-ai-advisor-mcp
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Build the project:
   ```bash
   npm run build
   ```

4. Install required Ollama models:
   ```bash
   ollama pull gemma3:1b
   ollama pull llama3.2:1b
   ollama pull deepseek-r1:1.5b
   ```

## Configuration

Create a `.env` file in the project root with your desired configuration:

```
# Server configuration
SERVER_NAME=multi-model-advisor
SERVER_VERSION=1.0.0
DEBUG=true

# Ollama configuration
OLLAMA_API_URL=http://localhost:11434
DEFAULT_MODELS=gemma3:1b,llama3.2:1b,deepseek-r1:1.5b

# System prompts for each model
GEMMA_SYSTEM_PROMPT=You are a creative and innovative AI assistant. Think outside the box and offer novel perspectives.
LLAMA_SYSTEM_PROMPT=You are a supportive and empathetic AI assistant focused on human well-being. Provide considerate and balanced advice.
DEEPSEEK_SYSTEM_PROMPT=You are a logical and analytical AI assistant. Think step-by-step and explain your reasoning clearly.
```

## Connect to Claude for Desktop

1. Locate your Claude for Desktop configuration file:
   - MacOS: `~/Library/Application Support/Claude/claude_desktop_config.json`
   - Windows: `%APPDATA%\Claude\claude_desktop_config.json`

2. Edit the file to add the Multi-Model Advisor MCP server:

```json
{
  "mcpServers": {
    "multi-model-advisor": {
      "command": "node",
      "args": ["/absolute/path/to/multi-ai-advisor-mcp/build/index.js"]
    }
  }
}
```

3. Replace `/absolute/path/to/` with the actual path to your project directory

4. Restart Claude for Desktop

## Usage

Once connected to Claude for Desktop, you can use the Multi-Model Advisor in several ways:

### List Available Models

You can see all available models on your system:

```
Show me which Ollama models are available on my system
```

This will display all installed Ollama models and indicate which ones are configured as defaults.

### Basic Usage

Simply ask Claude to use the multi-model advisor:

```
what are the most important skills for success in today's job market, 
you can use gemma3:1b, llama3.2:1b, deepseek-r1:1.5b to help you 
```

Claude will query all default models and provide a synthesized response based on their different perspectives.

![example](https://raw.githubusercontent.com/YuChenSSR/pics/master/imgs/2025-03-24/Q53YEwdTaeTuL6a7.png)



## How It Works

1. The MCP server exposes two tools:
   - `list-available-models`: Shows all Ollama models on your system
   - `query-models`: Queries multiple models with a question

2. When you ask Claude a question referring to the multi-model advisor:
   - Claude decides to use the `query-models` tool
   - The server sends your question to multiple Ollama models
   - Each model responds with its perspective
   - Claude receives all responses and synthesizes a comprehensive answer

3. Each model can have a different "persona" or role assigned, encouraging diverse perspectives.

## Troubleshooting

### Ollama Connection Issues

If the server can't connect to Ollama:
- Ensure Ollama is running (`ollama serve`)
- Check that the OLLAMA_API_URL is correct in your .env file
- Try accessing http://localhost:11434 in your browser to verify Ollama is responding

### Model Not Found

If a model is reported as unavailable:
- Check that you've pulled the model using `ollama pull <model-name>`
- Verify the exact model name using `ollama list`
- Use the `list-available-models` tool to see all available models

### Claude Not Showing MCP Tools

If the tools don't appear in Claude:
- Ensure you've restarted Claude after updating the configuration
- Check the absolute path in claude_desktop_config.json is correct
- Look at Claude's logs for error messages

### RAM is not enough

Some managers' AI models may have chosen larger models, but there is not enough memory to run them. You can try specifying a smaller model (see the [Basic Usage](#basic-usage)) or upgrading the memory.

## License

MIT License

For more details, please see the LICENSE file in [this project repository](https://github.com/YuChenSSR/multi-ai-advisor-mcp)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
