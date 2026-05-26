---
name: "upstash/context7"
description: "Up-to-date code documentation for LLMs and AI code editors."
description_tr: "LLM'ler ve yapay zeka kod editörleri için güncel kod dokümantasyonu."
category: "Knowledge & Memory"
repo: "upstash/context7"
stars: 56127
url: "https://github.com/upstash/context7"
body_length: 9657
license: "MIT"
language: "TypeScript"
homepage: "https://context7.com"
body_tr: |-
  ![Cover](https://github.com/upstash/context7/blob/master/public/cover.png?raw=true)

  [![Install MCP Server](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en/install-mcp?name=context7&config=eyJ1cmwiOiJodHRwczovL21jcC5jb250ZXh0Ny5jb20vbWNwIn0%3D)

  # Context7 Platformu - Her Prompt İçin Güncel Kod Dokümantasyonu

  [![Website](https://img.shields.io/badge/Website-context7.com-blue)](https://context7.com) [![smithery badge](https://smithery.ai/badge/@upstash/context7-mcp)](https://smithery.ai/server/@upstash/context7-mcp) [![NPM Version](https://img.shields.io/npm/v/%40upstash%2Fcontext7-mcp?color=red)](https://www.npmjs.com/package/@upstash/context7-mcp) [![MIT licensed](https://img.shields.io/npm/l/%40upstash%2Fcontext7-mcp)](./LICENSE)

  [![繁體中文](https://img.shields.io/badge/docs-繁體中文-yellow)](./i18n/README.zh-TW.md) [![简体中文](https://img.shields.io/badge/docs-简体中文-yellow)](./i18n/README.zh-CN.md) [![日本語](https://img.shields.io/badge/docs-日本語-b7003a)](./i18n/README.ja.md) [![한국어 문서](https://img.shields.io/badge/docs-한국어-green)](./i18n/README.ko.md) [![Documentación en Español](https://img.shields.io/badge/docs-Español-orange)](./i18n/README.es.md) [![Documentation en Français](https://img.shields.io/badge/docs-Français-blue)](./i18n/README.fr.md) [![Documentação em Português (Brasil)](https://raw.githubusercontent.com/upstash/context7/HEAD/<https://img.shields.io/badge/docs-Português%20(Brasil)-purple>)](./i18n/README.pt-BR.md) [![Documentazione in italiano](https://img.shields.io/badge/docs-Italian-red)](./i18n/README.it.md) [![Dokumentasi Bahasa Indonesia](https://img.shields.io/badge/docs-Bahasa%20Indonesia-pink)](./i18n/README.id-ID.md) [![Dokumentation auf Deutsch](https://img.shields.io/badge/docs-Deutsch-darkgreen)](./i18n/README.de.md) [![Документация на русском языке](https://img.shields.io/badge/docs-Русский-darkblue)](./i18n/README.ru.md) [![Українська документація](https://img.shields.io/badge/docs-Українська-lightblue)](./i18n/README.uk.md) [![Türkçe Doküman](https://img.shields.io/badge/docs-Türkçe-blue)](./i18n/README.tr.md) [![Arabic Documentation](https://img.shields.io/badge/docs-Arabic-white)](./i18n/README.ar.md) [![Tiếng Việt](https://img.shields.io/badge/docs-Tiếng%20Việt-red)](./i18n/README.vi.md)

  ## ❌ Context7 Olmadan

  LLM'ler, kullandığınız kütüphaneler hakkında eski veya genel bilgilere güvenir. Şu sorunlarla karşılaşırsınız:

  - ❌ Kod örnekleri eski ve yıllık eğitim verilerine dayalı
  - ❌ Var olmayan hayali API'ler
  - ❌ Eski paket sürümleri için genel cevaplar

  ## ✅ Context7 İle

  Context7, güncel ve sürüme özel dokümantasyonu ve kod örneklerini doğrudan kaynaktan çekerek doğrudan promptunuza yerleştirir.

  ```txt
  Create a Next.js middleware that checks for a valid JWT in cookies
  and redirects unauthenticated users to `/login`. use context7
  ```

  ```txt
  Configure a Cloudflare Worker script to cache
  JSON API responses for five minutes. use context7
  ```

  ```txt
  Show me the Supabase auth API for email/password sign-up.
  ```

  Context7, güncel kod örneklerini ve dokümantasyonunu doğrudan LLM'nizin context'ine getiriyor. Sekme değiştirmeye gerek yok, var olmayan hallüsinasyonlu API'ler yok, güncel olmayan kod üretimi yok.

  İki modda çalışır:

  - **CLI + Skills** — aracınızı `ctx7` CLI komutlarını kullanarak doküman getirmeye yönlendiren bir skill kurur (MCP gerekli değil)
  - **MCP** — Context7 MCP sunucusunu kaydettirir, böylece aracınız dokümantasyon araçlarını native olarak çağırabilir

  ## Kurulum

  > [!NOTE]
  > **API Anahtarı Tavsiye Edilir**: Daha yüksek rate limitler için [context7.com/dashboard](https://context7.com/dashboard) adresinden ücretsiz bir API anahtarı alın.

  Context7'yi tek bir komutla kodlama aracılarınız için kurun:

  ```bash
  npx ctx7 setup
  ```

  OAuth ile kimlik doğrulaması yapar, bir API anahtarı oluşturur ve uygun skill'i kurar. CLI + Skills veya MCP modu arasında seçim yapabilirsiniz. Belirli bir aracı hedeflemek için `--cursor`, `--claude` veya `--opencode` kullanın.

  Daha sonra oluşturulan kuruluşu kaldırmak için `npx ctx7 remove` komutunu çalıştırın. CLI'yi global olarak `npm install -g ctx7` ile kurmadıysanız, bu paketi `npm uninstall -g ctx7` ile ayrıca kaldırın.

  Manuel olarak yapılandırmak için, MCP istemcinizle Context7 sunucu URL'sini `https://mcp.context7.com/mcp` kullanın ve `CONTEXT7_API_KEY` header'ı aracılığıyla API anahtarınızı geçin. İstemciye özel kurulum talimatları için aşağıdaki bağlantıya bakın.

  **[Manuel Kurulum / Diğer İstemciler →](https://context7.com/docs/resources/all-clients)**

  ## Önemli İpuçları

  ### Kütüphane Kimliğini Kullanın

  Eğer hangi kütüphaneyi kullanmak istediğinizi tam olarak biliyorsanız, Context7 Kimliğini promptunuza ekleyin. Bu şekilde, Context7 kütüphane eşleştirme adımını atlayabilir ve doğrudan doküman alabilir.

  ```txt
  Implement basic authentication with Supabase. use library /supabase/supabase for API and docs.
  ```

  Eğik çizgi sözdizimi Context7'ye hangi kütüphaneyi yükleyeceğini tam olarak söyler.

  ### Bir Sürüm Belirtin

  Belirli bir kütüphane sürümü için dokümantasyon almak için, promptunuzda sürümü belirtin:

  ```txt
  How do I set up Next.js 14 middleware? use context7
  ```

  Context7 otomatik olarak uygun sürümü eşleştirecektir.

  ### Bir Kural Ekleyin

  Eğer `ctx7 setup` aracılığıyla kurmadıysanız, kütüphane ile ilgili sorulara otomatik olarak Context7'yi tetikleyen bir skill yapılandırılır. Bunun yerine manuel olarak kural kurmak için, kodlama aracınıza bir tane ekleyin:

  - **Cursor**: `Cursor Settings > Rules`
  - **Claude Code**: `CLAUDE.md`
  - Veya kodlama aracınızdaki eşdeğer

  **Örnek kural:**

  ```txt
  Always use Context7 when I need library/API documentation, code generation, setup or configuration steps without me having to explicitly ask.
  ```

  ## Kullanılabilir Araçlar

  ### CLI Komutları

  - `ctx7 library <name> <query>`: Context7 indeksini kütüphane adına göre arar ve eşleşen kütüphaneleri kimliğini döndürür.
  - `ctx7 docs <libraryId> <query>`: Context7 uyumlu bir kütüphane kimliği kullanarak kütüphane dokümantasyonunu alır (ör. `/mongodb/docs`, `/vercel/next.js`).

  ### MCP Araçları

  - `resolve-library-id`: Genel bir kütüphane adını Context7 uyumlu bir kütüphane kimliğine dönüştürür.
    - `query` (gerekli): Kullanıcının sorusu veya görevi (sonuçları ilgiliye göre sıralamak için kullanılır)
    - `libraryName` (gerekli): Aranacak kütüphane adı
  - `query-docs`: Context7 uyumlu bir kütüphane kimliği kullanarak kütüphane dokümantasyonunu alır.
    - `libraryId` (gerekli): Tam Context7 uyumlu kütüphane kimliği (ör. `/mongodb/docs`, `/vercel/next.js`)
    - `query` (gerekli): İlgili dokümantasyonu almak için soru veya görev

  ## Daha Fazla Dokümantasyon

  - [CLI Referansı](https://context7.com/docs/clients/cli) - Tam CLI dokümantasyonu
  - [MCP İstemcileri](https://context7.com/docs/resources/all-clients) - 30+ istemci için manuel MCP kurulumu
  - [Kütüphaneleri Ekleme](https://context7.com/docs/adding-libraries) - Kütüphaneyi Context7'ye gönderin
  - [Sorun Giderme](https://context7.com/docs/resources/troubleshooting) - Yaygın sorunlar ve çözümler
  - [API Referansı](https://context7.com/docs/api-guide) - REST API dokümantasyonu
  - [Geliştirici Rehberi](https://context7.com/docs/resources/developer) - Context7 MCP'yi yerel olarak çalıştırın

  ## Paketler

  - [`@upstash/context7-mcp`](https://www.npmjs.com/package/@upstash/context7-mcp) - MCP sunucusu
  - [`ctx7`](https://www.npmjs.com/package/ctx7) - CLI
  - [`@upstash/context7-sdk`](https://www.npmjs.com/package/@upstash/context7-sdk) - TypeScript SDK
  - [`@upstash/context7-tools-ai-sdk`](https://www.npmjs.com/package/@upstash/context7-tools-ai-sdk) - Vercel AI SDK araçları
  - [`@upstash/context7-pi`](https://www.npmjs.com/package/@upstash/context7-pi) - pi.dev uzantısı

  ## Sorumluluk Reddi

  1- Context7 projeleri topluluk tarafından katkılı ve yüksek kaliteyi sağlamaya çalışmamıza rağmen, tüm kütüphane dokümantasyonunun doğruluğunu, tamlığını veya güvenliğini garanti edemeyiz. Context7'de listelenen projeler Context7 tarafından değil, sahibi tarafından geliştirilir ve bakımı yapılır. Şüpheli, uygunsuz veya potansiyel olarak zararlı içerik ile karşılaşırsanız, lütfen proje sayfasındaki "Bildir" düğmesini kullanarak bizi derhal bilgilendirin. Tüm raporları ciddiye alıyoruz ve platformumuzun bütünlüğünü ve güvenliğini sağlamak için işaretlenen içeriği hızlı bir şekilde inceleyeceğiz. Context7'yi kullanarak, bunu kendi takdiriniz ve riskiniz altında yaptığınızı kabul edersiniz.

  2- Bu depo, MCP sunucusunun kaynak kodunu barındırır. Destekleyici bileşenler — API backend'i, parsing motoru ve crawling motoru — gizlidir ve bu deposun parçası değildir.

  ## 🤝 Biz İle Bağlantı Kurun

  Güncel kalın ve topluluğumuza katılın:

  - 📢 En son haber ve güncellemeler için [X](https://x.com/context7ai) takip edin
  - 🌐 [Web Sitesini](https://context7.com) ziyaret edin
  - 💬 [Discord Topluluğumuza](https://upstash.com/discord) katılın

  ## 📺 Context7 Medyada

  - [Better Stack: "Free Tool Makes Cursor 10x Smarter"](https://youtu.be/52FC3qObp9E)
  - [Cole Medin: "This is Hands Down the BEST MCP Server for AI Coding Assistants"](https://www.youtube.com/watch?v=G7gK8H6u7Rs)
  - [Income Stream Surfers: "Context7 + SequentialThinking MCPs: Is This AGI?"](https://www.youtube.com/watch?v=-ggvzyLpK6o)
  - [Julian Goldie SEO: "Context7: New MCP AI Agent Update"](https://www.youtube.com/watch?v=CTZm6fBYisc)
  - [JeredBlu: "Context 7 MCP: Get Documentation Instantly + VS Code Setup"](https://www.youtube.com/watch?v=-ls0D-rtET4)
  - [Income Stream Surfers: "Context7: The New MCP Server That Will CHANGE AI Coding"](https://www.youtube.com/watch?v=PS-2Azb-C3M)
  - [AICodeKing: "Context7 + Cline & RooCode: This MCP Server Makes CLINE 100X MORE EFFECTIVE!"](https://www.youtube.com/watch?v=qZfENAPMnyo)
  - [Sean Kochel: "5 MCP Servers For Vibe Coding Glory (Just Plug-In & Go)"](https://www.youtube.com/watch?v=LqTQi8qexJM)

  ## ⭐ Yıldız Geçmişi

  [![Star History Chart](https://api.star-history.com/svg?repos=upstash/context7&type=Date)](https://www.star-history.com/#upstash/context7&Date)

  ## 📄 Lisans

  MIT
---

![Cover](https://github.com/upstash/context7/blob/master/public/cover.png?raw=true)

[![Install MCP Server](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en/install-mcp?name=context7&config=eyJ1cmwiOiJodHRwczovL21jcC5jb250ZXh0Ny5jb20vbWNwIn0%3D)

# Context7 Platform - Up-to-date Code Docs For Any Prompt

[![Website](https://img.shields.io/badge/Website-context7.com-blue)](https://context7.com) [![smithery badge](https://smithery.ai/badge/@upstash/context7-mcp)](https://smithery.ai/server/@upstash/context7-mcp) [![NPM Version](https://img.shields.io/npm/v/%40upstash%2Fcontext7-mcp?color=red)](https://www.npmjs.com/package/@upstash/context7-mcp) [![MIT licensed](https://img.shields.io/npm/l/%40upstash%2Fcontext7-mcp)](./LICENSE)

[![繁體中文](https://img.shields.io/badge/docs-繁體中文-yellow)](./i18n/README.zh-TW.md) [![简体中文](https://img.shields.io/badge/docs-简体中文-yellow)](./i18n/README.zh-CN.md) [![日本語](https://img.shields.io/badge/docs-日本語-b7003a)](./i18n/README.ja.md) [![한국어 문서](https://img.shields.io/badge/docs-한국어-green)](./i18n/README.ko.md) [![Documentación en Español](https://img.shields.io/badge/docs-Español-orange)](./i18n/README.es.md) [![Documentation en Français](https://img.shields.io/badge/docs-Français-blue)](./i18n/README.fr.md) [![Documentação em Português (Brasil)](https://raw.githubusercontent.com/upstash/context7/HEAD/<https://img.shields.io/badge/docs-Português%20(Brasil)-purple>)](./i18n/README.pt-BR.md) [![Documentazione in italiano](https://img.shields.io/badge/docs-Italian-red)](./i18n/README.it.md) [![Dokumentasi Bahasa Indonesia](https://img.shields.io/badge/docs-Bahasa%20Indonesia-pink)](./i18n/README.id-ID.md) [![Dokumentation auf Deutsch](https://img.shields.io/badge/docs-Deutsch-darkgreen)](./i18n/README.de.md) [![Документация на русском языке](https://img.shields.io/badge/docs-Русский-darkblue)](./i18n/README.ru.md) [![Українська документація](https://img.shields.io/badge/docs-Українська-lightblue)](./i18n/README.uk.md) [![Türkçe Doküman](https://img.shields.io/badge/docs-Türkçe-blue)](./i18n/README.tr.md) [![Arabic Documentation](https://img.shields.io/badge/docs-Arabic-white)](./i18n/README.ar.md) [![Tiếng Việt](https://img.shields.io/badge/docs-Tiếng%20Việt-red)](./i18n/README.vi.md)

## ❌ Without Context7

LLMs rely on outdated or generic information about the libraries you use. You get:

- ❌ Code examples are outdated and based on year-old training data
- ❌ Hallucinated APIs that don't even exist
- ❌ Generic answers for old package versions

## ✅ With Context7

Context7 pulls up-to-date, version-specific documentation and code examples straight from the source — and places them directly into your prompt.

```txt
Create a Next.js middleware that checks for a valid JWT in cookies
and redirects unauthenticated users to `/login`. use context7
```

```txt
Configure a Cloudflare Worker script to cache
JSON API responses for five minutes. use context7
```

```txt
Show me the Supabase auth API for email/password sign-up.
```

Context7 fetches up-to-date code examples and documentation right into your LLM's context. No tab-switching, no hallucinated APIs that don't exist, no outdated code generation.

Works in two modes:

- **CLI + Skills** — installs a skill that guides your agent to fetch docs using `ctx7` CLI commands (no MCP required)
- **MCP** — registers a Context7 MCP server so your agent can call documentation tools natively

## Installation

> [!NOTE]
> **API Key Recommended**: Get a free API key at [context7.com/dashboard](https://context7.com/dashboard) for higher rate limits.

Set up Context7 for your coding agents with a single command:

```bash
npx ctx7 setup
```

Authenticates via OAuth, generates an API key, and installs the appropriate skill. You can choose between CLI + Skills or MCP mode. Use `--cursor`, `--claude`, or `--opencode` to target a specific agent.

To remove the generated setup later, run `npx ctx7 remove`. If you globally installed the CLI with `npm install -g ctx7`, remove that package separately with `npm uninstall -g ctx7`.

To configure manually, use the Context7 server URL `https://mcp.context7.com/mcp` with your MCP client and pass your API key via the `CONTEXT7_API_KEY` header. See the link below for client-specific setup instructions.

**[Manual Installation / Other Clients →](https://context7.com/docs/resources/all-clients)**

## Important Tips

### Use Library Id

If you already know exactly which library you want to use, add its Context7 ID to your prompt. That way, Context7 can skip the library-matching step and directly retrieve docs.

```txt
Implement basic authentication with Supabase. use library /supabase/supabase for API and docs.
```

The slash syntax tells Context7 exactly which library to load docs for.

### Specify a Version

To get documentation for a specific library version, just mention the version in your prompt:

```txt
How do I set up Next.js 14 middleware? use context7
```

Context7 will automatically match the appropriate version.

### Add a Rule

If you installed via `ctx7 setup`, a skill is configured automatically that triggers Context7 for library-related questions. To set up a rule manually instead, add one to your coding agent:

- **Cursor**: `Cursor Settings > Rules`
- **Claude Code**: `CLAUDE.md`
- Or the equivalent in your coding agent

**Example rule:**

```txt
Always use Context7 when I need library/API documentation, code generation, setup or configuration steps without me having to explicitly ask.
```

## Available Tools

### CLI Commands

- `ctx7 library <name> <query>`: Searches the Context7 index by library name and returns matching libraries with their IDs.
- `ctx7 docs <libraryId> <query>`: Retrieves documentation for a library using a Context7-compatible library ID (e.g., `/mongodb/docs`, `/vercel/next.js`).

### MCP Tools

- `resolve-library-id`: Resolves a general library name into a Context7-compatible library ID.
  - `query` (required): The user's question or task (used to rank results by relevance)
  - `libraryName` (required): The name of the library to search for
- `query-docs`: Retrieves documentation for a library using a Context7-compatible library ID.
  - `libraryId` (required): Exact Context7-compatible library ID (e.g., `/mongodb/docs`, `/vercel/next.js`)
  - `query` (required): The question or task to get relevant documentation for

## More Documentation

- [CLI Reference](https://context7.com/docs/clients/cli) - Full CLI documentation
- [MCP Clients](https://context7.com/docs/resources/all-clients) - Manual MCP installation for 30+ clients
- [Adding Libraries](https://context7.com/docs/adding-libraries) - Submit your library to Context7
- [Troubleshooting](https://context7.com/docs/resources/troubleshooting) - Common issues and solutions
- [API Reference](https://context7.com/docs/api-guide) - REST API documentation
- [Developer Guide](https://context7.com/docs/resources/developer) - Run Context7 MCP locally

## Packages

- [`@upstash/context7-mcp`](https://www.npmjs.com/package/@upstash/context7-mcp) - MCP server
- [`ctx7`](https://www.npmjs.com/package/ctx7) - CLI
- [`@upstash/context7-sdk`](https://www.npmjs.com/package/@upstash/context7-sdk) - TypeScript SDK
- [`@upstash/context7-tools-ai-sdk`](https://www.npmjs.com/package/@upstash/context7-tools-ai-sdk) - Vercel AI SDK tools
- [`@upstash/context7-pi`](https://www.npmjs.com/package/@upstash/context7-pi) - pi.dev extension

## Disclaimer

1- Context7 projects are community-contributed and while we strive to maintain high quality, we cannot guarantee the accuracy, completeness, or security of all library documentation. Projects listed in Context7 are developed and maintained by their respective owners, not by Context7. If you encounter any suspicious, inappropriate, or potentially harmful content, please use the "Report" button on the project page to notify us immediately. We take all reports seriously and will review flagged content promptly to maintain the integrity and safety of our platform. By using Context7, you acknowledge that you do so at your own discretion and risk.

2- This repository hosts the MCP server’s source code. The supporting components — API backend, parsing engine, and crawling engine — are private and not part of this repository.

## 🤝 Connect with Us

Stay updated and join our community:

- 📢 Follow us on [X](https://x.com/context7ai) for the latest news and updates
- 🌐 Visit our [Website](https://context7.com)
- 💬 Join our [Discord Community](https://upstash.com/discord)

## 📺 Context7 In Media

- [Better Stack: "Free Tool Makes Cursor 10x Smarter"](https://youtu.be/52FC3qObp9E)
- [Cole Medin: "This is Hands Down the BEST MCP Server for AI Coding Assistants"](https://www.youtube.com/watch?v=G7gK8H6u7Rs)
- [Income Stream Surfers: "Context7 + SequentialThinking MCPs: Is This AGI?"](https://www.youtube.com/watch?v=-ggvzyLpK6o)
- [Julian Goldie SEO: "Context7: New MCP AI Agent Update"](https://www.youtube.com/watch?v=CTZm6fBYisc)
- [JeredBlu: "Context 7 MCP: Get Documentation Instantly + VS Code Setup"](https://www.youtube.com/watch?v=-ls0D-rtET4)
- [Income Stream Surfers: "Context7: The New MCP Server That Will CHANGE AI Coding"](https://www.youtube.com/watch?v=PS-2Azb-C3M)
- [AICodeKing: "Context7 + Cline & RooCode: This MCP Server Makes CLINE 100X MORE EFFECTIVE!"](https://www.youtube.com/watch?v=qZfENAPMnyo)
- [Sean Kochel: "5 MCP Servers For Vibe Coding Glory (Just Plug-In & Go)"](https://www.youtube.com/watch?v=LqTQi8qexJM)

## ⭐ Star History

[![Star History Chart](https://api.star-history.com/svg?repos=upstash/context7&type=Date)](https://www.star-history.com/#upstash/context7&Date)

## 📄 License

MIT
