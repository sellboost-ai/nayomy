---
name: "getsentry/sentry-mcp"
description: "Sentry.io integration for error tracking and performance monitoring"
category: "Monitoring"
repo: "getsentry/sentry-mcp"
stars: 706
url: "https://github.com/getsentry/sentry-mcp"
body_length: 8801
license: "NOASSERTION"
language: "TypeScript"
homepage: "https://mcp.sentry.dev"
body_tr: |-
  # sentry-mcp

  Sentry'nin MCP servisi, birincil olarak insan-döngü kodlama ajanları için tasarlanmıştır. Araç seçimimiz ve öncelikleri, tüm Sentry işlevselliği için genel amaçlı bir MCP sunucusu sağlamak yerine, geliştirici iş akışlarına ve hata ayıklama kullanım durumlarına odaklanmıştır.

  Bu uzak MCP sunucusu, Cursor, Claude Code ve benzeri geliştirme araçları için optimize edilmiş, upstream Sentry API'sine ara katman olarak hareket eder. [Cloudflare'ın uzak MCP'lere yönelik çalışmasına](https://blog.cloudflare.com/remote-model-context-protocol-servers-mcp/) dayanmaktadır.

  ## Başlangıç

  Üretim ortamında dağıtılmış hizmeti ziyaret ederek ihtiyacınız olan her şeyi bulabilirsiniz:

  <https://mcp.sentry.dev>

  Katkıda bulunmak, nasıl çalıştığını öğrenmek veya kendi kendine barındırılan Sentry için bunu çalıştırmak istiyorsanız, aşağıya devam edin.

  ### Claude Code Eklentisi

  Otomatik alt ajan delegasyonu için Claude Code eklentisi olarak kurun:

  ```shell
  claude plugin marketplace add getsentry/sentry-mcp
  claude plugin install sentry-mcp@sentry-mcp
  ```

  Bu, Sentry hataları, sorunları, izlemeleri veya performans hakkında sorduğunuzda Claude'un otomatik olarak delegasyon yaptığı bir `sentry-mcp` alt ajanı sağlar.

  İleri görüş sunan araç varyantları ve özellikler için:

  ```shell
  claude plugin install sentry-mcp@sentry-mcp-experimental
  ```

  ### Stdio vs Uzak

  Bu depo, MCP servisi olarak hareket etmeye odaklanırken, `stdio` taşımasını da destekleriz. Bu hala devam eden bir çalışma, ancak MCP'yi kendi kendine barındırılan Sentry yüklemesine karşı çalıştırmak için en kolay yoldur.

  **Not:** AI tarafından desteklenen arama araçları (`search_events`, `search_issues`, vb.) bir LLM sağlayıcısı (OpenAI veya Anthropic) gerektirir. Bu araçlar, sorguları Sentry'nin sorgu söz dizimine çevirmek için doğal dil işlemesini kullanır. Yapılandırılmış bir sağlayıcı olmadan, bu spesifik araçlar kullanılamayacak, ancak diğer tüm araçlar normal şekilde işlev görecektir.

  `stdio` taşımasını kullanmak için, gerekli kapsamlara sahip bir Kullanıcı Auth Token'ı Sentry'de oluşturmanız gerekir. Yazım sırasında bu:

  ```
  org:read
  project:read
  project:write
  team:read
  team:write
  event:write
  ```

  Taşımayı başlatın:

  ```shell
  npx @sentry/mcp-server@latest --access-token=sentry-user-token
  ```

  Kendi kendine barındırılan bir dağıtıma bağlanmanız gerekiyor mu? Komutu çalıştırırken <code>--host</code> ekleyin (yalnızca ana makine adı, örn. <code>--host=sentry.example.com</code>).
  Yalnızca düz HTTP'yi ortaya çıkaran yalıtılmış iç dağıtımlar için, <code>--insecure-http</code> de ekleyin.

  Bazı özellikler (Seer gibi) kendi kendine barındırılan örneklerde kullanılamayabilir. Desteklenmeyen araçların ortaya çıkmasını önlemek için belirli becerileri devre dışı bırakabilirsiniz:

  ```shell
  npx @sentry/mcp-server@latest --access-token=TOKEN --host=sentry.example.com --disable-skills=seer
  ```

  TLS olmayan kendi kendine barındırılan örnekler için:

  ```shell
  npx @sentry/mcp-server@latest --access-token=TOKEN --host=sentry.internal:9000 --insecure-http
  ```

  #### Ortam Değişkenleri

  ```shell
  SENTRY_ACCESS_TOKEN=         # Gerekli: Sentry auth token'ınız

  # LLM Sağlayıcı Yapılandırması (AI tarafından desteklenen arama araçları için gerekli)
  EMBEDDED_AGENT_PROVIDER=     # Gerekli: 'openai' veya 'anthropic'
  OPENAI_API_KEY=              # OpenAI kullanıyorsanız gerekli
  ANTHROPIC_API_KEY=           # Anthropic kullanıyorsanız gerekli

  # İsteğe bağlı geçersiz kılmalar
  SENTRY_HOST=                 # Kendi kendine barındırılan dağıtımlar için
  MCP_DISABLE_SKILLS=          # Belirli becerileri devre dışı bırakın (virgülle ayrılmış, örn. 'seer')
  ```

  **Önemli:** LLM sağlayıcınızı açıkça belirtmek için her zaman `EMBEDDED_AGENT_PROVIDER` ayarlayın. Yalnızca API anahtarlarına dayalı otomatik algılama kullanımdan kaldırılmıştır ve gelecekteki bir sürümde kaldırılacaktır. Ayrıntılı yapılandırma seçenekleri için [docs/embedded-agents.md](docs/embedded-agents.md) bölümüne bakın.

  #### Örnek MCP Yapılandırması

  ```json
  {
    "mcpServers": {
      "sentry": {
        "command": "npx",
        "args": ["@sentry/mcp-server"],
        "env": {
          "SENTRY_ACCESS_TOKEN": "your-token",
          "EMBEDDED_AGENT_PROVIDER": "openai",
          "OPENAI_API_KEY": "sk-..."
        }
      }
    }
  }
  ```

  Host değişkenini ayarlanmamış bırakırsanız, CLI otomatik olarak Sentry SaaS hizmetini hedefler. Yalnızca kendi kendine barındırılan Sentry işletirken geçersiz kılmayı ayarlayın.

  Seer'ı desteklemeyen kendi kendine barındırılan örnekler için:

  ```json
  {
    "mcpServers": {
      "sentry": {
        "command": "npx",
        "args": ["@sentry/mcp-server"],
        "env": {
          "SENTRY_ACCESS_TOKEN": "your-token",
          "SENTRY_HOST": "sentry.example.com",
          "MCP_DISABLE_SKILLS": "seer"
        }
      }
    }
  }
  ```

  ### MCP İnceleme Aracı

  MCP, hizmeti kolayca test etmek için bir [İnceleme Aracı](https://modelcontextprotocol.io/docs/tools/inspector) içerir:

  ```shell
  pnpm inspector
  ```

  MCP sunucusu URL'sini girin (<http://localhost:5173>) ve bağlan'a tıklayın. Bu, sizin için kimlik doğrulama akışını tetiklemelidir.

  Not: `127.0.0.1` üzerinde müfettişe erişirken OAuth akışında sorunlar yaşıyorsanız, `http://localhost:6274` ziyaret ederek `localhost` kullanmayı deneyin.

  ## Yerel Geliştirme

  Değişikliklerde bulunmak için, yerel ortamınızı ayarlamanız gerekir:

  1. **Ortam ve ajan becerilerini ayarlayın:**

     ```shell
     make setup-env  # .env dosyaları oluşturur ve paylaşılan ajan becerilerini kurar
     ```

     Bu ayrıca [getsentry/skills](https://github.com/getsentry/skills) adresinden paylaşılan becerileri `.agents/skills/` dizinine kurmak için `npx @sentry/dotagents install` dosyasını çalıştırır (`.claude/skills` ve `.cursor/skills` içine sembolik bağlantı kurulur). Becerileri daha sonra güncellemeniz gerekirse, doğrudan çalıştırın:

     ```shell
     npx @sentry/dotagents install
     ```

  2. **Sentry'de bir OAuth Uygulaması Oluşturun** (Ayarlar => API => [Uygulamalar](https://sentry.io/settings/account/api/applications/)):

     - Ana Sayfa URL'si: `http://localhost:5173`
     - Yetkili Yönlendirme URI'leri: `http://localhost:5173/oauth/callback`
     - Client ID'nizi not edin ve bir Client secret oluşturun

  3. **Kimlik bilgilerinizi yapılandırın:**

     - Kök dizindeki `.env` düzenleyin ve `OPENAI_API_KEY` ekleyin
     - `packages/mcp-cloudflare/.env` düzenleyin ve şunu ekleyin:
       - `SENTRY_CLIENT_ID=your_development_sentry_client_id`
       - `SENTRY_CLIENT_SECRET=your_development_sentry_client_secret`
       - `COOKIE_SECRET=my-super-secret-cookie`

  4. **Geliştirme sunucusunu başlatın:**

     ```shell
     pnpm dev
     ```

  ### Doğrulama

  Sunucuyu `http://localhost:5173` adresinde kullanılabilir hale getirmek için yerel olarak çalıştırın

  ```shell
  pnpm dev
  ```

  Yerel sunucuyu test etmek için, İnceleme Aracı'na `http://localhost:5173/mcp` girin ve bağlan'a tıklayın. İstemlerden sonra, "Araçları Listele"yi yapabileceksiniz.

  ### Testler

  Üç test paketi dahil edilmiştir: birim testleri, değerlendirmeler ve manuel testler.

  **Birim testleri** şu komutla çalıştırılabilir:

  ```shell
  pnpm test
  ```

  **Değerlendirmeler**, proje kökünde bazı yapılandırmalara sahip bir `.env` dosyası gerektirir:

  ```shell
  # .env (proje kökünde)
  OPENAI_API_KEY=  # Ayrıca üretim ortamında AI tarafından desteklenen arama araçları için gerekli
  ```

  Not: Kök `.env` dosyası tüm paketler için varsayılanları sağlar. Bireysel paketler, geliştirme sırasında bu varsayılanları geçersiz kılmak için kendi `.env` dosyalarına sahip olabilir.

  Bunu yaptıktan sonra, şu komutla çalıştırabilirsiniz:

  ```shell
  pnpm eval
  ```

  **Manuel testler** (MCP değişikliklerini test etmek için tercih edilir):

  ```shell
  # Yerel dev sunucusuyla test edin (varsayılan: http://localhost:5173)
  pnpm -w run cli "who am I?"

  # Ajan modunu test edin (yalnızca use_sentry aracı)
  pnpm -w run cli --agent "who am I?"

  # Üretim ortamına karşı test edin
  pnpm -w run cli --mcp-host=https://mcp.sentry.dev "query"

  # Yerel stdio modunda test edin (SENTRY_ACCESS_TOKEN gerekli)
  pnpm -w run cli --access-token=TOKEN "query"
  ```

  Not: CLI varsayılan olarak `http://localhost:5173` adresine yönelir. `--mcp-host` ile geçersiz kılın veya `MCP_URL` ortam değişkenini ayarlayın.

  **Kapsamlı test oyun kitapları:**
  - **Stdio testi:** Stdio uygulamasını oluşturma, çalıştırma ve test etmeye ilişkin tam kılavuz için `docs/testing-stdio.md` bölümüne bakın (IDE'ler, MCP İnceleme Aracı)
  - **Uzak testler:** Uzak sunucuyu test etmeye ilişkin tam kılavuz için `docs/testing-remote.md` bölümüne bakın (OAuth, web kullanıcı arayüzü, CLI istemcisi)

  ## Geliştirme Notları

  ### Otomatik Kod İncelemesi

  Bu depo, çekme isteklerindeki potansiyel sorunları belirlemeye yardımcı olmak için otomatik kod inceleme araçları (Cursor BugBot gibi) kullanır. Bu araçlar yararlı geri bildirim ve öneriler sağlar, ancak **bu denetimleri gerekli yapmanızı önermiyor** çünkü doğruluk hala gelişmekte ve yanlış pozitifler üretebilir.

  Otomatik incelemeler şu şekilde ele alınmalıdır:

  - ✅ **Kod incelemesi sırasında göz önünde bulundurulması gereken yararlı öneriler**
  - ✅ **Tartışma ve iyileştirme için başlangıç noktaları**
  - ❌ **PR'ları birleştirmek için engelleme gereksinimleri değil**
  - ❌ **İnsan kodu incelemesi için yedek değil**

  Otomatik geri bildirimi ele alırken, her bir öneriyi kesin olarak takip etmek yerine temel endişelere odaklanın.

  ### Katılımcı Belgeleri

  Katkıda bulunmak veya tam belgeleme haritasını keşfetmek istiyorsanız? Katılımcı iş akışları ve tam belgeler dizini için `CLAUDE.md` (ayrıca `AGENTS.md` olarak kullanılabilir) bölümüne bakın. `docs/` klasörü, konu başına kılavuzlar ve araç entegre edilmiş `.md` dosyaları içerir.
---

# sentry-mcp

Sentry's MCP service is primarily designed for human-in-the-loop coding agents. Our tool selection and priorities are focused on developer workflows and debugging use cases, rather than providing a general-purpose MCP server for all Sentry functionality.

This remote MCP server acts as middleware to the upstream Sentry API, optimized for coding assistants like Cursor, Claude Code, and similar development tools. It's based on [Cloudflare's work towards remote MCPs](https://blog.cloudflare.com/remote-model-context-protocol-servers-mcp/).

## Getting Started

You'll find everything you need to know by visiting the deployed service in production:

<https://mcp.sentry.dev>

If you're looking to contribute, learn how it works, or to run this for self-hosted Sentry, continue below.

### Claude Code Plugin

Install as a Claude Code plugin for automatic subagent delegation:

```shell
claude plugin marketplace add getsentry/sentry-mcp
claude plugin install sentry-mcp@sentry-mcp
```

This provides a `sentry-mcp` subagent that Claude automatically delegates to when you ask about Sentry errors, issues, traces, or performance.

For forward-looking tool variants and features:

```shell
claude plugin install sentry-mcp@sentry-mcp-experimental
```

### Stdio vs Remote

While this repository is focused on acting as an MCP service, we also support a `stdio` transport. This is still a work in progress, but is the easiest way to adapt run the MCP against a self-hosted Sentry install.

**Note:** The AI-powered search tools (`search_events`, `search_issues`, etc.) require an LLM provider (OpenAI or Anthropic). These tools use natural language processing to translate queries into Sentry's query syntax. Without a configured provider, these specific tools will be unavailable, but all other tools will function normally.

To utilize the `stdio` transport, you'll need to create an User Auth Token in Sentry with the necessary scopes. As of writing this is:

```
org:read
project:read
project:write
team:read
team:write
event:write
```

Launch the transport:

```shell
npx @sentry/mcp-server@latest --access-token=sentry-user-token
```

Need to connect to a self-hosted deployment? Add <code>--host</code> (hostname
only, e.g. <code>--host=sentry.example.com</code>) when you run the command.
For isolated internal deployments that only expose plain HTTP, also add
<code>--insecure-http</code>.

Some features (like Seer) may not be available on self-hosted instances. You can
disable specific skills to prevent unsupported tools from being exposed:

```shell
npx @sentry/mcp-server@latest --access-token=TOKEN --host=sentry.example.com --disable-skills=seer
```

For self-hosted instances without TLS:

```shell
npx @sentry/mcp-server@latest --access-token=TOKEN --host=sentry.internal:9000 --insecure-http
```

#### Environment Variables

```shell
SENTRY_ACCESS_TOKEN=         # Required: Your Sentry auth token

# LLM Provider Configuration (required for AI-powered search tools)
EMBEDDED_AGENT_PROVIDER=     # Required: 'openai' or 'anthropic'
OPENAI_API_KEY=              # Required if using OpenAI
ANTHROPIC_API_KEY=           # Required if using Anthropic

# Optional overrides
SENTRY_HOST=                 # For self-hosted deployments
MCP_DISABLE_SKILLS=          # Disable specific skills (comma-separated, e.g. 'seer')
```

**Important:** Always set `EMBEDDED_AGENT_PROVIDER` to explicitly specify your LLM provider. Auto-detection based on API keys alone is deprecated and will be removed in a future release. See [docs/embedded-agents.md](docs/embedded-agents.md) for detailed configuration options.

#### Example MCP Configuration

```json
{
  "mcpServers": {
    "sentry": {
      "command": "npx",
      "args": ["@sentry/mcp-server"],
      "env": {
        "SENTRY_ACCESS_TOKEN": "your-token",
        "EMBEDDED_AGENT_PROVIDER": "openai",
        "OPENAI_API_KEY": "sk-..."
      }
    }
  }
}
```

If you leave the host variable unset, the CLI automatically targets the Sentry
SaaS service. Only set the override when you operate self-hosted Sentry.

For self-hosted instances that don't support Seer:

```json
{
  "mcpServers": {
    "sentry": {
      "command": "npx",
      "args": ["@sentry/mcp-server"],
      "env": {
        "SENTRY_ACCESS_TOKEN": "your-token",
        "SENTRY_HOST": "sentry.example.com",
        "MCP_DISABLE_SKILLS": "seer"
      }
    }
  }
}
```

### MCP Inspector

MCP includes an [Inspector](https://modelcontextprotocol.io/docs/tools/inspector), to easily test the service:

```shell
pnpm inspector
```

Enter the MCP server URL (<http://localhost:5173>) and hit connect. This should trigger the authentication flow for you.

Note: If you have issues with your OAuth flow when accessing the inspector on `127.0.0.1`, try using `localhost` instead by visiting `http://localhost:6274`.

## Local Development

To contribute changes, you'll need to set up your local environment:

1. **Set up environment and agent skills:**

   ```shell
   make setup-env  # Creates .env files and installs shared agent skills
   ```

   This also runs `npx @sentry/dotagents install` to install shared skills from [getsentry/skills](https://github.com/getsentry/skills) into `.agents/skills/` (symlinked into `.claude/skills` and `.cursor/skills`). If you need to update skills later, run it directly:

   ```shell
   npx @sentry/dotagents install
   ```

2. **Create an OAuth App in Sentry** (Settings => API => [Applications](https://sentry.io/settings/account/api/applications/)):

   - Homepage URL: `http://localhost:5173`
   - Authorized Redirect URIs: `http://localhost:5173/oauth/callback`
   - Note your Client ID and generate a Client secret

3. **Configure your credentials:**

   - Edit `.env` in the root directory and add your `OPENAI_API_KEY`
   - Edit `packages/mcp-cloudflare/.env` and add:
     - `SENTRY_CLIENT_ID=your_development_sentry_client_id`
     - `SENTRY_CLIENT_SECRET=your_development_sentry_client_secret`
     - `COOKIE_SECRET=my-super-secret-cookie`

4. **Start the development server:**

   ```shell
   pnpm dev
   ```

### Verify

Run the server locally to make it available at `http://localhost:5173`

```shell
pnpm dev
```

To test the local server, enter `http://localhost:5173/mcp` into Inspector and hit connect. Once you follow the prompts, you'll be able to "List Tools".

### Tests

There are three test suites included: unit tests, evaluations, and manual testing.

**Unit tests** can be run using:

```shell
pnpm test
```

**Evaluations** require a `.env` file in the project root with some config:

```shell
# .env (in project root)
OPENAI_API_KEY=  # Also required for AI-powered search tools in production
```

Note: The root `.env` file provides defaults for all packages. Individual packages can have their own `.env` files to override these defaults during development.

Once that's done you can run them using:

```shell
pnpm eval
```

**Manual testing** (preferred for testing MCP changes):

```shell
# Test with local dev server (default: http://localhost:5173)
pnpm -w run cli "who am I?"

# Test agent mode (use_sentry tool only)
pnpm -w run cli --agent "who am I?"

# Test against production
pnpm -w run cli --mcp-host=https://mcp.sentry.dev "query"

# Test with local stdio mode (requires SENTRY_ACCESS_TOKEN)
pnpm -w run cli --access-token=TOKEN "query"
```

Note: The CLI defaults to `http://localhost:5173`. Override with `--mcp-host` or set `MCP_URL` environment variable.

**Comprehensive testing playbooks:**
- **Stdio testing:** See `docs/testing-stdio.md` for complete guide on building, running, and testing the stdio implementation (IDEs, MCP Inspector)
- **Remote testing:** See `docs/testing-remote.md` for complete guide on testing the remote server (OAuth, web UI, CLI client)

## Development Notes

### Automated Code Review

This repository uses automated code review tools (like Cursor BugBot) to help identify potential issues in pull requests. These tools provide helpful feedback and suggestions, but **we do not recommend making these checks required** as the accuracy is still evolving and can produce false positives.

The automated reviews should be treated as:

- ✅ **Helpful suggestions** to consider during code review
- ✅ **Starting points** for discussion and improvement
- ❌ **Not blocking requirements** for merging PRs
- ❌ **Not replacements** for human code review

When addressing automated feedback, focus on the underlying concerns rather than strictly following every suggestion.

### Contributor Documentation

Looking to contribute or explore the full documentation map? See `CLAUDE.md` (also available as `AGENTS.md`) for contributor workflows and the complete docs index. The `docs/` folder contains the per-topic guides and tool-integrated `.md` files.
