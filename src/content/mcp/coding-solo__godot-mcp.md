---
name: "Coding-Solo/godot-mcp"
description: "A MCP server for interacting with the Godot game engine, providing tools for editing, running, debugging, and managing scenes in Godot projects."
description_tr: "Godot oyun motoruyla etkileşim kurmak için bir MCP sunucusu; Godot projelerinde sahneleri düzenleme, çalıştırma, hata ayıklama ve yönetme araçlarını sağlar."
category: "Gaming"
repo: "Coding-Solo/godot-mcp"
stars: 3849
url: "https://github.com/Coding-Solo/godot-mcp"
body_length: 9076
license: "MIT"
language: "JavaScript"
body_tr: |-
  # Godot MCP

  [![Github-sponsors](https://img.shields.io/badge/sponsor-30363D?style=for-the-badge&logo=GitHub-Sponsors&logoColor=#EA4AAA)](https://github.com/sponsors/Coding-Solo)

  [![](https://badge.mcpx.dev?type=server 'MCP Server')](https://modelcontextprotocol.io/introduction)
  [![Made with Godot](https://img.shields.io/badge/Made%20with-Godot-478CBF?style=flat&logo=godot%20engine&logoColor=white)](https://godotengine.org)
  [![](https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white 'Node.js')](https://nodejs.org/en/download/)
  [![](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white 'TypeScript')](https://www.typescriptlang.org/)

  [![](https://img.shields.io/github/last-commit/Coding-Solo/godot-mcp 'Last Commit')](https://github.com/Coding-Solo/godot-mcp/commits/main)
  [![](https://img.shields.io/github/stars/Coding-Solo/godot-mcp 'Stars')](https://github.com/Coding-Solo/godot-mcp/stargazers)
  [![](https://img.shields.io/github/forks/Coding-Solo/godot-mcp 'Forks')](https://github.com/Coding-Solo/godot-mcp/network/members)
  [![](https://img.shields.io/badge/License-MIT-red.svg 'MIT License')](https://opensource.org/licenses/MIT)


  ```text
                             (((((((             (((((((
                          (((((((((((           (((((((((((
                          (((((((((((((       (((((((((((((
                          (((((((((((((((((((((((((((((((((
                          (((((((((((((((((((((((((((((((((
           (((((      (((((((((((((((((((((((((((((((((((((((((      (((((
         (((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((
       ((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((
      ((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((
        (((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((
          (((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((
           (((((((((((@@@@@@@(((((((((((((((((((((((((((@@@@@@@(((((((((((
           (((((((((@@@@,,,,,@@@(((((((((((((((((((((@@@,,,,,@@@@(((((((((
           ((((((((@@@,,,,,,,,,@@(((((((@@@@@(((((((@@,,,,,,,,,@@@((((((((
           ((((((((@@@,,,,,,,,,@@(((((((@@@@@(((((((@@,,,,,,,,,@@@((((((((
           (((((((((@@@,,,,,,,@@((((((((@@@@@((((((((@@,,,,,,,@@@(((((((((
           ((((((((((((@@@@@@(((((((((((@@@@@(((((((((((@@@@@@((((((((((((
           (((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((
           (((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((
           @@@@@@@@@@@@@((((((((((((@@@@@@@@@@@@@((((((((((((@@@@@@@@@@@@@
           ((((((((( @@@(((((((((((@@(((((((((((@@(((((((((((@@@ (((((((((
           (((((((((( @@((((((((((@@@(((((((((((@@@((((((((((@@ ((((((((((
            (((((((((((@@@@@@@@@@@@@@(((((((((((@@@@@@@@@@@@@@(((((((((((
             (((((((((((((((((((((((((((((((((((((((((((((((((((((((((((
                (((((((((((((((((((((((((((((((((((((((((((((((((((((
                   (((((((((((((((((((((((((((((((((((((((((((((((
                          (((((((((((((((((((((((((((((((((


                            /$$      /$$  /$$$$$$  /$$$$$$$
                           | $$$    /$$$ /$$__  $$| $$__  $$
                           | $$$$  /$$$$| $$  \__/| $$  \ $$
                           | $$ $$/$$ $$| $$      | $$$$$$$/
                           | $$  $$$| $$| $$      | $$____/
                           | $$\  $ | $$| $$    $$| $$
                           | $$ \/  | $$|  $$$$$$/| $$
                           |__/     |__/ \______/ |__/
  ```

  Godot oyun motoru ile etkileşim kurmak için bir Model Context Protocol (MCP) sunucusu.

  ## Giriş

  Godot MCP, AI ajanlarının Godot editörünü başlatmasını, projeleri çalıştırmasını, hata ayıklama çıktısını yakalamasını ve proje yürütülmesini kontrol etmesini sağlar. Bu doğrudan geri bildirim döngüsü, ajanların gerçek Godot projelerinde neyin çalışıp neyin çalışmadığını anlamasına yardımcı olarak daha iyi kod üretimi ve hata ayıklama desteği sağlar.

  ## Özellikler

  - **Godot Editörünü Başlat**: Belirli bir proje için Godot editörünü aç
  - **Godot Projelerini Çalıştır**: Godot projelerini debug modunda yürüt
  - **Hata Ayıklama Çıktısını Yakala**: Konsol çıktısı ve hata mesajlarını al
  - **Yürütülmesi Kontrol Et**: Godot projelerini programlı olarak başlat ve durdur
  - **Godot Sürümünü Al**: Kurulu Godot sürümünü al
  - **Godot Projelerini Listele**: Belirtilen dizinde Godot projelerini bul
  - **Proje Analizi**: Proje yapısı hakkında ayrıntılı bilgi al
  - **Sahne Yönetimi**:
    - Belirtilen kök düğüm türleriyle yeni sahneler oluştur
    - Mevcut sahnelere özelleştirilebilir özelliklerle düğümler ekle
    - Sprite2D düğümlerine sprite ve dokular yükle
    - 3B sahneleri GridMap için MeshLibrary kaynakları olarak dışa aktar
    - Değişkenler oluşturma seçeneğiyle sahneleri kaydet
  - **UID Yönetimi** (Godot 4.4+ için):
    - Belirli dosyalar için UID'yi al
    - Kaynakları yeniden kaydederek UID referanslarını güncelle

  ## Gereksinimler

  - Sisteminizde [Godot Engine](https://godotengine.org/download) kurulu
  - Node.js (>=18.0.0) ve npm
  - MCP'yi destekleyen bir AI ajanı

  ## Hızlı Başlangıç

  ### Claude Code

  ```bash
  claude mcp add godot -- npx @coding-solo/godot-mcp
  ```

  Bu kadar. Claude Code'u yeniden başlat ve Godot MCP araçlarının kullanılabilir olması için bekleniyor.

  Ortam değişkenleriyle:

  ```bash
  claude mcp add godot -e GODOT_PATH=/path/to/godot -e DEBUG=true -- npx @coding-solo/godot-mcp
  ```

  <details>
  <summary><strong>Cline</strong></summary>

  Cline MCP ayarları dosyanıza ekleyin (`~/Library/Application Support/Code/User/globalStorage/saoudrizwan.claude-dev/settings/cline_mcp_settings.json`):

  ```json
  {
    "mcpServers": {
      "godot": {
        "command": "npx",
        "args": ["@coding-solo/godot-mcp"],
        "env": {
          "DEBUG": "true"
        },
        "disabled": false,
        "autoApprove": [
          "launch_editor",
          "run_project",
          "get_debug_output",
          "stop_project",
          "get_godot_version",
          "list_projects",
          "get_project_info",
          "create_scene",
          "add_node",
          "load_sprite",
          "export_mesh_library",
          "save_scene",
          "get_uid",
          "update_project_uids"
        ]
      }
    }
  }
  ```

  </details>

  <details>
  <summary><strong>Cursor</strong></summary>

  **Cursor UI'ı Kullanarak:**

  1. **Cursor Ayarları** > **Özellikler** > **MCP** sayfasına gidin
  2. **+ Yeni MCP Sunucusu Ekle** düğmesine tıklayın
  3. Formu doldurun:
     - Ad: `godot`
     - Tür: `command`
     - Komut: `npx @coding-solo/godot-mcp`
  4. "Ekle" düğmesine tıklayın
  5. MCP sunucusu kartının sağ üst köşesinde yenile düğmesine basmak gerekebilir

  **Projeye Özgü Yapılandırmayı Kullanarak:**

  Proje dizininizde `.cursor/mcp.json` dosyası oluşturun:

  ```json
  {
    "mcpServers": {
      "godot": {
        "command": "npx",
        "args": ["@coding-solo/godot-mcp"],
        "env": {
          "DEBUG": "true"
        }
      }
    }
  }
  ```

  </details>

  <details>
  <summary><strong>Diğer MCP İstemcileri</strong></summary>

  Herhangi bir MCP uyumlu istemci için bu yapılandırmayı kullanın:

  ```json
  {
    "mcpServers": {
      "godot": {
        "command": "npx",
        "args": ["@coding-solo/godot-mcp"],
        "env": {
          "GODOT_PATH": "/path/to/godot",
          "DEBUG": "true"
        }
      }
    }
  }
  ```

  </details>

  ### Ortam Değişkenleri

  | Değişken | Açıklama |
  |----------|----------|
  | `GODOT_PATH` | Godot çalıştırılabilir dosyasının yolu (otomatik algılamayı geçersiz kılar) |
  | `DEBUG` | Ayrıntılı sunucu tarafı hata ayıklama günlüğünü etkinleştirmek için `"true"` olarak ayarlayın |

  <details>
  <summary><strong>Kaynaktan İnşa Etme</strong></summary>

  ```bash
  git clone https://github.com/Coding-Solo/godot-mcp.git
  cd godot-mcp
  npm install
  npm run build
  ```

  Ardından MCP istemcinizi `npx` kullanmak yerine `build/index.js` dosyasına yönlendirin.

  </details>


  ## Mimari

  Godot MCP sunucusu karmaşık işlemler için paketlenmiş bir GDScript yaklaşımı kullanır:

  1. **Doğrudan Komutlar**: Editörü başlatmak veya proje bilgisi almak gibi basit işlemler Godot'un yerleşik CLI komutlarını doğrudan kullanır.
  2. **Paketlenmiş İşlemler Betiği**: Sahneler oluşturmak veya düğümler eklemek gibi karmaşık işlemler tüm işlemleri yöneten tek ve kapsamlı bir GDScript dosyası (`godot_operations.gd`) kullanır.

  Paketlenmiş betik, işlem türü ve parametreleri JSON olarak kabul ederek her işlem için geçici dosyalar oluşturmadan esnek ve dinamik işlem yürütülmesine izin verir.

  ## Sorun Giderme

  - **Godot Bulunamadı**: `GODOT_PATH` ortam değişkenini Godot çalıştırılabilir dosyasının yoluna ayarlayın
  - **Bağlantı Sorunları**: Sunucunun çalıştığından emin olun ve AI asistanınızı yeniden başlatın
  - **Geçersiz Proje Yolu**: Yolun `project.godot` dosyası içeren bir dizine işaret ettiğinden emin olun
  - **İnşa Sorunları**: `npm install` komutunu çalıştırarak tüm bağımlılıkların kurulduğundan emin olun

  <details>
  <summary><strong>Cursor'a Özgü Sorunlar</strong></summary>

  - MCP sunucusunun Cursor ayarlarında göründüğünden ve etkinleştirildiğinden emin olun (Ayarlar > MCP)
  - MCP araçları yalnızca Agent sohbet profili kullanılarak çalıştırılabilir (Cursor Pro veya Business aboneliği)
  - MCP araç isteklerini otomatik olarak çalıştırmak için "Yolo Mode" kullanın

  </details>

  ## Lisans

  Bu proje MIT Lisansı altında lisanslanmıştır - ayrıntılar için [LICENSE](LICENSE) dosyasına bakın.
---

# Godot MCP

[![Github-sponsors](https://img.shields.io/badge/sponsor-30363D?style=for-the-badge&logo=GitHub-Sponsors&logoColor=#EA4AAA)](https://github.com/sponsors/Coding-Solo)

[![](https://badge.mcpx.dev?type=server 'MCP Server')](https://modelcontextprotocol.io/introduction)
[![Made with Godot](https://img.shields.io/badge/Made%20with-Godot-478CBF?style=flat&logo=godot%20engine&logoColor=white)](https://godotengine.org)
[![](https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white 'Node.js')](https://nodejs.org/en/download/)
[![](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white 'TypeScript')](https://www.typescriptlang.org/)

[![](https://img.shields.io/github/last-commit/Coding-Solo/godot-mcp 'Last Commit')](https://github.com/Coding-Solo/godot-mcp/commits/main)
[![](https://img.shields.io/github/stars/Coding-Solo/godot-mcp 'Stars')](https://github.com/Coding-Solo/godot-mcp/stargazers)
[![](https://img.shields.io/github/forks/Coding-Solo/godot-mcp 'Forks')](https://github.com/Coding-Solo/godot-mcp/network/members)
[![](https://img.shields.io/badge/License-MIT-red.svg 'MIT License')](https://opensource.org/licenses/MIT)


```text
                           (((((((             (((((((
                        (((((((((((           (((((((((((
                        (((((((((((((       (((((((((((((
                        (((((((((((((((((((((((((((((((((
                        (((((((((((((((((((((((((((((((((
         (((((      (((((((((((((((((((((((((((((((((((((((((      (((((
       (((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((
     ((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((
    ((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((
      (((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((
        (((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((
         (((((((((((@@@@@@@(((((((((((((((((((((((((((@@@@@@@(((((((((((
         (((((((((@@@@,,,,,@@@(((((((((((((((((((((@@@,,,,,@@@@(((((((((
         ((((((((@@@,,,,,,,,,@@(((((((@@@@@(((((((@@,,,,,,,,,@@@((((((((
         ((((((((@@@,,,,,,,,,@@(((((((@@@@@(((((((@@,,,,,,,,,@@@((((((((
         (((((((((@@@,,,,,,,@@((((((((@@@@@((((((((@@,,,,,,,@@@(((((((((
         ((((((((((((@@@@@@(((((((((((@@@@@(((((((((((@@@@@@((((((((((((
         (((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((
         (((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((
         @@@@@@@@@@@@@((((((((((((@@@@@@@@@@@@@((((((((((((@@@@@@@@@@@@@
         ((((((((( @@@(((((((((((@@(((((((((((@@(((((((((((@@@ (((((((((
         (((((((((( @@((((((((((@@@(((((((((((@@@((((((((((@@ ((((((((((
          (((((((((((@@@@@@@@@@@@@@(((((((((((@@@@@@@@@@@@@@(((((((((((
           (((((((((((((((((((((((((((((((((((((((((((((((((((((((((((
              (((((((((((((((((((((((((((((((((((((((((((((((((((((
                 (((((((((((((((((((((((((((((((((((((((((((((((
                        (((((((((((((((((((((((((((((((((


                          /$$      /$$  /$$$$$$  /$$$$$$$
                         | $$$    /$$$ /$$__  $$| $$__  $$
                         | $$$$  /$$$$| $$  \__/| $$  \ $$
                         | $$ $$/$$ $$| $$      | $$$$$$$/
                         | $$  $$$| $$| $$      | $$____/
                         | $$\  $ | $$| $$    $$| $$
                         | $$ \/  | $$|  $$$$$$/| $$
                         |__/     |__/ \______/ |__/
```

A Model Context Protocol (MCP) server for interacting with the Godot game engine.

## Introduction

Godot MCP enables AI agents to launch the Godot editor, run projects, capture debug output, and control project execution. This direct feedback loop helps agents understand what works and what doesn't in real Godot projects, leading to better code generation and debugging assistance.

## Features

- **Launch Godot Editor**: Open the Godot editor for a specific project
- **Run Godot Projects**: Execute Godot projects in debug mode
- **Capture Debug Output**: Retrieve console output and error messages
- **Control Execution**: Start and stop Godot projects programmatically
- **Get Godot Version**: Retrieve the installed Godot version
- **List Godot Projects**: Find Godot projects in a specified directory
- **Project Analysis**: Get detailed information about project structure
- **Scene Management**:
  - Create new scenes with specified root node types
  - Add nodes to existing scenes with customizable properties
  - Load sprites and textures into Sprite2D nodes
  - Export 3D scenes as MeshLibrary resources for GridMap
  - Save scenes with options for creating variants
- **UID Management** (for Godot 4.4+):
  - Get UID for specific files
  - Update UID references by resaving resources

## Requirements

- [Godot Engine](https://godotengine.org/download) installed on your system
- Node.js (>=18.0.0) and npm
- An AI agent that supports MCP

## Quick Start

### Claude Code

```bash
claude mcp add godot -- npx @coding-solo/godot-mcp
```

That's it. Restart Claude Code and your Godot MCP tools are available.

With environment variables:

```bash
claude mcp add godot -e GODOT_PATH=/path/to/godot -e DEBUG=true -- npx @coding-solo/godot-mcp
```

<details>
<summary><strong>Cline</strong></summary>

Add to your Cline MCP settings file (`~/Library/Application Support/Code/User/globalStorage/saoudrizwan.claude-dev/settings/cline_mcp_settings.json`):

```json
{
  "mcpServers": {
    "godot": {
      "command": "npx",
      "args": ["@coding-solo/godot-mcp"],
      "env": {
        "DEBUG": "true"
      },
      "disabled": false,
      "autoApprove": [
        "launch_editor",
        "run_project",
        "get_debug_output",
        "stop_project",
        "get_godot_version",
        "list_projects",
        "get_project_info",
        "create_scene",
        "add_node",
        "load_sprite",
        "export_mesh_library",
        "save_scene",
        "get_uid",
        "update_project_uids"
      ]
    }
  }
}
```

</details>

<details>
<summary><strong>Cursor</strong></summary>

**Using the Cursor UI:**

1. Go to **Cursor Settings** > **Features** > **MCP**
2. Click on the **+ Add New MCP Server** button
3. Fill out the form:
   - Name: `godot`
   - Type: `command`
   - Command: `npx @coding-solo/godot-mcp`
4. Click "Add"
5. You may need to press the refresh button in the top right corner of the MCP server card to populate the tool list

**Using Project-Specific Configuration:**

Create a file at `.cursor/mcp.json` in your project directory:

```json
{
  "mcpServers": {
    "godot": {
      "command": "npx",
      "args": ["@coding-solo/godot-mcp"],
      "env": {
        "DEBUG": "true"
      }
    }
  }
}
```

</details>

<details>
<summary><strong>Other MCP Clients</strong></summary>

For any MCP-compatible client, use this configuration:

```json
{
  "mcpServers": {
    "godot": {
      "command": "npx",
      "args": ["@coding-solo/godot-mcp"],
      "env": {
        "GODOT_PATH": "/path/to/godot",
        "DEBUG": "true"
      }
    }
  }
}
```

</details>

### Environment Variables

| Variable | Description |
|----------|-------------|
| `GODOT_PATH` | Path to the Godot executable (overrides automatic detection) |
| `DEBUG` | Set to `"true"` to enable detailed server-side debug logging |

<details>
<summary><strong>Building from Source</strong></summary>

```bash
git clone https://github.com/Coding-Solo/godot-mcp.git
cd godot-mcp
npm install
npm run build
```

Then point your MCP client to `build/index.js` instead of using `npx`.

</details>


## Architecture

The Godot MCP server uses a bundled GDScript approach for complex operations:

1. **Direct Commands**: Simple operations like launching the editor or getting project info use Godot's built-in CLI commands directly.
2. **Bundled Operations Script**: Complex operations like creating scenes or adding nodes use a single, comprehensive GDScript file (`godot_operations.gd`) that handles all operations.

The bundled script accepts operation type and parameters as JSON, allowing for flexible and dynamic operation execution without generating temporary files for each operation.

## Troubleshooting

- **Godot Not Found**: Set the `GODOT_PATH` environment variable to your Godot executable path
- **Connection Issues**: Ensure the server is running and restart your AI assistant
- **Invalid Project Path**: Ensure the path points to a directory containing a `project.godot` file
- **Build Issues**: Make sure all dependencies are installed by running `npm install`

<details>
<summary><strong>Cursor-Specific Issues</strong></summary>

- Ensure the MCP server shows up and is enabled in Cursor settings (Settings > MCP)
- MCP tools can only be run using the Agent chat profile (Cursor Pro or Business subscription)
- Use "Yolo Mode" to automatically run MCP tool requests

</details>

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
