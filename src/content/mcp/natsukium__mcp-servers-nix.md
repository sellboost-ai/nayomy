---
name: "natsukium/mcp-servers-nix"
description: "A Nix-based configuration framework for Model Context Protocol (MCP) servers with ready-to-use packages."
description_tr: "Model Context Protocol (MCP) sunucuları için Nix tabanlı bir konfigürasyon framework'ü, kullanıma hazır paketlerle birlikte."
category: "Developer Tools"
repo: "natsukium/mcp-servers-nix"
stars: 264
url: "https://github.com/natsukium/mcp-servers-nix"
body_length: 5298
license: "Apache-2.0"
language: "Nix"
body_tr: |-
  # mcp-servers-nix
  
  Nix tabanlı bir konfigürasyon çerçevesi ve hazır kullanılabilir paketleri olan Model Control Protocol (MCP) sunucuları.
  
  ## Genel Bakış
  
  Bu depo, hem MCP sunucu paketleri hem de MCP sunucularını yapılandırmak ve dağıtmak için bir Nix çerçevesi sağlar. Çeşitli MCP sunucularını tutarlı bir arayüzle yapılandırmanın modüler bir yaklaşımını sunar.
  
  ## Özellikler
  
  - **Modüler Konfigürasyon**: Birden çok MCP sunucu konfigürasyonunu tanımlayın ve birleştirin
  - **Yeniden Üretilebilir Derlemeler**: Yeniden üretilebilir ve deklaratif sunucu kurulumları için Nix'den yararlanın
  - **Önceden Yapılandırılmış Modüller**: Popüler MCP sunucu türleri için hazır kullanılabilir konfigürasyonlar
  - **Güvenlik Odaklı**: `envFile` ve `passwordCommand` aracılığıyla daha iyi kimlik bilgisi ve hassas bilgi yönetimi, sabitlenmiş sunucu sürümleri
  - **Framework Desteği**: [Flakes](https://github.com/natsukium/mcp-servers-nix/tree/HEAD/docs/module-usage.md#using-flakes), [flake-parts](https://github.com/natsukium/mcp-servers-nix/tree/HEAD/docs/module-usage.md#using-flake-parts), [devenv](https://github.com/natsukium/mcp-servers-nix/tree/HEAD/docs/module-usage.md#using-devenv) ve [Home Manager](https://github.com/natsukium/mcp-servers-nix/tree/HEAD/docs/module-usage.md#using-home-manager) ile entegre
  
  ## Hızlı Başlangıç
  
  Bir MCP sunucusunu doğrudan çalıştırın:
  
  ```bash
  nix run github:natsukium/mcp-servers-nix#mcp-server-fetch
  ```
  
  `mkConfig` ile bir konfigürasyon dosyası oluşturun:
  
  ```nix
  # config.nix
  let
    pkgs = import <nixpkgs> { };
    mcp-servers-nix = import (fetchTarball
      "https://github.com/natsukium/mcp-servers-nix/archive/main.tar.gz") { inherit pkgs; };
  in
  mcp-servers-nix.lib.mkConfig pkgs {
    programs.filesystem = {
      enable = true;
      args = [ "/path/to/allowed/directory" ];
    };
  }
  ```
  
  ```bash
  nix-build config.nix && cat result
  ```
  
  ```json
  {
    "mcpServers": {
      "filesystem": {
        "command": "/nix/store/7b4ancp3cns9lkkybd090qzr0hah5qq0-mcp-server-filesystem-2025.12.18/bin/mcp-server-filesystem",
        "args": [ "/path/to/allowed/directory" ]
      }
    }
  }
  ```
  
  Çıktı formatı `flavor` seçeneğine uyum sağlar — aşağıdaki [Desteklenen Çeşitleri](#desteklenen-çeşitler) görün.
  
  ## Desteklenen Çeşitler
  
  | Çeşit | Anahtar | Tipik Dosya | İstemci |
  |-------|---------|-----------|---------|
  | `claude` | `mcpServers` | `claude_desktop_config.json` | Claude Desktop |
  | `claude-code` | `mcpServers` | `.mcp.json` | Claude Code |
  | `vscode` | `mcp.servers` | `settings.json` | VS Code |
  | `vscode-workspace` | `servers` | `.vscode/mcp.json` | VS Code (çalışma alanı) |
  | `codex` | `mcp_servers` | `.mcp.toml` | Codex CLI |
  | `opencode` | `mcp` | `opencode.json` | OpenCode |
  | `zed` | `context_servers` | (değişken) | Zed |
  
  ## Kullanılabilir Modüller
  
  - [clickup](https://github.com/natsukium/mcp-servers-nix/blob/HEAD/modules/servers/clickup.nix)
  - [codex](https://github.com/natsukium/mcp-servers-nix/blob/HEAD/modules/servers/codex.nix)
  - [context7](https://github.com/natsukium/mcp-servers-nix/blob/HEAD/modules/servers/context7.nix)
  - [deepl](https://github.com/natsukium/mcp-servers-nix/blob/HEAD/modules/servers/deepl.nix)
  - [esa](https://github.com/natsukium/mcp-servers-nix/blob/HEAD/modules/servers/esa.nix)
  - [everything](https://github.com/natsukium/mcp-servers-nix/blob/HEAD/modules/servers/everything.nix)
  - [fetch](https://github.com/natsukium/mcp-servers-nix/blob/HEAD/modules/servers/fetch.nix)
  - [filesystem](https://github.com/natsukium/mcp-servers-nix/blob/HEAD/modules/servers/filesystem.nix)
  - [freee](https://github.com/natsukium/mcp-servers-nix/blob/HEAD/modules/servers/freee.nix)
  - [git](https://github.com/natsukium/mcp-servers-nix/blob/HEAD/modules/servers/git.nix)
  - [github](https://github.com/natsukium/mcp-servers-nix/blob/HEAD/modules/servers/github.nix)
  - [grafana](https://github.com/natsukium/mcp-servers-nix/blob/HEAD/modules/servers/grafana.nix)
  - [home-assistant](https://github.com/natsukium/mcp-servers-nix/blob/HEAD/modules/servers/home-assistant.nix)
  - [mastra](https://github.com/natsukium/mcp-servers-nix/blob/HEAD/modules/servers/mastra.nix)
  - [memory](https://github.com/natsukium/mcp-servers-nix/blob/HEAD/modules/servers/memory.nix)
  - [netdata](https://github.com/natsukium/mcp-servers-nix/blob/HEAD/modules/servers/netdata.nix)
  - [nixos](https://github.com/natsukium/mcp-servers-nix/blob/HEAD/modules/servers/nixos.nix)
  - [notion](https://github.com/natsukium/mcp-servers-nix/blob/HEAD/modules/servers/notion.nix)
  - [playwright](https://github.com/natsukium/mcp-servers-nix/blob/HEAD/modules/servers/playwright.nix)
  - [sequential-thinking](https://github.com/natsukium/mcp-servers-nix/blob/HEAD/modules/servers/sequential-thinking.nix)
  - [serena](https://github.com/natsukium/mcp-servers-nix/blob/HEAD/modules/servers/serena.nix)
  - [slite](https://github.com/natsukium/mcp-servers-nix/blob/HEAD/modules/servers/slite.nix)
  - [tavily](https://github.com/natsukium/mcp-servers-nix/blob/HEAD/modules/servers/tavily.nix)
  - [terraform](https://github.com/natsukium/mcp-servers-nix/blob/HEAD/modules/servers/terraform.nix)
  - [textlint](https://github.com/natsukium/mcp-servers-nix/blob/HEAD/modules/servers/textlint.nix)
  - [time](https://github.com/natsukium/mcp-servers-nix/blob/HEAD/modules/servers/time.nix)
  
  ## Örnekler
  
  Tam konfigürasyon örnekleri için `examples` dizinini kontrol edin:
  
  - [`claude-desktop.nix`](https://github.com/natsukium/mcp-servers-nix/blob/HEAD/examples/claude-desktop.nix): Claude Desktop için temel konfigürasyon
  - [`vscode.nix`](https://github.com/natsukium/mcp-servers-nix/blob/HEAD/examples/vscode.nix): VS Code entegrasyonu kurulumu
  - [`librechat.nix`](https://github.com/natsukium/mcp-servers-nix/blob/HEAD/examples/librechat.nix): LibreChat entegrasyonu için konfigürasyon
  - [`codex.nix`](https://github.com/natsukium/mcp-servers-nix/blob/HEAD/examples/codex.nix): MCP sunucuları ile Codex CLI entegrasyonu
  - [`opencode.nix`](https://github.com/natsukium/mcp-servers-nix/blob/HEAD/examples/opencode.nix): MCP sunucuları ile OpenCode CLI entegrasyonu
  - [`vscode-workspace`](https://github.com/natsukium/mcp-servers-nix/blob/HEAD/examples/vscode-workspace/flake.nix): VS Code çalışma alanı konfigürasyon örneği
  - [`flake-parts-module`](https://github.com/natsukium/mcp-servers-nix/blob/HEAD/examples/flake-parts-module/flake.nix): Çok çeşit desteği ile flake-parts modül entegrasyonu
  - [`devenv`](https://github.com/natsukium/mcp-servers-nix/tree/HEAD/examples/devenv): `claude.code.mcpServers` kullanarak devenv entegrasyonu
  - [`home-manager`](https://github.com/natsukium/mcp-servers-nix/blob/HEAD/examples/home-manager/flake.nix): `programs.mcp.servers` ile Home Manager entegrasyonu
  
  ### Gerçek Dünya Örnekleri
  
  Başkalarının projelerinde mcp-servers-nix'i nasıl kullandığını görmek için [GitHub arama sonuçlarını](https://github.com/search?q=lang%3Anix+mcp-servers-nix&type=code) kontrol edin.
  
  ## Dokumentasyon
  
  - [Modül Kullanım Kılavuzu](https://github.com/natsukium/mcp-servers-nix/blob/HEAD/docs/module-usage.md) — Nix ile MCP sunucularını yapılandırma (klasik, npins, flakes, flake-parts)
  - [Konfigürasyon Referansı](https://github.com/natsukium/mcp-servers-nix/blob/HEAD/docs/configuration-reference.md) — Güvenlik, kimlik bilgisi yönetimi ve flake-parts seçenekleri
  - [Modül Seçenekleri Referansı](https://github.com/natsukium/mcp-servers-nix/blob/HEAD/docs/module-options.md) — Tüm modül seçeneklerinin otomatik oluşturulan listesi
  - [Paketler Kılavuzu](https://github.com/natsukium/mcp-servers-nix/blob/HEAD/docs/packages.md) — Bağımsız MCP sunucu paketlerini kullanma
  - [Katkı Kılavuzu](https://github.com/natsukium/mcp-servers-nix/blob/HEAD/CONTRIBUTING.md) — Yeni paketler ve modüller ekleme
  
  ## Lisans
  
  Bu proje Apache License 2.0 altında lisanslanmıştır - ayrıntılar için [LICENSE dosyasını](https://github.com/natsukium/mcp-servers-nix/tree/HEAD/LICENSE) görün.
---

# mcp-servers-nix

A Nix-based configuration framework for Model Control Protocol (MCP) servers with ready-to-use packages.

## Overview

This repository provides both MCP server packages and a Nix framework for configuring and deploying MCP servers. It offers a modular approach to configuring various MCP servers with a consistent interface.

## Features

- **Modular Configuration**: Define and combine multiple MCP server configurations
- **Reproducible Builds**: Leverage Nix for reproducible and declarative server setups
- **Pre-configured Modules**: Ready-to-use configurations for popular MCP server types
- **Security-focused**: Better handling credentials and sensitive information through `envFile` and `passwordCommand`, with pinned server versions
- **Framework Support**: Integrates with [Flakes](https://github.com/natsukium/mcp-servers-nix/tree/HEAD/docs/module-usage.md#using-flakes), [flake-parts](https://github.com/natsukium/mcp-servers-nix/tree/HEAD/docs/module-usage.md#using-flake-parts), [devenv](https://github.com/natsukium/mcp-servers-nix/tree/HEAD/docs/module-usage.md#using-devenv), and [Home Manager](https://github.com/natsukium/mcp-servers-nix/tree/HEAD/docs/module-usage.md#using-home-manager)

## Quick Start

Run an MCP server directly:

```bash
nix run github:natsukium/mcp-servers-nix#mcp-server-fetch
```

Generate a configuration file with `mkConfig`:

```nix
# config.nix
let
  pkgs = import <nixpkgs> { };
  mcp-servers-nix = import (fetchTarball
    "https://github.com/natsukium/mcp-servers-nix/archive/main.tar.gz") { inherit pkgs; };
in
mcp-servers-nix.lib.mkConfig pkgs {
  programs.filesystem = {
    enable = true;
    args = [ "/path/to/allowed/directory" ];
  };
}
```

```bash
nix-build config.nix && cat result
```

```json
{
  "mcpServers": {
    "filesystem": {
      "command": "/nix/store/7b4ancp3cns9lkkybd090qzr0hah5qq0-mcp-server-filesystem-2025.12.18/bin/mcp-server-filesystem",
      "args": [ "/path/to/allowed/directory" ]
    }
  }
}
```

The output format adapts to the `flavor` option — see [Supported Flavors](#supported-flavors) below.

## Supported Flavors

| Flavor | Key | Typical File | Client |
|--------|-----|-------------|--------|
| `claude` | `mcpServers` | `claude_desktop_config.json` | Claude Desktop |
| `claude-code` | `mcpServers` | `.mcp.json` | Claude Code |
| `vscode` | `mcp.servers` | `settings.json` | VS Code |
| `vscode-workspace` | `servers` | `.vscode/mcp.json` | VS Code (workspace) |
| `codex` | `mcp_servers` | `.mcp.toml` | Codex CLI |
| `opencode` | `mcp` | `opencode.json` | OpenCode |
| `zed` | `context_servers` | (varies) | Zed |

## Available Modules

- [clickup](https://github.com/natsukium/mcp-servers-nix/blob/HEAD/modules/servers/clickup.nix)
- [codex](https://github.com/natsukium/mcp-servers-nix/blob/HEAD/modules/servers/codex.nix)
- [context7](https://github.com/natsukium/mcp-servers-nix/blob/HEAD/modules/servers/context7.nix)
- [deepl](https://github.com/natsukium/mcp-servers-nix/blob/HEAD/modules/servers/deepl.nix)
- [esa](https://github.com/natsukium/mcp-servers-nix/blob/HEAD/modules/servers/esa.nix)
- [everything](https://github.com/natsukium/mcp-servers-nix/blob/HEAD/modules/servers/everything.nix)
- [fetch](https://github.com/natsukium/mcp-servers-nix/blob/HEAD/modules/servers/fetch.nix)
- [filesystem](https://github.com/natsukium/mcp-servers-nix/blob/HEAD/modules/servers/filesystem.nix)
- [freee](https://github.com/natsukium/mcp-servers-nix/blob/HEAD/modules/servers/freee.nix)
- [git](https://github.com/natsukium/mcp-servers-nix/blob/HEAD/modules/servers/git.nix)
- [github](https://github.com/natsukium/mcp-servers-nix/blob/HEAD/modules/servers/github.nix)
- [grafana](https://github.com/natsukium/mcp-servers-nix/blob/HEAD/modules/servers/grafana.nix)
- [home-assistant](https://github.com/natsukium/mcp-servers-nix/blob/HEAD/modules/servers/home-assistant.nix)
- [mastra](https://github.com/natsukium/mcp-servers-nix/blob/HEAD/modules/servers/mastra.nix)
- [memory](https://github.com/natsukium/mcp-servers-nix/blob/HEAD/modules/servers/memory.nix)
- [netdata](https://github.com/natsukium/mcp-servers-nix/blob/HEAD/modules/servers/netdata.nix)
- [nixos](https://github.com/natsukium/mcp-servers-nix/blob/HEAD/modules/servers/nixos.nix)
- [notion](https://github.com/natsukium/mcp-servers-nix/blob/HEAD/modules/servers/notion.nix)
- [playwright](https://github.com/natsukium/mcp-servers-nix/blob/HEAD/modules/servers/playwright.nix)
- [sequential-thinking](https://github.com/natsukium/mcp-servers-nix/blob/HEAD/modules/servers/sequential-thinking.nix)
- [serena](https://github.com/natsukium/mcp-servers-nix/blob/HEAD/modules/servers/serena.nix)
- [slite](https://github.com/natsukium/mcp-servers-nix/blob/HEAD/modules/servers/slite.nix)
- [tavily](https://github.com/natsukium/mcp-servers-nix/blob/HEAD/modules/servers/tavily.nix)
- [terraform](https://github.com/natsukium/mcp-servers-nix/blob/HEAD/modules/servers/terraform.nix)
- [textlint](https://github.com/natsukium/mcp-servers-nix/blob/HEAD/modules/servers/textlint.nix)
- [time](https://github.com/natsukium/mcp-servers-nix/blob/HEAD/modules/servers/time.nix)

## Examples

Check the `examples` directory for complete configuration examples:

- [`claude-desktop.nix`](https://github.com/natsukium/mcp-servers-nix/blob/HEAD/examples/claude-desktop.nix): Basic configuration for Claude Desktop
- [`vscode.nix`](https://github.com/natsukium/mcp-servers-nix/blob/HEAD/examples/vscode.nix): VS Code integration setup
- [`librechat.nix`](https://github.com/natsukium/mcp-servers-nix/blob/HEAD/examples/librechat.nix): Configuration for LibreChat integration
- [`codex.nix`](https://github.com/natsukium/mcp-servers-nix/blob/HEAD/examples/codex.nix): Codex CLI integration with MCP servers
- [`opencode.nix`](https://github.com/natsukium/mcp-servers-nix/blob/HEAD/examples/opencode.nix): OpenCode CLI integration with MCP servers
- [`vscode-workspace`](https://github.com/natsukium/mcp-servers-nix/blob/HEAD/examples/vscode-workspace/flake.nix): VS Code workspace configuration example
- [`flake-parts-module`](https://github.com/natsukium/mcp-servers-nix/blob/HEAD/examples/flake-parts-module/flake.nix): Flake-parts module integration with multi-flavor support
- [`devenv`](https://github.com/natsukium/mcp-servers-nix/tree/HEAD/examples/devenv): devenv integration using `claude.code.mcpServers`
- [`home-manager`](https://github.com/natsukium/mcp-servers-nix/blob/HEAD/examples/home-manager/flake.nix): Home Manager integration with `programs.mcp.servers`

### Real World Examples

Check out [GitHub search results](https://github.com/search?q=lang%3Anix+mcp-servers-nix&type=code) for examples of how others are using mcp-servers-nix in their projects.

## Documentation

- [Module Usage Guide](https://github.com/natsukium/mcp-servers-nix/blob/HEAD/docs/module-usage.md) — How to configure MCP servers with Nix (classic, npins, flakes, flake-parts)
- [Configuration Reference](https://github.com/natsukium/mcp-servers-nix/blob/HEAD/docs/configuration-reference.md) — Security, credential handling, and flake-parts options
- [Module Options Reference](https://github.com/natsukium/mcp-servers-nix/blob/HEAD/docs/module-options.md) — Auto-generated list of all module options
- [Packages Guide](https://github.com/natsukium/mcp-servers-nix/blob/HEAD/docs/packages.md) — Using standalone MCP server packages
- [Contributing Guide](https://github.com/natsukium/mcp-servers-nix/blob/HEAD/CONTRIBUTING.md) — Adding new packages and modules

## License

This project is licensed under the Apache License 2.0 - see the [LICENSE file](https://github.com/natsukium/mcp-servers-nix/tree/HEAD/LICENSE) for details.
