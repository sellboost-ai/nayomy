---
name: "K-Dense-AI/claude-skills-mcp"
description: "Intelligent search capabilities to let every model and client use Claude Agent Skills like native."
description_tr: "Claude Agent Skills'i her model ve istemci için yerel özellik gibi kullanabilmenizi sağlayan akıllı arama özellikleri."
category: "Aggregators"
repo: "K-Dense-AI/claude-skills-mcp"
stars: 387
url: "https://github.com/K-Dense-AI/claude-skills-mcp"
body_length: 9287
license: "MIT"
language: "Python"
body_tr: |-
  # Claude Skills MCP Server

  > **Bu MCP sunucusu artık barındırılmamakta veya bakımı yapılmamaktadır.** Agent Skills tüm başlıca AI platformları tarafından yerel olarak benimsenmiştir — Cursor, Windsurf, Claude Code, Copilot ve diğerleri artık skills'i kutudan çıktığı gibi desteklemektedir. Skills'i kodlama asistanınıza teslim etmek için artık bir MCP köprüsüne gerek yoktur. Bu projeyi kullanan ve katkıda bulunan herkese teşekkür ederiz!

  ---

  [![Tests](https://github.com/K-Dense-AI/claude-skills-mcp/actions/workflows/test.yml/badge.svg)](https://github.com/K-Dense-AI/claude-skills-mcp/actions/workflows/test.yml)
  [![Python 3.12](https://img.shields.io/badge/python-3.12-blue.svg)](https://www.python.org/downloads/)
  [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
  [![Code style: ruff](https://img.shields.io/badge/code%20style-ruff-000000.svg)](https://github.com/astral-sh/ruff)
  [![PyPI version](https://badge.fury.io/py/claude-skills-mcp.svg?icon=si%3Apython)](https://badge.fury.io/py/claude-skills-mcp)

  > **[Claude'un güçlü yeni Skills sistemini](https://www.anthropic.com/news/skills) HERHANGİ bir AI modeli veya kodlama asistanıyla kullanın** — Cursor, Codex, GPT-5, Gemini ve diğerleriyle. Bu MCP sunucusu Anthropic'in Agent Skills framework'ünü Model Context Protocol aracılığıyla tüm AI ekosistemine getirir.

  Vektör embeddings ve semantik benzerlik kullanarak ilgili Claude Agent Skills'i keşfetmek için akıllı arama yetenekleri sağlayan bir Model Context Protocol (MCP) sunucusu. Bu sunucu, Anthropic'in [Agent Skills mühendislik bloğunda](https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills) açıklanan aynı kademeli açıklama mimarisini uygulayarak, özelleştirilmiş skills'i herhangi bir MCP uyumlu AI uygulamasına sunar.

  **[K-Dense AI](https://k-dense.ai) tarafından yapılan açık kaynaklı bir proje** — bilimsel araştırma için özerk AI bilimcilerinin yaratıcıları.

  Bu MCP sunucusu, herhangi bir MCP uyumlu AI asistanının curated [Claude Scientific Skills](https://github.com/K-Dense-AI/claude-scientific-skills) deposu ve [Official Claude Skills](https://github.com/anthropics/skills) gibi diğer skill kaynakları içinden akıllıca skills aramasını ve almasını sağlar.

  <a href="https://cursor.com/en-US/install-mcp?name=claude-skills-mcp&config=eyJjb21tYW5kIjoidXZ4IGNsYXVkZS1za2lsbHMtbWNwIn0%3D">
    <picture>
      <source srcset="https://cursor.com/deeplink/mcp-install-light.svg" media="(prefers-color-scheme: dark)">
      <source srcset="https://cursor.com/deeplink/mcp-install-dark.svg" media="(prefers-color-scheme: light)">
      
    </picture>
  </a>

  ## Demo

  ![Claude Skills MCP in Action](https://raw.githubusercontent.com/K-Dense-AI/claude-skills-mcp/HEAD/docs/demo.gif)

  *Cursor'da Claude Agent Skills'in semantik araması ve kademeli yüklenmesi*

  ## Öne Çıkanlar

  - **İki Paket Mimarisi**: Hafif frontend (~15 MB) anlık başlar; backend (~250 MB) arka planda indirilir
  - **Cursor Zaman Aşımı Yok**: Frontend <5 saniyede yanıt verir, zaman aşımı sorununu çözer
  - **Semantik Arama**: Akıllı skill keşfi için vektör embeddings
  - **Kademeli Açıklama**: Çok seviyeli skill yükleme (metadata → tam içerik → dosyalar)
  - **Sıfır Yapılandırma**: Curated skills ile kutudan çıktığı gibi çalışır
  - **Çoklu Kaynak**: GitHub depoları ve yerel dizinlerden yükle
  - **Hızlı ve Yerel**: API key'e gerek yok, otomatik GitHub önbelleği ile
  - **Yapılandırılabilir**: Kaynakları, modelleri ve içerik limitlerini özelleştir

  ## Hızlı Başlangıç

  ### Cursor Kullanıcıları İçin

  [Cursor Directory](https://cursor.directory/mcp/claude-skills-mcp) aracılığıyla ekle veya Cursor yapılandırmanıza ekle (`~/.cursor/mcp.json`):

  ```json
  {
    "mcpServers": {
      "claude-skills": {
        "command": "uvx",
        "args": ["claude-skills-mcp"]
      }
    }
  }
  ```

  Frontend anlık başlar ve tools'u gösterir, arka planda backend'i otomatik olarak indirir ve başlatır (~60-120s RAG bağımlılıkları nedeniyle, tek sefer). Sonraki kullanımlar anlıktır.

  ### uvx Kullanarak (Standalone)

  Sunucuyu varsayılan yapılandırmayla çalıştır:

  ```bash
  uvx claude-skills-mcp
  ```

  Bu hafif frontend'i başlatır ve otomatik olarak backend'i indirir, Anthropic'in resmi skills deposu ve K-Dense AI'ın bilimsel skills koleksiyonundan ~90 skill yükler.

  ### Özel Yapılandırmayla

  ```bash
  # 1. Varsayılan yapılandırmayı yazdır
  uvx claude-skills-mcp --example-config > config.json

  # 2. config.json dosyasını ihtiyaçlarınıza göre düzenle

  # 3. Özel yapılandırmayla çalıştır
  uvx claude-skills-mcp --config config.json
  ```

  ## Belgelendirme

  - **[Başlangıç Kılavuzu](docs/getting-started.md)** - Kurulum, Cursor kurulumu, CLI kullanımı ve sorun giderme
  - **[Mimari Kılavuz](docs/architecture.md)** - İki paket tasarımı, veri akışı ve bileşenler
  - **[API Belgelendirmesi](docs/api.md)** - Tool parametreleri, örnekler ve en iyi uygulamalar
  - **[Kullanım Örnekleri](docs/usage.md)** - Gelişmiş yapılandırma, gerçek dünya kullanım senaryoları ve özel skill oluşturma
  - **[Test Kılavuzu](docs/testing.md)** - Kapsamlı test talimatları, CI/CD ve kapsam analizi

  ## MCP Tools

  Sunucu Claude Agent Skills ile çalışmak için üç tool sağlar:

  1. **`find_helpful_skills`** - Görev açıklamasına dayalı ilgili skills için semantik arama
  2. **`read_skill_document`** - Skills'ten belirli dosyaları al (scriptler, veriler, referanslar)  
  3. **`list_skills`** - Tüm yüklenen skills'in tam envanterini görüntüle (keşif/hata ayıklama için)

  Ayrıntılı parametreler, örnekler ve en iyi uygulamalar için [API Belgelendirmesi](docs/api.md) başvurusuna bakın.

  ## Mimari (v1.0.0)

  Sistem optimal performans için **iki paket mimarisi** kullanır:

  - **Frontend** ([`claude-skills-mcp`](https://pypi.org/project/claude-skills-mcp/)): Hafif proxy (~15 MB)
    - Anlık başlar (<5 saniye) ✅ **Cursor zaman aşımı yok!**
    - İlk kullanımda backend'i otomatik indirir
    - Cursor için MCP sunucusu (stdio)
    
  - **Backend** ([`claude-skills-mcp-backend`](https://pypi.org/project/claude-skills-mcp-backend/)): Ağır sunucu (~250 MB)
    - PyTorch & sentence-transformers ile vektör araması
    - MCP sunucusu (akışlı HTTP)
    - Frontend tarafından otomatik yüklü VEYA bağımsız olarak dağıtılabilir

  **Faydalar:**
  - ✅ Cursor zaman aşımı sorununu çözer (frontend anlık başlar)
  - ✅ Aynı basit kullanıcı deneyimi (`uvx claude-skills-mcp`)
  - ✅ Backend arka planda indirilir (Cursor'u engellemez)
  - ✅ Uzak barındırılan backend'e bağlanabilir (yerel kurulum gerekli değil)

  Detaylı tasarım ve veri akışı için [Mimari Kılavuzu](docs/architecture.md) başvurusuna bakın.

  ## Skill Kaynakları

  **GitHub depoları** (doğrudan skills veya Claude Code eklentileri) veya **yerel dizinlerden** skills yükle.

  Varsayılan olarak aşağıdakilerden yükler:
  - [Official Anthropic Skills](https://github.com/anthropics/skills) - Belgeler, sunumlar, web yapıtları ve daha fazlası için 15 çeşitli skill
  - [K-Dense AI Scientific Skills](https://github.com/K-Dense-AI/claude-scientific-skills) - Biyoinformatik, kimyainformatik ve bilimsel analiz için 78+ özelleştirilmiş skill
  - Yerel dizin `~/.claude/skills` (eğer varsa)

  ## Katkıda Bulunma

  Katkılar memnuniyetle karşılanır! Katkıda bulunmak için:

  1. **Sorunları bildirin**: Hatalar veya feature istekleri için [bir issue açın](https://github.com/K-Dense-AI/claude-skills-mcp/issues)
  2. **PR gönderin**: Fork yapın, bir feature branch oluşturun, testlerin geçtiğinden emin olun (`uv run pytest tests/`), sonra gönderin
  3. **Kod stili**: Commit etmeden önce `uvx ruff check src/` çalıştırın
  4. **Test ekleyin**: Yeni özellikler testler içermelidir

  ### Geliştirme

  **Versiyon Yönetimi**: Bu monorepo merkezi bir versiyon sistemi kullanır:
  - Versiyonu çıkarmak için repo köküne `VERSION` dosyasını düzenle
  - Tüm referansları senkronize etmek için `python3 scripts/sync-version.py` çalıştır (veya kontrol etmek için `--check` kullan)
  - `scripts/build-all.sh` script'i derleme öncesinde versiyonları otomatik olarak senkronize eder

  Sorular için [orion.li@k-dense.ai](mailto:orion.li@k-dense.ai) adresine e-posta gönderin

  ## Topluluğumuza Katılın! 🚀

  **Seni Slack topluluğumuzda görmek istiyoruz!** Diğer kullanıcılarla bağlantı kur, ipuçları ve hileleri paylaş, skills hakkında yardım al ve yeni özellikler ve güncellemeler hakkında ilk öğren.

  👉 **[Slack'te K-Dense Topluluğuna Katıl](https://join.slack.com/t/k-densecommunity/shared_invite/zt-3iajtyls1-EwmkwIZk0g_o74311Tkf5g)** 👈

  İster özel skills oluşturuyor, ister farklı AI modelleriyle entegre ediyor, ister Agent Skills'in olanaklarını keşfediyor olsan, topluluğumuz seni desteklemek için burada!

  ## Daha Fazla Bilgi

  - [Agent Skills Belgelendirmesi](https://docs.claude.com/en/docs/claude-code/skills) - Skills formatı üzerinde resmi Anthropic belgelendirmesi
  - [Agent Skills Blog Yazısı](https://www.anthropic.com/news/skills) - Duyuru ve genel bakış
  - [Model Context Protocol](https://modelcontextprotocol.io/) - Platformlar arası Skills'i mümkün kılan protokol
  - [Mühendislik Bloğu: Ajanları Gerçek Dünya İçin Donatma](https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills) - Skills mimarisi üzerine teknik derinlemesine inceleme

  ## Lisans

  Bu proje [Apache License 2.0](LICENSE) altında lisanslanmıştır.

  Telif Hakkı 2025 K-Dense AI (https://k-dense.ai)

  ## Star Geçmişi

  [![Star History Chart](https://api.star-history.com/svg?repos=K-Dense-AI/claude-skills-mcp&type=date&legend=top-left)](https://www.star-history.com/#K-Dense-AI/claude-skills-mcp&type=date&legend=top-left)
---

# Claude Skills MCP Server

> **This MCP server is no longer hosted or maintained.** Agent Skills have been natively adopted by all major AI platforms — Cursor, Windsurf, Claude Code, Copilot, and others now support skills out of the box. There is no longer a need for an MCP bridge to deliver skills to your coding assistant. Thank you to everyone who used and contributed to this project!

---

[![Tests](https://github.com/K-Dense-AI/claude-skills-mcp/actions/workflows/test.yml/badge.svg)](https://github.com/K-Dense-AI/claude-skills-mcp/actions/workflows/test.yml)
[![Python 3.12](https://img.shields.io/badge/python-3.12-blue.svg)](https://www.python.org/downloads/)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![Code style: ruff](https://img.shields.io/badge/code%20style-ruff-000000.svg)](https://github.com/astral-sh/ruff)
[![PyPI version](https://badge.fury.io/py/claude-skills-mcp.svg?icon=si%3Apython)](https://badge.fury.io/py/claude-skills-mcp)

> **Use [Claude's powerful new Skills system](https://www.anthropic.com/news/skills) with ANY AI model or coding assistant** - including Cursor, Codex, GPT-5, Gemini, and more. This MCP server brings Anthropic's Agent Skills framework to the entire AI ecosystem through the Model Context Protocol.

A Model Context Protocol (MCP) server that provides intelligent search capabilities for discovering relevant Claude Agent Skills using vector embeddings and semantic similarity. This server implements the same progressive disclosure architecture that Anthropic describes in their [Agent Skills engineering blog](https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills), making specialized skills available to any MCP-compatible AI application.

**An open-source project by [K-Dense AI](https://k-dense.ai)** - creators of autonomous AI scientists for scientific research.

This MCP server enables any MCP-compatible AI assistant to intelligently search and retrieve skills from our curated [Claude Scientific Skills](https://github.com/K-Dense-AI/claude-scientific-skills) repository and other skill sources like the [Official Claude Skills](https://github.com/anthropics/skills).

<a href="https://cursor.com/en-US/install-mcp?name=claude-skills-mcp&config=eyJjb21tYW5kIjoidXZ4IGNsYXVkZS1za2lsbHMtbWNwIn0%3D">
  <picture>
    <source srcset="https://cursor.com/deeplink/mcp-install-light.svg" media="(prefers-color-scheme: dark)">
    <source srcset="https://cursor.com/deeplink/mcp-install-dark.svg" media="(prefers-color-scheme: light)">
    
  </picture>
</a>

## Demo

![Claude Skills MCP in Action](https://raw.githubusercontent.com/K-Dense-AI/claude-skills-mcp/HEAD/docs/demo.gif)

*Semantic search and progressive loading of Claude Agent Skills in Cursor*

## Highlights

- **Two-Package Architecture**: Lightweight frontend (~15 MB) starts instantly; backend (~250 MB) downloads in background
- **No Cursor Timeout**: Frontend responds in <5 seconds, solving the timeout issue
- **Semantic Search**: Vector embeddings for intelligent skill discovery
- **Progressive Disclosure**: Multi-level skill loading (metadata → full content → files)
- **Zero Configuration**: Works out of the box with curated skills
- **Multi-Source**: Load from GitHub repositories and local directories
- **Fast & Local**: No API keys needed, with automatic GitHub caching
- **Configurable**: Customize sources, models, and content limits

## Quick Start

### For Cursor Users

Add through the [Cursor Directory](https://cursor.directory/mcp/claude-skills-mcp), or add to your Cursor config (`~/.cursor/mcp.json`):

```json
{
  "mcpServers": {
    "claude-skills": {
      "command": "uvx",
      "args": ["claude-skills-mcp"]
    }
  }
}
```

The frontend starts instantly and displays tools, automatically downloading and starting the backend in the background (~60-120s due to RAG dependencies, one-time). Subsequent uses are instant.

### Using uvx (Standalone)

Run the server with default configuration:

```bash
uvx claude-skills-mcp
```

This starts the lightweight frontend which auto-downloads the backend and loads ~90 skills from Anthropic's official skills repository and K-Dense AI's scientific skills collection.

### With Custom Configuration

```bash
# 1. Print the default configuration
uvx claude-skills-mcp --example-config > config.json

# 2. Edit config.json to your needs

# 3. Run with your custom configuration
uvx claude-skills-mcp --config config.json
```

## Documentation

- **[Getting Started](docs/getting-started.md)** - Installation, Cursor setup, CLI usage, and troubleshooting
- **[Architecture Guide](docs/architecture.md)** - Two-package design, data flow, and components
- **[API Documentation](docs/api.md)** - Tool parameters, examples, and best practices
- **[Usage Examples](docs/usage.md)** - Advanced configuration, real-world use cases, and custom skill creation
- **[Testing Guide](docs/testing.md)** - Complete testing instructions, CI/CD, and coverage analysis

## MCP Tools

The server provides three tools for working with Claude Agent Skills:

1. **`find_helpful_skills`** - Semantic search for relevant skills based on task description
2. **`read_skill_document`** - Retrieve specific files (scripts, data, references) from skills  
3. **`list_skills`** - View complete inventory of all loaded skills (for exploration/debugging)

See [API Documentation](docs/api.md) for detailed parameters, examples, and best practices.

## Architecture (v1.0.0)

The system uses a **two-package architecture** for optimal performance:

- **Frontend** ([`claude-skills-mcp`](https://pypi.org/project/claude-skills-mcp/)): Lightweight proxy (~15 MB)
  - Starts instantly (<5 seconds) ✅ **No Cursor timeout!**
  - Auto-downloads backend on first use
  - MCP server (stdio) for Cursor
  
- **Backend** ([`claude-skills-mcp-backend`](https://pypi.org/project/claude-skills-mcp-backend/)): Heavy server (~250 MB)
  - Vector search with PyTorch & sentence-transformers
  - MCP server (streamable HTTP)
  - Auto-installed by frontend OR deployable standalone

**Benefits:**
- ✅ Solves Cursor timeout issue (frontend starts instantly)
- ✅ Same simple user experience (`uvx claude-skills-mcp`)
- ✅ Backend downloads in background (doesn't block Cursor)
- ✅ Can connect to remote hosted backend (no local install needed)

See [Architecture Guide](docs/architecture.md) for detailed design and data flow.

## Skill Sources

Load skills from **GitHub repositories** (direct skills or Claude Code plugins) or **local directories**. 

By default, loads from:
- [Official Anthropic Skills](https://github.com/anthropics/skills) - 15 diverse skills for documents, presentations, web artifacts, and more
- [K-Dense AI Scientific Skills](https://github.com/K-Dense-AI/claude-scientific-skills) - 78+ specialized skills for bioinformatics, cheminformatics, and scientific analysis
- Local directory `~/.claude/skills` (if it exists)

## Contributing

Contributions are welcome! To contribute:

1. **Report issues**: [Open an issue](https://github.com/K-Dense-AI/claude-skills-mcp/issues) for bugs or feature requests
2. **Submit PRs**: Fork, create a feature branch, ensure tests pass (`uv run pytest tests/`), then submit
3. **Code style**: Run `uvx ruff check src/` before committing
4. **Add tests**: New features should include tests

### Development

**Version Management**: This monorepo uses a centralized version system:
- Edit the `VERSION` file at the repo root to bump the version
- Run `python3 scripts/sync-version.py` to sync all references (or use `--check` to verify)
- The `scripts/build-all.sh` script automatically syncs versions before building

For questions, email [orion.li@k-dense.ai](mailto:orion.li@k-dense.ai)

## Join Our Community! 🚀

**We'd love to have you in our Slack community!** Connect with other users, share tips and tricks, get help with your skills, and be the first to know about new features and updates.

👉 **[Join the K-Dense Community on Slack](https://join.slack.com/t/k-densecommunity/shared_invite/zt-3iajtyls1-EwmkwIZk0g_o74311Tkf5g)** 👈

Whether you're building custom skills, integrating with different AI models, or just exploring the possibilities of Agent Skills, our community is here to support you!

## Learn More

- [Agent Skills Documentation](https://docs.claude.com/en/docs/claude-code/skills) - Official Anthropic documentation on the Skills format
- [Agent Skills Blog Post](https://www.anthropic.com/news/skills) - Announcement and overview
- [Model Context Protocol](https://modelcontextprotocol.io/) - The protocol that makes cross-platform Skills possible
- [Engineering Blog: Equipping Agents for the Real World](https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills) - Technical deep-dive on the Skills architecture

## License

This project is licensed under the [Apache License 2.0](LICENSE).

Copyright 2025 K-Dense AI (https://k-dense.ai)

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=K-Dense-AI/claude-skills-mcp&type=date&legend=top-left)](https://www.star-history.com/#K-Dense-AI/claude-skills-mcp&type=date&legend=top-left)
