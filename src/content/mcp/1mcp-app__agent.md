---
name: "1mcp-app/agent"
description: "A unified Model Context Protocol server implementation that aggregates multiple MCP servers into one."
description_tr: "Birden fazla MCP sunucusunu tek bir sunucuda birleştiren, tüm özellikleri bir arada sunan Model Context Protocol sunucu uygulaması."
category: "Aggregators"
repo: "1mcp-app/agent"
stars: 442
url: "https://github.com/1mcp-app/agent"
body_length: 7778
license: "Apache-2.0"
language: "TypeScript"
homepage: "https://docs.1mcp.app"
body_tr: |-
  # 1MCP

  [![NPM Version](https://img.shields.io/npm/v/@1mcp/agent)](https://www.npmjs.com/package/@1mcp/agent)
  [![NPM Downloads](https://img.shields.io/npm/dm/%401mcp%252Fagent)](https://www.npmjs.com/package/@1mcp/agent)
  [![CodeQl](https://github.com/1mcp-app/agent/actions/workflows/github-code-scanning/codeql/badge.svg)](https://github.com/1mcp-app/agent/actions/workflows/github-code-scanning/codeql)
  [![GitHub Repo stars](https://img.shields.io/github/stars/1mcp-app/agent)](https://github.com/1mcp-app/agent/stargazers)
  [![Docs](https://img.shields.io/badge/docs-docs.1mcp.app-blue)](https://docs.1mcp.app)
  [![DeepWiki](https://img.shields.io/badge/DeepWiki-AI%20Docs-purple.svg?logo=gitbook&logoColor=white)](https://deepwiki.com/1mcp-app/agent)
  [![License](https://img.shields.io/npm/l/@1mcp/agent)](https://www.npmjs.com/package/@1mcp/agent)

  1MCP birleştirilmiş MCP çalışma zamanıdır. `1mcp serve` MCP sunucularınızı bir araya getirir ve CLI modu, Codex, Claude, Cursor ve benzeri araç kullanan ajanlar için daha ince bir ajan yönelik iş akışı ekler.

  ## Neden 1MCP

  Çoğu MCP kurulumu sonunda iki tür yayılımla karşılaşır:

  - Konfigürasyon yayılımı: her istemci kendi MCP kablolama, kimlik doğrulama seçimleri ve filtreleme kurallarına ihtiyaç duyar.
  - Ajan yayılımı: otonom oturumlar bağlamın başından çok sayıda araç ve şema taşır.

  1MCP her ikisini de çözer:

  - `1mcp serve` birçok MCP sunucusunun önünde bir birleştirilmiş çalışma zamanı sağlar.
  - CLI modu ajanların `instructions`, `inspect` ve `run` ile araçları kademeli olarak keşfetmesine izin verir.
  - Statik sunucular başlangıçta yüklenebilir, şablon sunucuları ise istemci veya oturum bağlamından oluşturulur.
  - Ön ayarlar, filtreler ve talimat toplaması aynı çalışma zamanını istemciler ve projeler arasında uyarlanabilir tutar.

  | Yaklaşım               | En iyisi                             | Ödün                                                                               |
  | ---------------------- | ------------------------------------ | ---------------------------------------------------------------------------------- |
  | 1MCP CLI modu          | Codex, Claude, ajan döngüleri        | Çalışan `1mcp serve` örneği gerektirir                                             |
  | 1MCP stdio proxy       | İstemciler arasında maksimum uyumluluk | Hala `serve` bağımlı, kimlik doğrulama yapabilen HTTP istemcilerinin daha doğrudan yolu var |
  | Doğrudan streamable HTTP | MCP-native HTTP istemcileri          | Proje bağlamı yok, `.1mcprc` yok ve daha geniş araç yüzeyi doğrudan açığa çıkar   |
  | Özel proxy             | Bir kerelik uyumluluk shimler        | Keşfi, filtrelemeyi, kimlik doğrulamayı ve çalışma zamanı yaşam döngüsünü siz yönetirsiniz |

  ## Ajan Kullanıcıları İçin Hızlı Başlangıç

  Bu sayfa AI ajan kullanıcıları için optimize edilmiştir. 5 dakikalık sonuç basittir: gerçek bir `1mcp serve` çalışma zamanı başlatın, ajanınızı `cli-setup` ile bağlayın ve ardından `instructions -> inspect -> run` iş akışını doğrulayın.

  1MCP yükleyin, bir upstream sunucu ekleyin ve çalışma zamanını başlatın:

  ```bash
  npm install -g @1mcp/agent
  1mcp mcp add context7 -- npx -y @upstash/context7-mcp
  1mcp serve
  ```

  İkinci bir shell'de ajanınızı CLI moduna bağlayın:

  ```bash
  1mcp cli-setup --codex
  # veya
  1mcp cli-setup --claude --scope repo --repo-root .
  ```

  Ardından ajan iş akışını doğrulayın:

  ```bash
  # shell 1
  1mcp serve

  # shell 2
  1mcp instructions
  1mcp inspect context7
  1mcp inspect context7/query-docs
  1mcp run context7/query-docs --args '{"libraryId":"/mongodb/docs","query":"aggregation pipeline"}'
  ```

  Tam açıklamayı istiyorsanız (başarı kriterleri ve çıkış yolları ile), [Hızlı Başlangıç kılavuzunu](https://docs.1mcp.app/guide/quick-start) kullanın.

  Belirli bir ajan için yalnızca bir modu seçin. Eğer bu ajanı CLI moduna geçirirseniz, önce eski doğrudan MCP yapılandırmasını kaldırın.

  ## CLI Modu Neden Var

  CLI modu, ajan tarzı oturumlar için birincil iş akışıdır. MCP'yi backend protokolü olarak tutar ancak ajanın her adımda gördüğü şeyi daraltır:

  - `instructions` güncel çalışma zamanını ve önerilen akışı açıklar
  - `inspect` ajanın yalnızca ihtiyacı olan sunucuyu veya aracı keşfetmesine izin verir
  - `run` şema incelemesinden sonra seçilen bir aracı yürütür

  Bu, ajan döngülerine `1mcp serve` arkasındaki birleştirilmiş çalışma zamanını kaybetmeden daha küçük bir çalışma yüzeyi verir.

  ## Başka Bir Yol Seçin

  ### Stdio Proxy

  Proje bağlamını kaybetmeden en geniş istemci uyumluluğunu istediğinizde [`1mcp proxy`](https://docs.1mcp.app/commands/proxy) kullanın.

  CLI modundan sonra önerilen geri dönüş çünkü:

  - çoğu AI istemcisinin zaten desteklediği stdio taşımasını destekler
  - `.1mcprc` aracılığıyla proje bağlamını tutar
  - proje veya oturum bağlamından çözülen şablon MCP sunucularını destekler
  - bir kerelik global kurulum artı proje başına yapılandırma ile dağıtımı daha kolaylaştırır

  Doğrudan stdio modu önerilen yol değildir. Birincil olarak hata ayıklama için yararlıdır çünkü 1MCP başlangıcı, ince bağımsız stdio kurulumundan daha yavaştır.

  ### Doğrudan MCP Eki

  Doğrudan MCP eki hala, birleştirilmiş çalışma zamanıyla streamable HTTP üzerinden konuşmak isteyen istemciler için desteklenir.

  Örnekler:

  ```json
  {
    "mcpServers": {
      "1mcp": {
        "url": "http://127.0.0.1:3050/mcp?app=cursor"
      }
    }
  }
  ```

  ```bash
  claude mcp add -t http 1mcp "http://127.0.0.1:3050/mcp?app=claude-code"
  ```

  İstemciniz MCP'yi doğal olarak konuşuyorsa, proje bağlamı olmadan çalışabiliyorsa ve CLI modunu istemiyorsanız bu yolu kullanın. Codex, Claude, Cursor ve benzeri ajan döngüleri için CLI modunu birinci, `proxy` tercihini ikinci olarak tercih edin.

  ### Çalışma Zamanı Operatörleri

  Çalışma zamanının kendisini yapılandırıyorsanız veya dağıtıyorsanız daha derin dokümentasyonu kullanın:

  - [Konfigürasyon](https://docs.1mcp.app/guide/essentials/configuration)
  - [Kimlik Doğrulama](https://docs.1mcp.app/guide/advanced/authentication)
  - [Mimari](https://docs.1mcp.app/reference/architecture)

  ### Katkıda Bulunanlar

  - [Geliştirme kılavuzu](https://docs.1mcp.app/guide/development)
  - [CONTRIBUTING.md](CONTRIBUTING.md)

  ## Nasıl Çalışır

  ```mermaid
  flowchart LR
      A[User or Agent] --> B[1mcp serve]
      B --> C[Static servers loaded at startup]
      B --> D[Template servers resolved from client or session context]
      A --> E[CLI mode: instructions -> inspect -> run]
      E --> B
      F[Direct streamable HTTP client] --> B
      G[stdio-compatible client] --> H[1mcp proxy]
      H --> B
  ```

  1MCP `1mcp serve` arkasında birleştirilmiş bir çalışma zamanı olarak çalışır. Statik sunucular başlangıç yapılandırmasından hazırlanır, şablon sunucuları istemci bağlamı bilindiğinde somutlaştırılır ve çalışma zamanı başlangıç engellenmesini ve araç yüzeyi gürültüsünü azaltmak için async yüklemeyi ve lazy yüklemeyi kullanabilir. Talimat toplaması, ön ayarlar ve bildirimler bu çalışma zamanının yanında bulunur.

  ## Temel Özellikler

  - Bir `serve` işleminin arkasında birçok MCP sunucusu için birleştirilmiş çalışma zamanı
  - `1mcp instructions`, `1mcp inspect <server>`, `1mcp inspect <server>/<tool>` ve `1mcp run <server>/<tool> --args '<json>'` ile kademeli keşif için CLI modu
  - İstemci veya oturum başına çözüm için şablon sunucuları
  - Daha hızlı başlangıç ve daha dar maruz kalış için async yükleme ve lazy yükleme
  - Statik ve şablon destekli sunucular arasında talimat toplaması
  - Ön ayarlar, filtreler ve ön ayar değişikliği bildirimleri
  - Proje bağlamı ve şablon sunucu desteği ile maksimum uyumluluk için `proxy`
  - Proje bağlamına ihtiyaç duymayan yerel HTTP istemcileri için doğrudan streamable HTTP MCP erişimi

  ## Yaygın Kullanım Durumları

  - Kodlama ajanına bir kararlı çalışma zamanı verin ancak daha küçük bir çalışma yüzeyi sağlayın.
  - Aynı MCP envanterini Cursor, Claude Code, Codex ve dahili araçlar arasında paylaşın.
  - Depo, dal veya oturum başına bağlama özgü şablon sunucuları ortaya koymak.
  - Kimlik doğrulama, filtreleme, ön ayarlar ve çalışma zamanı yaşam döngüsünü merkezi olarak gerçekleştirin, bunları geçici komut dosyalarda yeniden oluşturmak yerine.

  ## Katkı / Lisans

  Katkılar hoş karşılanır. Geliştirme iş akışı için [CONTRIBUTING.md](CONTRIBUTING.md) ve Apache 2.0 lisansı için [LICENSE](LICENSE) bölümüne bakın.
---

# 1MCP

[![NPM Version](https://img.shields.io/npm/v/@1mcp/agent)](https://www.npmjs.com/package/@1mcp/agent)
[![NPM Downloads](https://img.shields.io/npm/dm/%401mcp%252Fagent)](https://www.npmjs.com/package/@1mcp/agent)
[![CodeQl](https://github.com/1mcp-app/agent/actions/workflows/github-code-scanning/codeql/badge.svg)](https://github.com/1mcp-app/agent/actions/workflows/github-code-scanning/codeql)
[![GitHub Repo stars](https://img.shields.io/github/stars/1mcp-app/agent)](https://github.com/1mcp-app/agent/stargazers)
[![Docs](https://img.shields.io/badge/docs-docs.1mcp.app-blue)](https://docs.1mcp.app)
[![DeepWiki](https://img.shields.io/badge/DeepWiki-AI%20Docs-purple.svg?logo=gitbook&logoColor=white)](https://deepwiki.com/1mcp-app/agent)
[![License](https://img.shields.io/npm/l/@1mcp/agent)](https://www.npmjs.com/package/@1mcp/agent)

1MCP is the unified MCP runtime. `1mcp serve` aggregates your MCP servers, and CLI mode adds a thinner agent-facing workflow for Codex, Claude, Cursor, and similar tool-using agents.

## Why 1MCP

Most MCP setups eventually hit two kinds of sprawl:

- Configuration sprawl: every client needs its own MCP wiring, auth choices, and filtering rules.
- Agent sprawl: autonomous sessions carry too many tools and schemas into context up front.

1MCP addresses both:

- `1mcp serve` gives you one aggregated runtime in front of many MCP servers.
- CLI mode lets agents discover tools progressively with `instructions`, `inspect`, and `run`.
- Static servers can load at startup, while template servers are created from per-client or per-session context.
- Presets, filters, and instruction aggregation keep the same runtime adaptable across clients and projects.

| Approach               | Best for                             | Tradeoff                                                                         |
| ---------------------- | ------------------------------------ | -------------------------------------------------------------------------------- |
| 1MCP CLI mode          | Codex, Claude, agent loops           | Requires a running `1mcp serve` instance                                         |
| 1MCP stdio proxy       | Maximum compatibility across clients | Still depends on `serve`, and auth-capable HTTP clients have a more direct path  |
| Direct streamable HTTP | MCP-native HTTP clients              | No project context, no `.1mcprc`, and a broader tool surface is exposed directly |
| Custom proxying        | One-off compatibility shims          | You own discovery, filtering, auth, and runtime lifecycle                        |

## Quick Start for Agent Users

This page is optimized for AI agent users. The 5-minute outcome is simple: start a real `1mcp serve` runtime, connect your agent with `cli-setup`, then verify the `instructions -> inspect -> run` workflow.

Install 1MCP, add one upstream server, and start the runtime:

```bash
npm install -g @1mcp/agent
1mcp mcp add context7 -- npx -y @upstash/context7-mcp
1mcp serve
```

In a second shell, connect your agent to CLI mode:

```bash
1mcp cli-setup --codex
# or
1mcp cli-setup --claude --scope repo --repo-root .
```

Then verify the agent workflow:

```bash
# shell 1
1mcp serve

# shell 2
1mcp instructions
1mcp inspect context7
1mcp inspect context7/query-docs
1mcp run context7/query-docs --args '{"libraryId":"/mongodb/docs","query":"aggregation pipeline"}'
```

If you want the full walkthrough (with success criteria and off-ramps), use the [Quick Start guide](https://docs.1mcp.app/guide/quick-start).

For a given agent, choose one mode only. If you switch that agent to CLI mode, remove its old direct MCP configuration first.

## Why CLI Mode Exists

CLI mode is the primary workflow for agent-style sessions. It keeps MCP as the backend protocol but narrows what the agent sees at each step:

- `instructions` explains the current runtime and recommended flow
- `inspect` lets the agent discover only the server or tool it needs
- `run` executes one selected tool after schema inspection

That gives agent loops a smaller working surface without giving up the unified runtime behind `1mcp serve`.

## Choose Another Path

### Stdio Proxy

Use [`1mcp proxy`](https://docs.1mcp.app/commands/proxy) when you want the broadest client compatibility without giving up project context.

It is the recommended fallback after CLI mode because it:

- works with the stdio transport that most AI clients already support
- keeps project context through `.1mcprc`
- supports template MCP servers resolved from project or session context
- is easier to roll out with one-time global setup plus per-project config

Direct stdio mode is not the recommended path. It is mainly useful for debugging because 1MCP startup is slower than a thin standalone stdio setup.

### Direct MCP Attachment

Direct MCP attachment is still supported for clients that want to talk to the aggregated runtime over streamable HTTP.

Examples:

```json
{
  "mcpServers": {
    "1mcp": {
      "url": "http://127.0.0.1:3050/mcp?app=cursor"
    }
  }
}
```

```bash
claude mcp add -t http 1mcp "http://127.0.0.1:3050/mcp?app=claude-code"
```

Use this path if your client already speaks MCP natively, can work without project context, and you do not want CLI mode. For Codex, Claude, Cursor, and similar agent loops, prefer CLI mode first and `proxy` second.

### Runtime Operators

Use the deeper docs if you are configuring or deploying the runtime itself:

- [Configuration](https://docs.1mcp.app/guide/essentials/configuration)
- [Authentication](https://docs.1mcp.app/guide/advanced/authentication)
- [Architecture](https://docs.1mcp.app/reference/architecture)

### Contributors

- [Development guide](https://docs.1mcp.app/guide/development)
- [CONTRIBUTING.md](CONTRIBUTING.md)

## How It Works

```mermaid
flowchart LR
    A[User or Agent] --> B[1mcp serve]
    B --> C[Static servers loaded at startup]
    B --> D[Template servers resolved from client or session context]
    A --> E[CLI mode: instructions -> inspect -> run]
    E --> B
    F[Direct streamable HTTP client] --> B
    G[stdio-compatible client] --> H[1mcp proxy]
    H --> B
```

1MCP runs as an aggregated runtime behind `1mcp serve`. Static servers are prepared from startup configuration, template servers are materialized when client context is known, and the runtime can use async loading and lazy loading to reduce startup blocking and tool-surface noise. Instruction aggregation, presets, and notifications sit alongside that runtime rather than outside it.

## Core Capabilities

- Unified runtime for many MCP servers behind one `serve` process
- CLI mode for progressive discovery with `1mcp instructions`, `1mcp inspect <server>`, `1mcp inspect <server>/<tool>`, and `1mcp run <server>/<tool> --args '<json>'`
- Template servers for per-client or per-session resolution
- Async loading and lazy loading for faster startup and narrower exposure
- Instruction aggregation across static and template-backed servers
- Presets, filters, and preset change notifications
- `proxy` for maximum compatibility with project context and template-server support
- Direct streamable HTTP MCP access for native HTTP clients that do not need project context

## Common Use Cases

- Give a coding agent one stable runtime but a smaller working surface.
- Share the same MCP inventory across Cursor, Claude Code, Codex, and internal tooling.
- Expose context-specific template servers per repo, branch, or session.
- Centralize auth, filtering, presets, and runtime lifecycle instead of rebuilding them in ad hoc scripts.

## Contributing / License

Contributions are welcome. See [CONTRIBUTING.md](CONTRIBUTING.md) for the development workflow and [LICENSE](LICENSE) for the Apache 2.0 license.
