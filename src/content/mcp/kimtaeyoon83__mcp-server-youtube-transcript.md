---
name: "kimtaeyoon83/mcp-server-youtube-transcript"
description: "Fetch YouTube subtitles and transcripts for AI analysis"
category: "Browser Automation"
repo: "kimtaeyoon83/mcp-server-youtube-transcript"
stars: 547
url: "https://github.com/kimtaeyoon83/mcp-server-youtube-transcript"
body_length: 5062
license: "MIT"
language: "TypeScript"
body_tr: |-
  [![MseeP.ai Security Assessment Badge](https://mseep.net/pr/kimtaeyoon83-mcp-server-youtube-transcript-badge.png)](https://mseep.ai/app/kimtaeyoon83-mcp-server-youtube-transcript)

  # YouTube Transcript Server
  [![Trust Score](https://archestra.ai/mcp-catalog/api/badge/quality/kimtaeyoon83/mcp-server-youtube-transcript)](https://archestra.ai/mcp-catalog/kimtaeyoon83__mcp-server-youtube-transcript)

  [![smithery badge](https://smithery.ai/badge/@kimtaeyoon83/mcp-server-youtube-transcript)](https://smithery.ai/server/@kimtaeyoon83/mcp-server-youtube-transcript)

  YouTube videolarından transcript almayı sağlayan bir Model Context Protocol sunucusu. Bu sunucu, basit bir arayüz aracılığıyla video altyazılarına ve subtitle'lara doğrudan erişim imkanı sağlar.

  <a href="https://glama.ai/mcp/servers/z429kk3te7"></a>

  ### Smithery üzerinden Kurulum

  YouTube Transcript Server'ı Claude Desktop'ta otomatik olarak [Smithery](https://smithery.ai/server/@kimtaeyoon83/mcp-server-youtube-transcript) aracılığıyla kurmak için:

  ```bash
  npx -y @smithery/cli install @kimtaeyoon83/mcp-server-youtube-transcript --client claude
  ```

  ## Bileşenler

  ### Tools

  - **get_transcript**
    - YouTube videolarından transcript'i çıkar
    - Girdiler:
      - `url` (string, gerekli): YouTube video URL'si, Shorts URL'si veya video ID'si
      - `lang` (string, isteğe bağlı, varsayılan: "en"): Transcript için dil kodu (örneğin, 'ko', 'en'). İstenen dil bulunamazsa otomatik olarak mevcut dillere geri döner.
      - `include_timestamps` (boolean, isteğe bağlı, varsayılan: false): Çıktıya zaman damgalarını dahil et (örneğin, '[0:05] metin')
      - `strip_ads` (boolean, isteğe bağlı, varsayılan: true): Bölüm işaretlerine dayanarak transcript'ten sponsorlukları, reklamları ve tanıtım içeriğini filtrele

  ## Temel Özellikler

  - Birden fazla video URL formatı desteği (YouTube Shorts dahil)
  - Otomatik yedek özelliğine sahip dile özgü transcript alma
  - Belirli anları referans vermek için isteğe bağlı zaman damgaları
  - Yerleşik reklam/sponsorluk filtreleme (varsayılan olarak etkin)
  - Transcript alma için harici bağımlılık yok
  - Yanıtlarda ayrıntılı metadata

  ## Yapılandırma

  Claude Desktop ile kullanmak için bu sunucu yapılandırmasını ekleyin:

  ```json
  {
    "mcpServers": {
      "youtube-transcript": {
        "command": "npx",
        "args": ["-y", "@kimtaeyoon83/mcp-server-youtube-transcript"]
      }
    }
  }
  ```

  ## Tool aracılığıyla Kurulum

  [mcp-get](https://github.com/michaellatman/mcp-get) Model Context Protocol (MCP) sunucularını kurmanın ve yönetmenin bir komut satırı aracı.

  ```shell 
  npx @michaellatman/mcp-get@latest install @kimtaeyoon83/mcp-server-youtube-transcript
  ```

  ## Awesome-mcp-servers 
  [awesome-mcp-servers](https://github.com/punkpeye/awesome-mcp-servers) Model Context Protocol (MCP) sunucularının kuratörlü bir listesi.

  ## Geliştirme

  ### Gereksinimler

  - Node.js 18 veya üstü
  - npm veya yarn

  ### Kurulum

  Bağımlılıkları yükleyin:
  ```bash
  npm install
  ```

  Sunucuyu derleyin:
  ```bash
  npm run build
  ```

  Otomatik yeniden derleme ile geliştirme için:
  ```bash
  npm run watch
  ```

  ### Test Etme

  ```bash
  npm test
  ```

  ### Hata Ayıklama

  MCP sunucuları stdio üzerinden iletişim kurduğundan, hata ayıklama zorlu olabilir. Geliştirme için MCP Inspector'ı kullanmanızı öneririz:

  ```bash
  npm run inspector
  ```

  ## Evals Çalıştırma

  Evals paketi, index.ts dosyasını çalıştıran bir mcp client'ı yükler, bu nedenle testler arasında yeniden derlemeye gerek yoktur. Ortam değişkenlerini npx komutunun başına ekleyerek yükleyebilirsiniz. Tam belgelere [buradan](https://www.mcpevals.io/docs) ulaşabilirsiniz.

  ```bash
  OPENAI_API_KEY=your-key  npx mcp-eval src/evals/evals.ts src/index.ts
  ```

  ## Hata Yönetimi

  Sunucu, yaygın senaryolar için güçlü hata yönetimi uygular:
  - Geçersiz video URL'leri veya ID'leri
  - Kullanılamayan transcript'ler
  - Dil kullanılabilirliği sorunları
  - Ağ hataları

  ## Kullanım Örnekleri

  1. Video URL'si ile transcript al:
  ```typescript
  await server.callTool("get_transcript", {
    url: "https://www.youtube.com/watch?v=VIDEO_ID",
    lang: "en"
  });
  ```

  2. Video ID'si ile transcript al:
  ```typescript
  await server.callTool("get_transcript", {
    url: "VIDEO_ID",
    lang: "ko"
  });
  ```

  3. YouTube Shorts'tan transcript al:
  ```typescript
  await server.callTool("get_transcript", {
    url: "https://www.youtube.com/shorts/VIDEO_ID"
  });
  ```

  4. Zaman damgaları ile transcript al:
  ```typescript
  await server.callTool("get_transcript", {
    url: "VIDEO_ID",
    include_timestamps: true
  });
  ```

  5. Reklam filtrelemesi olmadan ham transcript al:
  ```typescript
  await server.callTool("get_transcript", {
    url: "VIDEO_ID",
    strip_ads: false
  });
  ```

  6. Claude Desktop Uygulamasında YouTube Altyazılarını Çıkarma
  ```
  chat: https://youtu.be/ODaHJzOyVCQ?si=aXkJgso96Deri0aB Extract subtitles
  ```

  ## Güvenlik Değerlendirmeleri

  Sunucu:
  - Tüm giriş parametrelerini doğrular
  - YouTube API hatalarını incelikle yönetir
  - Transcript alma için zaman aşımı uygular
  - Sorun giderme için ayrıntılı hata mesajları sağlar

  ## Lisans

  Bu MCP sunucusu MIT Lisansı altında lisanslanmıştır. Ayrıntılar için LICENSE dosyasına bakınız.
---

[![MseeP.ai Security Assessment Badge](https://mseep.net/pr/kimtaeyoon83-mcp-server-youtube-transcript-badge.png)](https://mseep.ai/app/kimtaeyoon83-mcp-server-youtube-transcript)

# YouTube Transcript Server
[![Trust Score](https://archestra.ai/mcp-catalog/api/badge/quality/kimtaeyoon83/mcp-server-youtube-transcript)](https://archestra.ai/mcp-catalog/kimtaeyoon83__mcp-server-youtube-transcript)

[![smithery badge](https://smithery.ai/badge/@kimtaeyoon83/mcp-server-youtube-transcript)](https://smithery.ai/server/@kimtaeyoon83/mcp-server-youtube-transcript)

A Model Context Protocol server that enables retrieval of transcripts from YouTube videos. This server provides direct access to video captions and subtitles through a simple interface.

<a href="https://glama.ai/mcp/servers/z429kk3te7"></a>

### Installing via Smithery

To install YouTube Transcript Server for Claude Desktop automatically via [Smithery](https://smithery.ai/server/@kimtaeyoon83/mcp-server-youtube-transcript):

```bash
npx -y @smithery/cli install @kimtaeyoon83/mcp-server-youtube-transcript --client claude
```

## Components

### Tools

- **get_transcript**
  - Extract transcripts from YouTube videos
  - Inputs:
    - `url` (string, required): YouTube video URL, Shorts URL, or video ID
    - `lang` (string, optional, default: "en"): Language code for transcript (e.g., 'ko', 'en'). Automatically falls back to available languages if requested language is not found.
    - `include_timestamps` (boolean, optional, default: false): Include timestamps in output (e.g., '[0:05] text')
    - `strip_ads` (boolean, optional, default: true): Filter out sponsorships, ads, and promotional content from transcript based on chapter markers

## Key Features

- Support for multiple video URL formats (including YouTube Shorts)
- Language-specific transcript retrieval with automatic fallback
- Optional timestamps for referencing specific moments
- Built-in ad/sponsorship filtering (enabled by default)
- Zero external dependencies for transcript fetching
- Detailed metadata in responses

## Configuration

To use with Claude Desktop, add this server configuration:

```json
{
  "mcpServers": {
    "youtube-transcript": {
      "command": "npx",
      "args": ["-y", "@kimtaeyoon83/mcp-server-youtube-transcript"]
    }
  }
}
```

## Install via tool

[mcp-get](https://github.com/michaellatman/mcp-get) A command-line tool for installing and managing Model Context Protocol (MCP) servers.

```shell 
npx @michaellatman/mcp-get@latest install @kimtaeyoon83/mcp-server-youtube-transcript
```

## Awesome-mcp-servers 
[awesome-mcp-servers](https://github.com/punkpeye/awesome-mcp-servers) A curated list of awesome Model Context Protocol (MCP) servers.

## Development

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Setup

Install dependencies:
```bash
npm install
```

Build the server:
```bash
npm run build
```

For development with auto-rebuild:
```bash
npm run watch
```

### Testing

```bash
npm test
```

### Debugging

Since MCP servers communicate over stdio, debugging can be challenging. We recommend using the MCP Inspector for development:

```bash
npm run inspector
```



## Running evals

The evals package loads an mcp client that then runs the index.ts file, so there is no need to rebuild between tests. You can load environment variables by prefixing the npx command. Full documentation can be found [here](https://www.mcpevals.io/docs).

```bash
OPENAI_API_KEY=your-key  npx mcp-eval src/evals/evals.ts src/index.ts
```
## Error Handling

The server implements robust error handling for common scenarios:
- Invalid video URLs or IDs
- Unavailable transcripts
- Language availability issues
- Network errors

## Usage Examples

1. Get transcript by video URL:
```typescript
await server.callTool("get_transcript", {
  url: "https://www.youtube.com/watch?v=VIDEO_ID",
  lang: "en"
});
```

2. Get transcript by video ID:
```typescript
await server.callTool("get_transcript", {
  url: "VIDEO_ID",
  lang: "ko"
});
```

3. Get transcript from YouTube Shorts:
```typescript
await server.callTool("get_transcript", {
  url: "https://www.youtube.com/shorts/VIDEO_ID"
});
```

4. Get transcript with timestamps:
```typescript
await server.callTool("get_transcript", {
  url: "VIDEO_ID",
  include_timestamps: true
});
```

5. Get raw transcript without ad filtering:
```typescript
await server.callTool("get_transcript", {
  url: "VIDEO_ID",
  strip_ads: false
});
```

6. How to Extract YouTube Subtitles in Claude Desktop App
```
chat: https://youtu.be/ODaHJzOyVCQ?si=aXkJgso96Deri0aB Extract subtitles
```

## Security Considerations

The server:
- Validates all input parameters
- Handles YouTube API errors gracefully
- Implements timeouts for transcript retrieval
- Provides detailed error messages for troubleshooting

## License

This MCP server is licensed under the MIT License. See the LICENSE file for details.
