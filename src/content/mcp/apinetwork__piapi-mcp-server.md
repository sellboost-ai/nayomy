---
name: "apinetwork/piapi-mcp-server"
description: "PiAPI MCP server makes users able to generate media content with Midjourney/Flux/Kling/Hunyuan/Udio/Trellis directly from Claude or any other MCP-compatible apps."
description_tr: "PiAPI MCP server, Claude veya diğer MCP uyumlu uygulamalardan doğrudan Midjourney/Flux/Kling/Hunyuan/Udio/Trellis ile medya içeriği oluşturmanızı sağlar."
category: "Other Tools and Integrations"
repo: "apinetwork/piapi-mcp-server"
stars: 70
url: "https://github.com/apinetwork/piapi-mcp-server"
body_length: 6460
license: "MIT"
language: "TypeScript"
body_tr: |-
  # piapi-mcp-server

  [![Website](https://img.shields.io/badge/Website-piapi.ai-blue?style=flat-square&logo=internet-explorer)](https://piapi.ai)
  [![Documentation](https://img.shields.io/badge/Documentation-docs-green?style=flat-square&logo=bookstack)](https://piapi.ai/docs)
  [![Discord](https://img.shields.io/badge/Discord-Join%20chat-7289da?style=flat-square&logo=discord)](https://discord.gg/qRRvcGa7Wb)

  [![smithery badge](https://smithery.ai/badge/piapi-mcp-server)](https://smithery.ai/server/piapi-mcp-server)

  PiAPI'nin API'si ile entegre olan Model Context Protocol (MCP) sunucusunun bir TypeScript uygulaması. PiAPI, kullanıcıların Midjourney/Flux/Kling/LumaLabs/Udio/Chrip/Trellis ile medya içeriği oluşturmasını Claude veya diğer MCP-uyumlu uygulamalardan doğrudan sağlar.

  <a href="https://glama.ai/mcp/servers/ywvke8xruo"></a>

  ## Özellikler (daha fazlası yakında)

  Not: Video oluşturma gibi zaman alan araçlar Claude'un zaman aşımı sınırlamaları nedeniyle tamamlanamayabilir

  - [x] Temel Image toolkit
  - [x] Temel Video toolkit
  - [x] Flux metin/görüntü istemi ile görüntü oluşturma
  - [x] Hunyuan metin/görüntü istemi ile video oluşturma
  - [x] Skyreels görüntü istemi ile video oluşturma
  - [x] Wan metin/görüntü istemi ile video oluşturma
  - [x] MMAudio video ile müzik oluşturma
  - [x] TTS sıfır çekimli ses oluşturma
  - [ ] Midjourney görüntü oluşturma
    - [x] imagine
    - [ ] diğerleri
  - [x] Kling Video ve Efekt oluşturma
  - [x] Luma Dream Machine video oluşturma
  - [x] Suno müzik oluşturma
  - [ ] Suno şarkı sözü oluşturma
  - [ ] Udio müzik ve şarkı sözü oluşturma
  - [x] Trellis görüntüden 3D model oluşturma
  - [ ] LLM'ler içinde iş akışı planlama

  ## Claude Desktop ile Çalışma Örneği

  ![image](https://raw.githubusercontent.com/apinetwork/piapi-mcp-server/HEAD/assets/Claude-desktop.png)

  ## Ön Koşullar

  - Node.js 16.x veya daha yüksek
  - npm veya yarn
  - Bir PiAPI API anahtarı ([piapi.ai](https://piapi.ai/workspace/key) adresinden alabilirsiniz)

  ## Kurulum

  ### Smithery Aracılığıyla Kurulum

  PiAPI MCP Server'ı Claude Desktop için [Smithery](https://smithery.ai/server/piapi-mcp-server) aracılığıyla otomatik olarak kurmak için:

  ```bash
  npx -y @smithery/cli install piapi-mcp-server --client claude
  ```

  ### Manuel Kurulum
  1. Repository'i klonlayın:

  ```bash
  git clone https://github.com/apinetwork/piapi-mcp-server
  cd piapi-mcp-server
  ```

  2. Bağımlılıkları yükleyin:

  ```bash
  npm install
  ```

  3. Projeyi derleyin:

  ```bash
  npm run build
  ```

  Derleme işleminden sonra bir `dist/index.js` dosyası oluşturulacaktır. Daha sonra bu dosyayı Claude Desktop ve diğer uygulamalarla yapılandırabilirsiniz. Ayrıntılı yapılandırma talimatları için lütfen Kullanım bölümüne bakınız.

  4. (İsteğe bağlı) MCP Inspector ile sunucuyu test edin:

  İlk olarak, proje kök dizininde API anahtarınızla bir `.env` dosyası oluşturun:

  ```bash
  PIAPI_API_KEY=your_api_key_here
  ```

  Ardından MCP Inspector'ı başlatmak için aşağıdaki komutu çalıştırın:

  ```bash
  npm run inspect
  ```

  Komutu çalıştırdıktan sonra, MCP Inspector http://localhost:5173 adresinde kullanılabilir hale gelir (varsayılan port: 5173). Bu URL'yi tarayıcınızda açarak test etmeye başlayabilirsiniz. Inspector işlemleri için varsayılan zaman aşımı 10000ms (10 saniye) olup, bu görüntü oluşturma görevleri için yeterli olmayabilir. Görüntü oluşturma veya diğer zaman alan işlemleri test ederken zaman aşımını artırmanız önerilir. URL'ye bir timeout parametresi ekleyerek zaman aşımını ayarlayabilirsiniz, örneğin: http://localhost:5173?timeout=60000 (zaman aşımını 60 saniyeye ayarlar)

  MCP Inspector, MCP sunucu uygulamanızı test etmenize ve hata ayıklamanıza yardımcı olan güçlü bir geliştirme aracıdır. Ana özellikler şunlardır:

  - **Etkileşimli Test Etme**: Sunucunuzun işlevlerini web arayüzü aracılığıyla doğrudan test edin
  - **Gerçek Zamanlı Geri Bildirim**: İşlev çağrılarınızın ve oluşan hataların anında sonuçlarını görün
  - **İstek/Yanıt İncelemesi**: İstekler ve yanıtlar hakkında ayrıntılı bilgileri görüntüleyin
  - **İşlev Belgeleri**: Kullanılabilir işlevleri ve parametrelerini inceleyin
  - **Özel Parametreler**: Özel zaman aşımı değerleri ve diğer yapılandırma seçeneklerini ayarlayın
  - **Geçmiş İzleme**: Önceki işlev çağrılarınızı ve sonuçlarını takip edin

  MCP Inspector'ı kullanma ve özellikleri hakkında ayrıntılı bilgiler için [resmi MCP belgelerine](https://modelcontextprotocol.io/docs/tools/inspector) ziyaret edin.

  ## Kullanım

  ### Claude Desktop'a Bağlanma

  Bunu Claude Desktop yapılandırma dosyanıza ekleyin (macOS'ta `~/Library/Application Support/Claude/claude_desktop_config.json` veya Windows'ta `%APPDATA%\Claude\claude_desktop_config.json`):

  ```json
  {
    "mcpServers": {
      "piapi": {
        "command": "node",
        "args": ["/absolute/path/to/piapi-mcp-server/dist/index.js"],
        "env": {
          "PIAPI_API_KEY": "your_api_key_here"
        }
      }
    }
  }
  ```

  Yapılandırma dosyanızı güncelledikten sonra, Claude for Desktop'u yeniden başlatmanız gerekir. Yeniden başlatıldıktan sonra, giriş kutusunun sağ alt köşesinde bir çekiç simgesi görmeniz gerekir.
  Daha ayrıntılı bilgiler için [resmi MCP belgelerine](https://modelcontextprotocol.io/quickstart/user) ziyaret edin.

  ### Cursor'a Bağlanma

  Not: Aşağıdaki kılavuz Cursor 0.47.5 sürümüne dayanmaktadır. Özellikler ve davranışlar farklı sürümlerde değişebilir.

  MCP sunucusunu yapılandırmak için:

  1. Şu konuma gidin: File > Preferences > Cursor Settings veya `Ctrl+Shift+J` kısayol tuşunu kullanın
  2. Sol panelde "MCP" sekmesini seçin
  3. Sağ üst köşedeki "Add new global MCP server" düğmesine tıklayın
  4. Açılan mcp.json dosyasına yapılandırmanızı ekleyin

  ```json
  {
    "mcpServers": {
      "piapi": {
        "command": "node",
        "args": ["/absolute/path/to/piapi-mcp-server/dist/index.js"],
        "env": {
          "PIAPI_API_KEY": "your_api_key_here"
        }
      }
    }
  }
  ```

  5. Yapılandırmadan sonra, MCP Servers sayfasında bir "piapi" girişi göreceksiniz
  6. Girişin yanındaki Refresh düğmesine tıklayın veya piapi sunucusuna bağlanmak için Cursor'u yeniden başlatın

  piapi görüntü oluşturmayı test etmek için:

  1. Cursor Chat'te "Agent mode" seçeneğini açın ve seçin veya `Ctrl+I` kısayol tuşunu kullanın
  2. Test istemini girin, örneğin: "bir köpeğin görüntüsünü oluştur"
  3. Görüntü, istemininize göre piapi sunucusu kullanılarak oluşturulacaktır

  piapi sunucusunu devre dışı bırakmak için:

  1. Cursor Ayarları'nda MCP Servers sayfasına gidin
  2. Sunucu listesinde "piapi" girişini bulun
  3. "Enabled" geçiş düğmesine tıklayarak "Disabled" olarak değiştirin

  ## Geliştirme

  ### Proje Yapısı

  ```
  piapi-mcp-server/
  ├── assets/
  ├── src/
  │   ├── index.ts        # Ana sunucu giriş noktası
  ├── package.json
  ├── tsconfig.json
  └── .env.example
  ```

  ## Lisans

  MIT
---

# piapi-mcp-server

[![Website](https://img.shields.io/badge/Website-piapi.ai-blue?style=flat-square&logo=internet-explorer)](https://piapi.ai)
[![Documentation](https://img.shields.io/badge/Documentation-docs-green?style=flat-square&logo=bookstack)](https://piapi.ai/docs)
[![Discord](https://img.shields.io/badge/Discord-Join%20chat-7289da?style=flat-square&logo=discord)](https://discord.gg/qRRvcGa7Wb)

[![smithery badge](https://smithery.ai/badge/piapi-mcp-server)](https://smithery.ai/server/piapi-mcp-server)

A TypeScript implementation of a Model Context Protocol (MCP) server that integrates with PiAPI's API. PiAPI makes user able to generate media content with Midjourney/Flux/Kling/LumaLabs/Udio/Chrip/Trellis directly from Claude or any other MCP-compatible apps.

<a href="https://glama.ai/mcp/servers/ywvke8xruo"></a>

## Features (more coming soon)

Note: Time-consuming tools like video generation may not complete due to Claude's timeout limitations

- [x] Base Image toolkit
- [x] Base Video toolkit
- [x] Flux Image generation from text/image prompt
- [x] Hunyuan Video generation from text/image prompt
- [x] Skyreels Video generation from image prompt
- [x] Wan Video generation from text/image prompt
- [x] MMAudio Music generation from video
- [x] TTS Zero-Shot voice generation
- [ ] Midjourney Image generation
  - [x] imagine
  - [ ] other
- [x] Kling Video and Effects generation
- [x] Luma Dream Machine video generation
- [x] Suno Music generation
- [ ] Suno Lyrics generation
- [ ] Udio Music and Lyrics generation
- [x] Trellis 3D model generation from image
- [ ] Workflow planning inside LLMs

## Working with Claude Desktop Example

![image](https://raw.githubusercontent.com/apinetwork/piapi-mcp-server/HEAD/assets/Claude-desktop.png)

## Prerequisites

- Node.js 16.x or higher
- npm or yarn
- A PiAPI API key (get one at [piapi.ai](https://piapi.ai/workspace/key))

## Installation

### Installing via Smithery

To install PiAPI MCP Server for Claude Desktop automatically via [Smithery](https://smithery.ai/server/piapi-mcp-server):

```bash
npx -y @smithery/cli install piapi-mcp-server --client claude
```

### Manual Installation
1. Clone the repository:

```bash
git clone https://github.com/apinetwork/piapi-mcp-server
cd piapi-mcp-server
```

2. Install dependencies:

```bash
npm install
```

3. Build the project:

```bash
npm run build
```

After building, a `dist/index.js` file will be generated. You can then configure this file with Claude Desktop and other applications. For detailed configuration instructions, please refer to the Usage section.

4. (Optional) Test server with MCP Inspector:

First, create a `.env` file in the project root directory with your API key:

```bash
PIAPI_API_KEY=your_api_key_here
```

Then run the following command to start the MCP Inspector:

```bash
npm run inspect
```

After running the command, MCP Inspector will be available at http://localhost:5173 (default port: 5173). Open this URL in your browser to start testing. The default timeout for inspector operations is 10000ms (10 seconds), which may not be sufficient for image generation tasks. It's recommended to increase the timeout when testing image generation or other time-consuming operations. You can adjust the timeout by adding a timeout parameter to the URL, for example: http://localhost:5173?timeout=60000 (sets timeout to 60 seconds)

The MCP Inspector is a powerful development tool that helps you test and debug your MCP server implementation. Key features include:

- **Interactive Testing**: Test your server's functions directly through a web interface
- **Real-time Feedback**: See immediate results of your function calls and any errors that occur
- **Request/Response Inspection**: View detailed information about requests and responses
- **Function Documentation**: Browse available functions and their parameters
- **Custom Parameters**: Set custom timeout values and other configuration options
- **History Tracking**: Keep track of your previous function calls and their results

For detailed information about using the MCP Inspector and its features, visit the [official MCP documentation](https://modelcontextprotocol.io/docs/tools/inspector).

## Usage

### Connecting to Claude Desktop

Add this to your Claude Desktop configuration file (`~/Library/Application Support/Claude/claude_desktop_config.json` on macOS or `%APPDATA%\Claude\claude_desktop_config.json` on Windows):

```json
{
  "mcpServers": {
    "piapi": {
      "command": "node",
      "args": ["/absolute/path/to/piapi-mcp-server/dist/index.js"],
      "env": {
        "PIAPI_API_KEY": "your_api_key_here"
      }
    }
  }
}
```

After updating your configuration file, you need to restart Claude for Desktop. Upon restarting, you should see a hammer icon in the bottom right corner of the input box.
For more detailed information, visit the [official MCP documentation](https://modelcontextprotocol.io/quickstart/user)

### Connecting to Cursor

Note: Following guide is based on Cursor 0.47.5. Features and behaviors may vary in different versions.

To configure the MCP server:

1. Navigate to: File > Preferences > Cursor Settings, or use the shortcut key `Ctrl+Shift+J`
2. Select "MCP" tab on the left panel
3. Click "Add new global MCP server" button in the top right
4. Add your configuration in the opened mcp.json file

```json
{
  "mcpServers": {
    "piapi": {
      "command": "node",
      "args": ["/absolute/path/to/piapi-mcp-server/dist/index.js"],
      "env": {
        "PIAPI_API_KEY": "your_api_key_here"
      }
    }
  }
}
```

5. After configuration, you'll see a "piapi" entry in MCP Servers page
6. Click the Refresh button on the entry or restart Cursor to connect to the piapi server

To test the piapi image generation:

1. Open and select "Agent mode" in Cursor Chat, or use the shortcut key `Ctrl+I`
2. Enter a test prompt, for example: "generate image of a dog"
3. The image will be generated based on your prompt using piapi server

To disable the piapi server:

1. Navigate to the MCP Servers page in Cursor Settings
2. Find the "piapi" entry in the server list
3. Click the "Enabled" toggle button to switch it to "Disabled"

## Development

### Project Structure

```
piapi-mcp-server/
├── assets/
├── src/
│   ├── index.ts        # Main server entry point
├── package.json
├── tsconfig.json
└── .env.example
```

## License

MIT
