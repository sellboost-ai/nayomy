---
name: "PrefectHQ/fastmcp"
description: "A high-level framework for building MCP servers in Python"
category: "Other Tools and Integrations"
repo: "PrefectHQ/fastmcp"
stars: 25331
url: "https://github.com/PrefectHQ/fastmcp"
body_length: 6920
license: "Apache-2.0"
language: "Python"
homepage: "https://gofastmcp.com"
body_tr: |-
  <div align="center">

  <!-- omit in toc -->

  <picture>
    <source width="550" media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/PrefectHQ/fastmcp/main/docs/assets/brand/f-watercolor-waves-4-dark.png">
    <source width="550" media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/PrefectHQ/fastmcp/main/docs/assets/brand/f-watercolor-waves-4.png">
    
  </picture>

  # FastMCP 🚀

  <strong>Hızlı hareket et ve şeyler yap.</strong>

  *Yapımında 💙 [Prefect](https://www.prefect.io/)*

  [![Docs](https://img.shields.io/badge/docs-gofastmcp.com-blue)](https://gofastmcp.com)
  [![Discord](https://img.shields.io/badge/community-discord-5865F2?logo=discord&logoColor=white)](https://discord.gg/uu8dJCgttd)
  [![PyPI - Version](https://img.shields.io/pypi/v/fastmcp.svg)](https://pypi.org/project/fastmcp)
  [![Tests](https://github.com/PrefectHQ/fastmcp/actions/workflows/run-tests.yml/badge.svg)](https://github.com/PrefectHQ/fastmcp/actions/workflows/run-tests.yml)
  [![License](https://img.shields.io/github/license/PrefectHQ/fastmcp.svg)](https://github.com/PrefectHQ/fastmcp/blob/main/LICENSE)

  <a href="https://trendshift.io/repositories/13266" target="_blank"></a>
  </div>

  ---

  [Model Context Protocol](https://modelcontextprotocol.io/) (MCP) LLM'leri araçlara ve verilere bağlar. FastMCP, prototipten üretime geçmek için ihtiyacınız olan her şeyi sağlar:

  ```python
  from fastmcp import FastMCP

  mcp = FastMCP("Demo 🚀")

  @mcp.tool
  def add(a: int, b: int) -> int:
      """Add two numbers"""
      return a + b

  if __name__ == "__main__":
      mcp.run()
  ```

  ## FastMCP Neden Kullanmalı

  Etkili bir MCP uygulaması geliştirmek göründüğünden daha zordur. FastMCP tüm işleri halleder. Bir araçı Python fonksiyonuyla tanımlayın ve şema, doğrulama ve dokümantasyon otomatik olarak oluşturulur. Bir URL ile sunucuya bağlanın ve transport müzakeresi, kimlik doğrulama ve protokol yaşam döngüsü sizin için yönetilir. Siz mantığınıza odaklanın, MCP kısmı işe yarar: **FastMCP ile en iyi uygulamalar yerleşiktir.**

  **Bu yüzden FastMCP, MCP ile çalışmak için standart çerçevedir.** FastMCP 1.0, 2024 yılında resmi MCP Python SDK'sına dahil edilmiştir. Günümüzde, aktif olarak bakımı yapılan standalone proje günde bir milyon kez indirilmekte ve tüm dillerdeki MCP sunucularının %70'i FastMCP'nin bir versiyonu tarafından desteklenmektedir.

  FastMCP üç sütun üzerine kuruludur:

  <table>
  <tr>
  <td align="center" valign="top" width="33%">
  <a href="https://gofastmcp.com/servers/server">

  <br /><strong>Sunucular</strong>
  </a>
  <br />Araçları, kaynakları ve istemleri LLM'lere sunun.
  </td>
  <td align="center" valign="top" width="33%">
  <a href="https://gofastmcp.com/apps/overview">

  <br /><strong>Uygulamalar</strong>
  </a>
  <br />Araçlarınıza konuşma içinde doğrudan oluşturulan etkileşimli UI'ler verin.
  </td>
  <td align="center" valign="top" width="33%">
  <a href="https://gofastmcp.com/clients/client">

  <br /><strong>İstemciler</strong>
  </a>
  <br />Herhangi bir MCP sunucusuna bağlanın — yerel veya uzak, programatik veya CLI.
  </td>
  </tr>
  </table>

  **[Sunucular](https://gofastmcp.com/servers/server)** Python fonksiyonlarınızı MCP uyumlu araçlar, kaynaklar ve istemler içinde sarar. **[İstemciler](https://gofastmcp.com/clients/client)** tam protokol desteğiyle herhangi bir sunucuya bağlanır. **[Uygulamalar](https://gofastmcp.com/apps/overview)** da araçlarınıza konuşma içinde doğrudan oluşturulan etkileşimli UI'ler sağlar.

  İnşa etmeye hazır mısınız? [Kurulum rehberi](https://gofastmcp.com/getting-started/installation) ile başlayın veya doğrudan [hızlı başlangıç](https://gofastmcp.com/getting-started/quickstart) bölümüne atlayın.

  ## FastMCP'yi Horizon ile üretimde çalıştırın

  FastMCP, MCP sunucuları geliştirmenin standart yoludur. **[Prefect Horizon](https://www.prefect.io/horizon?utm_source=github&utm_medium=readme&utm_campaign=readme_horizon&utm_content=readme_body)** bunları güvenli bir şekilde çalıştırmak için kurumsal MCP gateway'idir.

  FastMCP ekibi tarafından built, Horizon dünyanın en popüler MCP çerçevesini sevk ettiğimizde öğrendiğimiz en iyi uygulamaları paketler.

  FastMCP sunucularını GitHub'dan branch önizlemeleri ve anında rollback ile yayınlayın. Şirketinizin kullandığı her MCP'nin özel bir kayıt defteri oluşturun. SSO ve tool seviyesi RBAC ile erişimi güvence altına alın. MCP yığının tamamı arasında denetim günlükleri, gözlemlenebilirlik ve yönetim elde edin. Onaylanan araçları takımlar ve ajanlar için amaçlı uç noktalar içinde yeniden karıştırın.

  FastMCP ile başlayın. [Horizon ile ölçeklendir →](https://www.prefect.io/horizon?utm_source=github&utm_medium=readme&utm_campaign=readme_horizon&utm_content=readme_cta)

  ## Kurulum

  FastMCP'yi [uv](https://docs.astral.sh/uv/) ile kurmanızı tavsiye ediyoruz:

  ```bash
  uv pip install fastmcp
  ```

  Doğrulama ve güncelleme dahil olmak üzere tam kurulum talimatları için [**Kurulum Rehberi**](https://gofastmcp.com/getting-started/installation) bölümüne bakın.

  **Yükseltiliyor musunuz?** Biz rehberlerimiz var:
  - [FastMCP v2'den yükseltme](https://gofastmcp.com/getting-started/upgrading/from-fastmcp-2)
  - [MCP Python SDK'dan yükseltme](https://gofastmcp.com/getting-started/upgrading/from-mcp-sdk)
  - [Düşük seviye SDK'dan yükseltme](https://gofastmcp.com/getting-started/upgrading/from-low-level-sdk)

  > [!NOTE]
  > FastMCP 3.2 veya öncesinden `pip` yükseltmesinden sonra `import fastmcp` başarısız olursa, `pip install --force-reinstall fastmcp` çalıştırın. Bunun neden olduğunu öğrenmek için [Sorun Giderme](https://gofastmcp.com/getting-started/installation#troubleshooting) bölümüne bakın (`uv` etkilenmez).

  ## 📚 Dokümantasyon

  FastMCP'nin tam dokümantasyonu **[gofastmcp.com](https://gofastmcp.com)** adresinde mevcuttur ve detaylı rehberler, API referansları ve ileri desenleri içerir.

  Dokümantasyon ayrıca [llms.txt formatında](https://llmstxt.org/) da mevcuttur, bu LLM'lerin kolayca tüketebileceği basit bir markdown standardıdır:

  - [`llms.txt`](https://gofastmcp.com/llms.txt) temelde bir site haritası olup, dokümantasyondaki tüm sayfaları listeler.
  - [`llms-full.txt`](https://gofastmcp.com/llms-full.txt) tüm dokümantasyonu içerir. Bunun LLM'nizin bağlam penceresini aşabileceğini unutmayın.

  **Topluluk:** Diğer FastMCP geliştiricileriyle bağlantı kurmak ve yaptıklarınızı paylaşmak için [Discord sunucumuza](https://discord.gg/uu8dJCgttd) katılın.

  ## Katkı Sağlamak

  Katkıları bekliyoruz! Kurulum talimatları, test gereksinimleri ve PR yönergeleri için [Katkı Rehberi](https://gofastmcp.com/development/contributing) bölümüne bakın.
---

<div align="center">

<!-- omit in toc -->

<picture>
  <source width="550" media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/PrefectHQ/fastmcp/main/docs/assets/brand/f-watercolor-waves-4-dark.png">
  <source width="550" media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/PrefectHQ/fastmcp/main/docs/assets/brand/f-watercolor-waves-4.png">
  
</picture>

# FastMCP 🚀

<strong>Move fast and make things.</strong>

*Made with 💙 by [Prefect](https://www.prefect.io/)*

[![Docs](https://img.shields.io/badge/docs-gofastmcp.com-blue)](https://gofastmcp.com)
[![Discord](https://img.shields.io/badge/community-discord-5865F2?logo=discord&logoColor=white)](https://discord.gg/uu8dJCgttd)
[![PyPI - Version](https://img.shields.io/pypi/v/fastmcp.svg)](https://pypi.org/project/fastmcp)
[![Tests](https://github.com/PrefectHQ/fastmcp/actions/workflows/run-tests.yml/badge.svg)](https://github.com/PrefectHQ/fastmcp/actions/workflows/run-tests.yml)
[![License](https://img.shields.io/github/license/PrefectHQ/fastmcp.svg)](https://github.com/PrefectHQ/fastmcp/blob/main/LICENSE)

<a href="https://trendshift.io/repositories/13266" target="_blank"></a>
</div>

---

The [Model Context Protocol](https://modelcontextprotocol.io/) (MCP) connects LLMs to tools and data. FastMCP gives you everything you need to go from prototype to production:

```python
from fastmcp import FastMCP

mcp = FastMCP("Demo 🚀")

@mcp.tool
def add(a: int, b: int) -> int:
    """Add two numbers"""
    return a + b

if __name__ == "__main__":
    mcp.run()
```

## Why FastMCP

Building an effective MCP application is harder than it looks. FastMCP handles all of it. Declare a tool with a Python function, and the schema, validation, and documentation are generated automatically. Connect to a server with a URL, and transport negotiation, authentication, and protocol lifecycle are managed for you. You focus on your logic, and the MCP part just works: **with FastMCP, best practices are built in.**

**That's why FastMCP is the standard framework for working with MCP.** FastMCP 1.0 was incorporated into the official MCP Python SDK in 2024. Today, the actively maintained standalone project is downloaded a million times a day, and some version of FastMCP powers 70% of MCP servers across all languages.

FastMCP has three pillars:

<table>
<tr>
<td align="center" valign="top" width="33%">
<a href="https://gofastmcp.com/servers/server">

<br /><strong>Servers</strong>
</a>
<br />Expose tools, resources, and prompts to LLMs.
</td>
<td align="center" valign="top" width="33%">
<a href="https://gofastmcp.com/apps/overview">

<br /><strong>Apps</strong>
</a>
<br />Give your tools interactive UIs rendered directly in the conversation.
</td>
<td align="center" valign="top" width="33%">
<a href="https://gofastmcp.com/clients/client">

<br /><strong>Clients</strong>
</a>
<br />Connect to any MCP server — local or remote, programmatic or CLI.
</td>
</tr>
</table>

**[Servers](https://gofastmcp.com/servers/server)** wrap your Python functions into MCP-compliant tools, resources, and prompts. **[Clients](https://gofastmcp.com/clients/client)** connect to any server with full protocol support. And **[Apps](https://gofastmcp.com/apps/overview)** give your tools interactive UIs rendered directly in the conversation.

Ready to build? Start with the [installation guide](https://gofastmcp.com/getting-started/installation) or jump straight to the [quickstart](https://gofastmcp.com/getting-started/quickstart).

## Run FastMCP in production with Horizon

FastMCP is the standard way to build MCP servers. **[Prefect Horizon](https://www.prefect.io/horizon?utm_source=github&utm_medium=readme&utm_campaign=readme_horizon&utm_content=readme_body)** is the enterprise MCP gateway for running them safely.

Built by the FastMCP team, Horizon packages the best practices we've learned shipping the world's most popular MCP framework.

Deploy FastMCP servers from GitHub with branch previews and instant rollback. Create a private registry of every MCP your company uses. Secure access with SSO and tool-level RBAC. Get audit logs, observability, and governance across your MCP stack. Remix approved tools into purpose-built endpoints for teams and agents.

Start with FastMCP. [Scale with Horizon →](https://www.prefect.io/horizon?utm_source=github&utm_medium=readme&utm_campaign=readme_horizon&utm_content=readme_cta)

## Installation

We recommend installing FastMCP with [uv](https://docs.astral.sh/uv/):

```bash
uv pip install fastmcp
```

For full installation instructions, including verification and upgrading, see the [**Installation Guide**](https://gofastmcp.com/getting-started/installation).

**Upgrading?** We have guides for:
- [Upgrading from FastMCP v2](https://gofastmcp.com/getting-started/upgrading/from-fastmcp-2)
- [Upgrading from the MCP Python SDK](https://gofastmcp.com/getting-started/upgrading/from-mcp-sdk)
- [Upgrading from the low-level SDK](https://gofastmcp.com/getting-started/upgrading/from-low-level-sdk)

> [!NOTE]
> If `import fastmcp` fails right after a `pip` upgrade from FastMCP 3.2 or earlier, run `pip install --force-reinstall fastmcp`. See [Troubleshooting](https://gofastmcp.com/getting-started/installation#troubleshooting) for why this happens (`uv` is unaffected).

## 📚 Documentation

FastMCP's complete documentation is available at **[gofastmcp.com](https://gofastmcp.com)**, including detailed guides, API references, and advanced patterns.

Documentation is also available in [llms.txt format](https://llmstxt.org/), which is a simple markdown standard that LLMs can consume easily:

- [`llms.txt`](https://gofastmcp.com/llms.txt) is essentially a sitemap, listing all the pages in the documentation.
- [`llms-full.txt`](https://gofastmcp.com/llms-full.txt) contains the entire documentation. Note this may exceed the context window of your LLM.

**Community:** Join our [Discord server](https://discord.gg/uu8dJCgttd) to connect with other FastMCP developers and share what you're building.

## Contributing

We welcome contributions! See the [Contributing Guide](https://gofastmcp.com/development/contributing) for setup instructions, testing requirements, and PR guidelines.
