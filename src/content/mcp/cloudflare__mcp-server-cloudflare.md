---
name: "cloudflare/mcp-server-cloudflare"
description: "Integration with Cloudflare services including Workers, KV, R2, and D1"
description_tr: "Cloudflare hizmetleriyle entegrasyon: Workers, KV, R2 ve D1 desteği."
category: "Cloud Platforms"
repo: "cloudflare/mcp-server-cloudflare"
stars: 3778
url: "https://github.com/cloudflare/mcp-server-cloudflare"
body_length: 8122
license: "Apache-2.0"
language: "TypeScript"
body_tr: |-
  # Cloudflare MCP Server

  Model Context Protocol (MCP), [yeni ve standardize edilmiş bir protokoldür](https://modelcontextprotocol.io/introduction) ve büyük dil modelleri (LLM'ler) ile harici sistemler arasında bağlam yönetimini sağlar. Bu depoda, MCP istemcisinden (örneğin Cursor, Claude) Cloudflare hizmetine bağlanmanız ve doğal dil kullanarak Cloudflare hesabınız aracılığıyla görevleri gerçekleştirmenizi sağlayan birkaç MCP sunucusu bulabilirsiniz.

  Bu MCP sunucuları, [MCP İstemcinizin](https://modelcontextprotocol.io/clients) hesabınızdan konfigürasyonları okumasına, bilgileri işlemesine, verilere dayalı öneriler sunmasına ve hatta bu önerilen değişiklikleri sizin için yapmasına izin verir. Tüm bu eylemler, uygulama geliştirme, güvenlik ve performans dahil olmak üzere Cloudflare'in pek çok hizmetinde gerçekleşebilir.

  Hem `streamable-http` transport'unu `/mcp` üzerinden hem de `sse` transport'unu (kullanımdan kaldırıldı) `/sse` üzerinden desteklerler.

  Bu depoda aşağıdaki sunucular bulunmaktadır:

  | Sunucu Adı                                                     | Açıklama                                                                                        | Sunucu URL                                     |
  | -------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ---------------------------------------------- |
  | [**Documentation server**](/apps/docs-vectorize)               | Cloudflare hakkında güncel referans bilgileri alın                                              | `https://docs.mcp.cloudflare.com/mcp`          |
  | [**Workers Bindings server**](/apps/workers-bindings)          | Depolama, AI ve compute ilkelleri ile Workers uygulamaları oluşturun                            | `https://bindings.mcp.cloudflare.com/mcp`      |
  | [**Workers Builds server**](/apps/workers-builds)              | Cloudflare Workers Builds hakkında içgörüler alın ve yönetin                                    | `https://builds.mcp.cloudflare.com/mcp`        |
  | [**Observability server**](/apps/workers-observability)        | Uygulamanızın loglarını ve analitiğini hata ayıklayın ve anlayın                                | `https://observability.mcp.cloudflare.com/mcp` |
  | [**Radar server**](/apps/radar)                                | Küresel İnternet trafiği içgörüleri, trendleri, URL taramaları ve diğer araçları alın           | `https://radar.mcp.cloudflare.com/mcp`         |
  | [**Container server**](/apps/sandbox-container)                | Sandbox geliştirme ortamı oluşturun                                                             | `https://containers.mcp.cloudflare.com/mcp`    |
  | [**Browser rendering server**](/apps/browser-rendering)        | Web sayfalarını alın, markdown'a dönüştürün ve ekran görüntüsü çekin                            | `https://browser.mcp.cloudflare.com/mcp`       |
  | [**Logpush server**](/apps/logpush)                            | Logpush iş sağlığı için hızlı özet alın                                                        | `https://logs.mcp.cloudflare.com/mcp`          |
  | [**AI Gateway server**](/apps/ai-gateway)                      | Loglarınızda arama yapın, istem ve yanıtlar hakkında ayrıntı alın                               | `https://ai-gateway.mcp.cloudflare.com/mcp`    |
  | [**Audit Logs server**](/apps/auditlogs)                       | Denetim loglarını sorgulayın ve gözden geçirilmek üzere raporlar oluşturun                     | `https://auditlogs.mcp.cloudflare.com/mcp`     |
  | [**DNS Analytics server**](/apps/dns-analytics)                | DNS performansını optimize edin ve mevcut yapıya dayalı sorunları hata ayıklayın                | `https://dns-analytics.mcp.cloudflare.com/mcp` |
  | [**Digital Experience Monitoring server**](/apps/dex-analysis) | Kuruluşunuz için kritik uygulamalar hakkında hızlı içgörü alın                                 | `https://dex.mcp.cloudflare.com/mcp`           |
  | [**Cloudflare One CASB server**](/apps/cloudflare-one-casb)    | SaaS uygulamaları için güvenlik yanlış yapılandırmalarını hızlı tespit edin                    | `https://casb.mcp.cloudflare.com/mcp`          |
  | [**GraphQL server**](/apps/graphql/)                           | Cloudflare'in GraphQL API'sini kullanarak analitik verilerini alın                              | `https://graphql.mcp.cloudflare.com/mcp`       |

  ## Hangi Cloudflare MCP sunucusunu kullanmalısınız?

  Cloudflare iki kategori MCP sunucusu sağlar:

  - **Code Mode server** (`mcp.cloudflare.com`) [`cloudflare/mcp`](https://github.com/cloudflare/mcp) içinde:
    kod yürütme yoluyla Cloudflare API'lerine geniş erişim istediğinizde en iyisidir.
  - **Domain-specific servers** (`*.mcp.cloudflare.com`) bu depoda:
    belirli bir Cloudflare ürün alanı için seçilmiş, tiplendirilmiş araçlar istediğinizde en iyisidir.

  ### Her birini ne zaman kullanmalısınız?

  **Code Mode server**'ı şu durumlarda kullanın:

  - birçok Cloudflare ürünü arasında geniş API kapsamına ihtiyacınız varsa
  - daha az sayıda genel amaçlı araç tercih ediyorsanız
  - iş akışınız kod yürütme ile daha iyi hizmet ediliyorsa

  Bu depodaki **domain-specific servers**'ları şu durumlarda kullanın:

  - belirli bir ürün alanı için özel olarak oluşturulmuş araçlar istiyorsanız
  - daha rehberi, tiplendirilmiş etkileşimler istiyorsanız
  - gözlemlenebilirlik, bindings, Radar veya Browser Rendering gibi bir Cloudflare alanı içinde çalışıyorsanız

  Code Mode server hakkında daha fazla bilgi edinin: [`cloudflare/mcp`](https://github.com/cloudflare/mcp).

  ## Uzak MCP sunucusuna herhangi bir MCP istemcisinden erişin

  MCP istemcinizin uzak MCP sunucuları için birinci sınıf desteği varsa, istemci sunucu URL'sini doğrudan arayüzü içinde kabul etme yöntemi sağlayacaktır (örneğin [Cloudflare AI Playground](https://playground.ai.cloudflare.com/))

  İstemciniz henüz uzak MCP sunucularını desteklemiyorsa, istemcinizin hangi sunuculara erişebileceğini belirtmek için mcp-remote (https://www.npmjs.com/package/mcp-remote) kullanarak ilgili konfigürasyon dosyasını ayarlamanız gerekecektir.

  ```json
  {
  	"mcpServers": {
  		"cloudflare-observability": {
  			"command": "npx",
  			"args": ["mcp-remote", "https://observability.mcp.cloudflare.com/mcp"]
  		},
  		"cloudflare-bindings": {
  			"command": "npx",
  			"args": ["mcp-remote", "https://bindings.mcp.cloudflare.com/mcp"]
  		}
  	}
  }
  ```

  ## OpenAI Responses API'sinden Cloudflare'in MCP sunucularını kullanma

  Cloudflare'in MCP sunucularından birini [OpenAI'nin responses API'si](https://openai.com/index/new-tools-and-features-in-the-responses-api/) ile kullanmak için, Responses API'sine o belirli MCP sunucusu için gerekli kapsamlara (izinlere) sahip bir API token'ı sağlamanız gerekecektir.

  Örneğin, [Browser Rendering MCP sunucusunu](https://github.com/cloudflare/mcp-server-cloudflare/tree/main/apps/browser-rendering) OpenAI ile kullanmak için Cloudflare kontrol panelinde [buradan](https://dash.cloudflare.com/profile/api-tokens) aşağıdaki izinlerle bir API token'ı oluşturun:



  ## Daha fazla Cloudflare aracına erişime ihtiyacınız var mı?

  Bu uzak MCP sunucu deposuna daha fazla işlevsellik eklemeye devam ediyoruz. Geri bildirim vermek, bir hata bildirmek veya özellik isteği sağlamak istiyorsanız, [lütfen bu depoda bir sorun açın](https://github.com/cloudflare/mcp-server-cloudflare/issues/new/choose)

  ## Sorun Giderme

  "Claude'un yanıtı kesintiye uğradı ..."

  Bu mesajı görürseniz, Claude muhtemelen bağlam uzunluğu limitine ulaştı ve yanıtın ortasında durdu. Bu, özellikle gözlemlenebilirlik sunucusu gibi birçok zincirleme araç çağrısını tetikleyen sunucularda sıkça gerçekleşir.

  Bu soruna rastlama olasılığını azaltmak için:

  - Spesifik olmaya çalışın, sorgularınızı kısa tutun.
  - Tek bir istek birden fazla araç çağrısı yapıyorsa, yanıtları kısa tutmak için bunu birkaç daha küçük araç çağrısına bölmeyi deneyin.

  ## Ücretli Özellikler

  Bazı özellikler ücretli bir Cloudflare Workers planı gerektirebilir. Cloudflare hesabınızın, kullanmayı planladığınız özellikler için gerekli abonelik düzeyine sahip olduğundan emin olun.

  ## Katkıda Bulunma

  Katkıda bulunmak ve bu sunucuyu yerel olarak çalıştırmak ilginizi çekiyorsa? Başlamak için [CONTRIBUTING.md](CONTRIBUTING.md) bölümüne bakın.
---

# Cloudflare MCP Server

Model Context Protocol (MCP) is a [new, standardized protocol](https://modelcontextprotocol.io/introduction) for managing context between large language models (LLMs) and external systems. In this repository, you can find several MCP servers allowing you to connect to Cloudflare's service from an MCP client (e.g. Cursor, Claude) and use natural language to accomplish tasks through your Cloudflare account.

These MCP servers allow your [MCP Client](https://modelcontextprotocol.io/clients) to read configurations from your account, process information, make suggestions based on data, and even make those suggested changes for you. All of these actions can happen across Cloudflare's many services including application development, security and performance.

They support both the `streamable-http` transport via `/mcp` and the `sse` transport (deprecated) via `/sse`.

The following servers are included in this repository:

| Server Name                                                    | Description                                                                                     | Server URL                                     |
| -------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| [**Documentation server**](/apps/docs-vectorize)               | Get up to date reference information on Cloudflare                                              | `https://docs.mcp.cloudflare.com/mcp`          |
| [**Workers Bindings server**](/apps/workers-bindings)          | Build Workers applications with storage, AI, and compute primitives                             | `https://bindings.mcp.cloudflare.com/mcp`      |
| [**Workers Builds server**](/apps/workers-builds)              | Get insights and manage your Cloudflare Workers Builds                                          | `https://builds.mcp.cloudflare.com/mcp`        |
| [**Observability server**](/apps/workers-observability)        | Debug and get insight into your application's logs and analytics                                | `https://observability.mcp.cloudflare.com/mcp` |
| [**Radar server**](/apps/radar)                                | Get global Internet traffic insights, trends, URL scans, and other utilities                    | `https://radar.mcp.cloudflare.com/mcp`         |
| [**Container server**](/apps/sandbox-container)                | Spin up a sandbox development environment                                                       | `https://containers.mcp.cloudflare.com/mcp`    |
| [**Browser rendering server**](/apps/browser-rendering)        | Fetch web pages, convert them to markdown and take screenshots                                  | `https://browser.mcp.cloudflare.com/mcp`       |
| [**Logpush server**](/apps/logpush)                            | Get quick summaries for Logpush job health                                                      | `https://logs.mcp.cloudflare.com/mcp`          |
| [**AI Gateway server**](/apps/ai-gateway)                      | Search your logs, get details about the prompts and responses                                   | `https://ai-gateway.mcp.cloudflare.com/mcp`    |
| [**Audit Logs server**](/apps/auditlogs)                       | Query audit logs and generate reports for review                                                | `https://auditlogs.mcp.cloudflare.com/mcp`     |
| [**DNS Analytics server**](/apps/dns-analytics)                | Optimize DNS performance and debug issues based on current set up                               | `https://dns-analytics.mcp.cloudflare.com/mcp` |
| [**Digital Experience Monitoring server**](/apps/dex-analysis) | Get quick insight on critical applications for your organization                                | `https://dex.mcp.cloudflare.com/mcp`           |
| [**Cloudflare One CASB server**](/apps/cloudflare-one-casb)    | Quickly identify any security misconfigurations for SaaS applications to safeguard users & data | `https://casb.mcp.cloudflare.com/mcp`          |
| [**GraphQL server**](/apps/graphql/)                           | Get analytics data using Cloudflare’s GraphQL API                                               | `https://graphql.mcp.cloudflare.com/mcp`       |

## Which Cloudflare MCP server should you use?

Cloudflare provides two categories of MCP servers:

- **Code Mode server** (`mcp.cloudflare.com`) in [`cloudflare/mcp`](https://github.com/cloudflare/mcp):
  best when you want broad access across Cloudflare's APIs through code execution.
- **Domain-specific servers** (`*.mcp.cloudflare.com`) in this repository:
  best when you want curated, typed tools for a specific Cloudflare product area.

### When should you use each?

Use the **Code Mode server** when:

- you need broad API coverage across many Cloudflare products
- you prefer a smaller set of general-purpose tools
- your workflow is better served by code execution

Use the **domain-specific servers** in this repository when:

- you want purpose-built tools for a specific product area
- you want more guided, typed interactions
- you are working primarily within one Cloudflare domain such as observability, bindings, Radar, or Browser Rendering

Learn more about the Code Mode server here: [`cloudflare/mcp`](https://github.com/cloudflare/mcp).

## Access the remote MCP server from any MCP client

If your MCP client has first class support for remote MCP servers, the client will provide a way to accept the server URL directly within its interface (e.g. [Cloudflare AI Playground](https://playground.ai.cloudflare.com/))

If your client does not yet support remote MCP servers, you will need to set up its respective configuration file using mcp-remote (https://www.npmjs.com/package/mcp-remote) to specify which servers your client can access.

```json
{
	"mcpServers": {
		"cloudflare-observability": {
			"command": "npx",
			"args": ["mcp-remote", "https://observability.mcp.cloudflare.com/mcp"]
		},
		"cloudflare-bindings": {
			"command": "npx",
			"args": ["mcp-remote", "https://bindings.mcp.cloudflare.com/mcp"]
		}
	}
}
```

## Using Cloudflare's MCP servers from the OpenAI Responses API

To use one of Cloudflare's MCP servers with [OpenAI's responses API](https://openai.com/index/new-tools-and-features-in-the-responses-api/), you will need to provide the Responses API with an API token that has the scopes (permissions) required for that particular MCP server.

For example, to use the [Browser Rendering MCP server](https://github.com/cloudflare/mcp-server-cloudflare/tree/main/apps/browser-rendering) with OpenAI, create an API token in the Cloudflare dashboard [here](https://dash.cloudflare.com/profile/api-tokens), with the following permissions:



## Need access to more Cloudflare tools?

We're continuing to add more functionality to this remote MCP server repo. If you'd like to leave feedback, file a bug or provide a feature request, [please open an issue](https://github.com/cloudflare/mcp-server-cloudflare/issues/new/choose) on this repository

## Troubleshooting

"Claude's response was interrupted ... "

If you see this message, Claude likely hit its context-length limit and stopped mid-reply. This happens most often on servers that trigger many chained tool calls such as the observability server.

To reduce the chance of running in to this issue:

- Try to be specific, keep your queries concise.
- If a single request calls multiple tools, try to to break it into several smaller tool calls to keep the responses short.

## Paid Features

Some features may require a paid Cloudflare Workers plan. Ensure your Cloudflare account has the necessary subscription level for the features you intend to use.

## Contributing

Interested in contributing, and running this server locally? See [CONTRIBUTING.md](CONTRIBUTING.md) to get started.
