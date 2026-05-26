---
name: "wanaku-ai/wanaku"
description: "The Wanaku MCP Router is a SSE-based MCP server that provides an extensible routing engine that allows integrating your enterprise systems with AI agents."
description_tr: "Wanaku MCP Router, SSE tabanlı bir MCP sunucusu olup, kurumsal sistemlerinizi AI ajanlarıyla entegre etmenizi sağlayan genişletilebilir bir routing motoru sunar."
category: "Other Tools and Integrations"
repo: "wanaku-ai/wanaku"
stars: 113
url: "https://github.com/wanaku-ai/wanaku"
body_length: 3396
license: "Apache-2.0"
language: "Java"
homepage: "https://wanaku.ai"
body_tr: |-
  # Wanaku - Her şeyi birleştiren bir MCP Router

  [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](LICENSE)
  [![Build](https://img.shields.io/github/actions/workflow/status/wanaku-ai/wanaku/build.yml?branch=main)](https://github.com/wanaku-ai/wanaku/actions)
  [![Release](https://img.shields.io/github/v/release/wanaku-ai/wanaku)](https://github.com/wanaku-ai/wanaku/releases)

  Wanaku MCP Router, [Model Context Protocol (MCP)](https://modelcontextprotocol.io/) tarafından desteklenen yapay zeka uygulamaları için bir routerdir.

  Bu protokol, uygulamaların LLM'lere nasıl bağlam sağladığını standardize eden açık bir protokoldür.

  Proje adı, Güney Amerika'ya özgü bir devekuşungillerden olan [Guanaco](https://en.wikipedia.org/wiki/Guanaco) kelimesinin kökünden gelir.

  ## Temel Özellikler

  - **Birleştirilmiş Erişim** - AI ajanları için merkezi routing ve kaynak yönetimi
  - **MCP-to-MCP Köprüsü** - Diğer MCP sunucuları için gateway veya proxy görevi görebilir
  - **Kapsamlı Bağlantı** - 300+ Apache Camel bileşeninden yararlanarak entegrasyon sağlar
  - **Varsayılan Olarak Güvenli** - Keycloak aracılığıyla yerleşik authentication ve authorization (isteğe bağlı — auth olmadan çalışabilir)
  - **Kubernetes Doğal** - OpenShift ve Kubernetes dağıtımları için birinci sınıf destek
  - **Genişletilebilir Mimari** - Özel tool ve kaynak sağlayıcıları eklemeyi kolaylaştırır
  - **Çoklu Namespace Desteği** - Tool ve kaynakları izole namespace'ler arasında organize edin

  ## Hızlı Başlangıç

  [![Getting Started With Wanaku](https://img.youtube.com/vi/-fuNAo2j4SA/0.jpg)](https://www.youtube.com/watch?v=-fuNAo2j4SA)

  ### Wanaku CLI Kurulumu

  > **Not:** Wanaku'yu çalıştırmak için Java 21 veya üstü gereklidir.

  ```shell
  # JBang aracılığıyla kur (Java 21+ gerekli)
  jbang app install wanaku@wanaku-ai/wanaku

  # Veya releases sayfasından en son binary'i indir
  # https://github.com/wanaku-ai/wanaku/releases
  ```

  ### Temel Kullanım

  ```shell
  # Wanaku router'ına kimlik doğrulaması yap
  wanaku auth login --url http://localhost:8080

  # Mevcut tool'ları listele
  wanaku tools list

  # Yeni bir tool ekle
  wanaku tools add --uri http://example.com/api --service http

  # Mevcut kaynakları listele
  wanaku resources list
  ```

  Tüm kurulum ve konfigürasyon talimatları için [Kullanım Kılavuzu](docs/usage.md)'na bakın.

  ## Belgeler

  Çoğu kullanıcı için **[Wanaku Belgeleri](https://wanaku.ai/docs/)** web sitesi önerilen başlangıç noktasıdır. Kararlı sürümler için kurulum, konfigürasyon ve kullanımı kapsar.

  Aşağıdaki belgeler proje üzerinde çalışan geliştiriciler için hazırlanmıştır ve yayınlanmamış özellikler veya devam eden değişiklikleri içerebilir:

  - **[Kullanım Kılavuzu](docs/usage.md)** - Kurulum, dağıtım ve CLI kullanımı
  - **[Mimari](docs/architecture.md)** - Sistem mimarisi ve bileşenleri
  - **[Derleme](docs/building.md)** - Projeyi derle ve paketele
  - **[Katkıda Bulunma](CONTRIBUTING.md)** - Katkı yönergeleri
  - **[Konfigürasyon](docs/configurations.md)** - Konfigürasyon referansı
  - **[Güvenlik](SECURITY.md)** - Güvenlik politikası ve en iyi uygulamalar

  ## Topluluk

  - [GitHub Issues](https://github.com/wanaku-ai/wanaku/issues) - Bug raporları ve özellik istekleri
  - [Discussions](https://github.com/wanaku-ai/wanaku/discussions) - Soru sorun ve fikirlerinizi paylaşın
  - [Örnekler](https://github.com/wanaku-ai/wanaku-examples) - Örnek yetenekler ve entegrasyonlar

  ## Lisans

  Bu proje Apache 2.0 Lisansı altında lisanslanmıştır - detaylar için [LICENSE](LICENSE) dosyasına bakın.
---

# Wanaku - A MCP Router that connects everything

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](LICENSE)
[![Build](https://img.shields.io/github/actions/workflow/status/wanaku-ai/wanaku/build.yml?branch=main)](https://github.com/wanaku-ai/wanaku/actions)
[![Release](https://img.shields.io/github/v/release/wanaku-ai/wanaku)](https://github.com/wanaku-ai/wanaku/releases)

The Wanaku MCP Router is a router for AI-enabled applications powered by the [Model Context Protocol (MCP)](https://modelcontextprotocol.io/).

This protocol is an open protocol that standardizes how applications provide context to LLMs.

The project name comes from the origins of the word [Guanaco](https://en.wikipedia.org/wiki/Guanaco), a camelid native to
South America.

## Key Features

- **Unified Access** - Centralized routing and resource management for AI agents
- **MCP-to-MCP Bridge** - Act as a gateway or proxy for other MCP servers
- **Extensive Connectivity** - Leverage 300+ Apache Camel components for integration
- **Secure by Default** - Built-in authentication and authorization via Keycloak (optional — can run without auth)
- **Kubernetes-Native** - First-class support for OpenShift and Kubernetes deployments
- **Extensible Architecture** - Easy to add custom tools and resource providers
- **Multi-Namespace Support** - Organize tools and resources across isolated namespaces

## Quick Start

[![Getting Started With Wanaku](https://img.youtube.com/vi/-fuNAo2j4SA/0.jpg)](https://www.youtube.com/watch?v=-fuNAo2j4SA)

### Wanaku CLI Installation

> **Note:** Java 21 or later is required to run Wanaku.

```shell
# Install via JBang (requires Java 21+)
jbang app install wanaku@wanaku-ai/wanaku

# Or download the latest binary from releases
# https://github.com/wanaku-ai/wanaku/releases
```

### Basic Usage

```shell
# Authenticate with your Wanaku router
wanaku auth login --url http://localhost:8080

# List available tools
wanaku tools list

# Add a new tool
wanaku tools add --uri http://example.com/api --service http

# List available resources
wanaku resources list
```

For complete installation and configuration instructions, see the [Usage Guide](docs/usage.md).

## Documentation

For most users, the **[Wanaku Documentation](https://wanaku.ai/docs/)** website is the recommended starting point. It covers installation, configuration, and usage for stable releases.

The documentation below is intended for developers working on the project and may reference unreleased features or in-progress changes:

- **[Usage Guide](docs/usage.md)** - Installation, deployment, and CLI usage
- **[Architecture](docs/architecture.md)** - System architecture and components
- **[Building](docs/building.md)** - Build and package the project
- **[Contributing](CONTRIBUTING.md)** - Contribution guidelines
- **[Configuration](docs/configurations.md)** - Configuration reference
- **[Security](SECURITY.md)** - Security policy and best practices

## Community

- [GitHub Issues](https://github.com/wanaku-ai/wanaku/issues) - Bug reports and feature requests
- [Discussions](https://github.com/wanaku-ai/wanaku/discussions) - Ask questions and share ideas
- [Examples](https://github.com/wanaku-ai/wanaku-examples) - Example capabilities and integrations

## License

This project is licensed under the Apache 2.0 License - see the [LICENSE](LICENSE) file for details.
